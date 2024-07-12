import React from "react";
import "./Weather.css";

const Weather = ({ data }) => {
  console.log("Data:", data);

  if (!data || !data.sys || !data.sys.country) {
    return <div>Loading...</div>;
  }

  const { main, name, sys, weather, wind } = data;
  console.log("Weather Object:", weather[0]);
  console.log("Weather Description:", weather[0].main);

  const weatherIcons = {
    Clear: "sunny.png",
    Clouds: "cloudy.png",
    Rain: "rainy.png",
    Snow: "snow.png",
    "broken clouds": "partly-cloudy.png",
    "scattered clouds": "partly-cloudy.png",
    Thunderstorm: "thunderstorm.png",
    Windy: "windy.png",
    Fog: "cloudy.png",
    Mist: "cloudy.png",
  };

  // Convert temperature from Kelvin to Celsius
  const temperatureCelsius = Math.round(main.temp - 273.15);

  // Use the mapped icon or a default icon if not found
  const weatherIcon = weatherIcons[weather[0].main] || "partly-cloudy.png";

  return (
    <div className="weather-info">
      <div className="location">
        <img src={process.env.PUBLIC_URL + "location.png"} alt="loc" />
        <h2>
          {name}, {sys.country}
        </h2>
      </div>
      <p className="temp">
        <nobr>{temperatureCelsius} °C</nobr>
      </p>
      <div className="weathericon">
        <img
          src={process.env.PUBLIC_URL + "/" + weatherIcon}
          alt="Weather Icon"
        />
        <p className="weatherdesc">
          {weather[0].description} <br></br>
        </p>
      </div>
      <div className="humiditydiv">
        <img src={process.env.PUBLIC_URL + "waterdrop.png"} alt="humidity" />
        <p className="text">Humidity {main.humidity}%</p>
      </div>
      <div className="windspeeddiv">
        <img src={process.env.PUBLIC_URL + "windspeed.png"} alt="wind-speed" />
        <p className="text">Wind Speed {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;

// import PropTypes from "prop-types";

// Weather.propTypes = {
//   data: PropTypes.shape({
//     main: PropTypes.shape({
//       temp: PropTypes.number,
//       humidity: PropTypes.number,
//     }),
//     name: PropTypes.string,
//     sys: PropTypes.shape({
//       country: PropTypes.string,
//     }),
//     weather: PropTypes.arrayOf(
//       PropTypes.shape({
//         main: PropTypes.string,
//         description: PropTypes.string,
//       }),
//     ),
//     wind: PropTypes.shape({
//       speed: PropTypes.number,
//     }),
//   }),
// };
