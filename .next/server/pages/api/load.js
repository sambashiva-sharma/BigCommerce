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
exports.id = "pages/api/load";
exports.ids = ["pages/api/load"];
exports.modules = {

/***/ "node-bigcommerce":
/*!***********************************!*\
  !*** external "node-bigcommerce" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node-bigcommerce");

/***/ }),

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBCAuth\": () => (/* binding */ getBCAuth),\n/* harmony export */   \"getBCVerify\": () => (/* binding */ getBCVerify)\n/* harmony export */ });\n/* harmony import */ var node_bigcommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-bigcommerce */ \"node-bigcommerce\");\n/* harmony import */ var node_bigcommerce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_bigcommerce__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create BigCommerce instance\n// https://github.com/getconversio/node-bigcommerce\nconst bigcommerce = new node_bigcommerce__WEBPACK_IMPORTED_MODULE_0__({\n    logLevel: 'info',\n    clientId: process.env.CLIENT_ID,\n    secret: process.env.CLIENT_SECRET,\n    callback: process.env.AUTH_CALLBACK,\n    responseType: 'json',\n    headers: {\n        'Accept-Encoding': '*'\n    },\n    apiVersion: 'v3'\n});\nconst bigcommerceSigned = new node_bigcommerce__WEBPACK_IMPORTED_MODULE_0__({\n    secret: process.env.CLIENT_SECRET,\n    responseType: 'json'\n});\nfunction getBCAuth(query) {\n    return bigcommerce.authorize(query);\n}\nfunction getBCVerify({ signed_payload  }) {\n    return bigcommerceSigned.verify(signed_payload);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBRy9DLEVBQThCO0FBQzlCLEVBQW1EO0FBQ25ELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0QsNkNBQVcsQ0FBQyxDQUFDO0lBQ2pDRSxRQUFRLEVBQUUsQ0FBTTtJQUNoQkMsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztJQUMvQkMsTUFBTSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYTtJQUNqQ0MsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssYUFBYTtJQUNuQ0MsWUFBWSxFQUFFLENBQU07SUFDcEJDLE9BQU8sRUFBRSxDQUFDO1FBQUMsQ0FBaUIsa0JBQUUsQ0FBRztJQUFDLENBQUM7SUFDbkNDLFVBQVUsRUFBRSxDQUFJO0FBQ3BCLENBQUM7QUFFRCxLQUFLLENBQUNDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQ2QsNkNBQVcsQ0FBQyxDQUFDO0lBQ3ZDTyxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO0lBQ2pDRyxZQUFZLEVBQUUsQ0FBTTtBQUN4QixDQUFDO0FBTU0sU0FBU0ksU0FBUyxDQUFDQyxLQUFrQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDZixXQUFXLENBQUNnQixTQUFTLENBQUNELEtBQUs7QUFDdEMsQ0FBQztBQUVNLFNBQVNFLFdBQVcsQ0FBQyxDQUFDLENBQUNDLGNBQWMsRUFBYyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENBQUNMLGlCQUFpQixDQUFDTSxNQUFNLENBQUNELGNBQWM7QUFDbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBCaWdDb21tZXJjZSBmcm9tICdub2RlLWJpZ2NvbW1lcmNlJztcclxuXHJcblxyXG4vLyBDcmVhdGUgQmlnQ29tbWVyY2UgaW5zdGFuY2VcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dldGNvbnZlcnNpby9ub2RlLWJpZ2NvbW1lcmNlXHJcbmNvbnN0IGJpZ2NvbW1lcmNlID0gbmV3IEJpZ0NvbW1lcmNlKHtcclxuICAgIGxvZ0xldmVsOiAnaW5mbycsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQ0xJRU5UX0lELFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5DTElFTlRfU0VDUkVULFxyXG4gICAgY2FsbGJhY2s6IHByb2Nlc3MuZW52LkFVVEhfQ0FMTEJBQ0ssXHJcbiAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICAgIGhlYWRlcnM6IHsgJ0FjY2VwdC1FbmNvZGluZyc6ICcqJyB9LFxyXG4gICAgYXBpVmVyc2lvbjogJ3YzJ1xyXG59KTtcclxuXHJcbmNvbnN0IGJpZ2NvbW1lcmNlU2lnbmVkID0gbmV3IEJpZ0NvbW1lcmNlKHtcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCxcclxuICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zIHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QkNBdXRoKHF1ZXJ5OiBRdWVyeVBhcmFtcykge1xyXG4gICAgcmV0dXJuIGJpZ2NvbW1lcmNlLmF1dGhvcml6ZShxdWVyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCQ1ZlcmlmeSh7IHNpZ25lZF9wYXlsb2FkIH06IFF1ZXJ5UGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYmlnY29tbWVyY2VTaWduZWQudmVyaWZ5KHNpZ25lZF9wYXlsb2FkKTtcclxufSJdLCJuYW1lcyI6WyJCaWdDb21tZXJjZSIsImJpZ2NvbW1lcmNlIiwibG9nTGV2ZWwiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJDTElFTlRfSUQiLCJzZWNyZXQiLCJDTElFTlRfU0VDUkVUIiwiY2FsbGJhY2siLCJBVVRIX0NBTExCQUNLIiwicmVzcG9uc2VUeXBlIiwiaGVhZGVycyIsImFwaVZlcnNpb24iLCJiaWdjb21tZXJjZVNpZ25lZCIsImdldEJDQXV0aCIsInF1ZXJ5IiwiYXV0aG9yaXplIiwiZ2V0QkNWZXJpZnkiLCJzaWduZWRfcGF5bG9hZCIsInZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/load.ts":
/*!***************************!*\
  !*** ./pages/api/load.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.ts\");\n\nasync function load(req, res) {\n    try {\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getBCVerify)(req.query);\n        res.redirect(302, '/');\n    } catch (error) {\n        const { message , response  } = error;\n        res.status((response === null || response === void 0 ? void 0 : response.status) || 500).json({\n            message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUM0QztBQUU3QixlQUFlQyxJQUFJLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUUsQ0FBQztJQUMzRSxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0gsc0RBQVcsQ0FBQ0UsR0FBRyxDQUFDRSxLQUFLO1FBRTNCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBRztJQUN6QixDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUNDLE9BQU8sR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBR0YsS0FBSztRQUNuQ0gsR0FBRyxDQUFDTSxNQUFNLEVBQUNELFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxRQUFRLENBQUVDLE1BQU0sS0FBSSxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNILE9BQU87UUFBQyxDQUFDO0lBQ3hELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UvLi9wYWdlcy9hcGkvbG9hZC50cz84MmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgZ2V0QkNWZXJpZnkgfSBmcm9tICcuLi8uLi9saWIvYXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2FkKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGdldEJDVmVyaWZ5KHJlcS5xdWVyeSk7XHJcblxyXG4gICAgICAgIHJlcy5yZWRpcmVjdCgzMDIsICcvJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgcmVzcG9uc2UgfSA9IGVycm9yO1xyXG4gICAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2U/LnN0YXR1cyB8fCA1MDApLmpzb24oeyBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldEJDVmVyaWZ5IiwibG9hZCIsInJlcSIsInJlcyIsInF1ZXJ5IiwicmVkaXJlY3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/load.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/load.ts"));
module.exports = __webpack_exports__;

})();