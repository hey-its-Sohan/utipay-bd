import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Header/Navbar';

const Error = () => {
  return (
    <div>
      <Navbar className='max-w-screen-xl mx-auto'></Navbar>
      <div className='shadow-xl rounded-2xl p-10 w-1/4 mx-auto my-7'>
        <img src="/error.jpg" alt="" />
      </div>
      <h1 className='font-extrabold text-4xl text-center text-rose-500 mb-7'>404 - Page Not Found</h1>
      <h4 className='text-center text-lg'>Oops! The page you're looking for doesn't exist.</h4>
      <div className='text-center'>
        <Link to='/'><button className=" btn btn-primary text-white cursor-pointer px-5 py-1 rounded-lg my-7 text-xl font-bold">Go Back Home</button></Link>
      </div>
    </div>
  );
};

export default Error;