(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('slate')) :
  typeof define === 'function' && define.amd ? define(['exports', 'slate'], factory) :
  (global = global || self, factory(global.SlateSchema = {}, global.Slate));
}(this, (function (exports, slate) { 'use strict';

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

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

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  var superPropBase = _superPropBase;

  var get = createCommonjsModule(function (module) {
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      module.exports = _get = Reflect.get;
    } else {
      module.exports = _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  module.exports = _get;
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

  /**
   * Check a node object.
   */

  var checkNode = function checkNode(editor, entry, rule, rules) {
    var v = rule.validate;

    var _entry3 = slicedToArray(entry, 2),
        node = _entry3[0],
        path = _entry3[1];

    if (editor.isNodeMatch(entry, rule.match)) {
      if ('properties' in v) {
        for (var k in v.properties) {
          var p = v.properties[k];
          var value = node[k];
          var isInvalid = typeof p === 'function' ? !p(value) : p !== value;

          if (isInvalid) {
            return {
              code: 'node_property_invalid',
              node: node,
              path: path,
              property: k
            };
          }
        }
      }

      if ('marks' in v && v.marks != null) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var _step$value = slicedToArray(_step.value, 4),
                mark = _step$value[0],
                index = _step$value[1],
                n = _step$value[2],
                p = _step$value[3];

            if (!v.marks.some(function (m) {
              return slate.Mark.matches(mark, m);
            })) {
              return {
                v: {
                  code: 'mark_invalid',
                  node: n,
                  path: p,
                  mark: mark,
                  index: index
                }
              };
            }
          };

          for (var _iterator = slate.Node.marks(node)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_typeof_1(_ret) === "object") return _ret.v;
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
      }

      if ('text' in v && v.text != null) {
        var text = slate.Node.text(node);

        if (!v.text(text)) {
          return {
            code: 'node_text_invalid',
            node: node,
            path: path,
            text: text
          };
        }
      }

      if (!slate.Text.isText(node)) {
        if ('first' in v && v.first != null && node.children.length !== 0) {
          var n = slate.Node.child(node, 0);

          var _p = path.concat(0);

          if (!editor.isNodeMatch([n, _p], v.first)) {
            return {
              code: 'first_child_invalid',
              node: n,
              path: _p,
              index: 0
            };
          }
        }

        if ('last' in v && v.last != null && node.children.length !== 0) {
          var i = node.children.length - 1;

          var _n = slate.Node.child(node, i);

          var _p2 = path.concat(i);

          if (!editor.isNodeMatch([_n, _p2], v.last)) {
            return {
              code: 'last_child_invalid',
              node: _n,
              path: _p2,
              index: i
            };
          }
        }
      }
    }
  };
  /**
   * Check an ancestor node object's children.
   */

  var checkAncestor = function checkAncestor(editor, entry, rule, ancestorRules) {
    var v = rule.validate;

    var _entry4 = slicedToArray(entry, 2),
        parent = _entry4[0],
        parentPath = _entry4[1];

    var processed = new Set();
    var isMatch = editor.isNodeMatch(entry, rule.match);
    var groups = 'children' in v && v.children != null ? v.children : [];
    var index = 0;
    var count = 0;
    var g = 0;

    while (true) {
      count++;
      var group = groups[g];
      var child = parent.children[index];
      var childPath = parentPath.concat(index); // For each child check the parent-related validations. But ensure that we
      // only ever check each child once, which isn't guaranteed since we're not
      // iterating just over the children in one go.

      if (child && !processed.has(child)) {
        processed.add(child);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = ancestorRules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var r = _step2.value;
            var e = checkParent(editor, entry, index, rule, r);

            if (e) {
              return e;
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
      } // If we're out of children and groups we're done.


      if (!child && !group) {
        break;
      } // If the entry doesn't match the rule, then the `children` validation is
      // irrelevant, so just keep iterating the children.


      if (!isMatch) {
        if (child) {
          index++;
          continue;
        } else {
          break;
        }
      } // If we're out of groups, just continue iterating the children.


      if (!group) {
        index++;
        continue;
      } // Since we want to report overflow on last matching child we don't
      // immediately v for count > max, but instead do so once we find
      // a child that doesn't match.


      if (child && group.max != null && count > group.max) {
        if (g < groups.length - 1 && (group.min == null || count >= group.min)) {
          g++;
          count = 0;
          continue;
        } else {
          return {
            code: 'child_max_invalid',
            node: parent,
            path: parentPath,
            index: index,
            count: count,
            max: group.max
          };
        }
      } // If there's no child, we're either done, we're in an optional group, or
      // we're missing a child in a group with a mininmum set.


      if (!child) {
        if (group.min != null && count <= group.min) {
          return {
            code: 'child_min_invalid',
            node: parent,
            path: parentPath,
            index: index,
            count: count,
            min: group.min
          };
        } else {
          g++;
          count = 0;
          continue;
        }
      }

      if (editor.isNodeMatch([child, childPath], group.match || {})) {
        index++;
        continue;
      } // If there are more children definitions after this one, then this
      // child might actually be valid for a future one.


      if (g + 1 < groups.length) {
        // If we've already satisfied the current child definition's minimum
        // then we can proceed to the next definition.
        if (group.min == null || count >= group.min) {
          g++;
          count = 0;
          continue;
        } // The current group might be missing an element, and the child is
        // actually a member of the next group. If so, the next validation
        // won't report errors, and we can break to error out as minimum.


        var nc = groups[g + 1];

        if (nc && editor.isNodeMatch([child, childPath], nc.match || {})) {
          return {
            code: 'child_min_invalid',
            node: parent,
            path: parentPath,
            index: index,
            count: count,
            min: group.min
          };
        }
      }

      return {
        code: 'child_invalid',
        node: child,
        path: childPath,
        index: index
      };
    }
  };
  /**
   * Check a parent node object's children.
   */

  var checkParent = function checkParent(editor, entry, index, rule, childRule) {
    var cv = childRule.validate;

    var _entry5 = slicedToArray(entry, 2),
        parent = _entry5[0],
        parentPath = _entry5[1];

    var child = slate.Node.child(parent, index);
    var childPath = parentPath.concat(index);

    if ('parent' in cv && cv.parent != null && editor.isNodeMatch([child, childPath], rule.match) && !editor.isNodeMatch([parent, parentPath], cv.parent)) {
      return {
        code: 'parent_invalid',
        node: parent,
        path: parentPath,
        index: index
      };
    }

    if ('previous' in cv && cv.previous != null && index > 0 && editor.isNodeMatch([child, childPath], rule.match)) {
      var prevChild = slate.Node.child(parent, index - 1);
      var prevPath = parentPath.concat(index - 1);

      if (!editor.isNodeMatch([prevChild, prevPath], cv.previous)) {
        return {
          code: 'previous_sibling_invalid',
          node: prevChild,
          path: prevPath
        };
      }
    }

    if ('next' in cv && cv.next != null && index < parent.children.length - 1 && editor.isNodeMatch([child, childPath], rule.match)) {
      var nextChild = slate.Node.child(parent, index + 1);
      var nextPath = parentPath.concat(index + 1);

      if (!editor.isNodeMatch([nextChild, nextPath], cv.next)) {
        return {
          code: 'next_sibling_invalid',
          node: nextChild,
          path: nextPath
        };
      }
    }
  };

  /**
   * The `withSchema` mixin augments an editor to ensure that its value is
   * normalized to always obey a schema after operations are applied.
   */

  var withSchema = function withSchema(Editor) {
    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var annotationRules = [];
    var markRules = [];
    var nodeRules = [];
    var ancestorRules = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rule = _step.value;

        if (rule["for"] === 'annotation') {
          annotationRules.push(rule);
        } else if (rule["for"] === 'mark') {
          markRules.push(rule);
        } else {
          nodeRules.push(rule);

          if ('parent' in rule.validate || 'next' in rule.validate || 'previous' in rule.validate) {
            ancestorRules.push(rule);
          }
        }
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

    return (
      /*#__PURE__*/
      function (_Editor) {
        inherits(_class, _Editor);

        function _class() {
          classCallCheck(this, _class);

          return possibleConstructorReturn(this, getPrototypeOf(_class).apply(this, arguments));
        }

        createClass(_class, [{
          key: "normalizeNodes",

          /**
           * Normalize a node at a path with the schema's rules, returning it to a
           * valid state if it is currently invalid.
           */
          value: function normalizeNodes(options) {
            var at = options.at;
            var entry = this.getNode(at);

            var _entry = slicedToArray(entry, 2),
                n = _entry[0],
                p = _entry[1];

            var error;
            var rule;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = nodeRules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var r = _step2.value;
                var e = checkNode(this, entry, r, nodeRules);

                if (!e && !slate.Text.isText(n)) {
                  e = checkAncestor(this, [n, p], r, ancestorRules);
                }

                if (e) {
                  error = e;
                  rule = r;
                  break;
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

            if (error == null) {
              return get(getPrototypeOf(_class.prototype), "normalizeNodes", this).call(this, options);
            }

            var prevLength = this.operations.length; // First run the user-provided `normalize` function if one exists...

            if (rule != null && rule.normalize) {
              rule.normalize(this, error);
            } // If the `normalize` function did add any operations to the editor,
            // we assume that it fully handled the normalization and exit.


            if (this.operations.length > prevLength) {
              return;
            }

            switch (error.code) {
              case 'first_child_invalid':
              case 'last_child_invalid':
                {
                  var _error = error,
                      path = _error.path;

                  var _this$getParent = this.getParent(path),
                      _this$getParent2 = slicedToArray(_this$getParent, 2),
                      parent = _this$getParent2[0],
                      parentPath = _this$getParent2[1];

                  if (parent.children.length > 1) {
                    this.removeNodes({
                      at: path
                    });
                  } else if (parentPath.length === 0) {
                    var range = this.getRange(parentPath);
                    this.removeNodes({
                      at: range,
                      match: function match(_ref) {
                        var _ref2 = slicedToArray(_ref, 2),
                            p = _ref2[1];

                        return p.length === 1;
                      }
                    });
                  } else {
                    this.removeNodes({
                      at: parentPath
                    });
                  }

                  break;
                }

              case 'child_max_invalid':
                {
                  var _error2 = error,
                      node = _error2.node,
                      _path = _error2.path,
                      index = _error2.index;

                  if (node.children.length === 1 && _path.length !== 0) {
                    this.removeNodes({
                      at: _path
                    });
                  } else {
                    this.removeNodes({
                      at: _path.concat(index)
                    });
                  }

                  break;
                }

              case 'child_min_invalid':
                {
                  var _error3 = error,
                      _path2 = _error3.path;

                  if (_path2.length === 0) {
                    var _range = this.getRange(_path2);

                    this.removeNodes({
                      at: _range,
                      match: function match(_ref3) {
                        var _ref4 = slicedToArray(_ref3, 2),
                            p = _ref4[1];

                        return p.length === 1;
                      }
                    });
                  } else {
                    this.removeNodes({
                      at: _path2
                    });
                  }

                  break;
                }

              case 'child_invalid':
              case 'child_unexpected':
              case 'next_sibling_invalid':
              case 'node_property_invalid':
              case 'node_text_invalid':
              case 'previous_sibling_invalid':
                {
                  var _error4 = error,
                      _path3 = _error4.path;
                  this.removeNodes({
                    at: _path3
                  });
                  break;
                }

              case 'mark_invalid':
                {
                  var _error5 = error,
                      mark = _error5.mark,
                      _path4 = _error5.path;
                  this.removeMarks([mark], {
                    at: _path4
                  });
                  break;
                }

              case 'parent_invalid':
                {
                  var _error6 = error,
                      _path5 = _error6.path,
                      _index = _error6.index;

                  var childPath = _path5.concat(_index);

                  this.removeNodes({
                    at: childPath
                  });
                  break;
                }

              default:
                {
                  throw new Error("Cannot normalize unknown validation error: \"".concat(JSON.stringify(error), "\""));
                }
            }
          }
        }]);

        return _class;
      }(Editor)
    );
  };

  exports.withSchema = withSchema;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
