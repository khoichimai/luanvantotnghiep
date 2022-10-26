import React from 'react'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Cart from '../../component/cart/cart'
import Slider from '../../component/slider/slider'

const Cartpage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Cart/>
        <Footer/>
    </div>
  )
}

export default Cartpage