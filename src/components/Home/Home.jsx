import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../hooks/useTitile';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

    const { user, loading } = useContext(AuthContext);
    useTitle('Home')

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div data-aos ="fade-right">
                <Banner></Banner>
            </div>
            <div data-aos ="fade-left">
                <Gallery></Gallery>
            </div>
            <div data-aos ="fade-down">
                <CategoryTab></CategoryTab>
            </div>
        </div>
    );
};

export default Home;