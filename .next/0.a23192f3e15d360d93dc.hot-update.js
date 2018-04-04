webpackHotUpdate(0,{

/***/ "./styles/nav.sass":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"Nav":"iRAMejetTMHeHD9IAHDpM","react-swipeable-view-container":"_3zC1Yn4B5sTwS02WdC7w0c","active":"_3uavY0mdVFTBplGKfOsp28"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1522869673175");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=0.a23192f3e15d360d93dc.hot-update.js.map