import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto row mb-3'>

                <small>Or SignIn by google</small>
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-outline-danger"> <i className="bi bi-google"></i> Google</button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;