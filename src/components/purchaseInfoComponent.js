import React from 'react'
import './purchaseInfo.css'

function purchaseInfoComponent({ itemsBought }) {
    
    return (
        <div class="back">
               
        <div class="cheaders">My Profile</div>
        <br/>
        <div class="r">
        <div class="navi">
            
        <ul class="list-group list-group-flush lisst">
            
            <li class="list-group-item">Sell Item</li>
            <li class="list-group-item"><a href='/purchaseInfo'>Purchase Info</a></li>
            <li class="list-group-item">My Cart</li>
            <li class="list-group-item"><a href='/soldSummary'>Sold Summary</a></li>
            <li class="list-group-item">Volenteer Info</li>
            <li class="list-group-item">Hired info</li>
            <li class="list-group-item">Settings</li>
        </ul>
        </div>
        <div class=" dash">
                <div class="tilt">
                    <div class="playarea">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total(INR)</th>
                                    <th scope="col">Purchased On</th>
                                    <th scope="col">More</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                itemsBought.map((item, id) => {
                                    return (
                                        <tr className="purchasedItem">
                                            <th scope="col">{id+1}</th>
                                            <td>{item.name}</td>
                                            <td class={item.status===1?'purchase-status yellow':item.status===2?'purchase-status red':'purchase-status green'}>
                                                <span>{item.status===1?'In Queue':item.status===2?'Cancelled':'Purchased'}</span>
                                            </td>
                                            <td>{item.price}</td>
                                            <td>{item.purchased}</td>
                                            <td>
                                                <button className="order_options" id={item.id}>View Order</button>
                                                <button className="order_options" id={item.id}>Cancel Order</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        </div>

    </div>
    )
}

export default purchaseInfoComponent
