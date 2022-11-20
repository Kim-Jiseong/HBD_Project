import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "../../styles/intro_style";
const Intro = () => {
  const router = useRouter();
  const move = () => {
    router.push("/main");
  };
  setTimeout(move, 2000);
  const [pageIdx, setPageIdx] = useState(0);
  return (
    <S.Container>
      <img src="https://www.emojiall.com/images/240/microsoft-teams/1f389.png"></img>
    </S.Container>
  );
};

export default Intro;
