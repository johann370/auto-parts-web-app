import React, { useEffect, useState } from 'react'
import CountEdit from './CountEdit';

const CarPart = ({ id, partName, price, manufacturer, addToCart, removeFromCart }) => {
    const [count, setCount] = useState(0);
    const [displayAddButton, setDisplayAddButton] = useState(true)
    const [displayCountEdit, setDisplayCountEdit] = useState(false)

    useEffect(() => {
        if (count <= 0) {
            setDisplayAddButton(true);
            setDisplayCountEdit(false);
            removeFromCart(id)
        } else if (count > 0) {
            setDisplayAddButton(false);
            setDisplayCountEdit(true);
            addToCart(id, partName, price, count);
        }
    }, [count]);

    return (
        <div className='car-part'>
            <div className='part-image'></div>
            <p className='part-name' >{partName}</p>
            <p className='part-manufacturer' >Manufacturer: {manufacturer}</p>
            <div className='price-div'>
                <p className='part-price' >${price}</p>
                {displayAddButton && <button className='add-button' onClick={() => setCount(1)}>Add to Cart</button>}
                {displayCountEdit && <CountEdit count={count} setCount={setCount} />}
            </div>
        </div>
    )
}

export default CarPart