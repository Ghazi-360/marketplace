import React, { useEffect, useState } from 'react'
import './Navbar.css'

// Assets Import
import logo from '../../../assets/logo.png'
import chat from '../../../assets/chat-icon.svg'
import bell from '../../../assets/bell-icon.svg'
import cart from '../../../assets/cart-icon.svg'
import user from '../../../assets/user.png'

function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 760) {
                setShowDropdown(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
    return (
        <>
            <div className="navbar-wrapper">
                <div className="logo-wrapper">
                    <img src={logo} alt="marketplace-logo" />
                </div>
                <button className="dropdown-toggle-button" onClick={toggleDropdown}>
                    ☰
                </button>
                <div className={`items-wrapper ${showDropdown ? 'show' : ''}`}>
                    <div className="icon-wrapper">
                        <img src={chat} alt="chat-icon" />
                        {showDropdown ? 'Chat' : ''}
                    </div>
                    <div className="icon-wrapper">
                        <img src={bell} alt="bell-icon" />
                        {showDropdown ? 'Notifications' : ''}
                    </div>
                    <div className="icon-wrapper">
                        <img src={cart} alt="bell-icon" />
                        {showDropdown ? 'Cart' : ''}
                    </div>
                    <button className="navbar-button">Sell (Create an offer)</button>
                    <div className="icon-wrapper">
                        <img src={user} alt="user-icon" />
                        {showDropdown ? 'Profile' : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar