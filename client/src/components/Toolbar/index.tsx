import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
const Toolbar = () => {
  return (
    <>
      <S.ToolbarContainer>
        <span>
          <Link to="/">홈</Link>
        </span>
        <span>
          <Link to="/auth/register">회원가입</Link>
        </span>
        <span>
          <Link to="/auth/login">로그인</Link>
        </span>
      </S.ToolbarContainer>
    </>
  );
};

export default Toolbar;
