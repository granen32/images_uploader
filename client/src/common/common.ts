import styled from "styled-components";

export const InputCommon = styled.div`
  position: relative;
  width: 300px;
  margin: 35px auto 10px;
  span {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #666;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: 0.5s;
  }
`;

export const CommonInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 300px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
    span {
      width: 100%;
    }
  }
`;

export const CommonLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 10px;
  font-size: 20px;
  bottom: 8px;
  transition: all 0.2s;
`;
