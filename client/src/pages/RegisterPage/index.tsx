import React, { useEffect, useState } from "react";
import * as S from "./style";
const RegisterPage = () => {
  const [name, setName] = useState("");
  useEffect(() => {}, []);
  return (
    <>
      <S.RegisterContainer>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </S.RegisterContainer>
    </>
  );
};

export default RegisterPage;
