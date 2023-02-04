import React from "react";
import { CustomInput } from "../types/common";
const CustomInput = ({ label, value, setVaule }: CustomInput) => {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input type="text" value={value} />
      </div>
    </>
  );
};

export default CustomInput;
