import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="left">
                        <div className="navlogo">
                            <img src="./logo_shop.png" alt="" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to='/'>Trang Chủ</Link></li>
                                <li><Link to='/products'>Sản phẩm</Link></li>
                                <li><Link to='/about'>Giới thiệu</Link></li>
                                <li><Link to='/contact'>Liên hệ</Link></li>
                            </ul>
                        </div>
                        <div className="nav_searchbar">
                            <input type="text" name="" id="" />
                            <div className="search_icon">
                                <SearchIcon id="search" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav_btn">
                            <Link to='/login'>Signin</Link>
                        </div>
                        <div className="cart_btn">
                            <Link to='/cart'>
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartIcon id="icon" color="action" />
                                </Badge>
                            </Link>
                        </div>
                        <Avatar className="" />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar