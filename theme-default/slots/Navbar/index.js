function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable @typescript-eslint/no-use-before-define */
import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import { Link, useLocation, useNavData } from 'dumi';
import NavbarExtra from 'dumi/theme/slots/NavbarExtra';
import React, { useState } from 'react';
import "./index.less";
var NavbarItem = function NavbarItem(_ref) {
  var data = _ref.data;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useState = useState(function () {
      var _data$children;
      return (_data$children = data.children) === null || _data$children === void 0 ? void 0 : _data$children.some(function (item) {
        var activePath = item.activePath || item.link;
        return activePath && pathname.startsWith(activePath);
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var CollapsedBtn = data.children && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-navbar-collapse-btn",
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsCollapsed(function (v) {
        return !v;
      });
    },
    "data-collapsed": isCollapsed || undefined
  }, /*#__PURE__*/React.createElement(IconDown, null));
  var NestedNav = data.children && /*#__PURE__*/React.createElement("ul", {
    className: "dumi-default-navbar-dropdown",
    "data-collapsed": isCollapsed || undefined
  }, /*#__PURE__*/React.createElement(NavbarContent, {
    data: data.children
  }));
  // user custom nav has no activePath, so fallback to link
  var activePath = data.activePath || data.link;
  var extraProps = activePath && pathname.startsWith(activePath) ? {
    className: 'active'
  } : {};
  return data.link ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, _extends({
    to: data.link
  }, extraProps), data.title), CollapsedBtn, NestedNav) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", _extends({
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsCollapsed(function (v) {
        return !v;
      });
    }
  }, extraProps), data.title), CollapsedBtn, NestedNav);
};
var NavbarContent = function NavbarContent(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.activePath || item.link || item.title
    }, item.link && /^(\w+:)\/\/|^(mailto|tel):/.test(item.link) ? /*#__PURE__*/React.createElement("a", {
      href: item.link,
      target: "_blank",
      rel: "noreferrer"
    }, item.title) : /*#__PURE__*/React.createElement(NavbarItem, {
      data: item
    }));
  }));
};
var Navbar = function Navbar() {
  var nav = useNavData();
  return /*#__PURE__*/React.createElement("ul", {
    className: "dumi-default-navbar"
  }, /*#__PURE__*/React.createElement(NavbarContent, {
    data: nav
  }), /*#__PURE__*/React.createElement(NavbarExtra, null));
};
export default Navbar;