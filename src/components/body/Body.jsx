import React from "react";
import useFetchWeather from "../../api/fetchWeather";
import useFetchDepartures from "../../api/fetchDepartures";
import useFetchDogs from "../../api/fetchDogs";
import Clock from "./clock/Clock";
import Style from "./body.module.css";

function Body() {
  const { data: weather } = useFetchWeather(
    "https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=11ef9b177cbdb59d6895c31723f02320"
  );
  const { data: departure } = useFetchDepartures(
    "https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=644710bc-1d39-4371-b149-6b7a6f0c9cdd"
  );
  const { data: dog } = useFetchDogs("https://dog.ceo/api/breeds/image/random");

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className={Style.wrapper}>
      <div className={Style.clock}>
        <h1 className={Style.clock_timer}>
          <Clock />
        </h1>
      </div>
      <div className={Style.weather_container}>
        <h1> City: {weather && weather.name} </h1>
        <h1>
          {" "}
          Weather Description: {weather && weather.weather[0].description}{" "}
        </h1>
        <h1> Temp: {weather && Math.floor(weather.main.temp - 273.15)}° </h1>
      </div>
      <div className={Style.dog_images}>
        <img src={dog && dog.message} alt="Random dog" />
      </div>
    </div>
  );
}

export default Body;
