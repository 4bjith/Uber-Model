
import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'

function Navbar() {
  return (
    <div className="w-[100%] h-[9vh] bg-black text-white flex justify-between px-[10px]">
        <div className="w-[40%] flex items-center">
            <h1 className="text-[1.4rem] font-semibold px-[20px] cursor-pointer">Uber</h1>
        </div>
        <div className="w-[60%] flex justify-end items-center">
            <div className="flex items-center gap-[5px]">
                <Button2 className="hover:border-gray-400"><h1 className="">Log in</h1></Button2>
                <Button1><h1 className="">Sign up</h1></Button1>
            </div>
            <div className="flex flex-col justify-center items-center gap-[4px] px-[20px] cursor-pointer">
                <span className="w-[20px] h-[3px] bg-white"></span>
                <span className="w-[20px] h-[3px] bg-white"></span>
                <span className="w-[20px] h-[3px] bg-white"></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar