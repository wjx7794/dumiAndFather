function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useAtomAssets, useIntl, useRouteMeta } from 'dumi';
import React, { useEffect, useState } from 'react';
import Table from "../Table";
var HANDLERS = {
  // entry method
  toString: function toString(prop) {
    if (typeof prop.type === 'string' && prop.type in this) {
      // value from TypeMap
      if ('enum' in prop) return this.enum(prop);
      return this[prop.type](prop);
    } else if (prop.type) {
      // non-parsed type, such as ReactNode
      return this.getValidClassName(prop) || prop.type;
    } else if ('const' in prop) {
      // const value
      return "".concat(prop.const);
    } else if ('oneOf' in prop) {
      // oneOf value
      return this.oneOf(prop);
    }

    // unknown type
    return "unknown";
  },
  // type handlers
  string: function string(prop) {
    return prop.type;
  },
  number: function number(prop) {
    return prop.type;
  },
  boolean: function boolean(prop) {
    return prop.type;
  },
  any: function any(prop) {
    return prop.type;
  },
  object: function object(prop) {
    var _this = this;
    var props = [];
    Object.entries(prop.properties || {}).forEach(function (_ref) {
      var _prop$required;
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      // skip nested object type
      props.push("".concat(key).concat((_prop$required = prop.required) !== null && _prop$required !== void 0 && _prop$required.includes(key) ? '' : '?', ": ").concat(value.type === 'object' ? 'object' : _this.toString(value)));
    });
    return props.length ? "{ ".concat(props.join('; '), " }") : '{}';
  },
  array: function array(prop) {
    if (prop.items) {
      var className = this.getValidClassName(prop.items);
      return className ? "".concat(className, "[]") : "".concat(this.toString(prop.items), "[]");
    }
    return 'any[]';
  },
  // FIXME: extract real type
  element: function element(prop) {
    return "<".concat(prop.componentName, " />");
  },
  // FIXME: extract real type
  function: function _function(_ref3) {
    var _this2 = this;
    var signature = _ref3.signature;
    // handle Function type without signature
    if (!signature) return 'Function';
    var signatures = 'oneOf' in signature ? signature.oneOf : [signature];
    return signatures.map(function (signature) {
      return "".concat(signature.isAsync ? 'async ' : '', "(").concat(signature.arguments.map(function (arg) {
        return "".concat(arg.key, ": ").concat(_this2.toString(arg));
      }).join(', '), ") => ").concat(_this2.toString(signature.returnType));
    }).join(' | ');
  },
  // FIXME: extract real type
  dom: function dom(prop) {
    return prop.className || 'DOM';
  },
  // special handlers
  enum: function _enum(prop) {
    return prop.enum.map(function (v) {
      return JSON.stringify(v);
    }).join(' | ');
  },
  oneOf: function oneOf(prop) {
    var _this3 = this;
    return prop.oneOf.map(function (v) {
      return _this3.getValidClassName(v) || _this3.toString(v);
    }).join(' | ');
  },
  // utils
  getValidClassName: function getValidClassName(prop) {
    return 'className' in prop && typeof prop.className === 'string' && prop.className !== '__type' ? prop.className : null;
  }
};
var APIType = function APIType(prop) {
  var _useState = useState(function () {
      return HANDLERS.toString(prop);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  useEffect(function () {
    setType(HANDLERS.toString(prop));
  }, [prop]);
  return /*#__PURE__*/React.createElement("code", null, type);
};
var API = function API(props) {
  var _definition$propsConf;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  var _useAtomAssets = useAtomAssets(),
    components = _useAtomAssets.components;
  var id = props.id || frontmatter.atomId;
  var intl = useIntl();
  if (!id) throw new Error('`id` properties if required for API component!');
  var definition = components === null || components === void 0 ? void 0 : components[id];
  return /*#__PURE__*/React.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.name'
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.description'
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.type'
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.default'
  })))), /*#__PURE__*/React.createElement("tbody", null, definition && (_definition$propsConf = definition.propsConfig) !== null && _definition$propsConf !== void 0 && _definition$propsConf.properties ? Object.entries(definition.propsConfig.properties).map(function (_ref4) {
    var _definition$propsConf2;
    var _ref5 = _slicedToArray(_ref4, 2),
      name = _ref5[0],
      prop = _ref5[1];
    return /*#__PURE__*/React.createElement("tr", {
      key: name
    }, /*#__PURE__*/React.createElement("td", null, name), /*#__PURE__*/React.createElement("td", null, prop.description || '--'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(APIType, prop)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("code", null, (_definition$propsConf2 = definition.propsConfig.required) !== null && _definition$propsConf2 !== void 0 && _definition$propsConf2.includes(name) ? intl.formatMessage({
      id: 'api.component.required'
    }) : JSON.stringify(prop.default) || '--')));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 4
  }, intl.formatMessage({
    id: "api.component.".concat(components ? 'not.found' : 'unavailable')
  }, {
    id: id
  }))))));
};
export default API;