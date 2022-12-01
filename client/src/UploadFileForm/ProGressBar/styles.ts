import styled from "styled-components";

export const ProGressBarWrap = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  div {
    background-color: green;
    height: 40px;
    box-sizing: border-box;
    padding-top: 10px;
    text-align: center;
    color: #fff;
    transition: 0.3s all;
  }
`;
