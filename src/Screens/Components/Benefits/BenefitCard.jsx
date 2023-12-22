import React from 'react'
import './Benefits.css'

function BenefitCard({ title, detail, icon }) {
    return (
        <>
            <div className='benefit-card'>
                <div className='benefit-icon'>
                    <img src={icon} alt='benefit-icon' />
                </div>
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
        </>
    )
}

export default BenefitCard