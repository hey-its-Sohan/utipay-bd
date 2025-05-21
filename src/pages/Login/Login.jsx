import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  console.log('object');
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form className="fieldset">
            <h1 className='text-3xl font-bold'>Login</h1>
            <label className="label text-xl mt-2">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover text-lg">Forgot password?</a></div>
            <button className="btn btn-primary text-lg text-white my-2">Login</button>
            <p className='text-lg'>Don't have an account? <Link to='/register' className='text-primary text-lg underline'>Register Now</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;