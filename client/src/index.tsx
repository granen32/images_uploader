import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { ImageProvider } from "./Context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ImageProvider value={undefined}>
      <GlobalStyle />
      <App />
    </ImageProvider>
  </React.StrictMode>
);
