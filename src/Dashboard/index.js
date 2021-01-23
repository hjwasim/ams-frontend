import React from 'react';
import './dashboard.css'
import Sidebar from './Components/Sidebar'
import PrivateRoute from '../PrivateRoute'
import Maintenance from "./Pages/Maintenance";
import Residents from "./Pages/Residents";
import Inventory from "./Pages/Inventory";
import Employee from "./Pages/Employee";
import Materials from "./Pages/Materials";
import Home from "./Pages/Home";
function Dashboard({page,isUser}) {

    return (
        <>
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
        </>
    )
}

export default Dashboard