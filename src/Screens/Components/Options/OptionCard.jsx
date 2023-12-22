import React from 'react'
import './OptionCard.css'

function OptionCard({path, title}) {
    return (
        <>
            <div className='option-card-wrapper'>
                <div className='option-card-icon'>
                    <img src={path} alt='icon'/>
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}

export default OptionCard