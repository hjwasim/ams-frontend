import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {SidebarMain} from '../../Styles/index'

function Sidebar({user}) {

  const sidebarList = [
    { path: '/dashboard/home', name: "Home" },
    { path: "/dashboard/materials", name: "Materials" },
    { path: "/dashboard/employee", name: "Employee" },
    { path: "/dashboard/inventory", name: "Inventory" },
    { path: "/dashboard/maintenance", name: "Maintenance" },
    { path: "/dashboard/residents", name: "Residents" },
  ];

  return (
    <SidebarMain>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <img src={Logo} alt="" />
        <h4>AMS</h4>
      </div>
      <div className="list-model">
        <ul className="list">
          {sidebarList.map((item, key) => (
            <li key={key}>
             <Link to={item.path}><p className="items">
             {item.name}
                 </p></Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarMain>
  );
}

export default Sidebar;
