import {createContext, useContext, useEffect, useReducer} from "react";
import productFilterReducer from "../reducer/productFilterReducer";
import {useProductContext} from "./ProductContext";

const FilterProductContext = createContext();

const initialProductState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort_value: "noSort",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

const FilterProductProvider = ({children}) => {
  const [productState, dispatch] = useReducer(
    productFilterReducer,
    initialProductState
  );

  const {products} = useProductContext();
  //   console.log(products);

  // to set the grid view
  const setGridView = () => {
    return dispatch({type: "SET_GRID_VIEW"});
  };

  // to set the list view
  const setListView = () => {
    return dispatch({type: "SET_LIST_VIEW"});
  };

  //get sorting valuje function
  const getSortingValue = (e) => {
    let userSortValue = e.target.value;
    console.log(userSortValue);
    return dispatch({type: "GET_SORT_VALUE", payload: userSortValue});
  };

  //update Filter Value -
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
  };

  const clearFilters = () => {
    dispatch({type: "POPULATE_PRODUCT_DATA", payload: products});
  };

  useEffect(() => {
    dispatch({
      type: "SORTING_PRODUCTS",
      payload: products,
    });
    dispatch({
      type: "FILTER_PRODUCTS",
    });
  }, [products, productState.sort_value, productState.filters]);

  useEffect(() => {
    dispatch({type: "POPULATE_PRODUCT_DATA", payload: products});
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{
        productState,
        setGridView,
        setListView,
        getSortingValue,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterProductContext);
};

export {useFilterContext, FilterProductProvider};
