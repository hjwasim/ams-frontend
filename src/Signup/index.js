import React,{useState} from 'react'
import { Button, Title } from '../Styles'
import { useForm } from 'react-hook-form'
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {instance} from '../config.axios'

function Signup({history}) {

  const [showPassword,SetShowPassword] = useState(false)
  const { handleSubmit, register ,watch } = useForm()

  const signupSubmit = (user) => {

 

    const { username, password, fullName, salutation, email, phone, apartmentName } = user

    const DUMMY = {
      username,
      password,
      email,
      info: {
        fullName,
        salutation,
        phone,
        apartmentName,
      }
    }
    instance.post('/api/signup', DUMMY)
      .then(function (response) {
          const {error} = response.data
          if(error) {
            toast(error,{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }
          else {
            history.push('/login')
          }
      })
      .catch(function (error) {
          console.log(error)
      });

    // send data to the db  ..COMPLETED..
    // getting the data from db
    // checking the usename && email -> true
    // create the data in db
    //routing to login
  }

  return (
    <div className="main">
     <ToastContainer />
      <form className="signup" onSubmit={handleSubmit(signupSubmit)} >  
      <Title>Sign up</Title>
        <input className="input-box" maxLength="30" ref={register({pattern : /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})/ })} type="text" placeholder="Full Name" name="fullName" />
        <ul>
          <label>Salutation</label>
          <li>
            <input className="input-radio" required type="radio" ref={register} name="salutation" value="mr" />
            <label>Mr.</label>
          </li>
          <li>
            <input className="input-radio" type="radio" ref={register} name="salutation" value="ms" />
            <label>Ms.</label>
          </li>
          <li>
            <input className="input-radio" type="radio" ref={register} name="salutation" value="mrs." />
            <label>Mrs.</label>
          </li>
          <li> <input className="input-radio" type="radio" ref={register} name="salutation" value="dr." />
            <label>Dr.</label>
          </li>
          <li>
            <input className="input-radio" type="radio" ref={register} name="salutation" value="other" />
            <label>Other</label>
          </li>
        </ul>

        <input className='input-box' ref={register({ required: true})} type="email" placeholder="Email" name="email" />

        <input className='input-box' required ref={register({required: true, maxLength: 10, pattern: /^[0-9]{10}$/i})} type="number" name="phone" placeholder="Phone" />
        
        <input className="input-box" required ref={register} type="text" placeholder="Apartment Name" name="apartmentName" />

        <input className="input-box" required ref={register({required : true, pattern: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/ , maxLength:15,minLength:6})} type="text" placeholder="Username" name="username" />

        <input className="input-box" required ref={register({ maxLength:20,minLength:6,})} type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" />
        <label className="showPassword" onClick={_ => SetShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</label>
       
        <input className= "input-box" required ref={register({ validate: (value) => value === watch('password')})} type="password" placeholder="Confirm Password" name="newPassword" />
   
        <Button>SUBMIT</Button>
      </form>
    </div>
  );
}

export default Signup;