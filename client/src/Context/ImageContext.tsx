import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { ImageListWrap, ImageListWrapContextType } from "../types/images";
import axios from "axios";

export const ImageContext = React.createContext<
  ImageListWrapContextType | undefined
>(undefined);

export const ImageProvider: FunctionComponent<ImageListWrapContextType> = (
  props
) => {
  const [images, setImages] = useState<ImageListWrap[]>([]);
  // 자식요소의 value를 넘길수있음
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
    <ImageContext.Provider value={{ images, setImages }}>
      {props.children}
    </ImageContext.Provider>
  );
};
