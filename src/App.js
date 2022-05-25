import logo from "./logo.svg";
import "./App.css";
import useFetchData from "./hooks/useFetchData";
import { ProductCard } from "./components/ProductCard";

function App() {
  const res = useFetchData("https://fakestoreapi.com/products");
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ res", res);

  const products = res.map((product, index) => (
    <ProductCard product={product} key={index} />
  ));

  return <div>{products}</div>;
}

export default App;
