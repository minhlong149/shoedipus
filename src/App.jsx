import React, { useEffect, useState } from "react";

import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";

import * as productService from "./services/products.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    setProducts(
      products.map((p) => (p.id === product.id ? { ...p, inCart: true } : p))
    );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <main>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </main>
  );
}

export default App;
