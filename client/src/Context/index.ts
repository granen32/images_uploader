import React, { createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = (props) => {
  return <ImageContext.Provider>{prop.children}</ImageContext.Provider>;
};
