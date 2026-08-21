import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "50px",
          borderRadius: "15px",
          maxWidth: "600px",
        }}
      >
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Welcome to Paradise Nursery, your online destination for beautiful
          and healthy plants.
        </p>

        <p>
          Explore our collection of indoor and outdoor plants and create your
          own green paradise.
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "12px 25px",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
