// src/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "./features/cart/cartSlice";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => dispatch(setCartItems(data)));
  }, [dispatch]);

  return (
    <div className="App">
      <Cart />
    </div>
  );
};

export default App;
