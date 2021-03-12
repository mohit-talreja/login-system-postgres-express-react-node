import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {

    localStorage.removeItem('token')

    return (
        <div>
            <h4>You have logged out from the application.</h4>
            <Link to="/login">LogIn</Link>
        </div>
    )
}

export default LogOut