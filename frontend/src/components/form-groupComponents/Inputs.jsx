import React from 'react'

const Inputs = ({text,htmlFor,type,name,value,id,placeholder,onChange}) => {
  return (
    <>
        <label htmlFor={htmlFor}>{text}</label>
        <input onChange={onChange} className='outline-none border border-slate-200 py-[6px] px-[14px] rounded-[5px] mb-3'  type={type} name={name} id={id} value={value} placeholder={placeholder} />
    </>
  )
}

export default Inputs
