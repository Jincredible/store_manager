import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import data from "./data/Employees.json"
import {Form, Row, Col, Button} from 'react-bootstrap';
import ReadOnlyRowEmployee from './components/ReadOnlyRowEmployee';
import EditableRowEmployee from './components/EditableRowEmployee';



const Styles = styled.div`
    .app-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 1rem;
    }
    Form {
        margin-bottom: 50px;
    }
  
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th,
    td {
        border: 1px solid #ffffff;
        text-align: left;
        padding: 6px;
        font-size: 14px;
    }
    
    th {
        background-color: rgb(117, 201, 250);
    }
    
    td {
        background-color: rgb(205, 235, 253);
    }
`;

export function Employees () {
    const [employeesData, setEmployees] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        name: '',
        email: '',
        username: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
            id: addFormData.id,
            name: addFormData.name,
            email: addFormData.email,
            username: addFormData.username
        };

        const newEmployees = [...employeesData, newEmployee];

        setEmployees(newEmployees);
    }

    const [editEmployeeId, setEditEmployeeId] = useState(null);

    const handleEditClick = (event, employee) => {
        event.preventDefault();
        setEditEmployeeId(employee.id);

        const formValues = {
            id: employee.id,
            name: employee.name,
            email: employee.email,
            username: employee.username
        }

        setEditFormData(formValues)
    }

    const [editFormData, setEditFormData] = useState({
        id: '',
        name: '',
        email: '',
        username: ''
    })

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedEmployee = {
            id: editFormData.id,
            name: editFormData.name,
            email: editFormData.email,
            username: editFormData.username
        }

        const newEmployees = [...employeesData];
        const index = employeesData.findIndex((employee)=> employee.id === editEmployeeId);

        newEmployees[index] = editedEmployee;

        setEmployees(newEmployees);
        setEditEmployeeId(null);
    };

    const handleCancelClick = () => {
        setEditEmployeeId(null);
    }

    const handleDeleteClick = (employeeId) => {
        const newEmployees = [...employeesData];

        const index = employeesData.findIndex((employee)=> employee.id === employeeId);

        newEmployees.splice(index, 1);

        setEmployees(newEmployees);
    }

    return (
        <Styles>
            <div className="app-container">

                <h2>Add an Employee</h2>
                <Form onSubmit={handleAddFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGroupID">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="enter ID" name="id" onChange={handleAddFormChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter name" name="name" onChange={handleAddFormChange}/>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" name="email" onChange={handleAddFormChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="enter username" name="username" onChange={handleAddFormChange}/>
                    </Form.Group>

                    
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

                <h2>All Employees</h2>
                <form onSubmit={handleEditFormSubmit}> 
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeesData.map((employee) => (
                                <React.Fragment>
                                    {editEmployeeId === employee.id ? (
                                        <EditableRowEmployee editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    ):(
                                        <ReadOnlyRowEmployee employee={employee} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </Styles>
    );
}