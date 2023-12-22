import React from 'react'
import './LandingPage.css'
import OptionalCard from './Components/OptionalCard'
import boosting from "../assets/boosting.png";
import editing from "../assets/editing.png";
import coins from "../assets/coins.png";
import items from "../assets/box.png";
import accounts from "../assets/accounts.png";
import coaching from "../assets/coaching.png";
import CategoryCard from './Components/CategoryCard';
import category1 from "../assets/category1.png";
import PaymentDetailCard from './Components/PaymentDetailCard';
import secure from "../assets/secure-payment.png";
import referral from "../assets/referral.png";
import LatestReleaseCard from './Components/LatestReleaseCard';
import release from "../assets/latest-release.png";

function LandingPage() {

    return (
        <>
            <div className='landing-main'>
                <div className='landing-head'>
                    <h1>The ultimate gaming Marketplace</h1>
                    <h4>Buying & Selling has never been this fun!</h4>
                </div>

                <div className='option'>
                    <OptionalCard imagePath={boosting} title= "Boosting" />
                    <OptionalCard imagePath={editing} title= "Save Editing" />
                    <OptionalCard imagePath={coins} title= "Coins" />
                    <OptionalCard imagePath={items} title= "Items" />
                    <OptionalCard imagePath={accounts} title= "Accounts" />
                    <OptionalCard imagePath={coaching} title= "Coaching" />
                </div>

                <div className='category'>
                    <CategoryCard imagePath={category1} title= "This is an example of the This is an example of the" price= "$ 150"/>
                    <CategoryCard imagePath={category1} title= "This is an example of the This is an example of the" price= "$ 150"/>
                    <CategoryCard imagePath={category1} title= "This is an example of the This is an example of the" price= "$ 150"/>
                    <CategoryCard imagePath={category1} title= "This is an example of the This is an example of the" price= "$ 150"/>
                </div>

                <div className='referral-main'>
                    <div className='referral-text'>
                        <h2>A powerful referral program</h2>
                        <p>Earn more than you spend! Get a wallet on our site - open to all, not just buyers & sellers. Enjoy a 5% reward when the buyer confirms the delivery.</p>
                        <button className="add-btn" >Join Now</button>
                    </div>
                    <div>
                    <img className='refferal' src={referral}  />
                    </div>

                </div>

                <div className='latest-release'>
                     <LatestReleaseCard imagePath={release}/>
                     <LatestReleaseCard imagePath={release}/>
                     <LatestReleaseCard imagePath={release}/>
                </div>


                <div className='payment'>
                    <PaymentDetailCard imagePath={secure} title= "Secure Transactions" detail= "Buy with confidence. Enjoy purchasing the services you are searching for, with the most known and secured payment gateways. And when you pay? Our live chat system with the sellers system will ensure the best customer experience!" />
                    <PaymentDetailCard imagePath={secure} title= "Upgrade your game experience" detail= "Meet people from around the world with the passion for gaming and to help you. Our goal is to help you enjoy more your games, in respect of the developers and the other players." />
                    <PaymentDetailCard imagePath={secure} title= "Total Refund" detail= "Did you change your mind about your purchase and you are looking to get your money back? If the delivery has not started, the process is automated and the payment will be sent right away! You can request it yourself. Our sellers work with your complete satisfaction." />
                    <PaymentDetailCard imagePath={secure} title= "Cash Back" detail= "Tired of unfair policies for sellers and buyers? We take your side. With a complete honesty policy, we split the fees at 10% for the buyer and 10% for the seller, ensuring that both parts are satisfied. When you confirm the delivery, enjoy a 5% cashback, available immediately for next orders, or to withdraw it!" />
                </div>


            </div>
        </>
    )
}

export default LandingPage