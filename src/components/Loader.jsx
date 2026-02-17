import React from "react";
import "../css/loadStyle.css";

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="loader"></div>
      <p className="loader-text">Cargando página...</p>
    </div>
  );
};

export default Loader;
