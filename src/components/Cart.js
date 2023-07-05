import React, { useContext } from "react";
import { useCartContext } from "./Context";
import ProductData from "./ProductData";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  setTimeout(() => {}, 2000);
  return (
    <>
      <h1 className="text-4xl text-center uppercase pt-10 pb-10 text-red-500 font-bold tracking-widest">
        Your Carts
      </h1>
      <div className="add-to-cart-products">
        {cart.map((product) => (
          <div
            className="cart-items flex gap-x-10 justify-center p-10"
            key={product.id}
          >
            <div className="image">
              <img src={product.imageSrc} alt="" />
            </div>
            <div className="product-description-cart_ w-3/4 flex items-center justify-evenly">
              <h1 className="font-bold text-xl">{product.productName}</h1>
              <div className="countHandler flex gap-x-2">
                <button className="w-[20px] bg-[#292929] text-white">-</button>
                <button>1</button>
                <button className="w-[20px] bg-[#292929] text-white">+</button>
              </div>
              <p className="text-red-500 font-bold">Price: ${product.price}</p>
              <p className="text-red-500 font-bold">SubTotal: $45</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
