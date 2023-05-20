import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {

    const { user } = useContext(AuthContext);

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

        fetch('http://localhost:5000/toys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(addedToy)
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
        <div className='bg-slate-300 rounded-lg shadow-cl mt-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Add Your Toy</h2>
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
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" placeholder="Sub-category"
                            name='category'
                            className="input input-bordered"
                            required />
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
                        <input type="text" placeholder="Rating"
                            name='rating'
                            className="input input-bordered"
                            required />
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
                    <input className="btn btn-block btn-primary mb-6" type="submit" value='Add Toy' />
                </div>
            </form>
        </div>
    );
};

export default AddToy;