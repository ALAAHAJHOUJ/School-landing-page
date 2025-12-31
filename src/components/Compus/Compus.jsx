import React from 'react'
import './Compus.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whitearrow from '../../assets/white-arrow.png'



function Compus() {
  return (
    <div className='compus container1'>
        <div className="gallery">
            <img src={gallery1} alt="image de projet" />
            <img src={gallery2} alt="image de projet" />
            <img src={gallery3} alt="image de projet" />
            <img src={gallery4} alt="image de projet" />
        </div>
        <button className='btn btndark'>See more here <img src={whitearrow} alt="image de projet" /></button>
    </div>
  )
}

export default Compus