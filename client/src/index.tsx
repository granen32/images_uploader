import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ImageContextProvide } from "./Context/ImageContext";
import { ImageListWrap } from "./types/images";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ImageContextProvide>
      <App />
    </ImageContextProvide>
  </React.StrictMode>
);
