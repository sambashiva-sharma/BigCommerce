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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design */ \"@bigcommerce/big-design\");\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Data = ()=>// <Panel header=\"Homepage\" margin=\"xxLarge\">\n    //     <Text>Hello world</Text>\n    // </Panel>\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: {\n            textAlign: \"right\"\n        },\n        __source: {\n            fileName: \"C:\\\\BigCommerce\\\\pages\\\\index.tsx\",\n            lineNumber: 10,\n            columnNumber: 1\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            onClick: ()=>installScript()\n            ,\n            __source: {\n                fileName: \"C:\\\\BigCommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 1\n            },\n            __self: undefined,\n            children: \"Install\"\n        })\n    })\n;\nconst installScript = async ()=>{\n    await axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://api.bigcommerce.com/stores/jwt03jvujb/v3/content/scripts', {\n        headers: {\n            \"Content-type\": \"application/json; charset=UTF-8\",\n            \"Access-Control-Allow-Origin\": \"*\",\n            'X-Auth-Token': 'tw4hd9wrw1qmmrl1kinxt1f7j4ktsif'\n        }\n    }).then((response)=>{\n        console.log(\"response\", response);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Q7QUFFdEM7QUFFekIsS0FBSyxDQUFDRSxJQUFJLE9BQ04sRUFBNkM7SUFDN0MsRUFBK0I7SUFDL0IsRUFBVzt5RUFFZEMsQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxTQUFTLEVBQUUsQ0FBTztRQUFDLENBQUM7Ozs7Ozs7dUZBQ2pDTCwyREFBTTtZQUNMTSxPQUFPLE1BQVFDLGFBQWE7Ozs7Ozs7O3NCQUM3QixDQUVEOzs7O0FBSUEsS0FBSyxDQUFDQSxhQUFhLGFBQWdCLENBQUM7SUFDaEMsS0FBSyxDQUFDTixnREFBUyxDQUFDLENBQWtFLG1FQUFFLENBQUM7UUFDakZRLE9BQU8sRUFBRSxDQUFDO1lBQ04sQ0FBYyxlQUFFLENBQWlDO1lBQ2pELENBQTZCLDhCQUFFLENBQUc7WUFDcEMsQ0FBYyxlQUFFLENBQWlDO1FBQ25ELENBQUM7SUFDSCxDQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxHQUFLLENBQUM7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVUsV0FBQ0YsUUFBUTtJQUVqQyxDQUFDO0FBQ1AsQ0FBQztBQUVELGlFQUFlVCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEgzLCBQYW5lbCxUZXh0LEJ1dHRvbiB9IGZyb20gXCJAYmlnY29tbWVyY2UvYmlnLWRlc2lnblwiO1xyXG5pbXBvcnQgSW5kZXggZnJvbSBcIi4vc2NyaXB0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IERhdGEgPSAoKSA9PiAoXHJcbiAgICAvLyA8UGFuZWwgaGVhZGVyPVwiSG9tZXBhZ2VcIiBtYXJnaW49XCJ4eExhcmdlXCI+XHJcbiAgICAvLyAgICAgPFRleHQ+SGVsbG8gd29ybGQ8L1RleHQ+XHJcbiAgICAvLyA8L1BhbmVsPlxyXG5cclxuPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuPEJ1dHRvblxyXG4gIG9uQ2xpY2s9eygpID0+IGluc3RhbGxTY3JpcHQoKX1cclxuPlxyXG4gIEluc3RhbGxcclxuPC9CdXR0b24+XHJcbjwvZGl2PlxyXG5cclxuKTtcclxuY29uc3QgaW5zdGFsbFNjcmlwdCA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmJpZ2NvbW1lcmNlLmNvbS9zdG9yZXMvand0MDNqdnVqYi92My9jb250ZW50L3NjcmlwdHMnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAnWC1BdXRoLVRva2VuJzogJ3R3NGhkOXdydzFxbW1ybDFraW54dDFmN2o0a3RzaWYnIFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UpO1xyXG4gICAgICBcclxuICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiYXhpb3MiLCJEYXRhIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJvbkNsaWNrIiwiaW5zdGFsbFNjcmlwdCIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@bigcommerce/big-design":
/*!******************************************!*\
  !*** external "@bigcommerce/big-design" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@bigcommerce/big-design");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();