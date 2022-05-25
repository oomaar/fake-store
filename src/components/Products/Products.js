import useFetchData from "../../hooks/useFetchData";
import { ProductCard } from "../";
import { ProductsContainer } from "./styledProducts";

export const Products = () => {
  const res = useFetchData("https://fakestoreapi.com/products");
  // console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ res", res);

  const { data, loading } = res;
  console.log("🚀 ~ file: Products.js ~ line 10 ~ Products ~ loading", loading);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  const products = data.map((product, index) => (
    <ProductCard product={product} key={index} />
  ));

  return <ProductsContainer>{products}</ProductsContainer>;
};
