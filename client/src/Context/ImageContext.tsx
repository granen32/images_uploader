import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { ImageListWrapContextType, ImageListWrapProps } from '../types/images'

const defaultState = [
  {
    _id: '',
    key: '',
    originalFileName: '',
    createdAt: '',
    updatedAt: '',
  },
]

export const ImageContext = createContext<ImageListWrapContextType>({
  images: defaultState,
  setImages: () => {
    return null
  },
})
export const ImageContextProvide = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [images, setImages] = useState<ImageListWrapProps[]>()
  useEffect(() => {
    axios
      .get('/images')
      .then(result => {
        setImages(result.data)
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
