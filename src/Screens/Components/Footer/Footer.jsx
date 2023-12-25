import React from 'react'
import './Footer.css'
import BottomBar from './BottomBar'

// Assets Import
import trustpilot from '../../../assets/trustpilot.png'
import x from '../../../assets/X.svg'
import tiktok from '../../../assets/tiktok.svg'

function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>Get to know us</h3>
                        <p>About Us</p>
                        <p>Earn with us</p>
                        <img src={trustpilot} alt="trustpilot" />
                    </div>
                    <div className="footer-col">
                        <h3>Buy with Confidence</h3>
                        <p>Cashback</p>
                        <p>Safety Guidelines</p>
                        <p>Payment and Refunds</p>
                    </div>
                    <div className="footer-col">
                        <h3>Sell with Pride</h3>
                        <p>Rules</p>
                        <p>Payouts</p>
                        <p>We donate together</p>
                    </div>
                    <div className="footer-col">
                        <h3>Support and Help Center</h3>
                        <p>Help Center</p>
                        <p>Influencer Programs</p>
                        <div className="footer-col-icons">
                            <img src={x} alt="x-icon" />
                            <img src={tiktok} alt="x-icon" />
                        </div>
                    </div>
                </div>
                <BottomBar />
            </div>
        </>
    )
}

export default Footer