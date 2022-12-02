import React, { useState, useEffect } from 'react'
import CartPageItems from './CartPageItems'
import { Link } from 'react-router-dom';

/*
Component for displaying the cart page

param cartItems: The items in the cart to display
param setCount: Function to change the count of a specific part
param removeFromCart: Function to remove a specific part from the cart
*/
const CartPage = ({ cartItems, setCount, removeFromCart }) => {
    const [total, setTotal] = useState(0);

    /*
    Function to update the total in the cart
    
    (Requirement 2.4)
    */
    useEffect(() => {
        if (!cartItems || Object.keys(cartItems).length === 0) {
            setTotal(0);
            return;
        }
        setTotal(Object.values(cartItems).reduce((accumulator, currentValue) => accumulator + (currentValue.count * currentValue.price), 0,));
    }, [cartItems]);


    return (
        <div id='cart-page'>
            <h1>Cart</h1>
            {Object.keys(cartItems).length > 0 ? <CartPageItems cartItems={cartItems} setCount={setCount} removeFromCart={removeFromCart} /> : <h2>Your cart is empty</h2>}
            <div id='cart-page-checkout' className='flex-row'>
                <Link to="/checkout" id='cart-checkout'>Checkout</Link>
                <p id='cart-page-subtotal'>Subtotal: ${total.toFixed(2)} </p>
            </div>
        </div>
    )
}

export default CartPage