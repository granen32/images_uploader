import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import ProGressBar from "./ProGressBar/index";
const UploadFileForm = () => {
  const [files, setFile] = useState<File>();
  const [fileName, setFileName] =
    useState<string>("이미지 파일을 업로드 해주세요");
  const [percent, setPercent] = useState(0);
  const imageSelectdHandler = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    const target = evnet.currentTarget;
    const files = (target.files as FileList)[0];

    if (files === undefined) {
      return;
    }
    setFile(files);
    setFileName(files.name);
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
        toast.success("success");
      } catch (error) {
        toast.error("error");
      }
    }
  };
  return (
    <>
      <S.ImagesWrap>
        <h2>사진첩</h2>
        <ProGressBar percent={percent} />

        <form action="" onSubmit={onSubmit}>
          <S.ImagesSeleted>
            <label htmlFor="image">{fileName}</label>
            <input
              type="file"
              id="image"
              multiple
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
