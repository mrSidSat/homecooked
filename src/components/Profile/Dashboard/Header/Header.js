import React from 'react'
import './Header.css'

function Header({ details }) {
    return (
        <div className="header">
            <div className="header_title">{ details.title }</div>
            <div className="header_info">{ details.info }</div>
        </div>
    )
}

export default Header
