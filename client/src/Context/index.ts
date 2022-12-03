import React, { createContext } from "react";

type ImageState = {
  _id?: string;
  key?: string;
  originalFileName?: string;
  createdAt?: string;
  updatedAt?: string;
};
const ImageStateProps = {
  _id: "",
  key: "",
  originalFileName: "",
  createdAt: "",
  updatedAt: "",
};

export const ImageConText = createContext<ImageState | undefined>(
  ImageStateProps
);

export const ImageProvider = ImageConText.Provider;
