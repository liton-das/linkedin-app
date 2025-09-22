import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserInfo } from '../redux/features/userSlice'
const Home = () => {
  const userInfo = useSelector((state)=>state.users)
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
      <h1></h1>
    </>
  )
}

export default Home
