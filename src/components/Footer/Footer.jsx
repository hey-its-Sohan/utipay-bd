import React from 'react';
import logo from '../../assets/logo-footer.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';



const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
          <img className='w-[250px] text-white ' src={logo} alt="" />
          <p className="font-bold text-lg text-white mb-2">

            Providing reliable service since 2020
          </p>
          <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex items-center gap-4 text-white">

            <a href="https://www.linkedin.com/in/mahmudul-islam-sohan/"><Linkedin size={32} color="white" fill='white' /></a>
            <a href="https://www.facebook.com/mahmudul.islam.sohan.2025/"><Facebook size={32} color="white" fill='white' /></a>
            <a href=""><Twitter size={32} color="white" fill='white' /></a>
          </div>
        </nav>
      </footer>

    </div>
  );
};

export default Footer;