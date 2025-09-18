import React from 'react'

const MyButton = ({ myClick, children }) => {
    console.log("inside my button...");
  return (
      <div>
          <button className='btn btn-danger' onClick={myClick}>{children}</button>
    </div>
  )
}

export default React.memo(MyButton)