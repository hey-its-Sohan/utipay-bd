import React from 'react';
import logo from "../../assets/UtiPay-logo-removebg.png"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Item 1</a>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div>
            <img className='w-40' src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to='/' className={({ isActive }) => isActive ? "mr-4 border-b-2 border-primary pb-1 font-bold" : "pb-1 mr-4"
            }><li className='text-lg '>Home</li></NavLink>
            <NavLink to='/my-bills' className={({ isActive }) => isActive ? "mr-4 border-b-2 border-primary pb-1 font-bold" : "pb-1 mr-4"
            }><li className='text-lg '>
                Bills
              </li></NavLink>
            <li className='text-lg'>My Profile</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link to='/login'><button className='btn btn-outline btn-primary mr-3 '>Login</button></Link>
            <button className='btn btn-outline btn-primary mr-3 '>Register</button>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='ml-2 mb-1 font-medium'>
                Profile
              </li>
              <li className='ml-2 font-medium mb-1'>10000</li>
              <li className='ml-2 font-medium'>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;