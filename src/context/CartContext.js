import { createContext, useEffect, useState } from "react";

import React from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curr) => {
        return acc + curr.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // update total price
  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount;
    }, 0);
    setTotal(total);
  });

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

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.amount < 99) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else if (item.id === id && item.amount === 1) {
        return null;
      } else {
        return item;
      }
    });

    // filter out null values (items that need to be removed)
    const filteredCart = updatedCart.filter((item) => item !== null);
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
