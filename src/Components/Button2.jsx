import React from 'react'

function Button2(props) {
  return (
    <div className="px-[15px] py-[7px] bg-black text-white cursor-pointer rounded-full flex gap-3 items-center ">{props.children}</div>
  )
}

export default Button2