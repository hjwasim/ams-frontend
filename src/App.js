import React,{useEffect,useState} from "react";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard/";
import { Switch, Route } from "react-router-dom";
import Maintenance from "./Dashboard/Pages/Maintenance";
import Residents from "./Dashboard/Pages/Residents";
import Inventory from "./Dashboard/Pages/Inventory";
import Employee from "./Dashboard/Pages/Employee";
import Materials from "./Dashboard/Pages/Materials";
import Home from "./Dashboard/Pages/Home";
import Sidebar from './Dashboard/Components/Sidebar'
import {instance} from './config.axios'
import PrivateRoute from './PrivateRoute'

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
    
       {isUser && (
        <div className="dashboard">
          <Sidebar user={isUser} />

          <div className="main-container">

            <section className="nav">
              <div className="css-dznagq"><h2>AMS</h2></div>
              <div className="user">
              <div class="media-body"><span>{isUser.username}</span><p class="mb-0 font-roboto">Admin</p></div>
              </div>
            </section>

            <div className="container">

              <PrivateRoute path="/dashboard/home" component={Home} user={isUser} />
              <PrivateRoute path="/dashboard/materials" component={Materials} />
              <PrivateRoute path="/dashboard/employee" component={Employee}  />
              <PrivateRoute path="/dashboard/inventory" component={Inventory} />
              <PrivateRoute path="/dashboard/maintenance" component={Maintenance} />
              <PrivateRoute path="/dashboard/residents" component={Residents} />
            </div>
          </div>
        </div>
       )} 
      </Switch>
    </>
  );
}

export default App;
