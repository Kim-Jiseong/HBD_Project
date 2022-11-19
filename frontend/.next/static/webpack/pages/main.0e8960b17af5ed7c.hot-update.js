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

/***/ "./pages/main/index.tsx":
/*!******************************!*\
  !*** ./pages/main/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./pages/main/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { useScrollAnimation } from \"hooks/useScrollAnimaiton.js\";\nconst Main = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const animatedItem = useScrollAnimation();\n    const getLetter = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/main/letter/\").then(function(res) {\n            console.log(res.data);\n            setLetter(res.data);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    const getPhoto = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/main/photo/\").then(function(res) {\n            console.log(res.data);\n            setPhoto(res.data);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    const ModalCTL = ()=>{\n        setModal(!modal);\n    // console.log(modal);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getLetter();\n        getPhoto();\n    }, []);\n    // useEffect(()=>{\n    // }, [modal])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        modal: modal,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.MailBox, {\n                onClick: ModalCTL,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bi bi-envelope\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            modal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bi bi-x-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.ItemContainer, {\n                children: photo && photo.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Item, {\n                        id: item.id,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Polaroid, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Img, {\n                                    src: item.img\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    children: item.date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"zLuy4r0J6aq5saxb8w0nycKEh2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFFekI7QUFDYztBQUNYO0FBQzdCLG9FQUFvRTtBQUNwRSxNQUFNTSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsNkNBQTZDO0lBQzdDLE1BQU1hLFlBQVksVUFBWTtRQUM1QixNQUFNWCxpREFDQSxDQUFDLHNDQUNKYSxJQUFJLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQ25CQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7WUFDcEJYLFVBQVVRLElBQUlHLElBQUk7UUFDcEIsR0FDQ0MsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtZQUN0QkosUUFBUUMsR0FBRyxDQUFDRztRQUNkO0lBQ0o7SUFDQSxNQUFNQyxXQUFXLFVBQVk7UUFDM0IsTUFBTXBCLGlEQUNBLENBQUMscUNBQ0phLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTtZQUNwQlQsU0FBU00sSUFBSUcsSUFBSTtRQUNuQixHQUNDQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1lBQ3RCSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Q7SUFDSjtJQUNBLE1BQU1FLFdBQVcsSUFBTTtRQUNyQlgsU0FBUyxDQUFDRDtJQUNWLHNCQUFzQjtJQUN4QjtJQUNBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZO1FBQ0FTO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsa0JBQWtCO0lBRWxCLGNBQWM7SUFDZCxxQkFDRSw4REFBQ2xCLDZDQUFXO1FBQUNPLE9BQU9BOzswQkFDbEIsOERBQUNQLDJDQUFTO2dCQUFDc0IsU0FBU0g7MEJBQ2xCLDRFQUFDSTtvQkFBRUMsV0FBVTs7Ozs7Ozs7Ozs7WUFFZGpCLHVCQUNDLDhEQUFDUCx5Q0FBTzswQkFDTiw0RUFBQ3VCO29CQUFFQyxXQUFVOzs7Ozs7Ozs7OzswQkFHakIsOERBQUN4QixpREFBZTswQkFDYkssU0FDQ0EsTUFBTXNCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQzVCLHdDQUFNO3dCQUFlOEIsSUFBSUYsS0FBS0UsRUFBRTtrQ0FDL0IsNEVBQUM5Qiw0Q0FBVTs7OENBQ1QsOERBQUNBLHVDQUFLO29DQUFDaUMsS0FBS0wsS0FBS00sR0FBRzs7Ozs7OzhDQUNwQiw4REFBQ2xDLHdDQUFNOzhDQUFFNEIsS0FBS1EsSUFBSTs7Ozs7Ozs7Ozs7O3VCQUhUUixLQUFLRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWhDO0dBOURNN0I7O1FBQ1dGLGtEQUFTQTs7O0tBRHBCRTtBQWdFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluL2luZGV4LnRzeD8yYzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZVwiO1xuLy8gaW1wb3J0IHsgdXNlU2Nyb2xsQW5pbWF0aW9uIH0gZnJvbSBcImhvb2tzL3VzZVNjcm9sbEFuaW1haXRvbi5qc1wiO1xuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsZXR0ZXIsIHNldExldHRlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGhvdG8sIHNldFBob3RvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBhbmltYXRlZEl0ZW0gPSB1c2VTY3JvbGxBbmltYXRpb24oKTtcbiAgY29uc3QgZ2V0TGV0dGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL21haW4vbGV0dGVyL1wiKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldExldHRlcihyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgY29uc3QgZ2V0UGhvdG8gPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbWFpbi9waG90by9cIilcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBzZXRQaG90byhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgY29uc3QgTW9kYWxDVEwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoIW1vZGFsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb2RhbCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TGV0dGVyKCk7XG4gICAgZ2V0UGhvdG8oKTtcbiAgfSwgW10pO1xuICAvLyB1c2VFZmZlY3QoKCk9PntcblxuICAvLyB9LCBbbW9kYWxdKVxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lciBtb2RhbD17bW9kYWx9PlxuICAgICAgPFMuTWFpbEJveCBvbkNsaWNrPXtNb2RhbENUTH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWVudmVsb3BlXCI+PC9pPlxuICAgICAgPC9TLk1haWxCb3g+XG4gICAgICB7bW9kYWwgJiYgKFxuICAgICAgICA8Uy5Nb2RhbD5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS14LWxnXCI+PC9pPlxuICAgICAgICA8L1MuTW9kYWw+XG4gICAgICApfVxuICAgICAgPFMuSXRlbUNvbnRhaW5lcj5cbiAgICAgICAge3Bob3RvICYmXG4gICAgICAgICAgcGhvdG8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Uy5JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8Uy5Qb2xhcm9pZD5cbiAgICAgICAgICAgICAgICA8Uy5JbWcgc3JjPXtpdGVtLmltZ30gLz5cbiAgICAgICAgICAgICAgICA8Uy5UZXh0PntpdGVtLmRhdGV9PC9TLlRleHQ+XG4gICAgICAgICAgICAgIDwvUy5Qb2xhcm9pZD5cbiAgICAgICAgICAgIDwvUy5JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgPC9TLkl0ZW1Db250YWluZXI+XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiUyIsIk1haW4iLCJyb3V0ZXIiLCJsZXR0ZXIiLCJzZXRMZXR0ZXIiLCJwaG90byIsInNldFBob3RvIiwibW9kYWwiLCJzZXRNb2RhbCIsImdldExldHRlciIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJnZXRQaG90byIsIk1vZGFsQ1RMIiwiQ29udGFpbmVyIiwiTWFpbEJveCIsIm9uQ2xpY2siLCJpIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJJdGVtQ29udGFpbmVyIiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJpZCIsIlBvbGFyb2lkIiwiSW1nIiwic3JjIiwiaW1nIiwiVGV4dCIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/main/index.tsx\n"));

/***/ })

});