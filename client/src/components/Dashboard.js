import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Dashboard = () => {

    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <div>
            <h1>DashBoard</h1>
            <Link to="/logout">LogOut</Link>
        </div>
    )
}

export default Dashboard