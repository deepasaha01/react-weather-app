import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemp() {
    let maxTemp = 0;
    if (props.unit === "metric") {
      maxTemp = Math.round(props.data.temp.max);
    } else {
      maxTemp = Math.round((props.data.temp.max * 9) / 5 + 32);
    }
    return maxTemp;
  }
  function minTemp() {
    let minTemp = 0;
    if (props.unit === "metric") {
      minTemp = Math.round(props.data.temp.min);
    } else {
      minTemp = Math.round((props.data.temp.min * 9) / 5 + 32);
    }
    return minTemp;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day mb-2">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()}°</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
