import React from 'react'

const MyButton = ({ children, btnClick }) => {
     console.log("Rendering inside MyButton");
  return (
                <button className="btn btn-primary m-2" onClick={btnClick}>{children}</button>
  )
}

export default React.memo(MyButton)