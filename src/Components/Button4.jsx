import React from 'react'

function Button4(props) {
  return (
    <div>
        <button className="ml-7 border-b-1 pb-1">
          {props.children}
        </button>
    </div>
  )
}

export default Button4