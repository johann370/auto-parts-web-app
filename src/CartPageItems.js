import React from 'react'
import CartPageItem from './CartPageItem'

const CartPageItems = ({ cartItems, setCount, removeFromCart }) => {
    return (
        <div>
            {Object.values(cartItems).map((item) => <CartPageItem key={item.id} id={item.id} partName={item.partName} count={item.count} price={item.price} manufacturer={item.manufacturer} setCount={setCount} removeFromCart={removeFromCart} />)}
        </div>
    )
}

export default CartPageItems