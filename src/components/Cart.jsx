import React from "react";

import CartItem from "./CartItem.jsx";

import logoImage from "../assets/nike.png";

export default function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  if (cart.length === 0) {
    return <h1>Your cart is empty</h1>;
  }

  const totalPrice = cart.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );

  return (
    <section className="cart-container">
      <section className="cart-header">
        <img src={logoImage} className="header-logo" alt="nike-logo" />
        <h1 className="header-title">Your Cart</h1>
        <span className="header-subtitle">{totalPrice}</span>
      </section>
      <section className="cart-list">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </section>
    </section>
  );
}
