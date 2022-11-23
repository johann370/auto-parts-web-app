import React, { useEffect, useState } from 'react'

const CartPageItem = ({ id, partName, price, count, manufacturer, setCount, removeFromCart }) => {
    const [input, setInput] = useState(count);

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