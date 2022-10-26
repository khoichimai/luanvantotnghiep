
import React, { useState } from 'react'
import './cart.css'

const Cart = () => {
    return (
        <div className="cart_section">
            <div className="cart_container_info">
                <h1> THÔNG TIN KHÁCH HÀNG</h1>
                <table className="thongtinkhachhang" border="0" >
                    <tbody>
                        <tr>
                            <td width="20%">HỌ TÊN</td>
                            &nbsp;
                            <td>
                                <input type="text" name="name" id="name" />
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">ĐỊA CHỈ</td>
                            &nbsp;
                            <td>
                                <input type="text" name="address" id="address" />
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">ĐIỆN THOẠI</td>
                            &nbsp;
                            <td>
                                <input type="number" name="phone" id="phone" />
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">EMAIL</td>
                            &nbsp;
                            <td>
                                <input type="email" name="email" id="email" />
                            </td>
                        </tr>
                        <tr>
                            <td > PHƯƠNG THỨC THANH TOÁN</td>
                            &nbsp;
                            <td>
                                <select id="thanhtoan" name="pttt">
                                    <option value="0">Thanh toán khi nhận hàng</option>
                                    <option value="1">Thanh toán online</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cart_container">
                <h1>GIỎ HÀNG</h1>
                <table border="1" width="100%">
                    <tr>
                        <th>STT</th>
                        <th>mã giày</th>
                        <th>tên giày</th>
                        <th>size</th>
                        <th>giá</th>
                        <th>hình</th>
                        <th>số lượng</th>
                        <th>thành tiền</th>
                        <th>xóa</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Air Jordan 1 Chicago</td>
                        <td>
                            9
                        </td>
                        <td>35000000VND</td>
                        <td>
                            <img src="./airjordan1chicagoreimagined.jpg" alt="" style={{ width: 200, height: 200 }} />
                        </td>
                        <td>
                            <div className="col-xl-3">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>5</option>
                                    <option>5</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            35000000VND
                        </td>
                        <td>
                            <a href="#">xóa</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='cart_btn'>
                <input type="button" value="ĐỒNG Ý ĐẶT HÀNG" name="dongydathang" />
                <input type="button" value="XÓA ĐẶT HÀNG" name="xoadathang" />
                <input type="button" value="TIẾP TỤC ĐẶT HÀNG" name="tieptucdathang" />
            </div>
        </div>
    )
}

export default Cart