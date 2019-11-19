import { produce } from 'immer';
import { Operation, Path } from 'slate';
import isPlainObject from 'is-plain-object';

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

var HISTORY = Symbol('history');
var SAVING = Symbol('saving');
var MERGING = Symbol('merging');
/**
 * The `withHistory` mixin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 */

var withHistory = function withHistory(Editor) {
  return (
    /*#__PURE__*/
    function (_Editor) {
      inherits(HistoryEditor, _Editor);

      /**
       * Setup defaults for weak maps on construct.
       */
      function HistoryEditor() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, HistoryEditor);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(HistoryEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
        var history = produce({
          undos: [],
          redos: []
        }, function () {});
        _this[HISTORY] = history;
        _this[MERGING] = null;
        _this[SAVING] = true;
        return _this;
      }
      /**
       * When an operation is applied to the editor, save it.
       */


      createClass(HistoryEditor, [{
        key: "apply",
        value: function apply(op) {
          var operations = this.operations;
          var history = this[HISTORY];
          var save = this[SAVING];
          var merge = this[MERGING];
          this[HISTORY] = produce(history, function (h) {
            var undos = h.undos;
            var lastBatch = undos[undos.length - 1];
            var lastOp = lastBatch && lastBatch[lastBatch.length - 1];
            var overwrite = shouldOverwrite(op, lastOp);

            if (save == null) {
              save = shouldSave(op);
            }

            if (!save) {
              return;
            }

            if (merge == null) {
              if (lastBatch == null) {
                merge = false;
              } else if (operations.length !== 0) {
                merge = true;
              } else {
                merge = shouldMerge(op, lastOp) || overwrite;
              }
            }

            if (lastBatch && merge) {
              if (overwrite) {
                lastBatch.pop();
              }

              lastBatch.push(op);
            } else {
              var batch = [op];
              undos.push(batch);
            }

            while (undos.length > 100) {
              undos.shift();
            }

            h.redos = [];
          });

          get(getPrototypeOf(HistoryEditor.prototype), "apply", this).call(this, op);
        }
        /**
         * Get the history object for the editor.
         */

      }, {
        key: "getHistory",
        value: function getHistory() {
          return this[HISTORY];
        }
        /**
         * Redo the last batch of operations in the history.
         */

      }, {
        key: "redo",
        value: function redo() {
          var _this2 = this;

          var history = this[HISTORY];
          var redos = history.redos;

          if (redos.length === 0) {
            return;
          }

          var batch = redos[redos.length - 1];
          this.withoutSaving(function () {
            _this2.withoutNormalizing(function () {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = batch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var op = _step.value;

                  _this2.apply(op);
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
            });
          });
          this[HISTORY] = produce(history, function (h) {
            h.redos.pop();
            h.undos.push(batch);
          });
        }
        /**
         * Undo the last batch of operations in the history.
         */

      }, {
        key: "undo",
        value: function undo() {
          var _this3 = this;

          var history = this[HISTORY];
          var undos = history.undos;

          if (undos.length === 0) {
            return;
          }

          var batch = undos[undos.length - 1];
          this.withoutSaving(function () {
            _this3.withoutNormalizing(function () {
              var inverseOps = batch.map(Operation.inverse).reverse();
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = inverseOps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var op = _step2.value;

                  // If the final operation is deselecting the editor, skip it. This is
                  if (op === inverseOps[inverseOps.length - 1] && op.type === 'set_selection' && op.newProperties == null) {
                    continue;
                  } else {
                    _this3.apply(op);
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
            });
          });
          this[HISTORY] = produce(history, function (h) {
            h.redos.push(batch);
            h.undos.pop();
          });
        }
        /**
         * Apply a series of changes inside a synchronous `fn`, without merging any of
         * the new operations into previous save point in the history.
         */

      }, {
        key: "withoutMerging",
        value: function withoutMerging(fn) {
          var prev = this[MERGING];
          this[MERGING] = false;
          fn();
          this[MERGING] = prev;
        }
        /**
         * Apply a series of changes inside a synchronous `fn`, without saving any of
         * their operations into the history.
         */

      }, {
        key: "withoutSaving",
        value: function withoutSaving(fn) {
          var prev = this[SAVING];
          this[SAVING] = false;
          fn();
          this[SAVING] = prev;
        }
      }]);

      return HistoryEditor;
    }(Editor)
  );
};
/**
 * Check whether to merge an operation into the previous operation.
 */

var shouldMerge = function shouldMerge(op, prev) {
  if (op.type === 'set_selection') {
    return true;
  }

  if (prev && op.type === 'insert_text' && prev.type === 'insert_text' && op.offset === prev.offset + prev.text.length && Path.equals(op.path, prev.path)) {
    return true;
  }

  if (prev && op.type === 'remove_text' && prev.type === 'remove_text' && op.offset + op.text.length === prev.offset && Path.equals(op.path, prev.path)) {
    return true;
  }

  return false;
};
/**
 * Check whether an operation needs to be saved to the history.
 */


var shouldSave = function shouldSave(op, prev) {
  if (op.type === 'set_selection' && op.newProperties == null) {
    return false;
  }

  return true;
};
/**
 * Check whether an operation should overwrite the previous one.
 */


var shouldOverwrite = function shouldOverwrite(op, prev) {
  if (prev && op.type === 'set_selection' && prev.type === 'set_selection') {
    return true;
  }

  return false;
};

var History;

(function (History) {
  /**
   * Check if a value is a `History` object.
   */
  History.isHistory = function (value) {
    return isPlainObject(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || Operation.isOperationList(value.redos[0])) && (value.undos.length === 0 || Operation.isOperationList(value.undos[0]));
  };
})(History || (History = {}));

export { History, withHistory };
//# sourceMappingURL=index.es.js.map
