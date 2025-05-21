import React from 'react';
import { Bolt, Flame, Droplet, Wifi, CreditCard, GraduationCap, Smartphone } from 'lucide-react'
import { Link } from 'react-router';

const iconMap = {
  Bolt,
  Flame,
  Droplet,
  Wifi,
  CreditCard,
  GraduationCap,
  Smartphone
};

const Cards = ({ data }) => {

  return (
    <div className='mb-10 max-w-screen-xl mx-auto'>
      <h1 className='text-center my-10 text-4xl font-bold text-primary'>Manage Your Bills</h1>
      <p className='text-center text-2xl mb-7'>UtiPay BD offers you to pay all your utility bills in single place. Pay your bills <br /> instantly with safety and security.</p>

      <div className='bg-white p-10 rounded-xl shadow-sm'>
        <h1 className='text-3xl font-bold mb-5'>Pay Your Bills</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {
            data.map(card => {
              const Icon = iconMap[card.icon];
              return (
                <div key={card.id} className='py-5 border border-primary rounded-xl shadow hover:shadow-md transition'>
                  <div className=' flex flex-col gap3 items-center mb-3'>
                    <Icon className="w-10 h-10 text-primary" />
                    <div>
                      <h3 className='text-lg font-semibold capitalize'>{card.bill_type}</h3>
                    </div>

                  </div>

                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;