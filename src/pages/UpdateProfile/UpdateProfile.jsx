import React from 'react';

const UpdateProfile = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shadow-sm">
          <div className="card-body">
            <form className="fieldset">
              <h1 className='text-3xl font-bold'>Update Info</h1>
              <label className="label text-xl mt-2 text-black">Name</label>
              <input type="text" name='name' className="input" placeholder="New Name" />
              <label className="label text-xl text-black">Photo URL</label>
              <input type="text" name='photoUrl' className="input" placeholder="URL" />
              <button className="btn btn-primary text-lg text-white my-2">Update</button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpdateProfile;