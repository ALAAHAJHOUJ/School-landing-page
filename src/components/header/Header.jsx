import React from 'react'
import './Header.css'
import logo from'../../assets/logo.png'



function Header() {
  return (
    <>
        <nav className='nav1 container1'>
              <img src={logo} alt="image de projet" className='image' />
              <ul className='elements'>
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