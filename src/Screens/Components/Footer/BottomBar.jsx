import React from 'react'
import './Footer.css'

// Assets Import
import icons from '../../../assets/bottom.png'

function BottomBar() {
    return (
        <>
            <div className="bottombar-wrapper">
                <div className="bottombar-col bottombar-logos">
                    <img src={icons} alt="bottombar-icons" />
                </div>
                <div className="bottombar-col bottombar-links">
                    <p>Trademarks</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>                    
                    <p>Legal</p>
                </div>
                <div className="bottombar-col bottombar-langs">
                    <p>Italy - English - Euro</p>
                </div>
            </div>
        </>
    )
}

export default BottomBar