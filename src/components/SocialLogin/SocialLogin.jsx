import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const { signInWGoogle,
    } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWGoogle()
        .then(result => {
            console.log(result.user);
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))

    }


    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">
                    <FaGoogle className='m-1' />
                    signin with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;