import React, { useState } from "react";

const UploadFileForm = () => {
  const [files, setFile] = useState<File>();
  const [fileName, setFileName] =
    useState<string>("이미지 파일을 업로드 해주세요");
  return (
    <>
      <h2>사진첩</h2>
      <form action="">
        <label htmlFor="image">{fileName}</label>
        <input
          type="file"
          id="image"
          multiple
          onChange={(evnet: React.ChangeEvent<HTMLInputElement>) => {
            const target = evnet.currentTarget;
            const files = (target.files as FileList)[0];

            if (files === undefined) {
              return;
            }
            setFile(files);
            setFileName(files.name);
          }}
        />
        <ul id="output">{}</ul>
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default UploadFileForm;
