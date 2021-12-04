import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom' 


export default class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            firstname: '',
            lastname: '',
            emailId: ''
        }
        this.readInput = this.readInput.bind(this);
    }


    readInput(event) {
        this.setState({[event.target.name] : event.target.value})
        event.preventDefault();
    }

    //Create New Employee
    createNewEmployee = () => {
        const newEmployee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailId: this.state.emailId
        }
        console.log(newEmployee)
        axios.post("http://localhost:8081/api/v1/employees",  newEmployee )
            .then(res => console.log(res))
    }


    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Add Employee</h1>
                <Form  style={{ margin: '50px' }}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Employee First Name" name="firstname"  onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employee Last Name" name="lastname"  onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employee Email" name="emailId"  onChange={this.readInput} />
                        </Col>
                    </Row>
                    <Button style={{ margin: '30px', float: 'right', backgroundColor: 'red', borderStyle: 'none' }}>Cancel</Button>
                    <Button onClick={this.createNewEmployee} style={{ margin: '30px', float: 'right' }}>Add Employee</Button>
                </Form>
            </Container>
        )
    }
}