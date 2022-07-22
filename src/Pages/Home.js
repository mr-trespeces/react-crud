import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
        }
    }


    componentDidMount() {
        this.getEmployeeList()
    }


    getEmployeeList = () => {
        axios.get(`http://localhost:8081/api/v1/employees`)
            .then(res => {
                console.log(res.data)
                this.setState({ employees: res.data });
            })
    }

    deleteById = (id) => {
        axios.delete(`http://localhost:8081/api/v1/employees/${id}`)
            .then(res => {
                let employeeList = this.state.employees.filter(u => {
                    return u._id !== id
                })

                this.setState({ ...this.state, employees: employeeList })
            })
    }

    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Employees</h1>
                <Link to={`/employee/create`}><Button variant="primary" style={{ float: 'right', margin: '20px' }}>Add Employee</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Email</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(employee => (
                                <>
                                    <tr>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <Link to={`/employee/update/${employee._id}`} className="mx-2"><Button>Update</Button></Link>
                                            <Button onClick={() => this.deleteById(employee._id)} variant="danger">Delete</Button>
                                            <Link to={`/employee/view/${employee._id}`} variant="secondary" className="mx-2"><Button>View</Button></Link>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </Table>


            </Container>
        )
    }
}