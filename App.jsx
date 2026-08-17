import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery 🌱</h1>

        <p>
          Bring the beauty of nature into your home with our collection of
          beautiful and healthy plants.
        </p>

        <p>
          Discover indoor plants, outdoor plants, succulents, flowering plants,
          and more.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
