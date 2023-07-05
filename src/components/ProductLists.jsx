import React, { useContext, useState } from "react";
import ProductData from "./ProductData";
import { Link } from "react-router-dom";
import { CartContext, useCartContext } from "./Context";

const Product = ({ id, imageSrc, productName, price, productCategory }) => {
  const { addToCart } = useCartContext();
  const [showMessage, setShowMessage] = useState(false);
  const handleAddToCart = () => {
    const product = {
      id,
      imageSrc,
      productName,
      price,
      productCategory,
    };
    addToCart(product);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const checkIfExists = ({ products }) => {};
  return (
    <>
      {showMessage && (
        <div className="absolute text-7xl z-50 bg-[#d9d9d9] tracking-[4px] flex justify-center items-center p-[12%]">
          <p>Added to cart</p>
        </div>
      )}
      <div className="product-view">
        <div className="product-image_">
          <Link to={`/productdescription/${id}`}>
            <img src={imageSrc} alt={productName} />
          </Link>
        </div>

        <div className="product-description_">
          <h3>{productName}</h3>
          <div className="product-rating">
            <i className="fa-solid fa-star fa-fade"></i>
            <i className="fa-solid fa-star fa-fade"></i>
            <i className="fa-solid fa-star fa-fade"></i>
            <i className="fa-solid fa-star fa-fade"></i>
          </div>
          <p>Price: ${price}</p>
        </div>
        <div className="add-to-cart-button relative">
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

const ProductLists = () => {
  const categories = [
    "women product",
    "men product",
    "kid product",
    "unisex product",
    "sneaker product",
    "summer product",
  ];

  return (
    <div>
      {categories.map((category) => {
        const products = ProductData.filter(
          (product) => product.productCategory === category
        );

        return (
          <div key={category}>
            <h2 className="text-4xl text-center uppercase mt-8 mb-8">
              {category}
            </h2>
            <div className="flex justify-evenly">
              {products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductLists;
