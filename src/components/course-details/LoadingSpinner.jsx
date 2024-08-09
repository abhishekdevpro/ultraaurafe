import React from "react";

const LoadingSpinner = () => (
  <div className="container mt-5">
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;