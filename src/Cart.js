import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

/*
Component for displaying the cart

param cartItems: All the cart items to display
param displayCheckout: Boolean to display checkout button
*/

const Cart = ({ cartItems, displayCheckout }) => {
    const [renderItems, setRenderItems] = useState([]);
    const [total, setTotal] = useState(0);


    /*
    Function to update total and set which cart items to display

    (Requirement 2.4)
    */
    useEffect(() => {
        if (!cartItems || Object.keys(cartItems).length === 0) {
            setTotal(0);
            return;
        }
        setRenderItems(Object.values(cartItems).map((cartItem) => <CartItem key={cartItem.partName} count={cartItem.count} partName={cartItem.partName} price={cartItem.price} />));
        setTotal(Object.values(cartItems).reduce((accumulator, currentValue) => accumulator + (currentValue.count * currentValue.price), 0,));
    }, [cartItems]);

    return (
        <div className='cart'>
            <div className='cart-items'>
                {Object.keys(cartItems).length > 0 ? <div>{renderItems}</div> : <p>Your Cart Is Empty</p>}
            </div>
            <div className='total-checkout-div'>
                {displayCheckout && <Link id='checkout' to="/checkout">Checkout</Link>}
                <p id='total'>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart