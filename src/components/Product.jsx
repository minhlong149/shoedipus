import React from "react";

export default function Product({ product, addToCart }) {
  const { name, image, description, price, color, inCart } = product;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={name} />
      {inCart ? (
        <button disabled>Already in cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to cart</button>
      )}
    </div>
  );
}
