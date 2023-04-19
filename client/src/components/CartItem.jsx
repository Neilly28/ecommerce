import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

// import cart context
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructure item
  const { _id, name, picture, price, amount } = item;
  return (
    <div className="flex gap-x-4 px-4 lg:px-6 border-b border-gray-200 w-full text-black">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${_id}`}>
          <img className="max-w-[80px]" src={picture} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${_id}`}
              className="text-sm uppercase max-w-[240px] hover:underline"
            >
              {name}
            </Link>
            <div
              onClick={() => removeFromCart(_id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() => decreaseAmount(_id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(_id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {parseFloat(price).toFixed(2)}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">
              $ {parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
