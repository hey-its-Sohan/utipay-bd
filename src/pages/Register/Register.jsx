
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import { updateProfile } from 'firebase/auth';

const Register = () => {

  const { createUser } = use(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()

  const [errorMessage, setErrorMessage] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const photoURL = e.target.photoURL.value
    setErrorMessage('')


    const passwordValidation = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordValidation.test(password) === false) {
      setErrorMessage('Password must contain at least one uppercase, one lowercase letter and be at least 6 characters long.')
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          toast.success('Account Created Successfully');
          navigate(location?.state || '/');
        }).catch(err => {
          setErrorMessage('Profile update failed.');
        });
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <h1 className='text-3xl font-bold text-center'>Register Now</h1>
            <label className="label text-xl mt-2">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label text-xl mt-2">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label text-xl mt-2">Photo URL</label>
            <input type="text" name='photoURL' className="input" placeholder="URL" />
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
            {errorMessage && <p className='text-primary'>{errorMessage}</p>}

            <button className="btn btn-primary text-lg text-white my-2">Register</button>
            <p className='text-lg'>Already have an account? <Link to='/login' className='text-[#D6005D] text-lg underline'>Login</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;