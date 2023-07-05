import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCartContext } from "../components/Context";

const Header = () => {
  const { cart } = useCartContext();
  return (
    <header className="header bg-[#292929] text-white">
      <div className="header-section flex items-center justify-between p-7">
        <div className="logo text-3xl text-red-400">Fashionable Wears</div>
        <nav className="nav-links flex gap-x-5 ">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <div className="search-bar flex gap-x-5 text-xl relative">
          <button className="relative">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* <i class="fa-solid fa-bars"></i> */}
          <button className="relative">
            <Link to="/addtocart">
              <i className="fa-solid fa-cart-arrow-down"></i>

              <span className="absolute text-[11px] top-0 ">{cart.length}</span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
