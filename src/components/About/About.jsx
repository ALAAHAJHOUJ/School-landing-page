import React, { useState } from 'react'
import about from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'
import './About.css'
import Video from './Video/Video'




function About() {
  const [montrer,setMontrer]=useState(false)
  return (
    <div id='about' className='about container1'>
       {montrer&&<Video cacher={()=>{setMontrer(false)}}></Video>}
       <div className="about-left">
          <img src={about} alt="image de projet" className='about-left-image' onClick={()=>{setMontrer(true)}}  />
          <img src={playIcon} alt="image de projet" className='playIcon'/>
       </div>
       <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nuturing Tomorrow's Leaders Today</h2>
          <p>
            It offers a wide range of academic programs in sciences, arts, and humanities.
            The campus usually includes classrooms, libraries, laboratories, and study spaces.
            Students learn from experienced professors and researchers.
          </p>

          <p>
            encourage critical thinking and independent learning.
            promote cultural diversity and international exchange.
            it support sports, clubs, and student organizations.
          </p>

          <p>
            Research and innovation are central to university life.
            Students develop skills needed for their future careers.
            Overall, it prepares individuals to contribute positively to society.
          </p>
       </div>
    </div>
  )
}

export default About