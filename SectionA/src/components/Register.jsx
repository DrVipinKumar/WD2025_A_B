import axios from 'axios';
import { useActionState, useEffect} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const initialState = {
        success:false,
        message: ""
    }
    const doLogin = async(prevState,formData) => {
        const email = formData.get("email");
        const pwd = formData.get("pwd");
        try {
            await axios.post("http://localhost:3000/register", {
                email: email.toLowerCase(),
                password:pwd
            }, {
                withCredentials:true
            })
            return {
                success: true,
                message:"User registered!"
            }
        } catch (error) {
            return {
                success: false,
                message:error.response?.data?.message
            }
        }
       
    }
    const [state, action, isPending] = useActionState(doLogin, initialState)
    useEffect(() => {
        if (state.success)
        {
            navigate("/")
        }       
    },[state.success,navigate]);
    return (
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center vh-100 ">
           <div className="border rounded-3 p-4 shadow-sm" style={{ width: "35%" }}>
          <h1 className='text-success text-center'>Register</h1>
          <h5 className='text-danger'>{state.message?state.message:""}</h5>
          <form action={action} className='d-flex flex-column gap-3'>
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
              <button className='btn btn-success align-self-center w-25'>Register</button>
          </form>
          <h2>{isPending ? "Trying to register..." : ""}</h2>
          <h3 className='text-warning'><NavLink to="/">Login</NavLink> after registration</h3>
          </div>
    </div>
  )
}

export default Register