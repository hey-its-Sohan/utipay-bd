import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import userPhoto from '../../assets/user-photo.png'
import { SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router';

const UserProfile = () => {
  const { user } = use(AuthContext)
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='relative w-80 mx-auto'>
        <img className='w-full rounded-lg' src={user?.photoURL || userPhoto} alt="User" />
        <Link to='/update-profile'><SquareArrowOutUpRight
          className='absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md'
          size={28}
          color="#D6005D"
        /></Link>
      </div>
      <h2 className='text-center text-4xl font-bold my-5'>{user?.displayName}</h2>
      <h2 className='text-center text-4xl font-bold mb-20'>{user?.email}</h2>
    </div>
  );
};

export default UserProfile;