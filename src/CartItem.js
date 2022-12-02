import React from 'react'

/*
Component for individual items in the shop page cart

param count: The quantity to purchase of the specific part
param partName: The part name
price price: The part price
*/
const CartItem = ({ count, partName, price }) => {
    return (
        <div className='cart-item'>
            <p>{count} x {partName}</p>
            <p>${(price * count).toFixed(2)}</p>
        </div>
    )
}

export default CartItem