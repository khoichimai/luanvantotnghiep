import React from 'react'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Slider from '../../component/slider/slider'
import Products from '../../component/products/products'
const Product = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Product