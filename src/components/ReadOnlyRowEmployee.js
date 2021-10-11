import React from 'react'
import styled from 'styled-components'
import icon01edit from '../assets/icon01edit.svg'


const Styles = styled.div`
    #editbutton {
        background-image: url(${icon01edit});
        background-repeat: no-repeat;
        height: 25px;
        width: 25px
        border: none;
    }
`;

const ReadOnlyRowEmployee = ({employee, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.username}</td>
            <td>
                <button type="button" id= "editbutton" onClick={(event) => handleEditClick(event, employee)}>Edit</button>
                <button type="button" id= "deletebutton" onClick={() => handleDeleteClick(employee.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowEmployee;