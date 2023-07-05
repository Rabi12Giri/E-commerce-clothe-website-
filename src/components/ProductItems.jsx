import React, { useState } from "react";
import styles from "../styles.module.css";
import "../style.css";
import { Link } from "react-router-dom";

const ProductItems = () => {
  const cssForPTagTailwind =
    "text-2xl tracking-[2px] text-white font-sans font-bold ";

  const gradientStyle = {
    gradStyles: {
      width: "100%",
      height: "250px",
      position: "relative",
      zIndex: "10000",
      backgroundImage: "none",
      background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
      cursor: "pointer",
    },

    centeringPTag: {
      position: "absolute",
      zIndex: "10000",
    },
  };
  return (
    <div className="product-container mt-7">
      <div
        className={`${styles.productSection} product-section flex flex-wrap justify-evenly gap-y-7 gap-x-3
      `}
      >
        {/* womens clothing */}
        <div className="image-background-desc women flex justify-center items-center overflow-hidden">
          <div className="linear-gradient" style={gradientStyle.gradStyles}>
            <button className={` ${styles.shopNowButton} `}>
              {" "}
              <Link to="/shop">Shop now</Link>
            </button>
          </div>
          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Women Clothing
          </p>
        </div>
        {/* kids clothing */}
        <div className="image-background-desc kids flex justify-center items-center ">
          <div className="linear-gradient" style={gradientStyle.gradStyles}>
            <button className={`${styles.shopNowButton}`}>
              <Link to="/shop">Shop now</Link>
            </button>
          </div>

          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Kids Clothing
          </p>
        </div>
        {/* mens clothing */}
        <div className="image-background-desc men flex justify-center items-center ">
          <div style={gradientStyle.gradStyles}>
            <button className={`${styles.shopNowButton} `}>
              <Link to="/shop">Shop now</Link>
            </button>
          </div>

          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Men Clothing
          </p>
        </div>
        {/* unisex clothing */}
        <div className="image-background-desc unisex flex justify-center items-center ">
          <div className="linear-gradient" style={gradientStyle.gradStyles}>
            <button className={`${styles.shopNowButton} none`}>
              {" "}
              <Link to="/shop">Shop now</Link>
            </button>
          </div>

          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Unisex Clothing
          </p>
        </div>
        {/* sneakers */}
        <div className="image-background-desc sneakers flex justify-center items-center ">
          <div className="linear-gradient" style={gradientStyle.gradStyles}>
            <button className={`${styles.shopNowButton} none`}>
              <Link to="/shop">Shop now</Link>
            </button>
          </div>

          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Sneakers{" "}
          </p>
        </div>
        {/* summer wears */}
        <div className="image-background-desc summer flex justify-center items-center ">
          <div className="linear-gradient" style={gradientStyle.gradStyles}>
            <button className={`${styles.shopNowButton} none`}>
              {" "}
              <Link to="/shop">Shop now</Link>
            </button>
          </div>

          <p
            className={`${cssForPTagTailwind}`}
            style={gradientStyle.centeringPTag}
          >
            Summer Wears{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
