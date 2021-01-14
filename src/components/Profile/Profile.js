import React from 'react'
import './Profile.css'
import Sidebar from './Sidebar/Sidebar'
import Sell from './Dashboard/Sell/Sell'
import SellSummary from './Dashboard/SellSummary/SellSummary'

function Profile() {
    return (
        <div className="profile">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Routing required*/}
            <SellSummary />
            {/* <Sell /> */}
        </div>
    )
}

export default Profile
