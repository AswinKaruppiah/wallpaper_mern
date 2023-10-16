import { useEffect, useState } from "react";
import Axios from "axios";

const Usefetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await Axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, [url]);

  return { data, loading, error };
  //  return { data, loading, error, reFetch };
};

export default Usefetch;

//  const reFetch = async () => {
//    setLoading(true);
//    try {
//      const res = await Axios.get(url);
//      setData(res.data);
//    } catch (err) {
//      setError(err);
//    }
//    setLoading(false);
//  };
