import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
     <div class="container">
         <div class="noi-dung about">
             <h2>Về Chúng Tôi</h2>
             <p>Lorem ipsumdolor sit...</p>
             <ul class="social-icon">
                 <li><a href=""><i class="fa fa-facebook"></i></a></li>
                 <li><a href=""><i class="fa fa-twitter"></i></a></li>
                 <li><a href=""><i class="fa fa-instagram"></i></a></li>
                 <li><a href=""><i class="fa fa-youtube"></i></a></li>
             </ul>
         </div>
         <div class="noi-dung links">
             <h2>Menu</h2>
             <ul>
                 <li><a href="#">Trang Chủ</a></li>
                 <li><a href="#">Sản phẩm</a></li>
                 <li><a href="#">Giới thiệu</a></li>
                 <li><a href="#">Liên hệ</a></li>
             </ul>
         </div>
         <div class="noi-dung contact">
             <h2>Thông Tin Liên Hệ</h2>
             <ul class="info">
                 <li>
                     <span><i class="fa fa-map-marker"></i></span>
                     <span>180 Đường Cao Lỗ <br />
                          Phường 4,Quận 8,Thành Phố Hồ Chí Minh<br />
                         Việt Nam</span>
                 </li>
                 <li>
                     <span><i class="fa fa-phone"></i></span>
                     <p><a href="#">+84 123 456 789</a>
                         <br />
                         <a href="#">+84 987 654 321</a></p>
                 </li>
                 <li>
                     <span><i class="fa fa-envelope"></i></span>
                     <p><a href="#">diachiemail@gmail.com</a></p>
                </li>
             </ul>
         </div>
     </div>
 </footer>
    </div>
  )
}

export default Footer