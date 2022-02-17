import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const colorMapping = {
    "01d": "#E4B783",
    "01n": "#00265A",
    "02d": "#1B8ED2",
    "02n": "#403524",
    "03d": "#1B8ED2",
    "03n": "#403524",
    "04d": "#B7B7B7",
    "04n": "#B7B7B7",
    "09d": "#668D78",
    "09n": "#668D78",
    "10d": "#668D78",
    "10n": "#668D78",
    "11d": "#668D78",
    "11n": "#668D78",
    "13d": "#DCDEDB",
    "13n": "#DCDEDB",
    "50d": "#878D92",
    "50n": "#878D92",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colorMapping[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
