import React, { createContext, useEffect, useState } from "react";

// create and export context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);

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
      const response = await fetch(
        "https://plain-flip-flops-deer.cyclic.app/api/products"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
