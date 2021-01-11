import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


function Sidebar() {

    const sidebarList =
        [
            { path: '/dashboard/home', name: 'Home' },
            { path: '/dashboard/materials', name: 'Materials' },
            { path: '/dashboard/employee', name: 'Employee' },
            { path: '/dashboard/inventory', name: 'Inventory' },
            { path: '/dashboard/maintenance', name: 'Maintenance' },
            { path: '/dashboard/residents', name: 'Residents' },
        ]

    
return (
    <section id="sidebar">
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 20 }}>
            <img src={Logo} alt="" />
            <h4>AMS</h4>
        </div>
        <div className="list-model">
            <ul className="list">
                {
                    sidebarList.map((item, key) => <li key={key}>
                        <Link to={item.path}>
                      
                        {item.name}</Link></li>)
                }
            </ul>
        </div>
    </section>
)
}

export default Sidebar
