import React from "react";

export default function Product({ product }) {
  const { name, image, description, price, color } = product;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={name} />
    </div>
  );
}
