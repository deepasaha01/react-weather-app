import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
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
      <h1>Tokyo, Japan</h1>
      <ul>
        <li>Saturday 12:00</li>
        <li>Clear</li>
      </ul>
      <div className="row mt-4 ">
        <div className="col-6 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
          ></img>

          <span className="temperature">8</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6 ">
          <ul>
            <li>Humidity:41%</li>
            <li>Wind:1m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
