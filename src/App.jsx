import React, { useState } from 'react';
import './App.css';
import CarParts from './CarParts';
import Cart from './Cart';
import Header from './Header';

function App() {

  const [cartItems, setCartItems] = useState({});
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (id, partName, price, count) => {
    setCartItems((cartItems) => ({
      ...cartItems, [id]: {
        partName: partName,
        price: price,
        count: count
      }
    }))
  };

  const removeFromCart = (id) => {
    let temp = { ...cartItems }
    delete temp[id]

    setCartItems(temp)
  };

  return (
    <div>
      <Header displayCart={displayCart} setDisplayCart={setDisplayCart} />
      {displayCart && <Cart cartItems={cartItems} />}
      <div className='main'>
        <CarParts addToCart={addToCart} removeFromCart={removeFromCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
