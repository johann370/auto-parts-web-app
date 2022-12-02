import React, { useState } from 'react';
import './App.css';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import PurchasePage from './PurchasePage';
import Header from './Header';
import ShopPage from './ShopPage';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState({});
  const [displayCart, setDisplayCart] = useState(false);

  /*
  Function to add a part to the cart

  param id: The part id to add
  param partName: The part name
  param price: The part price
  param count: The part count
  param manufacturer: The part manufacturer
  (Requirement 2.3)
  */
  const addToCart = (id, partName, price, count, manufacturer) => {
    setCartItems((cartItems) => ({
      ...cartItems, [id]: {
        id: id,
        partName: partName,
        price: price,
        count: count,
        manufacturer: manufacturer,
      }
    }))
  };

  /*
  Function to remove a part from the cart

  param id: The part id to remove
  (Requirement 2.3)
  */
  const removeFromCart = (id) => {
    let temp = { ...cartItems };
    delete temp[id];

    setCartItems(temp);
  };

  /*
  Function to update count of a part
  
  param id: The part id to update
  param newCount: The new count of the part
  (Requirement 2.12)
  */
  const setCount = (id, newCount) => {
    let temp = { ...cartItems };
    temp[id].count = newCount;

    setCartItems(temp);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='shop' element={<ShopPage addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />
            <Route path='cart' element={<CartPage cartItems={cartItems} setCount={setCount} removeFromCart={removeFromCart} />} />
            <Route path='checkout' element={<CheckoutPage cartItems={cartItems} />} />
            <Route path='purchased' element={<PurchasePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
