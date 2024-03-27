export default function productReducer(state, action) {
  switch (action.type) {
    case "Is_Loading":
      return {...state, isLoading: true};

    case "Is_Error":
      return {...state, isLoading: false, isError: true};

    case "Product_Data":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        isError: false,
      };

    case "Featured_Products":
      return {
        ...state,
        featureProducts: action.payload.filter((p) => p.featured === true),
        isLoading: false,
        products: action.payload,
        isError: false,
      };

    case "Is_Single_Loading":
      return {...state, isSingleLoading: true};

    case "Is_Signle_Error":
      return {...state, isSingleLoading: false, isError: true};

    case "Single_Product_Data":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
        isSingleError: false,
      };

    default:
      return state;
  }

  //   if (action.type === "Is_Loading") {
  //     return {...state, isLoading: true};
  //   }
  //   if (action.type === "Is_Error") {
  //     return {...state, isError: true};
  //   }
  //   if (action.type === "Product_Data") {
  //     return {...state, products: action.payload};
  //   }
  //   if (action.type === "Featured_Products") {
  //     return {
  //       ...state,
  //       featuredProducts: action.payload.filter((p) => p.featured === true),
  //     };
  //   }
}
