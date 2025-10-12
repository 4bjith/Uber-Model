import React from "react";

function LoginForm({emailRef,loginSubmit,passwordRef}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <h1 className="tracking-wide text-[1.4rem] font-semibold text-center mb-4">
        Login to continue
      </h1>

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
        <button onClick={loginSubmit} className="px-[40px] py-[10px] border-0 font-mono bg-gray-700 text-white rounded-xl shadow-xl shadow-black cursor-pointer hover:scale-105 ">Log In</button>
      </div>
    </div>
  );
}

export default LoginForm;
