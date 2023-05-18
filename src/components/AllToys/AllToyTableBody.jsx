import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTableBody = ({ toy, index }) => {
    const { _id, category, price, quantity, details, seller_name, product_name } = toy;

    const handleViewDetails = (_id) => {
        console.log(_id);
    }

    return (
        <>
            {/* row 1 */}
            <tr className='font-bold'>
                <td className='bg-cyan-400 rounded-lg text-center'>{index + 1}</td>
                <td className='bg-pink-300 text-center'>{seller_name}</td>
                <td className='text-center bg-cyan-400'>{product_name}</td>
                <td className='bg-pink-300 text-center'>{category}</td>
                <td className='bg-cyan-400 text-center'>{'$' + price}</td>
                <td className='bg-pink-300 text-center'>{quantity}</td>
                <td className='bg-cyan-400 text-center rounded-lg'><Link to={`/details/${_id}`}>
                <button onClick={() => handleViewDetails(_id)} className='btn btn-outline btn-danger'>View Details</button>
                </Link></td>
            </tr>
        </>

    );
};

export default AllToyTableBody;