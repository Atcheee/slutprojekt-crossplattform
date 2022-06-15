import React from "react";
import useFetchData from "../../hooks/fetchData";
import useFetchDataInterval from "../../hooks/fetchDataInterval";
import useFetchDadJoke from "../../hooks/fetchDadJoke";
import useFetchRandomFact from "../../hooks/fetchRandomFact";
import Clock from "./clock/Clock";
import Departure from "../departure/departure";
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
      {onlineState ? (
        <>
          <div className={Style.weather_container}>
            <h1> CITY: {weather && weather.name.toUpperCase()} </h1>
            <h1>
              {" "}
              WEATHER DESCRIPTION:{" "}
              {weather && weather.weather[0].description.toUpperCase()}{" "}
            </h1>
            <h1>
              {" "}
              TEMP: {weather && Math.floor(weather.main.temp - 273.15)}°{" "}
            </h1>
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
            {onlineState ? (
              <img
                src={dog && dog.message}
                alt="Please wait 10s for a image to appear :D"
              />
            ) : (
              <img
                src={dog && dog.message}
                alt="Connect to internet to be able to view this image!"
              />
            )}
          </div>
          <div className={Style.fact}>
            <h1>Random Fact: </h1>
            <h2>{fact && fact[0].fact}</h2>
          </div>
          <div className={Style.departure}>
            <Departure onlineState={onlineState} />
          </div>
          <div className={Style.dad_joke}>
            <h1>Driest Dad Joke Imaginable:</h1>
            <h2>{dadjoke && dadjoke.joke}</h2>
          </div>
        </>
      ) : (
        <h1>
          Please go online by connecting to a network if you want the full
          experience of this website!
        </h1>
      )}
    </div>
  );
}

export default Body;
