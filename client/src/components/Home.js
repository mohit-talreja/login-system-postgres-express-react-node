import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <Link to="/signup">SignUp</Link>
            </div>
            <div>
                <Link to="/login">LogIn</Link>
            </div>
            <div>
                <Link to="/dashboard">DashBoard</Link>
            </div>
        </div>
    )
}

export default Home