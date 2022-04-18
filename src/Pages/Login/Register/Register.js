import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/service/:serviceId');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-6 mx-auto">
                    <div className='register-form'>
                        <h2 className='text-center mt-3'>Please Register</h2>
                        <SocialLogin></SocialLogin>
                        <form onSubmit={handleRegister}>
                            <input type="text" name='name' id='' placeholder='Your Name' />
                            <input type="email" name='email' id='' placeholder=' Email Address' required />
                            <input type="password" name='password' id='' placeholder='Inter Password' required />
                            <input className='rounded-pill border border-dark w-50 register-button fw-bold mt-4' type="submit" value="Register Now" />
                        </form>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none fw-bold' onClick={navigateLogin}>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;