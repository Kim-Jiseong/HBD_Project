"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385,424,577,139];
exports.modules = {

/***/ 624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_style__WEBPACK_IMPORTED_MODULE_1__]);
_style__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const cardVariants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 500,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
const hue = (h)=>`hsl(${h}, 100%, 50%)`;
function Card({ emoji , hueA , hueB  }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__.CardContainer, {
        // className="card-container"
        initial: "offscreen",
        whileInView: "onscreen",
        viewport: {
            // once: true,
            amount: 0.8
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__.Splash, {
                style: {
                    background
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__.Card, {
                variants: cardVariants,
                children: emoji
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [431], () => (__webpack_exec__(624)));
module.exports = __webpack_exports__;

})();