import React from "react";
import UploadFileForm from "./UploadFileForm/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageList from "./UploadFileForm/ImageList/index";

function App() {
  return (
    <>
      <ToastContainer />
      <UploadFileForm />
      <ImageList />
    </>
  );
}

export default App;
