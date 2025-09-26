import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUserInfo, isEdit } from '../redux/features/userSlice'
import EditProfile from '../components/EditProfile'
import { FaRegImage } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Posts from '../components/Posts'

import ButtonComponent from '../components/ButtonComponent'
const Home = () => {
  const userInfo = useSelector((state)=>state.users)
  const isOpen = useSelector((state)=>state.isEdit)
  const [isPostOpen,setIsPostOpen]=useState(false)
  const [isPosted,setIsposted]=useState(false)
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
let postFile = useRef()
// handleIsPostOpen 
const handleIsPostOpen=()=>{
  setIsPostOpen(!isPostOpen)
}
// post photo state
const [postImg,setPostImg]=useState(null)
const [backendPostImg,setBackendPostImg]=useState(null)
const [textInp,setTextInp]=useState('')
const handlePostImg=(e)=>{
  const filePath = e.target.files[0]
  setBackendPostImg(filePath)
  const url = URL.createObjectURL(filePath)
  setPostImg(url)
}
const handleCreatePost=async()=>{
  setIsposted(true)
 try {
  let formData = new FormData()
  formData.append('description',textInp)
  formData.append('image',backendPostImg)
    const createPost = await axios.post('http://localhost:4000/post/createpost',formData,{
    withCredentials:true
  })
  setIsposted(false)
  setIsPostOpen(!isPostOpen)
  console.log(createPost.data);
  
 } catch (error) {
  console.log(error);
  
 }
  
}
  return (
    <>
        {
          isPostOpen &&
          <div className='w-screen h-screen top-0 left-0 absolute bg-[#000000d7] opacity-[9]'>

        </div>
        }

    <div className='flex flex-col'>
    {isOpen &&

      <div className="absolute top-0 left-0 w-screen h-[100vh] overflow-auto z-10 opacity-[9] bg-[#000000c3]">
        <div className='w-[600px] flex justify-center items-center px-4  rounded-[5px] bg-white '>
          <EditProfile/>
        </div>
      </div>
      }
        <div onClick={handleIsPostOpen} className='shadow-2xl border border-slate-200 rounded-[5px] w-full px-4 py-[8px] mb-2'>
            <div className='flex items-center gap-5'>
              <div className='w-20 h-20 rounded-full overflow-hidden outline-2 outline-sky-500 flex justify-center items-center'>
                <img className='w-full' src={userInfo[0]?.profileImg} alt="profile-img" />
              </div>
                <button className='w-[400px] h-10 cursor-pointer rounded-[10px] text-gray-500 text-start outline-none border border-slate-200 px-[14px]'>Start a post</button>
            </div>
        </div>
        { isPostOpen &&
          <div className='absolute top-[10%] left-[30%] w-[500px] shadow-2xl border border-slate-200 bg-white  rounded-[5px]  px-4 py-[8px] mb-2'>
          <div onClick={handleIsPostOpen} className='absolute top-[30px] right-[30px]'>
            <IoMdClose className='text-[28px] text-rose-500 cursor-pointer'/>
          </div>
            <div className='flex items-center gap-5 mb-3'>
              <div className='w-20 h-20 rounded-full overflow-hidden outline-2 outline-sky-500 flex justify-center items-center'>
                <img className='w-full' src={userInfo[0]?.profileImg} alt="profile-img" />
              </div>
              <p>userName</p>
            </div>
              <div className='pt-3'>
                <textarea name='description' value={textInp} onChange={(e)=>setTextInp(e.target.value)} className='outline-none border-none px-[10px] rounded-[5px] w-full text-gray-800'  rows={'8'}></textarea>
                <div className='w-[450px] h-40 flex justify-center items-center overflow-hidden rounded-[5px] my-3'>
                  { postImg &&
                    <img className='w-full' src={postImg} alt="img-icon" />
                  }
                  <input onChange={handlePostImg} type="file" hidden ref={postFile} />
                </div>
                <div className='flex justify-between items-center'>
                  <button onClick={()=>postFile.current.click()} className='text-[28px] text-sky-400 cursor-pointer'><FaRegImage/></button>
                  {
                    !isPosted ?
                    <ButtonComponent onClick={handleCreatePost} text={'Post'}/>:
                    <ButtonComponent onClick={handleCreatePost} text={'Posting.......'}/>
                  }
                </div>
              </div>
          </div>
        }
      <div>
         <Posts/>
      </div>
    </div>
  </>
  )
}

export default Home 
