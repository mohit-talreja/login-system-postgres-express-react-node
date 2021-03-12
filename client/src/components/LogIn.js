import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        authUser({ email, password })
        setEmail('')
        setPassword('')
    }

    const authUser = async (user) => {
        try {
            const res = await axios.post('http://localhost:1000/login', user)
            const { token } = res.data
            localStorage.setItem('token', token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Log In</h3>
            </div>
            <div className="card-body">
                <form onSubmit={ onSubmit }>
                    <div>
                        <input type="email" placeholder="Enter Email" value={ email } onChange={ e => setEmail(e.target.value) } required />
                    </div>
                    <div className="mt-2">
                        <input type="password" placeholder="Enter Password" value={ password } onChange={ e => setPassword(e.target.value) } required />
                    </div>
                    <button type="submit"  className="btn btn-primary btn-sm mt-2">LogIn</button>
                </form>
            </div>
            <div className="card-footer">
                <p className="card-text">Don't have an account? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    )
}

export default LogIn