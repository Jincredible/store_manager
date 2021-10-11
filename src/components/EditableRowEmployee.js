import React from 'react'

const EditableRowEmployee = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td><input type="text" required="required" placeholder="id" name="id" value={editFormData.id} onChange={handleEditFormChange}></input></td>
            <td><input type="text" required="required" placeholder="name" name="name" value={editFormData.name} onChange={handleEditFormChange}></input></td>
            <td><input type="email" required="required" placeholder="email" name="email" value={editFormData.email} onChange={handleEditFormChange}></input></td>
            <td><input type="text" required="required" placeholder="username" name="username" value={editFormData.username} onChange={handleEditFormChange}></input></td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRowEmployee;
