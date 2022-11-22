import React from 'react'

const CartPageItem = ({ id, partName, price, count, manufacturer }) => {
    return (
        <div className='cart-page-item flex-row'>
            <div className='small-image'></div>
            <div>
                <p className='cart-page-name-price'>{partName} - ${price}</p>
                <p className='cart-page-manufacturer'>Manufacturer: {manufacturer}</p>
                <div className='cart-page-count flex-row'>
                    <p>Qty:</p>
                    <button className='edit-button'>-</button>
                    <input className='cart-page-count-input' type='number' value={count}></input>
                    <button className='edit-button'>+</button>
                    <button className='delete-button'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CartPageItem