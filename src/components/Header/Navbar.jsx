import React, { use } from 'react';
import logo from "../../assets/UtiPay-logo-removebg.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

  const { user, signOutUser } = use(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {

      })
      .catch(error => {

      })
  }

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
              <NavLink to='/' className={({ isActive }) => isActive ? "mr-4 border-b-2 border-primary pb-1 font-bold" : "pb-1 mr-4"
              }><li className='mb-2 px-2 '>Home</li></NavLink>
              <NavLink to='/my-bills' className={({ isActive }) => isActive ? "mr-4 border-b-2 border-primary pb-1 font-bold" : "pb-1 mr-4"
              }><li className='mb-2 px-2 '>
                  Bills
                </li></NavLink>
              <NavLink>
                <li className='mb-2 px-2'>My Profile</li>
              </NavLink>
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
            <NavLink>
              <li className='text-lg'>My Profile</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? <div className='mr-3 text-lg font-medium'>{user.email}</div> : <div className='flex'>
            <Link to='/login'><button className='btn btn-outline btn-primary mr-2 md:mr-3 px-2 md:px-5 '>Login</button></Link>
            <Link to='/register'><button className='btn btn-outline btn-primary mr-3 px-2 md:px-5'>Register</button></Link>
          </div>}

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
              <li className='ml-2 mb-2 font-medium'>
                Profile
              </li>
              <li className='ml-2 font-medium mb-2'>10000</li>
              <li onClick={handleSignOut} className='ml-2 font-medium mb-2'>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;