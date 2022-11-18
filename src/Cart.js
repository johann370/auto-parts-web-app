import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

const Cart = ({ cartItems }) => {
    const [renderItems, setRenderItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!cartItems || Object.keys(cartItems).length === 0) {
            return
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
                <p id='total'>Total: $ {total}</p>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart