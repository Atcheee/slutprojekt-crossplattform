import { useState, useEffect } from "react";

const useFetchDadJoke = (url, onlineState) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (onlineState) {
      const intervalID = setInterval(() => {
        const config = {
          headers: {
            Accept: "application/json",
          },
        };
        fetch(url, config)
          .then((res) => {
            if (!res.ok) {
              throw Error(
                "An error occurred while fetching, please try again."
              );
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
      }, 10000);
      return () => clearInterval(intervalID);
    } else {
      return;
    }
  }, [url, onlineState]);
  return { data, error };
};

export default useFetchDadJoke;
