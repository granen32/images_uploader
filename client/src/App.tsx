import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainPage from "./pages/MainPage/index";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Toolbar from "./components/Toolbar/index";
function App() {
  return (
    <>
      <ToastContainer />
      <Toolbar />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/auth/register/*" element={<RegisterPage />} />
        <Route path="/auth/login/*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
