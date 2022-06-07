import React from "react";
import useFetchWeather from "../../api/fetchWeather";
import useFetchDepartures from "../../api/fetchDepartures";
import Clock from "./clock/Clock";

function Body() {
  const { data: weather } = useFetchWeather(
    "https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=11ef9b177cbdb59d6895c31723f02320"
  );
  const { data: departure } = useFetchDepartures(
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=644710bc-1d39-4371-b149-6b7a6f0c9cdd"
  );

  return (
    <div>
      <h1><Clock /></h1>
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
