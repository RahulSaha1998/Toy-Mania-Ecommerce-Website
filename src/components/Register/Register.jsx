import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const { registerUser, logOut, updateUserData } = useContext(AuthContext)

    const handelRegister = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        if (password.length < 6) {
            return setError('Password must be greater than 6 characters');
        }

        registerUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(name, photoURL);
                logOut()
                console.log(loggedUser);
                form.reset();
                setError('')
                setSuccess('Successfully Register!');
                // toast('Successfully Register!');
                alert('successfully Register!');

            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Register Here!</h1>
                    <form onSubmit={handelRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"
                                name='name'
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="name"
                                name='photo'
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email"
                                name='email'
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name='password'
                                className="input input-bordered" 
                                required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='text-center mt-2'>
                        {
                            <p className='text-red-700'>{error}</p>
                        }
                        {
                            <p className='text-blue-600'>{success}</p>
                        }
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have an account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;