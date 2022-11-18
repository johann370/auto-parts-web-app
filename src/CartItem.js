import React from 'react'

const CartItem = ({ count, partName, price }) => {
    return (
        <div>
            <p>{count} x {partName}</p>
            <p>${price * count}</p>
        </div>
    )
}

export default CartItem