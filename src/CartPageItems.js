import React from 'react'
import CartPageItem from './CartPageItem'

const CartPageItems = ({ cartItems }) => {
    return (
        <div>
            {Object.values(cartItems).map((item) => <CartPageItem key={item.id} id={item.id} partName={item.partName} count={item.count} price={item.price} />)}
        </div>
    )
}

export default CartPageItems