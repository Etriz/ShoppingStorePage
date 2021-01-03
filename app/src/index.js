import React from "react";
import ReactDOM from "react-dom";
// import "./css/index.css"; <-- need if using sass script to compile css instead of reading sass native
import "./scss/index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
