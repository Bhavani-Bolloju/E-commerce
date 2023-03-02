import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = async function (url) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
};

const useFetch = function (url) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/${url}`,
    fetcher
  );

  return {
    data,
    error,
    loading: isLoading,
  };
};

export default useFetch;
