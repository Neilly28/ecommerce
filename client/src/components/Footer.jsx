import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div>
        <p className="text-black text-center">
          &copy; digi.shop {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
