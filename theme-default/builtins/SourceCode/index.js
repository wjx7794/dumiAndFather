function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconCheck } from '@ant-design/icons-svg/inline-svg/outlined/check.svg';
import { ReactComponent as IconCopy } from '@ant-design/icons-svg/inline-svg/outlined/copy.svg';
import classNames from 'classnames';
import { useSiteData } from 'dumi';
import Highlight, { defaultProps } from 'prism-react-renderer';
import 'prism-themes/themes/prism-one-light.css';
import React, { useRef, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./index.less";

/**
 * define DSL which can be highlighted as similar language
 */
var SIMILAR_DSL = {
  acss: 'css',
  axml: 'markup'
};
var SourceCode = function SourceCode(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    lang = props.lang,
    _props$highlightLines = props.highlightLines,
    highlightLines = _props$highlightLines === void 0 ? [] : _props$highlightLines;
  var timer = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCopied = _useState2[0],
    setIsCopied = _useState2[1];
  var _useState3 = useState(children),
    _useState4 = _slicedToArray(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  useEffect(function () {
    var isShell = /shellscript|shell|bash|sh|zsh/.test(lang);
    if (isShell) {
      var _text = children.replace(/^(\$|>)\s/gm, '');
      setText(_text);
    }
  }, [lang, children]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-source-code"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: text,
    onCopy: function onCopy() {
      setIsCopied(true);
      clearTimeout(timer.current);
      timer.current = window.setTimeout(function () {
        return setIsCopied(false);
      }, 2000);
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-default-source-code-copy",
    "data-copied": isCopied || undefined
  }, isCopied ? /*#__PURE__*/React.createElement(IconCheck, null) : /*#__PURE__*/React.createElement(IconCopy, null))), /*#__PURE__*/React.createElement(Highlight, _extends({}, defaultProps, {
    code: children.trim(),
    language: SIMILAR_DSL[lang] || lang,
    theme: undefined
  }), function (_ref) {
    var className = _ref.className,
      style = _ref.style,
      tokens = _ref.tokens,
      getLineProps = _ref.getLineProps,
      getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/React.createElement("pre", {
      className: className,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: String(i),
        className: classNames({
          highlighted: highlightLines.includes(i + 1),
          wrap: themeConfig.showLineNum
        })
      }, themeConfig.showLineNum && /*#__PURE__*/React.createElement("span", {
        className: "token-line-num"
      }, i + 1), /*#__PURE__*/React.createElement("div", _extends({}, getLineProps({
        line: line,
        key: i
      }), {
        className: classNames({
          'line-cell': themeConfig.showLineNum
        })
      }), line.map(function (token, key) {
        return (
          /*#__PURE__*/
          // getTokenProps 返回值包含 key
          // eslint-disable-next-line react/jsx-key
          React.createElement("span", getTokenProps({
            token: token,
            key: key
          }))
        );
      })));
    }));
  }));
};
export default SourceCode;