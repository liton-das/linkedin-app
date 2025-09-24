import React from 'react'
import { CiCamera } from 'react-icons/ci';

const Profile = () => {
  return (
    <div>
      <div className="flex justify-between cursor-pointer w-full h-20 p-3 bg-slate-400 rounded-[5px] relative">
        <img className="w-full" src="" alt="cover-img" />
        <span className="text-[24px] text-white shadow-2xl">
          <CiCamera />
        </span>
        <div className="w-20 h-20 absolute top-[30px] rounded-full overflow-hidden bg-slate-200">
          <img src="" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Profile
