// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Componenets
import App from "./App";
// Style
import { ResetStyle } from "./style/ResetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ResetStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
