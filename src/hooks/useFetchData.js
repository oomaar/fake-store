import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      await axios.get(`${url}`).then((res) => setData(res.data));
    };
    response();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default useFetchData;
