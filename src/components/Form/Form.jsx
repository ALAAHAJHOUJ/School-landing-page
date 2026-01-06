import React, { useEffect, useRef, useState } from 'react'
import './Form.css'
import msgicon from '../../assets/msg-icon.png'
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import arrow from '../../assets/white-arrow.png'

function Form() {
  const [loading,setLoading]=useState(false)
  const champsEmail=useRef()
  const Envoyer=(e)=>{
    e.preventDefault()
  }


  
  return (
    <div className='contact'>
       <div className="contact-col">
          <h3>Send a message<img src={msgicon} alt='image de projet'></img></h3>
          <p>
            feel free to reach out through contact form or find our contact 
            information below.Your feedback,questions,and suggestions are 
            important to us as we strivd to provide exceptional service
            to our university community.
          </p>
          <ul>
            <li><img alt='image de projet' src={emailIcon}></img>alaa.spread @gmail.com</li>
            <li><img src={phoneIcon} alt='image de projet'></img>0619870021</li>
            <li id='element3'><img alt='image de projet' src={locationIcon} className='image1'></img>77 Massachussets Ave ,Cambridge<br></br>MA 02139,United States</li>
          </ul>
       </div>
       <div className="contact-col">
          <form >
              <label htmlFor="name">Your name</label>
              <input type="text" id='name' placeholder='Enter your name' />
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id='phoneNumber' placeholder='Enter your Phone number' />
              <label htmlFor="message">Write your message</label>
              <textarea name="" id="message" placeholder='write your message' cols={"30"} rows={"5"}></textarea>
              <button onClick={Envoyer} type='submit' className='btn btndark'>Send<img alt='image de projet' src={arrow} className='image1'></img></button>
          </form>
          <span className='tester11'>Sending ...</span>
       </div>
    </div>
  )
}

export default Form