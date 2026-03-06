import React from "react";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2>Loading Users...</h2>
    </div>
  );
};

export default Loader;