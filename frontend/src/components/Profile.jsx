import React from 'react'
import { CiCamera } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userInfo = useSelector(state=>state.users)
  return (
    <div>
      <div className=" relative">
        <div className=' w-full h-20 flex justify-between cursor-pointer outline-2 overflow-hidden outline-slate-400 rounded-[5px]'>
          <img className="w-full flex justify-center items-center" src={userInfo[0]?.coverImg} alt="cover-img" />
        </div>
        <span className="text-[24px] text-white absolute top-[16px] right-[16px] shadow-2xl">
          <CiCamera />
        </span>
        <div className="w-16 h-16 flex justify-center items-center outline-4 outline-slate-500 absolute top-[50px] left-[10px] rounded-full overflow-hidden bg-slate-200">
          <img className='w-full' src={userInfo[0]?.profileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Profile
