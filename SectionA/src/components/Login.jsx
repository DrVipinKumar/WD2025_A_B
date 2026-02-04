import axios from 'axios';
import React, { useEffect } from 'react'
import { useActionState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const doLogin = async(prevState,formData) => {
    const email = formData.get("email");
    const password = formData.get("pwd");
    try {
        await axios.post("http://localhost:3000/login", {
            email: email.toLowerCase(),
            pwd:password
        }, {
            withCredentials:true
        })
        return {
            success: true,
            message:"OK"
        }
    } catch (error) {
        return {
            success: false,
            message:error?.response?.data?.message
        }
    }
}
const Login = () => {
    const navigate = useNavigate();
   const initialState = {
        success: false,
        message:""
   }
    const [state, action, isPending ] = useActionState(doLogin, initialState);
    useEffect(() => {
        if (state.success) {
            navigate("/form")
        }
    },[state.success,navigate]);
    return (
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 '>
          
          <form action={action} className='d-flex flex-column gap-3 p-4 border rounded-3' style={{width:"30%"}}>
              <h1 className='text-success text-center'> Login</h1>
              <h3 className='text-danger'>{state?.message?state.message:""}</h3>
              <input
                  type="text"
                  name="email"
                  placeholder='Enter email'
              />
              <input
                  type="password"
                  name="pwd"
                  placeholder='Enter password'
              />
              <button className='btn btn-success w-25 align-self-center'>Login</button>   
              {isPending?<h3>Try to login....</h3>:""}
          </form>
          <h4><NavLink to="/register">Register</NavLink> first before login!</h4>
    </div>
  )
}

export default Login