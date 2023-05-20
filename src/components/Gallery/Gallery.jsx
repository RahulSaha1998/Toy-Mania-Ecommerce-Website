import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Marquee from "react-fast-marquee";


const Gallery = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-3xl mt-5'>Gallery</h2>
            <hr />
            <div >

                <Marquee>
                    <div className='flex justify-between gap-2 mt-5'>
                        <div className='border-red-400 border-4 rounded-lg p-5'>
                            <img className='w-52 rounded-lg' src="https://i.ibb.co/z2b9DPq/Alison-C22826-battery-operated-Scissors-door-electric-1.jpg" alt="" />
                            <div>
                                <h2 className='text-2xl text-center font-bold text-red-600'>Lambo_R2s</h2>
                                <div className='text-center'>
                                    <Rating
                                        placeholderRating='5'
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='border-red-400 border-4 rounded-lg p-5'>
                            <img className='w-52 rounded-lg' src="https://i.ibb.co/qs3RwC4/71l-Ikdq3-WSL.jpg" alt="" />
                            <h2 className='text-2xl text-center font-bold text-red-600'> Ferrari_A32</h2>
                            <div className='text-center'>
                                <Rating
                                    placeholderRating='4.5'
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                        </div>
                        <div className='border-red-400 border-4 rounded-lg p-5'>
                            <img className='w-52 rounded-lg' src="https://i.ibb.co/M7TwKDY/Hc4e9879f4be245fea4af4314dbc264413.webp" alt="" />
                            <h2 className='text-2xl text-center font-bold text-red-600'> Audi_RS800</h2>
                            <div className='text-center'>
                                <Rating
                                    placeholderRating='4'
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                        </div>
                        <div className='border-red-400 border-4 rounded-lg p-5'>
                            <img className='w-52 rounded-lg' src="https://i.ibb.co/42RLkGT/6000202519289.jpg" alt="" />
                            <h2 className='text-2xl text-center font-bold text-red-600'> Booster_A2s</h2>
                            <div className='text-center'>
                                <Rating
                                    placeholderRating='4.5'
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                        </div>
                        <div className='mx-2'>
                            <div className='border-red-400 border-4 rounded-lg p-5'>
                                <img className='w-52 rounded-lg' src="https://i.ibb.co/J278R85/licensed-lamborghini-ride-on-car.webp" alt="" />
                                <h2 className='text-2xl text-center font-bold text-red-600'> Ducati_53S2</h2>
                                <div className='text-center'>
                                    <Rating
                                        placeholderRating='4.5'
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;