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
        <Title subTitle={"Gallery"} title={"What we Offer"}></Title>
        <Compus></Compus>
        <Title subTitle={"TESTIMONIALS"} title={"What Students Says"}></Title>
        <Testimonials></Testimonials>
        <Title subTitle={"Contact Us"} title={"Get In Touch"}></Title>
        <Form></Form>
    </>
  )
}

export default App