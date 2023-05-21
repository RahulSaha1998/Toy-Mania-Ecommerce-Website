import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import user1 from '../../../public/user1.json'
import user2 from '../../../public/user2.json'
import Lottie from "lottie-react";



const CustomerReview = () => {
    return (
        <div>
             <h2 className='font-semibold text-center text-3xl mt-10 mb-3 text-red-600'>Customer Reviews</h2>
             <hr />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
            <div className="card w-96 mx-auto bg-base-200 shadow-xl rounded-lg">
                <div className='w-32 mx-auto'>
                    <Lottie animationData={user2}></Lottie>
                </div>
                <div className="card-body items-center text-center">
                <div className='text-center'>
                        <Rating
                            placeholderRating='5'
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <p>Overall, my experience with this toy shop website was nothing short of exceptional. The wide selection of toys, easy-to-use interface, secure payment system, fast shipping, and outstanding customer service make it a top-notch destination for toy enthusiasts. I highly recommend this website to anyone in search of quality toys and a delightful shopping experience.</p>
                    
                </div>
            </div>
            <div className="card w-96 mx-auto bg-base-200 shadow-xl rounded-lg">
                <div className='w-32 mx-auto'>
                    <Lottie animationData={user1}></Lottie>
                </div>
                <div className="card-body items-center text-center">
                <div className='text-center'>
                        <Rating
                            placeholderRating='4.5'
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <p>Overall, my experience with this toy shop website was nothing short of exceptional. The wide selection of toys, easy-to-use interface, secure payment system, fast shipping, and outstanding customer service make it a top-notch destination for toy enthusiasts. I highly recommend this website to anyone in search of quality toys and a delightful shopping experience.</p>
                    
                </div>
            </div>
            <div className="card w-96 mx-auto bg-base-200 shadow-xl rounded-lg">
                <div className='w-32 mx-auto'>
                    <Lottie animationData={user2}></Lottie>
                </div>
                <div className="card-body items-center text-center">
                <div className='text-center'>
                        <Rating
                            placeholderRating='4'
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <p>Overall, my experience with this toy shop website was nothing short of exceptional. The wide selection of toys, easy-to-use interface, secure payment system, fast shipping, and outstanding customer service make it a top-notch destination for toy enthusiasts. I highly recommend this website to anyone in search of quality toys and a delightful shopping experience.</p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default CustomerReview;