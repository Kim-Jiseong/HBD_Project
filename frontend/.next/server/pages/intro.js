"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/intro";
exports.ids = ["pages/intro"];
exports.modules = {

/***/ "./pages/animation.js":
/*!****************************!*\
  !*** ./pages/animation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": () => (/* binding */ Logo)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`\r\n0%{\r\n    width: 0%;\r\n    transform: rotate(0);\r\n}\r\n60%{\r\n    transform: rotate(-15deg)\r\n}\r\n\r\n80%{\r\n    width:30%;\r\n    transform: rotate(15deg)\r\n    \r\n}\r\n100%{\r\n    width:24%;\r\n    transform:rotate(0)\r\n}\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbmltYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRXBELE1BQU1HLE9BQU9GLHdEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FuaW1hdGlvbi5qcz83MmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0ga2V5ZnJhbWVzYFxyXG4wJXtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG59XHJcbjYwJXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZylcclxufVxyXG5cclxuODAle1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpXHJcbiAgICBcclxufVxyXG4xMDAle1xyXG4gICAgd2lkdGg6MjQlO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgwKVxyXG59XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJjc3MiLCJMb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/animation.js\n");

/***/ }),

/***/ "./pages/intro/index.tsx":
/*!*******************************!*\
  !*** ./pages/intro/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./pages/intro/style.js\");\n\n\n\n\nconst Intro = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const move = ()=>{\n        router.push(\"/main\");\n    };\n    setTimeout(move, 2000);\n    const [pageIdx, setPageIdx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://www.emojiall.com/images/240/microsoft-teams/1f389.png\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\intro\\\\index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\intro\\\\index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyby9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUVYO0FBQ1g7QUFDN0IsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNSSxPQUFPLElBQU07UUFDakJELE9BQU9FLElBQUksQ0FBQztJQUNkO0lBQ0FDLFdBQVdGLE1BQU07SUFDakIsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLHFCQUNFLDhEQUFDRSw2Q0FBVztrQkFDViw0RUFBQ1M7WUFBSUMsS0FBSTs7Ozs7Ozs7Ozs7QUFHZjtBQUVBLGlFQUFlVCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbnRyby9pbmRleC50c3g/NTYzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVcIjtcbmNvbnN0IEludHJvID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbW92ZSA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9tYWluXCIpO1xuICB9O1xuICBzZXRUaW1lb3V0KG1vdmUsIDIwMDApO1xuICBjb25zdCBbcGFnZUlkeCwgc2V0UGFnZUlkeF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmVtb2ppYWxsLmNvbS9pbWFnZXMvMjQwL21pY3Jvc29mdC10ZWFtcy8xZjM4OS5wbmdcIj48L2ltZz5cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlMiLCJJbnRybyIsInJvdXRlciIsIm1vdmUiLCJwdXNoIiwic2V0VGltZW91dCIsInBhZ2VJZHgiLCJzZXRQYWdlSWR4IiwiQ29udGFpbmVyIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intro/index.tsx\n");

/***/ }),

/***/ "./pages/intro/style.js":
/*!******************************!*\
  !*** ./pages/intro/style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnWrapper\": () => (/* binding */ BtnWrapper),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Logo\": () => (/* binding */ Logo),\n/* harmony export */   \"NextBtn\": () => (/* binding */ NextBtn),\n/* harmony export */   \"PickText\": () => (/* binding */ PickText),\n/* harmony export */   \"PickWrapper\": () => (/* binding */ PickWrapper),\n/* harmony export */   \"PrevBtn\": () => (/* binding */ PrevBtn),\n/* harmony export */   \"Text\": () => (/* binding */ Text),\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ \"./pages/animation.js\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__Container\",\n    componentId: \"sc-70957c29-0\"\n})`\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  position: relative;\r\n  background: linear-gradient(167.98deg, #0264bf 0%, #ff8678 100%);\r\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__Text\",\n    componentId: \"sc-70957c29-1\"\n})`\r\n  font-size: 1.6rem;\r\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__Title\",\n    componentId: \"sc-70957c29-2\"\n})`\r\n  font-size: 3.2rem;\r\n  margin: 2rem;\r\n  text-align: center;\r\n  line-height: 120%;\r\n  color: white;\r\n  font-weight: 700;\r\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({\n    displayName: \"style__Logo\",\n    componentId: \"sc-70957c29-3\"\n})`\r\n  /* width: 24%; */\r\n  width: 0%;\r\n  margin-bottom: 1rem;\r\n  animation: ${_animation__WEBPACK_IMPORTED_MODULE_1__.Logo} 0.4s 0.2s forwards;\r\n`;\nconst PickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__PickWrapper\",\n    componentId: \"sc-70957c29-4\"\n})`\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  & div {\r\n    transition: all 0.3s;\r\n  }\r\n  &:hover div {\r\n    font-size: 2.3rem;\r\n  }\r\n  /* &:not(:hover) div {\r\n    transition: all 0.3s;\r\n  } */\r\n  ${(props)=>props.selectedPick == props.id && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\r\n      & div {\r\n        font-size: 2.3rem;\r\n        font-weight: 700;\r\n      }\r\n    `}\r\n\r\n  & img {\r\n    width: 1.2rem;\r\n    object-fit: contain;\r\n  }\r\n`;\nconst PickText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__PickText\",\n    componentId: \"sc-70957c29-5\"\n})`\r\n  font-size: 2rem;\r\n  margin: 2rem;\r\n`;\nconst BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__BtnWrapper\",\n    componentId: \"sc-70957c29-6\"\n})`\r\n  width: 100%;\r\n  height: 4rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: absolute;\r\n  bottom: 5vh;\r\n`;\nconst PrevBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"style__PrevBtn\",\n    componentId: \"sc-70957c29-7\"\n})`\r\n  cursor: pointer;\r\n  line-height: 200%;\r\n  /* transition: 0.3s; */\r\n  &::after {\r\n    display: block;\r\n    content: \"\";\r\n    border-bottom: solid 1px #000;\r\n    transform: scaleX(0);\r\n    transition: transform 250ms ease-in-out;\r\n  }\r\n  &:hover:after {\r\n    transform: scaleX(1);\r\n  }\r\n  &::after {\r\n    transform-origin: 0% 50%;\r\n  }\r\n`;\nconst NextBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PrevBtn).withConfig({\n    displayName: \"style__NextBtn\",\n    componentId: \"sc-70957c29-8\"\n})`\r\n  &::after {\r\n    transform-origin: 100% 50%;\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyby9zdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDekI7QUFDM0IsTUFBTUksWUFBWUosdUVBQVU7OztFQUFBLENBQUM7QUFZcEMsT0FBTyxNQUFNTTs7O0VBQWlCLENBQUM7QUFHL0IsT0FBTyxNQUFNQyxRQUFRUDs7O0VBQVUsQ0FBQztBQVFoQyxPQUFPLE1BQU1RLE9BQU9SOzs7QUFBVztBQU0vQixPQUFPLE1BQU1VLGNBQWNWOzs7RUFBVSxDQUFDO0FBNEJ0Qzs7O0VBQWtDLENBQUM7QUFLbkM7OztFQUFvQyxDQUFDO0FBU3JDLE9BQU8sTUFBTWdCOzs7RUFBb0I7QUFrQjFCLE1BQU1DLE9BQUFBLHVFQUFpQkQ7OztFQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2ludHJvL3N0eWxlLmpzP2E5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMsIGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBNIGZyb20gXCIuLi9hbmltYXRpb25cIjtcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3Ljk4ZGVnLCAjMDI2NGJmIDAlLCAjZmY4Njc4IDEwMCUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTIwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIC8qIHdpZHRoOiAyNCU7ICovXHJcbiAgd2lkdGg6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYW5pbWF0aW9uOiAke00uTG9nb30gMC40cyAwLjJzIGZvcndhcmRzO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICYgZGl2IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICAmOmhvdmVyIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICB9XHJcbiAgLyogJjpub3QoOmhvdmVyKSBkaXYge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfSAqL1xyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuc2VsZWN0ZWRQaWNrID09IHByb3BzLmlkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgICYgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG5cclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQaWNrVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdG5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1dmg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQcmV2QnRuID0gc3R5bGVkLmRpdmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XHJcbiAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cclxuICAmOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzAwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAmOmhvdmVyOmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTmV4dEJ0biA9IHN0eWxlZChQcmV2QnRuKWBcclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJjc3MiLCJNIiwiQ29udGFpbmVyIiwiZGl2IiwiVGV4dCIsIlRpdGxlIiwiTG9nbyIsImltZyIsIlBpY2tXcmFwcGVyIiwicHJvcHMiLCJzZWxlY3RlZFBpY2siLCJpZCIsIlBpY2tUZXh0IiwiQnRuV3JhcHBlciIsIlByZXZCdG4iLCJOZXh0QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intro/style.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/intro/index.tsx"));
module.exports = __webpack_exports__;

})();