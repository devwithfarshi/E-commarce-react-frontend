import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Product from "./Product";
const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (!grid_view) {
    return <ListView products={filter_products} />;
  }
  return <GridView products={filter_products} />;
};
export default ProductList;
