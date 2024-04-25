function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconCheck } from '@ant-design/icons-svg/inline-svg/outlined/check.svg';
import { ReactComponent as IconCodeSandbox } from '@ant-design/icons-svg/inline-svg/outlined/code-sandbox.svg';
import { ReactComponent as IconSketch } from '@ant-design/icons-svg/inline-svg/outlined/sketch.svg';
import { ReactComponent as IconStackBlitz } from '@ant-design/icons-svg/inline-svg/outlined/thunderbolt.svg';
import copy from 'copy-to-clipboard';
import { getSketchJSON, openCodeSandbox, openStackBlitz, useIntl } from 'dumi';
import SourceCode from 'dumi/theme/builtins/SourceCode';
import PreviewerActionsExtra from 'dumi/theme/slots/PreviewerActionsExtra';
import Tabs from 'rc-tabs';
import React, { useRef, useState } from 'react';
import "./index.less";
var IconCode = function IconCode() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 117"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"
  }));
};
var IconCodeExpand = function IconCodeExpand() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 117"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"
  }));
};
var IconExternalLink = function IconExternalLink() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"
  }));
};
var PreviewerActions = function PreviewerActions(props) {
  var _files$activeKey$0$ma, _props$disabledAction, _props$disabledAction2, _props$disabledAction3, _props$disabledAction4;
  var intl = useIntl();
  var files = Object.entries(props.asset.dependencies).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      type = _ref2[1].type;
    return type === 'FILE';
  });
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = useState(props.forceShowCode || props.defaultShowCode),
    _useState4 = _slicedToArray(_useState3, 2),
    showCode = _useState4[0],
    setShowCode = _useState4[1];
  var copyTimer = useRef();
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCopied = _useState6[0],
    setIsCopied = _useState6[1];
  var isSingleFile = files.length === 1;
  var lang = ((_files$activeKey$0$ma = files[activeKey][0].match(/\.([^.]+)$/)) === null || _files$activeKey$0$ma === void 0 ? void 0 : _files$activeKey$0$ma[1]) || 'text';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-actions"
  }, !((_props$disabledAction = props.disabledActions) !== null && _props$disabledAction !== void 0 && _props$disabledAction.includes('CSB')) && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.codesandbox'
    }),
    onClick: function onClick() {
      return openCodeSandbox(props);
    }
  }, /*#__PURE__*/React.createElement(IconCodeSandbox, null)), !((_props$disabledAction2 = props.disabledActions) !== null && _props$disabledAction2 !== void 0 && _props$disabledAction2.includes('STACKBLITZ')) && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.stackblitz'
    }),
    onClick: function onClick() {
      return openStackBlitz(props);
    }
  }, /*#__PURE__*/React.createElement(IconStackBlitz, null)), !((_props$disabledAction3 = props.disabledActions) !== null && _props$disabledAction3 !== void 0 && _props$disabledAction3.includes('HTML2SKETCH')) && getSketchJSON && /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-previewer-action-btn dumi-default-previewer-action-sketch",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.sketch'
    }),
    "data-copied": isCopied || undefined
  }, isCopied ? /*#__PURE__*/React.createElement(IconCheck, null) : /*#__PURE__*/React.createElement(IconSketch, null), /*#__PURE__*/React.createElement("select", {
    value: "",
    onChange: function onChange(ev) {
      var type = ev.target.value;
      switch (type) {
        case 'group':
        case 'symbol':
          getSketchJSON(props.demoContainer, {
            type: type
          }).then(function (data) {
            copy(JSON.stringify(data));
            setIsCopied(true);
            clearTimeout(copyTimer.current);
            copyTimer.current = window.setTimeout(function () {
              return setIsCopied(false);
            }, 2000);
          });
          break;
        case 'guide':
          window.open('https://d.umijs.org/config#html2sketch');
          break;
        default:
      }
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }), /*#__PURE__*/React.createElement("option", {
    value: "group"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.group'
  })), /*#__PURE__*/React.createElement("option", {
    value: "symbol"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.symbol'
  })), /*#__PURE__*/React.createElement("option", {
    value: "-",
    disabled: true
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.divider'
  })), /*#__PURE__*/React.createElement("option", {
    value: "guide"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.guide'
  })))), !((_props$disabledAction4 = props.disabledActions) !== null && _props$disabledAction4 !== void 0 && _props$disabledAction4.includes('EXTERNAL')) && /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: props.demoUrl,
    className: "dumi-default-previewer-action-btn",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.separate'
    })
  }, /*#__PURE__*/React.createElement(IconExternalLink, null)), props.extra, /*#__PURE__*/React.createElement(PreviewerActionsExtra, props), !props.forceShowCode && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    onClick: function onClick() {
      return setShowCode(function (prev) {
        return !prev;
      });
    },
    "data-dumi-tooltip": intl.formatMessage({
      id: "previewer.actions.code.".concat(showCode ? 'shrink' : 'expand')
    })
  }, showCode ? /*#__PURE__*/React.createElement(IconCodeExpand, null) : /*#__PURE__*/React.createElement(IconCode, null))), showCode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-sources"
  }, !isSingleFile && /*#__PURE__*/React.createElement(Tabs, {
    className: "dumi-default-previewer-tabs",
    prefixCls: "dumi-default-tabs",
    moreIcon: "\xB7\xB7\xB7",
    defaultActiveKey: String(activeKey),
    onChange: function onChange(key) {
      return setActiveKey(Number(key));
    },
    items: files.map(function (_ref3, i) {
      var _ref4 = _slicedToArray(_ref3, 1),
        filename = _ref4[0];
      return {
        key: String(i),
        label: filename
      };
    })
  })), /*#__PURE__*/React.createElement(SourceCode, {
    lang: lang
  }, files[activeKey][1].value)));
};
export default PreviewerActions;