import React from 'react'
import './App.css';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard/'
import { Switch, Route } from 'react-router-dom'
import Maintenance from './Dashboard/Pages/Maintenance'
import Residents from './Dashboard/Pages/Residents'
import Inventory from './Dashboard/Pages/Inventory'
import Employee from './Dashboard/Pages/Employee'
import Materials from './Dashboard/Pages/Materials'
import Home from './Dashboard/Pages/Home'


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} /> 
        <Route path="/dashboard/home" render={() => <Dashboard page={Home} />}/>
        <Route path="/dashboard/materials" render={() => <Dashboard page={Materials} />}/>
        <Route path="/dashboard/employee" render={() => <Dashboard page={Employee} />}/>
        <Route path="/dashboard/inventory" render={() => <Dashboard page={Inventory} />}/>
        <Route path="/dashboard/maintenance" render={() => <Dashboard page={Maintenance} />}/>
        <Route path="/dashboard/residents" render={() => <Dashboard page={Residents} />}/>
      </Switch>
    </>
  );
}

export default App;
