import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../components/ProductData";

const ProductDescription = () => {
  const { productId } = useParams();
  // const findProduct = ProductData.find((product) => product.id === productId);
  const findproduct = ProductData.filter(
    (product) => product.id === Number(productId)
  );
  if (!findproduct.length) {
    return (
      <div className="h-[55vh] flex justify-center items-center">
        <h1 className="text-center text-4xl text-red-400">
          Product not found :(
        </h1>
      </div>
    );
  }
  return (
    <div>
      <section className="product-descriptions_ mt-10">
        <div>
          <div className="for-image ">
            <img
              src={findproduct[0].imageSrc}
              className="product-image_ object-cover h-[280px]"
              alt=""
            />
          </div>
          <div className="product-details_ w-98">
            <h1 className="text-4xl text-[#f87171] font-bold">
              {findproduct[0].productName}
            </h1>
            <p>
              lorem ipsu dolor config tank women toplorem ipsu dolor config tank
              women toplorem ipsu dolor config tank women toplorem ipsu dolor
              config tank women top
            </p>
            <p className="product-price text-2xl font-bold">
              ${findproduct[0].price}
            </p>
            <div className="add-to-cart-button_">
              <button className="bg-[#292929] text-white pt-2 pb-2 pl-5 pr-5">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
