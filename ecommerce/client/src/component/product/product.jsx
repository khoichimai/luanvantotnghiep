import React from 'react'
import {Link} from 'react-router-dom'
const dataProduct = [
  {
    id: 0,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
    tagline:'sản phẩm nổi bật'
  },
  {
    id: 1,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
    tagline:'sản phẩm nổi bật'
  },
  {
    id: 2,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
    tagline:'sản phẩm nổi bật'
  },
  {
    id: 3,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
    tagline:'sản phẩm nổi bật'
  },
  {
    id: 4,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
  },
  {
    id: 5,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
  },
  {
    id: 6,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
  },
  {
    id: 7,
    title: "Air Jodan 1",
    price: 3500000,
    img: "./airjordan1chicagoreimagined.jpg",
  },
]
const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" style={{width:"18rem"}}>
        <Link to='/getproductsome'><img src={item.img} class="card-img-top" alt={item.title}/></Link>
          <div class="card-body text-center">
            <h5 class="card-title">{item.title}</h5>
            <p className="lead">{item.price}VNG</p>
            <Link to='cart'><button  class="btn bg-dark text-white">Mua Ngay</button></Link>
          </div>
      </div>
    )
  }
  return (
    <div>
      <div className="container py-4">
        <div className="col-12 text-center">
          <h1>sản phẩm nổi bật</h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {dataProduct.map(cardItem)}
        </div>
        <div className="row d-flex justify-content-center align-content-center">
          <a href="#" class="btn btn-dark col-2">Xem Thêm</a>
        </div>
      </div>
    </div>
  )
}

export default Product