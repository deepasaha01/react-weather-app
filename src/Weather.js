import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("metric");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinate: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function changeUnit(unit) {
    setUnit(unit);
  }

  function search() {
    const apiKey = "a0afe540db51b98f494b3bc285b02663";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control search-input"
                autoFocus="on"
                onChange={handleCityChange}
                value={city}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} unit={unit} unitChange={changeUnit} />
        <WeatherForecast coordinates={weatherData.coordinate} unit={unit} />
        <Footer />
      </div>
    );
  } else {
    search();
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Watch color="rgb(135, 135, 135)" height={80} width={80} />
      </div>
    );
  }
}
