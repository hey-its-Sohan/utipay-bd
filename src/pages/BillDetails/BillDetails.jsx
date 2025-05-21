import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BillDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const singleDetail = data.find(detail => detail.id == id)

  if (!singleDetail) {
    return (
      <div className='my-32'>
        <h1 className='text-4xl font-extrabold text-center my-7'>No Bill Data Found !!!</h1>
        <h4 className='text-xl text-gray-500 text-center mb-7'>No Lawyer Found with this License No- </h4>
        <div className='flex items-center gap-2 mb-7 justify-center'>

          <h4 className='text-2xl text-gray-700 text-center font-extrabold'></h4>
        </div>
        <div className='text-center'>
          <Link to='/'><button className=" bg-[#0EA106] text-white cursor-pointer px-5 py-1 rounded-lg  text-xl font-extrabold">View All Lawyers</button></Link>
        </div>
      </div >
    )
  }
  return (
    <div className='bg-base-200'>
      <div className='max-w-screen-xl mx-auto py-16'>
        <div className="card lg:card-side bg-white p-4 shadow-sm mb-4 ">
          <figure className='w-[200px]'>
            <img
              src={singleDetail.logo}
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{singleDetail.organization}</h2>
            <h4 className='text-lg capitalize'>{singleDetail.bill_type}</h4>
            <div className='md:flex gap-5'>
              <h4 className='text-lg'>Amount: {singleDetail.amount} BDT</h4>
              <h4 className='text-lg '>Due Date: {singleDetail.due_date}</h4>
            </div>
            <h4 className='text-lg'>Select Bank Card</h4>
            <select defaultValue="Pick a text editor" className="select select-primary">
              <option disabled={true}>Choose a card</option>
              <option>BRAC Bank</option>
              <option>DBBL</option>
              <option>Prime Bank</option>
            </select>


            <div className="card-actions mt-2 ">
              <Link to='/my-bills'><button className="btn btn-primary text-white text-lg">Pay Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;