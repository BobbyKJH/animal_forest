// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// Componenets
import App from "./App";
// Style
import { ResetStyle } from "./style/ResetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ResetStyle />
      <App />
    </Provider>
  </BrowserRouter>
);
