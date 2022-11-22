import React from 'react'
import CartPageItems from './CartPageItems'

const CartPage = ({ cartItems }) => {
    return (
        <div id='cart-page'>
            <CartPageItems cartItems={cartItems} />
            <div id='cart-page-checkout' className='flex-row'>
                <p>Subtotal: </p>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default CartPage