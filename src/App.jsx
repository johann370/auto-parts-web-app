import React, { useState } from 'react';
import './App.css';
import CarParts from './CarParts';
import Cart from './Cart';
import CheckoutPage from './CheckoutPage';
import Header from './Header';
import ShopPage from './ShopPage';

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
      <Header />
      <CheckoutPage />
      {/* <ShopPage addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} /> */}
    </div>
  );
}

export default App;
