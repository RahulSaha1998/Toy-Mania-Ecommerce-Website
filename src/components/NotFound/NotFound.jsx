import React from 'react';
import errorPage from '../../../public/errorPage.json'
import Lottie from "lottie-react";


const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <Lottie animationData={errorPage}></Lottie>
                <h2 className='text-center font-bold text-red-600 text-4xl'>404 Page Not Found!</h2>
            </div>
        </div>
    );
};

export default NotFound;