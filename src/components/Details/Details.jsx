import React from 'react';
import { FaArrowLeft, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {

    const toy = useLoaderData();
    console.log(toy);
    const { _id, category, price, quantity, details, seller_name, product_name, photoURL, email, rating } = toy;

    const handleFavoriteButton = () => {
        toast("WOW! The Toy is as Sweet as You!");
      };

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
                <div className='flex justify-between mt-10'>
                        <button onClick={handleFavoriteButton} className="btn btn-outline btn-error gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Make Favourite
                        </button>
                        <Link to='/'>
                            <button className="btn btn-primary gap-2"><FaArrowLeft />Back To Home</button>
                        </Link>
                    </div>
                    <ToastContainer />
            </div>
        </div>
    );
};

export default Details;