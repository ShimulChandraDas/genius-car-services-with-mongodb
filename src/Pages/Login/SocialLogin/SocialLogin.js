import React from 'react';
import google from '../../../images/social/g-logo.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, loading1, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;


    if (loading || loading1) {
        return <Loading />
    }
    if (error || githubError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>

    }


    if (user || githubError) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-item-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'> or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div >
            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>GithubSign In</span>
                </button>

            </div>
        </div>

    );
};

export default SocialLogin;