import { ProductCard } from "../";
import { ProductsContainer } from "./styledProducts";

export const Products = ({ searchTerm, data }) => {
  const products = data
    .filter((searchedProduct) => {
      if (searchTerm === "") {
        return searchedProduct;
      } else if (
        searchedProduct.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return searchedProduct;
      }

      return 0;
    })
    .map((product, index) => <ProductCard product={product} key={index} />);

  return <ProductsContainer>{products}</ProductsContainer>;
};
