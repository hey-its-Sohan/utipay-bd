import React from 'react';
import about from '../../assets/business-plan-concept.jpg'

const AboutUs = () => {
  return (
    <div className='mb-10 max-w-screen-xl mx-auto '>
      <h1 className='text-center my-10 text-4xl font-bold text-primary'>About Us</h1>
      <div className="hero bg-white rounded-xl p-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={about}
            className="w-[250px] md:max-w-md rounded-lg "
          />
          <div>
            <p className='md:text-xl text-center'>UtiPay BD is a modern digital platform designed to simplify utility bill payments across Bangladesh. Our mission is to bring all your essential services—electricity, gas, water, internet, and more—   into one secure, user-friendly dashboard. Whether you're at home or on the go, UtiPay BD ensures fast, safe, and hassle-free transactions. We believe in transparency, reliability, and empowering users through technology.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;