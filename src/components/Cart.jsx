import React from "react";

import CartItem from "./CartItem.jsx";

export default function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  if (cart.length === 0) {
    return <h1>Your cart is empty</h1>;
  }

  const totalPrice = cart.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Total: {totalPrice}</p>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}
