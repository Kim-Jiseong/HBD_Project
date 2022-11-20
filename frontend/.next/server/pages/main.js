"use strict";
(() => {
var exports = {};
exports.id = 671;
exports.ids = [671,424,139];
exports.modules = {

/***/ 948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import { useScrollAnimation } from "hooks/useScrollAnimaiton.js";
const Main = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const animatedItem = useScrollAnimation();
    const getLetter = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://127.0.0.1:8000/main/letter/").then(function(res) {
            console.log(res.data);
            setLetter(res.data);
        }).catch(function(error) {
            console.log(error);
        });
    };
    const getPhoto = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://127.0.0.1:8000/main/photo/").then(function(res) {
            console.log(res.data);
            setPhoto(res.data);
        }).catch(function(error) {
            console.log(error);
        });
    };
    const ModalCTL = ()=>{
        setModal(!modal);
    // console.log(modal);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getLetter();
        getPhoto();
    }, []);
    // useEffect(()=>{
    // }, [modal])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.MailBox, {
                onClick: ModalCTL,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi bi-envelope"
                })
            }),
            modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__.Modal, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.BtnWrapper, {
                        onClick: ModalCTL,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi bi-x-lg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.ModalContentContainer, {
                        children: letter && letter.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.Title, {
                                children: item.title
                            }, item.id))
                    })
                ]
            }),
            modal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.BlackBG, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.ItemContainer, {
                children: photo && photo.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.Item, {
                        id: item.id,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__.Polaroid, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.Img, {
                                    src: item.img
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                    children: item.date
                                })
                            ]
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [13], () => (__webpack_exec__(948)));
module.exports = __webpack_exports__;

})();