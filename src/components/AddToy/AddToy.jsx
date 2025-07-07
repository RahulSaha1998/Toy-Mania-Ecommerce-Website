import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitile';

const AddToy = () => {

    const { user } = useContext(AuthContext);
    useTitle('Add a Toy')


    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const seller_name = user?.displayName;
        const email = user?.email;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const addedToy = {
            product_name: name,
            photoURL,
            seller_name,
            email,
            category,
            price,
            rating,
            quantity,
            details
        };
        console.log(addedToy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data) 
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className='bg-slate-200 rounded-lg shadow-xl mt-5'>
            <div className='text-center'>
            <h2 className='font-semibold text-center text-3xl text-red-600'>Add Toys</h2>
            <hr />
                <div className="divider"></div>
            </div>
            <form onSubmit={handleAddToy} className='w-[80%] mx-auto '>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name"
                            name='name'
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL"
                            name='photo'
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder={user?.displayName}
                            name='s_name'
                            className="input input-bordered"
                            readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" placeholder={user?.email}
                            name='email'
                            className="input input-bordered"
                            readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered"
                        name='category'
                        required>
                            <option disabled selected>Select Category</option>
                            <option>car</option>
                            <option>bike</option>
                            <option>truck</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Product Price"
                            name='price'
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select className="select select-bordered"
                        name='rating'
                        required>
                            <option disabled selected>Ratings</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>4.5</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="Quantity"
                            name='quantity'
                            className="input input-bordered"
                            required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" placeholder="Describe about your toys..."
                        name='details'
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control mt-6 text-center">
                    <input className="btn btn-block btn-info mb-6" type="submit" value='Add Toy' />
                </div>
            </form>
        </div>
    );
};

export default AddToy;