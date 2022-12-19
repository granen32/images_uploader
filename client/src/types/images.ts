import { ReactNode } from "react";

export interface ImageListWrap {
  _id?: string;
  key?: string;
  originalFileName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ImageListWrapContextType = {
  images?: ImageListWrap[] | undefined;
  children?: ReactNode | undefined;
  setImages: React.Dispatch<React.SetStateAction<ImageListWrap[]>>;
};
