import React from 'react'
import finishImg from '../img/Image Placeholder_3.png'

const EndPage = ({email}) => {
  return (
    <div className='flex md:flex-row flex-col rounded-lg my-10 bg-[#F5F7FFD9] justify-center items-center'>
        <div className='w-full px-10 py-14'>
            <img src={finishImg} alt='welcomeImg'/>
        </div>
        <div className='w-full px-10 py-14 md:text-left text-center flex flex-col gap-8'>
            <p className='text-4xl font-bold'>Successfully Logged In</p>
            <p className='text-xl'>{email}</p>
        </div>
    </div>
  )
}

export default EndPage