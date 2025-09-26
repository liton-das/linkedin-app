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
          {
            userInfo.map((item,i)=>(
              <div key={i}>
                <p className='text-slate-600 capitalize'>{item?.userName}</p>
                <p className='text-slate-600 capitalize'>{item?.headline}</p>
                <div className='flex gap-2 flex-wrap'>
                  {
                    item.skills.map((item,index)=>(
                     
                      <span className='text-slate-500'>{item}</span>
                    ))
                  }
                </div>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default LeftSideNav
