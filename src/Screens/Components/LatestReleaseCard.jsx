import React from 'react'
import './LatestReleaseCard.css'

function LatestReleaseCard(props) {
  return (
    <>
    <div className='Release-card'>
           <img src={props.imagePath}/>
    </div>

 </>
  )
}

export default LatestReleaseCard