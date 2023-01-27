import React from 'react'
import { ToastContainer } from 'react-toastify/dist/components'
import UploadFileForm from '../../UploadFileForm'
import ImageList from '../../UploadFileForm/ImageList'
const MainPage = () => {
  return (
    <>
      <ToastContainer />
      <UploadFileForm />
      <ImageList />
    </>
  )
}

export default MainPage
