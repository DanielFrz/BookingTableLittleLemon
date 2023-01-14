import React from 'react'
import './hero.css'
import restaurantB from '../../src/assets/restaurantB.jpg'



function Hero() {
  return (
    <div className='Hero'>
        <div className='Hero-container'>
            <div className='Hero-content'>
                <div className='Hero-text'>
   <h1 className='Hero-h1'>Little Lemon Restaurant</h1>
   <h3 className='Hero-h3'>Amsterdam</h3>
   <p className='Hero-p'>The best restaurant in the world</p>
   <br></br>
   <button className='Hero-btn'>Reserve a Table</button>
   </div>
    <img src={restaurantB} alt='restaurant' className='Hero-img'></img>
    </div>
    </div>
    </div>
  )
}

export default Hero