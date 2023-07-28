import React from "react";

import Product from "./Product";

import logoImage from "../assets/nike.png";

export default function Products({ products, addToCart }) {
  return (
    <section className="products-container">
      <section className="products-header">
        <img src={logoImage} className="header-logo" alt="nike-logo" />
        <h1 className="header-title">Our Products</h1>
      </section>
      <section className="products-list">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </section>
    </section>
  );
}
