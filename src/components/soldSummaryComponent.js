import React from 'react'
import './soldSummary.css'

function soldSummaryComponent({ itemsSold }) {
    
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
                                    <th scope="col">Price(INR)</th>
                                    <th scope="col">Sold On</th>
                                    <th scope="col">More</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                itemsSold.map((item, id) => {
                                    return (
                                        <tr className="soldItem">
                                            <th scope="col">{id+1}</th>
                                            <td>{item.name}</td>
                                            <td class={item.status===1?'sold-status yellow':item.status===2?'sold-status red':'sold-status green'}>
                                                <span>{item.status===1?'In Queue':item.status===2?'Stopped':'Sold'}</span>
                                            </td>
                                            <td>{item.price}</td>
                                            <td>{item.sold}</td>
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

export default soldSummaryComponent
