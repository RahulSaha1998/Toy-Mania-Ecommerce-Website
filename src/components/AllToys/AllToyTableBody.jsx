import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaArrowRight } from 'react-icons/fa';


const AllToyTableBody = ({ toy, index }) => {

    const { _id, category, price, quantity, photoURL, seller_name, product_name } = toy;

    const { user } = useContext(AuthContext);

    const handleViewDetails = (_id) => {
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
        <>
            {/* row 1 */}
            <tr className='font-bold'>
                <td className='rounded-lg text-center'>{index + 1}</td>
                <td className='text-center'>
                <div className='avatar'>
                        <div className='rounded w-24'>
                            {photoURL && <img src={photoURL} alt="" />}
                        </div>
                    </div>
                </td>
                <td className='text-center '>{product_name}</td>
                <td className='text-center'>{seller_name}</td>
                <td className='text-center'>{category}</td>
                <td className='text-center'>{'$' + price}</td>
                <td className='text-center'>{quantity}</td>
                <td className='text-center rounded-lg'><Link to={`/details/${_id}`}>
                    <button onClick={() => handleViewDetails(_id)} className='btn btn-info gap-2'>View Details<FaArrowRight /></button>
                </Link></td>
            </tr>
        </>

    );
};

export default AllToyTableBody;