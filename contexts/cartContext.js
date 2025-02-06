'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = Cookies.get("product");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


  // Add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    Cookies.set("product", JSON.stringify(updatedCart));
  };

  // Remove a single product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    Cookies.set("product", JSON.stringify(updatedCart));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);  // Set cart state to empty
    Cookies.remove("product");  // Remove from cookies
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
