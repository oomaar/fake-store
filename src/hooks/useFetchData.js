import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {
  console.log("🚀 ~ file: useFetchData.js ~ line 4 ~ useFetchData ~ url", url);
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      await axios.get(`${url}`).then((res) => setData(res.data));
    };
    response();
  }, []);

  return data;
};

export default useFetchData;
