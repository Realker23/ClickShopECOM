import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import productReducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async (url) => {
    dispatch({type: "Is_Loading"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products);
      dispatch({type: "Product_Data", payload: products});
      dispatch({type: "Featured_Products", payload: products});
    } catch (error) {
      dispatch({type: "Is_Error"});
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({type: "Is_Single_Loading"});
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      console.log(singleProduct);
      dispatch({type: "Single_Product_Data", payload: singleProduct});
    } catch (error) {
      dispatch({type: "Is_Signle_Error"});
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{...state, getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export {AppProvider, AppContext, useProductContext};
