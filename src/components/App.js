import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {

  // Static weather data
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  // Optional useEffect (requirement mentioned it)
  useEffect(() => {
    console.log("Weather Loaded");
  }, []);

  const { temperature, conditions } = weather;

  // Conditional styling
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      {/* Do not remove the main div */}

      {/* Temperature */}
      <p>
        Temperature: 
        <span style={tempStyle}>
          {temperature}
        </span>
      </p>

      {/* Conditions */}
      <p>
        Conditions: {conditions}
      </p>

    </div>
  )
}

export default App;
