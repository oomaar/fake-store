import useFetchData from "../../hooks/useFetchData";
import { ProductCard } from "../";
import { ProductsContainer } from "./styledProducts";

export const Products = () => {
  const res = useFetchData("https://fakestoreapi.com/products");
  // console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ res", res);

  const products = res.map((product, index) => (
    <ProductCard product={product} key={index} />
  ));

  return <ProductsContainer>{products}</ProductsContainer>;
};
