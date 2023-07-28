import React from "react";

import checkIcon from "../assets/check.png";

export default function Product({ product, addToCart }) {
  const { name, image, description, price, color, inCart } = product;
  return (
    <article className="product">
      <div className="product-image-wrapper" style={{ backgroundColor: color }}>
        <img src={image} className="product-image" alt={name} />
      </div>
      <h1 className="product-title">{name}</h1>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      {inCart ? (
        <img src={checkIcon} className="product-checkout" alt="check-icon" />
      ) : (
        <button onClick={() => addToCart(product)} className="product-checkout">
          Add to cart
        </button>
      )}
    </article>
  );
}
