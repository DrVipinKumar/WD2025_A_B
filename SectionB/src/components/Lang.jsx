import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Lang = () => {
  return (
    <div style={{ height: "80vh" }}>
          <nav className='d-flex'>
              <NavLink to="java" className="mx-2">Java</NavLink>
              <NavLink to="python" className="mx-2">Python</NavLink>
          </nav>
          <Outlet/>
    </div>
  )
}

export default Lang