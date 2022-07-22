import React, { Component } from 'react'
import { Container, Form, Button, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault();
    }

    //Create New Employee
    createNewEmployee = () => {
        const newEmployee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailId: this.state.emailId
        }
        axios.post("http://localhost:8081/api/v1/employees", newEmployee)
            .then(res => console.log(res))
            .catch(error => console.log(error.response.data))
    }


    render() {
        return (
            <Container style={{ marginTop: '100px' , textAlign: '-webkit-center' }}>
                <h2 className='mb-5'>Add Employee</h2>

                <Form>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control placeholder="Employee First Name" name="firstname" onChange={this.readInput} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Employee Last Name" name="lastname" onChange={this.readInput} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='email' placeholder="Employee Email" name="emailId" onChange={this.readInput}  />
                    </Form.Group>

                    <Link to={`/`}><Button onClick={() => this.createNewEmployee()} style={{ margin: '30px' }}>Add</Button></Link>
                    <Link to={`/`}><Button variant="danger" style={{ margin: '30px' }}>Cancel</Button></Link>
                </Form>
            </Container>
        )
    }
}