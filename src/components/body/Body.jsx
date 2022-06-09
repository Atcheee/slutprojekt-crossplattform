import React from "react";
import useFetchWeather from "../../api/fetchWeather";
import useFetchDepartures from "../../api/fetchDepartures";
import useFetchDogs from "../../api/fetchDogs";
import Clock from "./clock/Clock";
import Style from "./body.module.css";

function Body({ onlineState }) {
  const { data: weather } = useFetchWeather(
    process.env.REACT_APP_WEATHERAPI,
    onlineState
  );
  const { data: departure } = useFetchDepartures(
    process.env.REACT_APP_DEPARTUREAPI,
    onlineState
  );
  const { data: dog } = useFetchDogs(process.env.REACT_APP_DOGAPI, onlineState);

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
