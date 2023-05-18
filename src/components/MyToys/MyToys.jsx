import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTableBody from './MyToysTableBody';
import Swal from 'sweetalert2';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/myToys?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[])


    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure that you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(mt => mt._id !== _id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="overflow-x-auto shadow-xl">
            <div className='text-center text-3xl font-bold mb-5'>
                <h2>All Toys</h2>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        {/* <th className='text-center'>Serial</th> */}
                        <th className='text-center'>Toy photo</th>
                        <th className='text-center'>Toy Name</th>
                        <th className='text-center'>Seller Name</th>
                        <th className='text-center'>Sub-Category</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Edit</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myToys.map((m_toy, index) => (
                        <MyToysTableBody 
                        key={m_toy._id} 
                        index={index} 
                        m_toy={m_toy} 
                        handelDelete={handelDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;