// import { render } from '@testing-library/react';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import SellDash from './sellComponent';
import Signup from './signupComponent';
import Profile from './profileComponent';
import PurchaseInfo from './purchaseInfoComponent';
import SoldSummary from './soldSummaryComponent';
function Main(){
    const itemsSold = [
        {id:91, name:'Pav', status: 0, price: 20, sold: '12 June'},
        {id:512, name:'Bhaji', status: 1, price: 100, sold: '13 June'},
        {id:333, name:'Kanda', status: 2, price: 50, sold: '11 June'}
    ];
    const itemsBought = [
        {id:123, name:'Chinese Bhel', status: 0, price: 20, purchased: '12 June'},
        {id:324, name:'French Fries', status: 1, price: 100, purchased: '13 June'},
        {id:798, name:'Desi Ghee', status: 2, price: 50, purchased: '11 June'}
    ]
    return(
    <Switch>
        <Route path='/sell' component={()=><SellDash/>}/>
        <Route path='/signup' component={()=><Signup/>}/>
        <Route path='/profile' component={()=><Profile/>}/>
        <Route path='/purchaseInfo' component={()=><PurchaseInfo itemsBought={itemsBought}/>}/>
        <Route path='/soldSummary' component={()=><SoldSummary itemsSold={itemsSold}/>}/>
        <Redirect to='/sell'/>
    </Switch>
    )
}

export default Main;
