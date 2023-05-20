import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../hooks/useTitile';

const Home = () => {

    const { user, loading } = useContext(AuthContext);
    useTitle('Home')


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Gallery></Gallery>
            </div>
            <div>
                <CategoryTab></CategoryTab>
            </div>
        </div>
    );
};

export default Home;