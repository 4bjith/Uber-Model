import React from "react";

function Button1(props) {
  return (
    <div className="px-[15px] py-[6px] bg-white text-black cursor-pointer rounded-full">
      {props.children}
    </div>
  );
}

export default Button1;
