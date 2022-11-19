import styled, { keyframes, css } from "styled-components";
import * as M from "../animation";
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* overflow: hidden; */
  position: relative;
  background: linear-gradient(167.98deg, #0264bf 0%, #ff8678 100%);
`;
export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: inline-block;
  margin-top: 2rem;
  filter: grayscale(100%);
  /* ${(props) =>
    props.id % 2 == 0 &&
    css`
      & div {
        font-size: 2.3rem;
        font-weight: 700;
      }
    `} */

  &:nth-of-type(odd) {
    transform: scale(0.8, 0.8) rotate(5deg);
    transition: all 0.35s;
  }
  &:nth-of-type(odd) div::before {
    transform: rotate(6deg);
    height: 20%;
    width: 47%;
    bottom: 30px;
    right: 12px;
    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);
  }
  &:nth-of-type(even) {
    transform: scale(0.8, 0.8) rotate(-5deg);
    transition: all 0.35s;
  }
  &:nth-of-type(even) div::before {
    transform: rotate(-6deg);
    height: 20%;
    width: 47%;
    bottom: 30px;
    left: 12px;
    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);
  }
  &:hover {
    filter: none;
    transform: scale(1, 1) rotate(0deg) !important;
    transition: all 0.35s;
  }
  /* &:hover div::before {
    content: "";
    position: absolute;
    z-index: -1;
    transform: rotate(0deg);
    height: 90%;
    width: 90%;
    bottom: 0%;
    right: 5%;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    transition: all 0.35s;
  } */
`;

export const Polaroid = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.35s;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
export const MailBox = styled.div`
  cursor: pointer;
  color: #222222;
  width: 9rem;
  height: 9rem;
  position: fixed;
  font-size: 4rem;
  bottom: 3rem;
  right: 5vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  z-index: 2;
  border: 4px solid transparent;
  background-image: linear-gradient(#eee, #eee),
    linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  &:hover {
    width: 10rem;
    height: 10rem;
    font-size: 5rem;
  }
`;

export const Text = styled.div`
  font-size: 1.6rem;
`;
export const Title = styled.div`
  width: 90%;
  font-size: 2.2rem;
  margin: 2rem;
  text-align: center;
  line-height: 120%;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Modal = styled.div`
  width: 80%;
  height: 80vh;
  background-color: white;
  border-radius: 1.8em;
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: grey;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const BtnWrapper = styled.div`
  color: #222;
  font-size: 3rem;
  font-weight: 700;
  position: absolute;
  right: 2.4rem;
  top: 1.6rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const BlackBG = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 3;
`;
export const PickText = styled.div`
  font-size: 2rem;
  margin: 2rem;
`;

export const PrevBtn = styled.div`
  cursor: pointer;
  line-height: 200%;
  /* transition: 0.3s; */
  &::after {
    display: block;
    content: "";
    border-bottom: solid 1px #000;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &::after {
    transform-origin: 0% 50%;
  }
`;
export const NextBtn = styled(PrevBtn)`
  &::after {
    transform-origin: 100% 50%;
  }
`;
