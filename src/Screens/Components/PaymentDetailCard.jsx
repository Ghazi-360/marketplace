import React from 'react'
import './PaymentDetailCard.css'

function PaymentDetailCard(props) {
  return (
    <>
    <div className='payment-card'>
        <div className='payment-image'>
           <img src={props.imagePath}/>
        </div>
        <div className='payment-text'>
             <h4>{props.title}</h4>
             <p>{props.detail}</p>
          </div>
          
    </div>

 </>
  )
}

export default PaymentDetailCard