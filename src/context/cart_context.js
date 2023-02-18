import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducers";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("sfCart");
  if (localCartData === []) {
    return JSON.parse([]);
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData() !== null ? getLocalCartData() : [],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", id });
  };

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });

    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("sfCart", JSON.stringify(state.cart));
  }, [state.cart]);

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

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider };
