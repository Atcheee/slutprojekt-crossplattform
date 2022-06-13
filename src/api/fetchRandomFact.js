import { useState, useEffect } from "react";

const useFetchRandomFact = (url, onlineState) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (onlineState) {
      const intervalID = setInterval(() => {
        const config = {
          headers: {
            "X-Api-Key": "wTBZcZjsgk8Ho/44OsSCXw==oZ131zLx4k4nq6S4",
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

export default useFetchRandomFact;
