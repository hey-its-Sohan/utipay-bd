import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const UpdateProfile = () => {
  const { user, refreshUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    }).then(() => {
      return refreshUser(); // ✅ force refresh
    }).then(() => {
      toast.success('Profile updated!');
      navigate('/my-profile');
    }).catch(err => {
      toast.error('Update failed');
      console.error(err);
    });

  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <form onSubmit={handleUpdate} className="fieldset">
            <h1 className='text-3xl font-bold text-center'>Update Info</h1>
            <label className="label text-xl mt-2 text-black">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input"
              placeholder="New Name"
            />
            <label className="label text-xl text-black">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              className="input"
              placeholder="New Photo URL"
            />
            <button className="btn btn-primary text-lg text-white my-2">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;