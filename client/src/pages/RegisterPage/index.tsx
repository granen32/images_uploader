import React, { useEffect, useState } from "react";
import * as S from "./style";
import CustomInput from "../../common/CustomInput";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  useEffect(() => {}, []);
  return (
    <>
      <S.RegisterContainer>
        <h3>회원가입</h3>
        <form>
          <CustomInput
            label="이름"
            value={name}
            setVaule={setName}
            type="text"
          />
          <CustomInput
            label="회원ID"
            value={username}
            setVaule={setUsername}
            type="text"
          />
          <CustomInput
            label="비밀번호"
            value={password}
            setVaule={setPassword}
            type="password"
          />
          <CustomInput
            label="비밀번호 확인"
            value={passwordCheck}
            setVaule={setPasswordCheck}
            type="password"
          />
        </form>
      </S.RegisterContainer>
    </>
  );
};

export default RegisterPage;
