import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from'../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'
import { IoMdCloseCircle } from 'react-icons/io'


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
                {
                  cacher==true?<img src={menuIcon} alt='image de projet' className='image2' onClick={()=>{changerVisibilte()}}></img>:<IoMdCloseCircle onClick={()=>{changerVisibilte()}} className='scale-[2.4] cursor-pointer fixed right-0 top-0 m-[20px] z-[20]  hidden max-[1075px]:block'></IoMdCloseCircle>
                }

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