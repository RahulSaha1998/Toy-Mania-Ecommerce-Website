import React from 'react';
import Lottie from "lottie-react";
import g2 from '../../../public/g2.json'
import g3 from '../../../public/g3.json'
import g4 from '../../../public/g4.json'
import g6 from '../../../public/g6.json'
import g8 from '../../../public/g8.json'

//Animations swipes with Gallery 

const Animations = () => {
    return (
        <div>
            <h2 className='font-semibold text-center text-3xl mt-10 mb-3 text-red-600'>Gallery</h2>
            <hr />
            <div className='md:flex justify-between'>
                <div className='w-60 mx-auto'>
                    <Lottie animationData={g6}></Lottie>
                </div>
                <div className='w-60 mx-auto'>
                    <Lottie animationData={g8}></Lottie>
                </div>
                <div className='w-60 mx-auto'>
                    <Lottie animationData={g2}></Lottie>
                </div>
                <div className='w-60 mx-auto'>
                    <Lottie animationData={g3}></Lottie>
                </div>
                <div className='w-60 mx-auto'>
                    <Lottie animationData={g4}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Animations;