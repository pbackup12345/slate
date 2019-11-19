(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('slate')) :
	typeof define === 'function' && define.amd ? define(['exports', 'slate'], factory) :
	(global = global || self, factory(global.SlateHyperscript = {}, global.Slate));
}(this, (function (exports, slate) { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	var isobject = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};

	function isObjectObject(o) {
	  return isobject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	var isPlainObject = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
	    return;
	  }

	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var objectWithoutProperties = _objectWithoutProperties;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	/**
	 * A weak map to hold anchor tokens.
	 */
	var ANCHOR = new WeakMap();
	/**
	 * A weak map to hold focus tokens.
	 */

	var FOCUS = new WeakMap();
	/**
	 * A weak map to hold annotation tokens.
	 */

	var ANNOTATION = new WeakMap();
	/**
	 * All tokens inherit from a single constructor for `instanceof` checking.
	 */

	var Token = function Token() {
	  classCallCheck(this, Token);
	};
	/**
	 * Anchor tokens represent the selection's anchor point.
	 */

	var AnchorToken =
	/*#__PURE__*/
	function (_Token) {
	  inherits(AnchorToken, _Token);

	  function AnchorToken() {
	    var _this;

	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    classCallCheck(this, AnchorToken);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AnchorToken).call(this));
	    var _props$focused = props.focused,
	        focused = _props$focused === void 0 ? true : _props$focused,
	        _props$marks = props.marks,
	        marks = _props$marks === void 0 ? null : _props$marks,
	        offset = props.offset,
	        path = props.path;
	    _this.focused = focused;
	    _this.marks = marks;
	    _this.offset = offset;
	    _this.path = path;
	    return _this;
	  }

	  return AnchorToken;
	}(Token);
	/**
	 * Focus tokens represent the selection's focus point.
	 */

	var FocusToken =
	/*#__PURE__*/
	function (_Token2) {
	  inherits(FocusToken, _Token2);

	  function FocusToken() {
	    var _this2;

	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    classCallCheck(this, FocusToken);

	    _this2 = possibleConstructorReturn(this, getPrototypeOf(FocusToken).call(this));
	    var _props$focused2 = props.focused,
	        focused = _props$focused2 === void 0 ? true : _props$focused2,
	        _props$marks2 = props.marks,
	        marks = _props$marks2 === void 0 ? null : _props$marks2,
	        offset = props.offset,
	        path = props.path;
	    _this2.focused = focused;
	    _this2.marks = marks;
	    _this2.offset = offset;
	    _this2.path = path;
	    return _this2;
	  }

	  return FocusToken;
	}(Token);
	/**
	 * Annotation tokens represent an edge of an annotation range.
	 */

	var AnnotationToken =
	/*#__PURE__*/
	function (_Token3) {
	  inherits(AnnotationToken, _Token3);

	  function AnnotationToken(props) {
	    var _this3;

	    classCallCheck(this, AnnotationToken);

	    _this3 = possibleConstructorReturn(this, getPrototypeOf(AnnotationToken).call(this));

	    var key = props.key,
	        rest = objectWithoutProperties(props, ["key"]);

	    _this3.key = key;
	    _this3.props = rest;
	    return _this3;
	  }

	  return AnnotationToken;
	}(Token);
	/**
	 * Add an anchor token to the end of a text node.
	 */

	var addAnchorToken = function addAnchorToken(text, token) {
	  var offset = text.text.length;
	  ANCHOR.set(text, [offset, token]);
	};
	/**
	 * Get the offset if a text node has an associated anchor token.
	 */

	var getAnchorOffset = function getAnchorOffset(text) {
	  return ANCHOR.get(text);
	};
	/**
	 * Add a focus token to the end of a text node.
	 */

	var addFocusToken = function addFocusToken(text, token) {
	  var offset = text.text.length;
	  FOCUS.set(text, [offset, token]);
	};
	/**
	 * Get the offset if a text node has an associated focus token.
	 */

	var getFocusOffset = function getFocusOffset(text) {
	  return FOCUS.get(text);
	};
	/**
	 * Add an annotation token to the end of a text node.
	 */

	var addAnnotationToken = function addAnnotationToken(text, token) {
	  var map = ANNOTATION.get(text);

	  if (map == null) {
	    map = {};
	    ANNOTATION.set(text, map);
	  }

	  var offset = text.text.length;
	  map[offset] = token;
	};
	/**
	 * Get the offset if a text node has an associated focus token.
	 */

	var getAnnotationOffsets = function getAnnotationOffsets(text) {
	  return ANNOTATION.get(text);
	};

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	/**
	 * Resolve the descedants of a node by normalizing the children that can be
	 * passed into a hyperscript creator function.
	 */

	var STRINGS = new WeakSet();

	var resolveDescendants = function resolveDescendants(children) {
	  var nodes = [];

	  var addChild = function addChild(child) {
	    if (child == null) {
	      return;
	    }

	    var prev = nodes[nodes.length - 1];

	    if (typeof child === 'string') {
	      var text = {
	        text: child,
	        marks: []
	      };
	      STRINGS.add(text);
	      child = text;
	    }

	    if (slate.Text.isText(child)) {
	      var c = child; // HACK: fix typescript complaining

	      if (slate.Text.isText(prev) && STRINGS.has(prev) && STRINGS.has(c) && c.marks.every(function (m) {
	        return slate.Mark.exists(m, prev.marks);
	      }) && prev.marks.every(function (m) {
	        return slate.Mark.exists(m, c.marks);
	      })) {
	        prev.text += c.text;
	      } else {
	        nodes.push(c);
	      }
	    } else if (slate.Element.isElement(child)) {
	      nodes.push(child);
	    } else if (child instanceof Token) {
	      var n = nodes[nodes.length - 1];

	      if (!slate.Text.isText(n)) {
	        addChild('');
	        n = nodes[nodes.length - 1];
	      }

	      if (child instanceof AnchorToken) {
	        addAnchorToken(n, child);
	      } else if (child instanceof FocusToken) {
	        addFocusToken(n, child);
	      } else if (child instanceof AnnotationToken) {
	        addAnnotationToken(n, child);
	      }
	    } else {
	      throw new Error("Unexpected hyperscript child object: ".concat(child));
	    }
	  };

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = children.flat(Infinity)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var child = _step.value;
	      addChild(child);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
	        _iterator["return"]();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return nodes;
	};
	/**
	 * Create an anchor token.
	 */


	function createAnchor(tagName, attributes, children) {
	  return new AnchorToken(attributes);
	}
	/**
	 * Create an annotation token, or two.
	 */

	function createAnnotation(tagName, attributes, children) {
	  if (!('key' in attributes)) {
	    throw new Error("The <annotation> tag must be passed a unique `key` string attribute to uniquely identify it.");
	  }

	  var key = attributes.key,
	      rest = objectWithoutProperties(attributes, ["key"]);

	  if (children.length === 0) {
	    return [new AnnotationToken(_objectSpread({
	      key: key
	    }, rest))];
	  } else {
	    var array = resolveDescendants(children);
	    var start = new AnnotationToken(_objectSpread({
	      key: key
	    }, rest));
	    var end = new AnnotationToken(_objectSpread({
	      key: key
	    }, rest));
	    array.unshift(start);
	    array.push(end);
	    return array;
	  }
	}
	/**
	 * Create an anchor and a focus token.
	 */

	function createCursor(tagName, attributes, children) {
	  return [new AnchorToken(attributes), new FocusToken(attributes)];
	}
	/**
	 * Create an `Element` object.
	 */

	function createElement(tagName, attributes, children) {
	  return _objectSpread({}, attributes, {
	    children: resolveDescendants(children)
	  });
	}
	/**
	 * Create a focus token.
	 */

	function createFocus(tagName, attributes, children) {
	  return new FocusToken(attributes);
	}
	/**
	 * Create a fragment.
	 */

	function createFragment(tagName, attributes, children) {
	  return resolveDescendants(children);
	}
	/**
	 * Create a `Text` object with a mark applied.
	 */

	function createMark(tagName, attributes, children) {
	  var mark = _objectSpread({}, attributes);

	  var nodes = resolveDescendants(children);

	  if (nodes.length > 1) {
	    throw new Error("The <mark> hyperscript tag must only contain a single node's worth of children.");
	  }

	  if (nodes.length === 0) {
	    return {
	      text: '',
	      marks: [mark]
	    };
	  }

	  var _nodes = slicedToArray(nodes, 1),
	      node = _nodes[0];

	  if (!slate.Text.isText(node)) {
	    throw new Error("The <mark> hyperscript tag must only contain text content as children.");
	  }

	  if (!slate.Mark.exists(mark, node.marks)) {
	    node.marks.push(mark);
	  }

	  return node;
	}
	/**
	 * Create a `Selection` object.
	 */

	function createSelection(tagName, attributes, children) {
	  var anchor = children.find(function (c) {
	    return c instanceof AnchorToken;
	  });
	  var focus = children.find(function (c) {
	    return c instanceof FocusToken;
	  });

	  if (!anchor || !anchor.offset || !anchor.path) {
	    throw new Error("The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.");
	  }

	  if (!focus || !focus.offset || !focus.path) {
	    throw new Error("The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.");
	  }

	  return _objectSpread({
	    anchor: {
	      offset: anchor.offset,
	      path: anchor.path
	    },
	    focus: {
	      offset: focus.offset,
	      path: focus.path
	    }
	  }, attributes);
	}
	/**
	 * Create a `Text` object.
	 */

	function createText(tagName, attributes, children) {
	  var nodes = resolveDescendants(children);

	  if (nodes.length > 1) {
	    throw new Error("The <text> hyperscript tag must only contain a single node's worth of children.");
	  }

	  var _nodes2 = slicedToArray(nodes, 1),
	      node = _nodes2[0];

	  if (node == null) {
	    node = {
	      text: '',
	      marks: []
	    };
	  }

	  if (!slate.Text.isText(node)) {
	    throw new Error("\n    The <text> hyperscript tag can only contain text content as children.");
	  } // COMPAT: Re-create the node, because if they used the <text> tag we want to
	  // guarantee that it won't be merge with other string children.


	  STRINGS["delete"](node);
	  Object.assign(node, attributes);
	  return node;
	}
	/**
	 * Create a top-level `Value` object.
	 */

	function createValue(tagName, attributes, children) {
	  var otherChildren = [];
	  var selectionChild;
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var child = _step2.value;

	      if (slate.Range.isRange(child)) {
	        selectionChild = child;
	      } else {
	        otherChildren.push(child);
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
	        _iterator2["return"]();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  var descendants = resolveDescendants(otherChildren);

	  var value = _objectSpread({
	    children: descendants,
	    selection: null,
	    annotations: {}
	  }, attributes);

	  var selection = {};
	  var partials = {}; // Search the document's texts to see if any of them have tokens associated
	  // that need incorporated into the selection or annotations.

	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;

	  try {
	    for (var _iterator3 = slate.Node.texts(value)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var _step3$value = slicedToArray(_step3.value, 2),
	          node = _step3$value[0],
	          path = _step3$value[1];

	      var anchor = getAnchorOffset(node);
	      var focus = getFocusOffset(node);
	      var anns = getAnnotationOffsets(node);

	      if (anchor != null) {
	        var _anchor = slicedToArray(anchor, 1),
	            offset = _anchor[0];

	        selection.anchor = {
	          path: path,
	          offset: offset
	        };
	      }

	      if (focus != null) {
	        var _focus = slicedToArray(focus, 1),
	            _offset = _focus[0];

	        selection.focus = {
	          path: path,
	          offset: _offset
	        };
	      }

	      for (var o in anns) {
	        var _offset2 = parseInt(o, 10);

	        var token = anns[_offset2];
	        var key = token.key;
	        var partial = partials[key];

	        if (!partial) {
	          partials[key] = [path, _offset2, token];
	        } else {
	          var _partial = slicedToArray(partial, 3),
	              pPath = _partial[0],
	              pOffset = _partial[1],
	              pToken = _partial[2];

	          delete partials[key];
	          value.annotations[key] = _objectSpread({
	            anchor: {
	              path: pPath,
	              offset: pOffset
	            },
	            focus: {
	              path: path,
	              offset: _offset2
	            }
	          }, pToken.props, {}, token.props);
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
	        _iterator3["return"]();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }

	  if (Object.keys(partials).length > 0) {
	    throw new Error("Slate hyperscript must have both a start and an end defined for each <annotation> tag using the `key=` prop.");
	  }

	  if (selection.anchor && !selection.focus) {
	    throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.");
	  }

	  if (!selection.anchor && selection.focus) {
	    throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.");
	  }

	  if (selectionChild != null) {
	    value.selection = selectionChild;
	  } else if (slate.Range.isRange(selection)) {
	    value.selection = selection;
	  }

	  return value;
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	/**
	 * The default creators for Slate objects.
	 */

	var DEFAULT_CREATORS = {
	  anchor: createAnchor,
	  annotation: createAnnotation,
	  cursor: createCursor,
	  element: createElement,
	  focus: createFocus,
	  fragment: createFragment,
	  mark: createMark,
	  selection: createSelection,
	  text: createText,
	  value: createValue
	};
	/**
	 * Create a Slate hyperscript function with `options`.
	 */

	var createHyperscript = function createHyperscript() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$annotations = options.annotations,
	      annotations = _options$annotations === void 0 ? {} : _options$annotations,
	      _options$elements = options.elements,
	      elements = _options$elements === void 0 ? {} : _options$elements,
	      _options$marks = options.marks,
	      marks = _options$marks === void 0 ? {} : _options$marks;
	  var annotationCreators = normalizeAnnotations(annotations);
	  var elementCreators = normalizeElements(elements);
	  var markCreators = normalizeMarks(marks);

	  var creators = _objectSpread$1({}, DEFAULT_CREATORS, {}, annotationCreators, {}, elementCreators, {}, markCreators, {}, options.creators);

	  var jsx = createFactory(creators);
	  return jsx;
	};
	/**
	 * Create a Slate hyperscript function with `options`.
	 */


	var createFactory = function createFactory(creators) {
	  var jsx = function jsx(tagName, attributes) {
	    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      children[_key - 2] = arguments[_key];
	    }

	    var creator = creators[tagName];

	    if (!creator) {
	      throw new Error("No hyperscript creator found for tag: <".concat(tagName, ">"));
	    }

	    if (attributes == null) {
	      attributes = {};
	    }

	    if (!isPlainObject(attributes)) {
	      children = [attributes].concat(children);
	      attributes = {};
	    }

	    children = children.filter(function (child) {
	      return Boolean(child);
	    }).flat();
	    var ret = creator(tagName, attributes, children);
	    return ret;
	  };

	  return jsx;
	};
	/**
	 * Normalize a dictionary of element shorthands into creator functions.
	 */


	var normalizeElements = function normalizeElements(elements) {
	  var creators = {};

	  var _loop = function _loop(tagName) {
	    var props = elements[tagName];

	    if (_typeof_1(props) !== 'object') {
	      throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom element <".concat(tagName, ">  tag you passed: ").concat(props));
	    }

	    creators[tagName] = function (tagName, attributes, children) {
	      return createElement('element', _objectSpread$1({}, props, {}, attributes), children);
	    };
	  };

	  for (var tagName in elements) {
	    _loop(tagName);
	  }

	  return creators;
	};
	/**
	 * Normalize a dictionary of mark shorthands into creator functions.
	 */


	var normalizeMarks = function normalizeMarks(marks) {
	  var creators = {};

	  var _loop2 = function _loop2(tagName) {
	    var props = marks[tagName];

	    if (_typeof_1(props) !== 'object') {
	      throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom mark <".concat(tagName, "> tag you passed: ").concat(props));
	    }

	    creators[tagName] = function (tagName, attributes, children) {
	      return createMark('mark', _objectSpread$1({}, props, {}, attributes), children);
	    };
	  };

	  for (var tagName in marks) {
	    _loop2(tagName);
	  }

	  return creators;
	};
	/**
	 * Normalize a dictionary of annotation shorthands into creator functions.
	 */


	var normalizeAnnotations = function normalizeAnnotations(annotations) {
	  var creators = {};

	  var _loop3 = function _loop3(tagName) {
	    var props = annotations[tagName];

	    if (_typeof_1(props) !== 'object') {
	      throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom annotation <".concat(tagName, "> tag you passed: ").concat(props));
	    }

	    creators[tagName] = function (tagName, attributes, children) {
	      return createAnnotation('annotation', _objectSpread$1({}, props, {}, attributes), children);
	    };
	  };

	  for (var tagName in annotations) {
	    _loop3(tagName);
	  }

	  return creators;
	};

	/**
	 * The default hyperscript factory that ships with Slate, without custom tags.
	 */

	var jsx = createHyperscript();

	exports.createHyperscript = createHyperscript;
	exports.jsx = jsx;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
