import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5 mb-5">
        <div className="col-6 d-flex justify-content-left">
          <WeatherIcon code={props.data.icon} size={52} />
          <WeatherTemperature
            celsius={props.data.temperature}
            unit={props.unit}
            unitChange={props.unitChange}
          />
        </div>

        <div className="col-6 d-flex align-items-center justify-content-end">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{Math.round(props.data.wind)}m/s</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
