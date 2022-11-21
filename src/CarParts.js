import React from 'react'
import CarPart from './CarPart'

const CarParts = ({ addToCart, removeFromCart }) => {

    const carParts = [
        {
            id: 1,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 2,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 3,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
        {
            id: 4,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 5,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 6,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
        {
            id: 7,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 8,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 9,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
        {
            id: 11,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 12,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 13,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
        {
            id: 14,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 15,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 16,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
        {
            id: 17,
            name: 'Car Part',
            price: 10.00,
            manufacturer: 'manu',
        },
        {
            id: 18,
            name: 'Random',
            price: 100.50,
            manufacturer: 'ran',
        },
        {
            id: 19,
            name: 'Abc',
            price: 0.50,
            manufacturer: 'xyz',
        },
    ]

    return (
        <div className='car-parts'>
            {carParts.map((carPart) => <CarPart key={carPart.id} id={carPart.id} partName={carPart.name} price={carPart.price} manufacturer={carPart.manufacturer} addToCart={addToCart} removeFromCart={removeFromCart} />)}
        </div>
    )
}

export default CarParts