import React from 'react'
import Lienhe from '../../component/contact/lienhe'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Slider from '../../component/slider/slider'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Slider/> 
      <Lienhe/>
      <Footer/>
    </div>
  )
}

export default Contact