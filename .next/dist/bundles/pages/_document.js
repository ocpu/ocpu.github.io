module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"nav-wrapper": "_26yc0LIf-y_AS4-1ECxtQS",
	"nav": "_3Icak6_XzzrUF3DXWzOjcJ",
	"active": "_2nyOAXtf005yB8lo7_oWCQ",
	"breadcrumb": "_1-VEfxUMuyNTc96DTym0TQ"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);



/**
 * @param {{href: string}} props
 */
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'a',
    { href: props.href, onClick: function onClick(e) {
        e.preventDefault();__WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(props.href);
      } },
    props.children
  );
});

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NavLink = function NavLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_link__["a" /* default */],
    { as: props.as, href: props.href },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      props,
      props.children
    )
  );
};

var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa|Roboto:300' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'body',
          { className: __WEBPACK_IMPORTED_MODULE_3__styles_sass___default.a.body },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], null)
        )
      );
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ })
/******/ ]);