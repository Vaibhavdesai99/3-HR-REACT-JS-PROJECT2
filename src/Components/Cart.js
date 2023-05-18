import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
