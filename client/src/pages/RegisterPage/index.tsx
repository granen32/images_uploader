import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import CustomInput from "../../common/CustomInput";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const submitHanlder = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (username.length < 3) throw new Error("회원 ID가 너무 짧아요");
      if (password.length < 6) throw new Error("비밀번호가 너무 짧아요");
      if (password !== passwordCheck)
        throw new Error("비밀번호가 일치하지 않습니다.");
      const result = await axios.post("/users/register", {
        username,
        name,
        password,
      });
      console.log(result);
      toast.success("회원가입 성공!");
      console.log({ name, username, password, passwordCheck });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <S.RegisterContainer>
        <h3>회원가입</h3>
        <form onSubmit={submitHanlder}>
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
          <button type="submit">확인</button>
        </form>
      </S.RegisterContainer>
    </>
  );
};

export default RegisterPage;
