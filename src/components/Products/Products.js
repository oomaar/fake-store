import { ProductCard } from "../";
import { ProductsContainer } from "./styledProducts";

export const Products = ({ data }) => {
  const products = data.map((product, index) => (
    <ProductCard product={product} key={index} />
  ));

  return <ProductsContainer>{products}</ProductsContainer>;
};
