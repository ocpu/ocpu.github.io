webpackHotUpdate(3,{

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/dom-helpers/events/off.js":
false,

/***/ "./node_modules/dom-helpers/events/on.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/history/LocationUtils.js":
false,

/***/ "./node_modules/history/PathUtils.js":
false,

/***/ "./node_modules/history/createMemoryHistory.js":
false,

/***/ "./node_modules/history/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/DOMUtils.js":
false,

/***/ "./node_modules/history/es/LocationUtils.js":
false,

/***/ "./node_modules/history/es/PathUtils.js":
false,

/***/ "./node_modules/history/es/createBrowserHistory.js":
false,

/***/ "./node_modules/history/es/createHashHistory.js":
false,

/***/ "./node_modules/history/es/createMemoryHistory.js":
false,

/***/ "./node_modules/history/es/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/index.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router/es/Prompt.js":
false,

/***/ "./node_modules/react-router/es/Redirect.js":
false,

/***/ "./node_modules/react-router/es/Route.js":
false,

/***/ "./node_modules/react-router/es/Router.js":
false,

/***/ "./node_modules/react-router/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router/es/Switch.js":
false,

/***/ "./node_modules/react-router/es/index.js":
false,

/***/ "./node_modules/react-router/es/matchPath.js":
false,

/***/ "./node_modules/react-router/es/withRouter.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/react-swipeable-routes/es/generatePath.js":
false,

/***/ "./node_modules/react-swipeable-routes/es/index.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/computeIndex.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/constant.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/index.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/mod.js":
false,

/***/ "./node_modules/react-swipeable-views/lib/SwipeableViews.js":
false,

/***/ "./node_modules/react-swipeable-views/lib/index.js":
false,

/***/ "./node_modules/resolve-pathname/index.js":
false,

/***/ "./node_modules/value-equal/index.js":
false,

/***/ "./node_modules/warning/browser.js":
false,

/***/ "./pages/home.jsx":
false,

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
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/mnt/s/projects/local/me/pages/index.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var NavLink = function NavLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
    { as: props.as, href: props.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "a",
      _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }),
      props.children
    )
  );
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_sass___default.a.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "nav",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          NavLink,
          { href: "/", __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          "Home"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          NavLink,
          { href: "/products", __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          "Products"
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

  reactHotLoader.register(NavLink, "NavLink", "/mnt/s/projects/local/me/pages/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/s/projects/local/me/pages/index.jsx");
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

/***/ }),

/***/ "./pages/products.jsx":
false

})
//# sourceMappingURL=3.df86d2bd696a89c304e9.hot-update.js.map