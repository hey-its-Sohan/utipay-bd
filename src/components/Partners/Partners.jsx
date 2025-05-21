import React from 'react';
import des from '../../assets/desco-logo.png'
import nes from '../../assets/nesco-logo.png'
import gp from '../../assets/grameenphone-logo.png'
import bkash from '../../assets//Bkash-Logo.png'
import brac from '../../assets/brac_bank.png'
import dot from '../../assets/dot-internet.jpg'

const Partners = () => {
  return (
    <div className=' max-w-screen-xl mx-auto '>
      <h1 className='text-center my-10 text-4xl font-bold text-primary'>Sponsers</h1>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-3 bg-white p-7 md:p-3 rounded-xl '>
        <div><img className='h-40' src={des} alt="" /></div>
        <div><img className='h-40' src={nes} alt="" /></div>
        <div><img className='h-40' src={gp} alt="" /></div>
        <div><img className='h-40' src={bkash} alt="" /></div>
        <div><img className='h-40' src={brac} alt="" /></div>
        <div><img className='h-40' src={dot} alt="" /></div>

      </div>
    </div>
  );
};

export default Partners;