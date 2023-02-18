import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useProductContext } from "./productcontext";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  isLoading: false,
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  // to set the grid view

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", userValue });
  };

  //update the filter values

  const updateFilterValue = (event) => {
    const { name, value } = event.target;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // clearFilters
  const clearFilters = () => {
    return dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
