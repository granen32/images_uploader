import React, { FC } from "react";
import { CustomInputType } from "../types/common";
import * as S from "./common";
const CustomInput: FC<CustomInputType> = ({
  label,
  value,
  setVaule,
  type = "text",
}) => {
  return (
    <>
      <S.InputCommon>
        <S.CommonInput
          type={type}
          value={value}
          onChange={(e) => setVaule(e.target.value)}
          required
        />
        <S.CommonLabel htmlFor={label}>{label}</S.CommonLabel>
        <span></span>
      </S.InputCommon>
    </>
  );
};

export default CustomInput;
