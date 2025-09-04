import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
      <div style={{height:"80vh"}} className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-danger'>404 Error: Page not found!</h1>
          <button className='btn btn-warning' onClick={()=>navigate("/",{replace:true})}>Go to Home</button>
    </div>
  )
}

export default Error