import React, { FC } from "react";
import * as S from "./styles";
interface Props {
  percent: number;
}

const ProGressBar: FC<Props> = ({ percent }) => {
  return (
    <S.ProGressBarWrap>
      <div
        style={{
          width: `${percent}%`,
        }}
      >
        {percent}
      </div>
    </S.ProGressBarWrap>
  );
};

export default ProGressBar;
