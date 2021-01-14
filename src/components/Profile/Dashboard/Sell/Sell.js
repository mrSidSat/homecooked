import React from 'react'
import './Sell.css'
import Header from '../Header/Header'

function Sell() {
    const details = {
        title: 'Sell Your Item',
        info: 'Your Item Info'
    }

    return (
        <div className="sell">
            <Header details={details}/>
            <form>
                <label for="shop-name">Shop Name</label>
                <input id="shop-name" type="text"></input>
                <label for="item-name">Item Name</label>
                <input id="item-name" type="text"></input>
                <label for="item-type">Item Type</label>
                <input id="item-type" type="text"></input>
                <label for="item-description">Item Description</label>
                <input id="item-description" type="text"></input>
                <button>Sell</button>
            </form>
        </div>
    )
}

export default Sell
