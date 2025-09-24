import React, { useState } from 'react'
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { isEdit } from '../redux/features/userSlice';
import { MdClose } from "react-icons/md";
import Inputs from './form-groupComponents/Inputs';
import ButtonComponent from './ButtonComponent';
const EditProfile = () => {
    const isOpen = useSelector((state)=>state.isEdit)
    const userInfo = useSelector((state)=>state.users)
    let INITIAL_VALUE = {
        firstName:userInfo[0].firstName || '',
        lastName:userInfo[0].lastName||'',
        userName:userInfo[0].userName || '',
        headline:userInfo[0].headline || '',
        location:userInfo[0].location||'',
        gender:userInfo[0].gender || '',
        skills:userInfo[0].skills || [],
        newSkills:""
    }
    const [inp,setInp]=useState({...INITIAL_VALUE})
const dispatch = useDispatch()
    //  handleIsEdit
const handleIsEdit=()=>{
  dispatch(isEdit(!isOpen))
}
// handleChange
const handleChange=(e)=>{
    setInp((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
}
// handleSubmit 
const handleSubmit=(e)=>{
    e.preventDefault()
    if(inp.newSkills && !inp.skills.includes(inp.newSkills)){
        setInp(...inp.skills,inp.newSkills)
    }
    setInp(inp.newSkills)
    console.log(inp);
    
}
// handleskills function
// const handleskills = () =>{
    
    
// }
  return (
    <>
        <div className="w-[600px] absolute overflow-auto  left-[30%] top-[30%] py-10 px-4 rounded-[5px] bg-white z-10 ">
          <Profile/>
          <p onClick={handleIsEdit} className='text-[28px] cursor-pointer text-rose-500 absolute top-0 right-[30px] mt-2'><MdClose/></p>
        <div className='mt-14'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <Inputs onChange={handleChange} text={'First Name'} value={inp.firstName} name={'firstName'} type={'text'} placeholder={'enter your firstName'}/>
                <Inputs onChange={handleChange} text={'Last Name'} value={inp.lastName} name={'lastName'} type={'text'} placeholder={'enter your lastName'}/>
                <Inputs onChange={handleChange} text={'User Name'} value={inp.userName} name={'userName'} type={'text'} placeholder={'enter your userName'}/>
                <Inputs onChange={handleChange} text={'Headline'} value={inp.headline} name={'headline'} type={'text'} placeholder={'enter your headline'}/>
                <Inputs onChange={handleChange} text={'Location'} value={inp.location} name={'location'} type={'text'} placeholder={'enter your location'}/>
                <Inputs onChange={handleChange} text={'Gender'} value={inp.gender} name={'gender'}  type={'text'} placeholder={'gender (male/female/other)'}/>
                <Inputs onChange={handleChange} text={'Skills'} value={inp.newSkills} name={'newSkills'}  type={'text'} placeholder={'add your new skills'}/>
                
                <ButtonComponent text={'Add Skills'}/>
            </form>
        </div>
        </div>
    </>
  );
}

export default EditProfile
