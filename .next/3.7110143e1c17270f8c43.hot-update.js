webpackHotUpdate(3,{

/***/ "./node_modules/react-router/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__("./node_modules/react-router/es/MemoryRouter.js");
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__("./node_modules/react-router/es/Prompt.js");
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__("./node_modules/react-router/es/Redirect.js");
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("./node_modules/react-router/es/Route.js");
/* unused harmony reexport Route */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("./node_modules/react-router/es/Router.js");
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__("./node_modules/react-router/es/StaticRouter.js");
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__("./node_modules/react-router/es/Switch.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__("./node_modules/react-router/es/matchPath.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__("./node_modules/react-router/es/withRouter.js");
/* unused harmony reexport withRouter */



















/***/ }),

/***/ "./node_modules/react-swipeable-routes/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_swipeable_views__ = __webpack_require__("./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_swipeable_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_swipeable_views__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generatePath__ = __webpack_require__("./node_modules/react-swipeable-routes/es/generatePath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SwipeableRoutes = (_temp2 = _class = function (_Component) {
  _inherits(SwipeableRoutes, _Component);

  function SwipeableRoutes() {
    var _temp, _this, _ret;

    _classCallCheck(this, SwipeableRoutes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      urls: {}
    }, _this.handleIndexChange = function (index, type) {
      var history = _this.context.router.history;
      var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(_this.props.children)[index].props,
          path = _React$Children$toArr.path,
          defaultParams = _React$Children$toArr.defaultParams;


      var url = void 0;
      if (path.includes(":")) {
        if (path in _this.state.urls) {
          url = _this.state.urls[path];
        } else {
          // Build url with defaults
          url = Object(__WEBPACK_IMPORTED_MODULE_4__generatePath__["a" /* default */])(path, defaultParams);
          _this.setState(function (state) {
            var _extends2;

            return { urls: _extends({}, state.urls, (_extends2 = {}, _extends2[path] = url, _extends2)) };
          });
        }
      } else {
        url = path;
      }
      _this.historyGoTo(url);

      // Call the onChangeIndex if it's set
      if (typeof _this.props.onChangeIndex === "function") {
        _this.props.onChangeIndex(index, type);
      }
    }, _this.triggerOnChangeIndex = function (location) {
      var children = _this.props.children;

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element, index) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            from = _element$props.from;

        var path = pathProp || from;
        if (Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* matchPath */])(location.pathname, { path: path, exact: exact, strict: strict })) {
          if (typeof _this.props.onChangeIndex === "function") {
            _this.props.onChangeIndex(index);
          }
          _this.setState(function (state) {
            var _extends3;

            return {
              urls: _extends({}, state.urls, (_extends3 = {}, _extends3[path] = location.pathname, _extends3))
            };
          });
        }
      });
    }, _this.historyGoTo = function (path) {
      var history = _this.context.router.history;
      var replace = _this.props.replace;

      return replace ? history.replace(path) : history.push(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Trigger the location change to the route path


  SwipeableRoutes.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var history = this.context.router.history;

    this.triggerOnChangeIndex(history.location);
    this.unlistenHistory = history.listen(function (location) {
      // When the location changes, call onChangeIndex with the route index
      _this2.triggerOnChangeIndex(location);
    });
  };

  SwipeableRoutes.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlistenHistory();
  };

  SwipeableRoutes.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var history = this.context.router.history;

    // If index prop changed, change the location to the path of that route

    if (prevProps.index !== this.props.index) {
      var paths = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, function (element) {
        return element.props.path;
      });
      this.historyGoTo(paths[this.props.index]);
    }
  };

  SwipeableRoutes.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        index = _props.index,
        replace = _props.replace,
        rest = _objectWithoutProperties(_props, ["children", "index", "replace"]);

    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;

    // If there's no match, render the first route with no params
    var matchedIndex = 0;
    var match = void 0;
    if (index) {
      matchedIndex = index;
    } else {
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element, index) {
        var _element$props2 = element.props,
            pathProp = _element$props2.path,
            exact = _element$props2.exact,
            strict = _element$props2.strict,
            from = _element$props2.from;

        var path = pathProp || from;

        match = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* matchPath */])(location.pathname, { path: path, exact: exact, strict: strict });
        if (match) {
          matchedIndex = index;
        }
      });
    }

    var renderableRoutes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(children).filter(function (element, index) {
      return !element.props.path.includes(":") || Boolean(element.props.defaultParams) || element.props.path in _this3.state.urls;
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_swipeable_views___default.a,
      _extends({}, rest, {
        index: matchedIndex,
        onChangeIndex: this.handleIndexChange
      }),
      renderableRoutes.map(function (element, index) {
        var _element$props3 = element.props,
            path = _element$props3.path,
            component = _element$props3.component,
            render = _element$props3.render,
            children = _element$props3.children;

        var props = { location: location, history: history, staticContext: staticContext };

        var match = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* matchPath */])(location.pathname, element.props);
        if (match) {
          match.type = "full";
        } else if (path in _this3.state.urls) {
          match = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* matchPath */])(_this3.state.urls[path], element.props);
          match.type = "outOfView";
        } else {
          match = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* matchPath */])(Object(__WEBPACK_IMPORTED_MODULE_4__generatePath__["a" /* default */])(path, element.props.defaultParams), element.props);
          match.type = "none";
        }
        props.match = match;
        props.key = path;

        // A lot of this code is borrowed from the render method of
        // Route. Why can't I just render the Route then?
        // Because Route only renders the component|render|children
        // if there's a match with the location, while here I render
        // regardless of the location.
        return component ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props) : render ? render(props) : children ? typeof children === "function" ? children(props) : !Array.isArray(children) || children.length // Preact defaults to empty children array
        ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(children) : null : null;
      })
    );
  };

  return SwipeableRoutes;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
  }).isRequired
}, _temp2);


/* unused harmony default export */ var _unused_webpack_default_export = (SwipeableRoutes);

/***/ }),

/***/ "./pages/home.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/s/projects/local/me/pages/home.jsx';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    'Home'
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/mnt/s/projects/local/me/pages/home.jsx');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home.jsx")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass__ = __webpack_require__("./styles.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_swipeable_routes__ = __webpack_require__("./node_modules/react-swipeable-routes/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_jsx__ = __webpack_require__("./pages/home.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_jsx__ = __webpack_require__("./pages/products.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__products_jsx__);
var _jsxFileName = '/mnt/s/projects/local/me/pages/index.jsx';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();










var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_sass___default.a.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* NavLink */],
          { exact: true, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          'Home'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* NavLink */],
          { to: '/products', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
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

/***/ }),

/***/ "./pages/products.jsx":
/***/ (function(module, exports, __webpack_require__) {


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products.jsx")
  

/***/ })

})
//# sourceMappingURL=3.7110143e1c17270f8c43.hot-update.js.map