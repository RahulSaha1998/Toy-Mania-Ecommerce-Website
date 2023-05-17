import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-100% bg-slate-200 rounded-lg shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src="https://i.ibb.co/KyqnByG/vintage-miniature-car-fake-landscape.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Welcome To Toys World!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Let's Explore</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;