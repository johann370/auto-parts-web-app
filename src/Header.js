import React from 'react'
import CartButton from './CartButton'

const Header = ({ displayCart, setDisplayCart }) => {
    return (
        <div className='header'>
            <h1 className='header-title'>Auto Parts Distribution</h1>
            <button>Cart</button>
        </div>
    )
}

export default Header