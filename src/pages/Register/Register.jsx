import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form className="fieldset">
            <h1 className='text-3xl font-bold'>Register Now</h1>
            <label className="label text-xl mt-2">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            <label className="label text-xl mt-2">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover text-lg">Forgot password?</a></div>
            <button className="btn btn-neutral my-2">Login</button>
            <p className='text-lg'>Already have an account? <Link to='/login' className='text-[#D6005D] text-lg underline'>Login</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;