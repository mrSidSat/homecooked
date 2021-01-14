import React from 'react'
import './SellSummary.css'
import Header from '../Header/Header'

function SellSummary() {
    const details = {
        title: 'Sold Summary',
        info: 'Items that you sold'
    }

    const dummy = [
        {id:1, name: 'Paneer', status: true, price: 100, soldDate: '30/02/2020'},
        {id:2, name: 'Chinese', status: false, price: 200, soldDate: '29/02/2020'}
    ]

    return (
        <div className="sellSummary">
            <Header details={details}/>
            { dummy.length ? (
                <table>
                    <tr>
                        <span>Sr no.</span>
                        <span>Item Name</span>
                        <span>Status</span>
                        <span>Price</span>
                        <span>Sold Date</span>
                    </tr>
                    { dummy.map(item => {
                        return (
                            <tr>
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <span>{item.status?'SOLD':'PENDING'}</span>
                                <span>{item.price}</span>
                                <span>{item.soldDate}</span>
                            </tr>
                        )
                    })}
                </table>
            ) : (
                <div>No sellings till now</div>
            )}
        </div>
    )
}

export default SellSummary
