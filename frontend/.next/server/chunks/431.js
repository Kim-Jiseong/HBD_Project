"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "CardContainer": () => (/* binding */ CardContainer),
/* harmony export */   "Splash": () => (/* binding */ Splash)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-f91b6aa7-0"
})`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  /* margin-bottom: -120px; */
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-f91b6aa7-1"
})`
  font-size: 164px;
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;
const Splash = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-f91b6aa7-2"
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  clip-path: path(
    "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
  );
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;