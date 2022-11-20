"use strict";
exports.id = 807;
exports.ids = [807];
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

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BtnWrapper": () => (/* binding */ BtnWrapper),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "NextBtn": () => (/* binding */ NextBtn),
/* harmony export */   "PickText": () => (/* binding */ PickText),
/* harmony export */   "PickWrapper": () => (/* binding */ PickWrapper),
/* harmony export */   "PrevBtn": () => (/* binding */ PrevBtn),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(813);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-0"
})`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(167.98deg, #0264bf 0%, #ff8678 100%);
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-1"
})`
  font-size: 1.6rem;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-2"
})`
  font-size: 3.2rem;
  margin: 2rem;
  text-align: center;
  line-height: 120%;
  color: white;
  font-weight: 700;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
    componentId: "sc-70957c29-3"
})`
  /* width: 24%; */
  width: 0%;
  margin-bottom: 1rem;
  animation: ${_animation__WEBPACK_IMPORTED_MODULE_1__.Logo} 0.4s 0.2s forwards;
`;
const PickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-4"
})`
  width: 80%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & div {
    transition: all 0.3s;
  }
  &:hover div {
    font-size: 2.3rem;
  }
  /* &:not(:hover) div {
    transition: all 0.3s;
  } */
  ${(props)=>props.selectedPick == props.id && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      & div {
        font-size: 2.3rem;
        font-weight: 700;
      }
    `}

  & img {
    width: 1.2rem;
    object-fit: contain;
  }
`;
const PickText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-5"
})`
  font-size: 2rem;
  margin: 2rem;
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-6"
})`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5vh;
`;
const PrevBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-70957c29-7"
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
    componentId: "sc-70957c29-8"
})`
  &::after {
    transform-origin: 100% 50%;
  }
`;


/***/ })

};
;