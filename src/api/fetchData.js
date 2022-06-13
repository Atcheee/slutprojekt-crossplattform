import { useState, useEffect } from "react";

const useFetchDepartures = (url, onlineState) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (onlineState) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("An error occurred while fetching, please try again.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      return;
    }
  }, [url, onlineState]);
  return { data, error };
};

export default useFetchDepartures;
