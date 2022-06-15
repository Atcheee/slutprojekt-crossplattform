import React from "react";
import useFetchData from "../../hooks/fetchData";
import Style from "../body/body.module.css";

function Departure(onlineState) {
  const { data: departure } = useFetchData(
    process.env.REACT_APP_DEPARTURE,
    onlineState
  );
  return (
    <div>
      {" "}
      <h2>Station: {departure && departure.Departure[0].stop}</h2>
      {departure &&
        departure.Departure.slice(0, 5).map((data, index) => {
          return (
            <div key={index} className={Style.station_data}>
              <h2>{data.time}</h2>
              <h2>{data.name}</h2>
              <h2>{data.direction}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default Departure;
