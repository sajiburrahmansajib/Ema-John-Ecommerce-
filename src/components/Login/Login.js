import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [message, setMessage] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log('Log In', user)
                setError(null)
                setMessage('Successfully Log In')
                form.reset()
            })
            .catch(error => {
                console.error('Error', error)
                setError("Password did Not Match")
            })

    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log In</h1>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <p className='error-info'>{error}</p>
                <p className='message-info'>{message}</p>
                <input className='btn-login' type="submit" value="Log in" />
            </form>
            <p className='message'>New in Ema-John? <Link className='create-new-account' to='/signup'>Create a new account</Link> </p>
        </div>
    );
};

export default Login; 