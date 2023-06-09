import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { BeatLoader } from "react-spinners";
import NotFound from "./NotFound";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();

  // useContext
  const { products, isPending, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => item._id == id);

  // if there is no product
  if (isPending || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="font-bold text-xl mr-3">Hang tight! Fetching data...</h1>
        <BeatLoader color="black" loading={isPending} size={25} />
      </div>
    );
  }

  // if there is no product
  if (!product) {
    return <NotFound />;
  }

  // destructure product
  const { name, price, description, picture, _id } = product;

  return (
    <section className="bg-white pt-44">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={picture} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8 px-12 md:px-0">{description}</p>
            <button
              onClick={() => addToCart(_id, product)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
