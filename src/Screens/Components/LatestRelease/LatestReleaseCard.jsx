import React from 'react'
import './LatestRelease.css'

function LatestReleaseCard({path}) {
    return (
        <>
            <div className='latestRelease-card'>
                <img src={path} alt='game-banner'/>
            </div>
        </>
    )
}

export default LatestReleaseCard