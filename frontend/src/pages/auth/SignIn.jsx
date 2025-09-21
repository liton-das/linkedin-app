import React from 'react'
import { useState } from 'react'
import Inputs from '../../components/form-groupComponents/Inputs'
import ButtonComponent from '../../components/ButtonComponent'
import Logo from '../../assets/linkedin.png'
import axios from 'axios'
const INITIAL_VALUE={
    email:'',
    password:''
}
const SignIn = () => {
    const [userInp,setUserInp]=useState({...INITIAL_VALUE})
        const [err,setErrors]=useState(null)
        const [isLoding,setLoding]=useState(false)
        // handleChange function 
        const handleChange=(e)=>{
            setUserInp((prev)=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
            // clear error 
            setErrors(null)
        }
        // handleSubmit function 
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoding(true)
        try {
           let result= await axios.post('http://localhost:4000/api/auth/logIn',{
                email:userInp.email,
                password:userInp.password
            },{
                withCredentials:true
            })
            setLoding(false)
            console.log(result);
            
        } catch (error) {
            const errors=error.response.data || error.response
            console.log(error.response)
            setLoding(false)
            setErrors(errors.message)
        }
    
        // set empty field
        setUserInp({...INITIAL_VALUE})
    }
  return (
    <>
      <div className="py-[48px]">
            <div className="w-[600px] m-auto bg-white shadow-2xl border border-slate-100 p-10 rounded-[8px]">
              <div className="mb-8 flex items-center gap-[129px]">
                <div className="w-24 overflow-hidden">
                  <img className="w-full" src={Logo} alt="logo" />
                </div>
                <h1 className="text-2xl font-semibold text-[#333]">SignUp Form</h1>
              </div>
              {err && (
                <div className="border border-slate-200 rounded-[8px] bg-white shadow-2xl m-auto text-center mb-3">
                  <p className="text-red-500 text-base">{err}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col">
                <Inputs
                  onChange={handleChange}
                  text={"Email"}
                  htmlFor={"email"}
                  type={"email"}
                  name={"email"}
                  id={"email"}
                  value={userInp.email}
                  placeholder={"enter your email......"}
                />
                <Inputs
                  onChange={handleChange}
                  text={"Password"}
                  htmlFor={"password"}
                  type={"password"}
                  name={"password"}
                  id={"password"}
                  value={userInp.password}
                  placeholder={"enter your password......"}
                />
                {isLoding ? (
                    <ButtonComponent text={"Processing....."} />
                ) : (
                  <ButtonComponent text={"SignUp"} />
                )}
              </form>
            </div>
          </div>
    </>
  )
}

export default SignIn
