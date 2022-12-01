import styled from "styled-components";

export const ImagesWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  .images_preview {
    width: 0%;
    margin: 10px auto 20px;
    border-radius: 10px;
    font-size: 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .images_preview_show {
    width: 75%;
    transition: 0.3s all;
  }
`;
export const ImagesSeleted = styled.div`
  height: 200px;
  border: 1px dashed black;
  background-color: bisque;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  &:hover {
    background: gray;
    transform: 0.5s;
    color: #fff;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;
export const ImagesButton = styled.button`
  width: 100%;
  border-radius: 3px;
  height: 50px;
  cursor: pointer;
`;
