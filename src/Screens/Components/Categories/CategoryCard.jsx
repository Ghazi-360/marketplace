import React from 'react'
import './Categories.css'

function CategoryCard({banner, title, price}) {
    return (
        <>
            <div className='category-card'>
                <div className='category-image'>
                    <img src={banner} alt='category-banner'/>
                </div>
                <div className='category-text'>
                    <p>{title}</p>
                    <p>$ {price}</p>
                </div>  
            </div>
        </>
    )
}

export default CategoryCard