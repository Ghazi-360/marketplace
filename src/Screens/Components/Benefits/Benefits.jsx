import React from 'react'
import './Benefits.css'

// Components Import
import BenefitCard from './BenefitCard'

// Assets import
import benefitOne from '../../../assets/secure.png'
import benefitTwo from '../../../assets/flash.png'
import benefitThree from '../../../assets/refund.png'
import benefitFour from '../../../assets/insurance.png'


const benefits = [
    {
        title: "Secure Transactions",
        detail: "Buy with confidence. Enjoy purchasing the services you are searching for, with the most known and secured payment gateways. And when you pay? Our live chat system with the sellers system will ensure the best customer experience!",
        icon: benefitOne
    },
    {
        title: "Upgrade your game experience",
        detail: "Meet people from around the world with the passion for gaming and to help you. Our goal is to help you enjoy more your games, in respect of the developers and the other players.",
        icon: benefitTwo
    },
    {
        title: "Total Refund",
        detail: "Did you change your mind about your purchase and you are looking to get your money back? If the delivery has not started, the process is automated and the payment will be sent right away! You can request it yourself. Our sellers work with your complete satisfaction.",
        icon: benefitThree
    },
    {
        title: "Cash Back",
        detail: "Tired of unfair policies for sellers and buyers? We take your side. With a complete honesty policy, we split the fees at 10% for the buyer and 10% for the seller, ensuring that both parts are satisfied. When you confirm the delivery, enjoy a 5% cashback, available immediately for next orders, or to withdraw it!",
        icon: benefitFour
    },
]

function Benefits() {
    return (
        <>
            <div className="benefits-wrapper">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} title={benefit.title} detail={benefit.detail} icon={benefit.icon} />
                ))}
            </div>
        </>
    )
}

export default Benefits