import React,{useEffect,useState} from "react";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard/";
import { Switch, Route ,Redirect} from "react-router-dom";

import {instance} from './config.axios'

function App() {
  const [User, setUser] = useState([])

  const user = localStorage.getItem('user')

  useEffect(() => {
     instance.get('/get/user').then(response => setUser(response.data))
  }, [])
  
  const isUser =  User.find(item => item.username === user)

  return (
    <>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" exact component={Login} />
    
       {isUser ? (
       <div>
    <h2>Please Login, Authentication Not Allowed!!!</h2>
    </div>
       ) : (
     <Redirect to="/login" />  )} 
      </Switch>
    </>
  );
}

export default App;
