import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';

const Home = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2>Hello from home</h2>
        </div>
    );
};

export default Home;