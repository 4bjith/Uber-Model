import React from 'react'
import Navbar from '../Components/Navbar'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-[100%] h-[100%] font-sans">
        {/* Navbar */}
        <div className="">
            <Navbar/>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
            <div className="w-[100%] h-full p-[30px] flex justify-center flex-col gap-5 md:w-[35%]">
                <h1 className="text-[1.6rem] font-semibold ">
                    What's your your phone number or email?
                </h1>
                <input type="text" placeholder='Enter phone number or email' className="w-[100%] h-[3rem] text-[1rem] text-gray-800 px-[10px] border-[1.5px] border-black rounded-lg placeholder:tracking-wider align-middle " />
                <input type="text" placeholder='Enter password' className="w-[100%] h-[3rem] text-[1rem] text-gray-800 px-[10px] border-[1.5px] border-black rounded-lg placeholder:tracking-wider " />
                <button className="w-full h-[3rem] align-middle bg-black text-white rounded-lg text-[1.2rem] ">Continue</button>
                <div className="w-full flex items-center justify-between">
                    <span className="w-[45%] h-[1px] bg-black"></span>
                    <p className="px-[11px] text-gray-600 align-middle ">or</p>
                    <span className="w-[45%] h-[1px] bg-black"></span>
                </div>
                <button className="w-full h-[3rem] flex justify-center items-center gap-2 rounded-lg bg-gray-200 tracking-wider">
                    <FcGoogle />
                    <p className="text-[1rem] ">Continue with Google</p>
                </button>
                <button className="w-full h-[3rem] flex justify-center items-center gap-2 rounded-lg bg-gray-200 tracking-wider">
                    <FaApple  />
                    <p className="text-[1rem] ">Continue with Apple</p>
                </button>
                <div className="w-full h-auto mt-[2rem] ">
                    <p className="tracking-wide text-[0.8rem]">
                        By continuing, you agree to calls, including by autodialer, WhatsApp, or texts from Uber and its affiliates.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
