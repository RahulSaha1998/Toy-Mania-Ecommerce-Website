import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='mt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;