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
      return cart
        .map((product) => {
          if (product.id === action.product.id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
    }
    case "load": {
      return action.cart;
    }
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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

  const loadCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      dispatchCart({ type: "load", cart: JSON.parse(cart) });
    }
    setCartOpen(true);
  };

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const saveCart = () => {
    if (cartOpen) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    saveCart();
  }, [cart]);

  const addToCart = (product) => {
    dispatchCart({ type: "add", product });
  };

  const removeFromCart = (product) => {
    dispatchCart({ type: "remove", product });
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

  const productsWithCart = products.map((product) => {
    const productInCart = cart.find((p) => p.id === product.id);
    return { ...product, inCart: !!productInCart };
  });

  return (
    <main>
      <Products products={productsWithCart} addToCart={addToCart} />
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
