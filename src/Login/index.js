import React,{useState} from 'react'
import { Button, Title } from '../Styles'
import { useForm } from 'react-hook-form'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import { instance } from '../config.axios'
import { Redirect } from 'react-router-dom';

function Login({ history }) {
   const [showPassword,SetShowPassword] = useState(false)
   const [auth,setAuth] = useState(false)
    const { handleSubmit, register } = useForm()

    const loginSubmit = (user) => {
        instance.post('/api/login', user)
            .then(response => {
                let { message,user } = response.data
               
                toast(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                if (message === 'Logged in successfully!') {
                    localStorage.setItem('user', user)
                    setAuth(true)
                }
            })

        // verify the data with the db
        // getting the data from db
        // checking
        //routing to dashboard
    }
    
        if(auth === true) {
        return <Redirect to="/dashboard/home" />
        }

        else {
        return (
            <div className="main">
              
                <form className="login" onSubmit={handleSubmit(loginSubmit)}>
                    <Title>Login</Title>
                    <ToastContainer />
                    <input className="input-box" required ref={register} placeholder="Username" name="username" type="username" />
                    <input className="input-box" required ref={register} placeholder="Password" name="password" type={showPassword ? 'text' : 'password'} />
                    <label className="showPassword" onClick={_ => SetShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</label>
                    <div class="checkbox-model">
                        <input
                            id="checkbox1"
                            type="checkbox"
                            class="form-check-input"
                        />
                        <label for="checkbox1" class="text-muted">
                            Keep me Signed In
                        </label>
                    </div>
    
    
                    <div className="btn-model">
                        <Button>Login</Button>
                        <span>Forgot Password?</span>
                    </div>
                    {/* <SignupButton>Signup</SignupButton> */}
                </form>
            </div>
        )
     }
    
}

export default Login