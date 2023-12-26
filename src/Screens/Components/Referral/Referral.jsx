import React from 'react'
import './Referral.css'

// Assets Import
import referral from "../../../assets/referral.png";


function Referral() {
    return (
        <>
            <div className='referral-wrapper'>
                <div className='referral-content'>
                    <h2>A powerful referral program</h2>
                    <p>Earn more than you spend! Get a wallet on our site - open to all, not just buyers & sellers. Enjoy a 5% reward when the buyer confirms the delivery.</p>
                    <button className="referral-btn" >Join Now</button>
                </div>
                <div  className='refferal-image'>
                    <img src={referral} alt='referral-banner' />
                </div>
            </div>
        </>
    )
}

export default Referral