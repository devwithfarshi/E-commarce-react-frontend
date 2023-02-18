const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_API_DATA":
      const featureData = action.products.filter((value) => {
        return value.featured;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        featureProducts: featureData,
        products: action.products,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.singleProducts,
      };

    default:
      return {
        ...state,
      };
  }
};
export default ProductReducer;
