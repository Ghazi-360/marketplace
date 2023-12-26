import React from 'react'
import './LandingPage.css'

// Components Import
import Header from './Components/Header/Header';
import OptionCard from './Components/Options/OptionCard'
import Categories from './Components/Categories/Categories';
import Referral from './Components/Referral/Referral';
import LatestRelease from './Components/LatestRelease/LatestRelease';
import Benefits from './Components/Benefits/Benefits';

// Assets Import
import boosting from "../assets/boosting.png";
import editing from "../assets/editing.png";
import coins from "../assets/coins.png";
import items from "../assets/box.png";
import accounts from "../assets/accounts.png";
import coaching from "../assets/coaching.png";
import PaymentMethods from './Components/PaymentMethods/PaymentMethods';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Navbar from './Components/Navbar/Navbar';

const optionsData = [
    {
        title: "Boosting",
        icon: boosting
    },
    {
        title: "Save Editing",
        icon: editing
    },
    {
        title: "Coins",
        icon: coins
    },
    {
        title: "Items",
        icon: items
    },
    {
        title: "Accounts",
        icon: accounts
    },
    {
        title: "Coaching",
        icon: coaching
    }
]

function LandingPage() {

    return (
        <>
            <Navbar />
            <div className='landing-wrapper'>
                <Header />
                <div className="options-wrapper">
                    {optionsData.map((data, index) => (
                        <OptionCard key={index} path={data.icon} title={data.title} />
                    ))}
                </div>
                <Categories />
                <Referral />
                <LatestRelease />
                <Form />
                <Benefits />
                <PaymentMethods />
            </div>
            <Footer />
        </>
    )
}

export default LandingPage