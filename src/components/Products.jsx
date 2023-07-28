import React from "react";

import Product from "./Product";

export default function Products({ products }) {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
