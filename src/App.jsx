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

  const removeFromCart = (id) => {
    let temp = { ...cartItems };
    delete temp[id];

    setCartItems(temp);
  };

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
