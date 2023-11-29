import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("ashishCart");
  if (!newCartData) {
    console.log("Cart is empty");
    return [];
  } else return JSON.parse(newCartData);
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //increment and decrement the product

  function setDecrease(id) {
    dispatch({ type: "SET_DECREMENT", payload: id });
  }

  function setIncrease(id) {
    dispatch({ type: "SET_INCREMENT", payload: id });
  }

  //to remove individual item from cart
  const removeItem = (id) => {
    console.log("remove item function is being called");
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  //to add the data in local storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("ashishCart", JSON.stringify(state.cart));
  }, [state]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
