import React from 'react';
import './LatestRelease.css';

// Swiper Library Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css';

// Components Import
import LatestReleaseCard from './LatestReleaseCard';

// Assets import
import gameOne from '../../../assets/valorant.png';
import gameTwo from '../../../assets/pubg.png';
import gameThree from '../../../assets/skyrim.png';
import gameFour from '../../../assets/coc.png';
import gameFive from '../../../assets/cod.png';
import gameSix from '../../../assets/cod.png';
import gameSeven from '../../../assets/coc.png';
import gameEight from '../../../assets/skyrim.png';
import gameNine from '../../../assets/pubg.png';
import gameTen from '../../../assets/valorant.png';

const latestReleases = [
    { banner: gameOne },
    { banner: gameTwo },
    { banner: gameThree },
    { banner: gameFour },
    { banner: gameFive },
    { banner: gameSix },
    { banner: gameSeven },
    { banner: gameEight },
    { banner: gameNine },
    { banner: gameTen },
];

function LatestRelease() {
    return (
        <>
            <div className="latestRelease-wrapper">
                <div className="top-header">
                    <h2>Latest Releases</h2>
                    <button>
                        Discover All
                    </button>
                </div>
                <Swiper 
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 80 },
                        480: { slidesPerView: 2, spaceBetween: 60 },
                        768: { slidesPerView: 3, spaceBetween: 40 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    grid={{ rows: 2, fill: 'row' }} modules={[Grid]} direction='horizontal'>
                    {latestReleases.map((release, index) => (
                        <SwiperSlide key={index}>
                            <LatestReleaseCard path={release.banner} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default LatestRelease;
