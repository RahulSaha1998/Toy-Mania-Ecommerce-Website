import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        {/* {user?.email ? <>
            <li>
                <div className='w-24 rounded-full'>
                    <img src={user?.photoURL} alt="" className='rounded-full' />
                </div>
            </li>
            <li><button className='btn btn-primary' onClick={handleLogOut}>Log out</button></li>
        </>
            : <li> <Link to="/login">Login</Link> </li>
        } */}


    </>

    return (
        <div className="navbar h-28 mb-4 bg-purple-400 rounded-lg shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <img className='w-16 rounded-lg' src='https://i.ibb.co/LR43VfL/ab26d80c8ad3a107eaf53b11b9fd9797.jpg' alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=' flex items-center gap-4'>
                    {
                        user?.email ? <>

                            <div className=' w-12 mt-1'>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className='rounded-full' src={user?.photoURL} alt="" />
                                </div>
                            </div>

                            <button className='btn btn-outline' onClick={handleLogOut}>Log out</button>
                        </>
                            : <Link to="/login"><button className='btn btn-outline'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;