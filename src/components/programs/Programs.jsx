import React from 'react'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import './Programs.css'
import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'
import Title from '../title/Title'




function Programs() {
  return (
    <div className='programs container1'>
        <Title></Title>
        <div className="program">
            <img src={program1} alt="image de projet" />
            <div className="caption">
              <img src={icon1} alt="image de projet" />
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="image de projet" />
            <div className="caption">
              <img src={icon2} alt="image de projet" />
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="image de projet" />
            <div className="caption">
              <img src={icon3} alt="image de projet" />
              <p>Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs