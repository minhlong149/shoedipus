import React, { useEffect, useReducer, useState } from "react";

import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";

import * as productService from "./services/products.js";

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "add": {
      return [{ ...action.product, quantity: 1 }, ...cart];
    }
    case "remove": {
      return cart.filter((product) => product.id !== action.product.id);
    }
    case "increase": {
      return cart.map((product) => {
        if (product.id === action.product.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    }
    case "decrease": {
      return cart.map((product) => {
        if (product.id === action.product.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    }
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
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
    dispatchCart({ type: "add", product });
    setProducts(
      products.map((p) => (p.id === product.id ? { ...p, inCart: true } : p))
    );
  };

  const removeFromCart = (product) => {
    dispatchCart({ type: "remove", product });
    setProducts(
      products.map((p) => (p.id === product.id ? { ...p, inCart: false } : p))
    );
  };

  const increaseQuantity = (product) => {
    dispatchCart({ type: "increase", product });
  };

  const decreaseQuantity = (product) => {
    dispatchCart({ type: "decrease", product });
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
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </main>
  );
}

export default App;
