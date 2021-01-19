import React from 'react';
import './dashboard.css'
import Sidebar from './Components/Sidebar'

function Dashboard({page,ref}) {

    return (
        <div className="dashboard">
           <Sidebar />
            <div className="main-container">
            {page()}
            </div>
        </div>
    )
}

export default Dashboard