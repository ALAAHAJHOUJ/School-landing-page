import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import About from './components/About/About'

function App() {

  return (
    <>
        <Header></Header>
        <Hero></Hero>
        <Programs></Programs>
        <About></About>
    </>
  )
}

export default App