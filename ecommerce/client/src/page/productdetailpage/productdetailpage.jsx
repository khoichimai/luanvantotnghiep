import React from 'react'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/header/Navbar'
import Productdetail from '../../component/productdetail/productdetail'
import Slider from '../../component/slider/slider'
const Productdetailpage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Productdetail/>
        <Footer/>
    </div>
  )
}

export default Productdetailpage