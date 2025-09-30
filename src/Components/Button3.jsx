import React from "react";

function Button3(props) {
  return (
    <div>
      <button className="bg-black text-white px-6 py-2 rounded-lg">
        {props.children}
      </button>
    </div>
  );
}

export default Button3;
