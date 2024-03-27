import {createContext, useContext, useEffect, useReducer} from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = () => {
  let localCartData = localStorage.getItem("CartData");
  console.log(localCartData);
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getCartData(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 5000,
};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});
  };

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id});
  };

  const clearItem = (id) => {
    dispatch({type: "CLEAR_ITEM"});
  };

  const setDecrease = (id) => {
    dispatch({type: "SET_DECREASE", payload: id});
  };
  const setIncrease = (id) => {
    dispatch({type: "SET_INCREASE", payload: id});
  };

  useEffect(() => {
    console.log(state.cart);
    localStorage.setItem("CartData", JSON.stringify(state.cart));
    dispatch({type: "TOTAL_PRICE"});
    dispatch({type: "TOTAL_ITEM"});
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeItem,
        clearItem,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export {useCartContext, CartContextProvider};
