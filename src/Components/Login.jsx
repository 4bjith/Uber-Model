import React from 'react'
import LoginForm from './LoginForm'

function Login({setIsOpen}) {
  return (
    <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[90%] h-[90%] rounded-sm bg-gray-100 md:flex md:h-[50%] md:w-[70%] ">
          {/* login input */}
          <div className="w-full h-[50%] rounded-b-4xl bg-gray-900 flex flex-col justify-center items-center relative md:rounded-r-4xl md:h-full md:rounded-bl-none"
          
          >
            <h1 className="text-center text-[2rem] tracking-wider font-light text-white text-shadow-2xs text-shadow-blue-800 ">If You Don't Have An <br /> Account</h1>
            {/* <h2 className="text-[0.9rem] text-gray-200 tracking-wider mb-6">Sign up now..</h2> */}
            <button onClick={()=>{setIsOpen("register"),2000}} className="text-black backdrop-blur-lg bg-white px-8 py-3 font-semibold rounded-lg shadow-xl shadow-gray-100/50 cursor-pointer transition duration-300 hover:scale-105 ">Sign Up</button>
          </div>
          <div className="w-full h-[50%] md:h-full">
            <LoginForm/>
          </div>
        </div>
      </div>
  )
}

export default Login