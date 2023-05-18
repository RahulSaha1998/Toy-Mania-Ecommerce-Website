import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTableBody from './MyToysTableBody';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[])

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
                        <MyToysTableBody key={m_toy._id} index={index} m_toy={m_toy} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;