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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_swipeable_routes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_swipeable_routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_swipeable_routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_link__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Navigation = function (_React$PureComponent) {
  _inherits(Navigation, _React$PureComponent);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__styles_sass___default.a.main },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__styles_sass___default.a['nav-wrapper'] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'ocpu.me'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: __WEBPACK_IMPORTED_MODULE_4__styles_sass___default.a.nav },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__components_link__["a" /* default */],
              { href: '/' },
              'Home'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__components_link__["a" /* default */],
              { href: '/test' },
              'Test'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__styles_sass___default.a.breadcrumb },
          'home'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'main',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-routes");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      null,
      "How about this"
    )
  );
});

/***/ })
/******/ ]);