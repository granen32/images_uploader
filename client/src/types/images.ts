export interface ImageListWrap {
  _id: string
  key: string
  originalFileName: string
  createdAt: string
  updatedAt: string
}

export type ImageListWrapContextType = [
  ImageListWrap[] | undefined,
  (image: ImageListWrap[]) => void
]
