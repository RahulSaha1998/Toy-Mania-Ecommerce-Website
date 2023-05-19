import React from 'react';
import Lottie from "lottie-react";
import g1 from '../../../public/g1.json'
import g2 from '../../../public/g2.json'
import g3 from '../../../public/g3.json'
import g4 from '../../../public/g4.json'
import g5 from '../../../public/g5.json'
import g6 from '../../../public/g6.json'
import g8 from '../../../public/g8.json'


const Gallery = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-3xl mt-5'>Gallery</h2>
            <hr />
            <div className='flex justify-between'>
                <div className='w-52'>
                    <Lottie animationData={g6}></Lottie>
                </div>
                <div className='w-52'>
                    <Lottie animationData={g8}></Lottie>
                </div>
                <div className='w-52'>
                    <Lottie animationData={g2}></Lottie>
                </div>
                <div className='w-52'>
                    <Lottie animationData={g3}></Lottie>
                </div>
                <div className='w-52'>
                    <Lottie animationData={g4}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Gallery;