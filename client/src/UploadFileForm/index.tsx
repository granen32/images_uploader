import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import ProGressBar from "./ProGressBar/index";
const UploadFileForm = () => {
  const defaultFileName = "이미지 파일을 업로드 해주세요";
  const [files, setFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState<string | undefined>();
  const [fileName, setFileName] = useState<string>(defaultFileName);
  const [percent, setPercent] = useState(0);
  const imageSelectdHandler = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    const target = evnet.currentTarget;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }
    setFile(files);
    setFileName(files.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.onload = (event: any) => setImgSrc(event.target?.result);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (files) {
      formData.append("image", files);
      try {
        const res = await axios.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (event: any) => {
            setPercent(Math.round((100 * event.loaded) / event.total));
          },
        });
        console.log({ res });
        setTimeout(() => {
          setPercent(0);
          setFileName(defaultFileName);
          setImgSrc(undefined);
        }, 3000);
        toast.success("success");
      } catch (error) {
        toast.error("error");
        setPercent(0);
        setFileName(defaultFileName);
        setImgSrc(undefined);
      }
    }
  };
  return (
    <>
      <S.ImagesWrap>
        <h2>사진첩</h2>
        <div className={`images_preview ${imgSrc && "images_preview_show"}`}>
          <img src={imgSrc} alt="이미지" />
        </div>

        <ProGressBar percent={percent} />

        <form action="" onSubmit={onSubmit}>
          <S.ImagesSeleted>
            <label htmlFor="image">{fileName}</label>
            <input
              type="file"
              id="image"
              multiple
              accept="image/*"
              onChange={imageSelectdHandler}
            />
          </S.ImagesSeleted>
          <S.ImagesButton type="submit">제출</S.ImagesButton>
        </form>
      </S.ImagesWrap>
    </>
  );
};

export default UploadFileForm;
