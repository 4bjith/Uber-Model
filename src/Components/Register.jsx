import React, { useRef } from "react";
import api from "../api/axiosClient";
import { ToastContainer, toast } from "react-toastify";
function Register({ setIsOpen }) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const numberRef = useRef("");

  const userRegister = async () => {
    try {
      // taking values from inputs using useref
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const mobile = numberRef.current.value;
      // ✅ Basic input validation
      if (!name || !email || !password || !mobile) {
        alert("Please fill all fields");
        return;
      }
      const res = await api.post("/register", {
        name,
        email,
        password,
        mobile,
      });
      const newUser = res.data;
      if (newUser) {
        toast.success("Account created successfully! Please login to continue.")
        // alert("Account created successfully! Please login to continue.");
        setTimeout(()=>{setIsOpen("login")},1000)
      }
    } catch (error) {
      console.error("Cant register ", error);
      alert("Something went wrong while registering. Please try again.");
    }
  };
  return (
    <div className="w-full h-full flex justify-center md:items-center ">
      <div className="w-[90%] h-[100%] rounded-sm bg-gray-100 flex flex-col-reverse md:flex md:flex-row-reverse md:h-[60%] md:w-[70%] ">
        {/* login input */}
        <div className="w-full h-[40%] rounded-t-4xl bg-gray-900 flex flex-col justify-center items-center relative md:rounded-l-4xl md:h-full md:rounded-tr-none">
          <h1 className="text-center text-[2rem] tracking-wider font-light text-white text-shadow-2xs text-shadow-blue-800 ">
            If You Already Have An <br /> Account
          </h1>
          <button
            onClick={() => {
              setIsOpen("login");
            }}
            className="mt-3 font-mono text-black backdrop-blur-lg bg-white px-8 py-3 font-semibold rounded-lg shadow-xl shadow-gray-100/50 cursor-pointer transition duration-300 hover:scale-105 "
          >
            Log In
          </button>
        </div>
        <div className="w-full h-[60%] md:h-full pt-[20px]">
          <div className="w-full h-full flex flex-col justify-start items-center ">
            <h1 className="tracking-wide text-[1.4rem] font-semibold text-center mb-4">
              Register to continue
            </h1>
            <div className="w-[75%] h-[4.5rem] py-[10px] flex flex-col justify-center relative">
              <label
                htmlFor="name"
                className="absolute ml-[20px] top-0 left-4 bg-gray-100 px-[2px] text-[1rem] tracking-widest text-gray-900"
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                ref={nameRef}
                className="border-[1px] h-[3rem] rounded-xl px-[20px] tracking-wide text-gray-500 text-[1rem] placeholder:text-[0.9rem]"
                placeholder="enter full name here ..."
              />
            </div>
            <div className="w-[75%] h-[4.5rem] py-[10px] flex flex-col justify-center relative">
              <label
                htmlFor="number"
                className="absolute ml-[20px] top-0 left-4 bg-gray-100 px-[2px] text-[1rem] tracking-widest text-gray-900"
              >
                Mobile No.
              </label>

              <input
                type="number"
                name="tel"
                id="number"
                ref={numberRef}
                className="border-[1px] h-[3rem] rounded-xl px-[20px] tracking-wide text-gray-500 text-[1rem] placeholder:text-[0.9rem]"
                placeholder="enter mobilenumber here ..."
              />
            </div>
            <div className="w-[75%] h-[4.5rem] py-[10px] flex flex-col justify-center relative">
              <label
                htmlFor="email"
                className="absolute ml-[20px] top-0 left-4 bg-gray-100 px-[2px] text-[1rem] tracking-widest text-gray-900"
              >
                email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                className="border-[1px] h-[3rem] rounded-xl px-[20px] tracking-wide text-gray-500 text-[1rem] placeholder:text-[0.9rem]"
                placeholder="enter email here ..."
              />
            </div>
            <div className="w-[75%] h-[4.5rem] py-[10px] flex flex-col justify-center relative">
              <label
                htmlFor="password"
                className="absolute ml-[20px] top-0 left-4 bg-gray-100 px-[2px] text-[1rem] tracking-widest text-gray-900"
              >
                password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                placeholder="Enter password here ..."
                className="border-[1px] h-[3rem] rounded-xl px-[20px] tracking-wide text-gray-500 text-[1rem] placeholder:text-[0.9rem]"
              />
            </div>
            <div className="w-full h-auto flex justify-center">
              <button
                onClick={userRegister}
                className="px-[40px] py-[10px] border-0 font-mono bg-gray-700 text-white rounded-xl shadow-xl shadow-black cursor-pointer hover:scale-105 "
              >
                Register
              </button>
              {/* <ToastContainer/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
