import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysTableBody = ({ m_toy, handelDelete }) => {

    const { _id, category, price, quantity, details, seller_name, product_name, photoURL } = m_toy;


    return (
        <>
            {/* row 1 */}
            <tr className='font-bold'>
                {/* <td className='bg-cyan-400 rounded-lg text-center'>{index + 1}</td> */}
                <td className='text-center'>
                    <div className='avatar'>
                        <div className='rounded w-24'>
                            {photoURL && <img src={photoURL} alt="" />}
                        </div>
                    </div>

                </td>
                <td className='text-center'>{product_name}</td>
                <td className='text-center'>{seller_name}</td>
                <td className='text-center'>{category}</td>
                <td className='text-center'>{'$' + price}</td>
                <td className='text-center'>{quantity}</td>
                <td className='text-center rounded-lg'>
                    <Link to={`/update/${_id}`}>
                    <button onClick={() => handleViewDetails(_id)} className='btn btn-outline btn-danger'>Edit</button>
                </Link></td>
                <td className='b text-center rounded-lg'>
                    <button onClick={() => handelDelete(_id)} className='btn btn-outline btn-danger'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default MyToysTableBody;