"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/main/style.js":
/*!*****************************!*\
  !*** ./pages/main/style.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlackBG\": function() { return /* binding */ BlackBG; },\n/* harmony export */   \"BtnWrapper\": function() { return /* binding */ BtnWrapper; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"Item\": function() { return /* binding */ Item; },\n/* harmony export */   \"ItemContainer\": function() { return /* binding */ ItemContainer; },\n/* harmony export */   \"MailBox\": function() { return /* binding */ MailBox; },\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; },\n/* harmony export */   \"NextBtn\": function() { return /* binding */ NextBtn; },\n/* harmony export */   \"PickText\": function() { return /* binding */ PickText; },\n/* harmony export */   \"Polaroid\": function() { return /* binding */ Polaroid; },\n/* harmony export */   \"PrevBtn\": function() { return /* binding */ PrevBtn; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ \"./pages/animation.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  display: flex;\\n  margin: 0 auto;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh;\\n  /* overflow: hidden; */\\n  position: relative;\\n  background: linear-gradient(167.98deg, #0264bf 0%, #ff8678 100%);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 80%;\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      & div {\\n        font-size: 2.3rem;\\n        font-weight: 700;\\n      }\\n    \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: inline-block;\\n  margin-top: 2rem;\\n  filter: grayscale(100%);\\n  /* \",\n        ' */\\n\\n  &:nth-of-type(odd) {\\n    transform: scale(0.8, 0.8) rotate(5deg);\\n    transition: all 0.35s;\\n  }\\n  &:nth-of-type(odd) div::before {\\n    transform: rotate(6deg);\\n    height: 20%;\\n    width: 47%;\\n    bottom: 30px;\\n    right: 12px;\\n    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);\\n  }\\n  &:nth-of-type(even) {\\n    transform: scale(0.8, 0.8) rotate(-5deg);\\n    transition: all 0.35s;\\n  }\\n  &:nth-of-type(even) div::before {\\n    transform: rotate(-6deg);\\n    height: 20%;\\n    width: 47%;\\n    bottom: 30px;\\n    left: 12px;\\n    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);\\n  }\\n  &:hover {\\n    filter: none;\\n    transform: scale(1, 1) rotate(0deg) !important;\\n    transition: all 0.35s;\\n  }\\n  /* &:hover div::before {\\n    content: \"\";\\n    position: absolute;\\n    z-index: -1;\\n    transform: rotate(0deg);\\n    height: 90%;\\n    width: 90%;\\n    bottom: 0%;\\n    right: 5%;\\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);\\n    transition: all 0.35s;\\n  } */\\n'\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background: #fff;\\n  padding: 1rem;\\n  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);\\n  &::before {\\n    content: \"\";\\n    position: absolute;\\n    z-index: -1;\\n    transition: all 0.35s;\\n  }\\n'\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  max-width: 100%;\\n  height: auto;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  cursor: pointer;\\n  color: #222222;\\n  width: 9rem;\\n  height: 9rem;\\n  position: fixed;\\n  font-size: 4rem;\\n  bottom: 3rem;\\n  right: 5vw;\\n  background-color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 9999px;\\n  z-index: 2;\\n  border: 4px solid transparent;\\n  background-image: linear-gradient(#eee, #eee),\\n    linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);\\n  background-origin: border-box;\\n  background-clip: content-box, border-box;\\n  margin: 10px;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);\\n  transition: 0.3s;\\n  &:hover {\\n    width: 10rem;\\n    height: 10rem;\\n    font-size: 5rem;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 1.6rem;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 3.2rem;\\n  margin: 2rem;\\n  text-align: center;\\n  line-height: 120%;\\n  color: white;\\n  font-weight: 700;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 80%;\\n  height: 80vh;\\n  background-color: white;\\n  border-radius: 1.8em;\\n  position: fixed;\\n  z-index: 4;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #222;\\n  font-size: 3rem;\\n  font-weight: 700;\\n  position: absolute;\\n  right: 2.4rem;\\n  top: 1.6rem;\\n  transition: 0.3s;\\n  &:hover {\\n    transform: rotate(360deg);\\n  }\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  background-color: #000;\\n  z-index: 3;\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 2rem;\\n  margin: 2rem;\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  cursor: pointer;\\n  line-height: 200%;\\n  /* transition: 0.3s; */\\n  &::after {\\n    display: block;\\n    content: \"\";\\n    border-bottom: solid 1px #000;\\n    transform: scaleX(0);\\n    transition: transform 250ms ease-in-out;\\n  }\\n  &:hover:after {\\n    transform: scaleX(1);\\n  }\\n  &::after {\\n    transform-origin: 0% 50%;\\n  }\\n'\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  &::after {\\n    transform-origin: 100% 50%;\\n  }\\n\"\n    ]);\n    _templateObject14 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Container\",\n    componentId: \"sc-e456b8f7-0\"\n})(_templateObject());\nconst ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__ItemContainer\",\n    componentId: \"sc-e456b8f7-1\"\n})(_templateObject1());\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Item\",\n    componentId: \"sc-e456b8f7-2\"\n})(_templateObject3(), (props)=>props.id % 2 == 0 && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2()));\nconst Polaroid = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Polaroid\",\n    componentId: \"sc-e456b8f7-3\"\n})(_templateObject4());\nconst Img = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n    displayName: \"style__Img\",\n    componentId: \"sc-e456b8f7-4\"\n})(_templateObject5());\nconst MailBox = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__MailBox\",\n    componentId: \"sc-e456b8f7-5\"\n})(_templateObject6());\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Text\",\n    componentId: \"sc-e456b8f7-6\"\n})(_templateObject7());\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Title\",\n    componentId: \"sc-e456b8f7-7\"\n})(_templateObject8());\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Modal\",\n    componentId: \"sc-e456b8f7-8\"\n})(_templateObject9());\nconst BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__BtnWrapper\",\n    componentId: \"sc-e456b8f7-9\"\n})(_templateObject10());\nconst BlackBG = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__BlackBG\",\n    componentId: \"sc-e456b8f7-10\"\n})(_templateObject11());\nconst PickText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__PickText\",\n    componentId: \"sc-e456b8f7-11\"\n})(_templateObject12());\nconst PrevBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__PrevBtn\",\n    componentId: \"sc-e456b8f7-12\"\n})(_templateObject13());\nconst NextBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PrevBtn).withConfig({\n    displayName: \"style__NextBtn\",\n    componentId: \"sc-e456b8f7-13\"\n})(_templateObject14());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluL3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ3pCO0FBQzNCLE1BQU1JLFlBQVlKLHdFQUFVOzs7c0JBV2pDO0FBQ0ssTUFBTU0sZ0JBQWdCTix3RUFBVTs7O3VCQUlyQztBQUVLLE1BQU1PLE9BQU9QLHdFQUFVOzs7dUJBSXZCLENBQUNRLFFBQ0pBLE1BQU1DLEVBQUUsR0FBRyxLQUFLLEtBQ2hCUCxzREFBR0Esc0JBZ0RMO0FBRUssTUFBTVEsV0FBV1Ysd0VBQVU7Ozt1QkFVaEM7QUFDSyxNQUFNVyxNQUFNWCx3RUFBVTs7O3VCQUczQjtBQUNLLE1BQU1hLFVBQVViLHdFQUFVOzs7dUJBNEIvQjtBQUVLLE1BQU1jLE9BQU9kLHdFQUFVOzs7dUJBRTVCO0FBQ0ssTUFBTWUsUUFBUWYsd0VBQVU7Ozt1QkFPN0I7QUFDSyxNQUFNZ0IsUUFBUWhCLHdFQUFVOzs7dUJBYTdCO0FBQ0ssTUFBTWlCLGFBQWFqQix3RUFBVTs7O3dCQVdsQztBQUVLLE1BQU1rQixVQUFVbEIsd0VBQVU7Ozt3QkFNL0I7QUFDSyxNQUFNbUIsV0FBV25CLHdFQUFVOzs7d0JBR2hDO0FBRUssTUFBTW9CLFVBQVVwQix3RUFBVTs7O3dCQWlCL0I7QUFDSyxNQUFNcUIsVUFBVXJCLDZEQUFNQSxDQUFDb0I7Ozt3QkFJNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9zdHlsZS5qcz8yMjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0ICogYXMgTSBmcm9tIFwiLi4vYW5pbWF0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjcuOThkZWcsICMwMjY0YmYgMCUsICNmZjg2NzggMTAwJSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAvKiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmlkICUgMiA9PSAwICYmXHJcbiAgICBjc3NgXHJcbiAgICAgICYgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICBgfSAqL1xyXG5cclxuICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCkgcm90YXRlKDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH1cclxuICAmOm50aC1vZi10eXBlKG9kZCkgZGl2OjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMi4xcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpIHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XHJcbiAgfVxyXG4gICY6bnRoLW9mLXR5cGUoZXZlbikgZGl2OjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMi4xcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XHJcbiAgfVxyXG4gIC8qICY6aG92ZXIgZGl2OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb2xhcm9pZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1haWxCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuICB3aWR0aDogOXJlbTtcclxuICBoZWlnaHQ6IDlyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBib3R0b206IDNyZW07XHJcbiAgcmlnaHQ6IDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNlZWUsICNlZWUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmJmY2I5YmUsICNmZmNkZjNhYSwgIzY1ZDNmZmFhKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICAmOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS44ZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQnRuV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyLjRyZW07XHJcbiAgdG9wOiAxLjZyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrQkcgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgei1pbmRleDogMztcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBpY2tUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZXZCdG4gPSBzdHlsZWQuZGl2YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjAwJTtcclxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMDAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICY6aG92ZXI6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOZXh0QnRuID0gc3R5bGVkKFByZXZCdG4pYFxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImtleWZyYW1lcyIsImNzcyIsIk0iLCJDb250YWluZXIiLCJkaXYiLCJJdGVtQ29udGFpbmVyIiwiSXRlbSIsInByb3BzIiwiaWQiLCJQb2xhcm9pZCIsIkltZyIsImltZyIsIk1haWxCb3giLCJUZXh0IiwiVGl0bGUiLCJNb2RhbCIsIkJ0bldyYXBwZXIiLCJCbGFja0JHIiwiUGlja1RleHQiLCJQcmV2QnRuIiwiTmV4dEJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main/style.js\n"));

/***/ })

});