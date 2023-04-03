import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { ImageContextProvide } from "./context/ImageContext";
import AuthProvider from "./context/AuthContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <AuthProvider>
        <ImageContextProvide>
          <App />
        </ImageContextProvide>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
