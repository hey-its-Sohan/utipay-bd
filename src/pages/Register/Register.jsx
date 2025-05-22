
import React, { use } from 'react';
import { Link } from 'react-router';

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

  const { createUser } = use(AuthContext)

  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    createUser(email, password)
      .then(result => {
        toast.success('Account Created Successfully')
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <h1 className='text-3xl font-bold'>Register Now</h1>
            <label className="label text-xl mt-2">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label text-xl mt-2">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />

            <button className="btn btn-primary text-lg text-white my-2">Register</button>
            <p className='text-lg'>Already have an account? <Link to='/login' className='text-[#D6005D] text-lg underline'>Login</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;