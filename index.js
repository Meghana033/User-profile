import React from "react";

import ReactDOM from "react-dom/client";

import MainApp from "./App";



const container =
  document.getElementById("root");



const appRoot =
  ReactDOM.createRoot(container);



appRoot.render(

  <React.StrictMode>

    <MainApp />

  </React.StrictMode>
);
