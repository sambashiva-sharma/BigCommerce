"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/script.tsx":
/*!**************************!*\
  !*** ./pages/script.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_BigCommerce_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_BigCommerce_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_BigCommerce_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar installScript = _asyncToGenerator(C_BigCommerce_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var data;\n    return C_BigCommerce_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://api.bigcommerce.com/stores/jwt03jvujb/v3/content/scripts', {\n                    headers: {\n                        'Content-Type': 'application/json',\n                        'X-Auth-Token': 'tw4hd9wrw1qmmrl1kinxt1f7j4ktsif'\n                    }\n                });\n            case 2:\n                data = _ctx.sent.data;\n                console.log(\"response\", data);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    style: {\n        textAlign: \"right\"\n    },\n    __source: {\n        fileName: \"C:\\\\BigCommerce\\\\pages\\\\script.tsx\",\n        lineNumber: 13,\n        columnNumber: 1\n    },\n    __self: undefined,\n    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        onClick: function() {\n            return installScript();\n        },\n        __source: {\n            fileName: \"C:\\\\BigCommerce\\\\pages\\\\script.tsx\",\n            lineNumber: 14,\n            columnNumber: 17\n        },\n        __self: undefined,\n        children: \"Install\"\n    })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (installScript);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY3JpcHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDRSxhQUFhLDZJQUFJLFFBQVEsV0FBSSxDQUFDO1FBQ3hCQyxJQUFJOzs7Ozt1QkFBV0YsZ0RBQVMsQ0FBQyxDQUFrRSxtRUFBRSxDQUFDO29CQUNsR0ksT0FBTyxFQUFFLENBQUM7d0JBQ1IsQ0FBYyxlQUFFLENBQWtCO3dCQUNsQyxDQUFjLGVBQUUsQ0FBaUM7b0JBQ25ELENBQUM7Z0JBQ0gsQ0FBQzs7Z0JBTEtGLElBQUksYUFBSkEsSUFBSTtnQkFNYkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVSxXQUFDSixJQUFJOzs7Ozs7QUFDOUIsQ0FBQztxRUFDQUssQ0FBRztJQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUFDQyxTQUFTLEVBQUUsQ0FBTztJQUFDLENBQUM7Ozs7Ozs7bUZBQ2pCViwyREFBTTtRQUNMVyxPQUFPLEVBQUUsUUFBUTtZQUFGVCxNQUFNLENBQU5BLGFBQWE7Ozs7Ozs7O2tCQUM3QixDQUVEOzs7QUFHaEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zY3JpcHQudHN4PzhhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSDMsIFBhbmVsLFRleHQsQnV0dG9uIH0gZnJvbSBcIkBiaWdjb21tZXJjZS9iaWctZGVzaWduXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGluc3RhbGxTY3JpcHQgPSAgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmJpZ2NvbW1lcmNlLmNvbS9zdG9yZXMvand0MDNqdnVqYi92My9jb250ZW50L3NjcmlwdHMnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdYLUF1dGgtVG9rZW4nOiAndHc0aGQ5d3J3MXFtbXJsMWtpbnh0MWY3ajRrdHNpZicgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLGRhdGEpO1xyXG59XHJcbjxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGluc3RhbGxTY3JpcHQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgSW5zdGFsbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbGxTY3JpcHQ7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsImF4aW9zIiwiaW5zdGFsbFNjcmlwdCIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/script.tsx\n");

/***/ })

});