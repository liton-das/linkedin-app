import React from 'react'

const ButtonComponent = ({text,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='py-[6px] px-[14px] outline-none border border-slate-100 bg-green-600 text-white text-base rounded-[5px] cursor-pointer'>{text}</button>
    </>
  )
}

export default ButtonComponent
