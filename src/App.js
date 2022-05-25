import { useState } from "react";
import { Loader, Products } from "./components";
import { Navbar } from "./components/Navbar/Navbar";
import useFetchData from "./hooks/useFetchData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const res = useFetchData("https://fakestoreapi.com/products");

  const { data, loading } = res;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Products searchTerm={searchTerm} data={data} />
    </>
  );
}

export default App;
