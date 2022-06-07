import React from "react";
import useFetch from "../../api/index";

function Body() {
  const { data: weather } = useFetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=11ef9b177cbdb59d6895c31723f02320"
  );
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const today = new Date();
  const curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); // add useState

  return (
    <div>
      <h1>Current date is {date}</h1>
      <h1>Current time is {curTime}</h1>
      <h1> Country: {weather && weather.name} </h1>
      <h1>
        {" "}
        Weather Description: {weather && weather.weather[0].description}{" "}
      </h1>
      <h1> Temp: {weather && Math.floor(weather.main.temp - 273.15)} </h1>
    </div>
  );
}

export default Body;
