import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  useEffect(() => {
    // Static data already set
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
