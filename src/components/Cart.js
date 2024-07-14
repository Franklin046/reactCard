// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity <= 0}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </div>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total Quantity: {totalQuantity}</p>
        <p className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
