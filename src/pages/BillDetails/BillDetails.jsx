import React, { use } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
const BillDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const navigate = useNavigate();
  const singleDetail = data.find(detail => detail.id == id)
  const { deductBalance } = use(AuthContext);

  const handlePay = () => {
    if (isPaid) {

      toast.error('This bill has already been paid.');
      console.log('paid');
      navigate('/my-bills');
      return;
    }
    const updatedPaid = [...paidBills, id];
    localStorage.setItem('paidBills', JSON.stringify(updatedPaid));
    deductBalance(singleDetail.amount);
    toast.success('Bill Paid Successfully');
    navigate('/my-bills');
  };

  const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
  const isPaid = paidBills.includes(id.toString());

  if (!singleDetail) {
    return (
      <div className='my-32'>
        <h1 className='text-4xl font-extrabold text-center my-7'>No Bill Data Found !!!</h1>
        <h4 className='text-xl text-gray-500 text-center mb-7'>No Bill details Found. Please check the correct path. </h4>

        <div className='text-center'>
          <Link to='/'><button className=" btn btn-primary text-white cursor-pointer px-5 py-1 rounded-lg  text-xl font-extrabold">Go Back to Home</button></Link>
        </div>
      </div >
    )
  }
  return (
    <div className='bg-base-200'>
      <div className='max-w-screen-xl mx-auto py-16'>
        <div className="card lg:card-side bg-white p-4 shadow-sm mb-4 ">
          <figure className='w-[270px]'>
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
              <button
                onClick={handlePay}

                className={`btn text-white text-lg ${isPaid ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'}`}
              >{isPaid ? 'Already Paid' : 'Pay Now'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;