import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)

        if (password.length < 6) {
            setError('Password Should be 6 character or more')
            return;
        }
        if (password !== confirm) {
            setError('Your Password did not Match')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError(null)
                setMessage('Successfully Sign Up')
                form.reset()
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <p className='error-info'>{error}</p>
                    <p className='message-info'>{message}</p>
                    <button className='btn-login' type="submit">Sign Up</button>
                </form>
                <p className='message'>Already have an account? <Link className='create-new-account' to='/login'>Log In</Link> </p>
            </div>


        </div>
    );
};

export default SignUp;