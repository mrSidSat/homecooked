// import { render } from '@testing-library/react';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import SellDash from './sellComponent';
import Signup from './signupComponent';
import Profile from './profileComponent';
function Main(){
    
    return(
    <Switch>
        <Route path='/sell' component={()=><SellDash/>}/>
        <Route path='/signup' component={()=><Signup/>}/>
        <Route path='/profile' component={()=><Profile/>}/>
        <Redirect to='/sell'/>
    </Switch>
    )
}

export default Main;
