import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysTableBody = ({m_toy, index}) => {

    const { _id, category, price, quantity, details, seller_name, product_name, photoURL } = m_toy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            }
          })
    }

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
                <td className='text-center bg-pink-300'>{product_name}</td>
                <td className='bg-cyan-400 text-center'>{seller_name}</td>
                <td className='bg-pink-300 text-center'>{category}</td>
                <td className='bg-cyan-400 text-center'>{'$' + price}</td>
                <td className='bg-pink-300 text-center'>{quantity}</td>
                <td className=' text-center rounded-lg'><Link to={`/details/${_id}`}>
                    <button onClick={() => handleViewDetails(_id)} className='btn btn-outline btn-danger'>Edit</button>
                </Link></td>
                <td className='b text-center rounded-lg'><Link to={`/details/${_id}`}>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-danger'>Delete</button>
                </Link></td>
            </tr>
        </>
    );
};

export default MyToysTableBody;