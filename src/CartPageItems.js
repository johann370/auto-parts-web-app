import React from 'react'
import CartPageItem from './CartPageItem'

/*
Container component for items in the cart page

param cartItems: The items to display in the cart
param setCount: Function to update the count of a specific part
param removeFromCart: Function to remove a specific part from a cart
*/
const CartPageItems = ({ cartItems, setCount, removeFromCart }) => {
    return (
        <div>
            {Object.values(cartItems).map((item) => <CartPageItem key={item.id} id={item.id} partName={item.partName} count={item.count} price={item.price} manufacturer={item.manufacturer} setCount={setCount} removeFromCart={removeFromCart} />)}
        </div>
    )
}

export default CartPageItems