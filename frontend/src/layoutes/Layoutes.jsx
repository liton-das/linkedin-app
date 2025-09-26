import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import LeftSideNav from '../components/LeftSideNav'
import RightSideNavbar from '../components/RightSideNavbar'

const Layoutes = () => {
  
  return (
    <>
      <Navbar />
      <div className='container pt-6'>
        <div className='flex justify-between gap-5'>
          <LeftSideNav />
            <Outlet />
          <RightSideNavbar />
        </div>
      </div>
    </>
  );
}

export default Layoutes
