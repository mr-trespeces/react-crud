import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useParams  } from 'react-router-dom'


export default class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            emailId: '',
            id: ''
        }
        this.readInput = this.readInput.bind(this);
    }

    componentDidMount() {
        this.getEmployeeById()
    }

    getEmployeeById() {
        axios.get(`http://localhost:8081/api/v1/employees/61aad323276df287e8e5b98b`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    emailId: res.data.emailId,
                    id: res.data._id    
                })
            })
    }

    readInput(event) {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault();
    }

    updateEmployee = () => {
        const updated = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.emailId
        }
        axios.put(`http://localhost:8081/api/v1/employee/${this.state.id}`, updated)
            .then(res => {
                console.log(res.data)
            })
    }
    


    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Update Employee</h1>
                <Form style={{ margin: '50px' }}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Employee Name" name="firstname" defaultValue={this.state.firstname} onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employee Email" name="lastname" defaultValue={this.state.lastname} onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employee Email" name="emailId" defaultValue={this.state.emailId} onChange={this.readInput} />
                        </Col>
                    </Row>
                    <Button onClick={() => this.updateEmployee()} style={{ margin: '30px', float: 'right' }}>Update Employee</Button>
                </Form>
            </Container>
        )
    }
}