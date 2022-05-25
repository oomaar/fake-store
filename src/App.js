import { Loader, Products } from "./components";
import { Navbar } from "./components/Navbar/Navbar";
import useFetchData from "./hooks/useFetchData";

function App() {
  const res = useFetchData("https://fakestoreapi.com/products");

  const { data, loading } = res;

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
