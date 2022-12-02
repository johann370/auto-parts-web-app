import React from 'react'
import CarParts from './CarParts'
import Cart from './Cart'

/*
Component to display the shop page

param addToCart: Function to add a specific part to the cart
param removeFromCart: Function to remove a specific part from the cart
param cartItems: The items to display in the cart
*/
const ShopPage = ({ addToCart, removeFromCart, cartItems }) => {
    return (
        <div className='main'>
            <CarParts addToCart={addToCart} removeFromCart={removeFromCart} />
            <Cart cartItems={cartItems} displayCheckout={true} />
        </div>
    )
}

export default ShopPage