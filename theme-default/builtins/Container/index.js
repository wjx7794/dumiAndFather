function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconSuccess } from '@ant-design/icons-svg/inline-svg/outlined/check-circle.svg';
import { ReactComponent as IconError } from '@ant-design/icons-svg/inline-svg/outlined/close-circle.svg';
import { ReactComponent as IconInfo } from '@ant-design/icons-svg/inline-svg/outlined/info-circle.svg';
import { ReactComponent as IconWarning } from '@ant-design/icons-svg/inline-svg/outlined/warning.svg';
import React, { useState } from 'react';
import "./index.less";
var ICONS = {
  info: IconInfo,
  warning: IconWarning,
  success: IconSuccess,
  error: IconError
};
var Container = function Container(props) {
  var _useState = useState(function () {
      return ICONS[props.type];
    }),
    _useState2 = _slicedToArray(_useState, 1),
    Icon = _useState2[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-container markdown",
    "data-type": props.type
  }, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement("h4", null, props.title || props.type.toUpperCase()), /*#__PURE__*/React.createElement("section", null, props.children));
};
export default Container;