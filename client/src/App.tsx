import React from "react";
import UploadFileForm from "./UploadFileForm/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <UploadFileForm />
    </>
  );
}

export default App;
