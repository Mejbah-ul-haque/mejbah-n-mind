import React from 'react';
import google from '../../../Images/Social/google.png';
import facebook from '../../../Images/Social/facebook.jpg';
import github from '../../../Images/Social/github.jpg';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>

    }

    if (user || user1) {
        navigate('/service/:id');
    }
    return (
        <div>
            <div className='text-center d-flex justify-content-center my-4'>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    
                    className='btn border rounded mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                </button>
                <button
                    className='btn border rounded mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={facebook} alt="" />
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn border rounded mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={github} alt="" />
                </button>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 p-2 text-danger'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;