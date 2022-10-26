import React from 'react'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Product from '../../component/product/product'
import Slider from '../../component/slider/slider'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Product/>
        <Footer/>
        
    </div>
  )
}

export default Home