function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Scrollspy as ScrollSpy } from '@makotot/ghostui/src/Scrollspy';
import { history, Link, useLocation, useRouteMeta, useSiteData, useTabMeta } from 'dumi';
import React, { useEffect, useRef, useState } from 'react';
import "./index.less";
var Toc = function Toc() {
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname,
    search = _useLocation.search,
    hash = _useLocation.hash;
  var meta = useRouteMeta();
  var tabMeta = useTabMeta();
  var _useSiteData = useSiteData(),
    loading = _useSiteData.loading;
  var prevIndexRef = useRef(0);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    sectionRefs = _useState2[0],
    setSectionRefs = _useState2[1];
  var memoToc = React.useMemo(function () {
    var toc = meta.toc;
    if (tabMeta) {
      toc = tabMeta.toc;
    }
    // only render h2 ~ h4
    return toc.filter(function (_ref) {
      var depth = _ref.depth;
      return depth > 1 && depth < 4;
    });
  }, [meta, tabMeta]);
  useEffect(function () {
    // wait for page component ready (DOM ready)
    if (!loading) {
      // find all valid headings as ref elements
      var refs = memoToc.map(function (_ref2) {
        var id = _ref2.id;
        return {
          current: document.getElementById(id)
        };
      });
      setSectionRefs(refs);
    }
  }, [pathname, search, loading, memoToc]);
  return sectionRefs.length ? /*#__PURE__*/React.createElement(ScrollSpy, {
    sectionRefs: sectionRefs
  }, function (_ref3) {
    var currentElementIndexInViewport = _ref3.currentElementIndexInViewport;
    // for keep prev item active when no item in viewport
    if (currentElementIndexInViewport > -1) prevIndexRef.current = currentElementIndexInViewport;
    return /*#__PURE__*/React.createElement("ul", {
      className: "dumi-default-toc"
    }, memoToc.filter(function (_ref4) {
      var depth = _ref4.depth;
      return depth > 1 && depth < 4;
    }).map(function (item, i) {
      var link = "".concat(search, "#").concat(encodeURIComponent(item.id));
      var activeIndex = currentElementIndexInViewport > -1 ? currentElementIndexInViewport : prevIndexRef.current;
      return /*#__PURE__*/React.createElement("li", {
        key: item.id,
        "data-depth": item.depth
      }, /*#__PURE__*/React.createElement(Link, _extends({
        to: link,
        onClickCapture: function onClickCapture() {
          if (decodeURIComponent(hash).slice(1) === item.id) {
            history.replace("".concat(pathname).concat(search));
          }
        },
        title: item.title
      }, activeIndex === i ? {
        className: 'active'
      } : {}), item.title));
    }));
  }) : null;
};
export default Toc;