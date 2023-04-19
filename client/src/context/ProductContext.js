import React, { createContext, useEffect, useState } from "react";

// create and export context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //   fetch products from api
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  //   fetch products from mongodb
  useEffect(() => {
    const fetchProducts = async () => {
      setIsPending(true);
      try {
        const response = await fetch(
          "https://plain-flip-flops-deer.cyclic.app/api/products"
        );
        const data = await response.json();
        setProducts(data);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isPending, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
