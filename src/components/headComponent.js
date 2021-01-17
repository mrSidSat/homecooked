import React from 'react';
import {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component{
    render()
    {
        return(
            <div class="topNav">
                <ul>
                    <li><Link class="llink" to='/sell'>HOME</Link></li>
                    <li><Link class="llink" to='/sell'>SELL</Link></li>
                    <li>BUY</li>
                </ul>
                <span class="siloin">
                    <Link class="llink" to='/signup'>SIGNUP</Link>
                </span>
            </div>
            
        )
        
    }
}
export default  Header;