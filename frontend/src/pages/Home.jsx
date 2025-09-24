import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserInfo, isEdit } from '../redux/features/userSlice'
import EditProfile from '../components/EditProfile'
const Home = () => {
  const userInfo = useSelector((state)=>state.users)
  const isOpen = useSelector((state)=>state.isEdit)
  // const [isOpen,setIsOpen]=useState(false)

  console.log('isdata',userInfo.length);
  
  const dispatch = useDispatch()
  useEffect(()=>{
      const res= getUser()
      res.then((user)=>{
        dispatch(addUserInfo(user.data.user))
      }).catch(err=>{
        console.log(err);
      })
  },[])
 async function getUser(){
  try {
    const res = await axios.get('http://localhost:4000/api/user/currentuser',{
      withCredentials:true
    }) 
    return res
  } catch (error) {
    console.log(error);
  }
  
 }

  return (
    <>
    {isOpen &&

      <div className="absolute top-0 left-0 w-screen h-[100vh] overflow-auto z-0 opacity-[0.8] bg-[#00000085]">
        <EditProfile/>
      </div>
      }
    </>
  )
}

export default Home 
