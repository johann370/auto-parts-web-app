import React, { useEffect, useState } from 'react'

/*
Component for displaying individual car parts in the shap page

param id: The part id
param partName: The part name
param price: The part price
param manufacturer: The part manufacturer
param addToCart: Function to add this car part to the cart
*/
const CarPart = ({ id, partName, price, manufacturer, addToCart }) => {
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    const handleAdd = () => {
        if (count <= 0) {
            return;
        }

        addToCart(id, partName, price, count, manufacturer);
    };

    return (
        <div className='car-part'>
            <div className='part-image'></div>
            <div className='name-price-div'>
                <p className='part-name' >{partName}</p>
                <p className='part-price' >${price.toFixed(2)}</p>
            </div>
            <p className='part-manufacturer' >Manufacturer: {manufacturer}</p>
            <div className='count-div'>
                <div className='flex-row quantity'>
                    <p>Qty:</p>
                    <input className='count' type='number' value={count} onChange={(e) => setCount(parseInt(e.target.value))} onKeyDown={handleSubmit}  ></input>
                </div>
                <button className='add-button' onClick={() => handleAdd()}>Add to Cart</button>
                {/* <button className='delete-button'>Delete</button> */}
            </div>
        </div>
    )
}

export default CarPart