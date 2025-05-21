import React from 'react';


const Cards = ({ data }) => {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-center my-10 text-4xl font-bold'>Manage Your Bills</h1>
      <p className='text-center text-2xl mb-7'>UtiPay BD offers you to pay all your utility bills in single place. Pay your bills <br /> instantly with safety and security.</p>
      <div>
        {
          data.map(card => <div>
            <img src={card.icon} alt="" />
            <h3>{card.organization}</h3>
          </div>)
        }
      </div>
    </div>
  );
};

export default Cards;