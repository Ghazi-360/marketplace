import React from 'react'
import './OptionalCard.css'

function OptionalCard(props) {

  return (
    <>
       <div className='options'>
           <div className='optional-card'>
              <img src={props.imagePath}/>
           </div>
             <p>{props.title}</p>
       </div>

    </>
  )
}

export default OptionalCard