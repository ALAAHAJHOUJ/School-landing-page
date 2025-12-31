import React, { useRef } from 'react'
import './Testimonials.css'
import nextbtn from '../../assets/next-icon.png'
import backbtn from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'



function Testimonials() {
  const slider=useRef();
  const position=useRef(0);

  const handlebackBtn=()=>{
     if(position.current<0){position.current+=25}
     slider.current.style.transform=`translateX(${position.current}%)`
  }


  const handlenextBtn=()=>{
     console.log(position.current)
     if(position.current>-50) {position.current-=25;console.log("vrai")}
     slider.current.style.transform=`translateX(${position.current}%)`
  }


  return (
    <div className='testimonials container1'>
        <img src={nextbtn} alt="image de projet" className='next-btn' onClick={()=>{handlenextBtn()}} />
        <img src={backbtn} alt="image de projet" className='back-btn' onClick={()=>{handlebackBtn()}} />
        <div  className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="image de projet" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            choosing to purpose my degree et Edusity was one the best decisions I've made Ever.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="image de projet" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            choosing to purpose my degree et Edusity was one the best decisions I've made Ever.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="image de projet" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            choosing to purpose my degree et Edusity was one the best decisions I've made Ever.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="image de projet" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            choosing to purpose my degree et Edusity was one the best decisions I've made Ever.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials