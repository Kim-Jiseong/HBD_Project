import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import * as S from "../../styles/main_style";
// import { useScrollAnimation } from "hooks/useScrollAnimaiton.js";
const Main = () => {
  const router = useRouter();
  const [letter, setLetter] = useState<any[]>();
  const [photo, setPhoto] = useState<any[]>();
  const [modal, setModal] = useState(false);
  // const animatedItem = useScrollAnimation();
  const getLetter = async () => {
    await axios
      .get("http://127.0.0.1:8000/main/letter/")
      .then(function (res) {
        console.log(res.data);
        setLetter(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPhoto = async () => {
    await axios
      .get("http://127.0.0.1:8000/main/photo/")
      .then(function (res) {
        console.log(res.data);
        setPhoto(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const ModalCTL = () => {
    setModal(!modal);
    // console.log(modal);
  };
  useEffect(() => {
    getLetter();
    getPhoto();
  }, []);
  // useEffect(()=>{

  // }, [modal])
  return (
    <S.Container>
      <S.MailBox onClick={ModalCTL}>
        <i className="bi bi-envelope"></i>
      </S.MailBox>
      {modal && (
        <S.Modal>
          <S.BtnWrapper onClick={ModalCTL}>
            <i className="bi bi-x-lg"></i>
          </S.BtnWrapper>
          <S.ModalContentContainer>
            {letter &&
              letter.map((item) => (
                <S.Title key={item.id}>{item.title}</S.Title>
              ))}
          </S.ModalContentContainer>
        </S.Modal>
      )}
      {modal && <S.BlackBG></S.BlackBG>}
      <S.ItemContainer>
        {photo &&
          photo.map((item) => (
            <S.Item key={item.id} id={item.id}>
              <S.Polaroid>
                <S.Img src={item.img} />
                <S.Text>{item.date}</S.Text>
              </S.Polaroid>
            </S.Item>
          ))}
      </S.ItemContainer>
    </S.Container>
  );
};

export default Main;
