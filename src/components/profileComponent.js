import React,{Component} from 'react';
import './Profile.css';

class Profile extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div class="back">
               
                <div class="cheaders">My Profile</div>
                <br/>
                <div class="r">
                <div class="navi">
                    
                <ul class="list-group list-group-flush lisst">
                    
                    <li class="list-group-item">Sell Item</li>
                    <li class="list-group-item">Purchase Info</li>
                    <li class="list-group-item">My Cart</li>
                    <li class="list-group-item">Sold Summary</li>
                    <li class="list-group-item">Volenteer Info</li>
                    <li class="list-group-item">Hired info</li>
                    <li class="list-group-item">Settings</li>
                </ul>
                </div>
                <div class=" dash">
                        <div class="tilt">
                            <div class="playarea">
                             
                            </div>
                        </div>
                </div>
                </div>

            </div>
        )
    }
}
export default Profile;