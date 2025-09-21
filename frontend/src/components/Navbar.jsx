import React from 'react'
import { NavLink } from 'react-router'
import Logo from '../assets/linkedin.jpg'
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className=" bg-white border-b border-slate-200">
      <div className="container py-[12px]">
        <div className='flex items-center gap-30'>
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
          <ul className='flex items-center gap-5'>
            <NavLink to={'/'} className={'flex flex-col items-center'}>
                <IoHome className='text-2xl'/>
                Home
            </NavLink>
            <NavLink to={'/mynetwork'}>
                myNetwork
            </NavLink>
            <NavLink to={'/jobs'}>
                Jobs
            </NavLink>
            <NavLink to={'/massaging'}>
                Massaging
            </NavLink>
            <NavLink to={'/notifications'}>
                Notifications
            </NavLink>
            <NavLink to={'/user'}>
                Me
            </NavLink>
            <NavLink to={'/'}>
                Home
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
