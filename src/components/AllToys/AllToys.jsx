import React, { useContext, useEffect, useState } from 'react';
import AllToyTableBody from './AllToyTableBody';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';

const AllToys = () => {

    const { user, loading } = useContext(AuthContext);
    const loadedToys = useLoaderData();
    
    const [searchText, setSearchText] = useState('');
    const [toys, setToys] = useState(loadedToys);


    if (loading) {
        return <Loader></Loader>
    }

    const handleSearch = () => {   
        fetch(`http://localhost:5000/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
        }


    return (
        <div className="overflow-x-auto shadow-xl">
            <div className='text-center text-3xl font-bold mb-5'>
                <h2>All Toys</h2>
            </div>
            <div className='text-center my-5'>
                <input type="text" placeholder="Search Here"
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered" />{" "}
                <button onClick={handleSearch} className='btn btn-info'>Search</button>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='text-center'>Serial</th>
                        <th className='text-center'>Seller Name</th>
                        <th className='text-center'>Toy Name</th>
                        <th className='text-center'>Sub-Category</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Available Quantity</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy, index) => (
                        <AllToyTableBody key={toy._id} index={index} toy={toy} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;

