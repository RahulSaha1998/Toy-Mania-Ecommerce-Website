import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const toy = useLoaderData();
    console.log(toy);
    const { _id, category, price, quantity, details, seller_name, product_name, photoURL } = toy;

    return (
        <div className="h-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photoURL} className="lg:max-w-[50%] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product_name}</h1>
                    <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab perspiciatis voluptates nostrum, temporibus nobis deserunt ipsum animi repellat velit delectus sapiente quo sequi sint facere explicabo exercitationem totam dolorum saepe!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Details;