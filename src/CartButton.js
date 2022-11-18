import React from 'react'

const CartButton = ({ displayCart, setDisplayCart }) => {
    return (
        <button onClick={() => setDisplayCart(!displayCart)}>Cart</button>
    )
}

export default CartButton