var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/memoizerific/memoizerific.js
var require_memoizerific = __commonJS({
  "../../node_modules/memoizerific/memoizerific.js"(exports, module) {
    "use strict";
    (function(f3) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f3();
      } else if (typeof define === "function" && define.amd) {
        define([], f3);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.memoizerific = f3();
      }
    })(function() {
      var define2, module2, exports2;
      return function e(t, n, r) {
        function s(o2, u2) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof __require == "function" && __require;
              if (!u2 && a)
                return a(o2, true);
              if (i)
                return i(o2, true);
              var f3 = new Error("Cannot find module '" + o2 + "'");
              throw f3.code = "MODULE_NOT_FOUND", f3;
            }
            var l = n[o2] = { exports: {} };
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof __require == "function" && __require;
        for (var o = 0; o < r.length; o++)
          s(r[o]);
        return s;
      }({ 1: [function(_dereq_, module3, exports3) {
        module3.exports = function(forceSimilar) {
          if (typeof Map !== "function" || forceSimilar) {
            var Similar = _dereq_("./similar");
            return new Similar();
          } else {
            return /* @__PURE__ */ new Map();
          }
        };
      }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
        function Similar() {
          this.list = [];
          this.lastItem = void 0;
          this.size = 0;
          return this;
        }
        Similar.prototype.get = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            return this.lastItem.val;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return this.list[index].val;
          }
          return void 0;
        };
        Similar.prototype.set = function(key2, val) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            this.lastItem.val = val;
            return this;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            this.list[index].val = val;
            return this;
          }
          this.lastItem = { key: key2, val };
          this.list.push(this.lastItem);
          this.size++;
          return this;
        };
        Similar.prototype.delete = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            this.lastItem = void 0;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.size--;
            return this.list.splice(index, 1)[0];
          }
          return void 0;
        };
        Similar.prototype.has = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            return true;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return true;
          }
          return false;
        };
        Similar.prototype.forEach = function(callback, thisArg) {
          var i;
          for (i = 0; i < this.size; i++) {
            callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
          }
        };
        Similar.prototype.indexOf = function(key2) {
          var i;
          for (i = 0; i < this.size; i++) {
            if (this.isEqual(this.list[i].key, key2)) {
              return i;
            }
          }
          return -1;
        };
        Similar.prototype.isEqual = function(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        };
        module3.exports = Similar;
      }, {}], 3: [function(_dereq_, module3, exports3) {
        var MapOrSimilar = _dereq_("map-or-similar");
        module3.exports = function(limit) {
          var cache = new MapOrSimilar(false), lru = [];
          return function(fn) {
            var memoizerific = function() {
              var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
              if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) {
                throw new Error("Memoizerific functions should always be called with the same number of arguments");
              }
              for (i = 0; i < argsLengthMinusOne; i++) {
                lruPath[i] = {
                  cacheItem: currentCache,
                  arg: arguments[i]
                };
                if (currentCache.has(arguments[i])) {
                  currentCache = currentCache.get(arguments[i]);
                  continue;
                }
                isMemoized = false;
                newMap = new MapOrSimilar(false);
                currentCache.set(arguments[i], newMap);
                currentCache = newMap;
              }
              if (isMemoized) {
                if (currentCache.has(arguments[argsLengthMinusOne])) {
                  fnResult = currentCache.get(arguments[argsLengthMinusOne]);
                } else {
                  isMemoized = false;
                }
              }
              if (!isMemoized) {
                fnResult = fn.apply(null, arguments);
                currentCache.set(arguments[argsLengthMinusOne], fnResult);
              }
              if (limit > 0) {
                lruPath[argsLengthMinusOne] = {
                  cacheItem: currentCache,
                  arg: arguments[argsLengthMinusOne]
                };
                if (isMemoized) {
                  moveToMostRecentLru(lru, lruPath);
                } else {
                  lru.push(lruPath);
                }
                if (lru.length > limit) {
                  removeCachedResult(lru.shift());
                }
              }
              memoizerific.wasMemoized = isMemoized;
              memoizerific.numArgs = argsLengthMinusOne + 1;
              return fnResult;
            };
            memoizerific.limit = limit;
            memoizerific.wasMemoized = false;
            memoizerific.cache = cache;
            memoizerific.lru = lru;
            return memoizerific;
          };
        };
        function moveToMostRecentLru(lru, lruPath) {
          var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii;
          for (i = 0; i < lruLen; i++) {
            isMatch = true;
            for (ii = 0; ii < lruPathLen; ii++) {
              if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
                isMatch = false;
                break;
              }
            }
            if (isMatch) {
              break;
            }
          }
          lru.push(lru.splice(i, 1)[0]);
        }
        function removeCachedResult(removedLru) {
          var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
          currentLru.cacheItem.delete(currentLru.arg);
          for (i = removedLruLen - 2; i >= 0; i--) {
            currentLru = removedLru[i];
            tmp = currentLru.cacheItem.get(currentLru.arg);
            if (!tmp || !tmp.size) {
              currentLru.cacheItem.delete(currentLru.arg);
            } else {
              break;
            }
          }
        }
        function isEqual(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        }
      }, { "map-or-similar": 1 }] }, {}, [3])(3);
    });
  }
});

// ../../node_modules/has-symbols/shams.js
var require_shams3 = __commonJS({
  "../../node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../node_modules/has-symbols/index.js
var require_has_symbols2 = __commonJS({
  "../../node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams3();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../../node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "../../node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
    };
  }
});

// ../../node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "../../node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args2 = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(
            this,
            args2.concat(slice.call(arguments))
          );
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        } else {
          return target.apply(
            that,
            args2.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args2.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../../node_modules/function-bind/index.js
var require_function_bind2 = __commonJS({
  "../../node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../../node_modules/has/src/index.js
var require_src2 = __commonJS({
  "../../node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var hasOwnProperty5 = {}.hasOwnProperty;
    var call = Function.prototype.call;
    module.exports = call.bind ? call.bind(hasOwnProperty5) : function(O2, P2) {
      return call.call(hasOwnProperty5, O2, P2);
    };
  }
});

// ../../node_modules/get-intrinsic/index.js
var require_get_intrinsic2 = __commonJS({
  "../../node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols2()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x2) {
      return x2.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name2) {
      var value2;
      if (name2 === "%AsyncFunction%") {
        value2 = getEvalledConstructor("async function () {}");
      } else if (name2 === "%GeneratorFunction%") {
        value2 = getEvalledConstructor("function* () {}");
      } else if (name2 === "%AsyncGeneratorFunction%") {
        value2 = getEvalledConstructor("async function* () {}");
      } else if (name2 === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value2 = fn.prototype;
        }
      } else if (name2 === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value2 = getProto(gen.prototype);
        }
      }
      INTRINSICS[name2] = value2;
      return value2;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind2();
    var hasOwn = require_src2();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result2 = [];
      $replace(string, rePropName2, function(match, number, quote, subString) {
        result2[result2.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
      });
      return result2;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
      var intrinsicName = name2;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value2 = INTRINSICS[intrinsicName];
        if (value2 === needsEval) {
          value2 = doEval(intrinsicName);
        }
        if (typeof value2 === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value: value2
        };
      }
      throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
    };
    module.exports = function GetIntrinsic(name2, allowMissing) {
      if (typeof name2 !== "string" || name2.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name2) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath2(name2);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value2 = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value2 = INTRINSICS[intrinsicRealName];
        } else if (value2 != null) {
          if (!(part in value2)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value2, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value2 = desc.get;
            } else {
              value2 = value2[part];
            }
          } else {
            isOwn = hasOwn(value2, part);
            value2 = value2[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value2;
          }
        }
      }
      return value2;
    };
  }
});

// ../../node_modules/call-bind/index.js
var require_call_bind2 = __commonJS({
  "../../node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind2();
    var GetIntrinsic = require_get_intrinsic2();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../../node_modules/call-bind/callBound.js
var require_callBound2 = __commonJS({
  "../../node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic2();
    var callBind = require_call_bind2();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name2, allowMissing) {
      var intrinsic = GetIntrinsic(name2, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// (disabled):../../node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):../../node_modules/object-inspect/util.inspect"() {
    "use strict";
  }
});

// ../../node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "../../node_modules/object-inspect/index.js"(exports, module) {
    "use strict";
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString2 = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O2) {
      return O2.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
    module.exports = function inspect_(obj, options2, depth, seen) {
      var opts = options2 || {};
      if (has2(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray2(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value2, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has2(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value2, newOpts, depth + 1, seen);
        }
        return inspect_(value2, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name2 = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name2 ? ": " + name2 : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol2(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray2(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value2, key2) {
            mapParts.push(inspect(key2, obj, true) + " => " + inspect(value2, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value2) {
            setParts.push(inspect(value2, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject3 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject3 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject3 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray2(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol2(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key2) {
      return key2 in this;
    };
    function has2(obj, key2) {
      return hasOwn.call(obj, key2);
    }
    function toStr(obj) {
      return objectToString2.call(obj);
    }
    function nameOf(f3) {
      if (f3.name) {
        return f3.name;
      }
      var m2 = $match.call(functionToString.call(f3), /^function\s*([\w$]+)/);
      if (m2) {
        return m2[1];
      }
      return null;
    }
    function indexOf(xs, x2) {
      if (xs.indexOf) {
        return xs.indexOf(x2);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x2) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x2) {
      if (!mapSize || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        mapSize.call(x2);
        try {
          setSize.call(x2);
        } catch (s) {
          return true;
        }
        return x2 instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x2) {
      if (!weakMapHas || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x2, weakMapHas);
        try {
          weakSetHas.call(x2, weakSetHas);
        } catch (s) {
          return true;
        }
        return x2 instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x2) {
      if (!weakRefDeref || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x2);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x2) {
      if (!setSize || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        setSize.call(x2);
        try {
          mapSize.call(x2);
        } catch (m2) {
          return true;
        }
        return x2 instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x2) {
      if (!weakSetHas || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x2, weakSetHas);
        try {
          weakMapHas.call(x2, weakMapHas);
        } catch (s) {
          return true;
        }
        return x2 instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x2) {
      if (!x2 || typeof x2 !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x2 instanceof HTMLElement) {
        return true;
      }
      return typeof x2.nodeName === "string" && typeof x2.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c2) {
      var n = c2.charCodeAt(0);
      var x2 = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x2) {
        return "\\" + x2;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray2(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has2(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key2 in obj) {
        if (!has2(obj, key2)) {
          continue;
        }
        if (isArr && String(Number(key2)) === key2 && key2 < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key2] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key2)) {
          xs.push(inspect(key2, obj) + ": " + inspect(obj[key2], obj));
        } else {
          xs.push(key2 + ": " + inspect(obj[key2], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// ../../node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "../../node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic2();
    var callBound = require_callBound2();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key2) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key2) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key2) {
      var node = listGetNode(objects, key2);
      return node && node.value;
    };
    var listSet = function(objects, key2, value2) {
      var node = listGetNode(objects, key2);
      if (node) {
        node.value = value2;
      } else {
        objects.next = {
          // eslint-disable-line no-param-reassign
          key: key2,
          next: objects.next,
          value: value2
        };
      }
    };
    var listHas = function(objects, key2) {
      return !!listGetNode(objects, key2);
    };
    module.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key2) {
          if (!channel.has(key2)) {
            throw new $TypeError("Side channel does not contain " + inspect(key2));
          }
        },
        get: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key2);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key2);
            }
          } else {
            if ($o) {
              return listGet($o, key2);
            }
          }
        },
        has: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key2);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key2);
            }
          } else {
            if ($o) {
              return listHas($o, key2);
            }
          }
          return false;
        },
        set: function(key2, value2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key2, value2);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key2, value2);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key2, value2);
          }
        }
      };
      return channel;
    };
  }
});

// ../../node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "../../node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value2) {
          return replace.call(value2, percentTwenties, "+");
        },
        RFC3986: function(value2) {
          return String(value2);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// ../../node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has2 = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray2(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source2, options2) {
      var obj = options2 && options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source2.length; ++i) {
        if (typeof source2[i] !== "undefined") {
          obj[i] = source2[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source2, options2) {
      if (!source2) {
        return target;
      }
      if (typeof source2 !== "object") {
        if (isArray2(target)) {
          target.push(source2);
        } else if (target && typeof target === "object") {
          if (options2 && (options2.plainObjects || options2.allowPrototypes) || !has2.call(Object.prototype, source2)) {
            target[source2] = true;
          }
        } else {
          return [target, source2];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source2);
      }
      var mergeTarget = target;
      if (isArray2(target) && !isArray2(source2)) {
        mergeTarget = arrayToObject(target, options2);
      }
      if (isArray2(target) && isArray2(source2)) {
        source2.forEach(function(item, i) {
          if (has2.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options2);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source2).reduce(function(acc, key2) {
        var value2 = source2[key2];
        if (has2.call(acc, key2)) {
          acc[key2] = merge2(acc[key2], value2, options2);
        } else {
          acc[key2] = value2;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source2) {
      return Object.keys(source2).reduce(function(acc, key2) {
        acc[key2] = source2[key2];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c2 = string.charCodeAt(i);
        if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats.RFC1738 && (c2 === 40 || c2 === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c2 < 128) {
          out = out + hexTable[c2];
          continue;
        }
        if (c2 < 2048) {
          out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
          continue;
        }
        if (c2 < 55296 || c2 >= 57344) {
          out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
          continue;
        }
        i += 1;
        c2 = 65536 + ((c2 & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
      }
      return out;
    };
    var compact = function compact2(value2) {
      var queue = [{ obj: { o: value2 }, prop: "o" }];
      var refs2 = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key2 = keys[j];
          var val = obj[key2];
          if (typeof val === "object" && val !== null && refs2.indexOf(val) === -1) {
            queue.push({ obj, prop: key2 });
            refs2.push(val);
          }
        }
      }
      compactQueue(queue);
      return value2;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b2) {
      return [].concat(a, b2);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// ../../node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has2 = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix2) {
        return prefix2 + "[]";
      },
      comma: "comma",
      indices: function indices(prefix2, key2) {
        return prefix2 + "[" + key2 + "]";
      },
      repeat: function repeat(prefix2) {
        return prefix2;
      }
    };
    var isArray2 = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
      return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
    };
    var sentinel = {};
    var stringify2 = function stringify3(object, prefix2, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix2, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
        obj = utils.maybeMap(obj, function(value3) {
          if (value3 instanceof Date) {
            return serializeDate(value3);
          }
          return value3;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix2, defaults.encoder, charset, "key", format) : prefix2;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix2 : encoder(prefix2, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix2) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray2(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray2(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? prefix2 + "[]" : prefix2;
      for (var j = 0; j < objKeys.length; ++j) {
        var key2 = objKeys[j];
        var value2 = typeof key2 === "object" && typeof key2.value !== "undefined" ? key2.value : obj[key2];
        if (skipNulls && value2 === null) {
          continue;
        }
        var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key2) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key2 : "[" + key2 + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify3(
          value2,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          strictNullHandling,
          skipNulls,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has2.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray2(opts.filter)) {
        filter = opts.filter;
      }
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options2 = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options2.filter === "function") {
        filter = options2.filter;
        obj = filter("", obj);
      } else if (isArray2(options2.filter)) {
        filter = options2.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = "indices";
      }
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options2.sort) {
        objKeys.sort(options2.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key2 = objKeys[i];
        if (options2.skipNulls && obj[key2] === null) {
          continue;
        }
        pushToArray(keys, stringify2(
          obj[key2],
          key2,
          generateArrayPrefix,
          commaRoundTrip,
          options2.strictNullHandling,
          options2.skipNulls,
          options2.encode ? options2.encoder : null,
          options2.filter,
          options2.sort,
          options2.allowDots,
          options2.serializeDate,
          options2.format,
          options2.formatter,
          options2.encodeValuesOnly,
          options2.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options2.delimiter);
      var prefix2 = options2.addQueryPrefix === true ? "?" : "";
      if (options2.charsetSentinel) {
        if (options2.charset === "iso-8859-1") {
          prefix2 += "utf8=%26%2310003%3B&";
        } else {
          prefix2 += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix2 + joined : "";
    };
  }
});

// ../../node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has2 = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var defaults = {
      allowDots: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options2) {
      if (val && typeof val === "string" && options2.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options2) {
      var obj = { __proto__: null };
      var cleanStr = options2.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options2.parameterLimit === Infinity ? void 0 : options2.parameterLimit;
      var parts = cleanStr.split(options2.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options2.charset;
      if (options2.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key2, val;
        if (pos === -1) {
          key2 = options2.decoder(part, defaults.decoder, charset, "key");
          val = options2.strictNullHandling ? null : "";
        } else {
          key2 = options2.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options2),
            function(encodedVal) {
              return options2.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options2.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray2(val) ? [val] : val;
        }
        if (has2.call(obj, key2)) {
          obj[key2] = utils.combine(obj[key2], val);
        } else {
          obj[key2] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options2, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options2);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root3 = chain[i];
        if (root3 === "[]" && options2.parseArrays) {
          obj = [].concat(leaf);
        } else {
          obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root3.charAt(0) === "[" && root3.charAt(root3.length - 1) === "]" ? root3.slice(1, -1) : root3;
          var index = parseInt(cleanRoot, 10);
          if (!options2.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root3 !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options2.parseArrays && index <= options2.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (cleanRoot !== "__proto__") {
            obj[cleanRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options2, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key2 = options2.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options2.depth > 0 && brackets.exec(key2);
      var parent = segment ? key2.slice(0, segment.index) : key2;
      var keys = [];
      if (parent) {
        if (!options2.plainObjects && has2.call(Object.prototype, parent)) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options2.depth > 0 && (segment = child.exec(key2)) !== null && i < options2.depth) {
        i += 1;
        if (!options2.plainObjects && has2.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key2.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options2, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(str, opts) {
      var options2 = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options2) : str;
      var obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key2 = keys[i];
        var newObj = parseKeys(key2, tempObj[key2], options2, typeof str === "string");
        obj = utils.merge(obj, newObj, options2);
      }
      if (options2.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// ../../node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify2 = require_stringify();
    var parse3 = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse: parse3,
      stringify: stringify2
    };
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    "use strict";
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal2;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    "use strict";
    var freeGlobal2 = require_freeGlobal();
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root3 = freeGlobal2 || freeSelf2 || Function("return this")();
    module.exports = root3;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    "use strict";
    var root3 = require_root();
    var Symbol3 = root3.Symbol;
    module.exports = Symbol3;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    "use strict";
    var Symbol3 = require_Symbol();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var nativeObjectToString3 = objectProto6.toString;
    var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
    function getRawTag2(value2) {
      var isOwn = hasOwnProperty5.call(value2, symToStringTag3), tag = value2[symToStringTag3];
      try {
        value2[symToStringTag3] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result2 = nativeObjectToString3.call(value2);
      if (unmasked) {
        if (isOwn) {
          value2[symToStringTag3] = tag;
        } else {
          delete value2[symToStringTag3];
        }
      }
      return result2;
    }
    module.exports = getRawTag2;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    "use strict";
    var objectProto6 = Object.prototype;
    var nativeObjectToString3 = objectProto6.toString;
    function objectToString2(value2) {
      return nativeObjectToString3.call(value2);
    }
    module.exports = objectToString2;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    "use strict";
    var Symbol3 = require_Symbol();
    var getRawTag2 = require_getRawTag();
    var objectToString2 = require_objectToString();
    var nullTag2 = "[object Null]";
    var undefinedTag2 = "[object Undefined]";
    var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
    function baseGetTag2(value2) {
      if (value2 == null) {
        return value2 === void 0 ? undefinedTag2 : nullTag2;
      }
      return symToStringTag3 && symToStringTag3 in Object(value2) ? getRawTag2(value2) : objectToString2(value2);
    }
    module.exports = baseGetTag2;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    "use strict";
    function isObject5(value2) {
      var type = typeof value2;
      return value2 != null && (type == "object" || type == "function");
    }
    module.exports = isObject5;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module) {
    "use strict";
    var baseGetTag2 = require_baseGetTag();
    var isObject5 = require_isObject();
    var asyncTag2 = "[object AsyncFunction]";
    var funcTag2 = "[object Function]";
    var genTag2 = "[object GeneratorFunction]";
    var proxyTag2 = "[object Proxy]";
    function isFunction2(value2) {
      if (!isObject5(value2)) {
        return false;
      }
      var tag = baseGetTag2(value2);
      return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
    }
    module.exports = isFunction2;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js"(exports, module) {
    "use strict";
    var root3 = require_root();
    var coreJsData2 = root3["__core-js_shared__"];
    module.exports = coreJsData2;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module) {
    "use strict";
    var coreJsData2 = require_coreJsData();
    var maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func;
    }
    module.exports = isMasked2;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js"(exports, module) {
    "use strict";
    var funcProto3 = Function.prototype;
    var funcToString3 = funcProto3.toString;
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString3.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource2;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
    "use strict";
    var isFunction2 = require_isFunction();
    var isMasked2 = require_isMasked();
    var isObject5 = require_isObject();
    var toSource2 = require_toSource();
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var reIsNative2 = RegExp(
      "^" + funcToString3.call(hasOwnProperty5).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative2(value2) {
      if (!isObject5(value2) || isMasked2(value2)) {
        return false;
      }
      var pattern = isFunction2(value2) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value2));
    }
    module.exports = baseIsNative2;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js"(exports, module) {
    "use strict";
    function getValue2(object, key2) {
      return object == null ? void 0 : object[key2];
    }
    module.exports = getValue2;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module) {
    "use strict";
    var baseIsNative2 = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative2(object, key2) {
      var value2 = getValue2(object, key2);
      return baseIsNative2(value2) ? value2 : void 0;
    }
    module.exports = getNative2;
  }
});

// ../../node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/lodash/_defineProperty.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative2(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// ../../node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../../node_modules/lodash/_baseAssignValue.js"(exports, module) {
    "use strict";
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key2, value2) {
      if (key2 == "__proto__" && defineProperty) {
        defineProperty(object, key2, {
          "configurable": true,
          "enumerable": true,
          "value": value2,
          "writable": true
        });
      } else {
        object[key2] = value2;
      }
    }
    module.exports = baseAssignValue;
  }
});

// ../../node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "../../node_modules/lodash/_createBaseFor.js"(exports, module) {
    "use strict";
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key2 = props[fromRight ? length : ++index];
          if (iteratee(iterable[key2], key2, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// ../../node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "../../node_modules/lodash/_baseFor.js"(exports, module) {
    "use strict";
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module) {
    "use strict";
    function baseTimes(n, iteratee) {
      var index = -1, result2 = Array(n);
      while (++index < n) {
        result2[index] = iteratee(index);
      }
      return result2;
    }
    module.exports = baseTimes;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    "use strict";
    function isObjectLike2(value2) {
      return value2 != null && typeof value2 == "object";
    }
    module.exports = isObjectLike2;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
    "use strict";
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value2) {
      return isObjectLike2(value2) && baseGetTag2(value2) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js"(exports, module) {
    "use strict";
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike2 = require_isObjectLike();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value2) {
      return isObjectLike2(value2) && hasOwnProperty5.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
    };
    module.exports = isArguments;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js"(exports, module) {
    "use strict";
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module) {
    "use strict";
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module) {
    "use strict";
    var root3 = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root3.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module) {
    "use strict";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value2, length) {
      var type = typeof value2;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module) {
    "use strict";
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value2) {
      return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    "use strict";
    var baseGetTag2 = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag2 = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value2) {
      return isObjectLike2(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag2(value2)];
    }
    module.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js"(exports, module) {
    "use strict";
    function baseUnary(func) {
      return function(value2) {
        return func(value2);
      };
    }
    module.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
    "use strict";
    var freeGlobal2 = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js"(exports, module) {
    "use strict";
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    "use strict";
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function arrayLikeKeys(value2, inherited) {
      var isArr = isArray2(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value2.length, String) : [], length = result2.length;
      for (var key2 in value2) {
        if ((inherited || hasOwnProperty5.call(value2, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
        isIndex(key2, length)))) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module) {
    "use strict";
    var objectProto6 = Object.prototype;
    function isPrototype(value2) {
      var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto6;
      return value2 === proto;
    }
    module.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    "use strict";
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
    "use strict";
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module) {
    "use strict";
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result2 = [];
      for (var key2 in Object(object)) {
        if (hasOwnProperty5.call(object, key2) && key2 != "constructor") {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = baseKeys;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module) {
    "use strict";
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value2) {
      return value2 != null && isLength(value2.length) && !isFunction2(value2);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module) {
    "use strict";
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// ../../node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "../../node_modules/lodash/_baseForOwn.js"(exports, module) {
    "use strict";
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
    "use strict";
    function listCacheClear2() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear2;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js"(exports, module) {
    "use strict";
    function eq2(value2, other) {
      return value2 === other || value2 !== value2 && other !== other;
    }
    module.exports = eq2;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
    "use strict";
    var eq2 = require_eq();
    function assocIndexOf2(array, key2) {
      var length = array.length;
      while (length--) {
        if (eq2(array[length][0], key2)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf2;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
    "use strict";
    var assocIndexOf2 = require_assocIndexOf();
    var arrayProto2 = Array.prototype;
    var splice2 = arrayProto2.splice;
    function listCacheDelete2(key2) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice2.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete2;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
    "use strict";
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheGet2(key2) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet2;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
    "use strict";
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheHas2(key2) {
      return assocIndexOf2(this.__data__, key2) > -1;
    }
    module.exports = listCacheHas2;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
    "use strict";
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheSet2(key2, value2) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      if (index < 0) {
        ++this.size;
        data.push([key2, value2]);
      } else {
        data[index][1] = value2;
      }
      return this;
    }
    module.exports = listCacheSet2;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module) {
    "use strict";
    var listCacheClear2 = require_listCacheClear();
    var listCacheDelete2 = require_listCacheDelete();
    var listCacheGet2 = require_listCacheGet();
    var listCacheHas2 = require_listCacheHas();
    var listCacheSet2 = require_listCacheSet();
    function ListCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    module.exports = ListCache2;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js"(exports, module) {
    "use strict";
    var ListCache2 = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache2();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js"(exports, module) {
    "use strict";
    function stackDelete(key2) {
      var data = this.__data__, result2 = data["delete"](key2);
      this.size = data.size;
      return result2;
    }
    module.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js"(exports, module) {
    "use strict";
    function stackGet(key2) {
      return this.__data__.get(key2);
    }
    module.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module) {
    "use strict";
    function stackHas(key2) {
      return this.__data__.has(key2);
    }
    module.exports = stackHas;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Map3 = getNative2(root3, "Map");
    module.exports = Map3;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var nativeCreate2 = getNative2(Object, "create");
    module.exports = nativeCreate2;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module) {
    "use strict";
    var nativeCreate2 = require_nativeCreate();
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
      this.size = 0;
    }
    module.exports = hashClear2;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js"(exports, module) {
    "use strict";
    function hashDelete2(key2) {
      var result2 = this.has(key2) && delete this.__data__[key2];
      this.size -= result2 ? 1 : 0;
      return result2;
    }
    module.exports = hashDelete2;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js"(exports, module) {
    "use strict";
    var nativeCreate2 = require_nativeCreate();
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function hashGet2(key2) {
      var data = this.__data__;
      if (nativeCreate2) {
        var result2 = data[key2];
        return result2 === HASH_UNDEFINED3 ? void 0 : result2;
      }
      return hasOwnProperty5.call(data, key2) ? data[key2] : void 0;
    }
    module.exports = hashGet2;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js"(exports, module) {
    "use strict";
    var nativeCreate2 = require_nativeCreate();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function hashHas2(key2) {
      var data = this.__data__;
      return nativeCreate2 ? data[key2] !== void 0 : hasOwnProperty5.call(data, key2);
    }
    module.exports = hashHas2;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js"(exports, module) {
    "use strict";
    var nativeCreate2 = require_nativeCreate();
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    function hashSet2(key2, value2) {
      var data = this.__data__;
      this.size += this.has(key2) ? 0 : 1;
      data[key2] = nativeCreate2 && value2 === void 0 ? HASH_UNDEFINED3 : value2;
      return this;
    }
    module.exports = hashSet2;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js"(exports, module) {
    "use strict";
    var hashClear2 = require_hashClear();
    var hashDelete2 = require_hashDelete();
    var hashGet2 = require_hashGet();
    var hashHas2 = require_hashHas();
    var hashSet2 = require_hashSet();
    function Hash2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    module.exports = Hash2;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
    "use strict";
    var Hash2 = require_Hash();
    var ListCache2 = require_ListCache();
    var Map3 = require_Map();
    function mapCacheClear2() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map3 || ListCache2)(),
        "string": new Hash2()
      };
    }
    module.exports = mapCacheClear2;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js"(exports, module) {
    "use strict";
    function isKeyable2(value2) {
      var type = typeof value2;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
    }
    module.exports = isKeyable2;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js"(exports, module) {
    "use strict";
    var isKeyable2 = require_isKeyable();
    function getMapData2(map2, key2) {
      var data = map2.__data__;
      return isKeyable2(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData2;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    "use strict";
    var getMapData2 = require_getMapData();
    function mapCacheDelete2(key2) {
      var result2 = getMapData2(this, key2)["delete"](key2);
      this.size -= result2 ? 1 : 0;
      return result2;
    }
    module.exports = mapCacheDelete2;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
    "use strict";
    var getMapData2 = require_getMapData();
    function mapCacheGet2(key2) {
      return getMapData2(this, key2).get(key2);
    }
    module.exports = mapCacheGet2;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
    "use strict";
    var getMapData2 = require_getMapData();
    function mapCacheHas2(key2) {
      return getMapData2(this, key2).has(key2);
    }
    module.exports = mapCacheHas2;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
    "use strict";
    var getMapData2 = require_getMapData();
    function mapCacheSet2(key2, value2) {
      var data = getMapData2(this, key2), size = data.size;
      data.set(key2, value2);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet2;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js"(exports, module) {
    "use strict";
    var mapCacheClear2 = require_mapCacheClear();
    var mapCacheDelete2 = require_mapCacheDelete();
    var mapCacheGet2 = require_mapCacheGet();
    var mapCacheHas2 = require_mapCacheHas();
    var mapCacheSet2 = require_mapCacheSet();
    function MapCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    module.exports = MapCache2;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js"(exports, module) {
    "use strict";
    var ListCache2 = require_ListCache();
    var Map3 = require_Map();
    var MapCache2 = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key2, value2) {
      var data = this.__data__;
      if (data instanceof ListCache2) {
        var pairs = data.__data__;
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key2, value2]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache2(pairs);
      }
      data.set(key2, value2);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js"(exports, module) {
    "use strict";
    var ListCache2 = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache2(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
    "use strict";
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    function setCacheAdd(value2) {
      this.__data__.set(value2, HASH_UNDEFINED3);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
    "use strict";
    function setCacheHas(value2) {
      return this.__data__.has(value2);
    }
    module.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module) {
    "use strict";
    var MapCache2 = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache2();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js"(exports, module) {
    "use strict";
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js"(exports, module) {
    "use strict";
    function cacheHas(cache, key2) {
      return cache.has(key2);
    }
    module.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module) {
    "use strict";
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result2 = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result2 = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result2 = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result2;
    }
    module.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
    "use strict";
    var root3 = require_root();
    var Uint8Array2 = root3.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module) {
    "use strict";
    function mapToArray(map2) {
      var index = -1, result2 = Array(map2.size);
      map2.forEach(function(value2, key2) {
        result2[++index] = [key2, value2];
      });
      return result2;
    }
    module.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module) {
    "use strict";
    function setToArray(set) {
      var index = -1, result2 = Array(set.size);
      set.forEach(function(value2) {
        result2[++index] = value2;
      });
      return result2;
    }
    module.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module) {
    "use strict";
    var Symbol3 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq2 = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq2(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result2;
        case symbolTag2:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js"(exports, module) {
    "use strict";
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    "use strict";
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result2 = keysFunc(object);
      return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
    "use strict";
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
      while (++index < length) {
        var value2 = array[index];
        if (predicate(value2, index, array)) {
          result2[resIndex++] = value2;
        }
      }
      return result2;
    }
    module.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js"(exports, module) {
    "use strict";
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module) {
    "use strict";
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto6 = Object.prototype;
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
    "use strict";
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module) {
    "use strict";
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key2 = objProps[index];
        if (!(isPartial ? key2 in other : hasOwnProperty5.call(other, key2))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result2 = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key2 = objProps[index];
        var objValue = object[key2], othValue = other[key2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result2 = false;
          break;
        }
        skipCtor || (skipCtor = key2 == "constructor");
      }
      if (result2 && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result2 = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result2;
    }
    module.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var root3 = require_root();
    var DataView2 = getNative2(root3, "DataView");
    module.exports = DataView2;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Promise2 = getNative2(root3, "Promise");
    module.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Set2 = getNative2(root3, "Set");
    module.exports = Set2;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module) {
    "use strict";
    var getNative2 = require_getNative();
    var root3 = require_root();
    var WeakMap2 = getNative2(root3, "WeakMap");
    module.exports = WeakMap2;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module) {
    "use strict";
    var DataView2 = require_DataView();
    var Map3 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag2 = require_baseGetTag();
    var toSource2 = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource2(DataView2);
    var mapCtorString = toSource2(Map3);
    var promiseCtorString = toSource2(Promise2);
    var setCtorString = toSource2(Set2);
    var weakMapCtorString = toSource2(WeakMap2);
    var getTag = baseGetTag2;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map3 && getTag(new Map3()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value2) {
        var result2 = baseGetTag2(value2), Ctor = result2 == objectTag ? value2.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result2;
      };
    }
    module.exports = getTag;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    "use strict";
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty5.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty5.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
    "use strict";
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike2 = require_isObjectLike();
    function baseIsEqual(value2, other, bitmask, customizer, stack) {
      if (value2 === other) {
        return true;
      }
      if (value2 == null || other == null || !isObjectLike2(value2) && !isObjectLike2(other)) {
        return value2 !== value2 && other !== other;
      }
      return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
    "use strict";
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source2, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key2 = data[0], objValue = object[key2], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key2 in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result2 = customizer(objValue, srcValue, key2, object, source2, stack);
          }
          if (!(result2 === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// ../../node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../../node_modules/lodash/_isStrictComparable.js"(exports, module) {
    "use strict";
    var isObject5 = require_isObject();
    function isStrictComparable(value2) {
      return value2 === value2 && !isObject5(value2);
    }
    module.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js"(exports, module) {
    "use strict";
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result2 = keys(object), length = result2.length;
      while (length--) {
        var key2 = result2[length], value2 = object[key2];
        result2[length] = [key2, value2, isStrictComparable(value2)];
      }
      return result2;
    }
    module.exports = getMatchData;
  }
});

// ../../node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "../../node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    "use strict";
    function matchesStrictComparable(key2, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// ../../node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "../../node_modules/lodash/_baseMatches.js"(exports, module) {
    "use strict";
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source2) {
      var matchData = getMatchData(source2);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source2 || baseIsMatch(object, source2, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    "use strict";
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var symbolTag2 = "[object Symbol]";
    function isSymbol2(value2) {
      return typeof value2 == "symbol" || isObjectLike2(value2) && baseGetTag2(value2) == symbolTag2;
    }
    module.exports = isSymbol2;
  }
});

// ../../node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/lodash/_isKey.js"(exports, module) {
    "use strict";
    var isArray2 = require_isArray();
    var isSymbol2 = require_isSymbol();
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp2 = /^\w*$/;
    function isKey2(value2, object) {
      if (isArray2(value2)) {
        return false;
      }
      var type = typeof value2;
      if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol2(value2)) {
        return true;
      }
      return reIsPlainProp2.test(value2) || !reIsDeepProp2.test(value2) || object != null && value2 in Object(object);
    }
    module.exports = isKey2;
  }
});

// ../../node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/lodash/memoize.js"(exports, module) {
    "use strict";
    var MapCache2 = require_MapCache();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function memoize3(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      var memoized = function() {
        var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
        if (cache.has(key2)) {
          return cache.get(key2);
        }
        var result2 = func.apply(this, args2);
        memoized.cache = cache.set(key2, result2) || cache;
        return result2;
      };
      memoized.cache = new (memoize3.Cache || MapCache2)();
      return memoized;
    }
    memoize3.Cache = MapCache2;
    module.exports = memoize3;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js"(exports, module) {
    "use strict";
    var memoize3 = require_memoize();
    var MAX_MEMOIZE_SIZE2 = 500;
    function memoizeCapped2(func) {
      var result2 = memoize3(func, function(key2) {
        if (cache.size === MAX_MEMOIZE_SIZE2) {
          cache.clear();
        }
        return key2;
      });
      var cache = result2.cache;
      return result2;
    }
    module.exports = memoizeCapped2;
  }
});

// ../../node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/lodash/_stringToPath.js"(exports, module) {
    "use strict";
    var memoizeCapped2 = require_memoizeCapped();
    var rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = memoizeCapped2(function(string) {
      var result2 = [];
      if (string.charCodeAt(0) === 46) {
        result2.push("");
      }
      string.replace(rePropName2, function(match, number, quote, subString) {
        result2.push(quote ? subString.replace(reEscapeChar2, "$1") : number || match);
      });
      return result2;
    });
    module.exports = stringToPath2;
  }
});

// ../../node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/lodash/_arrayMap.js"(exports, module) {
    "use strict";
    function arrayMap2(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result2 = Array(length);
      while (++index < length) {
        result2[index] = iteratee(array[index], index, array);
      }
      return result2;
    }
    module.exports = arrayMap2;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js"(exports, module) {
    "use strict";
    var Symbol3 = require_Symbol();
    var arrayMap2 = require_arrayMap();
    var isArray2 = require_isArray();
    var isSymbol2 = require_isSymbol();
    var INFINITY3 = 1 / 0;
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolToString2 = symbolProto2 ? symbolProto2.toString : void 0;
    function baseToString2(value2) {
      if (typeof value2 == "string") {
        return value2;
      }
      if (isArray2(value2)) {
        return arrayMap2(value2, baseToString2) + "";
      }
      if (isSymbol2(value2)) {
        return symbolToString2 ? symbolToString2.call(value2) : "";
      }
      var result2 = value2 + "";
      return result2 == "0" && 1 / value2 == -INFINITY3 ? "-0" : result2;
    }
    module.exports = baseToString2;
  }
});

// ../../node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/lodash/toString.js"(exports, module) {
    "use strict";
    var baseToString2 = require_baseToString();
    function toString2(value2) {
      return value2 == null ? "" : baseToString2(value2);
    }
    module.exports = toString2;
  }
});

// ../../node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/lodash/_castPath.js"(exports, module) {
    "use strict";
    var isArray2 = require_isArray();
    var isKey2 = require_isKey();
    var stringToPath2 = require_stringToPath();
    var toString2 = require_toString();
    function castPath2(value2, object) {
      if (isArray2(value2)) {
        return value2;
      }
      return isKey2(value2, object) ? [value2] : stringToPath2(toString2(value2));
    }
    module.exports = castPath2;
  }
});

// ../../node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/lodash/_toKey.js"(exports, module) {
    "use strict";
    var isSymbol2 = require_isSymbol();
    var INFINITY3 = 1 / 0;
    function toKey2(value2) {
      if (typeof value2 == "string" || isSymbol2(value2)) {
        return value2;
      }
      var result2 = value2 + "";
      return result2 == "0" && 1 / value2 == -INFINITY3 ? "-0" : result2;
    }
    module.exports = toKey2;
  }
});

// ../../node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/lodash/_baseGet.js"(exports, module) {
    "use strict";
    var castPath2 = require_castPath();
    var toKey2 = require_toKey();
    function baseGet2(object, path) {
      path = castPath2(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey2(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet2;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js"(exports, module) {
    "use strict";
    var baseGet2 = require_baseGet();
    function get2(object, path, defaultValue) {
      var result2 = object == null ? void 0 : baseGet2(object, path);
      return result2 === void 0 ? defaultValue : result2;
    }
    module.exports = get2;
  }
});

// ../../node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../../node_modules/lodash/_baseHasIn.js"(exports, module) {
    "use strict";
    function baseHasIn(object, key2) {
      return object != null && key2 in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// ../../node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../../node_modules/lodash/_hasPath.js"(exports, module) {
    "use strict";
    var castPath2 = require_castPath();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey2 = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath2(path, object);
      var index = -1, length = path.length, result2 = false;
      while (++index < length) {
        var key2 = toKey2(path[index]);
        if (!(result2 = object != null && hasFunc(object, key2))) {
          break;
        }
        object = object[key2];
      }
      if (result2 || ++index != length) {
        return result2;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key2, length) && (isArray2(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// ../../node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "../../node_modules/lodash/hasIn.js"(exports, module) {
    "use strict";
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// ../../node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "../../node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    "use strict";
    var baseIsEqual = require_baseIsEqual();
    var get2 = require_get();
    var hasIn = require_hasIn();
    var isKey2 = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey2 = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey2(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey2(path), srcValue);
      }
      return function(object) {
        var objValue = get2(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// ../../node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../node_modules/lodash/identity.js"(exports, module) {
    "use strict";
    function identity(value2) {
      return value2;
    }
    module.exports = identity;
  }
});

// ../../node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../../node_modules/lodash/_baseProperty.js"(exports, module) {
    "use strict";
    function baseProperty(key2) {
      return function(object) {
        return object == null ? void 0 : object[key2];
      };
    }
    module.exports = baseProperty;
  }
});

// ../../node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "../../node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    "use strict";
    var baseGet2 = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet2(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// ../../node_modules/lodash/property.js
var require_property = __commonJS({
  "../../node_modules/lodash/property.js"(exports, module) {
    "use strict";
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey2 = require_isKey();
    var toKey2 = require_toKey();
    function property(path) {
      return isKey2(path) ? baseProperty(toKey2(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// ../../node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "../../node_modules/lodash/_baseIteratee.js"(exports, module) {
    "use strict";
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray2 = require_isArray();
    var property = require_property();
    function baseIteratee(value2) {
      if (typeof value2 == "function") {
        return value2;
      }
      if (value2 == null) {
        return identity;
      }
      if (typeof value2 == "object") {
        return isArray2(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
      }
      return property(value2);
    }
    module.exports = baseIteratee;
  }
});

// ../../node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "../../node_modules/lodash/mapValues.js"(exports, module) {
    "use strict";
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result2 = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value2, key2, object2) {
        baseAssignValue(result2, key2, iteratee(value2, key2, object2));
      });
      return result2;
    }
    module.exports = mapValues;
  }
});

// ../../node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "../../node_modules/lodash/_assignValue.js"(exports, module) {
    "use strict";
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function assignValue(object, key2, value2) {
      var objValue = object[key2];
      if (!(hasOwnProperty5.call(object, key2) && eq2(objValue, value2)) || value2 === void 0 && !(key2 in object)) {
        baseAssignValue(object, key2, value2);
      }
    }
    module.exports = assignValue;
  }
});

// ../../node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "../../node_modules/lodash/_baseSet.js"(exports, module) {
    "use strict";
    var assignValue = require_assignValue();
    var castPath2 = require_castPath();
    var isIndex = require_isIndex();
    var isObject5 = require_isObject();
    var toKey2 = require_toKey();
    function baseSet(object, path, value2, customizer) {
      if (!isObject5(object)) {
        return object;
      }
      path = castPath2(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key2 = toKey2(path[index]), newValue = value2;
        if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key2];
          newValue = customizer ? customizer(objValue, key2, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject5(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key2, newValue);
        nested = nested[key2];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// ../../node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "../../node_modules/lodash/_basePickBy.js"(exports, module) {
    "use strict";
    var baseGet2 = require_baseGet();
    var baseSet = require_baseSet();
    var castPath2 = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index = -1, length = paths.length, result2 = {};
      while (++index < length) {
        var path = paths[index], value2 = baseGet2(object, path);
        if (predicate(value2, path)) {
          baseSet(result2, castPath2(path, object), value2);
        }
      }
      return result2;
    }
    module.exports = basePickBy;
  }
});

// ../../node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "../../node_modules/lodash/_basePick.js"(exports, module) {
    "use strict";
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value2, path) {
        return hasIn(object, path);
      });
    }
    module.exports = basePick;
  }
});

// ../../node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "../../node_modules/lodash/_isFlattenable.js"(exports, module) {
    "use strict";
    var Symbol3 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
    function isFlattenable(value2) {
      return isArray2(value2) || isArguments(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// ../../node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "../../node_modules/lodash/_baseFlatten.js"(exports, module) {
    "use strict";
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result2) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result2 || (result2 = []);
      while (++index < length) {
        var value2 = array[index];
        if (depth > 0 && predicate(value2)) {
          if (depth > 1) {
            baseFlatten(value2, depth - 1, predicate, isStrict, result2);
          } else {
            arrayPush(result2, value2);
          }
        } else if (!isStrict) {
          result2[result2.length] = value2;
        }
      }
      return result2;
    }
    module.exports = baseFlatten;
  }
});

// ../../node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "../../node_modules/lodash/flatten.js"(exports, module) {
    "use strict";
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// ../../node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "../../node_modules/lodash/_apply.js"(exports, module) {
    "use strict";
    function apply(func, thisArg, args2) {
      switch (args2.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args2[0]);
        case 2:
          return func.call(thisArg, args2[0], args2[1]);
        case 3:
          return func.call(thisArg, args2[0], args2[1], args2[2]);
      }
      return func.apply(thisArg, args2);
    }
    module.exports = apply;
  }
});

// ../../node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "../../node_modules/lodash/_overRest.js"(exports, module) {
    "use strict";
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args2 = arguments, index = -1, length = nativeMax(args2.length - start2, 0), array = Array(length);
        while (++index < length) {
          array[index] = args2[start2 + index];
        }
        index = -1;
        var otherArgs = Array(start2 + 1);
        while (++index < start2) {
          otherArgs[index] = args2[index];
        }
        otherArgs[start2] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// ../../node_modules/lodash/constant.js
var require_constant = __commonJS({
  "../../node_modules/lodash/constant.js"(exports, module) {
    "use strict";
    function constant(value2) {
      return function() {
        return value2;
      };
    }
    module.exports = constant;
  }
});

// ../../node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "../../node_modules/lodash/_baseSetToString.js"(exports, module) {
    "use strict";
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// ../../node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "../../node_modules/lodash/_shortOut.js"(exports, module) {
    "use strict";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// ../../node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "../../node_modules/lodash/_setToString.js"(exports, module) {
    "use strict";
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// ../../node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "../../node_modules/lodash/_flatRest.js"(exports, module) {
    "use strict";
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// ../../node_modules/lodash/pick.js
var require_pick = __commonJS({
  "../../node_modules/lodash/pick.js"(exports, module) {
    "use strict";
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick2 = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick2;
  }
});

// ../../node_modules/synchronous-promise/index.js
var require_synchronous_promise = __commonJS({
  "../../node_modules/synchronous-promise/index.js"(exports, module) {
    "use strict";
    function makeArrayFrom(obj) {
      return Array.prototype.slice.apply(obj);
    }
    var PENDING = "pending";
    var RESOLVED = "resolved";
    var REJECTED = "rejected";
    function SynchronousPromise4(handler) {
      this.status = PENDING;
      this._continuations = [];
      this._parent = null;
      this._paused = false;
      if (handler) {
        handler.call(
          this,
          this._continueWith.bind(this),
          this._failWith.bind(this)
        );
      }
    }
    function looksLikeAPromise(obj) {
      return obj && typeof obj.then === "function";
    }
    function passThrough(value2) {
      return value2;
    }
    SynchronousPromise4.prototype = {
      then: function(nextFn, catchFn) {
        var next = SynchronousPromise4.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused) {
            this._continuations.push({
              promise: next,
              nextFn,
              catchFn
            });
            return next;
          }
          if (catchFn) {
            try {
              var catchResult = catchFn(this._error);
              if (looksLikeAPromise(catchResult)) {
                this._chainPromiseData(catchResult, next);
                return next;
              } else {
                return SynchronousPromise4.resolve(catchResult)._setParent(this);
              }
            } catch (e) {
              return SynchronousPromise4.reject(e)._setParent(this);
            }
          }
          return SynchronousPromise4.reject(this._error)._setParent(this);
        }
        this._continuations.push({
          promise: next,
          nextFn,
          catchFn
        });
        this._runResolutions();
        return next;
      },
      catch: function(handler) {
        if (this._isResolved()) {
          return SynchronousPromise4.resolve(this._data)._setParent(this);
        }
        var next = SynchronousPromise4.unresolved()._setParent(this);
        this._continuations.push({
          promise: next,
          catchFn: handler
        });
        this._runRejections();
        return next;
      },
      finally: function(callback) {
        var ran = false;
        function runFinally(result2, err) {
          if (!ran) {
            ran = true;
            if (!callback) {
              callback = passThrough;
            }
            var callbackResult = callback(result2);
            if (looksLikeAPromise(callbackResult)) {
              return callbackResult.then(function() {
                if (err) {
                  throw err;
                }
                return result2;
              });
            } else {
              return result2;
            }
          }
        }
        return this.then(function(result2) {
          return runFinally(result2);
        }).catch(function(err) {
          return runFinally(null, err);
        });
      },
      pause: function() {
        this._paused = true;
        return this;
      },
      resume: function() {
        var firstPaused = this._findFirstPaused();
        if (firstPaused) {
          firstPaused._paused = false;
          firstPaused._runResolutions();
          firstPaused._runRejections();
        }
        return this;
      },
      _findAncestry: function() {
        return this._continuations.reduce(function(acc, cur) {
          if (cur.promise) {
            var node = {
              promise: cur.promise,
              children: cur.promise._findAncestry()
            };
            acc.push(node);
          }
          return acc;
        }, []);
      },
      _setParent: function(parent) {
        if (this._parent) {
          throw new Error("parent already set");
        }
        this._parent = parent;
        return this;
      },
      _continueWith: function(data) {
        var firstPending = this._findFirstPending();
        if (firstPending) {
          firstPending._data = data;
          firstPending._setResolved();
        }
      },
      _findFirstPending: function() {
        return this._findFirstAncestor(function(test) {
          return test._isPending && test._isPending();
        });
      },
      _findFirstPaused: function() {
        return this._findFirstAncestor(function(test) {
          return test._paused;
        });
      },
      _findFirstAncestor: function(matching) {
        var test = this;
        var result2;
        while (test) {
          if (matching(test)) {
            result2 = test;
          }
          test = test._parent;
        }
        return result2;
      },
      _failWith: function(error) {
        var firstRejected = this._findFirstPending();
        if (firstRejected) {
          firstRejected._error = error;
          firstRejected._setRejected();
        }
      },
      _takeContinuations: function() {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function() {
        if (this._paused || !this._isRejected()) {
          return;
        }
        var error = this._error, continuations = this._takeContinuations(), self2 = this;
        continuations.forEach(function(cont) {
          if (cont.catchFn) {
            try {
              var catchResult = cont.catchFn(error);
              self2._handleUserFunctionResult(catchResult, cont.promise);
            } catch (e) {
              cont.promise.reject(e);
            }
          } else {
            cont.promise.reject(error);
          }
        });
      },
      _runResolutions: function() {
        if (this._paused || !this._isResolved() || this._isPending()) {
          return;
        }
        var continuations = this._takeContinuations();
        var data = this._data;
        var self2 = this;
        continuations.forEach(function(cont) {
          if (cont.nextFn) {
            try {
              var result2 = cont.nextFn(data);
              self2._handleUserFunctionResult(result2, cont.promise);
            } catch (e) {
              self2._handleResolutionError(e, cont);
            }
          } else if (cont.promise) {
            cont.promise.resolve(data);
          }
        });
        if (looksLikeAPromise(this._data)) {
          return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function(e, continuation) {
        this._setRejected();
        if (continuation.catchFn) {
          try {
            continuation.catchFn(e);
            return;
          } catch (e2) {
            e = e2;
          }
        }
        if (continuation.promise) {
          continuation.promise.reject(e);
        }
      },
      _handleWhenResolvedDataIsPromise: function(data) {
        var self2 = this;
        return data.then(function(result2) {
          self2._data = result2;
          self2._runResolutions();
        }).catch(function(error) {
          self2._error = error;
          self2._setRejected();
          self2._runRejections();
        });
      },
      _handleUserFunctionResult: function(data, nextSynchronousPromise) {
        if (looksLikeAPromise(data)) {
          this._chainPromiseData(data, nextSynchronousPromise);
        } else {
          nextSynchronousPromise.resolve(data);
        }
      },
      _chainPromiseData: function(promiseData, nextSynchronousPromise) {
        promiseData.then(function(newData) {
          nextSynchronousPromise.resolve(newData);
        }).catch(function(newError) {
          nextSynchronousPromise.reject(newError);
        });
      },
      _setResolved: function() {
        this.status = RESOLVED;
        if (!this._paused) {
          this._runResolutions();
        }
      },
      _setRejected: function() {
        this.status = REJECTED;
        if (!this._paused) {
          this._runRejections();
        }
      },
      _isPending: function() {
        return this.status === PENDING;
      },
      _isResolved: function() {
        return this.status === RESOLVED;
      },
      _isRejected: function() {
        return this.status === REJECTED;
      }
    };
    SynchronousPromise4.resolve = function(result2) {
      return new SynchronousPromise4(function(resolve, reject) {
        if (looksLikeAPromise(result2)) {
          result2.then(function(newResult) {
            resolve(newResult);
          }).catch(function(error) {
            reject(error);
          });
        } else {
          resolve(result2);
        }
      });
    };
    SynchronousPromise4.reject = function(result2) {
      return new SynchronousPromise4(function(resolve, reject) {
        reject(result2);
      });
    };
    SynchronousPromise4.unresolved = function() {
      return new SynchronousPromise4(function(resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
      });
    };
    SynchronousPromise4.all = function() {
      var args2 = makeArrayFrom(arguments);
      if (Array.isArray(args2[0])) {
        args2 = args2[0];
      }
      if (!args2.length) {
        return SynchronousPromise4.resolve([]);
      }
      return new SynchronousPromise4(function(resolve, reject) {
        var allData = [], numResolved = 0, doResolve = function() {
          if (numResolved === args2.length) {
            resolve(allData);
          }
        }, rejected = false, doReject = function(err) {
          if (rejected) {
            return;
          }
          rejected = true;
          reject(err);
        };
        args2.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            allData[idx] = thisResult;
            numResolved += 1;
            doResolve();
          }).catch(function(err) {
            doReject(err);
          });
        });
      });
    };
    function createAggregateErrorFrom(errors) {
      if (typeof window !== "undefined" && "AggregateError" in window) {
        return new window.AggregateError(errors);
      }
      return { errors };
    }
    SynchronousPromise4.any = function() {
      var args2 = makeArrayFrom(arguments);
      if (Array.isArray(args2[0])) {
        args2 = args2[0];
      }
      if (!args2.length) {
        return SynchronousPromise4.reject(createAggregateErrorFrom([]));
      }
      return new SynchronousPromise4(function(resolve, reject) {
        var allErrors = [], numRejected = 0, doReject = function() {
          if (numRejected === args2.length) {
            reject(createAggregateErrorFrom(allErrors));
          }
        }, resolved = false, doResolve = function(result2) {
          if (resolved) {
            return;
          }
          resolved = true;
          resolve(result2);
        };
        args2.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            doResolve(thisResult);
          }).catch(function(err) {
            allErrors[idx] = err;
            numRejected += 1;
            doReject();
          });
        });
      });
    };
    SynchronousPromise4.allSettled = function() {
      var args2 = makeArrayFrom(arguments);
      if (Array.isArray(args2[0])) {
        args2 = args2[0];
      }
      if (!args2.length) {
        return SynchronousPromise4.resolve([]);
      }
      return new SynchronousPromise4(function(resolve) {
        var allData = [], numSettled = 0, doSettled = function() {
          numSettled += 1;
          if (numSettled === args2.length) {
            resolve(allData);
          }
        };
        args2.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            allData[idx] = {
              status: "fulfilled",
              value: thisResult
            };
            doSettled();
          }).catch(function(err) {
            allData[idx] = {
              status: "rejected",
              reason: err
            };
            doSettled();
          });
        });
      });
    };
    if (Promise === SynchronousPromise4) {
      throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
    }
    var RealPromise = Promise;
    SynchronousPromise4.installGlobally = function(__awaiter) {
      if (Promise === SynchronousPromise4) {
        return __awaiter;
      }
      var result2 = patchAwaiterIfRequired(__awaiter);
      Promise = SynchronousPromise4;
      return result2;
    };
    SynchronousPromise4.uninstallGlobally = function() {
      if (Promise === SynchronousPromise4) {
        Promise = RealPromise;
      }
    };
    function patchAwaiterIfRequired(__awaiter) {
      if (typeof __awaiter === "undefined" || __awaiter.__patched) {
        return __awaiter;
      }
      var originalAwaiter = __awaiter;
      __awaiter = function() {
        var Promise2 = RealPromise;
        originalAwaiter.apply(this, makeArrayFrom(arguments));
      };
      __awaiter.__patched = true;
      return __awaiter;
    }
    module.exports = {
      SynchronousPromise: SynchronousPromise4
    };
  }
});

// ../../node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "../../node_modules/lodash/_getPrototype.js"(exports, module) {
    "use strict";
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// ../../node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "../../node_modules/lodash/isPlainObject.js"(exports, module) {
    "use strict";
    var baseGetTag2 = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike2 = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var objectCtorString = funcToString3.call(Object);
    function isPlainObject3(value2) {
      if (!isObjectLike2(value2) || baseGetTag2(value2) != objectTag) {
        return false;
      }
      var proto = getPrototype(value2);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty5.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject3;
  }
});

// ../../node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "../../node_modules/util-deprecate/browser.js"(exports, module) {
    "use strict";
    module.exports = deprecate3;
    function deprecate3(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name2) {
      try {
        if (!global.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = global.localStorage[name2];
      if (null == val)
        return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// ../../node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "../../node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    "use strict";
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result2 = [];
      while (object) {
        arrayPush(result2, getSymbols(object));
        object = getPrototype(object);
      }
      return result2;
    };
    module.exports = getSymbolsIn;
  }
});

// ../../node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "../../node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    "use strict";
    function nativeKeysIn(object) {
      var result2 = [];
      if (object != null) {
        for (var key2 in Object(object)) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = nativeKeysIn;
  }
});

// ../../node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "../../node_modules/lodash/_baseKeysIn.js"(exports, module) {
    "use strict";
    var isObject5 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject5(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result2 = [];
      for (var key2 in object) {
        if (!(key2 == "constructor" && (isProto || !hasOwnProperty5.call(object, key2)))) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = baseKeysIn;
  }
});

// ../../node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "../../node_modules/lodash/keysIn.js"(exports, module) {
    "use strict";
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// ../../node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "../../node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    "use strict";
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// ../../node_modules/lodash/pickBy.js
var require_pickBy = __commonJS({
  "../../node_modules/lodash/pickBy.js"(exports, module) {
    "use strict";
    var arrayMap2 = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var basePickBy = require_basePickBy();
    var getAllKeysIn = require_getAllKeysIn();
    function pickBy2(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap2(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = baseIteratee(predicate);
      return basePickBy(object, props, function(value2, path) {
        return predicate(value2, path[0]);
      });
    }
    module.exports = pickBy2;
  }
});

// ../../node_modules/browser-dtector/browser-dtector.umd.min.js
var require_browser_dtector_umd_min = __commonJS({
  "../../node_modules/browser-dtector/browser-dtector.umd.min.js"(exports, module) {
    "use strict";
    !function(e, o) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BrowserDetector = o();
    }(exports, function() {
      "use strict";
      function e(e2, o2) {
        for (var r2 = 0; r2 < o2.length; r2++) {
          var n2 = o2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, (i2 = n2.key, t2 = void 0, "symbol" == typeof (t2 = function(e3, o3) {
            if ("object" != typeof e3 || null === e3)
              return e3;
            var r3 = e3[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var n3 = r3.call(e3, o3 || "default");
              if ("object" != typeof n3)
                return n3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === o3 ? String : Number)(e3);
          }(i2, "string")) ? t2 : String(t2)), n2);
        }
        var i2, t2;
      }
      var o = { chrome: "Google Chrome", brave: "Brave", crios: "Google Chrome", edge: "Microsoft Edge", edg: "Microsoft Edge", edgios: "Microsoft Edge", fennec: "Mozilla Firefox", jsdom: "JsDOM", mozilla: "Mozilla Firefox", fxios: "Mozilla Firefox", msie: "Microsoft Internet Explorer", opera: "Opera", opios: "Opera", opr: "Opera", opt: "Opera", rv: "Microsoft Internet Explorer", safari: "Safari", samsungbrowser: "Samsung Browser", electron: "Electron" }, r = { android: "Android", androidTablet: "Android Tablet", cros: "Chrome OS", fennec: "Android Tablet", ipad: "IPad", iphone: "IPhone", jsdom: "JsDOM", linux: "Linux", mac: "Macintosh", tablet: "Android Tablet", win: "Windows", "windows phone": "Windows Phone", xbox: "Microsoft Xbox" }, n = function(e2) {
        var o2 = new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, "})?")), r2 = Number(e2).toString().match(o2);
        return r2 ? r2[0] : null;
      }, i = function() {
        return "undefined" != typeof window ? window.navigator : null;
      }, t = function() {
        function t2(e2) {
          var o2;
          !function(e3, o3) {
            if (!(e3 instanceof o3))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), this.userAgent = e2 || (null === (o2 = i()) || void 0 === o2 ? void 0 : o2.userAgent) || null;
        }
        var a, l, s;
        return a = t2, l = [{ key: "parseUserAgent", value: function(e2) {
          var t3, a2, l2, s2 = {}, c2 = e2 || this.userAgent || "", d = c2.toLowerCase().replace(/\s\s+/g, " "), u2 = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(opt)[/]([\w.]+)/.exec(d) || /(fxios)[/]([\w.]+)/.exec(d) || /(edgios)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [], f3 = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && false === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [], p = u2[5] || u2[3] || u2[1] || null, w2 = f3[0] || null, x2 = u2[4] || u2[2] || null, b2 = i();
          "chrome" === p && "function" == typeof (null == b2 || null === (t3 = b2.brave) || void 0 === t3 ? void 0 : t3.isBrave) && (p = "brave"), p && (s2[p] = true), w2 && (s2[w2] = true);
          var v2 = Boolean(s2.tablet || s2.android || s2.androidTablet), m2 = Boolean(s2.ipad || s2.tablet || s2.androidTablet), g = Boolean(s2.android || s2.androidTablet || s2.tablet || s2.ipad || s2.ipod || s2.iphone || s2["windows phone"]), h2 = Boolean(s2.cros || s2.mac || s2.linux || s2.win), y = Boolean(s2.brave || s2.chrome || s2.crios || s2.opr || s2.safari || s2.edg || s2.electron), A = Boolean(s2.msie || s2.rv);
          return { name: null !== (a2 = o[p]) && void 0 !== a2 ? a2 : null, platform: null !== (l2 = r[w2]) && void 0 !== l2 ? l2 : null, userAgent: c2, version: x2, shortVersion: x2 ? n(parseFloat(x2), 2) : null, isAndroid: v2, isTablet: m2, isMobile: g, isDesktop: h2, isWebkit: y, isIE: A };
        } }, { key: "getBrowserInfo", value: function() {
          var e2 = this.parseUserAgent();
          return { name: e2.name, platform: e2.platform, userAgent: e2.userAgent, version: e2.version, shortVersion: e2.shortVersion };
        } }], s = [{ key: "VERSION", get: function() {
          return "3.4.0";
        } }], l && e(a.prototype, l), s && e(a, s), Object.defineProperty(a, "prototype", { writable: false }), t2;
      }();
      return t;
    });
  }
});

// ../core-events/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  CHANNEL_CREATED: () => CHANNEL_CREATED,
  CONFIG_ERROR: () => CONFIG_ERROR,
  CURRENT_STORY_WAS_SET: () => CURRENT_STORY_WAS_SET,
  DOCS_PREPARED: () => DOCS_PREPARED,
  DOCS_RENDERED: () => DOCS_RENDERED,
  FORCE_REMOUNT: () => FORCE_REMOUNT,
  FORCE_RE_RENDER: () => FORCE_RE_RENDER,
  GLOBALS_UPDATED: () => GLOBALS_UPDATED,
  IGNORED_EXCEPTION: () => IGNORED_EXCEPTION,
  NAVIGATE_URL: () => NAVIGATE_URL,
  PLAY_FUNCTION_THREW_EXCEPTION: () => PLAY_FUNCTION_THREW_EXCEPTION,
  PRELOAD_ENTRIES: () => PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS: () => PREVIEW_BUILDER_PROGRESS,
  PREVIEW_KEYDOWN: () => PREVIEW_KEYDOWN,
  REGISTER_SUBSCRIPTION: () => REGISTER_SUBSCRIPTION,
  REQUEST_WHATS_NEW_DATA: () => REQUEST_WHATS_NEW_DATA,
  RESET_STORY_ARGS: () => RESET_STORY_ARGS,
  RESULT_WHATS_NEW_DATA: () => RESULT_WHATS_NEW_DATA,
  SELECT_STORY: () => SELECT_STORY,
  SET_CONFIG: () => SET_CONFIG,
  SET_CURRENT_STORY: () => SET_CURRENT_STORY,
  SET_GLOBALS: () => SET_GLOBALS,
  SET_INDEX: () => SET_INDEX,
  SET_STORIES: () => SET_STORIES,
  SET_WHATS_NEW_CACHE: () => SET_WHATS_NEW_CACHE,
  SHARED_STATE_CHANGED: () => SHARED_STATE_CHANGED,
  SHARED_STATE_SET: () => SHARED_STATE_SET,
  STORIES_COLLAPSE_ALL: () => STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL: () => STORIES_EXPAND_ALL,
  STORY_ARGS_UPDATED: () => STORY_ARGS_UPDATED,
  STORY_CHANGED: () => STORY_CHANGED,
  STORY_ERRORED: () => STORY_ERRORED,
  STORY_INDEX_INVALIDATED: () => STORY_INDEX_INVALIDATED,
  STORY_MISSING: () => STORY_MISSING,
  STORY_PREPARED: () => STORY_PREPARED,
  STORY_RENDERED: () => STORY_RENDERED,
  STORY_RENDER_PHASE_CHANGED: () => STORY_RENDER_PHASE_CHANGED,
  STORY_SPECIFIED: () => STORY_SPECIFIED,
  STORY_THREW_EXCEPTION: () => STORY_THREW_EXCEPTION,
  STORY_UNCHANGED: () => STORY_UNCHANGED,
  TELEMETRY_ERROR: () => TELEMETRY_ERROR,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: () => TOGGLE_WHATS_NEW_NOTIFICATIONS,
  UPDATE_GLOBALS: () => UPDATE_GLOBALS,
  UPDATE_QUERY_PARAMS: () => UPDATE_QUERY_PARAMS,
  UPDATE_STORY_ARGS: () => UPDATE_STORY_ARGS,
  default: () => src_default
});
var events = /* @__PURE__ */ ((events2) => {
  events2["CHANNEL_CREATED"] = "channelCreated";
  events2["CONFIG_ERROR"] = "configError";
  events2["STORY_INDEX_INVALIDATED"] = "storyIndexInvalidated";
  events2["STORY_SPECIFIED"] = "storySpecified";
  events2["SET_CONFIG"] = "setConfig";
  events2["SET_STORIES"] = "setStories";
  events2["SET_INDEX"] = "setIndex";
  events2["SET_CURRENT_STORY"] = "setCurrentStory";
  events2["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
  events2["FORCE_RE_RENDER"] = "forceReRender";
  events2["FORCE_REMOUNT"] = "forceRemount";
  events2["PRELOAD_ENTRIES"] = "preloadStories";
  events2["STORY_PREPARED"] = "storyPrepared";
  events2["DOCS_PREPARED"] = "docsPrepared";
  events2["STORY_CHANGED"] = "storyChanged";
  events2["STORY_UNCHANGED"] = "storyUnchanged";
  events2["STORY_RENDERED"] = "storyRendered";
  events2["STORY_MISSING"] = "storyMissing";
  events2["STORY_ERRORED"] = "storyErrored";
  events2["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events2["STORY_RENDER_PHASE_CHANGED"] = "storyRenderPhaseChanged";
  events2["PLAY_FUNCTION_THREW_EXCEPTION"] = "playFunctionThrewException";
  events2["UPDATE_STORY_ARGS"] = "updateStoryArgs";
  events2["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
  events2["RESET_STORY_ARGS"] = "resetStoryArgs";
  events2["SET_GLOBALS"] = "setGlobals";
  events2["UPDATE_GLOBALS"] = "updateGlobals";
  events2["GLOBALS_UPDATED"] = "globalsUpdated";
  events2["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events2["PREVIEW_KEYDOWN"] = "previewKeydown";
  events2["PREVIEW_BUILDER_PROGRESS"] = "preview_builder_progress";
  events2["SELECT_STORY"] = "selectStory";
  events2["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
  events2["STORIES_EXPAND_ALL"] = "storiesExpandAll";
  events2["DOCS_RENDERED"] = "docsRendered";
  events2["SHARED_STATE_CHANGED"] = "sharedStateChanged";
  events2["SHARED_STATE_SET"] = "sharedStateSet";
  events2["NAVIGATE_URL"] = "navigateUrl";
  events2["UPDATE_QUERY_PARAMS"] = "updateQueryParams";
  events2["REQUEST_WHATS_NEW_DATA"] = "requestWhatsNewData";
  events2["RESULT_WHATS_NEW_DATA"] = "resultWhatsNewData";
  events2["SET_WHATS_NEW_CACHE"] = "setWhatsNewCache";
  events2["TOGGLE_WHATS_NEW_NOTIFICATIONS"] = "toggleWhatsNewNotifications";
  events2["TELEMETRY_ERROR"] = "telemetryError";
  return events2;
})(events || {});
var src_default = events;
var {
  CHANNEL_CREATED,
  CONFIG_ERROR,
  CURRENT_STORY_WAS_SET,
  DOCS_PREPARED,
  DOCS_RENDERED,
  FORCE_RE_RENDER,
  FORCE_REMOUNT,
  GLOBALS_UPDATED,
  NAVIGATE_URL,
  PLAY_FUNCTION_THREW_EXCEPTION,
  PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS,
  PREVIEW_KEYDOWN,
  REGISTER_SUBSCRIPTION,
  RESET_STORY_ARGS,
  SELECT_STORY,
  SET_CONFIG,
  SET_CURRENT_STORY,
  SET_GLOBALS,
  SET_INDEX,
  SET_STORIES,
  SHARED_STATE_CHANGED,
  SHARED_STATE_SET,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  STORY_ARGS_UPDATED,
  STORY_CHANGED,
  STORY_ERRORED,
  STORY_INDEX_INVALIDATED,
  STORY_MISSING,
  STORY_PREPARED,
  STORY_RENDER_PHASE_CHANGED,
  STORY_RENDERED,
  STORY_SPECIFIED,
  STORY_THREW_EXCEPTION,
  STORY_UNCHANGED,
  UPDATE_GLOBALS,
  UPDATE_QUERY_PARAMS,
  UPDATE_STORY_ARGS,
  REQUEST_WHATS_NEW_DATA,
  RESULT_WHATS_NEW_DATA,
  SET_WHATS_NEW_CACHE,
  TOGGLE_WHATS_NEW_NOTIFICATIONS,
  TELEMETRY_ERROR
} = events;
var IGNORED_EXCEPTION = new Error("ignoredException");

// ../../node_modules/@storybook/global/dist/index.mjs
var dist_exports2 = {};
__export(dist_exports2, {
  global: () => scope
});
var scope = (() => {
  let win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof globalThis !== "undefined") {
    win = globalThis;
  } else if (typeof global !== "undefined") {
    win = global;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  return win;
})();

// src/globals/globals.ts
var globalsNameReferenceMap = {
  "@storybook/addons": "__STORYBOOK_MODULE_ADDONS__",
  "@storybook/global": "__STORYBOOK_MODULE_GLOBAL__",
  "@storybook/channel-postmessage": "__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__",
  // @deprecated: remove in 8.0
  "@storybook/channel-websocket": "__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__",
  // @deprecated: remove in 8.0
  "@storybook/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/client-api": "__STORYBOOK_MODULE_CLIENT_API__",
  "@storybook/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/core-client": "__STORYBOOK_MODULE_CORE_CLIENT__",
  "@storybook/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/preview-web": "__STORYBOOK_MODULE_PREVIEW_WEB__",
  "@storybook/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/store": "__STORYBOOK_MODULE_STORE__",
  "@storybook/types": "__STORYBOOK_MODULE_TYPES__"
};
var globalPackages = Object.keys(globalsNameReferenceMap);

// ../channels/dist/index.mjs
var dist_exports4 = {};
__export(dist_exports4, {
  Channel: () => Channel,
  PostMessageTransport: () => PostMessageTransport,
  WebsocketTransport: () => WebsocketTransport,
  createBrowserChannel: () => createBrowserChannel,
  createPostMessageChannel: () => createChannel,
  createWebSocketChannel: () => createChannel2,
  default: () => src_default2
});

// ../channels/dist/chunk-552RMVZ6.mjs
var isMulti = (args2) => {
  return args2.transports !== void 0;
};
var generateRandomId = () => {
  return Math.random().toString(16).slice(2);
};
var Channel = class {
  constructor(input = {}) {
    this.sender = generateRandomId();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = input.async || false;
    if (isMulti(input)) {
      this.transports = input.transports || [];
      this.transports.forEach((t) => {
        t.setHandler((event) => this.handleEvent(event));
      });
    } else {
      this.transports = input.transport ? [input.transport] : [];
    }
    this.transports.forEach((t) => {
      t.setHandler((event) => this.handleEvent(event));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(eventName, listener) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(listener);
  }
  emit(eventName, ...args2) {
    const event = { type: eventName, args: args2, from: this.sender };
    let options2 = {};
    if (args2.length >= 1 && args2[0] && args2[0].options) {
      options2 = args2[0].options;
    }
    const handler = () => {
      this.transports.forEach((t) => {
        t.send(event, options2);
      });
      this.handleEvent(event);
    };
    if (this.isAsync) {
      setImmediate(handler);
    } else {
      handler();
    }
  }
  last(eventName) {
    return this.data[eventName];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(eventName) {
    const listeners = this.listeners(eventName);
    return listeners ? listeners.length : 0;
  }
  listeners(eventName) {
    const listeners = this.events[eventName];
    return listeners || void 0;
  }
  once(eventName, listener) {
    const onceListener = this.onceListener(eventName, listener);
    this.addListener(eventName, onceListener);
  }
  removeAllListeners(eventName) {
    if (!eventName) {
      this.events = {};
    } else if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
  removeListener(eventName, listener) {
    const listeners = this.listeners(eventName);
    if (listeners) {
      this.events[eventName] = listeners.filter((l) => l !== listener);
    }
  }
  on(eventName, listener) {
    this.addListener(eventName, listener);
  }
  off(eventName, listener) {
    this.removeListener(eventName, listener);
  }
  handleEvent(event) {
    const listeners = this.listeners(event.type);
    if (listeners && listeners.length) {
      listeners.forEach((fn) => {
        fn.apply(event, event.args);
      });
    }
    this.data[event.type] = event.args;
  }
  onceListener(eventName, listener) {
    const onceListener = (...args2) => {
      this.removeListener(eventName, onceListener);
      return listener(...args2);
    };
    return onceListener;
  }
};

// ../client-logger/dist/index.mjs
var dist_exports3 = {};
__export(dist_exports3, {
  deprecate: () => deprecate,
  logger: () => logger,
  once: () => once,
  pretty: () => pretty
});
var { LOGLEVEL } = scope;
var levels = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
};
var currentLogLevelString = LOGLEVEL;
var currentLogLevelNumber = levels[currentLogLevelString] || levels.info;
var logger = {
  trace: (message, ...rest) => {
    if (currentLogLevelNumber <= levels.trace) {
      console.trace(message, ...rest);
    }
  },
  debug: (message, ...rest) => {
    if (currentLogLevelNumber <= levels.debug) {
      console.debug(message, ...rest);
    }
  },
  info: (message, ...rest) => {
    if (currentLogLevelNumber <= levels.info) {
      console.info(message, ...rest);
    }
  },
  warn: (message, ...rest) => {
    if (currentLogLevelNumber <= levels.warn) {
      console.warn(message, ...rest);
    }
  },
  error: (message, ...rest) => {
    if (currentLogLevelNumber <= levels.error) {
      console.error(message, ...rest);
    }
  },
  log: (message, ...rest) => {
    if (currentLogLevelNumber < levels.silent) {
      console.log(message, ...rest);
    }
  }
};
var logged = /* @__PURE__ */ new Set();
var once = (type) => (message, ...rest) => {
  if (logged.has(message))
    return void 0;
  logged.add(message);
  return logger[type](message, ...rest);
};
once.clear = () => logged.clear();
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var deprecate = once("warn");
var pretty = (type) => (...args2) => {
  const argArray = [];
  if (args2.length) {
    const startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
    const endTagRe = /<\/span>/gi;
    let reResultArray;
    argArray.push(args2[0].replace(startTagRe, "%c").replace(endTagRe, "%c"));
    while (reResultArray = startTagRe.exec(args2[0])) {
      argArray.push(reResultArray[2]);
      argArray.push("");
    }
    for (let j = 1; j < args2.length; j++) {
      argArray.push(args2[j]);
    }
  }
  logger[type].apply(logger, argArray);
};
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");

// ../../node_modules/telejson/dist/chunk-465TF3XA.mjs
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key2) && key2 !== except)
        __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var eventProperties = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
];
var customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  const rebuildEvent = eventProperties.filter((value2) => event[value2] !== void 0).reduce((acc, value2) => {
    return { ...acc, [value2]: event[value2] };
  }, {});
  if (event instanceof CustomEvent) {
    customEventSpecificProperties.filter((value2) => event[value2] !== void 0).forEach((value2) => {
      rebuildEvent[value2] = event[value2];
    });
  }
  return rebuildEvent;
}

// ../../node_modules/telejson/dist/index.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1);
var require_shams = __commonJS2({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});
var require_has_symbols = __commonJS2({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});
var require_implementation = __commonJS2({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args2 = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(
            this,
            args2.concat(slice.call(arguments))
          );
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        } else {
          return target.apply(
            that,
            args2.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args2.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});
var require_function_bind = __commonJS2({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});
var require_src = __commonJS2({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});
var require_get_intrinsic = __commonJS2({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x2) {
      return x2.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name2) {
      var value2;
      if (name2 === "%AsyncFunction%") {
        value2 = getEvalledConstructor("async function () {}");
      } else if (name2 === "%GeneratorFunction%") {
        value2 = getEvalledConstructor("function* () {}");
      } else if (name2 === "%AsyncGeneratorFunction%") {
        value2 = getEvalledConstructor("async function* () {}");
      } else if (name2 === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value2 = fn.prototype;
        }
      } else if (name2 === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value2 = getProto(gen.prototype);
        }
      }
      INTRINSICS[name2] = value2;
      return value2;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result2 = [];
      $replace(string, rePropName2, function(match, number, quote, subString) {
        result2[result2.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
      });
      return result2;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
      var intrinsicName = name2;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value2 = INTRINSICS[intrinsicName];
        if (value2 === needsEval) {
          value2 = doEval(intrinsicName);
        }
        if (typeof value2 === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value: value2
        };
      }
      throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
    };
    module.exports = function GetIntrinsic(name2, allowMissing) {
      if (typeof name2 !== "string" || name2.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name2) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath2(name2);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value2 = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value2 = INTRINSICS[intrinsicRealName];
        } else if (value2 != null) {
          if (!(part in value2)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value2, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value2 = desc.get;
            } else {
              value2 = value2[part];
            }
          } else {
            isOwn = hasOwn(value2, part);
            value2 = value2[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value2;
          }
        }
      }
      return value2;
    };
  }
});
var require_call_bind = __commonJS2({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});
var require_callBound = __commonJS2({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name2, allowMissing) {
      var intrinsic = GetIntrinsic(name2, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});
var require_shams2 = __commonJS2({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});
var require_is_regex = __commonJS2({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has2;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has2 = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value2) {
      if (!value2 || typeof value2 !== "object") {
        return false;
      }
      var descriptor = gOPD(value2, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has2(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value2, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value2) {
      if (!value2 || typeof value2 !== "object" && typeof value2 !== "function") {
        return false;
      }
      return $toString(value2) === regexClass;
    };
  }
});
var require_is_function = __commonJS2({
  "node_modules/is-function/index.js"(exports, module) {
    module.exports = isFunction3;
    var toString2 = Object.prototype.toString;
    function isFunction3(fn) {
      if (!fn) {
        return false;
      }
      var string = toString2.call(fn);
      return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
    }
  }
});
var require_is_symbol = __commonJS2({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value2) {
        if (typeof value2.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value2));
      };
      module.exports = function isSymbol3(value2) {
        if (typeof value2 === "symbol") {
          return true;
        }
        if (toStr.call(value2) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value2);
        } catch (e) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol3(value2) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});
var import_is_regex = __toESM2(require_is_regex());
var import_is_function = __toESM2(require_is_function());
var import_is_symbol = __toESM2(require_is_symbol());
function isObject(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root2;
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
  try {
    value2[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result2 = nativeObjectToString.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag] = tag;
    } else {
      delete value2[symToStringTag];
    }
  }
  return result2;
}
var getRawTag_default = getRawTag;
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value2) {
  return nativeObjectToString2.call(value2);
}
var objectToString_default = objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value2) ? getRawTag_default(value2) : objectToString_default(value2);
}
var baseGetTag_default = baseGetTag;
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var isObjectLike_default = isObjectLike;
var symbolTag = "[object Symbol]";
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike_default(value2) && baseGetTag_default(value2) == symbolTag;
}
var isSymbol_default = isSymbol;
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result2 = Array(length);
  while (++index < length) {
    result2[index] = iteratee(array[index], index, array);
  }
  return result2;
}
var arrayMap_default = arrayMap;
var isArray = Array.isArray;
var isArray_default = isArray;
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray_default(value2)) {
    return arrayMap_default(value2, baseToString) + "";
  }
  if (isSymbol_default(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
}
var baseToString_default = baseToString;
function isObject2(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject_default(value2)) {
    return false;
  }
  var tag = baseGetTag_default(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value2) {
  if (!isObject_default(value2) || isMasked_default(value2)) {
    return false;
  }
  var pattern = isFunction_default(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value2));
}
var baseIsNative_default = baseIsNative;
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
var getValue_default = getValue;
function getNative(object, key2) {
  var value2 = getValue_default(object, key2);
  return baseIsNative_default(value2) ? value2 : void 0;
}
var getNative_default = getNative;
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_default = eq;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value2, object) {
  if (isArray_default(value2)) {
    return false;
  }
  var type = typeof value2;
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol_default(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
}
var isKey_default = isKey;
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var hashDelete_default = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key2];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty3.call(data, key2) ? data[key2] : void 0;
}
var hashGet_default = hashGet;
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate_default ? data[key2] !== void 0 : hasOwnProperty4.call(data, key2);
}
var hashHas_default = hashHas;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key2, value2) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate_default && value2 === void 0 ? HASH_UNDEFINED2 : value2;
  return this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key2, value2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  if (index < 0) {
    ++this.size;
    data.push([key2, value2]);
  } else {
    data[index][1] = value2;
  }
  return this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map2, key2) {
  var data = map2.__data__;
  return isKeyable_default(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key2) {
  var result2 = getMapData_default(this, key2)["delete"](key2);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key2) {
  return getMapData_default(this, key2).get(key2);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key2) {
  return getMapData_default(this, key2).has(key2);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key2, value2) {
  var data = getMapData_default(this, key2), size = data.size;
  data.set(key2, value2);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result2 = func.apply(this, args2);
    memoized.cache = cache.set(key2, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result2;
});
var stringToPath_default = stringToPath;
function toString(value2) {
  return value2 == null ? "" : baseToString_default(value2);
}
var toString_default = toString;
function castPath(value2, object) {
  if (isArray_default(value2)) {
    return value2;
  }
  return isKey_default(value2, object) ? [value2] : stringToPath_default(toString_default(value2));
}
var castPath_default = castPath;
var INFINITY2 = 1 / 0;
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol_default(value2)) {
    return value2;
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY2 ? "-0" : result2;
}
var toKey_default = toKey;
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;
function get(object, path, defaultValue) {
  var result2 = object == null ? void 0 : baseGet_default(object, path);
  return result2 === void 0 ? defaultValue : result2;
}
var get_default = get;
var isObject3 = isObject;
var removeCodeComments = (code) => {
  let inQuoteChar = null;
  let inBlockComment = false;
  let inLineComment = false;
  let inRegexLiteral = false;
  let newCode = "";
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) {
    for (let i = 0; i < code.length; i += 1) {
      if (!inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral) {
        if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
          inQuoteChar = code[i];
        } else if (code[i] === "/" && code[i + 1] === "*") {
          inBlockComment = true;
        } else if (code[i] === "/" && code[i + 1] === "/") {
          inLineComment = true;
        } else if (code[i] === "/" && code[i + 1] !== "/") {
          inRegexLiteral = true;
        }
      } else {
        if (inQuoteChar && (code[i] === inQuoteChar && code[i - 1] !== "\\" || code[i] === "\n" && inQuoteChar !== "`")) {
          inQuoteChar = null;
        }
        if (inRegexLiteral && (code[i] === "/" && code[i - 1] !== "\\" || code[i] === "\n")) {
          inRegexLiteral = false;
        }
        if (inBlockComment && code[i - 1] === "/" && code[i - 2] === "*") {
          inBlockComment = false;
        }
        if (inLineComment && code[i] === "\n") {
          inLineComment = false;
        }
      }
      if (!inBlockComment && !inLineComment) {
        newCode += code[i];
      }
    }
  } else {
    newCode = code;
  }
  return newCode;
};
var cleanCode = (0, import_memoizerific.default)(1e4)(
  (code) => removeCodeComments(code).replace(/\n\s*/g, "").trim()
);
var convertShorthandMethods = function convertShorthandMethods2(key2, stringified) {
  const fnHead = stringified.slice(0, stringified.indexOf("{"));
  const fnBody = stringified.slice(stringified.indexOf("{"));
  if (fnHead.includes("=>")) {
    return stringified;
  }
  if (fnHead.includes("function")) {
    return stringified;
  }
  let modifiedHead = fnHead;
  modifiedHead = modifiedHead.replace(key2, "function");
  return modifiedHead + fnBody;
};
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
var isJSON = (input) => input.match(/^[\[\{\"\}].*[\]\}\"]$/);
function convertUnconventionalData(data) {
  if (!isObject3(data)) {
    return data;
  }
  let result2 = data;
  let wasMutated = false;
  if (typeof Event !== "undefined" && data instanceof Event) {
    result2 = extractEventHiddenProperties(result2);
    wasMutated = true;
  }
  result2 = Object.keys(result2).reduce((acc, key2) => {
    try {
      if (result2[key2]) {
        result2[key2].toJSON;
      }
      acc[key2] = result2[key2];
    } catch (err) {
      wasMutated = true;
    }
    return acc;
  }, {});
  return wasMutated ? result2 : data;
}
var replacer = function replacer2(options2) {
  let objects;
  let map2;
  let stack;
  let keys;
  return function replace(key2, value2) {
    try {
      if (key2 === "") {
        keys = [];
        objects = /* @__PURE__ */ new Map([[value2, "[]"]]);
        map2 = /* @__PURE__ */ new Map();
        stack = [];
        return value2;
      }
      const origin = map2.get(this) || this;
      while (stack.length && origin !== stack[0]) {
        stack.shift();
        keys.pop();
      }
      if (typeof value2 === "boolean") {
        return value2;
      }
      if (value2 === void 0) {
        if (!options2.allowUndefined) {
          return void 0;
        }
        return "_undefined_";
      }
      if (value2 === null) {
        return null;
      }
      if (typeof value2 === "number") {
        if (value2 === -Infinity) {
          return "_-Infinity_";
        }
        if (value2 === Infinity) {
          return "_Infinity_";
        }
        if (Number.isNaN(value2)) {
          return "_NaN_";
        }
        return value2;
      }
      if (typeof value2 === "bigint") {
        return `_bigint_${value2.toString()}`;
      }
      if (typeof value2 === "string") {
        if (dateFormat.test(value2)) {
          if (!options2.allowDate) {
            return void 0;
          }
          return `_date_${value2}`;
        }
        return value2;
      }
      if ((0, import_is_regex.default)(value2)) {
        if (!options2.allowRegExp) {
          return void 0;
        }
        return `_regexp_${value2.flags}|${value2.source}`;
      }
      if ((0, import_is_function.default)(value2)) {
        if (!options2.allowFunction) {
          return void 0;
        }
        const { name: name2 } = value2;
        const stringified = value2.toString();
        if (!stringified.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        )) {
          return `_function_${name2}|${cleanCode(convertShorthandMethods(key2, stringified))}`;
        }
        return `_function_${name2}|${(() => {
        }).toString()}`;
      }
      if ((0, import_is_symbol.default)(value2)) {
        if (!options2.allowSymbol) {
          return void 0;
        }
        const globalRegistryKey = Symbol.keyFor(value2);
        if (globalRegistryKey !== void 0) {
          return `_gsymbol_${globalRegistryKey}`;
        }
        return `_symbol_${value2.toString().slice(7, -1)}`;
      }
      if (stack.length >= options2.maxDepth) {
        if (Array.isArray(value2)) {
          return `[Array(${value2.length})]`;
        }
        return "[Object]";
      }
      if (value2 === this) {
        return `_duplicate_${JSON.stringify(keys)}`;
      }
      if (value2 instanceof Error && options2.allowError) {
        return {
          __isConvertedError__: true,
          errorProperties: {
            ...value2.cause ? { cause: value2.cause } : {},
            ...value2,
            name: value2.name,
            message: value2.message,
            stack: value2.stack,
            "_constructor-name_": value2.constructor.name
          }
        };
      }
      if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && !options2.allowClass) {
        return void 0;
      }
      const found = objects.get(value2);
      if (!found) {
        const converted = Array.isArray(value2) ? value2 : convertUnconventionalData(value2);
        if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && options2.allowClass) {
          try {
            Object.assign(converted, { "_constructor-name_": value2.constructor.name });
          } catch (e) {
          }
        }
        keys.push(key2);
        stack.unshift(converted);
        objects.set(value2, JSON.stringify(keys));
        if (value2 !== converted) {
          map2.set(value2, converted);
        }
        return converted;
      }
      return `_duplicate_${found}`;
    } catch (e) {
      return void 0;
    }
  };
};
var reviver2 = function reviver(options) {
  const refs = [];
  let root;
  return function revive(key, value) {
    if (key === "") {
      root = value;
      refs.forEach(({ target, container, replacement }) => {
        const replacementArr = isJSON(replacement) ? JSON.parse(replacement) : replacement.split(".");
        if (replacementArr.length === 0) {
          container[target] = root;
        } else {
          container[target] = get_default(root, replacementArr);
        }
      });
    }
    if (key === "_constructor-name_") {
      return value;
    }
    if (isObject3(value) && value.__isConvertedError__) {
      const { message, ...properties } = value.errorProperties;
      const error = new Error(message);
      Object.assign(error, properties);
      return error;
    }
    if (isObject3(value) && value["_constructor-name_"] && options.allowFunction) {
      const name2 = value["_constructor-name_"];
      if (name2 !== "Object") {
        const Fn = new Function(`return function ${name2.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new Fn());
      }
      delete value["_constructor-name_"];
      return value;
    }
    if (typeof value === "string" && value.startsWith("_function_") && options.allowFunction) {
      const [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [];
      const sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval) {
        return eval(`(${sourceSanitized})`);
      }
      const result = (...args) => {
        const f = eval(`(${sourceSanitized})`);
        return f(...args);
      };
      Object.defineProperty(result, "toString", {
        value: () => sourceSanitized
      });
      Object.defineProperty(result, "name", {
        value: name
      });
      return result;
    }
    if (typeof value === "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      const [, flags, source2] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(source2, flags);
    }
    if (typeof value === "string" && value.startsWith("_date_") && options.allowDate) {
      return new Date(value.replace("_date_", ""));
    }
    if (typeof value === "string" && value.startsWith("_duplicate_")) {
      refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") });
      return null;
    }
    if (typeof value === "string" && value.startsWith("_symbol_") && options.allowSymbol) {
      return Symbol(value.replace("_symbol_", ""));
    }
    if (typeof value === "string" && value.startsWith("_gsymbol_") && options.allowSymbol) {
      return Symbol.for(value.replace("_gsymbol_", ""));
    }
    if (typeof value === "string" && value === "_-Infinity_") {
      return -Infinity;
    }
    if (typeof value === "string" && value === "_Infinity_") {
      return Infinity;
    }
    if (typeof value === "string" && value === "_NaN_") {
      return NaN;
    }
    if (typeof value === "string" && value.startsWith("_bigint_") && typeof BigInt === "function") {
      return BigInt(value.replace("_bigint_", ""));
    }
    return value;
  };
};
var defaultOptions = {
  maxDepth: 10,
  space: void 0,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowError: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
};
var stringify = (data, options2 = {}) => {
  const mergedOptions = { ...defaultOptions, ...options2 };
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options2.space);
};
var mutator = () => {
  const mutated = /* @__PURE__ */ new Map();
  return function mutateUndefined(value2) {
    if (isObject3(value2)) {
      Object.entries(value2).forEach(([k, v2]) => {
        if (v2 === "_undefined_") {
          value2[k] = void 0;
        } else if (!mutated.get(v2)) {
          mutated.set(v2, true);
          mutateUndefined(v2);
        }
      });
    }
    if (Array.isArray(value2)) {
      value2.forEach((v2, index) => {
        if (v2 === "_undefined_") {
          mutated.set(v2, true);
          value2[index] = void 0;
        } else if (!mutated.get(v2)) {
          mutated.set(v2, true);
          mutateUndefined(v2);
        }
      });
    }
  };
};
var parse = (data, options2 = {}) => {
  const mergedOptions = { ...defaultOptions, ...options2 };
  const result2 = JSON.parse(data, reviver2(mergedOptions));
  mutator()(result2);
  return result2;
};

// ../channels/dist/chunk-AE2MCSLN.mjs
var import_qs = __toESM(require_lib(), 1);

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value2 = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value2);
}

// ../channels/dist/chunk-AE2MCSLN.mjs
var getEventSourceUrl = (event) => {
  const frames = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  );
  const [frame, ...remainder] = frames.filter((element) => {
    try {
      return element.contentWindow === event.source;
    } catch (err) {
    }
    const src2 = element.getAttribute("src");
    let origin;
    try {
      if (!src2) {
        return false;
      }
      ({ origin } = new URL(src2, document.location.toString()));
    } catch (err) {
      return false;
    }
    return origin === event.origin;
  });
  const src = frame?.getAttribute("src");
  if (src && remainder.length === 0) {
    const { protocol, host, pathname } = new URL(src, document.location.toString());
    return `${protocol}//${host}${pathname}`;
  }
  if (remainder.length > 0) {
    logger.error("found multiple candidates for event source");
  }
  return null;
};
var { document: document2, location } = scope;
var KEY = "storybook-channel";
var defaultEventOptions = { allowFunction: true, maxDepth: 25 };
var PostMessageTransport = class {
  constructor(config) {
    this.config = config;
    this.connected = false;
    this.buffer = [];
    if (typeof scope?.addEventListener === "function") {
      scope.addEventListener("message", this.handleEvent.bind(this), false);
    }
    if (config.page !== "manager" && config.page !== "preview") {
      throw new Error(`postmsg-channel: "config.page" cannot be "${config.page}"`);
    }
  }
  setHandler(handler) {
    this.handler = (...args2) => {
      handler.apply(this, args2);
      if (!this.connected && this.getLocalFrame().length) {
        this.flush();
        this.connected = true;
      }
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist
   * the event will be stored in a buffer and sent when the window exists.
   * @param event
   */
  send(event, options2) {
    const {
      target,
      // telejson options
      allowRegExp,
      allowFunction,
      allowSymbol,
      allowDate,
      allowError,
      allowUndefined,
      allowClass,
      maxDepth,
      space,
      lazyEval
    } = options2 || {};
    const eventOptions = Object.fromEntries(
      Object.entries({
        allowRegExp,
        allowFunction,
        allowSymbol,
        allowDate,
        allowError,
        allowUndefined,
        allowClass,
        maxDepth,
        space,
        lazyEval
      }).filter(([k, v2]) => typeof v2 !== "undefined")
    );
    const stringifyOptions = {
      ...defaultEventOptions,
      ...scope.CHANNEL_OPTIONS || {},
      ...eventOptions
    };
    const frames = this.getFrames(target);
    const query = import_qs.default.parse(location?.search || "", { ignoreQueryPrefix: true });
    const data = stringify(
      {
        key: KEY,
        event,
        refId: query.refId
      },
      stringifyOptions
    );
    if (!frames.length) {
      return new Promise((resolve, reject) => {
        this.buffer.push({ event, resolve, reject });
      });
    }
    if (this.buffer.length) {
      this.flush();
    }
    frames.forEach((f3) => {
      try {
        f3.postMessage(data, "*");
      } catch (e) {
        logger.error("sending over postmessage fail");
      }
    });
    return Promise.resolve(null);
  }
  flush() {
    const { buffer } = this;
    this.buffer = [];
    buffer.forEach((item) => {
      this.send(item.event).then(item.resolve).catch(item.reject);
    });
  }
  getFrames(target) {
    if (this.config.page === "manager") {
      const nodes = Array.from(
        document2.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      );
      const list = nodes.flatMap((e) => {
        try {
          if (!!e.contentWindow && e.dataset.isStorybook !== void 0 && e.id === target) {
            return [e.contentWindow];
          }
          return [];
        } catch (er) {
          return [];
        }
      });
      return list?.length ? list : this.getCurrentFrames();
    }
    if (scope && scope.parent && scope.parent !== scope.self) {
      return [scope.parent];
    }
    return [];
  }
  getCurrentFrames() {
    if (this.config.page === "manager") {
      const list = Array.from(
        document2.querySelectorAll('[data-is-storybook="true"]')
      );
      return list.flatMap((e) => e.contentWindow ? [e.contentWindow] : []);
    }
    if (scope && scope.parent) {
      return [scope.parent];
    }
    return [];
  }
  getLocalFrame() {
    if (this.config.page === "manager") {
      const list = Array.from(
        document2.querySelectorAll("#storybook-preview-iframe")
      );
      return list.flatMap((e) => e.contentWindow ? [e.contentWindow] : []);
    }
    if (scope && scope.parent) {
      return [scope.parent];
    }
    return [];
  }
  handleEvent(rawEvent) {
    try {
      const { data } = rawEvent;
      const { key: key2, event, refId } = typeof data === "string" && isJSON(data) ? parse(data, scope.CHANNEL_OPTIONS || {}) : data;
      if (key2 === KEY) {
        const pageString = this.config.page === "manager" ? `<span style="color: #37D5D3; background: black"> manager </span>` : `<span style="color: #1EA7FD; background: black"> preview </span>`;
        const eventString = Object.values(dist_exports).includes(event.type) ? `<span style="color: #FF4785">${event.type}</span>` : `<span style="color: #FFAE00">${event.type}</span>`;
        if (refId) {
          event.refId = refId;
        }
        event.source = this.config.page === "preview" ? rawEvent.origin : getEventSourceUrl(rawEvent);
        if (!event.source) {
          pretty.error(
            `${pageString} received ${eventString} but was unable to determine the source of the event`
          );
          return;
        }
        const message = `${pageString} received ${eventString} (${data.length})`;
        pretty.debug(
          location.origin !== event.source ? message : `${message} <span style="color: gray">(on ${location.origin} from ${event.source})</span>`,
          ...event.args
        );
        invariant(this.handler, "ChannelHandler should be set");
        this.handler(event);
      }
    } catch (error) {
      logger.error(error);
    }
  }
};
var PostmsgTransport = PostMessageTransport;
function createChannel({ page }) {
  const transport = new PostmsgTransport({ page });
  return new Channel({ transport });
}
var postmessage_default = createChannel;

// ../channels/dist/chunk-P5ZWIMCR.mjs
var { WebSocket } = scope;
var WebsocketTransport = class {
  constructor({ url, onError }) {
    this.buffer = [];
    this.isReady = false;
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      this.isReady = true;
      this.flush();
    };
    this.socket.onmessage = ({ data }) => {
      const event = typeof data === "string" && isJSON(data) ? parse(data) : data;
      invariant(this.handler, "WebsocketTransport handler should be set");
      this.handler(event);
    };
    this.socket.onerror = (e) => {
      if (onError) {
        onError(e);
      }
    };
  }
  setHandler(handler) {
    this.handler = handler;
  }
  send(event) {
    if (!this.isReady) {
      this.sendLater(event);
    } else {
      this.sendNow(event);
    }
  }
  sendLater(event) {
    this.buffer.push(event);
  }
  sendNow(event) {
    const data = stringify(event, { maxDepth: 15, allowFunction: true });
    this.socket.send(data);
  }
  flush() {
    const { buffer } = this;
    this.buffer = [];
    buffer.forEach((event) => this.send(event));
  }
};
function createChannel2({
  url,
  async = false,
  onError = (err) => logger.warn(err)
}) {
  let channelUrl = url;
  if (!channelUrl) {
    const protocol = window.location.protocol === "http:" ? "ws" : "wss";
    const { hostname, port } = window.location;
    channelUrl = `${protocol}://${hostname}:${port}/storybook-server-channel`;
  }
  const transport = new WebsocketTransport({ url: channelUrl, onError });
  return new Channel({ transport, async });
}
var websocket_default = createChannel2;

// ../channels/dist/index.mjs
var { CONFIG_TYPE } = scope;
var src_default2 = Channel;
function createBrowserChannel({ page, extraTransports = [] }) {
  const transports = [new PostMessageTransport({ page }), ...extraTransports];
  if (CONFIG_TYPE === "DEVELOPMENT") {
    const protocol = window.location.protocol === "http:" ? "ws" : "wss";
    const { hostname, port } = window.location;
    const channelUrl = `${protocol}://${hostname}:${port}/storybook-server-channel`;
    transports.push(new WebsocketTransport({ url: channelUrl, onError: () => {
    } }));
  }
  return new Channel({ transports });
}

// ../preview-api/dist/index.mjs
var dist_exports5 = {};
__export(dist_exports5, {
  ClientApi: () => ClientApi,
  DocsContext: () => DocsContext,
  HooksContext: () => HooksContext,
  Preview: () => Preview,
  PreviewWeb: () => PreviewWeb,
  StoryStore: () => StoryStore,
  addArgTypes: () => addArgTypes,
  addArgTypesEnhancer: () => addArgTypesEnhancer,
  addArgs: () => addArgs,
  addArgsEnhancer: () => addArgsEnhancer,
  addDecorator: () => addDecorator,
  addLoader: () => addLoader,
  addParameters: () => addParameters,
  addStepRunner: () => addStepRunner,
  addons: () => addons,
  applyHooks: () => applyHooks,
  combineArgs: () => combineArgs,
  combineParameters: () => combineParameters,
  composeConfigs: () => composeConfigs,
  composeStepRunners: () => composeStepRunners,
  composeStories: () => composeStories,
  composeStory: () => composeStory,
  decorateStory: () => decorateStory,
  defaultDecorateStory: () => defaultDecorateStory,
  filterArgTypes: () => filterArgTypes,
  getQueryParam: () => getQueryParam,
  getQueryParams: () => getQueryParams,
  inferControls: () => inferControls,
  makeDecorator: () => makeDecorator,
  mockChannel: () => mockChannel,
  normalizeStory: () => normalizeStory,
  prepareMeta: () => prepareMeta,
  prepareStory: () => prepareStory,
  sanitizeStoryContextUpdate: () => sanitizeStoryContextUpdate,
  setGlobalRender: () => setGlobalRender,
  setProjectAnnotations: () => setProjectAnnotations,
  simulateDOMContentLoaded: () => simulateDOMContentLoaded,
  simulatePageLoad: () => simulatePageLoad,
  sortStoriesV7: () => sortStoriesV7,
  start: () => start,
  useArgs: () => useArgs,
  useCallback: () => useCallback,
  useChannel: () => useChannel,
  useEffect: () => useEffect,
  useGlobals: () => useGlobals,
  useMemo: () => useMemo,
  useParameter: () => useParameter,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useState: () => useState,
  useStoryContext: () => useStoryContext,
  userOrAutoTitle: () => userOrAutoTitle,
  userOrAutoTitleFromSpecifier: () => userOrAutoTitleFromSpecifier
});

// ../preview-api/dist/chunk-ZOAWZ2XS.mjs
var __create3 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames3 = Object.getOwnPropertyNames;
var __getProtoOf3 = Object.getPrototypeOf;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __commonJS3 = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames3(from))
      if (!__hasOwnProp3.call(to, key2) && key2 !== except)
        __defProp3(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc3(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
function mockChannel() {
  const transport = {
    setHandler: () => {
    },
    send: () => {
    }
  };
  return new Channel({ transport });
}
var AddonStore = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        const channel = mockChannel();
        this.setChannel(channel);
        return channel;
      }
      return this.channel;
    };
    this.getServerChannel = () => {
      if (!this.serverChannel) {
        throw new Error("Accessing non-existent serverChannel");
      }
      return this.serverChannel;
    };
    this.ready = () => this.promise;
    this.hasChannel = () => !!this.channel;
    this.hasServerChannel = () => !!this.serverChannel;
    this.setChannel = (channel) => {
      this.channel = channel;
      this.resolve();
    };
    this.setServerChannel = (channel) => {
      this.serverChannel = channel;
    };
    this.promise = new Promise((res) => {
      this.resolve = () => res(this.getChannel());
    });
  }
};
var KEY2 = "__STORYBOOK_ADDONS_PREVIEW";
function getAddonsStore() {
  if (!scope[KEY2]) {
    scope[KEY2] = new AddonStore();
  }
  return scope[KEY2];
}
var addons = getAddonsStore();
var HooksContext = class {
  constructor() {
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = (storyId) => {
      if (storyId !== this.currentContext?.id) {
        return;
      }
      this.triggerEffects();
      this.currentContext = null;
      this.removeRenderListeners();
    };
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap();
    this.mountedDecorators = /* @__PURE__ */ new Set();
    this.prevMountedDecorators = /* @__PURE__ */ new Set();
    this.currentHooks = [];
    this.nextHookIndex = 0;
    this.currentPhase = "NONE";
    this.currentEffects = [];
    this.prevEffects = [];
    this.currentDecoratorName = null;
    this.hasUpdates = false;
    this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((effect) => {
      if (effect.destroy) {
        effect.destroy();
      }
    });
    this.init();
    this.removeRenderListeners();
  }
  getNextHook() {
    const hook = this.currentHooks[this.nextHookIndex];
    this.nextHookIndex += 1;
    return hook;
  }
  triggerEffects() {
    this.prevEffects.forEach((effect) => {
      if (!this.currentEffects.includes(effect) && effect.destroy) {
        effect.destroy();
      }
    });
    this.currentEffects.forEach((effect) => {
      if (!this.prevEffects.includes(effect)) {
        effect.destroy = effect.create();
      }
    });
    this.prevEffects = this.currentEffects;
    this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners();
    const channel = addons.getChannel();
    channel.on(STORY_RENDERED, this.renderListener);
  }
  removeRenderListeners() {
    const channel = addons.getChannel();
    channel.removeListener(STORY_RENDERED, this.renderListener);
  }
};
function hookify(fn) {
  const hookified = (...args2) => {
    const { hooks } = typeof args2[0] === "function" ? args2[1] : args2[0];
    const prevPhase = hooks.currentPhase;
    const prevHooks = hooks.currentHooks;
    const prevNextHookIndex = hooks.nextHookIndex;
    const prevDecoratorName = hooks.currentDecoratorName;
    hooks.currentDecoratorName = fn.name;
    if (hooks.prevMountedDecorators.has(fn)) {
      hooks.currentPhase = "UPDATE";
      hooks.currentHooks = hooks.hookListsMap.get(fn) || [];
    } else {
      hooks.currentPhase = "MOUNT";
      hooks.currentHooks = [];
      hooks.hookListsMap.set(fn, hooks.currentHooks);
      hooks.prevMountedDecorators.add(fn);
    }
    hooks.nextHookIndex = 0;
    const prevContext = scope.STORYBOOK_HOOKS_CONTEXT;
    scope.STORYBOOK_HOOKS_CONTEXT = hooks;
    const result2 = fn(...args2);
    scope.STORYBOOK_HOOKS_CONTEXT = prevContext;
    if (hooks.currentPhase === "UPDATE" && hooks.getNextHook() != null) {
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    }
    hooks.currentPhase = prevPhase;
    hooks.currentHooks = prevHooks;
    hooks.nextHookIndex = prevNextHookIndex;
    hooks.currentDecoratorName = prevDecoratorName;
    return result2;
  };
  hookified.originalFn = fn;
  return hookified;
}
var numberOfRenders = 0;
var RENDER_LIMIT = 25;
var applyHooks = (applyDecorators) => (storyFn, decorators) => {
  const decorated = applyDecorators(
    hookify(storyFn),
    decorators.map((decorator) => hookify(decorator))
  );
  return (context) => {
    const { hooks } = context;
    hooks.prevMountedDecorators ??= /* @__PURE__ */ new Set();
    hooks.mountedDecorators = /* @__PURE__ */ new Set([storyFn, ...decorators]);
    hooks.currentContext = context;
    hooks.hasUpdates = false;
    let result2 = decorated(context);
    numberOfRenders = 1;
    while (hooks.hasUpdates) {
      hooks.hasUpdates = false;
      hooks.currentEffects = [];
      result2 = decorated(context);
      numberOfRenders += 1;
      if (numberOfRenders > RENDER_LIMIT) {
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
      }
    }
    hooks.addRenderListeners();
    return result2;
  };
};
var areDepsEqual = (deps, nextDeps) => deps.length === nextDeps.length && deps.every((dep, i) => dep === nextDeps[i]);
var invalidHooksError = () => new Error("Storybook preview hooks can only be called inside decorators and story functions.");
function getHooksContextOrNull() {
  return scope.STORYBOOK_HOOKS_CONTEXT || null;
}
function getHooksContextOrThrow() {
  const hooks = getHooksContextOrNull();
  if (hooks == null) {
    throw invalidHooksError();
  }
  return hooks;
}
function useHook(name2, callback, deps) {
  const hooks = getHooksContextOrThrow();
  if (hooks.currentPhase === "MOUNT") {
    if (deps != null && !Array.isArray(deps)) {
      logger.warn(
        `${name2} received a final argument that is not an array (instead, received ${deps}). When specified, the final argument must be an array.`
      );
    }
    const hook = { name: name2, deps };
    hooks.currentHooks.push(hook);
    callback(hook);
    return hook;
  }
  if (hooks.currentPhase === "UPDATE") {
    const hook = hooks.getNextHook();
    if (hook == null) {
      throw new Error("Rendered more hooks than during the previous render.");
    }
    if (hook.name !== name2) {
      logger.warn(
        `Storybook has detected a change in the order of Hooks${hooks.currentDecoratorName ? ` called by ${hooks.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`
      );
    }
    if (deps != null && hook.deps == null) {
      logger.warn(
        `${name2} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
      );
    }
    if (deps != null && hook.deps != null && deps.length !== hook.deps.length) {
      logger.warn(`The final argument passed to ${name2} changed size between renders. The order and size of this array must remain constant.
Previous: ${hook.deps}
Incoming: ${deps}`);
    }
    if (deps == null || hook.deps == null || !areDepsEqual(deps, hook.deps)) {
      callback(hook);
      hook.deps = deps;
    }
    return hook;
  }
  throw invalidHooksError();
}
function useMemoLike(name2, nextCreate, deps) {
  const { memoizedState } = useHook(
    name2,
    (hook) => {
      hook.memoizedState = nextCreate();
    },
    deps
  );
  return memoizedState;
}
function useMemo(nextCreate, deps) {
  return useMemoLike("useMemo", nextCreate, deps);
}
function useCallback(callback, deps) {
  return useMemoLike("useCallback", () => callback, deps);
}
function useRefLike(name2, initialValue) {
  return useMemoLike(name2, () => ({ current: initialValue }), []);
}
function useRef(initialValue) {
  return useRefLike("useRef", initialValue);
}
function triggerUpdate() {
  const hooks = getHooksContextOrNull();
  if (hooks != null && hooks.currentPhase !== "NONE") {
    hooks.hasUpdates = true;
  } else {
    try {
      addons.getChannel().emit(FORCE_RE_RENDER);
    } catch (e) {
      logger.warn("State updates of Storybook preview hooks work only in browser");
    }
  }
}
function useStateLike(name2, initialState) {
  const stateRef = useRefLike(
    name2,
    // @ts-expect-error S type should never be function, but there's no way to tell that to TypeScript
    typeof initialState === "function" ? initialState() : initialState
  );
  const setState = (update) => {
    stateRef.current = typeof update === "function" ? update(stateRef.current) : update;
    triggerUpdate();
  };
  return [stateRef.current, setState];
}
function useState(initialState) {
  return useStateLike("useState", initialState);
}
function useReducer(reducer, initialArg, init) {
  const initialState = init != null ? () => init(initialArg) : initialArg;
  const [state, setState] = useStateLike("useReducer", initialState);
  const dispatch = (action) => setState((prevState) => reducer(prevState, action));
  return [state, dispatch];
}
function useEffect(create, deps) {
  const hooks = getHooksContextOrThrow();
  const effect = useMemoLike("useEffect", () => ({ create }), deps);
  if (!hooks.currentEffects.includes(effect)) {
    hooks.currentEffects.push(effect);
  }
}
function useChannel(eventMap, deps = []) {
  const channel = addons.getChannel();
  useEffect(() => {
    Object.entries(eventMap).forEach(([type, listener]) => channel.on(type, listener));
    return () => {
      Object.entries(eventMap).forEach(
        ([type, listener]) => channel.removeListener(type, listener)
      );
    };
  }, [...Object.keys(eventMap), ...deps]);
  return useCallback(channel.emit.bind(channel), [channel]);
}
function useStoryContext() {
  const { currentContext } = getHooksContextOrThrow();
  if (currentContext == null) {
    throw invalidHooksError();
  }
  return currentContext;
}
function useParameter(parameterKey, defaultValue) {
  const { parameters } = useStoryContext();
  if (parameterKey) {
    return parameters[parameterKey] ?? defaultValue;
  }
  return void 0;
}
function useArgs() {
  const channel = addons.getChannel();
  const { id: storyId, args: args2 } = useStoryContext();
  const updateArgs = useCallback(
    (updatedArgs) => channel.emit(UPDATE_STORY_ARGS, { storyId, updatedArgs }),
    [channel, storyId]
  );
  const resetArgs = useCallback(
    (argNames) => channel.emit(RESET_STORY_ARGS, { storyId, argNames }),
    [channel, storyId]
  );
  return [args2, updateArgs, resetArgs];
}
function useGlobals() {
  const channel = addons.getChannel();
  const { globals } = useStoryContext();
  const updateGlobals = useCallback(
    (newGlobals) => channel.emit(UPDATE_GLOBALS, { globals: newGlobals }),
    [channel]
  );
  return [globals, updateGlobals];
}

// ../preview-api/dist/chunk-RYZB6RT5.mjs
var import_memoizerific2 = __toESM(require_memoizerific(), 1);
var import_mapValues = __toESM(require_mapValues(), 1);
var import_pick = __toESM(require_pick(), 1);
var import_synchronous_promise = __toESM(require_synchronous_promise(), 1);

// ../core-events/dist/chunk-HW7OXSS4.mjs
var StorybookError = class extends Error {
  constructor() {
    super(...arguments);
    this.data = {};
    this.documentation = false;
    this.fromStorybook = true;
  }
  get fullErrorCode() {
    const paddedCode = String(this.code).padStart(4, "0");
    return `SB_${this.category}_${paddedCode}`;
  }
  /**
   * Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>.
   */
  get name() {
    const errorName = this.constructor.name;
    return `${this.fullErrorCode} (${errorName})`;
  }
  /**
   * Generates the error message along with additional documentation link (if applicable).
   */
  get message() {
    let page;
    if (this.documentation === true) {
      page = `https://storybook.js.org/error/${this.fullErrorCode}`;
    } else if (typeof this.documentation === "string") {
      page = this.documentation;
    } else if (Array.isArray(this.documentation)) {
      page = `
${this.documentation.map((doc) => `	- ${doc}`).join("\n")}`;
    }
    return `${this.template()}${page != null ? `

More info: ${page}
` : ""}`;
  }
};

// ../../node_modules/ts-dedent/esm/index.js
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches2 = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches2) {
      return arr.concat(matches2.map(function(match) {
        var _a, _b;
        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value2, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str, i2) {
        return i2 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var esm_default = dedent;

// ../core-events/dist/errors/preview-errors.mjs
var MissingStoryAfterHmrError = class extends StorybookError {
  constructor(data) {
    super();
    this.data = data;
    this.category = "PREVIEW_API";
    this.code = 1;
  }
  template() {
    return esm_default`
    Couldn't find story matching id '${this.data.storyId}' after HMR.
    - Did you just rename a story?
    - Did you remove it from your CSF file?
    - Are you sure a story with the id '${this.data.storyId}' exists?
    - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
    - Also check the browser console and terminal for potential error messages.`;
  }
};

// ../../node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key2) {
  for (key2 of iter.keys()) {
    if (dequal(key2, tar))
      return key2;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!bar.has(tmp))
          return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len))
          ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len])
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// ../preview-api/dist/chunk-RYZB6RT5.mjs
var import_isPlainObject = __toESM(require_isPlainObject(), 1);

// ../../node_modules/@storybook/csf/dist/index.mjs
var B = Object.create;
var R = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf;
var w = Object.prototype.hasOwnProperty;
var I = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var E = (r, e, n, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of C(e))
      !w.call(r, a) && a !== n && R(r, a, { get: () => e[a], enumerable: !(t = b(e, a)) || t.enumerable });
  return r;
};
var v = (r, e, n) => (n = r != null ? B(h(r)) : {}, E(e || !r || !r.__esModule ? R(n, "default", { value: r, enumerable: true }) : n, r));
var x = I((T) => {
  Object.defineProperty(T, "__esModule", { value: true }), T.isEqual = function() {
    var r = Object.prototype.toString, e = Object.getPrototypeOf, n = Object.getOwnPropertySymbols ? function(t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
    } : Object.keys;
    return function(t, a) {
      return function i(o, s, p) {
        var y, g, d, A = r.call(o), F = r.call(s);
        if (o === s)
          return true;
        if (o == null || s == null)
          return false;
        if (p.indexOf(o) > -1 && p.indexOf(s) > -1)
          return true;
        if (p.push(o, s), A != F || (y = n(o), g = n(s), y.length != g.length || y.some(function(l) {
          return !i(o[l], s[l], p);
        })))
          return false;
        switch (A.slice(8, -1)) {
          case "Symbol":
            return o.valueOf() == s.valueOf();
          case "Date":
          case "Number":
            return +o == +s || +o != +o && +s != +s;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + o == "" + s;
          case "Set":
          case "Map":
            y = o.entries(), g = s.entries();
            do
              if (!i((d = y.next()).value, g.next().value, p))
                return false;
            while (!d.done);
            return true;
          case "ArrayBuffer":
            o = new Uint8Array(o), s = new Uint8Array(s);
          case "DataView":
            o = new Uint8Array(o.buffer), s = new Uint8Array(s.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (o.length != s.length)
              return false;
            for (d = 0; d < o.length; d++)
              if ((d in o || d in s) && (d in o != d in s || !i(o[d], s[d], p)))
                return false;
            return true;
          case "Object":
            return i(e(o), e(s), p);
          default:
            return false;
        }
      }(t, a, []);
    };
  }();
});
function u(r) {
  return r.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (e, n, t, a) => `${n} ${t}${a}`).replace(/([a-z])([A-Z])/g, (e, n, t) => `${n} ${t}`).replace(/([a-z])([0-9])/gi, (e, n, t) => `${n} ${t}`).replace(/([0-9])([a-z])/gi, (e, n, t) => `${n} ${t}`).replace(/(\s|^)(\w)/g, (e, n, t) => `${n}${t.toUpperCase()}`).replace(/ +/g, " ").trim();
}
var c = v(x());
var S = (r) => r.map((e) => typeof e < "u").filter(Boolean).length;
var P = (r, e) => {
  let { exists: n, eq: t, neq: a, truthy: i } = r;
  if (S([n, t, a, i]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: n, eq: t, neq: a })}`);
  if (typeof t < "u")
    return (0, c.isEqual)(e, t);
  if (typeof a < "u")
    return !(0, c.isEqual)(e, a);
  if (typeof n < "u") {
    let s = typeof e < "u";
    return n ? s : !s;
  }
  return (typeof i > "u" ? true : i) ? !!e : !e;
};
var O = (r, e, n) => {
  if (!r.if)
    return true;
  let { arg: t, global: a } = r.if;
  if (S([t, a]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: t, global: a })}`);
  let i = t ? e[t] : n[a];
  return P(r.if, i);
};
var L = (r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
var f2 = (r, e) => {
  let n = L(r);
  if (n === "")
    throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);
  return n;
};
var N = (r, e) => `${f2(r, "kind")}${e ? `--${f2(e, "name")}` : ""}`;
var M = (r) => u(r);
function m(r, e) {
  return Array.isArray(e) ? e.includes(r) : r.match(e);
}
function G(r, { includeStories: e, excludeStories: n }) {
  return r !== "__esModule" && (!e || m(r, e)) && (!n || !m(r, n));
}

// ../preview-api/dist/chunk-RYZB6RT5.mjs
var import_util_deprecate = __toESM(require_browser(), 1);
var import_pickBy = __toESM(require_pickBy(), 1);
var getImportPathMap = (0, import_memoizerific2.default)(1)(
  (entries) => Object.values(entries).reduce((acc, entry) => {
    acc[entry.importPath] = acc[entry.importPath] || entry;
    return acc;
  }, {})
);
var StoryIndexStore = class {
  constructor({ entries } = { v: 4, entries: {} }) {
    this.entries = entries;
  }
  entryFromSpecifier(specifier) {
    const entries = Object.values(this.entries);
    if (specifier === "*") {
      return entries[0];
    }
    if (typeof specifier === "string") {
      if (this.entries[specifier]) {
        return this.entries[specifier];
      }
      return entries.find((entry) => entry.id.startsWith(specifier));
    }
    const { name: name2, title } = specifier;
    return entries.find((entry) => entry.name === name2 && entry.title === title);
  }
  storyIdToEntry(storyId) {
    const storyEntry = this.entries[storyId];
    if (!storyEntry) {
      throw new MissingStoryAfterHmrError({ storyId });
    }
    return storyEntry;
  }
  importPathToEntry(importPath) {
    return getImportPathMap(this.entries)[importPath];
  }
};
var INCOMPATIBLE = Symbol("incompatible");
var map = (arg, argType) => {
  const type = argType.type;
  if (arg === void 0 || arg === null || !type)
    return arg;
  if (argType.mapping) {
    return arg;
  }
  switch (type.name) {
    case "string":
      return String(arg);
    case "enum":
      return arg;
    case "number":
      return Number(arg);
    case "boolean":
      return arg === "true";
    case "array":
      if (!type.value || !Array.isArray(arg))
        return INCOMPATIBLE;
      return arg.reduce((acc, item, index) => {
        const mapped = map(item, { type: type.value });
        if (mapped !== INCOMPATIBLE)
          acc[index] = mapped;
        return acc;
      }, new Array(arg.length));
    case "object":
      if (typeof arg === "string" || typeof arg === "number")
        return arg;
      if (!type.value || typeof arg !== "object")
        return INCOMPATIBLE;
      return Object.entries(arg).reduce((acc, [key2, val]) => {
        const mapped = map(val, { type: type.value[key2] });
        return mapped === INCOMPATIBLE ? acc : Object.assign(acc, { [key2]: mapped });
      }, {});
    default:
      return INCOMPATIBLE;
  }
};
var mapArgsToTypes = (args2, argTypes) => {
  return Object.entries(args2).reduce((acc, [key2, value2]) => {
    if (!argTypes[key2])
      return acc;
    const mapped = map(value2, argTypes[key2]);
    return mapped === INCOMPATIBLE ? acc : Object.assign(acc, { [key2]: mapped });
  }, {});
};
var combineArgs = (value2, update) => {
  if (Array.isArray(value2) && Array.isArray(update)) {
    return update.reduce(
      (acc, upd, index) => {
        acc[index] = combineArgs(value2[index], update[index]);
        return acc;
      },
      [...value2]
    ).filter((v2) => v2 !== void 0);
  }
  if (!(0, import_isPlainObject.default)(value2) || !(0, import_isPlainObject.default)(update))
    return update;
  return Object.keys({ ...value2, ...update }).reduce((acc, key2) => {
    if (key2 in update) {
      const combined = combineArgs(value2[key2], update[key2]);
      if (combined !== void 0)
        acc[key2] = combined;
    } else {
      acc[key2] = value2[key2];
    }
    return acc;
  }, {});
};
var validateOptions = (args2, argTypes) => {
  return Object.entries(argTypes).reduce((acc, [key2, { options: options2 }]) => {
    function allowArg() {
      if (key2 in args2) {
        acc[key2] = args2[key2];
      }
      return acc;
    }
    if (!options2)
      return allowArg();
    if (!Array.isArray(options2)) {
      once.error(dedent`
        Invalid argType: '${key2}.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `);
      return allowArg();
    }
    if (options2.some((opt) => opt && ["object", "function"].includes(typeof opt))) {
      once.error(dedent`
        Invalid argType: '${key2}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `);
      return allowArg();
    }
    const isArray2 = Array.isArray(args2[key2]);
    const invalidIndex = isArray2 && args2[key2].findIndex((val) => !options2.includes(val));
    const isValidArray = isArray2 && invalidIndex === -1;
    if (args2[key2] === void 0 || options2.includes(args2[key2]) || isValidArray) {
      return allowArg();
    }
    const field = isArray2 ? `${key2}[${invalidIndex}]` : key2;
    const supportedOptions = options2.map((opt) => typeof opt === "string" ? `'${opt}'` : String(opt)).join(", ");
    once.warn(`Received illegal value for '${field}'. Supported options: ${supportedOptions}`);
    return acc;
  }, {});
};
var DEEPLY_EQUAL = Symbol("Deeply equal");
var deepDiff = (value2, update) => {
  if (typeof value2 !== typeof update)
    return update;
  if (dequal(value2, update))
    return DEEPLY_EQUAL;
  if (Array.isArray(value2) && Array.isArray(update)) {
    const res = update.reduce((acc, upd, index) => {
      const diff = deepDiff(value2[index], upd);
      if (diff !== DEEPLY_EQUAL)
        acc[index] = diff;
      return acc;
    }, new Array(update.length));
    if (update.length >= value2.length)
      return res;
    return res.concat(new Array(value2.length - update.length).fill(void 0));
  }
  if ((0, import_isPlainObject.default)(value2) && (0, import_isPlainObject.default)(update)) {
    return Object.keys({ ...value2, ...update }).reduce((acc, key2) => {
      const diff = deepDiff(value2?.[key2], update?.[key2]);
      return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, { [key2]: diff });
    }, {});
  }
  return update;
};
var UNTARGETED = "UNTARGETED";
function groupArgsByTarget({
  args: args2,
  argTypes
}) {
  const groupedArgs = {};
  Object.entries(args2).forEach(([name2, value2]) => {
    const { target = UNTARGETED } = argTypes[name2] || {};
    groupedArgs[target] = groupedArgs[target] || {};
    groupedArgs[target][name2] = value2;
  });
  return groupedArgs;
}
function noTargetArgs(context) {
  return groupArgsByTarget(context)[UNTARGETED];
}
function deleteUndefined(obj) {
  Object.keys(obj).forEach((key2) => obj[key2] === void 0 && delete obj[key2]);
  return obj;
}
var ArgsStore = class {
  constructor() {
    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }
  get(storyId) {
    if (!(storyId in this.argsByStoryId)) {
      throw new Error(`No args known for ${storyId} -- has it been rendered yet?`);
    }
    return this.argsByStoryId[storyId];
  }
  setInitial(story) {
    if (!this.initialArgsByStoryId[story.id]) {
      this.initialArgsByStoryId[story.id] = story.initialArgs;
      this.argsByStoryId[story.id] = story.initialArgs;
    } else if (this.initialArgsByStoryId[story.id] !== story.initialArgs) {
      const delta = deepDiff(this.initialArgsByStoryId[story.id], this.argsByStoryId[story.id]);
      this.initialArgsByStoryId[story.id] = story.initialArgs;
      this.argsByStoryId[story.id] = story.initialArgs;
      if (delta !== DEEPLY_EQUAL) {
        this.updateFromDelta(story, delta);
      }
    }
  }
  updateFromDelta(story, delta) {
    const validatedDelta = validateOptions(delta, story.argTypes);
    this.argsByStoryId[story.id] = combineArgs(this.argsByStoryId[story.id], validatedDelta);
  }
  updateFromPersisted(story, persisted) {
    const mappedPersisted = mapArgsToTypes(persisted, story.argTypes);
    return this.updateFromDelta(story, mappedPersisted);
  }
  update(storyId, argsUpdate) {
    if (!(storyId in this.argsByStoryId)) {
      throw new Error(`No args known for ${storyId} -- has it been rendered yet?`);
    }
    this.argsByStoryId[storyId] = deleteUndefined({
      ...this.argsByStoryId[storyId],
      ...argsUpdate
    });
  }
};
var getValuesFromArgTypes = (argTypes = {}) => Object.entries(argTypes).reduce((acc, [arg, { defaultValue }]) => {
  if (typeof defaultValue !== "undefined") {
    acc[arg] = defaultValue;
  }
  return acc;
}, {});
var GlobalsStore = class {
  constructor({
    globals = {},
    globalTypes = {}
  }) {
    this.set({ globals, globalTypes });
  }
  set({ globals = {}, globalTypes = {} }) {
    const delta = this.initialGlobals && deepDiff(this.initialGlobals, this.globals);
    this.allowedGlobalNames = /* @__PURE__ */ new Set([...Object.keys(globals), ...Object.keys(globalTypes)]);
    const defaultGlobals = getValuesFromArgTypes(globalTypes);
    this.initialGlobals = { ...defaultGlobals, ...globals };
    this.globals = this.initialGlobals;
    if (delta && delta !== DEEPLY_EQUAL) {
      this.updateFromPersisted(delta);
    }
  }
  filterAllowedGlobals(globals) {
    return Object.entries(globals).reduce((acc, [key2, value2]) => {
      if (this.allowedGlobalNames.has(key2)) {
        acc[key2] = value2;
      } else {
        logger.warn(
          `Attempted to set a global (${key2}) that is not defined in initial globals or globalTypes`
        );
      }
      return acc;
    }, {});
  }
  updateFromPersisted(persisted) {
    const allowedUrlGlobals = this.filterAllowedGlobals(persisted);
    this.globals = { ...this.globals, ...allowedUrlGlobals };
  }
  get() {
    return this.globals;
  }
  update(newGlobals) {
    this.globals = { ...this.globals, ...this.filterAllowedGlobals(newGlobals) };
  }
};
var normalizeType = (type) => {
  return typeof type === "string" ? { name: type } : type;
};
var normalizeControl = (control) => typeof control === "string" ? { type: control } : control;
var normalizeInputType = (inputType, key2) => {
  const { type, control, ...rest } = inputType;
  const normalized = {
    name: key2,
    ...rest
  };
  if (type)
    normalized.type = normalizeType(type);
  if (control) {
    normalized.control = normalizeControl(control);
  } else if (control === false) {
    normalized.control = { disable: true };
  }
  return normalized;
};
var normalizeInputTypes = (inputTypes) => (0, import_mapValues.default)(inputTypes, normalizeInputType);
var normalizeArrays = (array) => {
  if (Array.isArray(array))
    return array;
  return array ? [array] : [];
};
var deprecatedStoryAnnotation = dedent`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
var deprecatedStoryAnnotationWarning = (0, import_util_deprecate.default)(() => {
}, deprecatedStoryAnnotation);
function normalizeStory(key2, storyAnnotations, meta) {
  const storyObject = storyAnnotations;
  const userStoryFn = typeof storyAnnotations === "function" ? storyAnnotations : null;
  const { story } = storyObject;
  if (story) {
    logger.debug("deprecated story", story);
    deprecatedStoryAnnotationWarning();
  }
  const exportName = M(key2);
  const name2 = typeof storyObject !== "function" && storyObject.name || storyObject.storyName || story?.name || exportName;
  const decorators = [
    ...normalizeArrays(storyObject.decorators),
    ...normalizeArrays(story?.decorators)
  ];
  const parameters = { ...story?.parameters, ...storyObject.parameters };
  const args2 = { ...story?.args, ...storyObject.args };
  const argTypes = { ...story?.argTypes, ...storyObject.argTypes };
  const loaders = [...normalizeArrays(storyObject.loaders), ...normalizeArrays(story?.loaders)];
  const { render, play, tags = [] } = storyObject;
  const id = parameters.__id || N(meta.id, exportName);
  return {
    moduleExport: storyAnnotations,
    id,
    name: name2,
    tags,
    decorators,
    parameters,
    args: args2,
    argTypes: normalizeInputTypes(argTypes),
    loaders,
    ...render && { render },
    ...userStoryFn && { userStoryFn },
    ...play && { play }
  };
}
function normalizeComponentAnnotations(defaultExport, title = defaultExport.title, importPath) {
  const { id, argTypes } = defaultExport;
  return {
    id: L(id || title),
    ...defaultExport,
    title,
    ...argTypes && { argTypes: normalizeInputTypes(argTypes) },
    parameters: {
      fileName: importPath,
      ...defaultExport.parameters
    }
  };
}
var checkGlobals = (parameters) => {
  const { globals, globalTypes } = parameters;
  if (globals || globalTypes) {
    logger.error(
      "Global args/argTypes can only be set globally",
      JSON.stringify({
        globals,
        globalTypes
      })
    );
  }
};
var checkStorySort = (parameters) => {
  const { options: options2 } = parameters;
  if (options2?.storySort)
    logger.error("The storySort option parameter can only be set globally");
};
var checkDisallowedParameters = (parameters) => {
  if (!parameters)
    return;
  checkGlobals(parameters);
  checkStorySort(parameters);
};
var checkSubcomponents = (meta) => {
  if (meta.subcomponents) {
    deprecate(esm_default`The \`subcomponents\` annotation is deprecated. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block'
    `);
  }
};
function processCSFFile(moduleExports, importPath, title) {
  const { default: defaultExport, __namedExportsOrder, ...namedExports } = moduleExports;
  const meta = normalizeComponentAnnotations(
    defaultExport,
    title,
    importPath
  );
  checkDisallowedParameters(meta.parameters);
  checkSubcomponents(meta);
  const csfFile = { meta, stories: {}, moduleExports };
  Object.keys(namedExports).forEach((key2) => {
    if (G(key2, meta)) {
      const storyMeta = normalizeStory(key2, namedExports[key2], meta);
      checkDisallowedParameters(storyMeta.parameters);
      csfFile.stories[storyMeta.id] = storyMeta;
    }
  });
  return csfFile;
}
var combineParameters = (...parameterSets) => {
  const mergeKeys = {};
  const definedParametersSets = parameterSets.filter(Boolean);
  const combined = definedParametersSets.reduce((acc, parameters) => {
    Object.entries(parameters).forEach(([key2, value2]) => {
      const existing = acc[key2];
      if (Array.isArray(value2) || typeof existing === "undefined") {
        acc[key2] = value2;
      } else if ((0, import_isPlainObject.default)(value2) && (0, import_isPlainObject.default)(existing)) {
        mergeKeys[key2] = true;
      } else if (typeof value2 !== "undefined") {
        acc[key2] = value2;
      }
    });
    return acc;
  }, {});
  Object.keys(mergeKeys).forEach((key2) => {
    const mergeValues = definedParametersSets.filter(Boolean).map((p) => p[key2]).filter((value2) => typeof value2 !== "undefined");
    if (mergeValues.every((value2) => (0, import_isPlainObject.default)(value2))) {
      combined[key2] = combineParameters(...mergeValues);
    } else {
      combined[key2] = mergeValues[mergeValues.length - 1];
    }
  });
  return combined;
};
function decorateStory(storyFn, decorator, bindWithContext) {
  const boundStoryFunction = bindWithContext(storyFn);
  return (context) => decorator(boundStoryFunction, context);
}
function sanitizeStoryContextUpdate({
  componentId,
  title,
  kind,
  id,
  name: name2,
  story,
  parameters,
  initialArgs,
  argTypes,
  ...update
} = {}) {
  return update;
}
function defaultDecorateStory(storyFn, decorators) {
  const contextStore = {};
  const bindWithContext = (decoratedStoryFn) => (update) => {
    if (!contextStore.value)
      throw new Error("Decorated function called without init");
    contextStore.value = {
      ...contextStore.value,
      ...sanitizeStoryContextUpdate(update)
    };
    return decoratedStoryFn(contextStore.value);
  };
  const decoratedWithContextStore = decorators.reduce(
    (story, decorator) => decorateStory(story, decorator, bindWithContext),
    storyFn
  );
  return (context) => {
    contextStore.value = context;
    return decoratedWithContextStore(context);
  };
}
function prepareStory(storyAnnotations, componentAnnotations, projectAnnotations) {
  const { moduleExport, id, name: name2 } = storyAnnotations || {};
  const partialAnnotations = preparePartialAnnotations(
    storyAnnotations,
    componentAnnotations,
    projectAnnotations
  );
  const applyLoaders = async (context) => {
    let updatedContext = { ...context, loaded: {} };
    for (const loaders of [
      ..."__STORYBOOK_TEST_LOADERS__" in scope && Array.isArray(scope.__STORYBOOK_TEST_LOADERS__) ? [scope.__STORYBOOK_TEST_LOADERS__] : [],
      normalizeArrays(projectAnnotations.loaders),
      normalizeArrays(componentAnnotations.loaders),
      normalizeArrays(storyAnnotations.loaders)
    ]) {
      const loadResults = await Promise.all(loaders.map((loader) => loader(updatedContext)));
      const loaded = Object.assign({}, ...loadResults);
      updatedContext = { ...updatedContext, loaded: { ...updatedContext.loaded, ...loaded } };
    }
    return updatedContext;
  };
  const undecoratedStoryFn = (context) => {
    const { passArgsFirst: renderTimePassArgsFirst = true } = context.parameters;
    return renderTimePassArgsFirst ? render(context.args, context) : render(context);
  };
  const { applyDecorators = defaultDecorateStory, runStep } = projectAnnotations;
  const decorators = [
    ...normalizeArrays(storyAnnotations?.decorators),
    ...normalizeArrays(componentAnnotations?.decorators),
    ...normalizeArrays(projectAnnotations?.decorators)
  ];
  const render = storyAnnotations?.userStoryFn || storyAnnotations?.render || componentAnnotations.render || projectAnnotations.render;
  if (!render)
    throw new Error(`No render function available for storyId '${id}'`);
  const decoratedStoryFn = applyHooks(applyDecorators)(undecoratedStoryFn, decorators);
  const unboundStoryFn = (context) => decoratedStoryFn(context);
  const play = storyAnnotations?.play || componentAnnotations.play;
  const playFunction = play && (async (storyContext) => {
    const playFunctionContext = {
      ...storyContext,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      step: (label, play2) => (
        // TODO: We know runStep is defined, we need a proper normalized annotations type
        runStep(label, play2, playFunctionContext)
      )
    };
    return play(playFunctionContext);
  });
  return {
    ...partialAnnotations,
    moduleExport,
    id,
    name: name2,
    story: name2,
    originalStoryFn: render,
    undecoratedStoryFn,
    unboundStoryFn,
    applyLoaders,
    playFunction
  };
}
function prepareMeta(componentAnnotations, projectAnnotations, moduleExport) {
  return {
    ...preparePartialAnnotations(void 0, componentAnnotations, projectAnnotations),
    moduleExport
  };
}
function preparePartialAnnotations(storyAnnotations, componentAnnotations, projectAnnotations) {
  const tags = [...storyAnnotations?.tags || componentAnnotations.tags || [], "story"];
  const parameters = combineParameters(
    projectAnnotations.parameters,
    componentAnnotations.parameters,
    storyAnnotations?.parameters
  );
  const { argTypesEnhancers = [], argsEnhancers = [] } = projectAnnotations;
  const passedArgTypes = combineParameters(
    projectAnnotations.argTypes,
    componentAnnotations.argTypes,
    storyAnnotations?.argTypes
  );
  if (storyAnnotations) {
    const render = storyAnnotations?.userStoryFn || storyAnnotations?.render || componentAnnotations.render || projectAnnotations.render;
    const { passArgsFirst = true } = parameters;
    parameters.__isArgsStory = passArgsFirst && render && render.length > 0;
  }
  const passedArgs = {
    ...projectAnnotations.args,
    ...componentAnnotations.args,
    ...storyAnnotations?.args
  };
  const contextForEnhancers = {
    componentId: componentAnnotations.id,
    title: componentAnnotations.title,
    kind: componentAnnotations.title,
    // Back compat
    id: storyAnnotations?.id || componentAnnotations.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: storyAnnotations?.name || "__meta",
    story: storyAnnotations?.name || "__meta",
    // Back compat
    component: componentAnnotations.component,
    subcomponents: componentAnnotations.subcomponents,
    tags,
    parameters,
    initialArgs: passedArgs,
    argTypes: passedArgTypes
  };
  contextForEnhancers.argTypes = argTypesEnhancers.reduce(
    (accumulatedArgTypes, enhancer) => enhancer({ ...contextForEnhancers, argTypes: accumulatedArgTypes }),
    contextForEnhancers.argTypes
  );
  const initialArgsBeforeEnhancers = { ...passedArgs };
  contextForEnhancers.initialArgs = argsEnhancers.reduce(
    (accumulatedArgs, enhancer) => ({
      ...accumulatedArgs,
      ...enhancer({
        ...contextForEnhancers,
        initialArgs: accumulatedArgs
      })
    }),
    initialArgsBeforeEnhancers
  );
  const { name: name2, story, ...withoutStoryIdentifiers } = contextForEnhancers;
  return withoutStoryIdentifiers;
}
function prepareContext(context) {
  const { args: unmappedArgs } = context;
  let targetedContext = {
    ...context,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if (scope.FEATURES?.argTypeTargetsV7) {
    const argsByTarget = groupArgsByTarget(context);
    targetedContext = {
      ...context,
      allArgs: context.args,
      argsByTarget,
      args: argsByTarget[UNTARGETED] || {}
    };
  }
  const mappedArgs = Object.entries(targetedContext.args).reduce((acc, [key2, val]) => {
    if (!targetedContext.argTypes[key2]?.mapping) {
      acc[key2] = val;
      return acc;
    }
    const mappingFn = (originalValue) => originalValue in targetedContext.argTypes[key2].mapping ? targetedContext.argTypes[key2].mapping[originalValue] : originalValue;
    acc[key2] = Array.isArray(val) ? val.map(mappingFn) : mappingFn(val);
    return acc;
  }, {});
  const includedArgs = Object.entries(mappedArgs).reduce((acc, [key2, val]) => {
    const argType = targetedContext.argTypes[key2] || {};
    if (O(argType, mappedArgs, targetedContext.globals))
      acc[key2] = val;
    return acc;
  }, {});
  return { ...targetedContext, unmappedArgs, args: includedArgs };
}
var inferType = (value2, name2, visited) => {
  const type = typeof value2;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: type };
  }
  if (value2) {
    if (visited.has(value2)) {
      logger.warn(dedent`
        We've detected a cycle in arg '${name2}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `);
      return { name: "other", value: "cyclic object" };
    }
    visited.add(value2);
    if (Array.isArray(value2)) {
      const childType = value2.length > 0 ? inferType(value2[0], name2, new Set(visited)) : { name: "other", value: "unknown" };
      return { name: "array", value: childType };
    }
    const fieldTypes = (0, import_mapValues.default)(value2, (field) => inferType(field, name2, new Set(visited)));
    return { name: "object", value: fieldTypes };
  }
  return { name: "object", value: {} };
};
var inferArgTypes = (context) => {
  const { id, argTypes: userArgTypes = {}, initialArgs = {} } = context;
  const argTypes = (0, import_mapValues.default)(initialArgs, (arg, key2) => ({
    name: key2,
    type: inferType(arg, `${id}.${key2}`, /* @__PURE__ */ new Set())
  }));
  const userArgTypesNames = (0, import_mapValues.default)(userArgTypes, (argType, key2) => ({
    name: key2
  }));
  return combineParameters(argTypes, userArgTypesNames, userArgTypes);
};
inferArgTypes.secondPass = true;
var matches = (name2, descriptor) => Array.isArray(descriptor) ? descriptor.includes(name2) : name2.match(descriptor);
var filterArgTypes = (argTypes, include, exclude) => {
  if (!include && !exclude) {
    return argTypes;
  }
  return argTypes && (0, import_pickBy.default)(argTypes, (argType, key2) => {
    const name2 = argType.name || key2;
    return (!include || matches(name2, include)) && (!exclude || !matches(name2, exclude));
  });
};
var inferControl = (argType, name2, matchers) => {
  const { type, options: options2 } = argType;
  if (!type) {
    return void 0;
  }
  if (matchers.color && matchers.color.test(name2)) {
    const controlType = type.name;
    if (controlType === "string") {
      return { control: { type: "color" } };
    }
    if (controlType !== "enum") {
      logger.warn(
        `Addon controls: Control of type color only supports string, received "${controlType}" instead`
      );
    }
  }
  if (matchers.date && matchers.date.test(name2)) {
    return { control: { type: "date" } };
  }
  switch (type.name) {
    case "array":
      return { control: { type: "object" } };
    case "boolean":
      return { control: { type: "boolean" } };
    case "string":
      return { control: { type: "text" } };
    case "number":
      return { control: { type: "number" } };
    case "enum": {
      const { value: value2 } = type;
      return { control: { type: value2?.length <= 5 ? "radio" : "select" }, options: value2 };
    }
    case "function":
    case "symbol":
      return null;
    default:
      return { control: { type: options2 ? "select" : "object" } };
  }
};
var inferControls = (context) => {
  const {
    argTypes,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    parameters: { __isArgsStory, controls: { include = null, exclude = null, matchers = {} } = {} }
  } = context;
  if (!__isArgsStory)
    return argTypes;
  const filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  const withControls = (0, import_mapValues.default)(filteredArgTypes, (argType, name2) => {
    return argType?.type && inferControl(argType, name2, matchers);
  });
  return combineParameters(withControls, filteredArgTypes);
};
inferControls.secondPass = true;
function normalizeProjectAnnotations({
  argTypes,
  globalTypes,
  argTypesEnhancers,
  decorators,
  loaders,
  ...annotations
}) {
  return {
    ...argTypes && { argTypes: normalizeInputTypes(argTypes) },
    ...globalTypes && { globalTypes: normalizeInputTypes(globalTypes) },
    decorators: normalizeArrays(decorators),
    loaders: normalizeArrays(loaders),
    argTypesEnhancers: [
      ...argTypesEnhancers || [],
      inferArgTypes,
      // inferControls technically should only run if the user is using the controls addon,
      // and so should be added by a preset there. However, as it seems some code relies on controls
      // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
      // compatibility reasons, we will leave this in the store until 7.0
      inferControls
    ],
    ...annotations
  };
}
function composeStepRunners(stepRunners) {
  return async (label, play, playContext) => {
    const composedPlay = stepRunners.reduceRight(
      (innerPlay, stepRunner) => async () => stepRunner(label, innerPlay, playContext),
      async () => play(playContext)
    );
    await composedPlay();
  };
}
function getField(moduleExportList, field) {
  return moduleExportList.map((xs) => xs.default?.[field] ?? xs[field]).filter(Boolean);
}
function getArrayField(moduleExportList, field, options2 = {}) {
  return getField(moduleExportList, field).reduce(
    (a, b2) => options2.reverseFileOrder ? [...b2, ...a] : [...a, ...b2],
    []
  );
}
function getObjectField(moduleExportList, field) {
  return Object.assign({}, ...getField(moduleExportList, field));
}
function getSingletonField(moduleExportList, field) {
  return getField(moduleExportList, field).pop();
}
function composeConfigs(moduleExportList) {
  const allArgTypeEnhancers = getArrayField(moduleExportList, "argTypesEnhancers");
  const stepRunners = getField(moduleExportList, "runStep");
  return {
    parameters: combineParameters(...getField(moduleExportList, "parameters")),
    decorators: getArrayField(moduleExportList, "decorators", {
      reverseFileOrder: !(scope.FEATURES?.legacyDecoratorFileOrder ?? false)
    }),
    args: getObjectField(moduleExportList, "args"),
    argsEnhancers: getArrayField(moduleExportList, "argsEnhancers"),
    argTypes: getObjectField(moduleExportList, "argTypes"),
    argTypesEnhancers: [
      ...allArgTypeEnhancers.filter((e) => !e.secondPass),
      ...allArgTypeEnhancers.filter((e) => e.secondPass)
    ],
    globals: getObjectField(moduleExportList, "globals"),
    globalTypes: getObjectField(moduleExportList, "globalTypes"),
    loaders: getArrayField(moduleExportList, "loaders"),
    render: getSingletonField(moduleExportList, "render"),
    renderToCanvas: getSingletonField(moduleExportList, "renderToCanvas"),
    renderToDOM: getSingletonField(moduleExportList, "renderToDOM"),
    // deprecated
    applyDecorators: getSingletonField(moduleExportList, "applyDecorators"),
    runStep: composeStepRunners(stepRunners)
  };
}
var GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS = composeConfigs([]);
function setProjectAnnotations(projectAnnotations) {
  const annotations = Array.isArray(projectAnnotations) ? projectAnnotations : [projectAnnotations];
  GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS = composeConfigs(annotations);
}
function composeStory(storyAnnotations, componentAnnotations, projectAnnotations = GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS, defaultConfig = {}, exportsName) {
  if (storyAnnotations === void 0) {
    throw new Error("Expected a story but received undefined.");
  }
  componentAnnotations.title = componentAnnotations.title ?? "ComposedStory";
  const normalizedComponentAnnotations = normalizeComponentAnnotations(componentAnnotations);
  const storyName = exportsName || storyAnnotations.storyName || storyAnnotations.story?.name || storyAnnotations.name || "unknown";
  const normalizedStory = normalizeStory(
    storyName,
    storyAnnotations,
    normalizedComponentAnnotations
  );
  const normalizedProjectAnnotations = normalizeProjectAnnotations({
    ...projectAnnotations,
    ...defaultConfig
  });
  const story = prepareStory(
    normalizedStory,
    normalizedComponentAnnotations,
    normalizedProjectAnnotations
  );
  const defaultGlobals = getValuesFromArgTypes(projectAnnotations.globalTypes);
  const composedStory = Object.assign(
    (extraArgs) => {
      const context = {
        ...story,
        hooks: new HooksContext(),
        globals: defaultGlobals,
        args: { ...story.initialArgs, ...extraArgs }
      };
      return story.unboundStoryFn(prepareContext(context));
    },
    {
      storyName,
      args: story.initialArgs,
      play: story.playFunction,
      parameters: story.parameters,
      id: story.id
    }
  );
  return composedStory;
}
function composeStories(storiesImport, globalConfig, composeStoryFn) {
  const { default: meta, __esModule, __namedExportsOrder, ...stories } = storiesImport;
  const composedStories = Object.entries(stories).reduce((storiesMap, [exportsName, story]) => {
    if (!G(exportsName, meta)) {
      return storiesMap;
    }
    const result2 = Object.assign(storiesMap, {
      [exportsName]: composeStoryFn(
        story,
        meta,
        globalConfig,
        exportsName
      )
    });
    return result2;
  }, {});
  return composedStories;
}
var CSF_CACHE_SIZE = 1e3;
var STORY_CACHE_SIZE = 1e4;
var EXTRACT_BATCH_SIZE = 20;
var StoryStore = class {
  constructor() {
    this.getStoriesJsonData = () => {
      const { storyIndex } = this;
      if (!storyIndex)
        throw new Error(`getStoriesJsonData called before initialization`);
      const value2 = this.getSetStoriesPayload();
      const allowedParameters = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      const stories = (0, import_mapValues.default)(value2.stories, (story) => {
        const { importPath } = storyIndex.entries[story.id];
        return {
          ...(0, import_pick.default)(story, ["id", "name", "title"]),
          importPath,
          // These 3 fields were going to be dropped in v7, but instead we will keep them for the
          // 7.x cycle so that v7 Storybooks can be composed successfully in v6 Storybook.
          // In v8 we will (likely) completely drop support for `extract` and `getStoriesJsonData`
          kind: story.title,
          story: story.name,
          parameters: {
            ...(0, import_pick.default)(story.parameters, allowedParameters),
            fileName: importPath
          }
        };
      });
      return {
        v: 3,
        stories
      };
    };
    this.args = new ArgsStore();
    this.hooks = {};
    this.processCSFFileWithCache = (0, import_memoizerific2.default)(CSF_CACHE_SIZE)(processCSFFile);
    this.prepareMetaWithCache = (0, import_memoizerific2.default)(CSF_CACHE_SIZE)(prepareMeta);
    this.prepareStoryWithCache = (0, import_memoizerific2.default)(STORY_CACHE_SIZE)(prepareStory);
    this.initializationPromise = new import_synchronous_promise.SynchronousPromise((resolve) => {
      this.resolveInitializationPromise = resolve;
    });
  }
  setProjectAnnotations(projectAnnotations) {
    this.projectAnnotations = normalizeProjectAnnotations(projectAnnotations);
    const { globals, globalTypes } = projectAnnotations;
    if (this.globals) {
      this.globals.set({ globals, globalTypes });
    } else {
      this.globals = new GlobalsStore({ globals, globalTypes });
    }
  }
  initialize({
    storyIndex,
    importFn,
    cache = false
  }) {
    this.storyIndex = new StoryIndexStore(storyIndex);
    this.importFn = importFn;
    this.resolveInitializationPromise();
    return cache ? this.cacheAllCSFFiles() : import_synchronous_promise.SynchronousPromise.resolve();
  }
  // This means that one of the CSF files has changed.
  // If the `importFn` has changed, we will invalidate both caches.
  // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
  // on whether we've loaded the relevant files yet.
  async onStoriesChanged({
    importFn,
    storyIndex
  }) {
    await this.initializationPromise;
    if (importFn)
      this.importFn = importFn;
    if (storyIndex)
      this.storyIndex.entries = storyIndex.entries;
    if (this.cachedCSFFiles)
      await this.cacheAllCSFFiles();
  }
  // Get an entry from the index, waiting on initialization if necessary
  async storyIdToEntry(storyId) {
    await this.initializationPromise;
    return this.storyIndex.storyIdToEntry(storyId);
  }
  // To load a single CSF file to service a story we need to look up the importPath in the index
  loadCSFFileByStoryId(storyId) {
    if (!this.storyIndex || !this.importFn)
      throw new Error(`loadCSFFileByStoryId called before initialization`);
    const { importPath, title } = this.storyIndex.storyIdToEntry(storyId);
    return this.importFn(importPath).then(
      (moduleExports) => (
        // We pass the title in here as it may have been generated by autoTitle on the server.
        this.processCSFFileWithCache(moduleExports, importPath, title)
      )
    );
  }
  loadAllCSFFiles({ batchSize = EXTRACT_BATCH_SIZE } = {}) {
    if (!this.storyIndex)
      throw new Error(`loadAllCSFFiles called before initialization`);
    const importPaths = Object.entries(this.storyIndex.entries).map(([storyId, { importPath }]) => [
      importPath,
      storyId
    ]);
    const loadInBatches = (remainingImportPaths) => {
      if (remainingImportPaths.length === 0)
        return import_synchronous_promise.SynchronousPromise.resolve([]);
      const csfFilePromiseList = remainingImportPaths.slice(0, batchSize).map(
        ([importPath, storyId]) => this.loadCSFFileByStoryId(storyId).then((csfFile) => ({
          importPath,
          csfFile
        }))
      );
      return import_synchronous_promise.SynchronousPromise.all(csfFilePromiseList).then(
        (firstResults) => loadInBatches(remainingImportPaths.slice(batchSize)).then(
          (restResults) => firstResults.concat(restResults)
        )
      );
    };
    return loadInBatches(importPaths).then(
      (list) => list.reduce((acc, { importPath, csfFile }) => {
        acc[importPath] = csfFile;
        return acc;
      }, {})
    );
  }
  cacheAllCSFFiles() {
    return this.initializationPromise.then(
      () => this.loadAllCSFFiles().then((csfFiles) => {
        this.cachedCSFFiles = csfFiles;
      })
    );
  }
  preparedMetaFromCSFFile({ csfFile }) {
    if (!this.projectAnnotations)
      throw new Error(`storyFromCSFFile called before initialization`);
    const componentAnnotations = csfFile.meta;
    return this.prepareMetaWithCache(
      componentAnnotations,
      this.projectAnnotations,
      csfFile.moduleExports.default
    );
  }
  // Load the CSF file for a story and prepare the story from it and the project annotations.
  async loadStory({ storyId }) {
    await this.initializationPromise;
    const csfFile = await this.loadCSFFileByStoryId(storyId);
    return this.storyFromCSFFile({ storyId, csfFile });
  }
  // This function is synchronous for convenience -- often times if you have a CSF file already
  // it is easier not to have to await `loadStory`.
  storyFromCSFFile({
    storyId,
    csfFile
  }) {
    if (!this.projectAnnotations)
      throw new Error(`storyFromCSFFile called before initialization`);
    const storyAnnotations = csfFile.stories[storyId];
    if (!storyAnnotations) {
      throw new Error(`Didn't find '${storyId}' in CSF file, this is unexpected`);
    }
    const componentAnnotations = csfFile.meta;
    const story = this.prepareStoryWithCache(
      storyAnnotations,
      componentAnnotations,
      this.projectAnnotations
    );
    this.args.setInitial(story);
    this.hooks[story.id] = this.hooks[story.id] || new HooksContext();
    return story;
  }
  // If we have a CSF file we can get all the stories from it synchronously
  componentStoriesFromCSFFile({
    csfFile
  }) {
    if (!this.storyIndex)
      throw new Error(`componentStoriesFromCSFFile called before initialization`);
    return Object.keys(this.storyIndex.entries).filter((storyId) => !!csfFile.stories[storyId]).map((storyId) => this.storyFromCSFFile({ storyId, csfFile }));
  }
  async loadEntry(id) {
    const entry = await this.storyIdToEntry(id);
    const { importFn, storyIndex } = this;
    if (!storyIndex || !importFn)
      throw new Error(`loadEntry called before initialization`);
    const storyImports = entry.type === "docs" ? entry.storiesImports : [];
    const [entryExports, ...csfFiles] = await Promise.all([
      importFn(entry.importPath),
      ...storyImports.map((storyImportPath) => {
        const firstStoryEntry = storyIndex.importPathToEntry(storyImportPath);
        return this.loadCSFFileByStoryId(firstStoryEntry.id);
      })
    ]);
    return { entryExports, csfFiles };
  }
  // A prepared story does not include args, globals or hooks. These are stored in the story store
  // and updated separtely to the (immutable) story.
  getStoryContext(story, { forceInitialArgs = false } = {}) {
    if (!this.globals)
      throw new Error(`getStoryContext called before initialization`);
    return prepareContext({
      ...story,
      args: forceInitialArgs ? story.initialArgs : this.args.get(story.id),
      globals: this.globals.get(),
      hooks: this.hooks[story.id]
    });
  }
  cleanupStory(story) {
    this.hooks[story.id].clean();
  }
  extract(options2 = { includeDocsOnly: false }) {
    if (!this.storyIndex)
      throw new Error(`extract called before initialization`);
    const { cachedCSFFiles } = this;
    if (!cachedCSFFiles)
      throw new Error("Cannot call extract() unless you call cacheAllCSFFiles() first.");
    return Object.entries(this.storyIndex.entries).reduce(
      (acc, [storyId, { type, importPath }]) => {
        if (type === "docs")
          return acc;
        const csfFile = cachedCSFFiles[importPath];
        const story = this.storyFromCSFFile({ storyId, csfFile });
        if (!options2.includeDocsOnly && story.parameters.docsOnly) {
          return acc;
        }
        acc[storyId] = Object.entries(story).reduce(
          (storyAcc, [key2, value2]) => {
            if (key2 === "moduleExport")
              return storyAcc;
            if (typeof value2 === "function") {
              return storyAcc;
            }
            if (Array.isArray(value2)) {
              return Object.assign(storyAcc, { [key2]: value2.slice().sort() });
            }
            return Object.assign(storyAcc, { [key2]: value2 });
          },
          { args: story.initialArgs }
        );
        return acc;
      },
      {}
    );
  }
  getSetStoriesPayload() {
    if (!this.globals)
      throw new Error(`getSetStoriesPayload called before initialization`);
    const stories = this.extract({ includeDocsOnly: true });
    const kindParameters = Object.values(stories).reduce(
      (acc, { title }) => {
        acc[title] = {};
        return acc;
      },
      {}
    );
    return {
      v: 2,
      globals: this.globals.get(),
      globalParameters: {},
      kindParameters,
      stories
    };
  }
  getSetIndexPayload() {
    if (!this.storyIndex)
      throw new Error("getSetIndexPayload called before initialization");
    if (!this.cachedCSFFiles)
      throw new Error("Cannot call getSetIndexPayload() unless you call cacheAllCSFFiles() first");
    const { cachedCSFFiles } = this;
    const stories = this.extract({ includeDocsOnly: true });
    return {
      v: 4,
      entries: Object.fromEntries(
        Object.entries(this.storyIndex.entries).map(([id, entry]) => [
          id,
          stories[id] ? {
            ...entry,
            args: stories[id].initialArgs,
            initialArgs: stories[id].initialArgs,
            argTypes: stories[id].argTypes,
            parameters: stories[id].parameters
          } : {
            ...entry,
            parameters: this.preparedMetaFromCSFFile({
              csfFile: cachedCSFFiles[entry.importPath]
            }).parameters
          }
        ])
      )
    };
  }
  raw() {
    return Object.values(this.extract()).map(({ id }) => this.fromId(id)).filter(Boolean);
  }
  fromId(storyId) {
    if (!this.storyIndex)
      throw new Error(`fromId called before initialization`);
    if (!this.cachedCSFFiles)
      throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
    let importPath;
    try {
      ({ importPath } = this.storyIndex.storyIdToEntry(storyId));
    } catch (err) {
      return null;
    }
    const csfFile = this.cachedCSFFiles[importPath];
    const story = this.storyFromCSFFile({ storyId, csfFile });
    return {
      ...story,
      storyFn: (update) => {
        const context = {
          ...this.getStoryContext(story),
          viewMode: "story"
        };
        return story.unboundStoryFn({ ...context, ...update });
      }
    };
  }
};
function useSharedState(sharedId, defaultState) {
  const channel = addons.getChannel();
  const [lastValue] = channel.last(`${SHARED_STATE_CHANGED}-manager-${sharedId}`) || channel.last(`${SHARED_STATE_SET}-manager-${sharedId}`) || [];
  const [state, setState] = useState(lastValue || defaultState);
  const allListeners = useMemo(
    () => ({
      [`${SHARED_STATE_CHANGED}-manager-${sharedId}`]: (s) => setState(s),
      [`${SHARED_STATE_SET}-manager-${sharedId}`]: (s) => setState(s)
    }),
    [sharedId]
  );
  const emit = useChannel(allListeners, [sharedId]);
  useEffect(() => {
    if (defaultState !== void 0 && !lastValue) {
      emit(`${SHARED_STATE_SET}-client-${sharedId}`, defaultState);
    }
  }, [sharedId]);
  return [
    state,
    (s) => {
      setState(s);
      emit(`${SHARED_STATE_CHANGED}-client-${sharedId}`, s);
    }
  ];
}
function useAddonState(addonId, defaultState) {
  return useSharedState(addonId, defaultState);
}
function slash(path) {
  const isExtendedLengthPath = path.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, "/");
}
var stripExtension = (path) => {
  let parts = [...path];
  const last = parts[parts.length - 1];
  const dotIndex = last.indexOf(".");
  const stripped = dotIndex > 0 ? last.substr(0, dotIndex) : last;
  parts[parts.length - 1] = stripped;
  const [first, ...rest] = parts;
  if (first === "") {
    parts = rest;
  }
  return parts;
};
var indexRe = /^index$/i;
var removeRedundantFilename = (paths) => {
  let prevVal;
  return paths.filter((val, index) => {
    if (index === paths.length - 1 && (val === prevVal || indexRe.test(val))) {
      return false;
    }
    prevVal = val;
    return true;
  });
};
function pathJoin(paths) {
  const slashes = new RegExp("/{1,}", "g");
  return paths.join("/").replace(slashes, "/");
}
var userOrAutoTitleFromSpecifier = (fileName, entry, userTitle) => {
  const { directory, importPathMatcher, titlePrefix = "" } = entry || {};
  if (typeof fileName === "number") {
    once.warn(dedent`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
  }
  const normalizedFileName = slash(String(fileName));
  if (importPathMatcher.exec(normalizedFileName)) {
    if (!userTitle) {
      const suffix = normalizedFileName.replace(directory, "");
      const titleAndSuffix = slash(pathJoin([titlePrefix, suffix]));
      let path = titleAndSuffix.split("/");
      path = stripExtension(path);
      path = removeRedundantFilename(path);
      return path.join("/");
    }
    if (!titlePrefix) {
      return userTitle;
    }
    return slash(pathJoin([titlePrefix, userTitle]));
  }
  return void 0;
};
var userOrAutoTitle = (fileName, storiesEntries, userTitle) => {
  for (let i = 0; i < storiesEntries.length; i += 1) {
    const title = userOrAutoTitleFromSpecifier(fileName, storiesEntries[i], userTitle);
    if (title)
      return title;
  }
  return userTitle || void 0;
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var storySort = (options2 = {}) => (a, b2) => {
  if (a.title === b2.title && !options2.includeNames) {
    return 0;
  }
  const method = options2.method || "configure";
  let order = options2.order || [];
  const storyTitleA = a.title.trim().split(STORY_KIND_PATH_SEPARATOR);
  const storyTitleB = b2.title.trim().split(STORY_KIND_PATH_SEPARATOR);
  if (options2.includeNames) {
    storyTitleA.push(a.name);
    storyTitleB.push(b2.name);
  }
  let depth = 0;
  while (storyTitleA[depth] || storyTitleB[depth]) {
    if (!storyTitleA[depth]) {
      return -1;
    }
    if (!storyTitleB[depth]) {
      return 1;
    }
    const nameA = storyTitleA[depth];
    const nameB = storyTitleB[depth];
    if (nameA !== nameB) {
      let indexA = order.indexOf(nameA);
      let indexB = order.indexOf(nameB);
      const indexWildcard = order.indexOf("*");
      if (indexA !== -1 || indexB !== -1) {
        if (indexA === -1) {
          if (indexWildcard !== -1) {
            indexA = indexWildcard;
          } else {
            indexA = order.length;
          }
        }
        if (indexB === -1) {
          if (indexWildcard !== -1) {
            indexB = indexWildcard;
          } else {
            indexB = order.length;
          }
        }
        return indexA - indexB;
      }
      if (method === "configure") {
        return 0;
      }
      return nameA.localeCompare(nameB, options2.locales ? options2.locales : void 0, {
        numeric: true,
        sensitivity: "accent"
      });
    }
    let index = order.indexOf(nameA);
    if (index === -1)
      index = order.indexOf("*");
    order = index !== -1 && Array.isArray(order[index + 1]) ? order[index + 1] : [];
    depth += 1;
  }
  return 0;
};
var sortStoriesCommon = (stories, storySortParameter, fileNameOrder) => {
  if (storySortParameter) {
    let sortFn;
    if (typeof storySortParameter === "function") {
      sortFn = storySortParameter;
    } else {
      sortFn = storySort(storySortParameter);
    }
    stories.sort(sortFn);
  } else {
    stories.sort(
      (s1, s2) => fileNameOrder.indexOf(s1.importPath) - fileNameOrder.indexOf(s2.importPath)
    );
  }
  return stories;
};
var sortStoriesV7 = (stories, storySortParameter, fileNameOrder) => {
  try {
    return sortStoriesCommon(stories, storySortParameter, fileNameOrder);
  } catch (err) {
    throw new Error(dedent`
    Error sorting stories with sort parameter ${storySortParameter}:

    > ${err.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
  }
};
var toIndexEntry = (story) => {
  const { id, title, name: name2, parameters, type } = story;
  return { id, title, name: name2, importPath: parameters.fileName, type };
};
var sortStoriesV6 = (stories, storySortParameter, fileNameOrder) => {
  if (storySortParameter && typeof storySortParameter === "function") {
    stories.sort(storySortParameter);
    return stories.map((s) => toIndexEntry(s[1]));
  }
  const storiesV7 = stories.map((s) => toIndexEntry(s[1]));
  return sortStoriesCommon(
    storiesV7,
    storySortParameter,
    fileNameOrder
  );
};

// ../preview-api/dist/chunk-6GUQRBD2.mjs
var import_synchronous_promise2 = __toESM(require_synchronous_promise(), 1);
var import_qs2 = __toESM(require_lib(), 1);
var AUTODOCS_TAG = "autodocs";
var STORIES_MDX_TAG = "stories-mdx";
var StoryStoreFacade = class {
  constructor() {
    this.projectAnnotations = {
      loaders: [],
      decorators: [],
      parameters: {},
      argsEnhancers: [],
      argTypesEnhancers: [],
      args: {},
      argTypes: {}
    };
    this.entries = {};
    this.csfExports = {};
  }
  // This doesn't actually import anything because the client-api loads fully
  // on startup, but this is a shim after all.
  importFn(path) {
    return import_synchronous_promise2.SynchronousPromise.resolve().then(() => {
      const moduleExports = this.csfExports[path];
      if (!moduleExports)
        throw new Error(`Unknown path: ${path}`);
      return moduleExports;
    });
  }
  getStoryIndex(store) {
    const fileNameOrder = Object.keys(this.csfExports);
    const storySortParameter = this.projectAnnotations.parameters?.options?.storySort;
    const storyEntries = Object.entries(this.entries);
    const sortableV6 = storyEntries.map(([storyId, { type, importPath, ...entry }]) => {
      const exports = this.csfExports[importPath];
      const csfFile = store.processCSFFileWithCache(
        exports,
        importPath,
        exports.default.title
      );
      let storyLike;
      if (type === "story") {
        storyLike = store.storyFromCSFFile({ storyId, csfFile });
      } else {
        storyLike = {
          ...entry,
          story: entry.name,
          kind: entry.title,
          componentId: N(entry.componentId || entry.title),
          parameters: { fileName: importPath }
        };
      }
      return [
        storyId,
        storyLike,
        csfFile.meta.parameters,
        this.projectAnnotations.parameters || {}
      ];
    });
    let sortedV7;
    try {
      sortedV7 = sortStoriesV6(sortableV6, storySortParameter, fileNameOrder);
    } catch (err) {
      if (typeof storySortParameter === "function") {
        throw new Error(dedent`
          Error sorting stories with sort parameter ${storySortParameter}:

          > ${err.message}
          
          Are you using a V7-style sort function in V6 compatibility mode?
          
          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
        `);
      }
      throw err;
    }
    const entries = sortedV7.reduce((acc, s) => {
      acc[s.id] = this.entries[s.id];
      return acc;
    }, {});
    return { v: 4, entries };
  }
  clearFilenameExports(fileName) {
    if (!this.csfExports[fileName]) {
      return;
    }
    Object.entries(this.entries).forEach(([id, { importPath }]) => {
      if (importPath === fileName) {
        delete this.entries[id];
      }
    });
    this.csfExports[fileName] = {};
  }
  // NOTE: we could potentially share some of this code with the stories.json generation
  addStoriesFromExports(fileName, fileExports) {
    if (fileName.match(/\.mdx$/) && !fileName.match(/\.stories\.mdx$/)) {
      if (scope.FEATURES?.storyStoreV7MdxErrors !== false) {
        throw new Error(dedent`
        Cannot index \`.mdx\` file (\`${fileName}\`) in \`storyStoreV7: false\` mode.

        The legacy story store does not support new-style \`.mdx\` files. If the file above
        is not intended to be indexed (i.e. displayed as an entry in the sidebar), either
        exclude it from your \`stories\` glob, or add <Meta isTemplate /> to it.
        
        If you wanted to index the file, you'll need to name it \`stories.mdx\` and stick to the
        legacy (6.x) MDX API, or use the new store.`);
      }
    }
    if (this.csfExports[fileName] === fileExports) {
      return;
    }
    this.clearFilenameExports(fileName);
    const { default: defaultExport, __namedExportsOrder, ...namedExports } = fileExports;
    let { id: componentId, title, tags: componentTags = [] } = defaultExport || {};
    const specifiers = (scope.STORIES || []).map(
      (specifier) => ({
        ...specifier,
        importPathMatcher: new RegExp(specifier.importPathMatcher)
      })
    );
    title = userOrAutoTitle(fileName, specifiers, title);
    if (!title) {
      logger.info(
        `Unexpected default export without title in '${fileName}': ${JSON.stringify(
          fileExports.default
        )}`
      );
      return;
    }
    this.csfExports[fileName] = {
      ...fileExports,
      default: { ...defaultExport, title }
    };
    let sortedExports = namedExports;
    if (Array.isArray(__namedExportsOrder)) {
      sortedExports = {};
      __namedExportsOrder.forEach((name2) => {
        const namedExport = namedExports[name2];
        if (namedExport)
          sortedExports[name2] = namedExport;
      });
    }
    const storyExports = Object.entries(sortedExports).filter(
      ([key2]) => G(key2, defaultExport)
    );
    const docsOptions = scope.DOCS_OPTIONS || {};
    const { autodocs } = docsOptions;
    const componentAutodocs = componentTags.includes(AUTODOCS_TAG);
    const autodocsOptedIn = autodocs === true || autodocs === "tag" && componentAutodocs;
    if (storyExports.length) {
      if (componentTags.includes(STORIES_MDX_TAG) || autodocsOptedIn) {
        const name2 = docsOptions.defaultName;
        const docsId = N(componentId || title, name2);
        this.entries[docsId] = {
          type: "docs",
          id: docsId,
          title,
          name: name2,
          importPath: fileName,
          ...componentId && { componentId },
          tags: [
            ...componentTags,
            "docs",
            ...autodocsOptedIn && !componentAutodocs ? [AUTODOCS_TAG] : []
          ],
          storiesImports: []
        };
      }
    }
    storyExports.forEach(([key2, storyExport]) => {
      const exportName = M(key2);
      const id = storyExport.parameters?.__id || N(componentId || title, exportName);
      const name2 = typeof storyExport !== "function" && storyExport.name || storyExport.storyName || storyExport.story?.name || exportName;
      if (!storyExport.parameters?.docsOnly) {
        this.entries[id] = {
          type: "story",
          id,
          name: name2,
          title,
          importPath: fileName,
          ...componentId && { componentId },
          tags: [...storyExport.tags || componentTags, "story"]
        };
      }
    });
  }
};
var warningAlternatives = {
  addDecorator: `Instead, use \`export const decorators = [];\` in your \`preview.js\`.`,
  addParameters: `Instead, use \`export const parameters = {};\` in your \`preview.js\`.`,
  addLoader: `Instead, use \`export const loaders = [];\` in your \`preview.js\`.`,
  addArgs: "",
  addArgTypes: "",
  addArgsEnhancer: "",
  addArgTypesEnhancer: "",
  addStepRunner: "",
  getGlobalRender: "",
  setGlobalRender: ""
};
var checkMethod = (method) => {
  if (scope.FEATURES?.storyStoreV7) {
    throw new Error(
      dedent`You cannot use \`${method}\` with the new Story Store.

      ${warningAlternatives[method]}`
    );
  }
  if (!scope.__STORYBOOK_CLIENT_API__) {
    throw new Error(`Singleton client API not yet initialized, cannot call \`${method}\`.`);
  }
};
var addDecorator = (decorator) => {
  checkMethod("addDecorator");
  scope.__STORYBOOK_CLIENT_API__?.addDecorator(decorator);
};
var addParameters = (parameters) => {
  checkMethod("addParameters");
  scope.__STORYBOOK_CLIENT_API__?.addParameters(parameters);
};
var addLoader = (loader) => {
  checkMethod("addLoader");
  scope.__STORYBOOK_CLIENT_API__?.addLoader(loader);
};
var addArgs = (args2) => {
  checkMethod("addArgs");
  scope.__STORYBOOK_CLIENT_API__?.addArgs(args2);
};
var addArgTypes = (argTypes) => {
  checkMethod("addArgTypes");
  scope.__STORYBOOK_CLIENT_API__?.addArgTypes(argTypes);
};
var addArgsEnhancer = (enhancer) => {
  checkMethod("addArgsEnhancer");
  scope.__STORYBOOK_CLIENT_API__?.addArgsEnhancer(enhancer);
};
var addArgTypesEnhancer = (enhancer) => {
  checkMethod("addArgTypesEnhancer");
  scope.__STORYBOOK_CLIENT_API__?.addArgTypesEnhancer(enhancer);
};
var addStepRunner = (stepRunner) => {
  checkMethod("addStepRunner");
  scope.__STORYBOOK_CLIENT_API__?.addStepRunner(stepRunner);
};
var setGlobalRender = (render) => {
  checkMethod("setGlobalRender");
  if (scope.__STORYBOOK_CLIENT_API__) {
    scope.__STORYBOOK_CLIENT_API__.facade.projectAnnotations.render = render;
  }
};
var invalidStoryTypes = /* @__PURE__ */ new Set(["string", "number", "boolean", "symbol"]);
var ClientApi = class {
  constructor({ storyStore } = {}) {
    this.lastFileName = 0;
    this.addDecorator = (decorator) => {
      this.facade.projectAnnotations.decorators?.push(decorator);
    };
    this.addParameters = ({
      globals,
      globalTypes,
      ...parameters
    }) => {
      this.facade.projectAnnotations.parameters = combineParameters(
        this.facade.projectAnnotations.parameters,
        parameters
      );
      if (globals) {
        this.facade.projectAnnotations.globals = {
          ...this.facade.projectAnnotations.globals,
          ...globals
        };
      }
      if (globalTypes) {
        this.facade.projectAnnotations.globalTypes = {
          ...this.facade.projectAnnotations.globalTypes,
          ...normalizeInputTypes(globalTypes)
        };
      }
    };
    this.addStepRunner = (stepRunner) => {
      this.facade.projectAnnotations.runStep = composeStepRunners(
        [this.facade.projectAnnotations.runStep, stepRunner].filter(
          Boolean
        )
      );
    };
    this.addLoader = (loader) => {
      this.facade.projectAnnotations.loaders?.push(loader);
    };
    this.addArgs = (args2) => {
      this.facade.projectAnnotations.args = {
        ...this.facade.projectAnnotations.args,
        ...args2
      };
    };
    this.addArgTypes = (argTypes) => {
      this.facade.projectAnnotations.argTypes = {
        ...this.facade.projectAnnotations.argTypes,
        ...normalizeInputTypes(argTypes)
      };
    };
    this.addArgsEnhancer = (enhancer) => {
      this.facade.projectAnnotations.argsEnhancers?.push(enhancer);
    };
    this.addArgTypesEnhancer = (enhancer) => {
      this.facade.projectAnnotations.argTypesEnhancers?.push(enhancer);
    };
    this._addedExports = {};
    this.storiesOf = (kind, m2) => {
      if (!kind && typeof kind !== "string") {
        throw new Error("Invalid or missing kind provided for stories, should be a string");
      }
      if (!m2) {
        logger.warn(
          `Missing 'module' parameter for story with a kind of '${kind}'. It will break your HMR`
        );
      }
      if (m2) {
        const proto = Object.getPrototypeOf(m2);
        if (proto.exports && proto.exports.default) {
          logger.error(
            `Illegal mix of CSF default export and storiesOf calls in a single file: ${proto.i}`
          );
        }
      }
      const baseFilename = m2 && m2.id ? `${m2.id}` : (this.lastFileName++).toString();
      let fileName = baseFilename;
      let i = 1;
      while (this._addedExports[fileName]) {
        i += 1;
        fileName = `${baseFilename}-${i}`;
      }
      if (m2 && m2.hot && m2.hot.accept) {
        m2.hot.accept();
        m2.hot.dispose(() => {
          this.facade.clearFilenameExports(fileName);
          delete this._addedExports[fileName];
          setTimeout(() => {
            this._loadAddedExports();
            this.onImportFnChanged?.({ importFn: this.importFn.bind(this) });
          }, 0);
        });
      }
      let hasAdded = false;
      const api = {
        kind: kind.toString(),
        add: () => api,
        addDecorator: () => api,
        addLoader: () => api,
        addParameters: () => api
      };
      Object.keys(this.addons).forEach((name2) => {
        const addon = this.addons[name2];
        api[name2] = (...args2) => {
          addon.apply(api, args2);
          return api;
        };
      });
      const meta = {
        id: L(kind),
        title: kind,
        decorators: [],
        loaders: [],
        parameters: {}
      };
      this._addedExports[fileName] = { default: meta };
      let counter = 0;
      api.add = (storyName, storyFn, parameters = {}) => {
        hasAdded = true;
        if (typeof storyName !== "string") {
          throw new Error(`Invalid or missing storyName provided for a "${kind}" story.`);
        }
        if (!storyFn || Array.isArray(storyFn) || invalidStoryTypes.has(typeof storyFn)) {
          throw new Error(
            `Cannot load story "${storyName}" in "${kind}" due to invalid format. Storybook expected a function/object but received ${typeof storyFn} instead.`
          );
        }
        const { decorators, loaders, component, args: args2, argTypes, ...storyParameters } = parameters;
        const storyId = parameters.__id || N(kind, storyName);
        const csfExports = this._addedExports[fileName];
        csfExports[`story${counter}`] = {
          name: storyName,
          parameters: { fileName, __id: storyId, ...storyParameters },
          decorators,
          loaders,
          args: args2,
          argTypes,
          component,
          render: storyFn
        };
        counter += 1;
        return api;
      };
      api.addDecorator = (decorator) => {
        if (hasAdded)
          throw new Error(`You cannot add a decorator after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
        meta.decorators?.push(decorator);
        return api;
      };
      api.addLoader = (loader) => {
        if (hasAdded)
          throw new Error(`You cannot add a loader after the first story for a kind.`);
        meta.loaders?.push(loader);
        return api;
      };
      api.addParameters = ({ component, args: args2, argTypes, tags, ...parameters }) => {
        if (hasAdded)
          throw new Error(`You cannot add parameters after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
        meta.parameters = combineParameters(meta.parameters, parameters);
        if (component)
          meta.component = component;
        if (args2)
          meta.args = { ...meta.args, ...args2 };
        if (argTypes)
          meta.argTypes = { ...meta.argTypes, ...argTypes };
        if (tags)
          meta.tags = tags;
        return api;
      };
      return api;
    };
    this.raw = () => {
      return this.storyStore?.raw();
    };
    this.facade = new StoryStoreFacade();
    this.addons = {};
    this.storyStore = storyStore;
  }
  importFn(path) {
    return this.facade.importFn(path);
  }
  getStoryIndex() {
    if (!this.storyStore) {
      throw new Error("Cannot get story index before setting storyStore");
    }
    return this.facade.getStoryIndex(this.storyStore);
  }
  _loadAddedExports() {
    Object.entries(this._addedExports).forEach(
      ([fileName, fileExports]) => this.facade.addStoriesFromExports(fileName, fileExports)
    );
  }
  // @deprecated
  get _storyStore() {
    return this.storyStore;
  }
};
var getQueryParams = () => {
  const { document: document4 } = scope;
  if (document4 && document4.location && document4.location.search) {
    return (0, import_qs2.parse)(document4.location.search, { ignoreQueryPrefix: true });
  }
  return {};
};
var getQueryParam = (key2) => {
  const params = getQueryParams();
  return params[key2];
};

// ../preview-api/dist/chunk-5OCX4BBU.mjs
var import_synchronous_promise3 = __toESM(require_synchronous_promise(), 1);
var import_qs3 = __toESM(require_lib(), 1);
var import_isPlainObject2 = __toESM(require_isPlainObject(), 1);
var require_entities = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});
var require_legacy = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
  }
});
var require_xml = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json"(exports, module) {
    module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});
var require_decode = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json"(exports, module) {
    module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});
var require_decode_codepoint = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js"(exports) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require_decode());
    var fromCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      }
    );
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "\uFFFD";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      return fromCodePoint(codePoint);
    }
    exports.default = decodeCodePoint;
  }
});
var require_decode2 = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/decode.js"(exports) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    exports.decodeXML = getStrictDecoder(xml_json_1.default);
    exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map2) {
      var replace = getReplacer(map2);
      return function(str) {
        return String(str).replace(strictEntityRe, replace);
      };
    }
    var sorter = function(a, b2) {
      return a < b2 ? 1 : -1;
    };
    exports.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
          keys[i] += ";?";
          j++;
        } else {
          keys[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace = getReplacer(entities_json_1.default);
      function replacer3(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace(str);
      }
      return function(str) {
        return String(str).replace(re, replacer3);
      };
    }();
    function getReplacer(map2) {
      return function replace(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map2[str.slice(1, -1)] || str;
      };
    }
  }
});
var require_encode = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/encode.js"(exports) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports.encodeXML = getASCIIEncoder(inverseXML);
    var entities_json_1 = __importDefault(require_entities());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name2) {
        inverse[obj[name2]] = "&" + name2 + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start2 = 0; start2 < single.length - 1; start2++) {
        var end = start2;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start2;
        if (count < 3)
          continue;
        single.splice(start2, count, single[start2] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var getCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function(str) {
          return str.codePointAt(0);
        }
      ) : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c2) {
          return (c2.charCodeAt(0) - 55296) * 1024 + c2.charCodeAt(1) - 56320 + 65536;
        }
      )
    );
    function singleCharReplacer(c2) {
      return "&#x" + (c2.length > 1 ? getCodePoint(c2) : c2.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name2) {
          return inverse[name2];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
    function escape2(data) {
      return data.replace(reEscapeChars, singleCharReplacer);
    }
    exports.escape = escape2;
    function escapeUTF8(data) {
      return data.replace(xmlReplacer, singleCharReplacer);
    }
    exports.escapeUTF8 = escapeUTF8;
    function getASCIIEncoder(obj) {
      return function(data) {
        return data.replace(reEscapeChars, function(c2) {
          return obj[c2] || singleCharReplacer(c2);
        });
      };
    }
  }
});
var require_lib2 = __commonJS3({
  "../../node_modules/ansi-to-html/node_modules/entities/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = require_decode2();
    var encode_1 = require_encode();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode;
    var encode_2 = require_encode();
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = require_decode2();
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  }
});
var require_ansi_to_html = __commonJS3({
  "../../node_modules/ansi-to-html/lib/ansi_to_html.js"(exports, module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _createForOfIteratorHelper(o) {
      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var it, normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = o[Symbol.iterator]();
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f3() {
        try {
          if (!normalCompletion && it["return"] != null)
            it["return"]();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var entities = require_lib2();
    var defaults = {
      fg: "#FFF",
      bg: "#000",
      newline: false,
      escapeXML: false,
      stream: false,
      colors: getDefaultColors()
    };
    function getDefaultColors() {
      var colors = {
        0: "#000",
        1: "#A00",
        2: "#0A0",
        3: "#A50",
        4: "#00A",
        5: "#A0A",
        6: "#0AA",
        7: "#AAA",
        8: "#555",
        9: "#F55",
        10: "#5F5",
        11: "#FF5",
        12: "#55F",
        13: "#F5F",
        14: "#5FF",
        15: "#FFF"
      };
      range(0, 5).forEach(function(red) {
        range(0, 5).forEach(function(green) {
          range(0, 5).forEach(function(blue) {
            return setStyleColor(red, green, blue, colors);
          });
        });
      });
      range(0, 23).forEach(function(gray) {
        var c2 = gray + 232;
        var l = toHexString(gray * 10 + 8);
        colors[c2] = "#" + l + l + l;
      });
      return colors;
    }
    function setStyleColor(red, green, blue, colors) {
      var c2 = 16 + red * 36 + green * 6 + blue;
      var r = red > 0 ? red * 40 + 55 : 0;
      var g = green > 0 ? green * 40 + 55 : 0;
      var b2 = blue > 0 ? blue * 40 + 55 : 0;
      colors[c2] = toColorHexString([r, g, b2]);
    }
    function toHexString(num) {
      var str = num.toString(16);
      while (str.length < 2) {
        str = "0" + str;
      }
      return str;
    }
    function toColorHexString(ref) {
      var results = [];
      var _iterator = _createForOfIteratorHelper(ref), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var r = _step.value;
          results.push(toHexString(r));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return "#" + results.join("");
    }
    function generateOutput(stack, token, data, options2) {
      var result2;
      if (token === "text") {
        result2 = pushText(data, options2);
      } else if (token === "display") {
        result2 = handleDisplay(stack, data, options2);
      } else if (token === "xterm256") {
        result2 = pushForegroundColor(stack, options2.colors[data]);
      } else if (token === "rgb") {
        result2 = handleRgb(stack, data);
      }
      return result2;
    }
    function handleRgb(stack, data) {
      data = data.substring(2).slice(0, -1);
      var operation = +data.substr(0, 2);
      var color = data.substring(5).split(";");
      var rgb = color.map(function(value2) {
        return ("0" + Number(value2).toString(16)).substr(-2);
      }).join("");
      return pushStyle(stack, (operation === 38 ? "color:#" : "background-color:#") + rgb);
    }
    function handleDisplay(stack, code, options2) {
      code = parseInt(code, 10);
      var codeMap = {
        "-1": function _() {
          return "<br/>";
        },
        0: function _() {
          return stack.length && resetStyles(stack);
        },
        1: function _() {
          return pushTag(stack, "b");
        },
        3: function _() {
          return pushTag(stack, "i");
        },
        4: function _() {
          return pushTag(stack, "u");
        },
        8: function _() {
          return pushStyle(stack, "display:none");
        },
        9: function _() {
          return pushTag(stack, "strike");
        },
        22: function _() {
          return pushStyle(stack, "font-weight:normal;text-decoration:none;font-style:normal");
        },
        23: function _() {
          return closeTag(stack, "i");
        },
        24: function _() {
          return closeTag(stack, "u");
        },
        39: function _() {
          return pushForegroundColor(stack, options2.fg);
        },
        49: function _() {
          return pushBackgroundColor(stack, options2.bg);
        },
        53: function _() {
          return pushStyle(stack, "text-decoration:overline");
        }
      };
      var result2;
      if (codeMap[code]) {
        result2 = codeMap[code]();
      } else if (4 < code && code < 7) {
        result2 = pushTag(stack, "blink");
      } else if (29 < code && code < 38) {
        result2 = pushForegroundColor(stack, options2.colors[code - 30]);
      } else if (39 < code && code < 48) {
        result2 = pushBackgroundColor(stack, options2.colors[code - 40]);
      } else if (89 < code && code < 98) {
        result2 = pushForegroundColor(stack, options2.colors[8 + (code - 90)]);
      } else if (99 < code && code < 108) {
        result2 = pushBackgroundColor(stack, options2.colors[8 + (code - 100)]);
      }
      return result2;
    }
    function resetStyles(stack) {
      var stackClone = stack.slice(0);
      stack.length = 0;
      return stackClone.reverse().map(function(tag) {
        return "</" + tag + ">";
      }).join("");
    }
    function range(low, high) {
      var results = [];
      for (var j = low; j <= high; j++) {
        results.push(j);
      }
      return results;
    }
    function notCategory(category) {
      return function(e) {
        return (category === null || e.category !== category) && category !== "all";
      };
    }
    function categoryForCode(code) {
      code = parseInt(code, 10);
      var result2 = null;
      if (code === 0) {
        result2 = "all";
      } else if (code === 1) {
        result2 = "bold";
      } else if (2 < code && code < 5) {
        result2 = "underline";
      } else if (4 < code && code < 7) {
        result2 = "blink";
      } else if (code === 8) {
        result2 = "hide";
      } else if (code === 9) {
        result2 = "strike";
      } else if (29 < code && code < 38 || code === 39 || 89 < code && code < 98) {
        result2 = "foreground-color";
      } else if (39 < code && code < 48 || code === 49 || 99 < code && code < 108) {
        result2 = "background-color";
      }
      return result2;
    }
    function pushText(text, options2) {
      if (options2.escapeXML) {
        return entities.encodeXML(text);
      }
      return text;
    }
    function pushTag(stack, tag, style) {
      if (!style) {
        style = "";
      }
      stack.push(tag);
      return "<".concat(tag).concat(style ? ' style="'.concat(style, '"') : "", ">");
    }
    function pushStyle(stack, style) {
      return pushTag(stack, "span", style);
    }
    function pushForegroundColor(stack, color) {
      return pushTag(stack, "span", "color:" + color);
    }
    function pushBackgroundColor(stack, color) {
      return pushTag(stack, "span", "background-color:" + color);
    }
    function closeTag(stack, style) {
      var last;
      if (stack.slice(-1)[0] === style) {
        last = stack.pop();
      }
      if (last) {
        return "</" + style + ">";
      }
    }
    function tokenize(text, options2, callback) {
      var ansiMatch = false;
      var ansiHandler = 3;
      function remove() {
        return "";
      }
      function removeXterm256(m2, g1) {
        callback("xterm256", g1);
        return "";
      }
      function newline(m2) {
        if (options2.newline) {
          callback("display", -1);
        } else {
          callback("text", m2);
        }
        return "";
      }
      function ansiMess(m2, g1) {
        ansiMatch = true;
        if (g1.trim().length === 0) {
          g1 = "0";
        }
        g1 = g1.trimRight(";").split(";");
        var _iterator2 = _createForOfIteratorHelper(g1), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var g = _step2.value;
            callback("display", g);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return "";
      }
      function realText(m2) {
        callback("text", m2);
        return "";
      }
      function rgb(m2) {
        callback("rgb", m2);
        return "";
      }
      var tokens = [{
        pattern: /^\x08+/,
        sub: remove
      }, {
        pattern: /^\x1b\[[012]?K/,
        sub: remove
      }, {
        pattern: /^\x1b\[\(B/,
        sub: remove
      }, {
        pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
        sub: rgb
      }, {
        pattern: /^\x1b\[38;5;(\d+)m/,
        sub: removeXterm256
      }, {
        pattern: /^\n/,
        sub: newline
      }, {
        pattern: /^\r+\n/,
        sub: newline
      }, {
        pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
        sub: ansiMess
      }, {
        // CSI n J
        // ED - Erase in Display Clears part of the screen.
        // If n is 0 (or missing), clear from cursor to end of screen.
        // If n is 1, clear from cursor to beginning of the screen.
        // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
        // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
        //   (this feature was added for xterm and is supported by other terminal applications).
        pattern: /^\x1b\[\d?J/,
        sub: remove
      }, {
        // CSI n ; m f
        // HVP - Horizontal Vertical Position Same as CUP
        pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
        sub: remove
      }, {
        // catch-all for CSI sequences?
        pattern: /^\x1b\[?[\d;]{0,3}/,
        sub: remove
      }, {
        /**
         * extracts real text - not containing:
         * - `\x1b' - ESC - escape (Ascii 27)
         * - '\x08' - BS - backspace (Ascii 8)
         * - `\n` - Newline - linefeed (LF) (ascii 10)
         * - `\r` - Windows Carriage Return (CR)
         */
        pattern: /^(([^\x1b\x08\r\n])+)/,
        sub: realText
      }];
      function process2(handler2, i2) {
        if (i2 > ansiHandler && ansiMatch) {
          return;
        }
        ansiMatch = false;
        text = text.replace(handler2.pattern, handler2.sub);
      }
      var results1 = [];
      var _text = text, length = _text.length;
      outer:
        while (length > 0) {
          for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
            var handler = tokens[i];
            process2(handler, i);
            if (text.length !== length) {
              length = text.length;
              continue outer;
            }
          }
          if (text.length === length) {
            break;
          }
          results1.push(0);
          length = text.length;
        }
      return results1;
    }
    function updateStickyStack(stickyStack, token, data) {
      if (token !== "text") {
        stickyStack = stickyStack.filter(notCategory(categoryForCode(data)));
        stickyStack.push({
          token,
          data,
          category: categoryForCode(data)
        });
      }
      return stickyStack;
    }
    var Filter = /* @__PURE__ */ function() {
      function Filter2(options2) {
        _classCallCheck(this, Filter2);
        options2 = options2 || {};
        if (options2.colors) {
          options2.colors = Object.assign({}, defaults.colors, options2.colors);
        }
        this.options = Object.assign({}, defaults, options2);
        this.stack = [];
        this.stickyStack = [];
      }
      _createClass(Filter2, [{
        key: "toHtml",
        value: function toHtml(input) {
          var _this = this;
          input = typeof input === "string" ? [input] : input;
          var stack = this.stack, options2 = this.options;
          var buf = [];
          this.stickyStack.forEach(function(element) {
            var output = generateOutput(stack, element.token, element.data, options2);
            if (output) {
              buf.push(output);
            }
          });
          tokenize(input.join(""), options2, function(token, data) {
            var output = generateOutput(stack, token, data, options2);
            if (output) {
              buf.push(output);
            }
            if (options2.stream) {
              _this.stickyStack = updateStickyStack(_this.stickyStack, token, data);
            }
          });
          if (stack.length) {
            buf.push(resetStyles(stack));
          }
          return buf.join("");
        }
      }]);
      return Filter2;
    }();
    module.exports = Filter;
  }
});
var PREPARE_ABORTED = new Error("prepareAborted");
var { AbortController } = globalThis;
function serializeError(error) {
  try {
    const { name: name2 = "Error", message = String(error), stack } = error;
    return { name: name2, message, stack };
  } catch (e) {
    return { name: "Error", message: String(error) };
  }
}
var StoryRender = class {
  constructor(channel, store, renderToScreen, callbacks, id, viewMode, renderOptions = { autoplay: true, forceInitialArgs: false }, story) {
    this.channel = channel;
    this.store = store;
    this.renderToScreen = renderToScreen;
    this.callbacks = callbacks;
    this.id = id;
    this.viewMode = viewMode;
    this.renderOptions = renderOptions;
    this.type = "story";
    this.notYetRendered = true;
    this.disableKeyListeners = false;
    this.teardownRender = () => {
    };
    this.torndown = false;
    this.abortController = new AbortController();
    if (story) {
      this.story = story;
      this.phase = "preparing";
    }
  }
  async runPhase(signal, phase, phaseFn) {
    this.phase = phase;
    this.channel.emit(STORY_RENDER_PHASE_CHANGED, { newPhase: this.phase, storyId: this.id });
    if (phaseFn)
      await phaseFn();
    if (signal.aborted) {
      this.phase = "aborted";
      this.channel.emit(STORY_RENDER_PHASE_CHANGED, { newPhase: this.phase, storyId: this.id });
    }
  }
  async prepare() {
    await this.runPhase(this.abortController.signal, "preparing", async () => {
      this.story = await this.store.loadStory({ storyId: this.id });
    });
    if (this.abortController.signal.aborted) {
      this.store.cleanupStory(this.story);
      throw PREPARE_ABORTED;
    }
  }
  // The two story "renders" are equal and have both loaded the same story
  isEqual(other) {
    return !!(this.id === other.id && this.story && this.story === other.story);
  }
  isPreparing() {
    return ["preparing"].includes(this.phase);
  }
  isPending() {
    return ["rendering", "playing"].includes(this.phase);
  }
  async renderToElement(canvasElement) {
    this.canvasElement = canvasElement;
    return this.render({ initial: true, forceRemount: true });
  }
  storyContext() {
    if (!this.story)
      throw new Error(`Cannot call storyContext before preparing`);
    const { forceInitialArgs } = this.renderOptions;
    return this.store.getStoryContext(this.story, { forceInitialArgs });
  }
  async render({
    initial = false,
    forceRemount = false
  } = {}) {
    const { canvasElement } = this;
    if (!this.story)
      throw new Error("cannot render when not prepared");
    if (!canvasElement)
      throw new Error("cannot render when canvasElement is unset");
    const { id, componentId, title, name: name2, tags, applyLoaders, unboundStoryFn, playFunction } = this.story;
    if (forceRemount && !initial) {
      this.cancelRender();
      this.abortController = new AbortController();
    }
    const abortSignal = this.abortController.signal;
    try {
      let loadedContext;
      await this.runPhase(abortSignal, "loading", async () => {
        loadedContext = await applyLoaders({
          ...this.storyContext(),
          viewMode: this.viewMode
        });
      });
      if (abortSignal.aborted) {
        return;
      }
      const renderStoryContext = {
        ...loadedContext,
        // By this stage, it is possible that new args/globals have been received for this story
        // and we need to ensure we render it with the new values
        ...this.storyContext(),
        abortSignal,
        // We should consider parameterizing the story types with TRenderer['canvasElement'] in the future
        canvasElement
      };
      const renderContext = {
        componentId,
        title,
        kind: title,
        id,
        name: name2,
        story: name2,
        tags,
        ...this.callbacks,
        showError: (error) => {
          this.phase = "errored";
          return this.callbacks.showError(error);
        },
        showException: (error) => {
          this.phase = "errored";
          return this.callbacks.showException(error);
        },
        forceRemount: forceRemount || this.notYetRendered,
        storyContext: renderStoryContext,
        storyFn: () => unboundStoryFn(renderStoryContext),
        unboundStoryFn
      };
      await this.runPhase(abortSignal, "rendering", async () => {
        const teardown = await this.renderToScreen(renderContext, canvasElement);
        this.teardownRender = teardown || (() => {
        });
      });
      this.notYetRendered = false;
      if (abortSignal.aborted)
        return;
      if (this.renderOptions.autoplay && forceRemount && playFunction && this.phase !== "errored") {
        this.disableKeyListeners = true;
        try {
          await this.runPhase(abortSignal, "playing", async () => {
            await playFunction(renderContext.storyContext);
          });
          await this.runPhase(abortSignal, "played");
        } catch (error) {
          logger.error(error);
          await this.runPhase(abortSignal, "errored", async () => {
            this.channel.emit(PLAY_FUNCTION_THREW_EXCEPTION, serializeError(error));
          });
          if (this.story.parameters.throwPlayFunctionExceptions !== false)
            throw error;
        }
        this.disableKeyListeners = false;
        if (abortSignal.aborted)
          return;
      }
      await this.runPhase(
        abortSignal,
        "completed",
        async () => this.channel.emit(STORY_RENDERED, id)
      );
    } catch (err) {
      this.phase = "errored";
      this.callbacks.showException(err);
    }
  }
  async rerender() {
    return this.render();
  }
  async remount() {
    return this.render({ forceRemount: true });
  }
  // If the story is torn down (either a new story is rendered or the docs page removes it)
  // we need to consider the fact that the initial render may not be finished
  // (possibly the loaders or the play function are still running). We use the controller
  // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
  // happens inside the user's code.
  cancelRender() {
    this.abortController?.abort();
  }
  async teardown() {
    this.torndown = true;
    this.cancelRender();
    if (this.story)
      this.store.cleanupStory(this.story);
    for (let i = 0; i < 3; i += 1) {
      if (!this.isPending()) {
        await this.teardownRender();
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    window.location.reload();
    await new Promise(() => {
    });
  }
};
var { fetch } = scope;
var STORY_INDEX_PATH = "./index.json";
var Preview = class {
  constructor(channel = addons.getChannel()) {
    this.channel = channel;
    this.storyRenders = [];
    if (scope.FEATURES?.storyStoreV7 && addons.hasServerChannel()) {
      this.serverChannel = addons.getServerChannel();
    }
    this.storyStore = new StoryStore();
  }
  // INITIALIZATION
  // NOTE: the reason that the preview and store's initialization code is written in a promise
  // style and not `async-await`, and the use of `SynchronousPromise`s is in order to allow
  // storyshots to immediately call `raw()` on the store without waiting for a later tick.
  // (Even simple things like `Promise.resolve()` and `await` involve the callback happening
  // in the next promise "tick").
  // See the comment in `storyshots-core/src/api/index.ts` for more detail.
  initialize({
    getStoryIndex,
    importFn,
    getProjectAnnotations
  }) {
    this.getStoryIndex = getStoryIndex;
    this.importFn = importFn;
    this.setupListeners();
    return this.getProjectAnnotationsOrRenderError(getProjectAnnotations).then(
      (projectAnnotations) => this.initializeWithProjectAnnotations(projectAnnotations)
    );
  }
  setupListeners() {
    this.channel.on(STORY_INDEX_INVALIDATED, this.onStoryIndexChanged.bind(this));
    this.channel.on(UPDATE_GLOBALS, this.onUpdateGlobals.bind(this));
    this.channel.on(UPDATE_STORY_ARGS, this.onUpdateArgs.bind(this));
    this.channel.on(RESET_STORY_ARGS, this.onResetArgs.bind(this));
    this.channel.on(FORCE_RE_RENDER, this.onForceReRender.bind(this));
    this.channel.on(FORCE_REMOUNT, this.onForceRemount.bind(this));
  }
  getProjectAnnotationsOrRenderError(getProjectAnnotations) {
    return import_synchronous_promise3.SynchronousPromise.resolve().then(getProjectAnnotations).then((projectAnnotations) => {
      if (projectAnnotations.renderToDOM)
        deprecate(`\`renderToDOM\` is deprecated, please rename to \`renderToCanvas\``);
      this.renderToCanvas = projectAnnotations.renderToCanvas || projectAnnotations.renderToDOM;
      if (!this.renderToCanvas) {
        throw new Error(dedent`
            Expected your framework's preset to export a \`renderToCanvas\` field.

            Perhaps it needs to be upgraded for Storybook 6.4?

            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field
          `);
      }
      return projectAnnotations;
    }).catch((err) => {
      this.renderPreviewEntryError("Error reading preview.js:", err);
      throw err;
    });
  }
  // If initialization gets as far as project annotations, this function runs.
  initializeWithProjectAnnotations(projectAnnotations) {
    this.storyStore.setProjectAnnotations(projectAnnotations);
    this.setInitialGlobals();
    let storyIndexPromise;
    if (scope.FEATURES?.storyStoreV7) {
      storyIndexPromise = this.getStoryIndexFromServer();
    } else {
      if (!this.getStoryIndex) {
        throw new Error("No `getStoryIndex` passed defined in v6 mode");
      }
      storyIndexPromise = import_synchronous_promise3.SynchronousPromise.resolve().then(this.getStoryIndex);
    }
    return storyIndexPromise.then((storyIndex) => this.initializeWithStoryIndex(storyIndex)).catch((err) => {
      this.renderPreviewEntryError("Error loading story index:", err);
      throw err;
    });
  }
  async setInitialGlobals() {
    this.emitGlobals();
  }
  emitGlobals() {
    if (!this.storyStore.globals || !this.storyStore.projectAnnotations)
      throw new Error(`Cannot emit before initialization`);
    const payload = {
      globals: this.storyStore.globals.get() || {},
      globalTypes: this.storyStore.projectAnnotations.globalTypes || {}
    };
    this.channel.emit(SET_GLOBALS, payload);
  }
  async getStoryIndexFromServer() {
    const result2 = await fetch(STORY_INDEX_PATH);
    if (result2.status === 200) {
      return result2.json();
    }
    throw new Error(await result2.text());
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(storyIndex) {
    if (!this.importFn)
      throw new Error(`Cannot call initializeWithStoryIndex before initialization`);
    return this.storyStore.initialize({
      storyIndex,
      importFn: this.importFn,
      cache: !scope.FEATURES?.storyStoreV7
    });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations
  }) {
    delete this.previewEntryError;
    const projectAnnotations = await this.getProjectAnnotationsOrRenderError(getProjectAnnotations);
    if (!this.storyStore.projectAnnotations) {
      await this.initializeWithProjectAnnotations(projectAnnotations);
      return;
    }
    await this.storyStore.setProjectAnnotations(projectAnnotations);
    this.emitGlobals();
  }
  async onStoryIndexChanged() {
    delete this.previewEntryError;
    if (!this.storyStore.projectAnnotations) {
      return;
    }
    try {
      const storyIndex = await this.getStoryIndexFromServer();
      if (!this.storyStore.storyIndex) {
        await this.initializeWithStoryIndex(storyIndex);
      }
      await this.onStoriesChanged({ storyIndex });
    } catch (err) {
      this.renderPreviewEntryError("Error loading story index:", err);
      throw err;
    }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn,
    storyIndex
  }) {
    await this.storyStore.onStoriesChanged({ importFn, storyIndex });
  }
  async onUpdateGlobals({ globals }) {
    if (!this.storyStore.globals)
      throw new Error(`Cannot call onUpdateGlobals before initialization`);
    this.storyStore.globals.update(globals);
    await Promise.all(this.storyRenders.map((r) => r.rerender()));
    this.channel.emit(GLOBALS_UPDATED, {
      globals: this.storyStore.globals.get(),
      initialGlobals: this.storyStore.globals.initialGlobals
    });
  }
  async onUpdateArgs({ storyId, updatedArgs }) {
    this.storyStore.args.update(storyId, updatedArgs);
    await Promise.all(
      this.storyRenders.filter((r) => r.id === storyId && !r.renderOptions.forceInitialArgs).map((r) => r.rerender())
    );
    this.channel.emit(STORY_ARGS_UPDATED, {
      storyId,
      args: this.storyStore.args.get(storyId)
    });
  }
  async onResetArgs({ storyId, argNames }) {
    const render = this.storyRenders.find((r) => r.id === storyId);
    const story = render?.story || await this.storyStore.loadStory({ storyId });
    const argNamesToReset = argNames || [
      .../* @__PURE__ */ new Set([
        ...Object.keys(story.initialArgs),
        ...Object.keys(this.storyStore.args.get(storyId))
      ])
    ];
    const updatedArgs = argNamesToReset.reduce((acc, argName) => {
      acc[argName] = story.initialArgs[argName];
      return acc;
    }, {});
    await this.onUpdateArgs({ storyId, updatedArgs });
  }
  // ForceReRender does not include a story id, so we simply must
  // re-render all stories in case they are relevant
  async onForceReRender() {
    await Promise.all(this.storyRenders.map((r) => r.rerender()));
  }
  async onForceRemount({ storyId }) {
    await Promise.all(this.storyRenders.filter((r) => r.id === storyId).map((r) => r.remount()));
  }
  // Used by docs to render a story to a given element
  // Note this short-circuits the `prepare()` phase of the StoryRender,
  // main to be consistent with the previous behaviour. In the future,
  // we will change it to go ahead and load the story, which will end up being
  // "instant", although async.
  renderStoryToElement(story, element, callbacks, options2) {
    if (!this.renderToCanvas)
      throw new Error(`Cannot call renderStoryToElement before initialization`);
    const render = new StoryRender(
      this.channel,
      this.storyStore,
      this.renderToCanvas,
      callbacks,
      story.id,
      "docs",
      options2,
      story
    );
    render.renderToElement(element);
    this.storyRenders.push(render);
    return async () => {
      await this.teardownRender(render);
    };
  }
  async teardownRender(render, { viewModeChanged } = {}) {
    this.storyRenders = this.storyRenders.filter((r) => r !== render);
    await render?.teardown?.({ viewModeChanged });
  }
  // API
  async extract(options2) {
    if (this.previewEntryError) {
      throw this.previewEntryError;
    }
    if (!this.storyStore.projectAnnotations) {
      throw new Error(dedent`Failed to initialize Storybook.

      Do you have an error in your \`preview.js\`? Check your Storybook's browser console for errors.`);
    }
    if (scope.FEATURES?.storyStoreV7) {
      await this.storyStore.cacheAllCSFFiles();
    }
    return this.storyStore.extract(options2);
  }
  // UTILITIES
  renderPreviewEntryError(reason, err) {
    this.previewEntryError = err;
    logger.error(reason);
    logger.error(err);
    this.channel.emit(CONFIG_ERROR, err);
  }
};
var DocsContext = class {
  constructor(channel, store, renderStoryToElement, csfFiles) {
    this.channel = channel;
    this.store = store;
    this.renderStoryToElement = renderStoryToElement;
    this.storyIdByName = (storyName) => {
      const storyId = this.nameToStoryId.get(storyName);
      if (storyId)
        return storyId;
      throw new Error(`No story found with that name: ${storyName}`);
    };
    this.componentStories = () => {
      return this.componentStoriesValue;
    };
    this.storyById = (storyId) => {
      if (!storyId) {
        if (!this.primaryStory)
          throw new Error(
            `No primary story defined for docs entry. Did you forget to use \`<Meta>\`?`
          );
        return this.primaryStory;
      }
      const csfFile = this.storyIdToCSFFile.get(storyId);
      if (!csfFile)
        throw new Error(`Called \`storyById\` for story that was never loaded: ${storyId}`);
      return this.store.storyFromCSFFile({ storyId, csfFile });
    };
    this.getStoryContext = (story) => {
      return {
        ...this.store.getStoryContext(story),
        viewMode: "docs"
      };
    };
    this.loadStory = (id) => {
      return this.store.loadStory({ storyId: id });
    };
    this.storyIdToCSFFile = /* @__PURE__ */ new Map();
    this.exportToStory = /* @__PURE__ */ new Map();
    this.exportsToCSFFile = /* @__PURE__ */ new Map();
    this.nameToStoryId = /* @__PURE__ */ new Map();
    this.componentStoriesValue = [];
    csfFiles.forEach((csfFile, index) => {
      this.referenceCSFFile(csfFile);
    });
  }
  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(csfFile) {
    this.exportsToCSFFile.set(csfFile.moduleExports, csfFile);
    this.exportsToCSFFile.set(csfFile.moduleExports.default, csfFile);
    const stories = this.store.componentStoriesFromCSFFile({ csfFile });
    stories.forEach((story) => {
      const annotation = csfFile.stories[story.id];
      this.storyIdToCSFFile.set(annotation.id, csfFile);
      this.exportToStory.set(annotation.moduleExport, story);
    });
  }
  attachCSFFile(csfFile) {
    if (!this.exportsToCSFFile.has(csfFile.moduleExports)) {
      throw new Error("Cannot attach a CSF file that has not been referenced");
    }
    this.attachedCSFFile = csfFile;
    const stories = this.store.componentStoriesFromCSFFile({ csfFile });
    stories.forEach((story) => {
      this.nameToStoryId.set(story.name, story.id);
      this.componentStoriesValue.push(story);
      if (!this.primaryStory)
        this.primaryStory = story;
    });
  }
  referenceMeta(metaExports, attach) {
    const resolved = this.resolveModuleExport(metaExports);
    if (resolved.type !== "meta")
      throw new Error(
        "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?"
      );
    if (attach)
      this.attachCSFFile(resolved.csfFile);
  }
  get projectAnnotations() {
    const { projectAnnotations } = this.store;
    if (!projectAnnotations) {
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    }
    return projectAnnotations;
  }
  resolveAttachedModuleExportType(moduleExportType) {
    if (moduleExportType === "story") {
      if (!this.primaryStory)
        throw new Error(
          `No primary story attached to this docs file, did you forget to use <Meta of={} />?`
        );
      return { type: "story", story: this.primaryStory };
    }
    if (!this.attachedCSFFile)
      throw new Error(
        `No CSF file attached to this docs file, did you forget to use <Meta of={} />?`
      );
    if (moduleExportType === "meta")
      return { type: "meta", csfFile: this.attachedCSFFile };
    const { component } = this.attachedCSFFile.meta;
    if (!component)
      throw new Error(
        `Attached CSF file does not defined a component, did you forget to export one?`
      );
    return { type: "component", component };
  }
  resolveModuleExport(moduleExportOrType) {
    const csfFile = this.exportsToCSFFile.get(moduleExportOrType);
    if (csfFile)
      return { type: "meta", csfFile };
    const story = this.exportToStory.get(moduleExportOrType);
    if (story)
      return { type: "story", story };
    return { type: "component", component: moduleExportOrType };
  }
  resolveOf(moduleExportOrType, validTypes = []) {
    let resolved;
    if (["component", "meta", "story"].includes(moduleExportOrType)) {
      const type = moduleExportOrType;
      resolved = this.resolveAttachedModuleExportType(type);
    } else {
      resolved = this.resolveModuleExport(moduleExportOrType);
    }
    if (validTypes.length && !validTypes.includes(resolved.type)) {
      const prettyType = resolved.type === "component" ? "component or unknown" : resolved.type;
      throw new Error(esm_default`Invalid value passed to the 'of' prop. The value was resolved to a '${prettyType}' type but the only types for this block are: ${validTypes.join(
        ", "
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }
    switch (resolved.type) {
      case "component": {
        return {
          ...resolved,
          projectAnnotations: this.projectAnnotations
        };
      }
      case "meta": {
        return {
          ...resolved,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: resolved.csfFile })
        };
      }
      case "story":
      default: {
        return resolved;
      }
    }
  }
};
var CsfDocsRender = class {
  constructor(channel, store, entry, callbacks) {
    this.channel = channel;
    this.store = store;
    this.entry = entry;
    this.callbacks = callbacks;
    this.type = "docs";
    this.subtype = "csf";
    this.torndown = false;
    this.disableKeyListeners = false;
    this.preparing = false;
    this.id = entry.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = true;
    const { entryExports, csfFiles = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw PREPARE_ABORTED;
    const { importPath, title } = this.entry;
    const primaryCsfFile = this.store.processCSFFileWithCache(
      entryExports,
      importPath,
      title
    );
    const primaryStoryId = Object.keys(primaryCsfFile.stories)[0];
    this.story = this.store.storyFromCSFFile({ storyId: primaryStoryId, csfFile: primaryCsfFile });
    this.csfFiles = [primaryCsfFile, ...csfFiles];
    this.preparing = false;
  }
  isEqual(other) {
    return !!(this.id === other.id && this.story && this.story === other.story);
  }
  docsContext(renderStoryToElement) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    const docsContext = new DocsContext(
      this.channel,
      this.store,
      renderStoryToElement,
      this.csfFiles
    );
    this.csfFiles.forEach((csfFile) => docsContext.attachCSFFile(csfFile));
    return docsContext;
  }
  async renderToElement(canvasElement, renderStoryToElement) {
    if (!this.story || !this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    const docsContext = this.docsContext(renderStoryToElement);
    const { docs: docsParameter } = this.story.parameters || {};
    if (!docsParameter)
      throw new Error(
        `Cannot render a story in viewMode=docs if \`@storybook/addon-docs\` is not installed`
      );
    const renderer = await docsParameter.renderer();
    const { render } = renderer;
    const renderDocs = async () => {
      try {
        await render(docsContext, docsParameter, canvasElement);
        this.channel.emit(DOCS_RENDERED, this.id);
      } catch (err) {
        this.callbacks.showException(err);
      }
    };
    this.rerender = async () => renderDocs();
    this.teardownRender = async ({ viewModeChanged }) => {
      if (!viewModeChanged || !canvasElement)
        return;
      renderer.unmount(canvasElement);
    };
    return renderDocs();
  }
  async teardown({ viewModeChanged } = {}) {
    this.teardownRender?.({ viewModeChanged });
    this.torndown = true;
  }
};
var MdxDocsRender = class {
  constructor(channel, store, entry, callbacks) {
    this.channel = channel;
    this.store = store;
    this.entry = entry;
    this.callbacks = callbacks;
    this.type = "docs";
    this.subtype = "mdx";
    this.torndown = false;
    this.disableKeyListeners = false;
    this.preparing = false;
    this.id = entry.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = true;
    const { entryExports, csfFiles = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw PREPARE_ABORTED;
    this.csfFiles = csfFiles;
    this.exports = entryExports;
    this.preparing = false;
  }
  isEqual(other) {
    return !!(this.id === other.id && this.exports && this.exports === other.exports);
  }
  docsContext(renderStoryToElement) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    return new DocsContext(
      this.channel,
      this.store,
      renderStoryToElement,
      this.csfFiles
    );
  }
  async renderToElement(canvasElement, renderStoryToElement) {
    if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
      throw new Error("Cannot render docs before preparing");
    const docsContext = this.docsContext(renderStoryToElement);
    const { docs } = this.store.projectAnnotations.parameters || {};
    if (!docs)
      throw new Error(
        `Cannot render a story in viewMode=docs if \`@storybook/addon-docs\` is not installed`
      );
    const docsParameter = { ...docs, page: this.exports.default };
    const renderer = await docs.renderer();
    const { render } = renderer;
    const renderDocs = async () => {
      try {
        await render(docsContext, docsParameter, canvasElement);
        this.channel.emit(DOCS_RENDERED, this.id);
      } catch (err) {
        this.callbacks.showException(err);
      }
    };
    this.rerender = async () => renderDocs();
    this.teardownRender = async ({ viewModeChanged } = {}) => {
      if (!viewModeChanged || !canvasElement)
        return;
      renderer.unmount(canvasElement);
      this.torndown = true;
    };
    return renderDocs();
  }
  async teardown({ viewModeChanged } = {}) {
    this.teardownRender?.({ viewModeChanged });
    this.torndown = true;
  }
};
var globalWindow = globalThis;
function focusInInput(event) {
  const target = event.composedPath && event.composedPath()[0] || event.target;
  return /input|textarea/i.test(target.tagName) || target.getAttribute("contenteditable") !== null;
}
var AUTODOCS_TAG2 = "autodocs";
var STORIES_MDX_TAG2 = "stories-mdx";
var ATTACHED_MDX_TAG = "attached-mdx";
function isMdxEntry({ tags }) {
  return !tags?.includes(AUTODOCS_TAG2) && !tags?.includes(STORIES_MDX_TAG2);
}
function isStoryRender(r) {
  return r.type === "story";
}
function isDocsRender(r) {
  return r.type === "docs";
}
function isCsfDocsRender(r) {
  return isDocsRender(r) && r.subtype === "csf";
}
var PreviewWithSelection = class extends Preview {
  constructor(selectionStore, view) {
    super();
    this.selectionStore = selectionStore;
    this.view = view;
  }
  setupListeners() {
    super.setupListeners();
    globalWindow.onkeydown = this.onKeydown.bind(this);
    this.channel.on(SET_CURRENT_STORY, this.onSetCurrentStory.bind(this));
    this.channel.on(UPDATE_QUERY_PARAMS, this.onUpdateQueryParams.bind(this));
    this.channel.on(PRELOAD_ENTRIES, this.onPreloadStories.bind(this));
  }
  async setInitialGlobals() {
    if (!this.storyStore.globals)
      throw new Error(`Cannot call setInitialGlobals before initialization`);
    const { globals } = this.selectionStore.selectionSpecifier || {};
    if (globals) {
      this.storyStore.globals.updateFromPersisted(globals);
    }
    this.emitGlobals();
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(storyIndex) {
    return super.initializeWithStoryIndex(storyIndex).then(() => {
      if (!scope.FEATURES?.storyStoreV7) {
        this.channel.emit(SET_INDEX, this.storyStore.getSetIndexPayload());
      }
      return this.selectSpecifiedStory();
    });
  }
  // Use the selection specifier to choose a story, then render it
  async selectSpecifiedStory() {
    if (!this.storyStore.storyIndex)
      throw new Error(`Cannot call selectSpecifiedStory before initialization`);
    if (this.selectionStore.selection) {
      await this.renderSelection();
      return;
    }
    if (!this.selectionStore.selectionSpecifier) {
      this.renderMissingStory();
      return;
    }
    const { storySpecifier, args: args2 } = this.selectionStore.selectionSpecifier;
    const entry = this.storyStore.storyIndex.entryFromSpecifier(storySpecifier);
    if (!entry) {
      if (storySpecifier === "*") {
        this.renderStoryLoadingException(
          storySpecifier,
          new Error(dedent`
            Couldn't find any stories in your Storybook.
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `)
        );
      } else {
        this.renderStoryLoadingException(
          storySpecifier,
          new Error(dedent`
            Couldn't find story matching '${storySpecifier}'.
            - Are you sure a story with that id exists?
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `)
        );
      }
      return;
    }
    const { id: storyId, type: viewMode } = entry;
    this.selectionStore.setSelection({ storyId, viewMode });
    this.channel.emit(STORY_SPECIFIED, this.selectionStore.selection);
    this.channel.emit(CURRENT_STORY_WAS_SET, this.selectionStore.selection);
    await this.renderSelection({ persistedArgs: args2 });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations
  }) {
    await super.onGetProjectAnnotationsChanged({ getProjectAnnotations });
    if (this.selectionStore.selection) {
      this.renderSelection();
    }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn,
    storyIndex
  }) {
    await super.onStoriesChanged({ importFn, storyIndex });
    if (!scope.FEATURES?.storyStoreV7) {
      this.channel.emit(SET_INDEX, await this.storyStore.getSetIndexPayload());
    }
    if (this.selectionStore.selection) {
      await this.renderSelection();
    } else {
      await this.selectSpecifiedStory();
    }
  }
  onKeydown(event) {
    if (!this.storyRenders.find((r) => r.disableKeyListeners) && !focusInInput(event)) {
      const { altKey, ctrlKey, metaKey, shiftKey, key: key2, code, keyCode } = event;
      this.channel.emit(PREVIEW_KEYDOWN, {
        event: { altKey, ctrlKey, metaKey, shiftKey, key: key2, code, keyCode }
      });
    }
  }
  async onSetCurrentStory(selection) {
    this.selectionStore.setSelection({ viewMode: "story", ...selection });
    await this.storyStore.initializationPromise;
    this.channel.emit(CURRENT_STORY_WAS_SET, this.selectionStore.selection);
    this.renderSelection();
  }
  onUpdateQueryParams(queryParams) {
    this.selectionStore.setQueryParams(queryParams);
  }
  async onUpdateGlobals({ globals }) {
    super.onUpdateGlobals({ globals });
    if (this.currentRender instanceof MdxDocsRender || this.currentRender instanceof CsfDocsRender) {
      await this.currentRender.rerender?.();
    }
  }
  async onUpdateArgs({ storyId, updatedArgs }) {
    super.onUpdateArgs({ storyId, updatedArgs });
  }
  async onPreloadStories({ ids }) {
    await Promise.allSettled(ids.map((id) => this.storyStore.loadEntry(id)));
  }
  // RENDERING
  // We can either have:
  // - a story selected in "story" viewMode,
  //     in which case we render it to the root element, OR
  // - a story selected in "docs" viewMode,
  //     in which case we render the docsPage for that story
  async renderSelection({ persistedArgs } = {}) {
    const { renderToCanvas } = this;
    if (!renderToCanvas)
      throw new Error("Cannot call renderSelection before initialization");
    const { selection } = this.selectionStore;
    if (!selection)
      throw new Error("Cannot call renderSelection as no selection was made");
    const { storyId } = selection;
    let entry;
    try {
      entry = await this.storyStore.storyIdToEntry(storyId);
    } catch (err) {
      if (this.currentRender)
        await this.teardownRender(this.currentRender);
      this.renderStoryLoadingException(storyId, err);
      return;
    }
    const storyIdChanged = this.currentSelection?.storyId !== storyId;
    const viewModeChanged = this.currentRender?.type !== entry.type;
    if (entry.type === "story") {
      this.view.showPreparingStory({ immediate: viewModeChanged });
    } else {
      this.view.showPreparingDocs({ immediate: viewModeChanged });
    }
    if (this.currentRender?.isPreparing()) {
      await this.teardownRender(this.currentRender);
    }
    let render;
    if (entry.type === "story") {
      render = new StoryRender(
        this.channel,
        this.storyStore,
        (...args2) => {
          this.view.showStoryDuringRender();
          return renderToCanvas(...args2);
        },
        this.mainStoryCallbacks(storyId),
        storyId,
        "story"
      );
    } else if (isMdxEntry(entry)) {
      render = new MdxDocsRender(
        this.channel,
        this.storyStore,
        entry,
        this.mainStoryCallbacks(storyId)
      );
    } else {
      render = new CsfDocsRender(
        this.channel,
        this.storyStore,
        entry,
        this.mainStoryCallbacks(storyId)
      );
    }
    const lastSelection = this.currentSelection;
    this.currentSelection = selection;
    const lastRender = this.currentRender;
    this.currentRender = render;
    try {
      await render.prepare();
    } catch (err) {
      if (err !== PREPARE_ABORTED) {
        if (lastRender)
          await this.teardownRender(lastRender);
        this.renderStoryLoadingException(storyId, err);
      }
      return;
    }
    const implementationChanged = !storyIdChanged && lastRender && !render.isEqual(lastRender);
    if (persistedArgs && isStoryRender(render)) {
      if (!render.story)
        throw new Error("Render has not been prepared!");
      this.storyStore.args.updateFromPersisted(render.story, persistedArgs);
    }
    if (lastRender && !lastRender.torndown && !storyIdChanged && !implementationChanged && !viewModeChanged) {
      this.currentRender = lastRender;
      this.channel.emit(STORY_UNCHANGED, storyId);
      this.view.showMain();
      return;
    }
    if (lastRender)
      await this.teardownRender(lastRender, { viewModeChanged });
    if (lastSelection && (storyIdChanged || viewModeChanged)) {
      this.channel.emit(STORY_CHANGED, storyId);
    }
    if (isStoryRender(render)) {
      if (!render.story)
        throw new Error("Render has not been prepared!");
      const { parameters, initialArgs, argTypes, unmappedArgs } = this.storyStore.getStoryContext(
        render.story
      );
      if (scope.FEATURES?.storyStoreV7) {
        this.channel.emit(STORY_PREPARED, {
          id: storyId,
          parameters,
          initialArgs,
          argTypes,
          args: unmappedArgs
        });
      }
      if (implementationChanged || persistedArgs) {
        this.channel.emit(STORY_ARGS_UPDATED, { storyId, args: unmappedArgs });
      }
    } else if (scope.FEATURES?.storyStoreV7) {
      if (!this.storyStore.projectAnnotations)
        throw new Error("Store not initialized");
      let { parameters } = this.storyStore.projectAnnotations;
      if (isCsfDocsRender(render) || render.entry.tags?.includes(ATTACHED_MDX_TAG)) {
        if (!render.csfFiles)
          throw new Error("Render not prepared, or attached MDX file has no CSF references");
        ({ parameters } = this.storyStore.preparedMetaFromCSFFile({ csfFile: render.csfFiles[0] }));
      }
      this.channel.emit(DOCS_PREPARED, {
        id: storyId,
        parameters
      });
    }
    if (isStoryRender(render)) {
      if (!render.story)
        throw new Error("Render has not been prepared!");
      this.storyRenders.push(render);
      this.currentRender.renderToElement(
        this.view.prepareForStory(render.story)
      );
    } else {
      this.currentRender.renderToElement(
        this.view.prepareForDocs(),
        // This argument is used for docs, which is currently only compatible with HTMLElements
        this.renderStoryToElement.bind(this)
      );
    }
  }
  async teardownRender(render, { viewModeChanged = false } = {}) {
    this.storyRenders = this.storyRenders.filter((r) => r !== render);
    await render?.teardown?.({ viewModeChanged });
  }
  // API
  async extract(options2) {
    if (this.previewEntryError) {
      throw this.previewEntryError;
    }
    if (!this.storyStore.projectAnnotations) {
      throw new Error(dedent`Failed to initialize Storybook.

      Do you have an error in your \`preview.js\`? Check your Storybook's browser console for errors.`);
    }
    if (scope.FEATURES?.storyStoreV7) {
      await this.storyStore.cacheAllCSFFiles();
    }
    return this.storyStore.extract(options2);
  }
  // UTILITIES
  mainStoryCallbacks(storyId) {
    return {
      showMain: () => this.view.showMain(),
      showError: (err) => this.renderError(storyId, err),
      showException: (err) => this.renderException(storyId, err)
    };
  }
  renderPreviewEntryError(reason, err) {
    super.renderPreviewEntryError(reason, err);
    this.view.showErrorDisplay(err);
  }
  renderMissingStory() {
    this.view.showNoPreview();
    this.channel.emit(STORY_MISSING);
  }
  renderStoryLoadingException(storySpecifier, err) {
    logger.error(err);
    this.view.showErrorDisplay(err);
    this.channel.emit(STORY_MISSING, storySpecifier);
  }
  // renderException is used if we fail to render the story and it is uncaught by the app layer
  renderException(storyId, error) {
    const { name: name2 = "Error", message = String(error), stack } = error;
    this.channel.emit(STORY_THREW_EXCEPTION, { name: name2, message, stack });
    this.channel.emit(STORY_RENDER_PHASE_CHANGED, { newPhase: "errored", storyId });
    if (!error.message?.startsWith("ignoredException")) {
      this.view.showErrorDisplay(error);
      logger.error(`Error rendering story '${storyId}':`);
      logger.error(error);
    }
  }
  // renderError is used by the various app layers to inform the user they have done something
  // wrong -- for instance returned the wrong thing from a story
  renderError(storyId, { title, description }) {
    logger.error(`Error rendering story ${title}: ${description}`);
    this.channel.emit(STORY_ERRORED, { title, description });
    this.channel.emit(STORY_RENDER_PHASE_CHANGED, { newPhase: "errored", storyId });
    this.view.showErrorDisplay({
      message: title,
      stack: description
    });
  }
};
var VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/;
var NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/;
var HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i;
var COLOR_REGEXP = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i;
var validateArgs = (key2 = "", value2) => {
  if (key2 === null)
    return false;
  if (key2 === "" || !VALIDATION_REGEXP.test(key2))
    return false;
  if (value2 === null || value2 === void 0)
    return true;
  if (value2 instanceof Date)
    return true;
  if (typeof value2 === "number" || typeof value2 === "boolean")
    return true;
  if (typeof value2 === "string") {
    return VALIDATION_REGEXP.test(value2) || NUMBER_REGEXP.test(value2) || HEX_REGEXP.test(value2) || COLOR_REGEXP.test(value2);
  }
  if (Array.isArray(value2))
    return value2.every((v2) => validateArgs(key2, v2));
  if ((0, import_isPlainObject2.default)(value2))
    return Object.entries(value2).every(([k, v2]) => validateArgs(k, v2));
  return false;
};
var QS_OPTIONS = {
  delimiter: ";",
  // we're parsing a single query param
  allowDots: true,
  // objects are encoded using dot notation
  allowSparse: true,
  // arrays will be merged on top of their initial value
  decoder(str, defaultDecoder, charset, type) {
    if (type === "value" && str.startsWith("!")) {
      if (str === "!undefined")
        return void 0;
      if (str === "!null")
        return null;
      if (str === "!true")
        return true;
      if (str === "!false")
        return false;
      if (str.startsWith("!date(") && str.endsWith(")"))
        return new Date(str.slice(6, -1));
      if (str.startsWith("!hex(") && str.endsWith(")"))
        return `#${str.slice(5, -1)}`;
      const color = str.slice(1).match(COLOR_REGEXP);
      if (color) {
        if (str.startsWith("!rgba"))
          return `${color[1]}(${color[2]}, ${color[3]}, ${color[4]}, ${color[5]})`;
        if (str.startsWith("!hsla"))
          return `${color[1]}(${color[2]}, ${color[3]}%, ${color[4]}%, ${color[5]})`;
        return str.startsWith("!rgb") ? `${color[1]}(${color[2]}, ${color[3]}, ${color[4]})` : `${color[1]}(${color[2]}, ${color[3]}%, ${color[4]}%)`;
      }
    }
    if (type === "value" && NUMBER_REGEXP.test(str))
      return Number(str);
    return defaultDecoder(str, defaultDecoder, charset);
  }
};
var parseArgsParam = (argsString) => {
  const parts = argsString.split(";").map((part) => part.replace("=", "~").replace(":", "="));
  return Object.entries(import_qs3.default.parse(parts.join(";"), QS_OPTIONS)).reduce((acc, [key2, value2]) => {
    if (validateArgs(key2, value2))
      return Object.assign(acc, { [key2]: value2 });
    once.warn(dedent`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `);
    return acc;
  }, {});
};
var { history, document: document3 } = scope;
function pathToId(path) {
  const match = (path || "").match(/^\/story\/(.+)/);
  if (!match) {
    throw new Error(`Invalid path '${path}',  must start with '/story/'`);
  }
  return match[1];
}
var getQueryString = ({
  selection,
  extraParams
}) => {
  const { search = "" } = document3.location;
  const { path, selectedKind, selectedStory, ...rest } = import_qs3.default.parse(search, {
    ignoreQueryPrefix: true
  });
  return import_qs3.default.stringify(
    {
      ...rest,
      ...extraParams,
      ...selection && { id: selection.storyId, viewMode: selection.viewMode }
    },
    { encode: false, addQueryPrefix: true }
  );
};
var setPath = (selection) => {
  if (!selection)
    return;
  const query = getQueryString({ selection });
  const { hash = "" } = document3.location;
  document3.title = selection.storyId;
  history.replaceState({}, "", `${document3.location.pathname}${query}${hash}`);
};
var isObject4 = (val) => val != null && typeof val === "object" && Array.isArray(val) === false;
var getFirstString = (v2) => {
  if (v2 === void 0) {
    return void 0;
  }
  if (typeof v2 === "string") {
    return v2;
  }
  if (Array.isArray(v2)) {
    return getFirstString(v2[0]);
  }
  if (isObject4(v2)) {
    return getFirstString(Object.values(v2).filter(Boolean));
  }
  return void 0;
};
var getSelectionSpecifierFromPath = () => {
  const query = import_qs3.default.parse(document3.location.search, { ignoreQueryPrefix: true });
  const args2 = typeof query.args === "string" ? parseArgsParam(query.args) : void 0;
  const globals = typeof query.globals === "string" ? parseArgsParam(query.globals) : void 0;
  let viewMode = getFirstString(query.viewMode);
  if (typeof viewMode !== "string" || !viewMode.match(/docs|story/)) {
    viewMode = "story";
  }
  const path = getFirstString(query.path);
  const storyId = path ? pathToId(path) : getFirstString(query.id);
  if (storyId) {
    return { storySpecifier: storyId, args: args2, globals, viewMode };
  }
  return null;
};
var UrlStore = class {
  constructor() {
    this.selectionSpecifier = getSelectionSpecifierFromPath();
  }
  setSelection(selection) {
    this.selection = selection;
    setPath(this.selection);
  }
  setQueryParams(queryParams) {
    const query = getQueryString({ extraParams: queryParams });
    const { hash = "" } = document3.location;
    history.replaceState({}, "", `${document3.location.pathname}${query}${hash}`);
  }
};
var import_ansi_to_html = __toESM3(require_ansi_to_html());
var { document: document22 } = scope;
var PREPARING_DELAY = 100;
var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2["MAIN"] = "MAIN";
  Mode2["NOPREVIEW"] = "NOPREVIEW";
  Mode2["PREPARING_STORY"] = "PREPARING_STORY";
  Mode2["PREPARING_DOCS"] = "PREPARING_DOCS";
  Mode2["ERROR"] = "ERROR";
  return Mode2;
})(Mode || {});
var classes = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
};
var layoutClassMap = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
};
var ansiConverter = new import_ansi_to_html.default({
  escapeXML: true
});
var WebView = class {
  constructor() {
    this.testing = false;
    const { __SPECIAL_TEST_PARAMETER__ } = import_qs3.default.parse(document22.location.search, {
      ignoreQueryPrefix: true
    });
    switch (__SPECIAL_TEST_PARAMETER__) {
      case "preparing-story": {
        this.showPreparingStory();
        this.testing = true;
        break;
      }
      case "preparing-docs": {
        this.showPreparingDocs();
        this.testing = true;
        break;
      }
    }
  }
  // Get ready to render a story, returning the element to render to
  prepareForStory(story) {
    this.showStory();
    this.applyLayout(story.parameters.layout);
    document22.documentElement.scrollTop = 0;
    document22.documentElement.scrollLeft = 0;
    return this.storyRoot();
  }
  storyRoot() {
    return document22.getElementById("storybook-root");
  }
  prepareForDocs() {
    this.showMain();
    this.showDocs();
    this.applyLayout("fullscreen");
    document22.documentElement.scrollTop = 0;
    document22.documentElement.scrollLeft = 0;
    return this.docsRoot();
  }
  docsRoot() {
    return document22.getElementById("storybook-docs");
  }
  applyLayout(layout = "padded") {
    if (layout === "none") {
      document22.body.classList.remove(this.currentLayoutClass);
      this.currentLayoutClass = null;
      return;
    }
    this.checkIfLayoutExists(layout);
    const layoutClass = layoutClassMap[layout];
    document22.body.classList.remove(this.currentLayoutClass);
    document22.body.classList.add(layoutClass);
    this.currentLayoutClass = layoutClass;
  }
  checkIfLayoutExists(layout) {
    if (!layoutClassMap[layout]) {
      logger.warn(
        dedent`The desired layout: ${layout} is not a valid option.
         The possible options are: ${Object.keys(layoutClassMap).join(", ")}, none.`
      );
    }
  }
  showMode(mode) {
    clearTimeout(this.preparingTimeout);
    Object.keys(Mode).forEach((otherMode) => {
      if (otherMode === mode) {
        document22.body.classList.add(classes[otherMode]);
      } else {
        document22.body.classList.remove(classes[otherMode]);
      }
    });
  }
  showErrorDisplay({ message = "", stack = "" }) {
    let header = message;
    let detail = stack;
    const parts = message.split("\n");
    if (parts.length > 1) {
      [header] = parts;
      detail = parts.slice(1).join("\n");
    }
    document22.getElementById("error-message").innerHTML = ansiConverter.toHtml(header);
    document22.getElementById("error-stack").innerHTML = ansiConverter.toHtml(detail);
    this.showMode(
      "ERROR"
      /* ERROR */
    );
  }
  showNoPreview() {
    if (this.testing)
      return;
    this.showMode(
      "NOPREVIEW"
      /* NOPREVIEW */
    );
    this.storyRoot()?.setAttribute("hidden", "true");
    this.docsRoot()?.setAttribute("hidden", "true");
  }
  showPreparingStory({ immediate = false } = {}) {
    clearTimeout(this.preparingTimeout);
    if (immediate) {
      this.showMode(
        "PREPARING_STORY"
        /* PREPARING_STORY */
      );
    } else {
      this.preparingTimeout = setTimeout(
        () => this.showMode(
          "PREPARING_STORY"
          /* PREPARING_STORY */
        ),
        PREPARING_DELAY
      );
    }
  }
  showPreparingDocs({ immediate = false } = {}) {
    clearTimeout(this.preparingTimeout);
    if (immediate) {
      this.showMode(
        "PREPARING_DOCS"
        /* PREPARING_DOCS */
      );
    } else {
      this.preparingTimeout = setTimeout(() => this.showMode(
        "PREPARING_DOCS"
        /* PREPARING_DOCS */
      ), PREPARING_DELAY);
    }
  }
  showMain() {
    this.showMode(
      "MAIN"
      /* MAIN */
    );
  }
  showDocs() {
    this.storyRoot().setAttribute("hidden", "true");
    this.docsRoot().removeAttribute("hidden");
  }
  showStory() {
    this.docsRoot().setAttribute("hidden", "true");
    this.storyRoot().removeAttribute("hidden");
  }
  showStoryDuringRender() {
    document22.body.classList.add(classes.MAIN);
  }
};
var PreviewWeb = class extends PreviewWithSelection {
  constructor() {
    super(new UrlStore(), new WebView());
    scope.__STORYBOOK_PREVIEW__ = this;
  }
};
var { document: document32 } = scope;
var runScriptTypes = [
  "application/javascript",
  "application/ecmascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
  // Support modern javascript
  "module"
];
var SCRIPT = "script";
var SCRIPTS_ROOT_ID = "scripts-root";
function simulateDOMContentLoaded() {
  const DOMContentLoadedEvent = document32.createEvent("Event");
  DOMContentLoadedEvent.initEvent("DOMContentLoaded", true, true);
  document32.dispatchEvent(DOMContentLoadedEvent);
}
function insertScript($script, callback, $scriptRoot) {
  const scriptEl = document32.createElement("script");
  scriptEl.type = $script.type === "module" ? "module" : "text/javascript";
  if ($script.src) {
    scriptEl.onload = callback;
    scriptEl.onerror = callback;
    scriptEl.src = $script.src;
  } else {
    scriptEl.textContent = $script.innerText;
  }
  if ($scriptRoot)
    $scriptRoot.appendChild(scriptEl);
  else
    document32.head.appendChild(scriptEl);
  $script.parentNode.removeChild($script);
  if (!$script.src)
    callback();
}
function insertScriptsSequentially(scriptsToExecute, callback, index = 0) {
  scriptsToExecute[index](() => {
    index++;
    if (index === scriptsToExecute.length) {
      callback();
    } else {
      insertScriptsSequentially(scriptsToExecute, callback, index);
    }
  });
}
function simulatePageLoad($container) {
  let $scriptsRoot = document32.getElementById(SCRIPTS_ROOT_ID);
  if (!$scriptsRoot) {
    $scriptsRoot = document32.createElement("div");
    $scriptsRoot.id = SCRIPTS_ROOT_ID;
    document32.body.appendChild($scriptsRoot);
  } else {
    $scriptsRoot.innerHTML = "";
  }
  const $scripts = Array.from($container.querySelectorAll(SCRIPT));
  if ($scripts.length) {
    const scriptsToExecute = [];
    $scripts.forEach(($script) => {
      const typeAttr = $script.getAttribute("type");
      if (!typeAttr || runScriptTypes.includes(typeAttr)) {
        scriptsToExecute.push((callback) => insertScript($script, callback, $scriptsRoot));
      }
    });
    if (scriptsToExecute.length) {
      insertScriptsSequentially(scriptsToExecute, simulateDOMContentLoaded, void 0);
    }
  } else {
    simulateDOMContentLoaded();
  }
}

// ../preview-api/dist/chunk-VQGI5O4C.mjs
function executeLoadable(loadable) {
  let reqs = null;
  if (Array.isArray(loadable)) {
    reqs = loadable;
  } else if (loadable.keys) {
    reqs = [loadable];
  }
  let exportsMap = /* @__PURE__ */ new Map();
  if (reqs) {
    reqs.forEach((req) => {
      req.keys().forEach((filename) => {
        try {
          const fileExports = req(filename);
          exportsMap.set(
            typeof req.resolve === "function" ? req.resolve(filename) : filename,
            fileExports
          );
        } catch (error) {
          const errorString = error.message && error.stack ? `${error.message}
 ${error.stack}` : error.toString();
          logger.error(`Unexpected error while loading ${filename}: ${errorString}`);
        }
      });
    });
  } else {
    const exported = loadable();
    if (Array.isArray(exported) && exported.every((obj) => obj.default != null)) {
      exportsMap = new Map(
        exported.map((fileExports, index) => [`exports-map-${index}`, fileExports])
      );
    } else if (exported) {
      logger.warn(
        `Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ${JSON.stringify(
          exported
        )}`
      );
    }
  }
  return exportsMap;
}
function executeLoadableForChanges(loadable, m2) {
  let lastExportsMap = m2?.hot?.data?.lastExportsMap || /* @__PURE__ */ new Map();
  if (m2?.hot?.dispose) {
    m2.hot.accept();
    m2.hot.dispose((data) => {
      data.lastExportsMap = lastExportsMap;
    });
  }
  const exportsMap = executeLoadable(loadable);
  const added = /* @__PURE__ */ new Map();
  Array.from(exportsMap.entries()).filter(([, fileExports]) => !!fileExports.default).filter(([fileName, fileExports]) => lastExportsMap.get(fileName) !== fileExports).forEach(([fileName, fileExports]) => added.set(fileName, fileExports));
  const removed = /* @__PURE__ */ new Map();
  Array.from(lastExportsMap.keys()).filter((fileName) => !exportsMap.has(fileName)).forEach((fileName) => {
    const value2 = lastExportsMap.get(fileName);
    if (value2) {
      removed.set(fileName, value2);
    }
  });
  lastExportsMap = exportsMap;
  return { added, removed };
}
var { FEATURES } = scope;
var removedApi = (name2) => () => {
  throw new Error(`@storybook/client-api:${name2} was removed in storyStoreV7.`);
};
function start(renderToCanvas, { decorateStory: decorateStory2, render } = {}) {
  if (scope) {
    scope.IS_STORYBOOK = true;
  }
  if (FEATURES?.storyStoreV7) {
    return {
      forceReRender: removedApi("forceReRender"),
      configure: removedApi("configure"),
      clientApi: {
        storiesOf: removedApi("clientApi.storiesOf"),
        raw: removedApi("raw")
      }
    };
  }
  const channel = createBrowserChannel({ page: "preview" });
  addons.setChannel(channel);
  const clientApi = scope?.__STORYBOOK_CLIENT_API__ || new ClientApi();
  const preview = scope?.__STORYBOOK_PREVIEW__ || new PreviewWeb();
  let initialized = false;
  const importFn = (path) => clientApi.importFn(path);
  function onStoriesChanged() {
    const storyIndex = clientApi.getStoryIndex();
    preview.onStoriesChanged({ storyIndex, importFn });
  }
  clientApi.onImportFnChanged = onStoriesChanged;
  clientApi.storyStore = preview.storyStore;
  if (scope) {
    scope.__STORYBOOK_CLIENT_API__ = clientApi;
    scope.__STORYBOOK_ADDONS_CHANNEL__ = channel;
    scope.__STORYBOOK_PREVIEW__ = preview;
    scope.__STORYBOOK_STORY_STORE__ = preview.storyStore;
  }
  return {
    forceReRender: () => channel.emit(FORCE_RE_RENDER),
    clientApi,
    // This gets called each time the user calls configure (i.e. once per HMR)
    // The first time, it constructs the preview, subsequently it updates it
    configure(renderer, loadable, m2, disableBackwardCompatibility = true) {
      if (disableBackwardCompatibility) {
        throw new Error("unexpected configure() call");
      }
      clientApi.addParameters({ renderer });
      const getProjectAnnotations = () => {
        const { added, removed } = executeLoadableForChanges(loadable, m2);
        clientApi._loadAddedExports();
        Array.from(added.entries()).forEach(
          ([fileName, fileExports]) => clientApi.facade.addStoriesFromExports(fileName, fileExports)
        );
        Array.from(removed.entries()).forEach(
          ([fileName]) => clientApi.facade.clearFilenameExports(fileName)
        );
        return {
          render,
          ...clientApi.facade.projectAnnotations,
          renderToCanvas,
          applyDecorators: decorateStory2
        };
      };
      if (!initialized) {
        preview.initialize({
          getStoryIndex: () => clientApi.getStoryIndex(),
          importFn,
          getProjectAnnotations
        });
        initialized = true;
      } else {
        getProjectAnnotations();
        onStoriesChanged();
      }
    }
  };
}

// ../preview-api/dist/chunk-YZNUQJZ7.mjs
var makeDecorator = ({
  name: name2,
  parameterName,
  wrapper,
  skipIfNoParametersOrOptions = false
}) => {
  const decorator = (options2) => (storyFn, context) => {
    const parameters = context.parameters && context.parameters[parameterName];
    if (parameters && parameters.disable) {
      return storyFn(context);
    }
    if (skipIfNoParametersOrOptions && !options2 && !parameters) {
      return storyFn(context);
    }
    return wrapper(storyFn, context, {
      options: options2,
      parameters
    });
  };
  return (...args2) => {
    if (typeof args2[0] === "function") {
      return decorator()(...args2);
    }
    return (...innerArgs) => {
      if (innerArgs.length > 1) {
        if (args2.length > 1) {
          return decorator(args2)(...innerArgs);
        }
        return decorator(...args2)(...innerArgs);
      }
      throw new Error(
        `Passing stories directly into ${name2}() is not allowed,
        instead use addDecorator(${name2}) and pass options with the '${parameterName}' parameter`
      );
    };
  };
};

// ../types/dist/index.mjs
var dist_exports6 = {};
__export(dist_exports6, {
  Addon_TypesEnum: () => Addon_TypesEnum
});
var Addon_TypesEnum = /* @__PURE__ */ ((Addon_TypesEnum2) => {
  Addon_TypesEnum2["TAB"] = "tab";
  Addon_TypesEnum2["PANEL"] = "panel";
  Addon_TypesEnum2["TOOL"] = "tool";
  Addon_TypesEnum2["TOOLEXTRA"] = "toolextra";
  Addon_TypesEnum2["PREVIEW"] = "preview";
  Addon_TypesEnum2["experimental_PAGE"] = "page";
  Addon_TypesEnum2["experimental_SIDEBAR_BOTTOM"] = "sidebar-bottom";
  Addon_TypesEnum2["experimental_SIDEBAR_TOP"] = "sidebar-top";
  Addon_TypesEnum2["NOTES_ELEMENT"] = "notes-element";
  return Addon_TypesEnum2;
})(Addon_TypesEnum || {});

// ../preview-api/dist/addons.mjs
var addons_exports = {};
__export(addons_exports, {
  AddonStore: () => AddonStore,
  HooksContext: () => HooksContext,
  addons: () => addons,
  applyHooks: () => applyHooks,
  makeDecorator: () => makeDecorator,
  mockChannel: () => mockChannel,
  useArgs: () => useArgs,
  useCallback: () => useCallback,
  useChannel: () => useChannel,
  useEffect: () => useEffect,
  useGlobals: () => useGlobals,
  useMemo: () => useMemo,
  useParameter: () => useParameter,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useState: () => useState,
  useStoryContext: () => useStoryContext
});

// ../preview-api/dist/client-api.mjs
var client_api_exports = {};
__export(client_api_exports, {
  ClientApi: () => ClientApi,
  DEEPLY_EQUAL: () => DEEPLY_EQUAL,
  HooksContext: () => HooksContext,
  StoryStore: () => StoryStore,
  UNTARGETED: () => UNTARGETED,
  addArgTypes: () => addArgTypes,
  addArgTypesEnhancer: () => addArgTypesEnhancer,
  addArgs: () => addArgs,
  addArgsEnhancer: () => addArgsEnhancer,
  addDecorator: () => addDecorator,
  addLoader: () => addLoader,
  addParameters: () => addParameters,
  addStepRunner: () => addStepRunner,
  applyHooks: () => applyHooks,
  combineArgs: () => combineArgs,
  combineParameters: () => combineParameters,
  composeConfigs: () => composeConfigs,
  composeStepRunners: () => composeStepRunners,
  composeStories: () => composeStories,
  composeStory: () => composeStory,
  decorateStory: () => decorateStory,
  deepDiff: () => deepDiff,
  defaultDecorateStory: () => defaultDecorateStory,
  filterArgTypes: () => filterArgTypes,
  getArrayField: () => getArrayField,
  getField: () => getField,
  getObjectField: () => getObjectField,
  getQueryParam: () => getQueryParam,
  getQueryParams: () => getQueryParams,
  getSingletonField: () => getSingletonField,
  getValuesFromArgTypes: () => getValuesFromArgTypes,
  groupArgsByTarget: () => groupArgsByTarget,
  inferControls: () => inferControls,
  mapArgsToTypes: () => mapArgsToTypes,
  noTargetArgs: () => noTargetArgs,
  normalizeComponentAnnotations: () => normalizeComponentAnnotations,
  normalizeInputType: () => normalizeInputType,
  normalizeInputTypes: () => normalizeInputTypes,
  normalizeProjectAnnotations: () => normalizeProjectAnnotations,
  normalizeStory: () => normalizeStory,
  prepareContext: () => prepareContext,
  prepareMeta: () => prepareMeta,
  prepareStory: () => prepareStory,
  processCSFFile: () => processCSFFile,
  sanitizeStoryContextUpdate: () => sanitizeStoryContextUpdate,
  setGlobalRender: () => setGlobalRender,
  setProjectAnnotations: () => setProjectAnnotations,
  sortStoriesV6: () => sortStoriesV6,
  sortStoriesV7: () => sortStoriesV7,
  useAddonState: () => useAddonState,
  useArgs: () => useArgs,
  useCallback: () => useCallback,
  useChannel: () => useChannel,
  useEffect: () => useEffect,
  useGlobals: () => useGlobals,
  useMemo: () => useMemo,
  useParameter: () => useParameter,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useSharedState: () => useSharedState,
  useState: () => useState,
  useStoryContext: () => useStoryContext,
  userOrAutoTitle: () => userOrAutoTitle,
  userOrAutoTitleFromSpecifier: () => userOrAutoTitleFromSpecifier,
  validateOptions: () => validateOptions
});

// ../preview-api/dist/core-client.mjs
var core_client_exports = {};
__export(core_client_exports, {
  ClientApi: () => ClientApi,
  StoryStore: () => StoryStore,
  start: () => start
});

// ../preview-api/dist/preview-web.mjs
var preview_web_exports = {};
__export(preview_web_exports, {
  DocsContext: () => DocsContext,
  Preview: () => Preview,
  PreviewWeb: () => PreviewWeb,
  PreviewWithSelection: () => PreviewWithSelection,
  composeConfigs: () => composeConfigs,
  simulateDOMContentLoaded: () => simulateDOMContentLoaded,
  simulatePageLoad: () => simulatePageLoad
});

// ../preview-api/dist/store.mjs
var store_exports = {};
__export(store_exports, {
  DEEPLY_EQUAL: () => DEEPLY_EQUAL,
  HooksContext: () => HooksContext,
  StoryStore: () => StoryStore,
  UNTARGETED: () => UNTARGETED,
  applyHooks: () => applyHooks,
  combineArgs: () => combineArgs,
  combineParameters: () => combineParameters,
  composeConfigs: () => composeConfigs,
  composeStepRunners: () => composeStepRunners,
  composeStories: () => composeStories,
  composeStory: () => composeStory,
  decorateStory: () => decorateStory,
  deepDiff: () => deepDiff,
  defaultDecorateStory: () => defaultDecorateStory,
  filterArgTypes: () => filterArgTypes,
  getArrayField: () => getArrayField,
  getField: () => getField,
  getObjectField: () => getObjectField,
  getSingletonField: () => getSingletonField,
  getValuesFromArgTypes: () => getValuesFromArgTypes,
  groupArgsByTarget: () => groupArgsByTarget,
  inferControls: () => inferControls,
  mapArgsToTypes: () => mapArgsToTypes,
  noTargetArgs: () => noTargetArgs,
  normalizeComponentAnnotations: () => normalizeComponentAnnotations,
  normalizeInputType: () => normalizeInputType,
  normalizeInputTypes: () => normalizeInputTypes,
  normalizeProjectAnnotations: () => normalizeProjectAnnotations,
  normalizeStory: () => normalizeStory,
  prepareContext: () => prepareContext,
  prepareMeta: () => prepareMeta,
  prepareStory: () => prepareStory,
  processCSFFile: () => processCSFFile,
  sanitizeStoryContextUpdate: () => sanitizeStoryContextUpdate,
  setProjectAnnotations: () => setProjectAnnotations,
  sortStoriesV6: () => sortStoriesV6,
  sortStoriesV7: () => sortStoriesV7,
  useAddonState: () => useAddonState,
  useArgs: () => useArgs,
  useCallback: () => useCallback,
  useChannel: () => useChannel,
  useEffect: () => useEffect,
  useGlobals: () => useGlobals,
  useMemo: () => useMemo,
  useParameter: () => useParameter,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useSharedState: () => useSharedState,
  useState: () => useState,
  useStoryContext: () => useStoryContext,
  userOrAutoTitle: () => userOrAutoTitle,
  userOrAutoTitleFromSpecifier: () => userOrAutoTitleFromSpecifier,
  validateOptions: () => validateOptions
});

// ../channels/dist/postmessage/index.mjs
var postmessage_exports = {};
__export(postmessage_exports, {
  KEY: () => KEY,
  PostMessageTransport: () => PostMessageTransport,
  PostmsgTransport: () => PostmsgTransport,
  createChannel: () => createChannel,
  default: () => postmessage_default
});

// ../channels/dist/websocket/index.mjs
var websocket_exports = {};
__export(websocket_exports, {
  WebsocketTransport: () => WebsocketTransport,
  createChannel: () => createChannel2,
  default: () => websocket_default
});

// src/globals/runtime.ts
var globalsNameValueMap = {
  "@storybook/channels": dist_exports4,
  "@storybook/client-logger": dist_exports3,
  "@storybook/core-events": dist_exports,
  "@storybook/preview-api": dist_exports5,
  "@storybook/global": dist_exports2,
  "@storybook/types": dist_exports6,
  // DEPRECATED, remove in 8.0
  "@storybook/channel-postmessage": postmessage_exports,
  "@storybook/channel-websocket": websocket_exports,
  "@storybook/addons": addons_exports,
  "@storybook/client-api": client_api_exports,
  "@storybook/core-client": core_client_exports,
  "@storybook/preview-web": preview_web_exports,
  "@storybook/store": store_exports
};

// src/utils.ts
var import_browser_dtector = __toESM(require_browser_dtector_umd_min());
var browserInfo;
function getBrowserInfo() {
  if (!browserInfo) {
    browserInfo = new import_browser_dtector.default(scope.navigator?.userAgent).getBrowserInfo();
  }
  return browserInfo;
}
function prepareForTelemetry(error) {
  error.browserInfo = getBrowserInfo();
  return error;
}

// src/runtime.ts
globalPackages.forEach((key2) => {
  scope[globalsNameReferenceMap[key2]] = globalsNameValueMap[key2];
});
scope.sendTelemetryError = (error) => {
  const channel = scope.__STORYBOOK_ADDONS_CHANNEL__;
  channel.emit(TELEMETRY_ERROR, prepareForTelemetry(error));
};
scope.addEventListener("error", (args2) => {
  const error = args2.error || args2;
  if (error.fromStorybook) {
    scope.sendTelemetryError(error);
  }
});
scope.addEventListener("unhandledrejection", ({ reason }) => {
  if (reason.fromStorybook) {
    scope.sendTelemetryError(reason);
  }
});
