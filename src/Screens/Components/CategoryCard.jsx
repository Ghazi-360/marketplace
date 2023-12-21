import React from 'react'
import './CategoryCard.css'

function CategoryCard(props) {
  return (
    <>
    <div className='category-card'>
        <div className='category-image'>
           <img src={props.imagePath}/>
        </div>
        <div className='category-text'>
             <p>{props.title}</p>
             <p>{props.price}</p>
          </div>
          
    </div>

 </>
  )
}

export default CategoryCard