import React, { createContext, useEffect, useReducer } from "react";
import { shoppingReducer } from "./shoppingReducer";
import { shoppingInitialState } from "./shoppingInitialState";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};