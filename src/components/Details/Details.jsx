import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const toy = useLoaderData();
    console.log(toy);
    const { _id, category, price, quantity, details, seller_name, product_name, photoURL, email, rating } = toy;

    return (

        <div className="card hero-content flex-col lg:flex-row w-full bg-base-100 shadow-xl">
            <img className='sm:w-full md:w-[50%] rounded-lg' src={photoURL} />
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-600'>Product:</span>{product_name}</h2>
                <h2><span className='text-red-600 font-bold'>Seller:</span> <span className='font-bold'>{seller_name}</span></h2>
                <h2><span className='text-red-600 font-bold'>Email:</span> <span className='font-bold'>{email}</span></h2>
                <h2><span className='text-red-600 font-bold'>Available Quantity:</span> <span className='font-bold'>{quantity}</span></h2>
                <h2><span className='text-red-600 font-bold'>Price:</span> <span className='font-bold'>{'$' + price}</span></h2>
                <h2><span className='text-red-600 font-bold'>Details:</span> <span className='font-bold'>{details}</span></h2>
        
                <div className='flex'>
                <h2><span className='text-red-600 font-bold'>Ratings:</span> </h2>
                    <div className='flex justify-start mt-1'>
                        <div className='mx-2'>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>
                        <div>
                            {rating}
                        </div>
                    </div>
                </div>
                    


                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;