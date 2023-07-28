import React from "react";

import CartItem from "./CartItem.jsx";

import logoImage from "../assets/nike.png";

export default function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const totalPrice = Math.round(
    cart.reduce(
      (totalPrice, product) => totalPrice + product.price * product.quantity,
      0
    ) * 100
  ) / 100;

  return (
    <section className="cart-container">
      <section className="cart-header">
        <img src={logoImage} className="header-logo" alt="nike-logo" />
        <h1 className="header-title">Your Cart</h1>
        <span className="header-subtitle">{totalPrice}</span>
      </section>
      {cart.length > 0 ? (
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
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}
    </section>
  );
}
