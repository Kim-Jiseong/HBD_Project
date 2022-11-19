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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./pages/main/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { useScrollAnimation } from \"hooks/useScrollAnimaiton.js\";\nconst Main = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const animatedItem = useScrollAnimation();\n    const getLetter = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/main/letter/\").then(function(res) {\n            console.log(res.data);\n            setLetter(res.data);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    const getPhoto = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/main/photo/\").then(function(res) {\n            console.log(res.data);\n            setPhoto(res.data);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    const ModalCTL = ()=>{\n        setModal(!modal);\n    // console.log(modal);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getLetter();\n        getPhoto();\n    }, []);\n    // useEffect(()=>{\n    // }, [modal])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.MailBox, {\n                onClick: ModalCTL,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bi bi-envelope\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.ItemContainer, {\n                children: photo && photo.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Item, {\n                        id: item.id,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Polaroid, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Img, {\n                                    src: item.img\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    children: item.date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KJS\\\\Desktop\\\\Project\\\\HBD\\\\frontend\\\\pages\\\\main\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"zLuy4r0J6aq5saxb8w0nycKEh2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFFekI7QUFDYztBQUNYO0FBQzdCLG9FQUFvRTtBQUNwRSxNQUFNTSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsNkNBQTZDO0lBQzdDLE1BQU1hLFlBQVksVUFBWTtRQUM1QixNQUFNWCxpREFDQSxDQUFDLHNDQUNKYSxJQUFJLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQ25CQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7WUFDcEJYLFVBQVVRLElBQUlHLElBQUk7UUFDcEIsR0FDQ0MsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtZQUN0QkosUUFBUUMsR0FBRyxDQUFDRztRQUNkO0lBQ0o7SUFDQSxNQUFNQyxXQUFXLFVBQVk7UUFDM0IsTUFBTXBCLGlEQUNBLENBQUMscUNBQ0phLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTtZQUNwQlQsU0FBU00sSUFBSUcsSUFBSTtRQUNuQixHQUNDQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1lBQ3RCSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Q7SUFDSjtJQUNBLE1BQU1FLFdBQVcsSUFBTTtRQUNyQlgsU0FBUyxDQUFDRDtJQUNWLHNCQUFzQjtJQUN4QjtJQUNBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZO1FBQ0FTO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsa0JBQWtCO0lBRWxCLGNBQWM7SUFDZCxxQkFDRSw4REFBQ2xCLDZDQUFXOzswQkFDViw4REFBQ0EsMkNBQVM7Z0JBQUNzQixTQUFTSDswQkFDbEIsNEVBQUNJO29CQUFFQyxXQUFVOzs7Ozs7Ozs7OzswQkFHZiw4REFBQ3hCLGlEQUFlOzBCQUNiSyxTQUNDQSxNQUFNcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDM0Isd0NBQU07d0JBQWU2QixJQUFJRixLQUFLRSxFQUFFO2tDQUMvQiw0RUFBQzdCLDRDQUFVOzs4Q0FDVCw4REFBQ0EsdUNBQUs7b0NBQUNnQyxLQUFLTCxLQUFLTSxHQUFHOzs7Ozs7OENBQ3BCLDhEQUFDakMsd0NBQU07OENBQUUyQixLQUFLUSxJQUFJOzs7Ozs7Ozs7Ozs7dUJBSFRSLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVaEM7R0ExRE01Qjs7UUFDV0Ysa0RBQVNBOzs7S0FEcEJFO0FBNEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4vaW5kZXgudHN4PzJjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlXCI7XG4vLyBpbXBvcnQgeyB1c2VTY3JvbGxBbmltYXRpb24gfSBmcm9tIFwiaG9va3MvdXNlU2Nyb2xsQW5pbWFpdG9uLmpzXCI7XG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xldHRlciwgc2V0TGV0dGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IGFuaW1hdGVkSXRlbSA9IHVzZVNjcm9sbEFuaW1hdGlvbigpO1xuICBjb25zdCBnZXRMZXR0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbWFpbi9sZXR0ZXIvXCIpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0TGV0dGVyKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBnZXRQaG90byA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tYWluL3Bob3RvL1wiKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldFBob3RvKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBNb2RhbENUTCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbCghbW9kYWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vZGFsKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRMZXR0ZXIoKTtcbiAgICBnZXRQaG90bygpO1xuICB9LCBbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuXG4gIC8vIH0sIFttb2RhbF0pXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuTWFpbEJveCBvbkNsaWNrPXtNb2RhbENUTH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWVudmVsb3BlXCI+PC9pPlxuICAgICAgPC9TLk1haWxCb3g+XG5cbiAgICAgIDxTLkl0ZW1Db250YWluZXI+XG4gICAgICAgIHtwaG90byAmJlxuICAgICAgICAgIHBob3RvLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFMuSXRlbSBrZXk9e2l0ZW0uaWR9IGlkPXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgPFMuUG9sYXJvaWQ+XG4gICAgICAgICAgICAgICAgPFMuSW1nIHNyYz17aXRlbS5pbWd9IC8+XG4gICAgICAgICAgICAgICAgPFMuVGV4dD57aXRlbS5kYXRlfTwvUy5UZXh0PlxuICAgICAgICAgICAgICA8L1MuUG9sYXJvaWQ+XG4gICAgICAgICAgICA8L1MuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvUy5JdGVtQ29udGFpbmVyPlxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlMiLCJNYWluIiwicm91dGVyIiwibGV0dGVyIiwic2V0TGV0dGVyIiwicGhvdG8iLCJzZXRQaG90byIsIm1vZGFsIiwic2V0TW9kYWwiLCJnZXRMZXR0ZXIiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZ2V0UGhvdG8iLCJNb2RhbENUTCIsIkNvbnRhaW5lciIsIk1haWxCb3giLCJvbkNsaWNrIiwiaSIsImNsYXNzTmFtZSIsIkl0ZW1Db250YWluZXIiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImlkIiwiUG9sYXJvaWQiLCJJbWciLCJzcmMiLCJpbWciLCJUZXh0IiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main/index.tsx\n"));

/***/ })

});