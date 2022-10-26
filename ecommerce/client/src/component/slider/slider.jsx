import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './slider.css'
const data =[
    "./nike_banner.jpg",
    "./adidas_banner.jpg",
    "./puma_banner.jpg"
]

const Slider = () => {
  return (
    <Carousel className='carasousel' autoPlay={true} animation="slide" indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={true} navButtonsProps={{
        style:{
            borderRadius:10,
            marginTop:-22,
            height:100,
        }
    }}>
        {
            data.map((imag,i) => {
                return (
                    <>
                        <img src={imag} alt="" className="slide_img" />
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Slider