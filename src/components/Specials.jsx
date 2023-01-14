import React from 'react'
import dessert from '../../src/assets/dessert.jpg'

import './specials.css'
function Specials() {
  return (
    <div>
        <div className='special-content'>
        <h1>Specials</h1>
        <button className='special-btn'>Order</button>
        <br></br>
        </div>
        <div className='special-container'>
        <div className="column">
        <div className='special-dish'>
        <img src={dessert} alt='dish-1'></img>
        <h3>Lemon Dessert</h3>
        <p>The best Lemon Dessert</p>
        </div>
        </div>
        <div className="column">
        <div className='special-dish'>
            <img src={dessert} alt='dish-2'></img>
            <h3>Lemon Dessert</h3>
        <p>the best Lemon Dessert</p>
        </div>
            </div>
            <div className="column">
        <div className='special-dish'>
        <img src={dessert} alt='dish-3'></img>
        <h3>Column 3 Title</h3>
        <p>Column 3 text</p>
        </div>
        </div>
        </div>
    </div>

  )
}

export default Specials


