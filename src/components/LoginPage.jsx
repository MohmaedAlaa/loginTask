import React from 'react'
import loginImg from '../img/Image Placeholder_2.png'
import { Link } from 'react-router-dom'
import {AiOutlineUser , AiOutlineMail} from 'react-icons/ai'
import {CiLock} from 'react-icons/ci'
import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import { validateName } from '../utils/validateName'
import { startsWithNumber } from '../utils/startsWithNumber'
import { endsWithNumber } from '../utils/endsWithNumber'

const LoginPage = ({email,setEmail}) => {
    var responseClone;
    const NameErrorMessage = () => {
        return (
            <p className="text-red-400"> Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no numbers at the beginning or the end</p>
        );
    };
    const EmailErrorMessage = () => {
        return (
            <p className="text-red-400">The email it isn't valid</p>
        );
    };
    const PasswordErrorMessage = () => {
        return (
            <p className="text-red-400">Password should have at least 8 characters</p>
        );
    };
    const ConfirmPasswordErrorMessage = () => {
        return (
            <p className="text-red-400">It doesn't match with Password</p>
        );
    };

    const [name, setName] = useState({
        value: "",
        isTouched: false,
    });

    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        isTouched: false,
    });

    const checkName = (name) => {
        if(validateName(name.value) && !startsWithNumber(name.value) && !endsWithNumber(name.value) && name.value.length < 15 && name.value.length > 5 ){
            return false
        }else{
            return true
        }
    };

    const getIsFormValid = (e) => {
        if((validateName(name.value) && !startsWithNumber(name.value) && !endsWithNumber(name.value) && name.value.length < 15 && name.value.length > 5) && validateEmail(email) && password.value.length >= 8 && password.value === confirmPassword.value)
        return true
    };

    const postData = () =>{
        fetch('https://goldblv.com/api/hiring/tasks/register', {
        method: 'POST',
        body: JSON.stringify({
            username: name,
            email: email,
            password: password,
            password_confirmation : confirmPassword,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then(function (data) {
            console.log(data)
        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
            .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText); // 6
            });
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };
  return (

    <div className='w-[65%]'>
        <div className='flex md:flex-row flex-col rounded-lg my-10 bg-[#F5F7FFD9] justify-center items-center'>
            <div className='w-full px-10 py-14'>
                <img src={loginImg} alt='loginImg'/>
            </div>

            <form className='w-full px-10 py-14 md:text-left text-center flex flex-col gap-8' onSubmit={handleSubmit}>
                <p className='text-4xl font-bold'>Create Account</p>
                <p className='text-xl'>Go ahead and sign up, let everyone know how  awesome you are!</p>


                <div className='flex flex-col gap-4'>

                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <AiOutlineUser className="w-5 h-5 text-[#9CADF2]"/>
                        </div>
                        <div className='h-1/2 flex absolute inset-y-[11px] left-[35px] items-center pl-3 pointer-events-none border-l-[1.5px] border-[#9CADF2]'></div>
                        <input type="text" className="bg-white border border-[#9CADF2] text-gray-900 text-sm rounded-lg focus:ring-[#9CADF2] focus:border-[#9CADF2] w-full pl-10 p-2.5 outline-none"
                        placeholder="Username"
                        value={name.value}
                        onChange={(e) => {
                            setName({ ...name, value: e.target.value });
                        }}
                        onBlur={() => {
                        setName({ ...name, isTouched: true });
                        }}/>
                    </div>
                    {name.isTouched && checkName(name)? (
                        <div><NameErrorMessage/></div>
                    ) : null}

                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <AiOutlineMail className="w-5 h-5 text-[#9CADF2]"/>
                        </div>
                        <div className='h-1/2 flex absolute inset-y-[11px] left-[35px] items-center pl-3 pointer-events-none border-l-[1.5px] border-[#9CADF2]'></div>
                        <input type="email" className="bg-white border border-[#9CADF2] text-gray-900 text-sm rounded-lg focus:ring-[#9CADF2] focus:border-[#9CADF2] w-full pl-10 p-2.5 outline-none"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    {!validateEmail(email) && email.length > 0 ? (
                        <EmailErrorMessage/>
                    ) : null}

                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <CiLock className="w-5 h-5 text-[#9CADF2]"/>
                        </div>
                        <div className='h-1/2 flex absolute inset-y-[11px] left-[35px] items-center pl-3 pointer-events-none border-l-[1.5px] border-[#9CADF2]'></div>
                        <input type="password" className="bg-white border border-[#9CADF2] text-gray-900 text-sm rounded-lg focus:ring-[#9CADF2] focus:border-[#9CADF2] w-full pl-10 p-2.5 outline-none" placeholder="Password"
                        value={password.value}
                        onChange={(e) => {
                            setPassword({ ...password, value: e.target.value });
                        }}
                        onBlur={() => {
                        setPassword({ ...password, isTouched: true });
                        }}/>

                    </div>
                    {password.isTouched && password.value.length < 8 ? (
                        <PasswordErrorMessage/>
                    ) : null}

                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <CiLock className="w-5 h-5 text-[#9CADF2]"/>
                        </div>
                        <div className='h-1/2 flex absolute inset-y-[11px] left-[35px] items-center pl-3 pointer-events-none border-l-[1.5px] border-[#9CADF2]'></div>
                        <input type="password" className="bg-white border border-[#9CADF2] text-gray-900 text-sm rounded-lg focus:ring-[#9CADF2] focus:border-[#9CADF2] w-full pl-10 p-2.5 outline-none"
                        placeholder="Confirm Password"
                        value={confirmPassword.value}
                        onChange={(e) => {
                            setConfirmPassword({ ...confirmPassword, value: e.target.value });
                        }}
                        onBlur={() => {
                        setConfirmPassword({ ...confirmPassword , isTouched: true });
                        }}/>
                    </div>
                    {confirmPassword.isTouched && password.value !== confirmPassword.value ? (
                        <ConfirmPasswordErrorMessage/>
                    ) : null}

                    <Link
                    to={{pathname:'/finish'}}
                    >
                        <button className='bg-gradient-to-r from-[#2663DF] to-[#758FF0] p-4 rounded-lg text-white text-lg w-full'
                        type='Submit'
                        disabled={!getIsFormValid()}
                        >
                            Create Account
                        </button>
                    </Link>

                </div>

            </form>
        </div>
    </div>
  )
}

export default LoginPage