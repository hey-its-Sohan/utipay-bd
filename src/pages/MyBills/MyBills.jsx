import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const MyBills = () => {
  const data = useLoaderData();
  const [filter, setFilter] = useState('All');

  const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];


  const filteredData = data.filter(bill => {
    const billType = bill.bill_type.toLowerCase();
    const selected = filter.toLowerCase();

    if (selected === 'all') return true;

    if (['electricity', 'water', 'internet', 'gas'].includes(selected)) {
      return billType === selected;
    } else {
      return !['electricity', 'water', 'internet', 'gas'].includes(billType);
    }
  });
  return (
    <div className='bg-base-200 pb-10'>
      <div className='mb-10 max-w-screen-xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10 text-primary pt-10'>My Bills</h1>


        <div className="text-center mb-6">
          <select
            className="select select-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Internet">Internet</option>
            <option value="Gas">Gas</option>
            <option value="Others">Others</option>
          </select>
        </div>


        <div>
          {filteredData.length === 0 ? (
            <h2 className="text-center text-xl text-gray-500">No bills found for this category.</h2>
          ) : (
            filteredData.map(details => {
              const isPaid = paidBills.includes(details.id.toString());
              return (
                <div key={details.id} className="card lg:card-side bg-white p-4 shadow-sm mb-4">
                  <figure className='w-[200px]'>
                    <img src={details.logo} alt="Bill Logo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">
                      {details.organization} {isPaid && <span className="text-green-600">✅</span>}
                    </h2>
                    <h4 className='text-lg capitalize'>{details.bill_type}</h4>
                    <div className="card-actions mt-2">
                      <Link to={`/bill-details/${details.id}`}>
                        <button
                          className="btn btn-primary text-white text-lg"
                          disabled={isPaid}
                        >
                          {isPaid ? 'Paid' : 'Pay Bill'}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBills;
