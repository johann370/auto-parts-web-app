import React, { useEffect, useState } from 'react'
import CarPart from './CarPart'

/*
Container for car parts in the shop page

param addToCart: function to add specific car part to the cart
param removeFromCart: function to remove car part from the cart
*/
const CarParts = ({ addToCart }) => {
    const [displayParts, setDisplayParts] = useState(false);
    const [carParts, setCarParts] = useState([]);


    /*
    Function to get car parts from the database
    
    (Requirement 2.1)
    */
    useEffect(() => {
        fetch('https://jmdragon370.pythonanywhere.com/parts')
            .then(response => response.json())
            .then(data => {
                setCarParts(data);
                setDisplayParts(true);
            });
    });

    return (
        <div className='car-parts'>
            {displayParts && carParts.map((carPart) => <CarPart key={carPart.id} id={carPart.id} partName={carPart.name} price={carPart.price} manufacturer={carPart.manufacturer} addToCart={addToCart} />)}
        </div>
    )
}

export default CarParts