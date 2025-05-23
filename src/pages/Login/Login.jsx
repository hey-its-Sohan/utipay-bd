import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {

  const { signInUser, googleSignIn } = use(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    signInUser(email, password)
      .then(result => {
        toast.success('Login Successfull!')
        navigate(location?.state || '/')
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        toast.success('Login Successfull!')
        navigate(location?.state || '/')
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
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <label className="label text-xl mt-2">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <div className='relative'>
              <input type={showPass ? 'text' : 'password'}
                name='password' className="input" placeholder="Password" />
              <button
                onClick={() => { setShowPass(!showPass) }}
                className='absolute top-2 right-7 cursor-pointer hover:bg-base-300 rounded-full'>
                {showPass ? <Eye color="#D6005D" /> : <EyeOff color="#D6005D" />}
              </button>
            </div>
            <div><a className="link link-hover text-lg">Forgot password?</a></div>
            <button className="btn btn-primary text-lg text-white mt-2">Login</button>
            <div className="divider  text-lg text-accent my-2">Or</div>
            <button onClick={handleGoogleLogin} className="btn outline outline-primary text-lg">
              <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
            <p className='text-lg mt-2'>Don't have an account? <Link to='/register' className='text-primary text-lg hover:underline'>Register Now</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;