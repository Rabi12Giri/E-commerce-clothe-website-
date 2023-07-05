import React, { createContext, useContext, useReducer } from "react";
import reducer from "../cartReducer";

const initialState = {
  cart: [],
};
const CartContext = createContext(initialState);

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext };
export { Context };
