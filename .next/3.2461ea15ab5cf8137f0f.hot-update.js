webpackHotUpdate(3,{

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass__ = __webpack_require__("./styles.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_swipeable_routes__ = __webpack_require__("./node_modules/react-swipeable-routes/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_jsx__ = __webpack_require__("./pages/home.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_jsx__ = __webpack_require__("./pages/products.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__products_jsx__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/s/projects/local/me/pages/index.jsx';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();











var NavLink = function NavLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
    { as: props.as, href: props.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      props.children
    )
  );
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_sass___default.a.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          NavLink,
          { href: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          'Home'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          NavLink,
          { href: '/products', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          'Products'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavLink, 'NavLink', '/mnt/s/projects/local/me/pages/index.jsx');
  reactHotLoader.register(_default, 'default', '/mnt/s/projects/local/me/pages/index.jsx');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index.jsx")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.2461ea15ab5cf8137f0f.hot-update.js.map