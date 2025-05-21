import React from 'react';
import { useLoaderData } from 'react-router';

const MyBills = () => {
  const data = useLoaderData()
  return (
    <div className='mb-10 max-w-screen-xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mt-5 text-primary'>My Bills</h1>

    </div>
  );
};

export default MyBills;