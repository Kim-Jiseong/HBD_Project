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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnWrapper\": function() { return /* binding */ BtnWrapper; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"Item\": function() { return /* binding */ Item; },\n/* harmony export */   \"ItemContainer\": function() { return /* binding */ ItemContainer; },\n/* harmony export */   \"MailBox\": function() { return /* binding */ MailBox; },\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; },\n/* harmony export */   \"NextBtn\": function() { return /* binding */ NextBtn; },\n/* harmony export */   \"PickText\": function() { return /* binding */ PickText; },\n/* harmony export */   \"PickWrapper\": function() { return /* binding */ PickWrapper; },\n/* harmony export */   \"Polaroid\": function() { return /* binding */ Polaroid; },\n/* harmony export */   \"PrevBtn\": function() { return /* binding */ PrevBtn; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ \"./pages/animation.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  display: flex;\\n  margin: 0 auto;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh;\\n  /* overflow: hidden; */\\n  position: relative;\\n  background: linear-gradient(167.98deg, #0264bf 0%, #ff8678 100%);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 80%;\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      & div {\\n        font-size: 2.3rem;\\n        font-weight: 700;\\n      }\\n    \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: inline-block;\\n  margin-top: 2rem;\\n  filter: grayscale(100%);\\n  /* \",\n        ' */\\n\\n  &:nth-of-type(odd) {\\n    transform: scale(0.8, 0.8) rotate(5deg);\\n    transition: all 0.35s;\\n  }\\n  &:nth-of-type(odd) div::before {\\n    transform: rotate(6deg);\\n    height: 20%;\\n    width: 47%;\\n    bottom: 30px;\\n    right: 12px;\\n    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);\\n  }\\n  &:nth-of-type(even) {\\n    transform: scale(0.8, 0.8) rotate(-5deg);\\n    transition: all 0.35s;\\n  }\\n  &:nth-of-type(even) div::before {\\n    transform: rotate(-6deg);\\n    height: 20%;\\n    width: 47%;\\n    bottom: 30px;\\n    left: 12px;\\n    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);\\n  }\\n  &:hover {\\n    filter: none;\\n    transform: scale(1, 1) rotate(0deg) !important;\\n    transition: all 0.35s;\\n  }\\n  /* &:hover div::before {\\n    content: \"\";\\n    position: absolute;\\n    z-index: -1;\\n    transform: rotate(0deg);\\n    height: 90%;\\n    width: 90%;\\n    bottom: 0%;\\n    right: 5%;\\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);\\n    transition: all 0.35s;\\n  } */\\n'\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background: #fff;\\n  padding: 1rem;\\n  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);\\n  &::before {\\n    content: \"\";\\n    position: absolute;\\n    z-index: -1;\\n    transition: all 0.35s;\\n  }\\n'\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  max-width: 100%;\\n  height: auto;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  cursor: pointer;\\n  color: #222222;\\n  width: 9rem;\\n  height: 9rem;\\n  position: fixed;\\n  font-size: 4rem;\\n  bottom: 3rem;\\n  right: 5vw;\\n  background-color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 9999px;\\n  z-index: 2;\\n  border: 4px solid transparent;\\n  background-image: linear-gradient(#eee, #eee),\\n    linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);\\n  background-origin: border-box;\\n  background-clip: content-box, border-box;\\n  margin: 10px;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);\\n  transition: 0.3s;\\n  &:hover {\\n    width: 10rem;\\n    height: 10rem;\\n    font-size: 5rem;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 1.6rem;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 3.2rem;\\n  margin: 2rem;\\n  text-align: center;\\n  line-height: 120%;\\n  color: white;\\n  font-weight: 700;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 80%;\\n  height: 80vh;\\n  background-color: white;\\n  border-radius: 1.8em;\\n  position: fixed;\\n  z-index: 4;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #222;\\n  font-size: 3rem;\\n  font-weight: 700;\\n  right: 10vh;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      & div {\\n        font-size: 2.3rem;\\n        font-weight: 700;\\n      }\\n    \"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 80%;\\n  display: flex;\\n  justify-content: space-between;\\n  cursor: pointer;\\n  & div {\\n    transition: all 0.3s;\\n  }\\n  &:hover div {\\n    font-size: 2.3rem;\\n  }\\n  /* &:not(:hover) div {\\n    transition: all 0.3s;\\n  } */\\n  \",\n        \"\\n\\n  & img {\\n    width: 1.2rem;\\n    object-fit: contain;\\n  }\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 2rem;\\n  margin: 2rem;\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  cursor: pointer;\\n  line-height: 200%;\\n  /* transition: 0.3s; */\\n  &::after {\\n    display: block;\\n    content: \"\";\\n    border-bottom: solid 1px #000;\\n    transform: scaleX(0);\\n    transition: transform 250ms ease-in-out;\\n  }\\n  &:hover:after {\\n    transform: scaleX(1);\\n  }\\n  &::after {\\n    transform-origin: 0% 50%;\\n  }\\n'\n    ]);\n    _templateObject14 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject15() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  &::after {\\n    transform-origin: 100% 50%;\\n  }\\n\"\n    ]);\n    _templateObject15 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Container\",\n    componentId: \"sc-845be416-0\"\n})(_templateObject());\nconst ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__ItemContainer\",\n    componentId: \"sc-845be416-1\"\n})(_templateObject1());\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Item\",\n    componentId: \"sc-845be416-2\"\n})(_templateObject3(), (props)=>props.id % 2 == 0 && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2()));\nconst Polaroid = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Polaroid\",\n    componentId: \"sc-845be416-3\"\n})(_templateObject4());\nconst Img = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n    displayName: \"style__Img\",\n    componentId: \"sc-845be416-4\"\n})(_templateObject5());\nconst MailBox = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__MailBox\",\n    componentId: \"sc-845be416-5\"\n})(_templateObject6());\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Text\",\n    componentId: \"sc-845be416-6\"\n})(_templateObject7());\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Title\",\n    componentId: \"sc-845be416-7\"\n})(_templateObject8());\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__Modal\",\n    componentId: \"sc-845be416-8\"\n})(_templateObject9());\nconst BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__BtnWrapper\",\n    componentId: \"sc-845be416-9\"\n})(_templateObject10());\nconst PickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__PickWrapper\",\n    componentId: \"sc-845be416-10\"\n})(_templateObject12(), (props)=>props.selectedPick == props.id && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject11()));\nconst PickText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__PickText\",\n    componentId: \"sc-845be416-11\"\n})(_templateObject13());\nconst PrevBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"style__PrevBtn\",\n    componentId: \"sc-845be416-12\"\n})(_templateObject14());\nconst NextBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PrevBtn).withConfig({\n    displayName: \"style__NextBtn\",\n    componentId: \"sc-845be416-13\"\n})(_templateObject15());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluL3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUN6QjtBQUMzQixNQUFNSSxZQUFZSix3RUFBVTs7O3NCQVdqQztBQUNLLE1BQU1NLGdCQUFnQk4sd0VBQVU7Ozt1QkFJckM7QUFFSyxNQUFNTyxPQUFPUCx3RUFBVTs7O3VCQUl2QixDQUFDUSxRQUNKQSxNQUFNQyxFQUFFLEdBQUcsS0FBSyxLQUNoQlAsc0RBQUdBLHNCQWdETDtBQUVLLE1BQU1RLFdBQVdWLHdFQUFVOzs7dUJBVWhDO0FBQ0ssTUFBTVcsTUFBTVgsd0VBQVU7Ozt1QkFHM0I7QUFDSyxNQUFNYSxVQUFVYix3RUFBVTs7O3VCQTRCL0I7QUFFSyxNQUFNYyxPQUFPZCx3RUFBVTs7O3VCQUU1QjtBQUNLLE1BQU1lLFFBQVFmLHdFQUFVOzs7dUJBTzdCO0FBQ0ssTUFBTWdCLFFBQVFoQix3RUFBVTs7O3VCQWE3QjtBQUNLLE1BQU1pQixhQUFhakIsd0VBQVU7Ozt3QkFLbEM7QUFFSyxNQUFNa0IsY0FBY2xCLHdFQUFVOzs7d0JBY2pDLENBQUNRLFFBQ0RBLE1BQU1XLFlBQVksSUFBSVgsTUFBTUMsRUFBRSxJQUM5QlAsc0RBQUdBLHVCQVdMO0FBQ0ssTUFBTWtCLFdBQVdwQix3RUFBVTs7O3dCQUdoQztBQUVLLE1BQU1xQixVQUFVckIsd0VBQVU7Ozt3QkFpQi9CO0FBQ0ssTUFBTXNCLFVBQVV0Qiw2REFBTUEsQ0FBQ3FCOzs7d0JBSTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4vc3R5bGUuanM/MjIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcywgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCAqIGFzIE0gZnJvbSBcIi4uL2FuaW1hdGlvblwiO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3Ljk4ZGVnLCAjMDI2NGJmIDAlLCAjZmY4Njc4IDEwMCUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgLyogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pZCAlIDIgPT0gMCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICAmIGRpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgYH0gKi9cclxuXHJcbiAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpIHJvdGF0ZSg1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuICB9XHJcbiAgJjpudGgtb2YtdHlwZShvZGQpIGRpdjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIuMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KSByb3RhdGUoLTVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH1cclxuICAmOm50aC1vZi10eXBlKGV2ZW4pIGRpdjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIuMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH1cclxuICAvKiAmOmhvdmVyIGRpdjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuICB9ICovXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUG9sYXJvaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNYWlsQm94ID0gc3R5bGVkLmRpdmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgd2lkdGg6IDlyZW07XHJcbiAgaGVpZ2h0OiA5cmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgYm90dG9tOiAzcmVtO1xyXG4gIHJpZ2h0OiA1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZWVlLCAjZWVlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZiZmNiOWJlLCAjZmZjZGYzYWEsICM2NWQzZmZhYSk7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDMuMnJlbTtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW9kYWwgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuOGVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA0O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ0bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHJpZ2h0OiAxMHZoO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmIGRpdiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgJjpob3ZlciBkaXYge1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgfVxyXG4gIC8qICY6bm90KDpob3ZlcikgZGl2IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH0gKi9cclxuICAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnNlbGVjdGVkUGljayA9PSBwcm9wcy5pZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICAmIGRpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgYH1cclxuXHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDEuMnJlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgUGlja1RleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJldkJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG4gIC8qIHRyYW5zaXRpb246IDAuM3M7ICovXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgJjpob3ZlcjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE5leHRCdG4gPSBzdHlsZWQoUHJldkJ0bilgXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwia2V5ZnJhbWVzIiwiY3NzIiwiTSIsIkNvbnRhaW5lciIsImRpdiIsIkl0ZW1Db250YWluZXIiLCJJdGVtIiwicHJvcHMiLCJpZCIsIlBvbGFyb2lkIiwiSW1nIiwiaW1nIiwiTWFpbEJveCIsIlRleHQiLCJUaXRsZSIsIk1vZGFsIiwiQnRuV3JhcHBlciIsIlBpY2tXcmFwcGVyIiwic2VsZWN0ZWRQaWNrIiwiUGlja1RleHQiLCJQcmV2QnRuIiwiTmV4dEJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main/style.js\n"));

/***/ })

});