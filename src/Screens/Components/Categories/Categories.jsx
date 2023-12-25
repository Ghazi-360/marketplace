import React from 'react'
import './Categories.css'

// Swiper Library Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css';

// Components Import
import CategoryCard from './CategoryCard';

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

const categories = [
    { 
        title: "Valorant",
        price: 150,
        banner: gameOne 
    },
    { 
        title: "Player's Unknown Battlegrounds",
        price: 250,
        banner: gameTwo 
    },
    { 
        title: "Skyrim",
        price: 50,
        banner: gameThree
    },
    { 
        title: "Clash of Clans",
        price: 80,
        banner: gameFour
    },
    { 
        title: "Call of Duty",
        price: 125,
        banner: gameFive
    },
    { 
        title: "Call of Duty",
        price: 125,
        banner: gameSix
    },
    { 
        title: "Clash of Clans",
        price: 80,
        banner: gameSeven
    },
    { 
        title: "Skyrim",
        price: 50,
        banner: gameEight 
    },
    { 
        title: "Player's Unknown Battlegrounds",
        price: 250,
        banner: gameNine 
    },
    { 
        title: "Valorant",
        price: 150,
        banner: gameTen
    },
];

function Categories() {
    return (
        <>
            <div className="categories-wrapper">
                <div className="top-header">
                    <h2>Categories</h2>
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
                    {categories.map((game, index) => (
                        <SwiperSlide key={index}>
                            <CategoryCard banner={game.banner} title={game.title} price={game.price} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Categories