import React from 'react'
import Signup from '../../component/signup_signin/signup'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Slider from '../../component/slider/slider'
const Signuppage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default Signuppage