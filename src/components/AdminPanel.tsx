import React from 'react'
import AdminSidebar from './AdminSidebar'

export let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
};

function AdminPanel() {
    return (
        <>
            <AdminSidebar></AdminSidebar>
        </>
    )
}

export default AdminPanel
