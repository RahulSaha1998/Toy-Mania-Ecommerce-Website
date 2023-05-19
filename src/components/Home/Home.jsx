import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';

const Home = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <CategoryTab></CategoryTab>
            </div>
        </div>
    );
};

export default Home;