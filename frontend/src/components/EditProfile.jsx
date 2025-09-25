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
        gender:userInfo[0].gender || ''
    }
    const [inp,setInp]=useState({...INITIAL_VALUE})
    const [skills,setSkills]=useState([])
    const [newSkills,newSetSkills]=useState('')
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
    
}
// handleskills function
const handleskills = () =>{
    if (newSkills.startsWith(' ')) {
        return alert('str')
    }
    if(newSkills && !skills.includes(newSkills)){
        setSkills([...skills,newSkills])
    }
    newSetSkills('')
}
//handleRemoveSkill function for filtering
const handleRemoveSkill =(skill)=>{
    const currskill = skills.filter(item=> item != skill)
    setSkills(currskill)
}
  return (
    <>
        <div className="w-[600px] absolute overflow-auto  left-[30%] top-[30%] py-10 px-4 rounded-[5px] bg-white z-10 ">
          <Profile/>
          <p onClick={handleIsEdit} className='text-[28px] cursor-pointer text-rose-500 absolute top-0 right-[4px] mt-2'><MdClose/></p>
        <div className='mt-14'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <Inputs onChange={handleChange} text={'First Name'} value={inp.firstName} name={'firstName'} type={'text'} placeholder={'enter your firstName'}/>
                <Inputs onChange={handleChange} text={'Last Name'} value={inp.lastName} name={'lastName'} type={'text'} placeholder={'enter your lastName'}/>
                <Inputs onChange={handleChange} text={'User Name'} value={inp.userName} name={'userName'} type={'text'} placeholder={'enter your userName'}/>
                <Inputs onChange={handleChange} text={'Headline'} value={inp.headline} name={'headline'} type={'text'} placeholder={'enter your headline'}/>
                <Inputs onChange={handleChange} text={'Location'} value={inp.location} name={'location'} type={'text'} placeholder={'enter your location'}/>
                <Inputs onChange={handleChange} text={'Gender'} value={inp.gender} name={'gender'}  type={'text'} placeholder={'gender (male/female/other)'}/>
                <div className={'flex gap-5 flex-wrap items-center'}>
                {
                    skills.map((item,index)=>(
                            <button className='border border-slate-300 text-[#333] cursor-pointer rounded-[5px] px-[8px] py-[6px] shadow-2xl flex gap-3 items-center'>{item} <MdClose className={'text-red-500 font-bold text-[20px]'} onClick={()=>handleRemoveSkill(item)}/> </button>
                    ))
                }
                </div>
                <Inputs onChange={(e)=>newSetSkills(e.target.value)} text={'Skills'} value={newSkills} name={'newSkills'}  type={'text'} placeholder={'add your new skills'}/>
                <ButtonComponent onClick={handleskills} text={'Add Skills'}/>
            </form>
        </div>
        </div>
    </>
  );
}

export default EditProfile
