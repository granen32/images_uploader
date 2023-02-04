import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ImageContextProvide } from "./context/ImageContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <ImageContextProvide>
        <App />
      </ImageContextProvide>
    </BrowserRouter>
  </React.StrictMode>
);
