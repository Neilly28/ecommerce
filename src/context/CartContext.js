import { createContext, useEffect, useState } from "react";

import React from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  //   add to cart
  const addToCart = (id, product) => {
    // A new object "newItem" is created by spreading all properties of the "product" object and add "amount" property = 1
    const newItem = { ...product, amount: 1 };

    // Find an existing item in the cart with the same id
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      // Increment the amount of the existing item
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      // Update the cart with the new item quantities
      setCart(updatedCart);
    } else {
      // Add the new item to the cart
      setCart([...cart, newItem]);
    }
  };
  console.log({ cart });

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
