import React from 'react'
import welcomeImg from '../img/Image Placeholder.png'
import { Link } from 'react-router-dom'

const welcomePage = () => {
  return (
    <div className='flex md:flex-row flex-col rounded-lg my-10 bg-[#F5F7FFD9] justify-center items-center'>
        <div className='w-full px-10 py-14'>
            <img src={welcomeImg} alt='welcomeImg'/>
        </div>

        <div className='w-full px-10 py-14 text-center md:text-left flex flex-col gap-8'>
            <p className='text-4xl font-bold'>Welcome</p>
            <div>
              <p className='text-xl'>We're glad you're here! Sign up to Start</p>
              <p className='text-xl md:hidden block'>browsing the website</p>
            </div>
            <Link to={'/login'}>
                <button className='bg-gradient-to-r from-[#2663DF] to-[#758FF0] p-4 rounded-lg text-white text-lg w-[90%]'>Get Start</button>
            </Link>
        </div>
    </div>
  )
}

export default welcomePage