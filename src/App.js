import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import Weather from "./components/Weather";
import "./App.css"; // Import the global CSS file

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="container">
      <h1>WEATHER APP</h1>
      <WeatherForm onWeatherData={handleWeatherData} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
