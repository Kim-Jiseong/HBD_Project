"use strict";
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
0%{
    width: 0%;
    transform: rotate(0);
}
60%{
    transform: rotate(-15deg)
}

80%{
    width:30%;
    transform: rotate(15deg)
    
}
100%{
    width:24%;
    transform:rotate(0)
}
`;


/***/ }),

/***/ 13:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlackBG": () => (/* binding */ BlackBG),
/* harmony export */   "BtnWrapper": () => (/* binding */ BtnWrapper),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Img": () => (/* binding */ Img),
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "ItemContainer": () => (/* binding */ ItemContainer),
/* harmony export */   "MailBox": () => (/* binding */ MailBox),
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalContentContainer": () => (/* binding */ ModalContentContainer),
/* harmony export */   "NextBtn": () => (/* binding */ NextBtn),
/* harmony export */   "PickText": () => (/* binding */ PickText),
/* harmony export */   "Polaroid": () => (/* binding */ Polaroid),
/* harmony export */   "PrevBtn": () => (/* binding */ PrevBtn),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(813);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-0"
})`
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
const ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-1"
})`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-2"
})`
  display: inline-block;
  margin-top: 2rem;
  filter: grayscale(100%);
  /* ${(props)=>props.id % 2 == 0 && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
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
const Polaroid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-3"
})`
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
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
    componentId: "sc-6dd76b02-4"
})`
  max-width: 100%;
  height: auto;
`;
const MailBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-5"
})`
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
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-6"
})`
  font-size: 1.6rem;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-7"
})`
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
const Modal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-8"
})`
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
const ModalContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-9"
})`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: grey;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-10"
})`
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
const BlackBG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-11"
})`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 3;
`;
const PickText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-12"
})`
  font-size: 2rem;
  margin: 2rem;
`;
const PrevBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6dd76b02-13"
})`
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
const NextBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PrevBtn).withConfig({
    componentId: "sc-6dd76b02-14"
})`
  &::after {
    transform-origin: 100% 50%;
  }
`;


/***/ })

};
;