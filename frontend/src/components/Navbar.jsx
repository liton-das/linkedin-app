import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import Logo from '../assets/linkedin.jpg'
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useSelector } from 'react-redux'
import network from '../assets/network.svg'
import jobs from '../assets/jobs.svg'
import messaging from '../assets/messaging.svg'
import notify from '../assets/notify.svg'
import business from '../assets/business.svg'
import primium from '../assets/primium.svg'
import { FaCaretDown } from "react-icons/fa";
import axios from 'axios';
const Navbar = () => {
  const [isShow,setShow]=useState(false)
  const userInfo = useSelector((state)=>state.users)
  
  const navigate = useNavigate()
  useEffect(()=>{
    
    if(userInfo.length == 0){
        navigate('/signIn')
      }
  },[userInfo, navigate])
  // handleShow function 
  const handleShow=()=>{
    setShow(!isShow)
  }
  const handleLogOut=async()=>{
  
    navigate('/signIn')
     try {
       await axios.get('http://localhost:4000/api/auth/logOut',{withCredentials:true})
     } catch (error) {
      console.log(error);
      
     }
    console.log('hello');
  }
 
  return (
    <nav className=" bg-white border-b border-slate-200">
      <div className="container py-[5px]">
        <div className="flex items-center gap-30">
          <div className="flex items-center gap-2">
            <div className="w-10 overflow-hidden">
              <img className="w-full" src={Logo} alt="logo" />
            </div>
            <div className="w-70 h-[35px] px-[10px] flex items-center border border-slate-300 outline-none rounded-[22px]">
              <FaSearch className="mr-2 text-[#333]" />
              <input
                type="search"
                className="w-full outline-none text-[#333]"
                placeholder="Search"
              />
            </div>
          </div>
          <ul className="flex items-center gap-10">
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                `${
                  isActive ? "border-b text-red-300 border-red-400" : "border-none"
                }flex flex-col items-center text-[13px]`;
              }}
            >
              <IoHome className="text-2xl" />
              Home
            </NavLink>
            <NavLink to={"/mynetwork"} className={"flex flex-col items-center text-[13px]"}>
              <img src={network} alt="network-icon" />
              My Network
            </NavLink>
            <NavLink to={"/jobs"} className={"flex flex-col items-center text-[13px]"}>
              <img src={jobs} alt="jobs-icon" />
              Jobs
            </NavLink>
            <NavLink to={"/massaging"} className={"flex flex-col items-center text-[13px]"}>
              <img src={messaging} alt="messaging-icon" />
              Massaging
            </NavLink>
            <NavLink to={"/notifications"} className={"flex flex-col items-center text-[13px]"}>
              <img src={notify} alt="notify-icon" />
              Notifications
            </NavLink>
            <div
              className={"flex flex-col items-center border-r border-slate-300 pr-5 relative"}
            >
              <div 
              onClick={handleShow} className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden cursor-pointer">
                <img className="w-full" src={userInfo[0]?.profileImg} alt="img" />
              </div>
              <span className="flex items-center text-[13px]">
                {userInfo[0]?.firstName}
                <FaCaretDown />
              </span>
              {isShow && (
                <div className="bg-white shadow-2xl rounded-[5px] w-[255px] p-2 border border-slate-200 absolute top-[62px] right-[20px]">
                  <div className="w-full">
                    <div className="border-b border-slate-300 py-3">
                      <div className='flex ga-4'>
                        <div className="w-12 h-12 outline-2 outline-slate-500 overflow-hidden rounded-full bg-slate-400">
                          <img className="w-full" src={userInfo[0]?.profileImg} alt="profile" />
                        </div>
                        <div className="w-3/4 flex items-center ml-2">
                          <p className="text-[13px] text-shadow-black">
                            {userInfo[0]?.lastName}
                          </p>
                        </div>
                      </div>
                      <div className='flex justify-between items-center mt-3'>
                        <button className='bg-white border border-slate-500 rounded-[10px] w-[110px] h-[25px] justify-center items-center cursor-pointer'>view profile</button>
                        <button className=' rounded-[10px] w-[110px] h-[25px] justify-center items-center bg-blue-500 text-white cursor-pointer'>verify</button>
                      </div>
                    </div>
                    <button onClick={handleLogOut} className='mt-3 rounded-[10px] flex justify-center items-center w-[110px] h-[25px] bg-red-500 text-white cursor-pointer'>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className={"flex flex-col items-center pl-0"}>
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img className="w-full" src={business} alt="business-icon" />
              </div>
              <span className="flex items-center text-[13px]">
                Me
                <FaCaretDown />
              </span>
            </div>
            <NavLink to={"/user"} className={"flex flex-col items-center pl-0"}>
              <div className="w-[24px] h-[24px] bg-amber-200 overflow-hidden">
                <img className="w-full" src={primium} alt="primium-icon" />
              </div>
              <span className="flex items-center text-[13px]">
                Try Premium for QAR0
                <FaCaretDown />
              </span>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
