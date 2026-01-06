import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import About from './components/About/About'
import Title from './components/title/Title'
import Compus from './components/Compus/Compus'
import Testimonials from './components/TestImonials/Testimonials'
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Programs></Programs>
      <About></About>
      <Compus></Compus>
      <Testimonials></Testimonials>
      <Form></Form>
    </>
  )
}

export default App


