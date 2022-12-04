import React, { createContext, FunctionComponent } from "react";
import { ImageListWrap, ImageListWrapContextType } from "../types/images";

export const ImageContext =
  React.createContext<ImageListWrapContextType | null>(null);

export const ImageProvider: FunctionComponent<ImageListWrapContextType> = (
  props
) => {
  return (
    <ImageContext.Provider value={null}>{props.children}</ImageContext.Provider>
  );
};
