import React, { useState, useEffect } from "react";

const useFetch = function (url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async function () {
      try {
        setLoading(true);
        const fetchData = await fetch(`https://dummyjson.com/${url}`);
        const res = await fetchData.json();

        if (!res) {
          throw new Error("failed to fetch data");
        }

        setData(res);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
