import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from'../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'


function Header() {
  const [sticky,setStciky]=useState(false)
  const [cacher,setCacher]=useState(true)

  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
       window.scrollY>500?setStciky(true):setStciky(false)
    })
  },[])


  const changerVisibilte=()=>{
      setCacher((prev)=>{return !prev})
  }


  return (
    <>
        <nav className={`nav1 container1 ${sticky?'nav2':''}`}>
              <img src={logo} alt="image de projet" className='image' />
              <img src={menuIcon} alt='image de projet' className='image2' onClick={()=>{changerVisibilte()}}></img>
              <ul className={`elements ${cacher?'':'visible'}`}>
                    <li>Home</li>
                    <li>Program</li>
                    <li>About Us</li>
                    <li>Compus</li>
                    <li>Testimonials</li>
                    <li>
                      <button className='btn'>Contact Us</button>
                    </li>
              </ul>
        </nav>
    </>
  )
}

export default Header