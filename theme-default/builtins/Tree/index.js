function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { ReactComponent as FileOutlined } from '@ant-design/icons-svg/inline-svg/outlined/file.svg';
import { ReactComponent as FolderOpenOutlined } from '@ant-design/icons-svg/inline-svg/outlined/folder-open.svg';
import { ReactComponent as FolderOutlined } from '@ant-design/icons-svg/inline-svg/outlined/folder.svg';
import { ReactComponent as MinusSquareOutlined } from '@ant-design/icons-svg/inline-svg/outlined/minus-square.svg';
import { ReactComponent as PlusSquareOutlined } from '@ant-design/icons-svg/inline-svg/outlined/plus-square.svg';
import Tree from 'rc-tree';
import React, { createRef, useEffect, useState } from 'react';
import "./index.less";
function getTreeFromList(nodes) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = [];
  [].concat(nodes).forEach(function (node, i) {
    var key = "".concat(prefix ? "".concat(prefix, "-") : '').concat(i);
    switch (node === null || node === void 0 ? void 0 : node.type) {
      case 'ul':
        {
          var _data;
          var parent = ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.children) || data;
          var ulLeafs = getTreeFromList(node.props.children || [], key);
          parent.push.apply(parent, _toConsumableArray(ulLeafs));
          break;
        }
      case 'li':
        {
          var liLeafs = getTreeFromList(node.props.children, key);
          data.push({
            title: [].concat(node.props.children).filter(function (child) {
              return child.type !== 'ul';
            }),
            key: key,
            children: liLeafs,
            isLeaf: !liLeafs.length
          });
          break;
        }
      default:
    }
  });
  return data;
}
var useListToTree = function useListToTree(nodes) {
  var _useState = useState(getTreeFromList(nodes)),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  useEffect(function () {
    setTree(getTreeFromList(nodes));
  }, [nodes]);
  return tree;
};
var getIcon = function getIcon(props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "dumi-default-tree-icon"
    }, /*#__PURE__*/React.createElement(FileOutlined, {
      fill: "currentColor"
    }));
  }
  return expanded ? /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOpenOutlined, {
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOutlined, {
    fill: "currentColor"
  }));
};
var renderSwitcherIcon = function renderSwitcherIcon(props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "tree-switcher-leaf-line"
    });
  }
  return expanded ? /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(MinusSquareOutlined, {
    fill: "currentColor"
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(PlusSquareOutlined, {
    fill: "currentColor"
  })));
};

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};
var getRealHeight = function getRealHeight(node) {
  var scrollHeight = node.scrollHeight;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node ? node.offsetHeight : 0
  };
};
var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};
var initCollapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
export default (function (props) {
  var data = useListToTree(props.children);
  var treeRef = /*#__PURE__*/createRef();
  var onClick = function onClick(event, node) {
    var isLeaf = node.isLeaf;
    if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
      return;
    }
    treeRef.current.onNodeExpand(event, node);
  };
  return /*#__PURE__*/React.createElement(Tree, {
    className: "dumi-default-tree",
    icon: getIcon,
    ref: treeRef,
    itemHeight: 20,
    showLine: true,
    selectable: false,
    virtual: false,
    motion: _objectSpread(_objectSpread({}, initCollapseMotion), {}, {
      motionAppear: false
    }),
    onClick: onClick,
    treeData: [{
      key: '0',
      title: props.title || '<root>',
      children: data
    }],
    defaultExpandAll: true,
    switcherIcon: renderSwitcherIcon
  });
});