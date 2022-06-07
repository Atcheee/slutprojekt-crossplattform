import React, { useState, useEffect } from "react";

const url =
  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=11ef9b177cbdb59d6895c31723f02320";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const index = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const data = fetchData()
      .then(setWeather(data))
      .catch((error) => {
        console.log("error fetching the data");
      });
  }, []);

  return <div>{weather}</div>;
};

export default index;
