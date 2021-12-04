import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'


export default class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            emailId: '',
            id: ''
        }
    }

    componentDidMount() {
        this.getEmployeeById()
    }

    getEmployeeById(id) {
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


    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Employee Details</h1>
                <h3 className={'mt-5'}>First Name: {this.state.firstname}</h3>
                <h3>Last Name: {this.state.lastname}</h3>
                <h3>Email: {this.state.emailId}</h3>
            </Container>
        )
    }
}