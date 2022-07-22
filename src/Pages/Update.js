import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
        this.id = window.location.pathname.split('/')[3]

    }

    componentDidMount() {
        this.getEmployeeById()
    }

    getEmployeeById() {
        axios.get(`http://localhost:8081/api/v1/employees/${this.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    emailId: res.data.emailId,
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
            emailId: this.state.emailId
        }
        axios.put(`http://localhost:8081/api/v1/employees/${this.id}`, updated)
            .then(res => {
                console.log(res.data)
            })
    }



    render() {
        return (
            <Container style={{ marginTop: '100px', textAlign: '-webkit-center' }}>
                <h1 className='mb-5'>Update Employee</h1>
                <Form>
                    <Form.Group className="mb-3 w-50">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control placeholder="Employee First Name" name="firstname" defaultValue={this.state.firstname} onChange={this.readInput} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Employee Last Name" name="lastname" defaultValue={this.state.lastname} onChange={this.readInput} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='email' placeholder="Employee Email" name="emailId" defaultValue={this.state.emailId} onChange={this.readInput} />
                    </Form.Group>

                    <Link to={`/`}><Button onClick={() => this.updateEmployee()} style={{ margin: '30px'}}>Update Employee</Button></Link>
                    <Link to={`/`}><Button variant="danger" style={{ margin: '30px' }}>Cancel</Button></Link>

                </Form>
            </Container>
        )
    }
}