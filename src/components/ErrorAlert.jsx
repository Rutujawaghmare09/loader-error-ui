import React from "react";

const ErrorAlert = ({ message, onRetry }) => {
  return (
    <div className="error-box">
      <h2>⚠ Something went wrong</h2>
      <p>{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default ErrorAlert;