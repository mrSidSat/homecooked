import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <nav className="sidebar">
            <a href="#">My Profile</a>
            <ul className="sidebar_links">
                <li><a href='#'>Sell Item</a></li>
                <li><a href='#'>Purchase Info</a></li>
                <li><a href='#'>Sold Summary</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar
