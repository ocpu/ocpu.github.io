webpackHotUpdate(0,{

/***/ "./styles.sass":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"_3qfDe2IqB-0wuvd3aRsQtd","nav":"_3Icak6_XzzrUF3DXWzOjcJ","active":"_2nyOAXtf005yB8lo7_oWCQ"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1522869898548");
          });
      }
    }
  

/***/ }),

/***/ "./styles/nav.sass":
false

})
//# sourceMappingURL=0.e05102af7880ec7511b3.hot-update.js.map