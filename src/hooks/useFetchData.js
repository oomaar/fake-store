import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const response = async () => {
      setLoading(true);
      await axios.get(`${url}`).then((res) => {
        setData(res.data);
      });
      setLoading(false);
    };
    response();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
};

export default useFetchData;
