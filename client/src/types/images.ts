export interface ImageListWrapProps {
  _id: string
  key: string
  originalFileName: string
  createdAt: string
  updatedAt: string
}

export type ImageListWrapContextType = {
  images: ImageListWrapProps[] | undefined
  setImages: (image: ImageListWrapProps[]) => void
}
