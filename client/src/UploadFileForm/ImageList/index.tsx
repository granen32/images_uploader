import React, { FC, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import { ImageContext } from "../../Context/ImageContext";
interface ImageListWrap {
  _id?: string;
  key?: string;
  originalFileName?: string;
  createdAt?: string;
  updatedAt?: string;
}

// backend 에서 호출시 axios 가 필요함
// 사이드 이펙트가 발생할 경우 유즈 이펙트
// 사이드 이펙트 === 함수 안에서 발생하는 게 아니라 외부적인거에 영향을 주거나 받는 경우 유즈이펙트 활용
const ImageList = () => {
  const value3 = useContext(ImageContext);
  console.log(value3);
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
  const ImageListWrap: FC<ImageListWrap> = () => {
    return (
      <S.ImageListBox>
        <h3>Image List</h3>
        {images.map((el, _) => (
          <img
            src={`http://localhost:5001/uploads/${el.key}`}
            key={el.key}
            alt={el.originalFileName}
          />
        ))}
      </S.ImageListBox>
    );
  };
  return (
    <div>
      <ImageListWrap />
    </div>
  );
};

export default ImageList;
