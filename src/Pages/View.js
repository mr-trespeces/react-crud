import React, { Component } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
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
    }

    componentDidMount() {
        this.getEmployeeById()
    }

    getEmployeeById() {
        const id = window.location.pathname.split('/')[3]
        axios.get(`http://localhost:8081/api/v1/employees/${id}`)
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
            <Container style={{ marginTop: '100px', backgroundColor: 'cyan', padding: '10px' }}>
                <h1>Employee Details</h1>
                <Row className='mt-5'>
                    <Col className='text-end'>
                        <h4>First Name:</h4>
                        <h4>Last Name: </h4>
                        <h4>Email: </h4>
                    </Col>
                    <Col className='text-start'>
                        <h4>{this.state.firstname}</h4>
                        <h4>{this.state.lastname}</h4>
                        <h4>{this.state.emailId}</h4>
                    </Col>
                </Row>
                <Link to={`/`}><Button variant="primary" style={{ margin: '30px' }}>Home</Button></Link>
            </Container>
        )
    }
}