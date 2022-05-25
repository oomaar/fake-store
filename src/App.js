import { Loader, Products } from "./components";
import { Navbar } from "./components/Navbar/Navbar";
import useFetchData from "./hooks/useFetchData";

function App() {
  const res = useFetchData("https://fakestoreapi.com/products");
  // console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ res", res);

  const { data, loading } = res;
  console.log("🚀 ~ file: Products.js ~ line 10 ~ Products ~ loading", loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Products data={data} />
    </>
  );
}

export default App;
