import React from 'react'
import Signin from '../../component/signup_signin/signin'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Slider from '../../component/slider/slider'
const Signinpage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Signin/>
        <Footer/>
    </div>
  )
}

export default Signinpage