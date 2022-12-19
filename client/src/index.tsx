import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ImageProvider } from "./Context/ImageContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ImageProvider>
      <GlobalStyle />
      <App />
    </ImageProvider>
  </React.StrictMode>
);
