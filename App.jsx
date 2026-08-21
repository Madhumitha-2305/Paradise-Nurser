import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/products";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your online destination for
          beautiful and healthy plants.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
