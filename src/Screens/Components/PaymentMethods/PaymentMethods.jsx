import React from 'react'
import './PaymentMethods.css'

// Assets Import
import methodOne from '../../../assets/skrill.png'
import methodTwo from '../../../assets/neteller.png'
import methodThree from '../../../assets/visa.png'
import methodFour from '../../../assets/mastercard.png'
import methodFive from '../../../assets/paypal.png'
import methodSix from '../../../assets/binancepay.png'
import methodSeven from '../../../assets/dollargeneral.png'

const paymentMethods = [
    { icon: methodOne },
    { icon: methodTwo },
    { icon: methodThree },
    { icon: methodFour },
    { icon: methodFive },
    { icon: methodSix },
    { icon: methodSeven },
];


function PaymentMethods() {
    return (
        <>
            <div className="paymentMethods-wrapper">
                {paymentMethods.map((method, index) => (
                    <div className="paymentMethod-image" key={index}>
                        <img src={method.icon} alt="payment-method" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PaymentMethods