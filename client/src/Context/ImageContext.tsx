import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { ImageListWrapContextType, ImageListWrap } from '../types/images'

export const ImageContext = createContext<ImageListWrapContextType | {}>({})
export const ImageContextProvide = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [images, setImages] = useState<ImageListWrapContextType>()
  console.log(images)
  useEffect(() => {
    axios
      .get('/images')
      .then(result => {
        setImages(result.data)
        console.log(typeof result)
      })
      .catch(err => console.log(err))
    console.log(images)
  }, [])
  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  )
}
