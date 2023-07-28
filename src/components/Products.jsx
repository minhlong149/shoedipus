import React from "react";

import Product from "./Product";

export default function Products({ products, addToCart }) {
  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
