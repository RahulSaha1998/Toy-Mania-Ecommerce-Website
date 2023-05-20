import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Update = () => {
    const toy = useLoaderData();
    const { _id, price, quantity, details } = toy;

    const { user } = useContext(AuthContext);

    const handleUpdatedToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseInt(form.price.value);
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updatedToy = { 
            price,  
            quantity, 
            details 
        };

        fetch(`http://localhost:5000/toys/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount> 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }


    return (
        <div className='bg-slate-300 rounded-lg shadow-cl mt-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Update Your Toy</h2>
                <div className="divider"></div>
            </div>
            <form onSubmit={handleUpdatedToy}  className='w-[80%] mx-auto '>
                <div className='grid grid-cols-2 gap-5'>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Product Price"
                            name='price'
                            className="input input-bordered"
                            defaultValue={price}
                            />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="Quantity"
                            name='quantity'
                            className="input input-bordered"
                            defaultValue={quantity}
                            />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" placeholder="Describe about your toys..."
                        name='details'
                        className="input input-bordered"
                        defaultValue={details}
                        />
                </div>
                <div className="form-control mt-6 text-center">
                    <input className="btn btn-block btn-primary mb-6" type="submit" value='Update Toy' />
                </div>
            </form>
        </div>
    );
};

export default Update;