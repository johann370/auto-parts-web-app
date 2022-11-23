import React from 'react'
import CarParts from './CarParts'
import Cart from './Cart'

const ShopPage = ({ addToCart, removeFromCart, cartItems }) => {
    return (
        <div className='main'>
            <CarParts addToCart={addToCart} removeFromCart={removeFromCart} />
            <Cart cartItems={cartItems} displayCheckout={true} />
        </div>
    )
}

export default ShopPage