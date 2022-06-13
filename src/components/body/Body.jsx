import React from "react";
import useFetchData from "../../api/fetchData";
import useFetchDataInterval from "../../api/fetchDataInterval";
import useFetchDadJoke from "../../api/fetchDadJoke";
import useFetchRandomFact from "../../api/fetchRandomFact";
import Clock from "./clock/Clock";
import Style from "./body.module.css";

function Body({ onlineState }) {
  const { data: dog } = useFetchDataInterval(
    process.env.REACT_APP_DOGAPI,
    onlineState
  );
  const { data: weather } = useFetchData(
    process.env.REACT_APP_WEATHERAPI,
    onlineState
  );
  const { data: joke } = useFetchDataInterval(
    process.env.REACT_APP_JOKEAPI,
    onlineState
  );
  const { data: dadjoke } = useFetchDadJoke(
    process.env.REACT_APP_DADJOKEAPI,
    onlineState
  );
  const { data: fact } = useFetchRandomFact(
    process.env.REACT_APP_RANDOMFACT,
    onlineState
  );

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className={Style.wrapper}>
      <div className={Style.clock}>
        <div className={Style.clock_timer}>
          <h1>
            <Clock />
          </h1>
          <h3>{date}</h3>
        </div>
      </div>
      <div className={Style.weather_container}>
        <h1> CITY: {weather && weather.name.toUpperCase()} </h1>
        <h1>
          {" "}
          WEATHER DESCRIPTION:{" "}
          {weather && weather.weather[0].description.toUpperCase()}{" "}
        </h1>
        <h1> TEMP: {weather && Math.floor(weather.main.temp - 273.15)}° </h1>
        <h2>
          {" "}
          MIN-TEMP: {weather &&
            Math.floor(weather.main.temp_min - 273.15)}°{" "}
        </h2>
        <h2>
          {" "}
          MIN-TEMP: {weather &&
            Math.floor(weather.main.temp_max - 273.15)}°{" "}
        </h2>
      </div>
      <div className={Style.dog_images}>
        <img
          src={dog && dog.message}
          alt="Please wait 10s for a image to appear :D"
        />
      </div>
      <div className={Style.jokes}>
        <h1>Random Fact: </h1>
        <h2>{fact && fact[0].fact}</h2>
      </div>
      <div className={Style.dad_joke}>
        <h1>Driest Dad Joke Imaginable:</h1>
        <h2>{dadjoke && dadjoke.joke}</h2>
      </div>
    </div>
  );
}

export default Body;
