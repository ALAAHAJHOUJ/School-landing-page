import React from 'react'
import './hero.css'
import arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div id='home' className='hero container1'>
      <div className="herotext">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge,curriculum is designed to empower students with the knowledge 
          ,skills ,end experiences needed to excel
           in the dynamic field of education
        </p>
        <button className='btn'>
          Explore more
          <img src={arrow} alt='image de pojet' className='arrow1'></img>
        </button>
      </div>
    </div>
  )
}

export default Hero