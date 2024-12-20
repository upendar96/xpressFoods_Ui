import React from 'react'
import { FaDelicious, FaEgg, FaHotel, FaSmileBeam, FaWineBottle } from 'react-icons/fa';

const Banner = () => {
    const username=localStorage.getItem('userName');
  return (
    <div className='banner'>
         <div className='banner-text'>
        <p className='bannerText'>Hey! <FaSmileBeam size={40} color="yellow" />
        </p><h1 className='bannerText'>@{username}</h1>
        <p className='bannerText'>Discover the best food <FaEgg size={40} color="brown" /> & drinks <FaWineBottle size={40} color="black" /> and dineouts <FaHotel size={40} color="#007bff" /> in your places</p>
    </div>
    </div>
  )
}

export default Banner