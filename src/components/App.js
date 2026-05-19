import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
