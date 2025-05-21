import React from 'react';
import { Link, useLoaderData } from 'react-router';


const MyBills = () => {
  const data = useLoaderData()
  return (
    <div className='bg-base-200 pb-10'>
      <div className='mb-10 max-w-screen-xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10 text-primary pt-10'>My Bills</h1>

        <div>
          {
            data.map(details => <div key={details.id}>
              <div className="card lg:card-side bg-white p-4 shadow-sm mb-4 ">
                <figure className='w-[200px]'>
                  <img
                    src={details.logo}
                    alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{details.organization}</h2>
                  <h4 className='text-lg capitalize'>{details.bill_type}</h4>

                  <div className="card-actions mt-2 ">
                    <Link to={`/bill-details/${details.id}`}><button className="btn btn-primary text-white text-lg">Pay Bill</button></Link>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>

      </div>
    </div>
  );
};

export default MyBills;