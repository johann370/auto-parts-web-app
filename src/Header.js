import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

/*
Component for displaying the page header
*/
const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title'>Auto Parts Distribution</h1>
            <Link to="/shop" id='shop-link'>SHOP</Link>
            <Link to="/cart" id='cart-icon'><FaShoppingCart /></Link>
        </div>
    )
}

export default Header