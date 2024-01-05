import React, { useState } from "react";
import "./WeatherForm.css"; // Import the CSS file for styling

const WeatherForm = ({ onWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace 'YOUR_API_KEY' with the actual API key you obtained.
    const apiKey = "6d6a08bfa6265fa25de1b15495afedf6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        onWeatherData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter location:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button type="submit">GET WEATHER</button>
    </form>
  );
};

export default WeatherForm;

import PropTypes from "prop-types";

WeatherForm.propTypes = {
  onWeatherData: PropTypes.func.isRequired,
};
