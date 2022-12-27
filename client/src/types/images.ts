import { ReactNode } from 'react'

export interface ImageListWrap {
  _id: string
  key: string
  originalFileName: string
  createdAt: string
  updatedAt: string
}

export type ImageListWrapContextType = [
  {
    images: ImageListWrap[]
    children: ReactNode
    setImages: (image: ImageListWrap) => void
  }
]
