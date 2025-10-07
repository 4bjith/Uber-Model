import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import LoginForm from '../Components/LoginForm'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Navbar2 from '../Components/Navbar2'

function LoginOrRegister() {
  const [isOpen,setIsOpen]=useState("login")
  return (
    <div className="w-full h-[100vh]">
      {/* Navbar */}
      <div className="">
        <Navbar2/>
      </div>
      {/* main body */}
      <div className="h-[90vh]">
      {
        isOpen==="login"?<Login setIsOpen={setIsOpen}/>:<></>
      }
      {isOpen==="register"?<Register setIsOpen={setIsOpen}/>:<></>}
      </div>
    </div>
  )
}

export default LoginOrRegister