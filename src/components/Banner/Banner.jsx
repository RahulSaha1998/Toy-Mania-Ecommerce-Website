import React from 'react';
import Lottie from "lottie-react";
import g4 from '../../../public/g4.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Banner = () => {

    const handleExplore= () => {
        toast("Let's Explore The Website!!");
      };

    return (
      <div className='md:grid grid-cols-2 justify-center p-5 card bg-slate-100 rounded-lg'>
      <div className='m-5'>
          <div className='lg:mt-20 lg:grid grid-rows-1 justify-center'>
              <h4 className='text-start text-4xl font-semibold'>Toys Can Make <br /> Our Childhood <br /> <span className='text-red-600'>Memorable!</span></h4>
              <p className='mt-3 text-start'>
              Toys are important, formative components in children's lives. They entertain as well as teach, and they may do both with positive and negative consequences.
              </p>
              <div className='text-start mt-3'>
                  <button onClick={handleExplore} className="btn btn-info">Lets Explore</button>
              </div>
          </div>
      </div>
      <div className='text-center'>
          <div className='sm:mt-5 md:mt-0 lg:py-5 mx-auto'>
              {/* <img className='rounded-lg' src="https://i.ibb.co/qBbb4gq/vintage-miniature-car-fake-landscape.jpg" alt="" /> */}
              <Lottie animationData={g4}></Lottie>
          </div>
      </div>
      <ToastContainer position="top-center"/>
  </div>
    );
};

export default Banner;