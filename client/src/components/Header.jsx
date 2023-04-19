import React, { useContext, useEffect, useState } from "react";

// sidebar context
import { SidebarContext } from "../context/SidebarContext";

// import icons
import { BsBag } from "react-icons/bs";

// import cart context
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`p-12 fixed w-full z-10 transition-all ${
        isHomePage
          ? isActive
            ? "bg-white py-4 shadow-md text-black"
            : "bg-black py-6 text-white"
          : isActive
          ? "bg-white py-4 shadow-md"
          : "bg-none py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <h1 className="text-xl">digi.shop</h1>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
