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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst client = new (apollo_boost__WEBPACK_IMPORTED_MODULE_3___default())({\n    uri: 'http://localhost:5000/graphql'\n});\nfunction Login() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const seeCommunity = async (id)=>{\n        const GET_USER = apollo_boost__WEBPACK_IMPORTED_MODULE_3__.gql`\n            query {\n                User(id: ${id}) {\n                    id\n                    name\n                    age\n                }\n            }\n            `;\n        const sampleData = await client.query({\n            GET_USER\n        });\n        console.log(sampleData);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \" Enter your login details here \"\n            }, void 0, false, {\n                fileName: \"/Users/jeanemileleconteii/war/pages/login.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                \"aria-label\": \"see-users\",\n                onClick: ()=>seeCommunity(1)\n                ,\n                children: \" See Existing Community \"\n            }, void 0, false, {\n                fileName: \"/Users/jeanemileleconteii/war/pages/login.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                \"aria-label\": \"home\",\n                onClick: ()=>router.push('/')\n                ,\n                children: \" Click me to go back to the homepage \"\n            }, void 0, false, {\n                fileName: \"/Users/jeanemileleconteii/war/pages/login.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeanemileleconteii/war/pages/login.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3VCO0FBQ2Q7QUFFaEQsS0FBSyxDQUFDSyxNQUFNLEdBQUcsR0FBRyxDQUFDRixxREFBWSxDQUFDLENBQUM7SUFDN0JHLEdBQUcsRUFBRSxDQUErQjtBQUN0QyxDQUFDO0FBRVksUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUU3QixLQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7SUFFeEIsS0FBSyxDQUFDUyxZQUFZLFVBQVVDLEVBQUUsR0FBSyxDQUFDO1FBRWhDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHUCw2Q0FBRyxDQUFDOzt5QkFFSixFQUFFTSxFQUFFLENBQUM7Ozs7OztZQU1sQjtRQUVKLEtBQUssQ0FBQ0UsVUFBVSxHQUFHLEtBQUssQ0FBQ1AsTUFBTSxDQUFDUSxLQUFLLENBQUMsQ0FBQztZQUFDRixRQUFRO1FBQUMsQ0FBQztRQUNsREcsT0FBTyxDQUFDQyxHQUFHLENBQUNILFVBQVU7SUFFMUIsQ0FBQztJQUVELE1BQU0sNkVBQ0RYLCtEQUFjO1FBQUNJLE1BQU0sRUFBRUEsTUFBTTs7d0ZBQ3pCVyxDQUFHOzBCQUFDLENBQStCOzs7Ozs7d0ZBQ25DQyxDQUFNO2dCQUFDQyxDQUFVLGFBQUMsQ0FBVztnQkFBQ0MsT0FBTyxNQUFRVixZQUFZLENBQUMsQ0FBQzs7MEJBQUcsQ0FBd0I7Ozs7Ozt3RkFDdEZRLENBQU07Z0JBQUNDLENBQVUsYUFBQyxDQUFNO2dCQUFDQyxPQUFPLE1BQVFYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLENBQUc7OzBCQUFHLENBQXFDOzs7Ozs7Ozs7Ozs7QUFHNUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhci8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHNlZUNvbW11bml0eSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgR0VUX1VTRVIgPSBncWxgXG4gICAgICAgICAgICBxdWVyeSB7XG4gICAgICAgICAgICAgICAgVXNlcihpZDogJHtpZH0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHNhbXBsZURhdGEgPSBhd2FpdCBjbGllbnQucXVlcnkoeyBHRVRfVVNFUiB9KTtcbiAgICAgICAgY29uc29sZS5sb2coc2FtcGxlRGF0YSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgPGRpdj4gRW50ZXIgeW91ciBsb2dpbiBkZXRhaWxzIGhlcmUgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J3NlZS11c2Vycycgb25DbGljaz17KCkgPT4gc2VlQ29tbXVuaXR5KDEpfT4gU2VlIEV4aXN0aW5nIENvbW11bml0eSA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0naG9tZScgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+IENsaWNrIG1lIHRvIGdvIGJhY2sgdG8gdGhlIGhvbWVwYWdlIDwvYnV0dG9uPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkFwb2xsb1Byb3ZpZGVyIiwidXNlUXVlcnkiLCJBcG9sbG9DbGllbnQiLCJncWwiLCJjbGllbnQiLCJ1cmkiLCJMb2dpbiIsInJvdXRlciIsInNlZUNvbW11bml0eSIsImlkIiwiR0VUX1VTRVIiLCJzYW1wbGVEYXRhIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();