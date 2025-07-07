import React, { useContext } from 'react';
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const TabCard = ({ r_data }) => {

    const { _id, category, price, quantity, details, seller_name, product_name, photoURL, email, rating } = r_data;

    const {user} = useContext(AuthContext);


    const handleDetails = (_id) => {
        console.log(_id);
        {
            !user &&
            Swal.fire({
                position: 'top-bottom',
                icon: 'error',
                title: 'Your have to login first!',
                showConfirmButton: false,
                timer: 1500
              })
        
        }
    }


    return (
        <div>
            <div className="card w-full h-full bg-slate-100 shadow-xl rounded-lg">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="Shoes" className="rounded-xl h-52" />
                    {
                        console.log(photoURL)
                    }
                </figure>
                <div className="card-body items-center text-center">


                    <h2 className="card-title"><span className='text-red-600'>Product:</span>{product_name}</h2>
                    <h2><span className='text-red-600 font-bold'>Price:</span> <span className='font-bold'>{'$' + price}</span></h2>

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
                    
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}>
                            <button onClick={() => handleDetails(_id)} className='btn btn-info gap-2'>View Details <FaArrowRight/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;