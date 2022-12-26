import axios from "axios";
import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { ImageListWrapContextType } from "../types/images";

export type ImageListWrap = {
  _id?: string;
  key?: string;
  originalFileName?: string;
  createdAt?: string;
  updatedAt?: string;
};

type ImageListWrapState = ImageListWrap[];

export const ImageContext = createContext<ImageListWrapState | undefined>(
  undefined
);

export const ImageContextProvide: FunctionComponent<
  ImageListWrapContextType
> = (prop) => {
  const [images, setImages] = useState<ImageListWrap[]>([]);
  useEffect(() => {
    axios
      .get("/images")
      .then((result) => {
        setImages(result.data);
        console.log(typeof result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ImageContext.Provider value={images}>
      {prop.children}
    </ImageContext.Provider>
  );
};
