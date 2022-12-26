import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ImageContextProvide } from "./Context/ImageContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ImageContextProvide>
      <GlobalStyle />
      <App />
    </ImageContextProvide>
  </React.StrictMode>
);
