import React from "react";
import {useFilterContext} from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

// import ProductFilterContext from "../context/productFilterContext";

const ProductList = () => {
  const {productState} = useFilterContext();

  const {filtered_products, grid_view} = productState;

  if (grid_view === true) {
    return <GridView products={filtered_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filtered_products} />;
  }
};

export default ProductList;
