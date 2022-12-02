import React, { useEffect, useState } from 'react'

/*
Component to display individual cart items in the cart page

param id: The part id
param partName: The part name
param price: The part price
param count: The part count
param manufacturer: The part manufacturer
param setCount: Function to change the count of a specific part
param removeFromCart: Function to remove a specific part from the cart
*/
const CartPageItem = ({ id, partName, price, count, manufacturer, setCount, removeFromCart }) => {
    const [input, setInput] = useState(count);

    /*
    Function to change the count of a part, or remove the part 
    when the count 0 or below
    */
    useEffect(() => {
        if (input <= 0) {
            removeFromCart(id);
            return;
        }

        setCount(id, input);
    }, [input]);

    return (
        <div className='cart-page-item flex-row'>
            <div className='small-image'></div>
            <div>
                <p className='cart-page-name-price'>{partName} - ${price.toFixed(2) * count}</p>
                <p className='cart-page-manufacturer'>Manufacturer: {manufacturer}</p>
                <div className='cart-page-count flex-row'>
                    <p>Qty:</p>
                    <button className='edit-button' onClick={() => setInput(input - 1)}>-</button>
                    <input className='cart-page-count-input' type='number' value={input} onChange={(e) => setInput(parseInt(e.target.value))}></input>
                    <button className='edit-button' onClick={() => setInput(input + 1)}>+</button>
                    <button className='delete-button' onClick={() => removeFromCart(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CartPageItem