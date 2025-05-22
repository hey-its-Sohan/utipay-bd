import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

  const { signInUser } = use(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    signInUser(email, password)
      .then(result => {
        toast.success('Login Successfull!')
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <h1 className='text-3xl font-bold'>Login</h1>
            <label className="label text-xl mt-2">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
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