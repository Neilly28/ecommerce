import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  //   destucture product
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-gray-200 h-72 mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex w-[200px] mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 bg-red-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(id, product)}
            className="flex justify-center items-center text-white w-12 h-12"
          >
            <BsPlus className="text-3xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
