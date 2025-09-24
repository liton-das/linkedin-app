import React, { useState } from 'react'
import { isEdit } from '../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
const LeftSideNav = () => {
    const userInfo = useSelector((state)=>state.users)
    const isOpen = useSelector((state)=>state.isEdit)
    const dispatch = useDispatch()
    
    // console.log(userInfo[0].firstName);
    // handleEdit 
    const handleEdit = () => {
        dispatch(isEdit(!isOpen))
    }
  return (
    <div className=''>
      <div onClick={handleEdit} className="w-60 bg-white border border-slate-200 rounded-[5px]">
        <Profile/>
        <div className="mt-7 p-3">
          <h1 className='mb-2'>{userInfo[0]?.firstName} {userInfo[0]?.lastName}</h1>
          <p>MERN Stack Developer in Training | JavaScript | React | Node.js |</p>
          <p>Doha</p>
          <p>companay</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSideNav
