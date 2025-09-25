import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEdit } from '../redux/features/userSlice';
import { MdClose } from "react-icons/md";
import Inputs from './form-groupComponents/Inputs';
import ButtonComponent from './ButtonComponent';
import { CiCamera } from 'react-icons/ci';
const educationField = {
  collage: "",
  degree: "",
  fieldOfStudy: "",
};
const EXPERIENCE_VALUE= {
  title: '',
  company: '',
  decription: '',
};
const EditProfile = () => {
    const isOpen = useSelector((state)=>state.isEdit)
    const userInfo = useSelector((state)=>state.users)
    const [educationInp,setEducationInp]=useState({...educationField})
    const [experienceInp,setExperienceInp]=useState({...EXPERIENCE_VALUE})
    const [experiences,setExperiences]=useState([])
    const [education,setEducation]=useState([])

    let coverImg=useRef()
    let profileImg=useRef()
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
// handleEducation
const handleEducation=(e)=>{
    setEducationInp((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
}
// handleExperience function
const handleChangeExperience =(e)=>{
    setExperienceInp((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))

}
const handleAddEducation=()=>{
    const {collage,degree,fieldOfStudy}=educationInp
    let data={
        collage:collage,
        degree:degree,
        fieldOfStudy:fieldOfStudy
    }
    if(educationInp && !education.includes(educationInp)){
        setEducation([data,...education])
    }
    setEducationInp('')    
}


// state for img
const [coverPhoto,setCoverPhoto]=useState(null)
const [profilePhoto,setProfilePhoto]=useState(null)
// handleCoverImg
const handleCoverImg=(e)=>{
    const getFile = e.target.files[0]
    console.log(getFile);
    const url = URL.createObjectURL(getFile)
    setCoverPhoto(url)
}

// handleProfileImg
const handleProfileImg=(e)=>{
    const getFile=e.target.files[0]
    const photoUrl = URL.createObjectURL(getFile)
    setProfilePhoto(photoUrl)
}
// handleAddExperience
const handleAddExperience =()=>{
    const {title,decription,company}=experienceInp
    const data={
        title:title,
        decription:decription,
        company:company
    }
    setExperiences([...experiences,data])
}
  return (
    <>
      <div className="w-[600px] absolute overflow-auto  left-[30%] top-[30%] py-10 px-4 rounded-[5px] bg-white z-10 ">
        <div>
          <div className="flex justify-between cursor-pointer w-full p-3 bg-slate-200 rounded-[5px] relative">
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden">
              <img
                onClick={() => coverImg.current.click()}
                className="w-full"
                src={coverPhoto}
                alt="cover-img"
              />
              <input onChange={handleCoverImg} type="file" hidden ref={coverImg} />
              <span className="text-[24px] absolute top-[16px] right-[20px] text-slate-700 shadow-2xl">
                <CiCamera />
              </span>
            </div>
            <div
              onClick={() => profileImg.current.click()}
              className="w-20 h-20 absolute -bottom-[40px] left-[20px] flex justify-center items-center outline-6 outline-blue-400 rounded-full overflow-hidden bg-slate-200"
            >
              <img className="w-full" src={profilePhoto} alt="profile" />
              <input onChange={handleProfileImg} type="file" hidden ref={profileImg} />
            </div>
          </div>
        </div>
        <p
          onClick={handleIsEdit}
          className="text-[28px] cursor-pointer text-rose-500 absolute top-0 right-[4px] mt-2"
        >
          <MdClose />
        </p>
        <div className="mt-14">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Inputs
              onChange={handleChange}
              text={"First Name"}
              value={inp.firstName}
              name={"firstName"}
              type={"text"}
              placeholder={"enter your firstName"}
            />
            <Inputs
              onChange={handleChange}
              text={"Last Name"}
              value={inp.lastName}
              name={"lastName"}
              type={"text"}
              placeholder={"enter your lastName"}
            />
            <Inputs
              onChange={handleChange}
              text={"User Name"}
              value={inp.userName}
              name={"userName"}
              type={"text"}
              placeholder={"enter your userName"}
            />
            <Inputs
              onChange={handleChange}
              text={"Headline"}
              value={inp.headline}
              name={"headline"}
              type={"text"}
              placeholder={"enter your headline"}
            />
            <Inputs
              onChange={handleChange}
              text={"Location"}
              value={inp.location}
              name={"location"}
              type={"text"}
              placeholder={"enter your location"}
            />
            <Inputs
              onChange={handleChange}
              text={"Gender"}
              value={inp.gender}
              name={"gender"}
              type={"text"}
              placeholder={"gender (male/female/other)"}
            />
            <div className="flex flex-col bg-white border border-slate-300 p-4 rounded-[5px] my-4">
              {education.map((item, i) => (
                <div key={i} className="py-2 border-b border-slate-200 shadow-sm px-5 mb-4">
                  <p className="text-sla">
                    <span className="font-semibold text-base me-2">collage:</span> {item?.collage}
                  </p>
                  <p>
                    <span className="font-semibold text-base me-2">degree:</span> {item?.degree}
                  </p>
                  <p>
                    <span className="font-semibold text-base me-2">fieldOfStudy:</span>{" "}
                    {item?.fieldOfStudy}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-white border border-slate-300 p-4 rounded-[5px] ">
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={educationInp.collage}
                text={"Education"}
                name="collage"
                placeholder={"collage"}
              />
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={educationInp.degree}
                text={"Degree"}
                name={"degree"}
                placeholder={"degree"}
              />
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={educationInp.fieldOfStudy}
                text={"Field OfStudy"}
                name={"fieldOfStudy"}
                placeholder={"fieldOfStudy"}
              />
              <ButtonComponent onClick={handleAddEducation} text={"Add Education"} />
            </div>
            <div className={"flex gap-5 flex-wrap items-center my-3"}>
              {skills.map((item, index) => (
                <button
                  key={index}
                  className="border border-slate-300 text-[#333] cursor-pointer rounded-[5px] px-[8px] py-[6px] shadow-2xl flex gap-3 items-center"
                >
                  {item}{" "}
                  <MdClose
                    className={"text-red-500 font-bold text-[20px]"}
                    onClick={() => handleRemoveSkill(item)}
                  />{" "}
                </button>
              ))}
            </div>

               <div className={"flex gap-5 flex-wrap items-center my-3"}>
              {experiences.map((item, index) => (
                <button
                  key={index}
                  className="border border-slate-300 text-[#333] cursor-pointer rounded-[5px] px-[8px] py-[6px] shadow-2xl flex gap-3 items-center"
                >
                  {item}{" "}
                  <MdClose
                    className={"text-red-500 font-bold text-[20px]"}
                  />{" "}
                </button>
              ))}
            </div>
            <div className="flex flex-col bg-white border border-slate-300 p-4 rounded-[5px] ">
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={experienceInp.title}
                text={"Title"}
                name="title"
                placeholder={"title"}
              />
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={experienceInp.decription}
                text={"Decription"}
                name={"decription"}
                placeholder={"decription"}
              />
              <Inputs
                onChange={handleEducation}
                type={"text"}
                value={experienceInp.company}
                text={"Company"}
                name={"company"}
                placeholder={"Company"}
              />
              <ButtonComponent onClick={handleAddExperience} text={"Add Experience"} />
            </div>


            <div className={"flex gap-5 flex-wrap items-center my-3"}>
              {skills.map((item, index) => (
                <button
                  key={index}
                  className="border border-slate-300 text-[#333] cursor-pointer rounded-[5px] px-[8px] py-[6px] shadow-2xl flex gap-3 items-center"
                >
                  {item}{" "}
                  <MdClose
                    className={"text-red-500 font-bold text-[20px]"}
                    onClick={() => handleRemoveSkill(item)}
                  />{" "}
                </button>
              ))}
            </div>


            <Inputs
              onChange={(e) => newSetSkills(e.target.value)}
              text={"Skills"}
              value={newSkills}
              name={"newSkills"}
              type={"text"}
              placeholder={"add your new skills"}
            />
            <ButtonComponent onClick={handleskills} text={"Add Skills"} />
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile
