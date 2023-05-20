import React from 'react';
import Lottie from "lottie-react";
import g4 from '../../../public/g4.json'


const Banner = () => {
    return (
      <div className='md:grid grid-cols-2 justify-center p-5 card shadow-xl bg-slate-100'>
      <div className='m-5'>
          <div className='lg:mt-20 lg:grid grid-rows-1 justify-center'>
              <h4 className='text-start text-4xl font-semibold'>Toys Can Make <br /> Our Childhood <br /> <span className='text-cyan-500'>Memorable!</span></h4>
              <p className='mt-3 text-start'>
              Toys are important, formative components in children's lives. They entertain as well as teach, and they may do both with positive and negative consequences.
              </p>
              <div className='text-start mt-3'>
                  <button className="btn btn-info">Lets Explore</button>
              </div>
          </div>
      </div>
      <div className='text-center'>
          <div className='sm:mt-5 md:mt-0 lg:py-5 mx-auto'>
              {/* <img className='rounded-lg' src="https://i.ibb.co/qBbb4gq/vintage-miniature-car-fake-landscape.jpg" alt="" /> */}
              <Lottie animationData={g4}></Lottie>
          </div>
      </div>
  </div>
    );
};

export default Banner;