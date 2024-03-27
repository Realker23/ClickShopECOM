export default function productFilterReducer(state, action) {
  switch (action.type) {
    case "POPULATE_PRODUCT_DATA":
      const arrPrice = action.payload.map((e) => e.price);
      const maxPrice = Math.max(...arrPrice);
      // console.log(maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice: maxPrice,
          text: "",
          category: "all",
          company: "all",
          color: "all",
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];
      // console.log(state.sort_value);

      if (state.sort_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (state.sort_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.price - a.price;
        });
      }

      if (state.sort_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sort_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      if (state.sort_value === "noSort") {
        newSortData = tempSortProduct;
      }
      // console.log(newSortData);

      return {
        ...state,
        filtered_products: newSortData,
      };

    case "FILTER_PRODUCTS":
      let {filtered_products} = state;
      let tempFilterProduct = [...filtered_products];
      // console.log(tempFilterProduct);

      const {text, category, company, color, price} = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
        // console.log(tempFilterProduct);
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      // console.log(tempFilterProduct);
      return {
        ...state,
        filtered_products: tempFilterProduct,
      };

    case "UPDATE_FILTERS_VALUE":
      const {name, value} = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    default:
      return state;
  }
}
