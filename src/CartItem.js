import React from 'react'

const CartItem = ({ count, partName, price }) => {
    return (
        <div className='cart-item'>
            <p>{count} x {partName}</p>
            <p>${(price * count).toFixed(2)}</p>
        </div>
    )
}

export default CartItem