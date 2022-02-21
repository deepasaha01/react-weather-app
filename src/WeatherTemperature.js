import React from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.unitChange("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.unitChange("metric");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
