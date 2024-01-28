import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  ActionBar,
  ScrollArea,
  SyntaxHighlighter2,
  createCopyToClipboardFunction
} from "./chunk-PIZJANOT.js";
import {
  WithToolTipState
} from "./chunk-44MKFPSY.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  color,
  create,
  deprecate,
  ignoreSsrWarning,
  isPropValid,
  keyframes,
  logger,
  newStyled,
  once,
  pretty,
  require_react,
  scope,
  typography
} from "./chunk-TCL6UHAX.js";
import {
  __commonJS,
  __export,
  __toESM,
  require_memoizerific
} from "./chunk-54QAZ5U5.js";

// ../../node_modules/has-symbols/shams.js
var require_shams = __commonJS({
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
var require_has_symbols = __commonJS({
  "../../node_modules/has-symbols/index.js"(exports, module) {
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
var require_implementation = __commonJS({
  "../../node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b2) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b2.length; j += 1) {
        arr[j + a.length] = b2[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args2 = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(
            this,
            concatty(args2, arguments)
          );
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args2, arguments)
        );
      };
      var boundLength = max(0, target.length - args2.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
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
var require_function_bind = __commonJS({
  "../../node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../../node_modules/hasown/index.js
var require_hasown = __commonJS({
  "../../node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// ../../node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
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
    var hasSymbols = require_has_symbols()();
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
    var bind = require_function_bind();
    var hasOwn = require_hasown();
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

// ../../node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "../../node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// ../../node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../../node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../../node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "../../node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = hasPropertyDescriptors && GetIntrinsic("%Object.defineProperty%", true);
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var $TypeError = GetIntrinsic("%TypeError%");
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value2) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value: value2,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value2;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// ../../node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "../../node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(fn, "length", length, true, true);
        } else {
          define(fn, "length", length);
        }
      }
      return fn;
    };
  }
});

// ../../node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../../node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
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
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
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
var require_callBound = __commonJS({
  "../../node_modules/call-bind/callBound.js"(exports, module) {
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

// (disabled):../../node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):../../node_modules/object-inspect/util.inspect"() {
  }
});

// ../../node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "../../node_modules/object-inspect/index.js"(exports, module) {
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
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
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
      if (has3(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has3(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
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
          if (has3(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value2, newOpts, depth + 1, seen);
        }
        return inspect_(value2, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name2 = nameOf(obj);
        var keys2 = arrObjKeys(obj, inspect);
        return "[Function" + (name2 ? ": " + name2 : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
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
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
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
    function has3(obj, key2) {
      return hasOwn.call(obj, key2);
    }
    function toStr(obj) {
      return objectToString2.call(obj);
    }
    function nameOf(f3) {
      if (f3.name) {
        return f3.name;
      }
      var m = $match.call(functionToString.call(f3), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
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
        } catch (m) {
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
          xs[i] = has3(obj, i) ? inspect(obj[i], obj) : "";
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
        if (!has3(obj, key2)) {
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
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
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
    var has3 = Object.prototype.hasOwnProperty;
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
          if (options2 && (options2.plainObjects || options2.allowPrototypes) || !has3.call(Object.prototype, source2)) {
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
          if (has3.call(target, i)) {
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
        if (has3.call(acc, key2)) {
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
    var encode = function encode2(str, defaultEncoder, charset, kind, format2) {
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
        if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format2 === formats.RFC1738 && (c2 === 40 || c2 === 41)) {
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
        var keys2 = Object.keys(obj);
        for (var j = 0; j < keys2.length; ++j) {
          var key2 = keys2[j];
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
    var has3 = Object.prototype.hasOwnProperty;
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
    var stringify2 = function stringify3(object, prefix2, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset, sideChannel) {
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
          return encoder && !encodeValuesOnly ? encoder(prefix2, defaults.encoder, charset, "key", format2) : prefix2;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix2 : encoder(prefix2, defaults.encoder, charset, "key", format2);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format2))];
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
        var keys2 = Object.keys(obj);
        objKeys = sort ? keys2.sort(sort) : keys2;
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
          format2,
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
      var format2 = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has3.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format2 = opts.format;
      }
      var formatter = formats.formatters[format2];
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
        format: format2,
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
      var keys2 = [];
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
        pushToArray(keys2, stringify2(
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
      var joined = keys2.join(options2.delimiter);
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
    var has3 = Object.prototype.hasOwnProperty;
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
        if (has3.call(obj, key2)) {
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
          var index3 = parseInt(cleanRoot, 10);
          if (!options2.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index3) && root3 !== cleanRoot && String(index3) === cleanRoot && index3 >= 0 && (options2.parseArrays && index3 <= options2.arrayLimit)) {
            obj = [];
            obj[index3] = leaf;
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
      var keys2 = [];
      if (parent) {
        if (!options2.plainObjects && has3.call(Object.prototype, parent)) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys2.push(parent);
      }
      var i = 0;
      while (options2.depth > 0 && (segment = child.exec(key2)) !== null && i < options2.depth) {
        i += 1;
        if (!options2.plainObjects && has3.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys2.push(segment[1]);
      }
      if (segment) {
        keys2.push("[" + key2.slice(segment.index) + "]");
      }
      return parseObject(keys2, val, options2, valuesParsed);
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
      var keys2 = Object.keys(tempObj);
      for (var i = 0; i < keys2.length; ++i) {
        var key2 = keys2[i];
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
    var parse2 = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse: parse2,
      stringify: stringify2
    };
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
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
    function eq2(value2, other) {
      return value2 === other || value2 !== value2 && other !== other;
    }
    module.exports = eq2;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
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
    var assocIndexOf2 = require_assocIndexOf();
    var arrayProto2 = Array.prototype;
    var splice2 = arrayProto2.splice;
    function listCacheDelete2(key2) {
      var data = this.__data__, index3 = assocIndexOf2(data, key2);
      if (index3 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index3 == lastIndex) {
        data.pop();
      } else {
        splice2.call(data, index3, 1);
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
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheGet2(key2) {
      var data = this.__data__, index3 = assocIndexOf2(data, key2);
      return index3 < 0 ? void 0 : data[index3][1];
    }
    module.exports = listCacheGet2;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
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
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheSet2(key2, value2) {
      var data = this.__data__, index3 = assocIndexOf2(data, key2);
      if (index3 < 0) {
        ++this.size;
        data.push([key2, value2]);
      } else {
        data[index3][1] = value2;
      }
      return this;
    }
    module.exports = listCacheSet2;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear2 = require_listCacheClear();
    var listCacheDelete2 = require_listCacheDelete();
    var listCacheGet2 = require_listCacheGet();
    var listCacheHas2 = require_listCacheHas();
    var listCacheSet2 = require_listCacheSet();
    function ListCache2(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
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
    function stackGet(key2) {
      return this.__data__.get(key2);
    }
    module.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key2) {
      return this.__data__.has(key2);
    }
    module.exports = stackHas;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal2 = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal2;
  }
});

// ../../node_modules/lodash/_root.js
var require_root2 = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal2();
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root3 = freeGlobal2 || freeSelf2 || Function("return this")();
    module.exports = root3;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol2 = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root3 = require_root2();
    var Symbol3 = root3.Symbol;
    module.exports = Symbol3;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag2 = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol3 = require_Symbol2();
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
var require_objectToString2 = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto6 = Object.prototype;
    var nativeObjectToString3 = objectProto6.toString;
    function objectToString2(value2) {
      return nativeObjectToString3.call(value2);
    }
    module.exports = objectToString2;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag2 = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol3 = require_Symbol2();
    var getRawTag2 = require_getRawTag2();
    var objectToString2 = require_objectToString2();
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
    function isObject4(value2) {
      var type = typeof value2;
      return value2 != null && (type == "object" || type == "function");
    }
    module.exports = isObject4;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag2();
    var isObject4 = require_isObject();
    var asyncTag2 = "[object AsyncFunction]";
    var funcTag2 = "[object Function]";
    var genTag2 = "[object GeneratorFunction]";
    var proxyTag2 = "[object Proxy]";
    function isFunction2(value2) {
      if (!isObject4(value2)) {
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
    var root3 = require_root2();
    var coreJsData2 = root3["__core-js_shared__"];
    module.exports = coreJsData2;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module) {
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
    var isFunction2 = require_isFunction();
    var isMasked2 = require_isMasked();
    var isObject4 = require_isObject();
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
      if (!isObject4(value2) || isMasked2(value2)) {
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
    function getValue2(object, key2) {
      return object == null ? void 0 : object[key2];
    }
    module.exports = getValue2;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative2 = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative2(object, key2) {
      var value2 = getValue2(object, key2);
      return baseIsNative2(value2) ? value2 : void 0;
    }
    module.exports = getNative2;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root2();
    var Map3 = getNative2(root3, "Map");
    module.exports = Map3;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative2 = require_getNative();
    var nativeCreate2 = getNative2(Object, "create");
    module.exports = nativeCreate2;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module) {
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
    var hashClear2 = require_hashClear();
    var hashDelete2 = require_hashDelete();
    var hashGet2 = require_hashGet();
    var hashHas2 = require_hashHas();
    var hashSet2 = require_hashSet();
    function Hash2(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
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
    var mapCacheClear2 = require_mapCacheClear();
    var mapCacheDelete2 = require_mapCacheDelete();
    var mapCacheGet2 = require_mapCacheGet();
    var mapCacheHas2 = require_mapCacheHas();
    var mapCacheSet2 = require_mapCacheSet();
    function MapCache2(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
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

// ../../node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/lodash/_defineProperty.js"(exports, module) {
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

// ../../node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "../../node_modules/lodash/_assignMergeValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    function assignMergeValue(object, key2, value2) {
      if (value2 !== void 0 && !eq2(object[key2], value2) || value2 === void 0 && !(key2 in object)) {
        baseAssignValue(object, key2, value2);
      }
    }
    module.exports = assignMergeValue;
  }
});

// ../../node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "../../node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index3 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key2 = props[fromRight ? length : ++index3];
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
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// ../../node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "../../node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root3 = require_root2();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root3.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result2);
      return result2;
    }
    module.exports = cloneBuffer;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root3 = require_root2();
    var Uint8Array2 = root3.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "../../node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
      return result2;
    }
    module.exports = cloneArrayBuffer;
  }
});

// ../../node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "../../node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// ../../node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "../../node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source2, array) {
      var index3 = -1, length = source2.length;
      array || (array = Array(length));
      while (++index3 < length) {
        array[index3] = source2[index3];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// ../../node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "../../node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject4 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject4(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result2 = new object();
        object.prototype = void 0;
        return result2;
      };
    }();
    module.exports = baseCreate;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg2 = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../../node_modules/lodash/_getPrototype.js
var require_getPrototype2 = __commonJS({
  "../../node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg2();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto6 = Object.prototype;
    function isPrototype(value2) {
      var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto6;
      return value2 === proto;
    }
    module.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "../../node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype2();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike2 = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike2(value2) {
      return value2 != null && typeof value2 == "object";
    }
    module.exports = isObjectLike2;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag2();
    var isObjectLike2 = require_isObjectLike2();
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
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike2 = require_isObjectLike2();
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
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value2) {
      return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value2) {
      return value2 != null && isLength(value2.length) && !isFunction2(value2);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "../../node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike2 = require_isObjectLike2();
    function isArrayLikeObject(value2) {
      return isObjectLike2(value2) && isArrayLike(value2);
    }
    module.exports = isArrayLikeObject;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module) {
    var root3 = require_root2();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root3.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../../node_modules/lodash/isPlainObject.js
var require_isPlainObject2 = __commonJS({
  "../../node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag2();
    var getPrototype = require_getPrototype2();
    var isObjectLike2 = require_isObjectLike2();
    var objectTag = "[object Object]";
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var objectCtorString = funcToString3.call(Object);
    function isPlainObject(value2) {
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
    module.exports = isPlainObject;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag2();
    var isLength = require_isLength();
    var isObjectLike2 = require_isObjectLike2();
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
    var freeGlobal2 = require_freeGlobal2();
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
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "../../node_modules/lodash/_safeGet.js"(exports, module) {
    function safeGet(object, key2) {
      if (key2 === "constructor" && typeof object[key2] === "function") {
        return;
      }
      if (key2 == "__proto__") {
        return;
      }
      return object[key2];
    }
    module.exports = safeGet;
  }
});

// ../../node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "../../node_modules/lodash/_assignValue.js"(exports, module) {
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

// ../../node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "../../node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source2, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index3 = -1, length = props.length;
      while (++index3 < length) {
        var key2 = props[index3];
        var newValue = customizer ? customizer(object[key2], source2[key2], key2, object, source2) : void 0;
        if (newValue === void 0) {
          newValue = source2[key2];
        }
        if (isNew) {
          baseAssignValue(object, key2, newValue);
        } else {
          assignValue(object, key2, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index3 = -1, result2 = Array(n);
      while (++index3 < n) {
        result2[index3] = iteratee(index3);
      }
      return result2;
    }
    module.exports = baseTimes;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module) {
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

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
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

// ../../node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "../../node_modules/lodash/_nativeKeysIn.js"(exports, module) {
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
    var isObject4 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject4(object)) {
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
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// ../../node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "../../node_modules/lodash/toPlainObject.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value2) {
      return copyObject(value2, keysIn(value2));
    }
    module.exports = toPlainObject;
  }
});

// ../../node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "../../node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction2 = require_isFunction();
    var isObject4 = require_isObject();
    var isPlainObject = require_isPlainObject2();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source2, key2, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key2), srcValue = safeGet(source2, key2), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key2, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key2 + "", object, source2, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray2(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject4(objValue) || isFunction2(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key2, newValue);
    }
    module.exports = baseMergeDeep;
  }
});

// ../../node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "../../node_modules/lodash/_baseMerge.js"(exports, module) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject4 = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source2, srcIndex, customizer, stack) {
      if (object === source2) {
        return;
      }
      baseFor(source2, function(srcValue, key2) {
        stack || (stack = new Stack());
        if (isObject4(srcValue)) {
          baseMergeDeep(object, source2, key2, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key2), srcValue, key2 + "", object, source2, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key2, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  }
});

// ../../node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../node_modules/lodash/identity.js"(exports, module) {
    function identity(value2) {
      return value2;
    }
    module.exports = identity;
  }
});

// ../../node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "../../node_modules/lodash/_apply.js"(exports, module) {
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
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args2 = arguments, index3 = -1, length = nativeMax(args2.length - start, 0), array = Array(length);
        while (++index3 < length) {
          array[index3] = args2[start + index3];
        }
        index3 = -1;
        var otherArgs = Array(start + 1);
        while (++index3 < start) {
          otherArgs[index3] = args2[index3];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// ../../node_modules/lodash/constant.js
var require_constant = __commonJS({
  "../../node_modules/lodash/constant.js"(exports, module) {
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
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// ../../node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "../../node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// ../../node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "../../node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq2 = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject4 = require_isObject();
    function isIterateeCall(value2, index3, object) {
      if (!isObject4(object)) {
        return false;
      }
      var type = typeof index3;
      if (type == "number" ? isArrayLike(object) && isIndex(index3, object.length) : type == "string" && index3 in object) {
        return eq2(object[index3], value2);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// ../../node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "../../node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index3 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard2 = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index3 < length) {
          var source2 = sources[index3];
          if (source2) {
            assigner(object, source2, index3, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// ../../node_modules/lodash/mergeWith.js
var require_mergeWith = __commonJS({
  "../../node_modules/lodash/mergeWith.js"(exports, module) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var mergeWith2 = createAssigner(function(object, source2, srcIndex, customizer) {
      baseMerge(object, source2, srcIndex, customizer);
    });
    module.exports = mergeWith2;
  }
});

// ../../node_modules/store2/dist/store2.js
var require_store2 = __commonJS({
  "../../node_modules/store2/dist/store2.js"(exports, module) {
    (function(window2, define) {
      var _ = {
        version: "2.14.2",
        areas: {},
        apis: {},
        nsdelim: ".",
        // utilities
        inherit: function(api, o) {
          for (var p in api) {
            if (!o.hasOwnProperty(p)) {
              Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
            }
          }
          return o;
        },
        stringify: function(d, fn) {
          return d === void 0 || typeof d === "function" ? d + "" : JSON.stringify(d, fn || _.replace);
        },
        parse: function(s, fn) {
          try {
            return JSON.parse(s, fn || _.revive);
          } catch (e) {
            return s;
          }
        },
        // extension hooks
        fn: function(name2, fn) {
          _.storeAPI[name2] = fn;
          for (var api in _.apis) {
            _.apis[api][name2] = fn;
          }
        },
        get: function(area, key2) {
          return area.getItem(key2);
        },
        set: function(area, key2, string) {
          area.setItem(key2, string);
        },
        remove: function(area, key2) {
          area.removeItem(key2);
        },
        key: function(area, i) {
          return area.key(i);
        },
        length: function(area) {
          return area.length;
        },
        clear: function(area) {
          area.clear();
        },
        // core functions
        Store: function(id, area, namespace) {
          var store3 = _.inherit(_.storeAPI, function(key2, data, overwrite) {
            if (arguments.length === 0) {
              return store3.getAll();
            }
            if (typeof data === "function") {
              return store3.transact(key2, data, overwrite);
            }
            if (data !== void 0) {
              return store3.set(key2, data, overwrite);
            }
            if (typeof key2 === "string" || typeof key2 === "number") {
              return store3.get(key2);
            }
            if (typeof key2 === "function") {
              return store3.each(key2);
            }
            if (!key2) {
              return store3.clear();
            }
            return store3.setAll(key2, data);
          });
          store3._id = id;
          try {
            var testKey = "__store2_test";
            area.setItem(testKey, "ok");
            store3._area = area;
            area.removeItem(testKey);
          } catch (e) {
            store3._area = _.storage("fake");
          }
          store3._ns = namespace || "";
          if (!_.areas[id]) {
            _.areas[id] = store3._area;
          }
          if (!_.apis[store3._ns + store3._id]) {
            _.apis[store3._ns + store3._id] = store3;
          }
          return store3;
        },
        storeAPI: {
          // admin functions
          area: function(id, area) {
            var store3 = this[id];
            if (!store3 || !store3.area) {
              store3 = _.Store(id, area, this._ns);
              if (!this[id]) {
                this[id] = store3;
              }
            }
            return store3;
          },
          namespace: function(namespace, singleArea, delim) {
            delim = delim || this._delim || _.nsdelim;
            if (!namespace) {
              return this._ns ? this._ns.substring(0, this._ns.length - delim.length) : "";
            }
            var ns = namespace, store3 = this[ns];
            if (!store3 || !store3.namespace) {
              store3 = _.Store(this._id, this._area, this._ns + ns + delim);
              store3._delim = delim;
              if (!this[ns]) {
                this[ns] = store3;
              }
              if (!singleArea) {
                for (var name2 in _.areas) {
                  store3.area(name2, _.areas[name2]);
                }
              }
            }
            return store3;
          },
          isFake: function(force) {
            if (force) {
              this._real = this._area;
              this._area = _.storage("fake");
            } else if (force === false) {
              this._area = this._real || this._area;
            }
            return this._area.name === "fake";
          },
          toString: function() {
            return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
          },
          // storage functions
          has: function(key2) {
            if (this._area.has) {
              return this._area.has(this._in(key2));
            }
            return !!(this._in(key2) in this._area);
          },
          size: function() {
            return this.keys().length;
          },
          each: function(fn, fill) {
            for (var i = 0, m = _.length(this._area); i < m; i++) {
              var key2 = this._out(_.key(this._area, i));
              if (key2 !== void 0) {
                if (fn.call(this, key2, this.get(key2), fill) === false) {
                  break;
                }
              }
              if (m > _.length(this._area)) {
                m--;
                i--;
              }
            }
            return fill || this;
          },
          keys: function(fillList) {
            return this.each(function(k, v2, list) {
              list.push(k);
            }, fillList || []);
          },
          get: function(key2, alt) {
            var s = _.get(this._area, this._in(key2)), fn;
            if (typeof alt === "function") {
              fn = alt;
              alt = null;
            }
            return s !== null ? _.parse(s, fn) : alt != null ? alt : s;
          },
          getAll: function(fillObj) {
            return this.each(function(k, v2, all) {
              all[k] = v2;
            }, fillObj || {});
          },
          transact: function(key2, fn, alt) {
            var val = this.get(key2, alt), ret = fn(val);
            this.set(key2, ret === void 0 ? val : ret);
            return this;
          },
          set: function(key2, data, overwrite) {
            var d = this.get(key2), replacer3;
            if (d != null && overwrite === false) {
              return data;
            }
            if (typeof overwrite === "function") {
              replacer3 = overwrite;
              overwrite = void 0;
            }
            return _.set(this._area, this._in(key2), _.stringify(data, replacer3), overwrite) || d;
          },
          setAll: function(data, overwrite) {
            var changed, val;
            for (var key2 in data) {
              val = data[key2];
              if (this.set(key2, val, overwrite) !== val) {
                changed = true;
              }
            }
            return changed;
          },
          add: function(key2, data, replacer3) {
            var d = this.get(key2);
            if (d instanceof Array) {
              data = d.concat(data);
            } else if (d !== null) {
              var type = typeof d;
              if (type === typeof data && type === "object") {
                for (var k in data) {
                  d[k] = data[k];
                }
                data = d;
              } else {
                data = d + data;
              }
            }
            _.set(this._area, this._in(key2), _.stringify(data, replacer3));
            return data;
          },
          remove: function(key2, alt) {
            var d = this.get(key2, alt);
            _.remove(this._area, this._in(key2));
            return d;
          },
          clear: function() {
            if (!this._ns) {
              _.clear(this._area);
            } else {
              this.each(function(k) {
                _.remove(this._area, this._in(k));
              }, 1);
            }
            return this;
          },
          clearAll: function() {
            var area = this._area;
            for (var id in _.areas) {
              if (_.areas.hasOwnProperty(id)) {
                this._area = _.areas[id];
                this.clear();
              }
            }
            this._area = area;
            return this;
          },
          // internal use functions
          _in: function(k) {
            if (typeof k !== "string") {
              k = _.stringify(k);
            }
            return this._ns ? this._ns + k : k;
          },
          _out: function(k) {
            return this._ns ? k && k.indexOf(this._ns) === 0 ? k.substring(this._ns.length) : void 0 : (
              // so each() knows to skip it
              k
            );
          }
        },
        // end _.storeAPI
        storage: function(name2) {
          return _.inherit(_.storageAPI, { items: {}, name: name2 });
        },
        storageAPI: {
          length: 0,
          has: function(k) {
            return this.items.hasOwnProperty(k);
          },
          key: function(i) {
            var c2 = 0;
            for (var k in this.items) {
              if (this.has(k) && i === c2++) {
                return k;
              }
            }
          },
          setItem: function(k, v2) {
            if (!this.has(k)) {
              this.length++;
            }
            this.items[k] = v2;
          },
          removeItem: function(k) {
            if (this.has(k)) {
              delete this.items[k];
              this.length--;
            }
          },
          getItem: function(k) {
            return this.has(k) ? this.items[k] : null;
          },
          clear: function() {
            for (var k in this.items) {
              this.removeItem(k);
            }
          }
        }
        // end _.storageAPI
      };
      var store2 = (
        // safely set this up (throws error in IE10/32bit mode for local files)
        _.Store("local", function() {
          try {
            return localStorage;
          } catch (e) {
          }
        }())
      );
      store2.local = store2;
      store2._ = _;
      store2.area("session", function() {
        try {
          return sessionStorage;
        } catch (e) {
        }
      }());
      store2.area("page", _.storage("page"));
      if (typeof define === "function" && define.amd !== void 0) {
        define("store2", [], function() {
          return store2;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = store2;
      } else {
        if (window2.store) {
          _.conflict = window2.store;
        }
        window2.store = store2;
      }
    })(exports, exports && exports.define);
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
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
    function setCacheHas(value2) {
      return this.__data__.has(value2);
    }
    module.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache2 = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index3 = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache2();
      while (++index3 < length) {
        this.add(values[index3]);
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
    function arraySome(array, predicate) {
      var index3 = -1, length = array == null ? 0 : array.length;
      while (++index3 < length) {
        if (predicate(array[index3], index3, array)) {
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
    function cacheHas(cache, key2) {
      return cache.has(key2);
    }
    module.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module) {
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
      var index3 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index3 < arrLength) {
        var arrValue = array[index3], othValue = other[index3];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index3, other, array, stack) : customizer(arrValue, othValue, index3, array, other, stack);
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

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map2) {
      var index3 = -1, result2 = Array(map2.size);
      map2.forEach(function(value2, key2) {
        result2[++index3] = [key2, value2];
      });
      return result2;
    }
    module.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index3 = -1, result2 = Array(set2.size);
      set2.forEach(function(value2) {
        result2[++index3] = value2;
      });
      return result2;
    }
    module.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol3 = require_Symbol2();
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
    function arrayPush(array, values) {
      var index3 = -1, length = values.length, offset = array.length;
      while (++index3 < length) {
        array[offset + index3] = values[index3];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
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
    function arrayFilter(array, predicate) {
      var index3 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
      while (++index3 < length) {
        var value2 = array[index3];
        if (predicate(value2, index3, array)) {
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
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module) {
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

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg2();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module) {
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

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys2;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys2 = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index3 = objLength;
      while (index3--) {
        var key2 = objProps[index3];
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
      while (++index3 < objLength) {
        key2 = objProps[index3];
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
    var getNative2 = require_getNative();
    var root3 = require_root2();
    var DataView2 = getNative2(root3, "DataView");
    module.exports = DataView2;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root2();
    var Promise2 = getNative2(root3, "Promise");
    module.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root2();
    var Set2 = getNative2(root3, "Set");
    module.exports = Set2;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root2();
    var WeakMap2 = getNative2(root3, "WeakMap");
    module.exports = WeakMap2;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map3 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag2 = require_baseGetTag2();
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
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike2 = require_isObjectLike2();
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

// ../../node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "../../node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value2, other) {
      return baseIsEqual(value2, other);
    }
    module.exports = isEqual2;
  }
});

// ../../node_modules/lodash/_arrayAggregator.js
var require_arrayAggregator = __commonJS({
  "../../node_modules/lodash/_arrayAggregator.js"(exports, module) {
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index3 = -1, length = array == null ? 0 : array.length;
      while (++index3 < length) {
        var value2 = array[index3];
        setter(accumulator, value2, iteratee(value2), array);
      }
      return accumulator;
    }
    module.exports = arrayAggregator;
  }
});

// ../../node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "../../node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys2 = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys2);
    }
    module.exports = baseForOwn;
  }
});

// ../../node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "../../node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index3 = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index3-- : ++index3 < length) {
          if (iteratee(iterable[index3], index3, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// ../../node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "../../node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// ../../node_modules/lodash/_baseAggregator.js
var require_baseAggregator = __commonJS({
  "../../node_modules/lodash/_baseAggregator.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value2, key2, collection2) {
        setter(accumulator, value2, iteratee(value2), collection2);
      });
      return accumulator;
    }
    module.exports = baseAggregator;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source2, matchData, customizer) {
      var index3 = matchData.length, length = index3, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index3--) {
        var data = matchData[index3];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index3 < length) {
        data = matchData[index3];
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
    var isObject4 = require_isObject();
    function isStrictComparable(value2) {
      return value2 === value2 && !isObject4(value2);
    }
    module.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys2 = require_keys();
    function getMatchData(object) {
      var result2 = keys2(object), length = result2.length;
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
    var baseGetTag2 = require_baseGetTag2();
    var isObjectLike2 = require_isObjectLike2();
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
    var MapCache2 = require_MapCache();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function memoize6(func, resolver) {
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
      memoized.cache = new (memoize6.Cache || MapCache2)();
      return memoized;
    }
    memoize6.Cache = MapCache2;
    module.exports = memoize6;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize6 = require_memoize();
    var MAX_MEMOIZE_SIZE2 = 500;
    function memoizeCapped2(func) {
      var result2 = memoize6(func, function(key2) {
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
    function arrayMap2(array, iteratee) {
      var index3 = -1, length = array == null ? 0 : array.length, result2 = Array(length);
      while (++index3 < length) {
        result2[index3] = iteratee(array[index3], index3, array);
      }
      return result2;
    }
    module.exports = arrayMap2;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol3 = require_Symbol2();
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
    var castPath2 = require_castPath();
    var toKey2 = require_toKey();
    function baseGet2(object, path) {
      path = castPath2(path, object);
      var index3 = 0, length = path.length;
      while (object != null && index3 < length) {
        object = object[toKey2(path[index3++])];
      }
      return index3 && index3 == length ? object : void 0;
    }
    module.exports = baseGet2;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js"(exports, module) {
    var baseGet2 = require_baseGet();
    function get3(object, path, defaultValue) {
      var result2 = object == null ? void 0 : baseGet2(object, path);
      return result2 === void 0 ? defaultValue : result2;
    }
    module.exports = get3;
  }
});

// ../../node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../../node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key2) {
      return object != null && key2 in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// ../../node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../../node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath2 = require_castPath();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey2 = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath2(path, object);
      var index3 = -1, length = path.length, result2 = false;
      while (++index3 < length) {
        var key2 = toKey2(path[index3]);
        if (!(result2 = object != null && hasFunc(object, key2))) {
          break;
        }
        object = object[key2];
      }
      if (result2 || ++index3 != length) {
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
    var baseIsEqual = require_baseIsEqual();
    var get3 = require_get();
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
        var objValue = get3(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// ../../node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../../node_modules/lodash/_baseProperty.js"(exports, module) {
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

// ../../node_modules/lodash/_createAggregator.js
var require_createAggregator = __commonJS({
  "../../node_modules/lodash/_createAggregator.js"(exports, module) {
    var arrayAggregator = require_arrayAggregator();
    var baseAggregator = require_baseAggregator();
    var baseIteratee = require_baseIteratee();
    var isArray2 = require_isArray();
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
      };
    }
    module.exports = createAggregator;
  }
});

// ../../node_modules/lodash/countBy.js
var require_countBy = __commonJS({
  "../../node_modules/lodash/countBy.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var createAggregator = require_createAggregator();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var countBy2 = createAggregator(function(result2, value2, key2) {
      if (hasOwnProperty5.call(result2, key2)) {
        ++result2[key2];
      } else {
        baseAssignValue(result2, key2, 1);
      }
    });
    module.exports = countBy2;
  }
});

// ../../node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "../../node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues2(object, iteratee) {
      var result2 = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value2, key2, object2) {
        baseAssignValue(result2, key2, iteratee(value2, key2, object2));
      });
      return result2;
    }
    module.exports = mapValues2;
  }
});

// ../../node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "../../node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath2 = require_castPath();
    var isIndex = require_isIndex();
    var isObject4 = require_isObject();
    var toKey2 = require_toKey();
    function baseSet(object, path, value2, customizer) {
      if (!isObject4(object)) {
        return object;
      }
      path = castPath2(path, object);
      var index3 = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index3 < length) {
        var key2 = toKey2(path[index3]), newValue = value2;
        if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
          return object;
        }
        if (index3 != lastIndex) {
          var objValue = nested[key2];
          newValue = customizer ? customizer(objValue, key2, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject4(objValue) ? objValue : isIndex(path[index3 + 1]) ? [] : {};
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
    var baseGet2 = require_baseGet();
    var baseSet = require_baseSet();
    var castPath2 = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index3 = -1, length = paths.length, result2 = {};
      while (++index3 < length) {
        var path = paths[index3], value2 = baseGet2(object, path);
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
    var Symbol3 = require_Symbol2();
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
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result2) {
      var index3 = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result2 || (result2 = []);
      while (++index3 < length) {
        var value2 = array[index3];
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
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// ../../node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "../../node_modules/lodash/_flatRest.js"(exports, module) {
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
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick3 = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick3;
  }
});

// ../../lib/router/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  BaseLocationProvider: () => BaseLocationProvider,
  DEEPLY_EQUAL: () => DEEPLY_EQUAL,
  Link: () => Link2,
  Location: () => Location,
  LocationProvider: () => LocationProvider,
  Match: () => Match,
  Route: () => Route2,
  buildArgsParam: () => buildArgsParam,
  deepDiff: () => deepDiff,
  getMatch: () => getMatch,
  parsePath: () => parsePath,
  queryFromLocation: () => queryFromLocation,
  queryFromString: () => queryFromString,
  stringifyQuery: () => stringifyQuery,
  useNavigate: () => useNavigate2
});

// ../../lib/router/dist/chunk-TNTLX5UL.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1);
var import_qs = __toESM(require_lib(), 1);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_freeGlobal = __commonJS2({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal2;
  }
});
var require_root = __commonJS2({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal();
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root3 = freeGlobal2 || freeSelf2 || Function("return this")();
    module.exports = root3;
  }
});
var require_Symbol = __commonJS2({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root3 = require_root();
    var Symbol22 = root3.Symbol;
    module.exports = Symbol22;
  }
});
var require_getRawTag = __commonJS2({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol22 = require_Symbol();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var nativeObjectToString3 = objectProto6.toString;
    var symToStringTag3 = Symbol22 ? Symbol22.toStringTag : void 0;
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
var require_objectToString = __commonJS2({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto6 = Object.prototype;
    var nativeObjectToString3 = objectProto6.toString;
    function objectToString2(value2) {
      return nativeObjectToString3.call(value2);
    }
    module.exports = objectToString2;
  }
});
var require_baseGetTag = __commonJS2({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol22 = require_Symbol();
    var getRawTag2 = require_getRawTag();
    var objectToString2 = require_objectToString();
    var nullTag2 = "[object Null]";
    var undefinedTag2 = "[object Undefined]";
    var symToStringTag3 = Symbol22 ? Symbol22.toStringTag : void 0;
    function baseGetTag2(value2) {
      if (value2 == null) {
        return value2 === void 0 ? undefinedTag2 : nullTag2;
      }
      return symToStringTag3 && symToStringTag3 in Object(value2) ? getRawTag2(value2) : objectToString2(value2);
    }
    module.exports = baseGetTag2;
  }
});
var require_overArg = __commonJS2({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});
var require_getPrototype = __commonJS2({
  "../../node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});
var require_isObjectLike = __commonJS2({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike2(value2) {
      return value2 != null && typeof value2 == "object";
    }
    module.exports = isObjectLike2;
  }
});
var require_isPlainObject = __commonJS2({
  "../../node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike2 = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var objectCtorString = funcToString3.call(Object);
    function isPlainObject2(value2) {
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
    module.exports = isPlainObject2;
  }
});
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
var import_isPlainObject = __toESM2(require_isPlainObject());
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
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
var splitPathRegex = /\/([^/]+)\/(?:(.*)_)?([^/]+)?/;
var parsePath = (0, import_memoizerific.default)(1e3)((path) => {
  const result2 = {
    viewMode: void 0,
    storyId: void 0,
    refId: void 0
  };
  if (path) {
    const [, viewMode, refId, storyId] = path.toLowerCase().match(splitPathRegex) || [];
    if (viewMode) {
      Object.assign(result2, {
        viewMode,
        storyId,
        refId
      });
    }
  }
  return result2;
});
var DEEPLY_EQUAL = Symbol("Deeply equal");
var deepDiff = (value2, update2) => {
  if (typeof value2 !== typeof update2)
    return update2;
  if (dequal(value2, update2))
    return DEEPLY_EQUAL;
  if (Array.isArray(value2) && Array.isArray(update2)) {
    const res = update2.reduce((acc, upd, index3) => {
      const diff = deepDiff(value2[index3], upd);
      if (diff !== DEEPLY_EQUAL)
        acc[index3] = diff;
      return acc;
    }, new Array(update2.length));
    if (update2.length >= value2.length)
      return res;
    return res.concat(new Array(value2.length - update2.length).fill(void 0));
  }
  if ((0, import_isPlainObject.default)(value2) && (0, import_isPlainObject.default)(update2)) {
    return Object.keys({ ...value2, ...update2 }).reduce((acc, key2) => {
      const diff = deepDiff(value2?.[key2], update2?.[key2]);
      return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, { [key2]: diff });
    }, {});
  }
  return update2;
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
  if (Array.isArray(value2)) {
    return value2.every((v2) => validateArgs(key2, v2));
  }
  if ((0, import_isPlainObject.default)(value2)) {
    return Object.entries(value2).every(([k, v2]) => validateArgs(k, v2));
  }
  return false;
};
var encodeSpecialValues = (value2) => {
  if (value2 === void 0)
    return "!undefined";
  if (value2 === null)
    return "!null";
  if (typeof value2 === "string") {
    if (HEX_REGEXP.test(value2))
      return `!hex(${value2.slice(1)})`;
    if (COLOR_REGEXP.test(value2))
      return `!${value2.replace(/[\s%]/g, "")}`;
    return value2;
  }
  if (typeof value2 === "boolean") {
    return `!${value2}`;
  }
  if (Array.isArray(value2))
    return value2.map(encodeSpecialValues);
  if ((0, import_isPlainObject.default)(value2)) {
    return Object.entries(value2).reduce(
      (acc, [key2, val]) => Object.assign(acc, { [key2]: encodeSpecialValues(val) }),
      {}
    );
  }
  return value2;
};
var QS_OPTIONS = {
  encode: false,
  // we handle URL encoding ourselves
  delimiter: ";",
  // we don't actually create multiple query params
  allowDots: true,
  // encode objects using dot notation: obj.key=val
  format: "RFC1738",
  // encode spaces using the + sign
  serializeDate: (date) => `!date(${date.toISOString()})`
};
var buildArgsParam = (initialArgs, args2) => {
  const update2 = deepDiff(initialArgs, args2);
  if (!update2 || update2 === DEEPLY_EQUAL)
    return "";
  const object = Object.entries(update2).reduce((acc, [key2, value2]) => {
    if (validateArgs(key2, value2))
      return Object.assign(acc, { [key2]: value2 });
    once.warn(dedent`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `);
    return acc;
  }, {});
  return import_qs.default.stringify(encodeSpecialValues(object), QS_OPTIONS).replace(/ /g, "+").split(";").map((part) => part.replace("=", ":")).join(";");
};
var queryFromString = (0, import_memoizerific.default)(1e3)(
  (s) => s !== void 0 ? import_qs.default.parse(s, { ignoreQueryPrefix: true }) : {}
);
var queryFromLocation = (location3) => queryFromString(location3.search);
var stringifyQuery = (query) => import_qs.default.stringify(query, { addQueryPrefix: true, encode: false });
var getMatch = (0, import_memoizerific.default)(1e3)((current, target, startsWith = true) => {
  if (startsWith) {
    if (typeof target !== "string") {
      throw new Error("startsWith only works with string targets");
    }
    const startsWithTarget = current && current.startsWith(target);
    if (startsWithTarget) {
      return { path: current };
    }
    return null;
  }
  const currentIsTarget = typeof target === "string" && current === target;
  const matchTarget = current && target && current.match(target);
  if (currentIsTarget || matchTarget) {
    return { path: current };
  }
  return null;
});

// ../../lib/router/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var scope2 = (() => {
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
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source2 = arguments[i];
      for (var key2 in source2) {
        if (Object.prototype.hasOwnProperty.call(source2, key2)) {
          target[key2] = source2[key2];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
  return Object.freeze(obj);
};
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
function createBrowserHistory(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _options = options2, _options$window = _options.window, window2 = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window2.history;
  function getIndexAndLocation() {
    var _window$location = window2.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index3 - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          warning(
            false,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          );
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window2.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index3 = _getIndexAndLocation2[0], location3 = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index3 == null) {
    index3 = 0;
    globalHistory.replaceState(_extends2({}, globalHistory.state, {
      idx: index3
    }), "");
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends2({
      pathname: location3.pathname,
      hash: "",
      search: ""
    }, typeof to === "string" ? parsePath2(to) : to, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index22) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index22
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location22, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location22,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index3 = _getIndexAndLocation3[0];
    location3 = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location: location3
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index3 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index3), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location3;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },
    push: function push(fn) {
      handlers.push(fn);
      return function() {
        handlers = handlers.filter(function(handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function(fn) {
        return fn && fn(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath2(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning2(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
{
  NavigationContext.displayName = "Navigation";
}
var LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
{
  LocationContext.displayName = "Location";
}
var RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
  outlet: null,
  matches: []
});
{
  RouteContext.displayName = "Route";
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator3,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator: navigator3,
    static: staticProp
  }), [basename, navigator3, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath2(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key: key2 = "default"
  } = locationProp;
  let location3 = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key: key2
    };
  }, [basename, pathname, search, hash, state, key2]);
  warning2(location3 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.");
  if (location3 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location: location3,
      navigationType
    }
  }));
}
function useHref(to) {
  !useInRouterContext() ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : void 0;
  let {
    basename,
    navigator: navigator3
  } = (0, import_react.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator3.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : void 0;
  let {
    basename,
    navigator: navigator3
  } = (0, import_react.useContext)(NavigationContext);
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(function(to, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    warning2(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator3.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options2.replace ? navigator3.replace : navigator3.push)(path, options2.state);
  }, [basename, navigator3, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath2(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath2(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath2(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function _extends22() {
  _extends22 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source2 = arguments[i];
      for (var key2 in source2) {
        if (Object.prototype.hasOwnProperty.call(source2, key2)) {
          target[key2] = source2[key2];
        }
      }
    }
    return target;
  };
  return _extends22.apply(this, arguments);
}
function _objectWithoutPropertiesLoose2(source2, excluded) {
  if (source2 == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source2[key2];
  }
  return target;
}
var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to"];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = (0, import_react.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react.useLayoutEffect)(() => history.listen(setState), [history]);
  return /* @__PURE__ */ (0, import_react.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = /* @__PURE__ */ (0, import_react.forwardRef)(function LinkWithRef(_ref3, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref3, rest = _objectWithoutPropertiesLoose2(_ref3, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ (0, import_react.createElement)("a", _extends22({}, rest, {
      href,
      onClick: handleClick,
      ref,
      target
    }))
  );
});
{
  Link.displayName = "Link";
}
var NavLink = /* @__PURE__ */ (0, import_react.forwardRef)(function NavLinkWithRef(_ref4, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to
  } = _ref4, rest = _objectWithoutPropertiesLoose2(_ref4, _excluded2);
  let location3 = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location3.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /* @__PURE__ */ (0, import_react.createElement)(Link, _extends22({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }));
});
{
  NavLink.displayName = "NavLink";
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location3 = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react.useCallback)((event) => {
    if (event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location3) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location3, navigate, path, replaceProp, state, target, to]);
}
var ToggleVisibility = ({ hidden, children }) => /* @__PURE__ */ import_react.default.createElement("div", { hidden }, children);
var { document: document2 } = scope2;
var getBase = () => `${document2.location.pathname}?`;
var useNavigate2 = () => {
  const navigate = useNavigate();
  return (0, import_react.useCallback)((to, { plain, ...options2 } = {}) => {
    if (typeof to === "string" && to.startsWith("#")) {
      document2.location.hash = to;
      return void 0;
    }
    if (typeof to === "string") {
      const target = plain ? to : `?path=${to}`;
      return navigate(target, options2);
    }
    if (typeof to === "number") {
      return navigate(to);
    }
    return void 0;
  }, []);
};
var Link2 = ({ to, children, ...rest }) => /* @__PURE__ */ import_react.default.createElement(Link, { to: `${getBase()}path=${to}`, ...rest }, children);
Link2.displayName = "QueryLink";
var Location = ({ children }) => {
  const location3 = useLocation();
  const { path, singleStory } = queryFromString(location3.search);
  const { viewMode, storyId, refId } = parsePath(path);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children({
    path: path || "/",
    location: location3,
    viewMode,
    storyId,
    refId,
    singleStory: singleStory === "true"
  }));
};
Location.displayName = "QueryLocation";
function Match({
  children,
  path: targetPath,
  startsWith = false
}) {
  return /* @__PURE__ */ import_react.default.createElement(Location, null, ({ path: urlPath, ...rest }) => children({
    match: getMatch(urlPath, targetPath, startsWith),
    ...rest
  }));
}
Match.displayName = "QueryMatch";
function Route2(input) {
  const { children, hideOnly, ...rest } = input;
  if (rest.startsWith === void 0) {
    rest.startsWith = false;
  }
  const matchProps = rest;
  return /* @__PURE__ */ import_react.default.createElement(Match, { ...matchProps }, ({ match }) => {
    if (hideOnly) {
      return /* @__PURE__ */ import_react.default.createElement(ToggleVisibility, { hidden: !match }, children);
    }
    return match ? children : null;
  });
}
Route2.displayName = "Route";
var LocationProvider = (...args2) => BrowserRouter(...args2);
var BaseLocationProvider = (...args2) => Router(...args2);

// ../../lib/core-events/dist/index.mjs
var dist_exports2 = {};
__export(dist_exports2, {
  CHANNEL_CREATED: () => CHANNEL_CREATED,
  CONFIG_ERROR: () => CONFIG_ERROR,
  CURRENT_STORY_WAS_SET: () => CURRENT_STORY_WAS_SET,
  DOCS_PREPARED: () => DOCS_PREPARED,
  DOCS_RENDERED: () => DOCS_RENDERED,
  FORCE_REMOUNT: () => FORCE_REMOUNT,
  FORCE_RE_RENDER: () => FORCE_RE_RENDER,
  GLOBALS_UPDATED: () => GLOBALS_UPDATED,
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
  UNHANDLED_ERRORS_WHILE_PLAYING: () => UNHANDLED_ERRORS_WHILE_PLAYING,
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
  events2["UNHANDLED_ERRORS_WHILE_PLAYING"] = "unhandledErrorsWhilePlaying";
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
  UNHANDLED_ERRORS_WHILE_PLAYING,
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

// ../../lib/channels/dist/index.mjs
var dist_exports3 = {};
__export(dist_exports3, {
  Channel: () => Channel,
  PostMessageTransport: () => PostMessageTransport,
  WebsocketTransport: () => WebsocketTransport,
  createBrowserChannel: () => createBrowserChannel,
  default: () => src_default2
});

// ../../node_modules/telejson/dist/chunk-465TF3XA.mjs
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS3 = (cb, mod) => function __require() {
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
var __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
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
var import_memoizerific2 = __toESM(require_memoizerific(), 1);
var require_shams2 = __commonJS3({
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
var require_has_symbols2 = __commonJS3({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams2();
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
var require_implementation2 = __commonJS3({
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
var require_function_bind2 = __commonJS3({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});
var require_src = __commonJS3({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind2();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});
var require_get_intrinsic2 = __commonJS3({
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
    var hasSymbols = require_has_symbols2()();
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
    var bind = require_function_bind2();
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
var require_call_bind2 = __commonJS3({
  "node_modules/call-bind/index.js"(exports, module) {
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
var require_callBound2 = __commonJS3({
  "node_modules/call-bind/callBound.js"(exports, module) {
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
var require_shams22 = __commonJS3({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams2();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});
var require_is_regex = __commonJS3({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound2();
    var hasToStringTag = require_shams22()();
    var has3;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has3 = callBound("Object.prototype.hasOwnProperty");
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
      var hasLastIndexDataProperty = descriptor && has3(descriptor, "value");
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
var require_is_function = __commonJS3({
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
var require_is_symbol = __commonJS3({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols2()();
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
var import_is_regex = __toESM3(require_is_regex());
var import_is_function = __toESM3(require_is_function());
var import_is_symbol = __toESM3(require_is_symbol());
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
  var index3 = -1, length = array == null ? 0 : array.length, result2 = Array(length);
  while (++index3 < length) {
    result2[index3] = iteratee(array[index3], index3, array);
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
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
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
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  if (index3 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index3 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index3, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key2) {
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  return index3 < 0 ? void 0 : data[index3][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key2, value2) {
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  if (index3 < 0) {
    ++this.size;
    data.push([key2, value2]);
  } else {
    data[index3][1] = value2;
  }
  return this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
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
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
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
function memoize3(func, resolver) {
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
  memoized.cache = new (memoize3.Cache || MapCache_default)();
  return memoized;
}
memoize3.Cache = MapCache_default;
var memoize_default = memoize3;
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
  var index3 = 0, length = path.length;
  while (object != null && index3 < length) {
    object = object[toKey_default(path[index3++])];
  }
  return index3 && index3 == length ? object : void 0;
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
var cleanCode = (0, import_memoizerific2.default)(1e4)(
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
  let keys2;
  return function replace(key2, value2) {
    try {
      if (key2 === "") {
        keys2 = [];
        objects = /* @__PURE__ */ new Map([[value2, "[]"]]);
        map2 = /* @__PURE__ */ new Map();
        stack = [];
        return value2;
      }
      const origin = map2.get(this) || this;
      while (stack.length && origin !== stack[0]) {
        stack.shift();
        keys2.pop();
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
        return `_duplicate_${JSON.stringify(keys2)}`;
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
        keys2.push(key2);
        stack.unshift(converted);
        objects.set(value2, JSON.stringify(keys2));
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
      value2.forEach((v2, index3) => {
        if (v2 === "_undefined_") {
          mutated.set(v2, true);
          value2[index3] = void 0;
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

// ../../lib/channels/dist/index.mjs
var import_qs2 = __toESM(require_lib(), 1);

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant2(condition, message) {
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

// ../../lib/channels/dist/index.mjs
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
var { document: document22, location } = scope;
var KEY = "storybook-channel";
var defaultEventOptions = { allowFunction: false, maxDepth: 25 };
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
    const query = import_qs2.default.parse(location?.search || "", { ignoreQueryPrefix: true });
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
        document22.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
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
        document22.querySelectorAll('[data-is-storybook="true"]')
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
        document22.querySelectorAll("#storybook-preview-iframe")
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
        const eventString = Object.values(dist_exports2).includes(event.type) ? `<span style="color: #FF4785">${event.type}</span>` : `<span style="color: #FFAE00">${event.type}</span>`;
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
        invariant2(this.handler, "ChannelHandler should be set");
        this.handler(event);
      }
    } catch (error) {
      logger.error(error);
    }
  }
};
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
      invariant2(this.handler, "WebsocketTransport handler should be set");
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
    const data = stringify(event, {
      maxDepth: 15,
      allowFunction: false,
      ...scope.CHANNEL_OPTIONS
    });
    this.socket.send(data);
  }
  flush() {
    const { buffer } = this;
    this.buffer = [];
    buffer.forEach((event) => this.send(event));
  }
};
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

// ../../lib/manager-api/dist/index.mjs
var dist_exports5 = {};
__export(dist_exports5, {
  ActiveTabs: () => ActiveTabs2,
  Consumer: () => ManagerConsumer,
  ManagerContext: () => ManagerContext,
  Provider: () => ManagerProvider,
  addons: () => addons,
  combineParameters: () => combineParameters,
  controlOrMetaKey: () => controlOrMetaKey,
  controlOrMetaSymbol: () => controlOrMetaSymbol,
  eventMatchesShortcut: () => eventMatchesShortcut,
  eventToShortcut: () => eventToShortcut,
  isMacLike: () => isMacLike,
  isShortcutTaken: () => isShortcutTaken,
  keyToSymbol: () => keyToSymbol,
  merge: () => merge_default,
  mockChannel: () => mockChannel,
  optionOrAltSymbol: () => optionOrAltSymbol,
  shortcutMatchesShortcut: () => shortcutMatchesShortcut,
  shortcutToHumanString: () => shortcutToHumanString,
  types: () => typesX,
  useAddonState: () => useAddonState,
  useArgTypes: () => useArgTypes,
  useArgs: () => useArgs,
  useChannel: () => useChannel,
  useGlobalTypes: () => useGlobalTypes,
  useGlobals: () => useGlobals,
  useParameter: () => useParameter,
  useSharedState: () => useSharedState,
  useStoryPrepared: () => useStoryPrepared,
  useStorybookApi: () => useStorybookApi,
  useStorybookState: () => useStorybookState
});
var import_react2 = __toESM(require_react(), 1);
var import_mergeWith = __toESM(require_mergeWith(), 1);
var import_store2 = __toESM(require_store2(), 1);
var import_isEqual = __toESM(require_isEqual(), 1);

// ../../lib/types/dist/index.mjs
var dist_exports4 = {};
__export(dist_exports4, {
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
  return Addon_TypesEnum2;
})(Addon_TypesEnum || {});

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
        var y, g, d, A3 = r.call(o), F = r.call(s);
        if (o === s)
          return true;
        if (o == null || s == null)
          return false;
        if (p.indexOf(o) > -1 && p.indexOf(s) > -1)
          return true;
        if (p.push(o, s), A3 != F || (y = n(o), g = n(s), y.length != g.length || y.some(function(l) {
          return !i(o[l], s[l], p);
        })))
          return false;
        switch (A3.slice(8, -1)) {
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
var c = v(x());
var L = (r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
var f2 = (r, e) => {
  let n = L(r);
  if (n === "")
    throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);
  return n;
};
var N = (r, e) => `${f2(r, "kind")}${e ? `--${f2(e, "name")}` : ""}`;

// ../../node_modules/ts-dedent/esm/index.js
function dedent2(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
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

// ../../lib/manager-api/dist/index.mjs
var import_memoizerific3 = __toESM(require_memoizerific(), 1);
var import_countBy = __toESM(require_countBy(), 1);
var import_mapValues = __toESM(require_mapValues(), 1);
var import_pick = __toESM(require_pick(), 1);

// ../../node_modules/dequal/dist/index.mjs
var has2 = Object.prototype.hasOwnProperty;
function find2(iter, tar, key2) {
  for (key2 of iter.keys()) {
    if (dequal2(key2, tar))
      return key2;
  }
}
function dequal2(foo, bar) {
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
        while (len-- && dequal2(foo[len], bar[len]))
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
          tmp = find2(bar, tmp);
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
          tmp = find2(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal2(len[1], bar.get(tmp))) {
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
        if (has2.call(foo, ctor) && ++len && !has2.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal2(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// ../../lib/manager-api/dist/index.mjs
var __create3 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames3 = Object.getOwnPropertyNames;
var __getProtoOf3 = Object.getPrototypeOf;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __commonJS4 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name2 in all)
    __defProp3(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames3(from))
      if (!__hasOwnProp3.call(to, key2) && key2 !== except)
        __defProp3(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc3(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM4 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_constants = __commonJS4({
  "../../node_modules/semver/internal/constants.js"(exports, module) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});
var require_debug = __commonJS4({
  "../../node_modules/semver/internal/debug.js"(exports, module) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args2) => console.error("SEMVER", ...args2) : () => {
    };
    module.exports = debug;
  }
});
var require_re = __commonJS4({
  "../../node_modules/semver/internal/re.js"(exports, module) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R2 = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value2) => {
      for (const [token, max] of safeRegexReplacements) {
        value2 = value2.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value2;
    };
    var createToken = (name2, value2, isGlobal) => {
      const safe = makeSafeRegex(value2);
      const index3 = R2++;
      debug(name2, index3, value2);
      t[name2] = index3;
      src[index3] = value2;
      re[index3] = new RegExp(value2, isGlobal ? "g" : void 0);
      safeRe[index3] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});
var require_parse_options = __commonJS4({
  "../../node_modules/semver/internal/parse-options.js"(exports, module) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options2) => {
      if (!options2) {
        return emptyOpts;
      }
      if (typeof options2 !== "object") {
        return looseOption;
      }
      return options2;
    };
    module.exports = parseOptions;
  }
});
var require_identifiers = __commonJS4({
  "../../node_modules/semver/internal/identifiers.js"(exports, module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b2) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b2);
      if (anum && bnum) {
        a = +a;
        b2 = +b2;
      }
      return a === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b2 ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b2) => compareIdentifiers(b2, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});
var require_semver = __commonJS4({
  "../../node_modules/semver/classes/semver.js"(exports, module) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version2, options2) {
        options2 = parseOptions(options2);
        if (version2 instanceof _SemVer) {
          if (version2.loose === !!options2.loose && version2.includePrerelease === !!options2.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version2, options2);
        this.options = options2;
        this.loose = !!options2.loose;
        this.includePrerelease = !!options2.includePrerelease;
        const m = version2.trim().match(options2.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b2 = other.prerelease[i];
          debug("prerelease compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b2 = other.build[i];
          debug("prerelease compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});
var require_parse2 = __commonJS4({
  "../../node_modules/semver/functions/parse.js"(exports, module) {
    var SemVer = require_semver();
    var parse2 = (version2, options2, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options2);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse2;
  }
});
var require_valid = __commonJS4({
  "../../node_modules/semver/functions/valid.js"(exports, module) {
    var parse2 = require_parse2();
    var valid = (version2, options2) => {
      const v2 = parse2(version2, options2);
      return v2 ? v2.version : null;
    };
    module.exports = valid;
  }
});
var require_clean = __commonJS4({
  "../../node_modules/semver/functions/clean.js"(exports, module) {
    var parse2 = require_parse2();
    var clean = (version2, options2) => {
      const s = parse2(version2.trim().replace(/^[=v]+/, ""), options2);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});
var require_inc = __commonJS4({
  "../../node_modules/semver/functions/inc.js"(exports, module) {
    var SemVer = require_semver();
    var inc = (version2, release, options2, identifier, identifierBase) => {
      if (typeof options2 === "string") {
        identifierBase = identifier;
        identifier = options2;
        options2 = void 0;
      }
      try {
        return new SemVer(
          version2 instanceof SemVer ? version2.version : version2,
          options2
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});
var require_diff = __commonJS4({
  "../../node_modules/semver/functions/diff.js"(exports, module) {
    var parse2 = require_parse2();
    var diff = (version1, version2) => {
      const v1 = parse2(version1, null, true);
      const v2 = parse2(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix2 = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix2 + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix2 + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix2 + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});
var require_major = __commonJS4({
  "../../node_modules/semver/functions/major.js"(exports, module) {
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});
var require_minor = __commonJS4({
  "../../node_modules/semver/functions/minor.js"(exports, module) {
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});
var require_patch = __commonJS4({
  "../../node_modules/semver/functions/patch.js"(exports, module) {
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});
var require_prerelease = __commonJS4({
  "../../node_modules/semver/functions/prerelease.js"(exports, module) {
    var parse2 = require_parse2();
    var prerelease = (version2, options2) => {
      const parsed = parse2(version2, options2);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});
var require_compare = __commonJS4({
  "../../node_modules/semver/functions/compare.js"(exports, module) {
    var SemVer = require_semver();
    var compare = (a, b2, loose) => new SemVer(a, loose).compare(new SemVer(b2, loose));
    module.exports = compare;
  }
});
var require_rcompare = __commonJS4({
  "../../node_modules/semver/functions/rcompare.js"(exports, module) {
    var compare = require_compare();
    var rcompare = (a, b2, loose) => compare(b2, a, loose);
    module.exports = rcompare;
  }
});
var require_compare_loose = __commonJS4({
  "../../node_modules/semver/functions/compare-loose.js"(exports, module) {
    var compare = require_compare();
    var compareLoose = (a, b2) => compare(a, b2, true);
    module.exports = compareLoose;
  }
});
var require_compare_build = __commonJS4({
  "../../node_modules/semver/functions/compare-build.js"(exports, module) {
    var SemVer = require_semver();
    var compareBuild = (a, b2, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b2, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});
var require_sort = __commonJS4({
  "../../node_modules/semver/functions/sort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b2) => compareBuild(a, b2, loose));
    module.exports = sort;
  }
});
var require_rsort = __commonJS4({
  "../../node_modules/semver/functions/rsort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b2) => compareBuild(b2, a, loose));
    module.exports = rsort;
  }
});
var require_gt = __commonJS4({
  "../../node_modules/semver/functions/gt.js"(exports, module) {
    var compare = require_compare();
    var gt = (a, b2, loose) => compare(a, b2, loose) > 0;
    module.exports = gt;
  }
});
var require_lt = __commonJS4({
  "../../node_modules/semver/functions/lt.js"(exports, module) {
    var compare = require_compare();
    var lt = (a, b2, loose) => compare(a, b2, loose) < 0;
    module.exports = lt;
  }
});
var require_eq2 = __commonJS4({
  "../../node_modules/semver/functions/eq.js"(exports, module) {
    var compare = require_compare();
    var eq2 = (a, b2, loose) => compare(a, b2, loose) === 0;
    module.exports = eq2;
  }
});
var require_neq = __commonJS4({
  "../../node_modules/semver/functions/neq.js"(exports, module) {
    var compare = require_compare();
    var neq = (a, b2, loose) => compare(a, b2, loose) !== 0;
    module.exports = neq;
  }
});
var require_gte = __commonJS4({
  "../../node_modules/semver/functions/gte.js"(exports, module) {
    var compare = require_compare();
    var gte = (a, b2, loose) => compare(a, b2, loose) >= 0;
    module.exports = gte;
  }
});
var require_lte = __commonJS4({
  "../../node_modules/semver/functions/lte.js"(exports, module) {
    var compare = require_compare();
    var lte = (a, b2, loose) => compare(a, b2, loose) <= 0;
    module.exports = lte;
  }
});
var require_cmp = __commonJS4({
  "../../node_modules/semver/functions/cmp.js"(exports, module) {
    var eq2 = require_eq2();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b2, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a === b2;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a !== b2;
        case "":
        case "=":
        case "==":
          return eq2(a, b2, loose);
        case "!=":
          return neq(a, b2, loose);
        case ">":
          return gt(a, b2, loose);
        case ">=":
          return gte(a, b2, loose);
        case "<":
          return lt(a, b2, loose);
        case "<=":
          return lte(a, b2, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});
var require_coerce = __commonJS4({
  "../../node_modules/semver/functions/coerce.js"(exports, module) {
    var SemVer = require_semver();
    var parse2 = require_parse2();
    var { safeRe: re, t } = require_re();
    var coerce = (version2, options2) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options2 = options2 || {};
      let match = null;
      if (!options2.rtl) {
        match = version2.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse2(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options2);
    };
    module.exports = coerce;
  }
});
var require_iterator = __commonJS4({
  "../../node_modules/yallist/iterator.js"(exports, module) {
    module.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});
var require_yallist = __commonJS4({
  "../../node_modules/yallist/yallist.js"(exports, module) {
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self2.push(arguments[i]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value2) {
      var inserted = node === self2.head ? new Node(value2, null, node, self2) : new Node(value2, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value2, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value2, prev, next, list);
      }
      this.list = list;
      this.value = value2;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});
var require_lru_cache = __commonJS4({
  "../../node_modules/semver/node_modules/lru-cache/index.js"(exports, module) {
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options2) {
        if (typeof options2 === "number")
          options2 = { max: options2 };
        if (!options2)
          options2 = {};
        if (options2.max && (typeof options2.max !== "number" || options2.max < 0))
          throw new TypeError("max must be a non-negative number");
        this[MAX] = options2.max || Infinity;
        const lc = options2.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options2.stale || false;
        if (options2.maxAge && typeof options2.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options2.maxAge || 0;
        this[DISPOSE] = options2.dispose;
        this[NO_DISPOSE_ON_SET] = options2.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options2.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h2) => h2);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key2, value2, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value2, key2);
        if (this[CACHE].has(key2)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key2));
            return false;
          }
          const node = this[CACHE].get(key2);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key2, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value2;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key2);
          trim(this);
          return true;
        }
        const hit = new Entry(key2, value2, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key2, value2);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key2, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key2) {
        if (!this[CACHE].has(key2))
          return false;
        const hit = this[CACHE].get(key2).value;
        return !isStale(this, hit);
      }
      get(key2) {
        return get22(this, key2, true);
      }
      peek(key2) {
        return get22(this, key2, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key2) {
        del(this, this[CACHE].get(key2));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value2, key2) => get22(this, key2, false));
      }
    };
    var get22 = (self2, key2, doUse) => {
      const node = self2[CACHE].get(key2);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key2, value2, length, now, maxAge) {
        this.key = key2;
        this.value = value2;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    };
    module.exports = LRUCache;
  }
});
var require_range = __commonJS4({
  "../../node_modules/semver/classes/range.js"(exports, module) {
    var Range = class _Range {
      constructor(range, options2) {
        options2 = parseOptions(options2);
        if (range instanceof _Range) {
          if (range.loose === !!options2.loose && range.includePrerelease === !!options2.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options2);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options2;
        this.loose = !!options2.loose;
        this.includePrerelease = !!options2.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c2) => c2.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c2) => !isNullSet(c2[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c2 of this.set) {
              if (c2.length === 1 && isAny(c2[0])) {
                this.set = [c2];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result2 = [...rangeMap.values()];
        cache.set(memoKey, result2);
        return result2;
      }
      intersects(range, options2) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options2) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options2) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options2);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version2) {
        if (!version2) {
          return false;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version2, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c2) => c2.value === "<0.0.0-0";
    var isAny = (c2) => c2.value === "";
    var isSatisfiable = (comparators, options2) => {
      let result2 = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result2 && remainingComparators.length) {
        result2 = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options2);
        });
        testComparator = remainingComparators.pop();
      }
      return result2;
    };
    var parseComparator = (comp, options2) => {
      debug("comp", comp, options2);
      comp = replaceCarets(comp, options2);
      debug("caret", comp);
      comp = replaceTildes(comp, options2);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options2);
      debug("xrange", comp);
      comp = replaceStars(comp, options2);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options2) => {
      return comp.trim().split(/\s+/).map((c2) => replaceTilde(c2, options2)).join(" ");
    };
    var replaceTilde = (comp, options2) => {
      const r = options2.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options2) => {
      return comp.trim().split(/\s+/).map((c2) => replaceCaret(c2, options2)).join(" ");
    };
    var replaceCaret = (comp, options2) => {
      debug("caret", comp, options2);
      const r = options2.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options2.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options2) => {
      debug("replaceXRanges", comp, options2);
      return comp.split(/\s+/).map((c2) => replaceXRange(c2, options2)).join(" ");
    };
    var replaceXRange = (comp, options2) => {
      comp = comp.trim();
      const r = options2.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options2.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options2) => {
      debug("replaceStars", comp, options2);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options2) => {
      debug("replaceGTE0", comp, options2);
      return comp.trim().replace(re[options2.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set2, version2, options2) => {
      for (let i = 0; i < set2.length; i++) {
        if (!set2[i].test(version2)) {
          return false;
        }
      }
      if (version2.prerelease.length && !options2.includePrerelease) {
        for (let i = 0; i < set2.length; i++) {
          debug(set2[i].semver);
          if (set2[i].semver === Comparator.ANY) {
            continue;
          }
          if (set2[i].semver.prerelease.length > 0) {
            const allowed = set2[i].semver;
            if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});
var require_comparator = __commonJS4({
  "../../node_modules/semver/classes/comparator.js"(exports, module) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options2) {
        options2 = parseOptions(options2);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options2.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options2);
        this.options = options2;
        this.loose = !!options2.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version2) {
        debug("Comparator.test", version2, this.options.loose);
        if (this.semver === ANY || version2 === ANY) {
          return true;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version2, this.operator, this.semver, this.options);
      }
      intersects(comp, options2) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options2).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options2).test(comp.semver);
        }
        options2 = parseOptions(options2);
        if (options2.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options2.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options2) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options2) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});
var require_satisfies = __commonJS4({
  "../../node_modules/semver/functions/satisfies.js"(exports, module) {
    var Range = require_range();
    var satisfies = (version2, range, options2) => {
      try {
        range = new Range(range, options2);
      } catch (er) {
        return false;
      }
      return range.test(version2);
    };
    module.exports = satisfies;
  }
});
var require_to_comparators = __commonJS4({
  "../../node_modules/semver/ranges/to-comparators.js"(exports, module) {
    var Range = require_range();
    var toComparators = (range, options2) => new Range(range, options2).set.map((comp) => comp.map((c2) => c2.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});
var require_max_satisfying = __commonJS4({
  "../../node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options2) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options2);
      } catch (er) {
        return null;
      }
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!max || maxSV.compare(v2) === -1) {
            max = v2;
            maxSV = new SemVer(max, options2);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});
var require_min_satisfying = __commonJS4({
  "../../node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options2) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options2);
      } catch (er) {
        return null;
      }
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!min || minSV.compare(v2) === 1) {
            min = v2;
            minSV = new SemVer(min, options2);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});
var require_min_version = __commonJS4({
  "../../node_modules/semver/ranges/min-version.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});
var require_valid2 = __commonJS4({
  "../../node_modules/semver/ranges/valid.js"(exports, module) {
    var Range = require_range();
    var validRange = (range, options2) => {
      try {
        return new Range(range, options2).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});
var require_outside = __commonJS4({
  "../../node_modules/semver/ranges/outside.js"(exports, module) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version2, range, hilo, options2) => {
      version2 = new SemVer(version2, options2);
      range = new Range(range, options2);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version2, range, options2)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options2)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options2)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});
var require_gtr = __commonJS4({
  "../../node_modules/semver/ranges/gtr.js"(exports, module) {
    var outside = require_outside();
    var gtr = (version2, range, options2) => outside(version2, range, ">", options2);
    module.exports = gtr;
  }
});
var require_ltr = __commonJS4({
  "../../node_modules/semver/ranges/ltr.js"(exports, module) {
    var outside = require_outside();
    var ltr = (version2, range, options2) => outside(version2, range, "<", options2);
    module.exports = ltr;
  }
});
var require_intersects = __commonJS4({
  "../../node_modules/semver/ranges/intersects.js"(exports, module) {
    var Range = require_range();
    var intersects = (r1, r2, options2) => {
      r1 = new Range(r1, options2);
      r2 = new Range(r2, options2);
      return r1.intersects(r2, options2);
    };
    module.exports = intersects;
  }
});
var require_simplify = __commonJS4({
  "../../node_modules/semver/ranges/simplify.js"(exports, module) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options2) => {
      const set2 = [];
      let first = null;
      let prev = null;
      const v2 = versions.sort((a, b2) => compare(a, b2, options2));
      for (const version2 of v2) {
        const included = satisfies(version2, range, options2);
        if (included) {
          prev = version2;
          if (!first) {
            first = version2;
          }
        } else {
          if (prev) {
            set2.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set2.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set2) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v2[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v2[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});
var require_subset = __commonJS4({
  "../../node_modules/semver/ranges/subset.js"(exports, module) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options2 = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options2);
      dom = new Range(dom, options2);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options2);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options2) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options2.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options2.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c2 of sub) {
        if (c2.operator === ">" || c2.operator === ">=") {
          gt = higherGT(gt, c2, options2);
        } else if (c2.operator === "<" || c2.operator === "<=") {
          lt = lowerLT(lt, c2, options2);
        } else {
          eqSet.add(c2.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options2);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq2 of eqSet) {
        if (gt && !satisfies(eq2, String(gt), options2)) {
          return null;
        }
        if (lt && !satisfies(eq2, String(lt), options2)) {
          return null;
        }
        for (const c2 of dom) {
          if (!satisfies(eq2, String(c2), options2)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options2.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options2.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c2 of dom) {
        hasDomGT = hasDomGT || c2.operator === ">" || c2.operator === ">=";
        hasDomLT = hasDomLT || c2.operator === "<" || c2.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomGTPre.major && c2.semver.minor === needDomGTPre.minor && c2.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c2.operator === ">" || c2.operator === ">=") {
            higher = higherGT(gt, c2, options2);
            if (higher === c2 && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c2), options2)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomLTPre.major && c2.semver.minor === needDomLTPre.minor && c2.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c2.operator === "<" || c2.operator === "<=") {
            lower = lowerLT(lt, c2, options2);
            if (lower === c2 && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c2), options2)) {
            return false;
          }
        }
        if (!c2.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b2, options2) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options2);
      return comp > 0 ? a : comp < 0 ? b2 : b2.operator === ">" && a.operator === ">=" ? b2 : a;
    };
    var lowerLT = (a, b2, options2) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options2);
      return comp < 0 ? a : comp > 0 ? b2 : b2.operator === "<" && a.operator === "<=" ? b2 : a;
    };
    module.exports = subset;
  }
});
var require_semver2 = __commonJS4({
  "../../node_modules/semver/index.js"(exports, module) {
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse2 = require_parse2();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq2 = require_eq2();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse: parse2,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq: eq2,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});
var createContext2 = ({ api, state }) => (0, import_react2.createContext)({ api, state });
var store_setup_default = (_) => {
  _.fn("set", function(key2, data) {
    return _.set(this._area, this._in(key2), stringify(data, { maxDepth: 50 }));
  });
  _.fn("get", function(key2, alt) {
    const value2 = _.get(this._area, this._in(key2));
    return value2 !== null ? parse(value2) : alt || value2;
  });
};
store_setup_default(import_store2.default._);
var STORAGE_KEY = "@storybook/manager/store";
function get2(storage) {
  const data = storage.get(STORAGE_KEY);
  return data || {};
}
function set(storage, value2) {
  return storage.set(STORAGE_KEY, value2);
}
function update(storage, patch) {
  const previous = get2(storage);
  return set(storage, { ...previous, ...patch });
}
var Store = class {
  constructor({ setState, getState }) {
    this.upstreamSetState = setState;
    this.upstreamGetState = getState;
  }
  // The assumption is that this will be called once, to initialize the React state
  // when the module is instantiated
  getInitialState(base) {
    return { ...base, ...get2(import_store2.default.local), ...get2(import_store2.default.session) };
  }
  getState() {
    return this.upstreamGetState();
  }
  async setState(inputPatch, cbOrOptions, inputOptions) {
    let callback;
    let options2;
    if (typeof cbOrOptions === "function") {
      callback = cbOrOptions;
      options2 = inputOptions;
    } else {
      options2 = cbOrOptions;
    }
    const { persistence = "none" } = options2 || {};
    let patch = {};
    let delta = {};
    if (typeof inputPatch === "function") {
      patch = (state) => {
        const getDelta = inputPatch;
        delta = getDelta(state);
        return delta;
      };
    } else {
      patch = inputPatch;
      delta = patch;
    }
    const newState = await new Promise((resolve) => {
      this.upstreamSetState(patch, () => {
        resolve(this.getState());
      });
    });
    if (persistence !== "none") {
      const storage = persistence === "session" ? import_store2.default.session : import_store2.default.local;
      await update(storage, delta);
    }
    if (callback) {
      callback(newState);
    }
    return newState;
  }
};
var merge_default = (a, b2) => (0, import_mergeWith.default)({}, a, b2, (objValue, srcValue) => {
  if (Array.isArray(srcValue) && Array.isArray(objValue)) {
    srcValue.forEach((s) => {
      const existing = objValue.find((o) => o === s || (0, import_isEqual.default)(o, s));
      if (!existing) {
        objValue.push(s);
      }
    });
    return objValue;
  }
  if (Array.isArray(objValue)) {
    logger.log(["the types mismatch, picking", objValue]);
    return objValue;
  }
  return void 0;
});
var main = (...additions) => additions.reduce((acc, item) => merge_default(acc, item), {});
var initial_state_default = main;
var provider_exports = {};
__export2(provider_exports, {
  init: () => init
});
var init = ({ provider, fullAPI }) => {
  return {
    api: provider.renderPreview ? { renderPreview: provider.renderPreview } : {},
    state: {},
    init: () => {
      provider.handleAPI(fullAPI);
    }
  };
};
var addons_exports = {};
__export2(addons_exports, {
  ensurePanel: () => ensurePanel,
  init: () => init2
});
function ensurePanel(panels, selectedPanel, currentPanel) {
  const keys2 = Object.keys(panels);
  if (keys2.indexOf(selectedPanel) >= 0) {
    return selectedPanel;
  }
  if (keys2.length) {
    return keys2[0];
  }
  return currentPanel;
}
var init2 = ({ provider, store: store2, fullAPI }) => {
  const api = {
    getElements: (type) => provider.getElements(type),
    getSelectedPanel: () => {
      const { selectedPanel } = store2.getState();
      return ensurePanel(api.getElements(Addon_TypesEnum.PANEL), selectedPanel, selectedPanel);
    },
    setSelectedPanel: (panelName) => {
      store2.setState({ selectedPanel: panelName }, { persistence: "session" });
    },
    setAddonState(addonId, newStateOrMerger, options2) {
      const merger = typeof newStateOrMerger === "function" ? newStateOrMerger : () => newStateOrMerger;
      return store2.setState(
        (s) => ({ ...s, addons: { ...s.addons, [addonId]: merger(s.addons[addonId]) } }),
        options2
      ).then(() => api.getAddonState(addonId));
    },
    getAddonState: (addonId) => {
      return store2.getState().addons[addonId] || globalThis?.STORYBOOK_ADDON_STATE[addonId];
    }
  };
  return {
    api,
    state: {
      selectedPanel: ensurePanel(
        api.getElements(Addon_TypesEnum.PANEL),
        store2.getState().selectedPanel
      ),
      addons: {}
    }
  };
};
var channel_exports = {};
__export2(channel_exports, {
  init: () => init3
});
var init3 = ({ provider }) => {
  const api = {
    getChannel: () => provider.channel,
    on: (type, handler) => {
      provider.channel?.on(type, handler);
      return () => provider.channel?.off(type, handler);
    },
    off: (type, handler) => provider.channel?.off(type, handler),
    once: (type, handler) => provider.channel?.once(type, handler),
    emit: (type, data, ...args2) => {
      if (data?.options?.target && data.options.target !== "storybook-preview-iframe" && !data.options.target.startsWith("storybook-ref-")) {
        data.options.target = data.options.target !== "storybook_internal" ? `storybook-ref-${data.options.target}` : "storybook-preview-iframe";
      }
      provider.channel?.emit(type, data, ...args2);
    }
  };
  return { api, state: {} };
};
var notifications_exports = {};
__export2(notifications_exports, {
  init: () => init4
});
var init4 = ({ store: store2 }) => {
  const api = {
    addNotification: (notification) => {
      api.clearNotification(notification.id);
      const { notifications } = store2.getState();
      store2.setState({ notifications: [...notifications, notification] });
    },
    clearNotification: (id) => {
      const { notifications } = store2.getState();
      store2.setState({ notifications: notifications.filter((n) => n.id !== id) });
      const notification = notifications.find((n) => n.id === id);
      if (notification && notification.onClear) {
        notification.onClear({ dismissed: false });
      }
    }
  };
  const state = { notifications: [] };
  return { api, state };
};
var settings_exports = {};
__export2(settings_exports, {
  init: () => init5
});
var init5 = ({ store: store2, navigate, fullAPI }) => {
  const isSettingsScreenActive = () => {
    const { path } = fullAPI.getUrlState();
    return !!(path || "").match(/^\/settings/);
  };
  const api = {
    closeSettings: () => {
      const {
        settings: { lastTrackedStoryId }
      } = store2.getState();
      if (lastTrackedStoryId) {
        fullAPI.selectStory(lastTrackedStoryId);
      } else {
        fullAPI.selectFirstStory();
      }
    },
    changeSettingsTab: (path) => {
      navigate(`/settings/${path}`);
    },
    isSettingsScreenActive,
    retrieveSelection() {
      const { settings } = store2.getState();
      return settings.lastTrackedStoryId;
    },
    storeSelection: async () => {
      const { storyId, settings } = store2.getState();
      await store2.setState({
        settings: { ...settings, lastTrackedStoryId: storyId }
      });
    }
  };
  return {
    state: { settings: { lastTrackedStoryId: null } },
    api
  };
};
var stories_exports = {};
__export2(stories_exports, {
  init: () => init7
});
var refs_exports = {};
__export2(refs_exports, {
  defaultStoryMapper: () => defaultStoryMapper,
  getSourceType: () => getSourceType,
  init: () => init6
});
var TITLE_PATH_SEPARATOR = /\s*\/\s*/;
var denormalizeStoryParameters = ({
  globalParameters,
  kindParameters,
  stories
}) => {
  return (0, import_mapValues.default)(stories, (storyData) => ({
    ...storyData,
    parameters: combineParameters(
      globalParameters,
      kindParameters[storyData.kind],
      storyData.parameters
    )
  }));
};
var transformSetStoriesStoryDataToPreparedStoryIndex = (stories) => {
  const entries = Object.entries(stories).reduce(
    (acc, [id, story]) => {
      if (!story)
        return acc;
      const { docsOnly, fileName, ...parameters } = story.parameters;
      const base = {
        title: story.kind,
        id,
        name: story.name,
        importPath: fileName
      };
      if (docsOnly) {
        acc[id] = {
          type: "docs",
          tags: ["stories-mdx"],
          storiesImports: [],
          ...base
        };
      } else {
        const { argTypes, args: args2, initialArgs } = story;
        acc[id] = {
          type: "story",
          ...base,
          parameters,
          argTypes,
          args: args2,
          initialArgs
        };
      }
      return acc;
    },
    {}
  );
  return { v: 4, entries };
};
var transformStoryIndexV2toV3 = (index3) => {
  return {
    v: 3,
    stories: Object.values(index3.stories).reduce(
      (acc, entry) => {
        acc[entry.id] = {
          ...entry,
          title: entry.kind,
          name: entry.name || entry.story,
          importPath: entry.parameters.fileName || ""
        };
        return acc;
      },
      {}
    )
  };
};
var transformStoryIndexV3toV4 = (index3) => {
  const countByTitle = (0, import_countBy.default)(Object.values(index3.stories), "title");
  return {
    v: 4,
    entries: Object.values(index3.stories).reduce(
      (acc, entry) => {
        let type = "story";
        if (entry.parameters?.docsOnly || entry.name === "Page" && countByTitle[entry.title] === 1) {
          type = "docs";
        }
        acc[entry.id] = {
          type,
          ...type === "docs" && { tags: ["stories-mdx"], storiesImports: [] },
          ...entry
        };
        delete acc[entry.id].story;
        delete acc[entry.id].kind;
        return acc;
      },
      {}
    )
  };
};
var transformStoryIndexToStoriesHash = (input, { provider, docsOptions, filters, status }) => {
  if (!input.v) {
    throw new Error("Composition: Missing stories.json version");
  }
  let index3 = input;
  index3 = index3.v === 2 ? transformStoryIndexV2toV3(index3) : index3;
  index3 = index3.v === 3 ? transformStoryIndexV3toV4(index3) : index3;
  index3 = index3;
  const entryValues = Object.values(index3.entries).filter((entry) => {
    let result2 = true;
    Object.values(filters).forEach((filter) => {
      if (result2 === false) {
        return;
      }
      result2 = filter({ ...entry, status: status[entry.id] });
    });
    return result2;
  });
  const { sidebar = {} } = provider.getConfig();
  const { showRoots, collapsedRoots = [], renderLabel } = sidebar;
  const setShowRoots = typeof showRoots !== "undefined";
  const storiesHashOutOfOrder = entryValues.reduce((acc, item) => {
    if (docsOptions.docsMode && item.type !== "docs") {
      return acc;
    }
    const { title } = item;
    const groups = title.trim().split(TITLE_PATH_SEPARATOR);
    const root3 = (!setShowRoots || showRoots) && groups.length > 1 ? [groups.shift()] : [];
    const names = [...root3, ...groups];
    const paths = names.reduce((list, name2, idx) => {
      const parent = idx > 0 && list[idx - 1];
      const id = L(parent ? `${parent}-${name2}` : name2);
      if (parent === id) {
        throw new Error(
          dedent2`
          Invalid part '${name2}', leading to id === parentId ('${id}'), inside title '${title}'
          
          Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128
          `
        );
      }
      list.push(id);
      return list;
    }, []);
    paths.forEach((id, idx) => {
      const childId = paths[idx + 1] || item.id;
      if (root3.length && idx === 0) {
        acc[id] = merge_default(acc[id] || {}, {
          type: "root",
          id,
          name: names[idx],
          depth: idx,
          renderLabel,
          startCollapsed: collapsedRoots.includes(id),
          // Note that this will later get appended to the previous list of children (see below)
          children: [childId]
        });
      } else if ((!acc[id] || acc[id].type === "component") && idx === paths.length - 1) {
        acc[id] = merge_default(acc[id] || {}, {
          type: "component",
          id,
          name: names[idx],
          parent: paths[idx - 1],
          depth: idx,
          renderLabel,
          ...childId && {
            children: [childId]
          }
        });
      } else {
        acc[id] = merge_default(acc[id] || {}, {
          type: "group",
          id,
          name: names[idx],
          parent: paths[idx - 1],
          depth: idx,
          renderLabel,
          ...childId && {
            children: [childId]
          }
        });
      }
    });
    acc[item.id] = {
      type: "story",
      ...item,
      depth: paths.length,
      parent: paths[paths.length - 1],
      renderLabel,
      prepared: !!item.parameters
    };
    return acc;
  }, {});
  function addItem(acc, item) {
    if (acc[item.id]) {
      return acc;
    }
    acc[item.id] = item;
    if (item.type === "root" || item.type === "group" || item.type === "component") {
      item.children.forEach((childId) => addItem(acc, storiesHashOutOfOrder[childId]));
    }
    return acc;
  }
  const orphanHash = Object.values(storiesHashOutOfOrder).filter((i) => i.type !== "root" && !i.parent).reduce(addItem, {});
  return Object.values(storiesHashOutOfOrder).filter((i) => i.type === "root").reduce(addItem, orphanHash);
};
var addPreparedStories = (newHash, oldHash) => {
  if (!oldHash)
    return newHash;
  return Object.fromEntries(
    Object.entries(newHash).map(([id, newEntry]) => {
      const oldEntry = oldHash[id];
      if (newEntry.type === "story" && oldEntry?.type === "story" && oldEntry.prepared) {
        return [id, { ...oldEntry, ...newEntry, prepared: true }];
      }
      return [id, newEntry];
    })
  );
};
var getComponentLookupList = (0, import_memoizerific3.default)(1)((hash) => {
  return Object.entries(hash).reduce((acc, i) => {
    const value2 = i[1];
    if (value2.type === "component") {
      acc.push([...value2.children]);
    }
    return acc;
  }, []);
});
var getStoriesLookupList = (0, import_memoizerific3.default)(1)((hash) => {
  return Object.keys(hash).filter((k) => ["story", "docs"].includes(hash[k].type));
});
var { location: location2, fetch } = scope;
var findFilename = /(\/((?:[^\/]+?)\.[^\/]+?)|\/)$/;
var getSourceType = (source2, refId) => {
  const { origin: localOrigin, pathname: localPathname } = location2;
  const { origin: sourceOrigin, pathname: sourcePathname } = new URL(source2);
  const localFull = `${localOrigin + localPathname}`.replace(findFilename, "");
  const sourceFull = `${sourceOrigin + sourcePathname}`.replace(findFilename, "");
  if (localFull === sourceFull) {
    return ["local", sourceFull];
  }
  if (refId || source2) {
    return ["external", sourceFull];
  }
  return [null, null];
};
var defaultStoryMapper = (b2, a) => {
  return { ...a, kind: a.kind.replace("|", "/") };
};
var addRefIds = (input, ref) => {
  return Object.entries(input).reduce((acc, [id, item]) => {
    return { ...acc, [id]: { ...item, refId: ref.id } };
  }, {});
};
async function handleRequest(request) {
  if (!request)
    return {};
  try {
    const response = await request;
    if (response === false || response === true) {
      throw new Error("Unexpected boolean response");
    }
    if (!response.ok) {
      throw new Error(`Unexpected response not OK: ${response.statusText}`);
    }
    const json = await response.json();
    if (json.entries || json.stories) {
      return { storyIndex: json };
    }
    return json;
  } catch (err) {
    return { indexError: err };
  }
}
var parseUrl = (url) => {
  const credentialsRegex = /https?:\/\/(.+:.+)@/;
  let cleanUrl = url;
  let authorization;
  const [, credentials] = url.match(credentialsRegex) || [];
  if (credentials) {
    cleanUrl = url.replace(`${credentials}@`, "");
    authorization = btoa(`${credentials}`);
  }
  return {
    url: cleanUrl,
    authorization
  };
};
var map = (input, ref, options2) => {
  const { storyMapper } = options2;
  if (storyMapper) {
    return Object.entries(input).reduce((acc, [id, item]) => {
      return { ...acc, [id]: storyMapper(ref, item) };
    }, {});
  }
  return input;
};
var init6 = ({ store: store2, provider, singleStory, docsOptions = {} }, { runCheck = true } = {}) => {
  const api = {
    findRef: (source2) => {
      const refs22 = api.getRefs();
      return Object.values(refs22).find(({ url }) => url.match(source2));
    },
    changeRefVersion: (id, url) => {
      const { versions, title } = api.getRefs()[id];
      const ref = { id, url, versions, title, index: {}, expanded: true };
      api.setRef(id, { ...ref, type: "unknown" }, false);
      api.checkRef(ref);
    },
    changeRefState: (id, previewInitialized) => {
      const { [id]: ref, ...updated } = api.getRefs();
      updated[id] = { ...ref, previewInitialized };
      store2.setState({
        refs: updated
      });
    },
    checkRef: async (ref) => {
      const { id, url, version: version2, type } = ref;
      const isPublic = type === "server-checked";
      const loadedData = {};
      const query = version2 ? `?version=${version2}` : "";
      const credentials = isPublic ? "omit" : "include";
      const urlParseResult = parseUrl(url);
      const headers = {
        Accept: "application/json"
      };
      if (urlParseResult.authorization) {
        Object.assign(headers, {
          Authorization: `Basic ${urlParseResult.authorization}`
        });
      }
      const [indexResult, storiesResult] = await Promise.all(
        ["index.json", "stories.json"].map(
          async (file) => handleRequest(
            fetch(`${urlParseResult.url}/${file}${query}`, {
              headers,
              credentials
            })
          )
        )
      );
      if (!indexResult.indexError || !storiesResult.indexError) {
        const metadata = await handleRequest(
          fetch(`${urlParseResult.url}/metadata.json${query}`, {
            headers,
            credentials,
            cache: "no-cache"
          }).catch(() => false)
        );
        Object.assign(loadedData, {
          ...indexResult.indexError ? storiesResult : indexResult,
          ...!metadata.indexError && metadata
        });
      } else if (!isPublic) {
        loadedData.indexError = {
          message: dedent2`
            Error: Loading of ref failed
              at fetch (lib/api/src/modules/refs.ts)

            URL: ${urlParseResult.url}

            We weren't able to load the above URL,
            it's possible a CORS error happened.

            Please check your dev-tools network tab.
          `
        };
      }
      const versions = ref.versions && Object.keys(ref.versions).length ? ref.versions : loadedData.versions;
      await api.setRef(id, {
        id,
        url: urlParseResult.url,
        ...loadedData,
        ...versions ? { versions } : {},
        type: !loadedData.storyIndex ? "auto-inject" : "lazy"
      });
    },
    getRefs: () => {
      const { refs: refs22 = {} } = store2.getState();
      return refs22;
    },
    setRef: (id, { storyIndex, setStoriesData, ...rest }, ready = false) => {
      if (singleStory) {
        return;
      }
      let internal_index;
      let index3;
      const { filters } = store2.getState();
      const { storyMapper = defaultStoryMapper } = provider.getConfig();
      const ref = api.getRefs()[id];
      if (storyIndex || setStoriesData) {
        internal_index = setStoriesData ? transformSetStoriesStoryDataToPreparedStoryIndex(
          map(setStoriesData, ref, { storyMapper })
        ) : storyIndex;
        index3 = transformStoryIndexToStoriesHash(storyIndex, {
          provider,
          docsOptions,
          filters,
          status: {}
        });
      }
      if (index3) {
        index3 = addRefIds(index3, ref);
      }
      api.updateRef(id, { ...ref, ...rest, index: index3, internal_index });
    },
    updateRef: (id, data) => {
      const { [id]: ref, ...updated } = api.getRefs();
      updated[id] = { ...ref, ...data };
      const ordered = Object.keys(initialState).reduce((obj, key2) => {
        obj[key2] = updated[key2];
        return obj;
      }, {});
      store2.setState({
        refs: ordered
      });
    }
  };
  const refs2 = !singleStory && scope.REFS || {};
  const initialState = refs2;
  if (runCheck) {
    Object.entries(refs2).forEach(([id, ref]) => {
      api.checkRef({ ...ref, stories: {} });
    });
  }
  return {
    api,
    state: {
      refs: initialState
    }
  };
};
var getEventMetadata = (context, fullAPI) => {
  const { source: source2, refId, type } = context;
  const [sourceType, sourceLocation] = getSourceType(source2, refId);
  const ref = refId && fullAPI.getRefs()[refId] ? fullAPI.getRefs()[refId] : fullAPI.findRef(sourceLocation);
  const meta = {
    source: source2,
    sourceType,
    sourceLocation,
    refId,
    ref,
    type
  };
  switch (true) {
    case typeof refId === "string":
    case sourceType === "local":
    case sourceType === "external": {
      return meta;
    }
    default: {
      logger.warn(`Received a ${type} frame that was not configured as a ref`);
      return null;
    }
  }
};
var { fetch: fetch2 } = scope;
var STORY_INDEX_PATH = "./index.json";
var removedOptions = ["enableShortcuts", "theme", "showRoots"];
function removeRemovedOptions(options2) {
  if (!options2 || typeof options2 === "string") {
    return options2;
  }
  const result2 = { ...options2 };
  removedOptions.forEach((option) => {
    if (option in result2) {
      delete result2[option];
    }
  });
  return result2;
}
var init7 = ({
  fullAPI,
  store: store2,
  navigate,
  provider,
  storyId: initialStoryId,
  viewMode: initialViewMode,
  docsOptions = {}
}) => {
  const api = {
    storyId: N,
    getData: (storyId, refId) => {
      const result2 = api.resolveStory(storyId, refId);
      if (result2?.type === "story" || result2?.type === "docs") {
        return result2;
      }
      return void 0;
    },
    isPrepared: (storyId, refId) => {
      const data = api.getData(storyId, refId);
      if (!data) {
        return false;
      }
      return data.type === "story" ? data.prepared : true;
    },
    resolveStory: (storyId, refId) => {
      const { refs: refs2, index: index3 } = store2.getState();
      if (refId && !refs2[refId]) {
        return void 0;
      }
      if (refId) {
        return refs2[refId].index ? refs2[refId].index[storyId] : void 0;
      }
      return index3 ? index3[storyId] : void 0;
    },
    getCurrentStoryData: () => {
      const { storyId, refId } = store2.getState();
      return api.getData(storyId, refId);
    },
    getParameters: (storyIdOrCombo, parameterName) => {
      const { storyId, refId } = typeof storyIdOrCombo === "string" ? { storyId: storyIdOrCombo, refId: void 0 } : storyIdOrCombo;
      const data = api.getData(storyId, refId);
      if (["story", "docs"].includes(data?.type)) {
        const { parameters } = data;
        if (parameters) {
          return parameterName ? parameters[parameterName] : parameters;
        }
      }
      return null;
    },
    getCurrentParameter: (parameterName) => {
      const { storyId, refId } = store2.getState();
      const parameters = api.getParameters({ storyId, refId }, parameterName);
      return parameters || void 0;
    },
    jumpToComponent: (direction) => {
      const { index: index3, storyId, refs: refs2, refId } = store2.getState();
      const story = api.getData(storyId, refId);
      if (!story) {
        return;
      }
      const hash = refId ? refs2[refId].index || {} : index3;
      if (!hash) {
        return;
      }
      const result2 = api.findSiblingStoryId(storyId, hash, direction, true);
      if (result2) {
        api.selectStory(result2, void 0, { ref: refId });
      }
    },
    jumpToStory: (direction) => {
      const { index: index3, storyId, refs: refs2, refId } = store2.getState();
      const story = api.getData(storyId, refId);
      if (!story) {
        return;
      }
      const hash = story.refId ? refs2[story.refId].index : index3;
      if (!hash) {
        return;
      }
      const result2 = api.findSiblingStoryId(storyId, hash, direction, false);
      if (result2) {
        api.selectStory(result2, void 0, { ref: refId });
      }
    },
    selectFirstStory: () => {
      const { index: index3 } = store2.getState();
      if (!index3) {
        return;
      }
      const firstStory = Object.keys(index3).find((id) => index3[id].type === "story");
      if (firstStory) {
        api.selectStory(firstStory);
        return;
      }
      navigate("/");
    },
    selectStory: (titleOrId = void 0, name2 = void 0, options2 = {}) => {
      const { ref } = options2;
      const { storyId, index: index3, refs: refs2 } = store2.getState();
      const hash = ref ? refs2[ref].index : index3;
      const kindSlug = storyId?.split("--", 2)[0];
      if (!hash) {
        return;
      }
      if (!name2) {
        const entry = titleOrId ? hash[titleOrId] || hash[L(titleOrId)] : hash[kindSlug];
        if (!entry)
          throw new Error(`Unknown id or title: '${titleOrId}'`);
        store2.setState({
          settings: { ...store2.getState().settings, lastTrackedStoryId: entry.id }
        });
        const leafEntry = api.findLeafEntry(hash, entry.id);
        const fullId = leafEntry.refId ? `${leafEntry.refId}_${leafEntry.id}` : leafEntry.id;
        navigate(`/${leafEntry.type}/${fullId}`);
      } else if (!titleOrId) {
        const id = N(kindSlug, name2);
        api.selectStory(id, void 0, options2);
      } else {
        const id = ref ? `${ref}_${N(titleOrId, name2)}` : N(titleOrId, name2);
        if (hash[id]) {
          api.selectStory(id, void 0, options2);
        } else {
          const entry = hash[L(titleOrId)];
          if (entry?.type === "component") {
            const foundId = entry.children.find((childId) => hash[childId].name === name2);
            if (foundId) {
              api.selectStory(foundId, void 0, options2);
            }
          }
        }
      }
    },
    findLeafEntry(index3, storyId) {
      const entry = index3[storyId];
      if (entry.type === "docs" || entry.type === "story") {
        return entry;
      }
      const childStoryId = entry.children[0];
      return api.findLeafEntry(index3, childStoryId);
    },
    findLeafStoryId(index3, storyId) {
      return api.findLeafEntry(index3, storyId)?.id;
    },
    findSiblingStoryId(storyId, index3, direction, toSiblingGroup) {
      if (toSiblingGroup) {
        const lookupList2 = getComponentLookupList(index3);
        const position2 = lookupList2.findIndex((i) => i.includes(storyId));
        if (position2 === lookupList2.length - 1 && direction > 0) {
          return;
        }
        if (position2 === 0 && direction < 0) {
          return;
        }
        if (lookupList2[position2 + direction]) {
          return lookupList2[position2 + direction][0];
        }
        return;
      }
      const lookupList = getStoriesLookupList(index3);
      const position = lookupList.indexOf(storyId);
      if (position === lookupList.length - 1 && direction > 0) {
        return;
      }
      if (position === 0 && direction < 0) {
        return;
      }
      return lookupList[position + direction];
    },
    updateStoryArgs: (story, updatedArgs) => {
      const { id: storyId, refId } = story;
      provider.channel?.emit(UPDATE_STORY_ARGS, {
        storyId,
        updatedArgs,
        options: { target: refId }
      });
    },
    resetStoryArgs: (story, argNames) => {
      const { id: storyId, refId } = story;
      provider.channel?.emit(RESET_STORY_ARGS, {
        storyId,
        argNames,
        options: { target: refId }
      });
    },
    fetchIndex: async () => {
      try {
        const result2 = await fetch2(STORY_INDEX_PATH);
        if (result2.status !== 200)
          throw new Error(await result2.text());
        const storyIndex = await result2.json();
        if (storyIndex.v < 3) {
          logger.warn(`Skipping story index with version v${storyIndex.v}, awaiting SET_STORIES.`);
          return;
        }
        await api.setIndex(storyIndex);
      } catch (err) {
        await store2.setState({ indexError: err });
      }
    },
    // The story index we receive on SET_INDEX is "prepared" in that it has parameters
    // The story index we receive on fetchStoryIndex is not, but all the prepared fields are optional
    // so we can cast one to the other easily enough
    setIndex: async (input) => {
      const { index: oldHash, status, filters } = store2.getState();
      const newHash = transformStoryIndexToStoriesHash(input, {
        provider,
        docsOptions,
        status,
        filters
      });
      const output = addPreparedStories(newHash, oldHash);
      await store2.setState({ internal_index: input, index: output, indexError: void 0 });
    },
    updateStory: async (storyId, update2, ref) => {
      if (!ref) {
        const { index: index3 } = store2.getState();
        if (!index3) {
          return;
        }
        index3[storyId] = {
          ...index3[storyId],
          ...update2
        };
        await store2.setState({ index: index3 });
      } else {
        const { id: refId, index: index3 } = ref;
        index3[storyId] = {
          ...index3[storyId],
          ...update2
        };
        await fullAPI.updateRef(refId, { index: index3 });
      }
    },
    updateDocs: async (docsId, update2, ref) => {
      if (!ref) {
        const { index: index3 } = store2.getState();
        if (!index3) {
          return;
        }
        index3[docsId] = {
          ...index3[docsId],
          ...update2
        };
        await store2.setState({ index: index3 });
      } else {
        const { id: refId, index: index3 } = ref;
        index3[docsId] = {
          ...index3[docsId],
          ...update2
        };
        await fullAPI.updateRef(refId, { index: index3 });
      }
    },
    setPreviewInitialized: async (ref) => {
      if (!ref) {
        store2.setState({ previewInitialized: true });
      } else {
        fullAPI.updateRef(ref.id, { previewInitialized: true });
      }
    },
    /* EXPERIMENTAL APIs */
    experimental_updateStatus: async (id, input) => {
      const { status, internal_index: index3 } = store2.getState();
      const newStatus = { ...status };
      const update2 = typeof input === "function" ? input(status) : input;
      if (Object.keys(update2).length === 0) {
        return;
      }
      Object.entries(update2).forEach(([storyId, value2]) => {
        newStatus[storyId] = { ...newStatus[storyId] || {} };
        if (value2 === null) {
          delete newStatus[storyId][id];
        } else {
          newStatus[storyId][id] = value2;
        }
        if (Object.keys(newStatus[storyId]).length === 0) {
          delete newStatus[storyId];
        }
      });
      await store2.setState({ status: newStatus }, { persistence: "session" });
      if (index3) {
        await api.setIndex(index3);
        const refs2 = await fullAPI.getRefs();
        Object.entries(refs2).forEach(([refId, { internal_index, ...ref }]) => {
          fullAPI.setRef(refId, { ...ref, storyIndex: internal_index }, true);
        });
      }
    },
    experimental_setFilter: async (id, filterFunction) => {
      const { internal_index: index3 } = store2.getState();
      await store2.setState({ filters: { ...store2.getState().filters, [id]: filterFunction } });
      if (index3) {
        await api.setIndex(index3);
        const refs2 = await fullAPI.getRefs();
        Object.entries(refs2).forEach(([refId, { internal_index, ...ref }]) => {
          fullAPI.setRef(refId, { ...ref, storyIndex: internal_index }, true);
        });
      }
    }
  };
  provider.channel?.on(
    STORY_SPECIFIED,
    function handler({
      storyId,
      viewMode
    }) {
      const { sourceType } = getEventMetadata(this, fullAPI);
      if (sourceType === "local") {
        const state = store2.getState();
        const isCanvasRoute = state.path === "/" || state.viewMode === "story" || state.viewMode === "docs";
        const stateHasSelection = state.viewMode && state.storyId;
        const stateSelectionDifferent = state.viewMode !== viewMode || state.storyId !== storyId;
        const { type } = state.index?.[state.storyId] || {};
        const isStory = !(type === "root" || type === "component" || type === "group");
        if (isCanvasRoute) {
          if (stateHasSelection && stateSelectionDifferent && isStory) {
            provider.channel?.emit(SET_CURRENT_STORY, {
              storyId: state.storyId,
              viewMode: state.viewMode
            });
          } else if (stateSelectionDifferent) {
            navigate(`/${viewMode}/${storyId}`);
          }
        }
      }
    }
  );
  provider.channel?.on(CURRENT_STORY_WAS_SET, function handler() {
    const { ref } = getEventMetadata(this, fullAPI);
    api.setPreviewInitialized(ref);
  });
  provider.channel?.on(STORY_CHANGED, function handler() {
    const { sourceType } = getEventMetadata(this, fullAPI);
    if (sourceType === "local") {
      const options2 = api.getCurrentParameter("options");
      if (options2) {
        fullAPI.setOptions(removeRemovedOptions(options2));
      }
    }
  });
  provider.channel?.on(
    STORY_PREPARED,
    function handler({ id, ...update2 }) {
      const { ref, sourceType } = getEventMetadata(this, fullAPI);
      api.updateStory(id, { ...update2, prepared: true }, ref);
      if (!ref) {
        if (!store2.getState().hasCalledSetOptions) {
          const { options: options2 } = update2.parameters;
          fullAPI.setOptions(removeRemovedOptions(options2));
          store2.setState({ hasCalledSetOptions: true });
        }
      }
      if (sourceType === "local") {
        const { storyId, index: index3, refId } = store2.getState();
        if (!index3) {
          return;
        }
        const toBePreloaded = Array.from(
          /* @__PURE__ */ new Set([
            api.findSiblingStoryId(storyId, index3, 1, true),
            api.findSiblingStoryId(storyId, index3, -1, true)
          ])
        ).filter(Boolean);
        provider.channel?.emit(PRELOAD_ENTRIES, {
          ids: toBePreloaded,
          options: { target: refId }
        });
      }
    }
  );
  provider.channel?.on(
    DOCS_PREPARED,
    function handler({ id, ...update2 }) {
      const { ref } = getEventMetadata(this, fullAPI);
      api.updateStory(id, { ...update2, prepared: true }, ref);
    }
  );
  provider.channel?.on(SET_INDEX, function handler(index3) {
    const { ref } = getEventMetadata(this, fullAPI);
    if (!ref) {
      api.setIndex(index3);
      const options2 = api.getCurrentParameter("options");
      fullAPI.setOptions(removeRemovedOptions(options2));
    } else {
      fullAPI.setRef(ref.id, { ...ref, storyIndex: index3 }, true);
    }
  });
  provider.channel?.on(SET_STORIES, function handler(data) {
    const { ref } = getEventMetadata(this, fullAPI);
    const setStoriesData = data.v ? denormalizeStoryParameters(data) : data.stories;
    if (!ref) {
      throw new Error("Cannot call SET_STORIES for local frame");
    } else {
      fullAPI.setRef(ref.id, { ...ref, setStoriesData }, true);
    }
  });
  provider.channel?.on(
    SELECT_STORY,
    function handler({
      kind,
      title = kind,
      story,
      name: name2 = story,
      storyId,
      ...rest
    }) {
      const { ref } = getEventMetadata(this, fullAPI);
      if (!ref) {
        fullAPI.selectStory(storyId || title, name2, rest);
      } else {
        fullAPI.selectStory(storyId || title, name2, { ...rest, ref: ref.id });
      }
    }
  );
  provider.channel?.on(
    STORY_ARGS_UPDATED,
    function handleStoryArgsUpdated({ storyId, args: args2 }) {
      const { ref } = getEventMetadata(this, fullAPI);
      api.updateStory(storyId, { args: args2 }, ref);
    }
  );
  provider.channel?.on(CONFIG_ERROR, function handleConfigError(err) {
    const { ref } = getEventMetadata(this, fullAPI);
    api.setPreviewInitialized(ref);
  });
  provider.channel?.on(STORY_MISSING, function handleConfigError(err) {
    const { ref } = getEventMetadata(this, fullAPI);
    api.setPreviewInitialized(ref);
  });
  provider.channel?.on(SET_CONFIG, () => {
    const config2 = provider.getConfig();
    if (config2?.sidebar?.filters) {
      store2.setState({
        filters: {
          ...store2.getState().filters,
          ...config2?.sidebar?.filters
        }
      });
    }
  });
  const config = provider.getConfig();
  return {
    api,
    state: {
      storyId: initialStoryId,
      viewMode: initialViewMode,
      hasCalledSetOptions: false,
      previewInitialized: false,
      status: {},
      filters: config?.sidebar?.filters || {}
    },
    init: async () => {
      provider.channel?.on(STORY_INDEX_INVALIDATED, () => api.fetchIndex());
      await api.fetchIndex();
    }
  };
};
var layout_exports = {};
__export2(layout_exports, {
  ActiveTabs: () => ActiveTabs,
  defaultLayoutState: () => defaultLayoutState,
  focusableUIElements: () => focusableUIElements,
  init: () => init8
});
var { document: document3 } = scope;
var ActiveTabs = {
  SIDEBAR: "sidebar",
  CANVAS: "canvas",
  ADDONS: "addons"
};
var defaultLayoutState = {
  ui: {
    enableShortcuts: true
  },
  layout: {
    initialActive: ActiveTabs.CANVAS,
    showToolbar: true,
    navSize: 300,
    bottomPanelHeight: 300,
    rightPanelWidth: 400,
    recentVisibleSizes: {
      navSize: 300,
      bottomPanelHeight: 300,
      rightPanelWidth: 400
    },
    panelPosition: "bottom",
    showTabs: true
  },
  selectedPanel: void 0,
  theme: create()
};
var focusableUIElements = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
};
var getIsNavShown = (state) => {
  return state.layout.navSize > 0;
};
var getIsPanelShown = (state) => {
  const { bottomPanelHeight, rightPanelWidth, panelPosition } = state.layout;
  return panelPosition === "bottom" && bottomPanelHeight > 0 || panelPosition === "right" && rightPanelWidth > 0;
};
var getIsFullscreen = (state) => {
  return !getIsNavShown(state) && !getIsPanelShown(state);
};
var getRecentVisibleSizes = (layoutState) => {
  return {
    navSize: layoutState.navSize > 0 ? layoutState.navSize : layoutState.recentVisibleSizes.navSize,
    bottomPanelHeight: layoutState.bottomPanelHeight > 0 ? layoutState.bottomPanelHeight : layoutState.recentVisibleSizes.bottomPanelHeight,
    rightPanelWidth: layoutState.rightPanelWidth > 0 ? layoutState.rightPanelWidth : layoutState.recentVisibleSizes.rightPanelWidth
  };
};
var init8 = ({ store: store2, provider, singleStory }) => {
  const api = {
    toggleFullscreen(nextState) {
      return store2.setState(
        (state) => {
          const isFullscreen = getIsFullscreen(state);
          const shouldFullscreen = typeof nextState === "boolean" ? nextState : !isFullscreen;
          if (shouldFullscreen === isFullscreen) {
            return { layout: state.layout };
          }
          return shouldFullscreen ? {
            layout: {
              ...state.layout,
              navSize: 0,
              bottomPanelHeight: 0,
              rightPanelWidth: 0,
              recentVisibleSizes: getRecentVisibleSizes(state.layout)
            }
          } : {
            layout: {
              ...state.layout,
              navSize: state.singleStory ? 0 : state.layout.recentVisibleSizes.navSize,
              bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
            }
          };
        },
        { persistence: "session" }
      );
    },
    togglePanel(nextState) {
      return store2.setState(
        (state) => {
          const isPanelShown = getIsPanelShown(state);
          const shouldShowPanel = typeof nextState === "boolean" ? nextState : !isPanelShown;
          if (shouldShowPanel === isPanelShown) {
            return { layout: state.layout };
          }
          return shouldShowPanel ? {
            layout: {
              ...state.layout,
              bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
            }
          } : {
            layout: {
              ...state.layout,
              bottomPanelHeight: 0,
              rightPanelWidth: 0,
              recentVisibleSizes: getRecentVisibleSizes(state.layout)
            }
          };
        },
        { persistence: "session" }
      );
    },
    togglePanelPosition(position) {
      return store2.setState(
        (state) => {
          const nextPosition = position || (state.layout.panelPosition === "right" ? "bottom" : "right");
          return {
            layout: {
              ...state.layout,
              panelPosition: nextPosition,
              bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
            }
          };
        },
        { persistence: "permanent" }
      );
    },
    toggleNav(nextState) {
      return store2.setState(
        (state) => {
          if (state.singleStory) {
            return { layout: state.layout };
          }
          const isNavShown = getIsNavShown(state);
          const shouldShowNav = typeof nextState === "boolean" ? nextState : !isNavShown;
          if (shouldShowNav === isNavShown) {
            return { layout: state.layout };
          }
          return shouldShowNav ? {
            layout: {
              ...state.layout,
              navSize: state.layout.recentVisibleSizes.navSize
            }
          } : {
            layout: {
              ...state.layout,
              navSize: 0,
              recentVisibleSizes: getRecentVisibleSizes(state.layout)
            }
          };
        },
        { persistence: "session" }
      );
    },
    toggleToolbar(toggled) {
      return store2.setState(
        (state) => {
          const value2 = typeof toggled !== "undefined" ? toggled : !state.layout.showToolbar;
          return {
            layout: {
              ...state.layout,
              showToolbar: value2
            }
          };
        },
        { persistence: "session" }
      );
    },
    setSizes({
      navSize,
      bottomPanelHeight,
      rightPanelWidth
    }) {
      return store2.setState(
        (state) => {
          const nextLayoutState = {
            ...state.layout,
            navSize: navSize ?? state.layout.navSize,
            bottomPanelHeight: bottomPanelHeight ?? state.layout.bottomPanelHeight,
            rightPanelWidth: rightPanelWidth ?? state.layout.rightPanelWidth
          };
          return {
            layout: {
              ...nextLayoutState,
              recentVisibleSizes: getRecentVisibleSizes(nextLayoutState)
            }
          };
        },
        { persistence: "session" }
      );
    },
    focusOnUIElement(elementId, select) {
      if (!elementId) {
        return;
      }
      const element = document3.getElementById(elementId);
      if (element) {
        element.focus();
        if (select) {
          element.select();
        }
      }
    },
    getInitialOptions() {
      const { theme, selectedPanel, ...options2 } = provider.getConfig();
      return {
        ...defaultLayoutState,
        layout: {
          ...defaultLayoutState.layout,
          ...(0, import_pick.default)(options2, Object.keys(defaultLayoutState.layout)),
          ...singleStory && { navSize: 0 }
        },
        ui: {
          ...defaultLayoutState.ui,
          ...(0, import_pick.default)(options2, Object.keys(defaultLayoutState.ui))
        },
        selectedPanel: selectedPanel || defaultLayoutState.selectedPanel,
        theme: theme || defaultLayoutState.theme
      };
    },
    getIsFullscreen() {
      return getIsFullscreen(store2.getState());
    },
    getIsPanelShown() {
      return getIsPanelShown(store2.getState());
    },
    getIsNavShown() {
      return getIsNavShown(store2.getState());
    },
    setOptions: (options2) => {
      const { layout, ui, selectedPanel, theme } = store2.getState();
      if (!options2) {
        return;
      }
      const updatedLayout = {
        ...layout,
        ...options2.layout,
        ...(0, import_pick.default)(options2, Object.keys(layout)),
        ...singleStory && { navSize: 0 }
      };
      const updatedUi = {
        ...ui,
        ...options2.ui,
        ...(0, import_pick.default)(options2, Object.keys(ui))
      };
      const updatedTheme = {
        ...theme,
        ...options2.theme
      };
      const modification = {};
      if (!dequal2(ui, updatedUi)) {
        modification.ui = updatedUi;
      }
      if (!dequal2(layout, updatedLayout)) {
        modification.layout = updatedLayout;
      }
      if (options2.selectedPanel && !dequal2(selectedPanel, options2.selectedPanel)) {
        modification.selectedPanel = options2.selectedPanel;
      }
      if (Object.keys(modification).length) {
        store2.setState(modification, { persistence: "permanent" });
      }
      if (!dequal2(theme, updatedTheme)) {
        store2.setState({ theme: updatedTheme });
      }
    }
  };
  const persisted = (0, import_pick.default)(store2.getState(), "layout", "selectedPanel");
  provider.channel?.on(SET_CONFIG, () => {
    api.setOptions(merge_default(api.getInitialOptions(), persisted));
  });
  return {
    api,
    state: merge_default(api.getInitialOptions(), persisted)
  };
};
var shortcuts_exports = {};
__export2(shortcuts_exports, {
  controlOrMetaKey: () => controlOrMetaKey2,
  defaultShortcuts: () => defaultShortcuts,
  init: () => init9,
  isMacLike: () => isMacLike2,
  keys: () => keys
});
var { navigator } = scope;
var isMacLike = () => navigator && navigator.platform ? !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) : false;
var controlOrMetaSymbol = () => isMacLike() ? "\u2318" : "ctrl";
var controlOrMetaKey = () => isMacLike() ? "meta" : "control";
var optionOrAltSymbol = () => isMacLike() ? "\u2325" : "alt";
var isShortcutTaken = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
var eventToShortcut = (e) => {
  if (["Meta", "Alt", "Control", "Shift"].includes(e.key)) {
    return null;
  }
  const keys2 = [];
  if (e.altKey) {
    keys2.push("alt");
  }
  if (e.ctrlKey) {
    keys2.push("control");
  }
  if (e.metaKey) {
    keys2.push("meta");
  }
  if (e.shiftKey) {
    keys2.push("shift");
  }
  if (e.key && e.key.length === 1 && e.key !== " ") {
    const key2 = e.key.toUpperCase();
    const code = e.code?.toUpperCase().replace("KEY", "").replace("DIGIT", "");
    if (code && code.length === 1 && code !== key2) {
      keys2.push([key2, code]);
    } else {
      keys2.push(key2);
    }
  }
  if (e.key === " ") {
    keys2.push("space");
  }
  if (e.key === "Escape") {
    keys2.push("escape");
  }
  if (e.key === "ArrowRight") {
    keys2.push("ArrowRight");
  }
  if (e.key === "ArrowDown") {
    keys2.push("ArrowDown");
  }
  if (e.key === "ArrowUp") {
    keys2.push("ArrowUp");
  }
  if (e.key === "ArrowLeft") {
    keys2.push("ArrowLeft");
  }
  return keys2.length > 0 ? keys2 : null;
};
var shortcutMatchesShortcut = (inputShortcut, shortcut) => {
  if (!inputShortcut || !shortcut)
    return false;
  if (inputShortcut.join("").startsWith("shift/"))
    inputShortcut.shift();
  if (inputShortcut.length !== shortcut.length)
    return false;
  return !inputShortcut.find(
    (input, i) => Array.isArray(input) ? !input.includes(shortcut[i]) : input !== shortcut[i]
  );
};
var eventMatchesShortcut = (e, shortcut) => {
  return shortcutMatchesShortcut(eventToShortcut(e), shortcut);
};
var keyToSymbol = (key2) => {
  if (key2 === "alt") {
    return optionOrAltSymbol();
  }
  if (key2 === "control") {
    return "\u2303";
  }
  if (key2 === "meta") {
    return "\u2318";
  }
  if (key2 === "shift") {
    return "\u21E7\u200B";
  }
  if (key2 === "Enter" || key2 === "Backspace" || key2 === "Esc") {
    return "";
  }
  if (key2 === "escape") {
    return "";
  }
  if (key2 === " ") {
    return "SPACE";
  }
  if (key2 === "ArrowUp") {
    return "\u2191";
  }
  if (key2 === "ArrowDown") {
    return "\u2193";
  }
  if (key2 === "ArrowLeft") {
    return "\u2190";
  }
  if (key2 === "ArrowRight") {
    return "\u2192";
  }
  return key2.toUpperCase();
};
var shortcutToHumanString = (shortcut) => {
  return shortcut.map(keyToSymbol).join(" ");
};
var { navigator: navigator2, document: document23 } = scope;
var isMacLike2 = () => navigator2 && navigator2.platform ? !!navigator2.platform.match(/(Mac|iPhone|iPod|iPad)/i) : false;
var controlOrMetaKey2 = () => isMacLike2() ? "meta" : "control";
function keys(o) {
  return Object.keys(o);
}
var defaultShortcuts = Object.freeze({
  fullScreen: ["alt", "F"],
  togglePanel: ["alt", "A"],
  panelPosition: ["alt", "D"],
  toggleNav: ["alt", "S"],
  toolbar: ["alt", "T"],
  search: [controlOrMetaKey2(), "K"],
  focusNav: ["1"],
  focusIframe: ["2"],
  focusPanel: ["3"],
  prevComponent: ["alt", "ArrowUp"],
  nextComponent: ["alt", "ArrowDown"],
  prevStory: ["alt", "ArrowLeft"],
  nextStory: ["alt", "ArrowRight"],
  shortcutsPage: [controlOrMetaKey2(), "shift", ","],
  aboutPage: [controlOrMetaKey2(), ","],
  escape: ["escape"],
  // This one is not customizable
  collapseAll: [controlOrMetaKey2(), "shift", "ArrowUp"],
  expandAll: [controlOrMetaKey2(), "shift", "ArrowDown"],
  remount: ["alt", "R"]
});
var addonsShortcuts = {};
function focusInInput(event) {
  const target = event.target;
  return /input|textarea/i.test(target.tagName) || target.getAttribute("contenteditable") !== null;
}
var init9 = ({ store: store2, fullAPI, provider }) => {
  const api = {
    // Getting and setting shortcuts
    getShortcutKeys() {
      return store2.getState().shortcuts;
    },
    getDefaultShortcuts() {
      return {
        ...defaultShortcuts,
        ...api.getAddonsShortcutDefaults()
      };
    },
    getAddonsShortcuts() {
      return addonsShortcuts;
    },
    getAddonsShortcutLabels() {
      const labels = {};
      Object.entries(api.getAddonsShortcuts()).forEach(([actionName, { label }]) => {
        labels[actionName] = label;
      });
      return labels;
    },
    getAddonsShortcutDefaults() {
      const defaults = {};
      Object.entries(api.getAddonsShortcuts()).forEach(([actionName, { defaultShortcut }]) => {
        defaults[actionName] = defaultShortcut;
      });
      return defaults;
    },
    async setShortcuts(shortcuts) {
      await store2.setState({ shortcuts }, { persistence: "permanent" });
      return shortcuts;
    },
    async restoreAllDefaultShortcuts() {
      return api.setShortcuts(api.getDefaultShortcuts());
    },
    async setShortcut(action, value2) {
      const shortcuts = api.getShortcutKeys();
      await api.setShortcuts({ ...shortcuts, [action]: value2 });
      return value2;
    },
    async setAddonShortcut(addon, shortcut) {
      const shortcuts = api.getShortcutKeys();
      await api.setShortcuts({
        ...shortcuts,
        [`${addon}-${shortcut.actionName}`]: shortcut.defaultShortcut
      });
      addonsShortcuts[`${addon}-${shortcut.actionName}`] = shortcut;
      return shortcut;
    },
    async restoreDefaultShortcut(action) {
      const defaultShortcut = api.getDefaultShortcuts()[action];
      return api.setShortcut(action, defaultShortcut);
    },
    // Listening to shortcut events
    handleKeydownEvent(event) {
      const shortcut = eventToShortcut(event);
      const shortcuts = api.getShortcutKeys();
      const actions = keys(shortcuts);
      const matchedFeature = actions.find(
        (feature) => shortcutMatchesShortcut(shortcut, shortcuts[feature])
      );
      if (matchedFeature) {
        api.handleShortcutFeature(matchedFeature, event);
      }
    },
    // warning: event might not have a full prototype chain because it may originate from the channel
    handleShortcutFeature(feature, event) {
      const {
        ui: { enableShortcuts },
        storyId
      } = store2.getState();
      if (!enableShortcuts) {
        return;
      }
      if (event?.preventDefault)
        event.preventDefault();
      switch (feature) {
        case "escape": {
          if (fullAPI.getIsFullscreen()) {
            fullAPI.toggleFullscreen(false);
          } else if (fullAPI.getIsNavShown()) {
            fullAPI.toggleNav(true);
          }
          break;
        }
        case "focusNav": {
          if (fullAPI.getIsFullscreen()) {
            fullAPI.toggleFullscreen(false);
          }
          if (!fullAPI.getIsNavShown()) {
            fullAPI.toggleNav(true);
          }
          fullAPI.focusOnUIElement(focusableUIElements.storyListMenu);
          break;
        }
        case "search": {
          if (fullAPI.getIsFullscreen()) {
            fullAPI.toggleFullscreen(false);
          }
          if (!fullAPI.getIsNavShown()) {
            fullAPI.toggleNav(true);
          }
          setTimeout(() => {
            fullAPI.focusOnUIElement(focusableUIElements.storySearchField, true);
          }, 0);
          break;
        }
        case "focusIframe": {
          const element = document23.getElementById("storybook-preview-iframe");
          if (element) {
            try {
              element.contentWindow.focus();
            } catch (e) {
            }
          }
          break;
        }
        case "focusPanel": {
          if (fullAPI.getIsFullscreen()) {
            fullAPI.toggleFullscreen(false);
          }
          if (!fullAPI.getIsPanelShown()) {
            fullAPI.togglePanel(true);
          }
          fullAPI.focusOnUIElement(focusableUIElements.storyPanelRoot);
          break;
        }
        case "nextStory": {
          fullAPI.jumpToStory(1);
          break;
        }
        case "prevStory": {
          fullAPI.jumpToStory(-1);
          break;
        }
        case "nextComponent": {
          fullAPI.jumpToComponent(1);
          break;
        }
        case "prevComponent": {
          fullAPI.jumpToComponent(-1);
          break;
        }
        case "fullScreen": {
          fullAPI.toggleFullscreen();
          break;
        }
        case "togglePanel": {
          fullAPI.togglePanel();
          break;
        }
        case "toggleNav": {
          fullAPI.toggleNav();
          break;
        }
        case "toolbar": {
          fullAPI.toggleToolbar();
          break;
        }
        case "panelPosition": {
          if (fullAPI.getIsFullscreen()) {
            fullAPI.toggleFullscreen(false);
          }
          if (!fullAPI.getIsPanelShown()) {
            fullAPI.togglePanel(true);
          }
          fullAPI.togglePanelPosition();
          break;
        }
        case "aboutPage": {
          fullAPI.navigate("/settings/about");
          break;
        }
        case "shortcutsPage": {
          fullAPI.navigate("/settings/shortcuts");
          break;
        }
        case "collapseAll": {
          fullAPI.collapseAll();
          break;
        }
        case "expandAll": {
          fullAPI.expandAll();
          break;
        }
        case "remount": {
          fullAPI.emit(FORCE_REMOUNT, { storyId });
          break;
        }
        default:
          addonsShortcuts[feature].action();
          break;
      }
    }
  };
  const { shortcuts: persistedShortcuts = defaultShortcuts } = store2.getState();
  const state = {
    // Any saved shortcuts that are still in our set of defaults
    shortcuts: keys(defaultShortcuts).reduce(
      (acc, key2) => ({ ...acc, [key2]: persistedShortcuts[key2] || defaultShortcuts[key2] }),
      defaultShortcuts
    )
  };
  const initModule = () => {
    document23.addEventListener("keydown", (event) => {
      if (!focusInInput(event)) {
        api.handleKeydownEvent(event);
      }
    });
    provider.channel?.on(PREVIEW_KEYDOWN, (data) => {
      api.handleKeydownEvent(data.event);
    });
  };
  return { api, state, init: initModule };
};
var url_exports = {};
__export2(url_exports, {
  init: () => init10
});
var { window: globalWindow } = scope;
var parseBoolean = (value2) => {
  if (value2 === "true" || value2 === "1")
    return true;
  if (value2 === "false" || value2 === "0")
    return false;
  return void 0;
};
var prevParams;
var initialUrlSupport = ({
  state: { location: location22, path, viewMode, storyId: storyIdFromUrl },
  singleStory
}) => {
  const {
    full,
    panel,
    nav,
    shortcuts,
    addonPanel,
    tabs,
    path: queryPath,
    ...otherParams
    // the rest gets passed to the iframe
  } = queryFromLocation(location22);
  let navSize;
  let bottomPanelHeight;
  let rightPanelWidth;
  if (parseBoolean(full) === true) {
    navSize = 0;
    bottomPanelHeight = 0;
    rightPanelWidth = 0;
  } else if (parseBoolean(full) === false) {
    navSize = defaultLayoutState.layout.navSize;
    bottomPanelHeight = defaultLayoutState.layout.bottomPanelHeight;
    rightPanelWidth = defaultLayoutState.layout.rightPanelWidth;
  }
  if (!singleStory) {
    if (parseBoolean(nav) === true) {
      navSize = defaultLayoutState.layout.navSize;
    }
    if (parseBoolean(nav) === false) {
      navSize = 0;
    }
  }
  if (parseBoolean(panel) === false) {
    bottomPanelHeight = 0;
    rightPanelWidth = 0;
  }
  const layout = {
    navSize,
    bottomPanelHeight,
    rightPanelWidth,
    panelPosition: ["right", "bottom"].includes(panel) ? panel : void 0,
    showTabs: parseBoolean(tabs)
  };
  const ui = {
    enableShortcuts: parseBoolean(shortcuts)
  };
  const selectedPanel = addonPanel || void 0;
  const storyId = storyIdFromUrl;
  const customQueryParams = dequal2(prevParams, otherParams) ? prevParams : otherParams;
  prevParams = customQueryParams;
  return { viewMode, layout, ui, selectedPanel, location: location22, path, customQueryParams, storyId };
};
var init10 = (moduleArgs) => {
  const { store: store2, navigate, provider, fullAPI } = moduleArgs;
  const navigateTo = (path, queryParams = {}, options2 = {}) => {
    const params = Object.entries(queryParams).filter(([, v2]) => v2).sort(([a], [b2]) => a < b2 ? -1 : 1).map(([k, v2]) => `${k}=${v2}`);
    const to = [path, ...params].join("&");
    return navigate(to, options2);
  };
  const api = {
    getQueryParam(key2) {
      const { customQueryParams } = store2.getState();
      return customQueryParams ? customQueryParams[key2] : void 0;
    },
    getUrlState() {
      const { path, customQueryParams, storyId, url, viewMode } = store2.getState();
      return { path, queryParams: customQueryParams, storyId, url, viewMode };
    },
    setQueryParams(input) {
      const { customQueryParams } = store2.getState();
      const queryParams = {};
      const update2 = {
        ...customQueryParams,
        ...Object.entries(input).reduce((acc, [key2, value2]) => {
          if (value2 !== null) {
            acc[key2] = value2;
          }
          return acc;
        }, queryParams)
      };
      if (!dequal2(customQueryParams, update2)) {
        store2.setState({ customQueryParams: update2 });
        provider.channel?.emit(UPDATE_QUERY_PARAMS, update2);
      }
    },
    navigateUrl(url, options2) {
      navigate(url, { plain: true, ...options2 });
    }
  };
  const updateArgsParam = () => {
    const { path, queryParams, viewMode } = api.getUrlState();
    if (viewMode !== "story")
      return;
    const currentStory = fullAPI.getCurrentStoryData();
    if (currentStory?.type !== "story")
      return;
    const { args: args2, initialArgs } = currentStory;
    const argsString = buildArgsParam(initialArgs, args2);
    navigateTo(path, { ...queryParams, args: argsString }, { replace: true });
    api.setQueryParams({ args: argsString });
  };
  provider.channel?.on(SET_CURRENT_STORY, () => updateArgsParam());
  let handleOrId;
  provider.channel?.on(STORY_ARGS_UPDATED, () => {
    if ("requestIdleCallback" in globalWindow) {
      if (handleOrId)
        globalWindow.cancelIdleCallback(handleOrId);
      handleOrId = globalWindow.requestIdleCallback(updateArgsParam, { timeout: 1e3 });
    } else {
      if (handleOrId)
        clearTimeout(handleOrId);
      setTimeout(updateArgsParam, 100);
    }
  });
  provider.channel?.on(GLOBALS_UPDATED, ({ globals, initialGlobals }) => {
    const { path, queryParams } = api.getUrlState();
    const globalsString = buildArgsParam(initialGlobals, globals);
    navigateTo(path, { ...queryParams, globals: globalsString }, { replace: true });
    api.setQueryParams({ globals: globalsString });
  });
  provider.channel?.on(NAVIGATE_URL, (url, options2) => {
    api.navigateUrl(url, options2);
  });
  return {
    api,
    state: initialUrlSupport(moduleArgs)
  };
};
var versions_exports = {};
__export2(versions_exports, {
  init: () => init11
});
var import_semver = __toESM4(require_semver2());
var version = "8.0.0-alpha.15";
var { VERSIONCHECK } = scope;
var getVersionCheckData = (0, import_memoizerific3.default)(1)(() => {
  try {
    return { ...JSON.parse(VERSIONCHECK).data || {} };
  } catch (e) {
    return {};
  }
});
var normalizeRendererName = (renderer) => {
  if (renderer.includes("vue")) {
    return "vue";
  }
  return renderer;
};
var init11 = ({ store: store2 }) => {
  const { dismissedVersionNotification } = store2.getState();
  const state = {
    versions: {
      current: {
        version
      },
      ...getVersionCheckData()
    },
    dismissedVersionNotification
  };
  const api = {
    getCurrentVersion: () => {
      const {
        versions: { current }
      } = store2.getState();
      return current;
    },
    getLatestVersion: () => {
      const {
        versions: { latest, next, current }
      } = store2.getState();
      if (current && import_semver.default.prerelease(current.version) && next) {
        return latest && import_semver.default.gt(latest.version, next.version) ? latest : next;
      }
      return latest;
    },
    // TODO: Move this to it's own "info" module later
    getDocsUrl: ({ subpath, versioned, renderer }) => {
      const {
        versions: { latest, current }
      } = store2.getState();
      let url = "https://storybook.js.org/docs/";
      if (versioned && current?.version && latest?.version) {
        const versionDiff = import_semver.default.diff(latest.version, current.version);
        const isLatestDocs = versionDiff === "patch" || versionDiff === null;
        if (!isLatestDocs) {
          url += `${import_semver.default.major(current.version)}.${import_semver.default.minor(current.version)}/`;
        }
      }
      if (subpath) {
        url += `${subpath}/`;
      }
      if (renderer && typeof scope.STORYBOOK_RENDERER !== "undefined") {
        const rendererName = scope.STORYBOOK_RENDERER.split("/").pop()?.toLowerCase();
        if (rendererName) {
          url += `?renderer=${normalizeRendererName(rendererName)}`;
        }
      }
      return url;
    },
    versionUpdateAvailable: () => {
      const latest = api.getLatestVersion();
      const current = api.getCurrentVersion();
      if (latest) {
        if (!latest.version) {
          return true;
        }
        if (!current.version) {
          return true;
        }
        const onPrerelease = !!import_semver.default.prerelease(current.version);
        const actualCurrent = onPrerelease ? `${import_semver.default.major(current.version)}.${import_semver.default.minor(current.version)}.${import_semver.default.patch(
          current.version
        )}` : current.version;
        const diff = import_semver.default.diff(actualCurrent, latest.version);
        return import_semver.default.gt(latest.version, actualCurrent) && diff !== "patch" && !diff.includes("pre");
      }
      return false;
    }
  };
  const initModule = async () => {
    const { versions = {} } = store2.getState();
    const { latest, next } = getVersionCheckData();
    await store2.setState({
      versions: { ...versions, latest, next }
    });
  };
  return { init: initModule, state, api };
};
var whatsnew_exports = {};
__export2(whatsnew_exports, {
  init: () => init12
});
var WHATS_NEW_NOTIFICATION_ID = "whats-new";
var init12 = ({ fullAPI, store: store2, provider }) => {
  const state = {
    whatsNewData: void 0
  };
  function setWhatsNewState(newState) {
    store2.setState({ whatsNewData: newState });
    state.whatsNewData = newState;
  }
  const api = {
    isWhatsNewUnread() {
      return state.whatsNewData?.status === "SUCCESS" && !state.whatsNewData.postIsRead;
    },
    whatsNewHasBeenRead() {
      if (state.whatsNewData?.status === "SUCCESS") {
        setWhatsNewCache({ lastReadPost: state.whatsNewData.url });
        setWhatsNewState({ ...state.whatsNewData, postIsRead: true });
        fullAPI.clearNotification(WHATS_NEW_NOTIFICATION_ID);
      }
    },
    toggleWhatsNewNotifications() {
      if (state.whatsNewData?.status === "SUCCESS") {
        setWhatsNewState({
          ...state.whatsNewData,
          disableWhatsNewNotifications: !state.whatsNewData.disableWhatsNewNotifications
        });
        provider.channel?.emit(TOGGLE_WHATS_NEW_NOTIFICATIONS, {
          disableWhatsNewNotifications: state.whatsNewData.disableWhatsNewNotifications
        });
      }
    }
  };
  function getLatestWhatsNewPost() {
    provider.channel?.emit(REQUEST_WHATS_NEW_DATA);
    return new Promise(
      (resolve) => provider.channel?.once(
        RESULT_WHATS_NEW_DATA,
        ({ data }) => resolve(data)
      )
    );
  }
  function setWhatsNewCache(cache) {
    provider.channel?.emit(SET_WHATS_NEW_CACHE, cache);
  }
  const initModule = async () => {
    if (scope.CONFIG_TYPE !== "DEVELOPMENT") {
      return;
    }
    const whatsNewData = await getLatestWhatsNewPost();
    setWhatsNewState(whatsNewData);
    const urlState = fullAPI.getUrlState();
    const isOnboardingView = urlState?.path === "/onboarding" || urlState.queryParams?.onboarding === "true";
    if (!isOnboardingView && whatsNewData.status === "SUCCESS" && !whatsNewData.disableWhatsNewNotifications && whatsNewData.showNotification) {
      fullAPI.addNotification({
        id: WHATS_NEW_NOTIFICATION_ID,
        link: "/settings/whats-new",
        content: {
          headline: whatsNewData.excerpt,
          subHeadline: "Click to learn what's new in Storybook"
        },
        icon: { name: "hearthollow" },
        onClear({ dismissed }) {
          if (dismissed) {
            setWhatsNewCache({ lastDismissedPost: whatsNewData.url });
          }
        }
      });
    }
  };
  return { init: initModule, state, api };
};
var globals_exports = {};
__export2(globals_exports, {
  init: () => init13
});
var init13 = ({ store: store2, fullAPI, provider }) => {
  const api = {
    getGlobals() {
      return store2.getState().globals;
    },
    getGlobalTypes() {
      return store2.getState().globalTypes;
    },
    updateGlobals(newGlobals) {
      provider.channel?.emit(UPDATE_GLOBALS, {
        globals: newGlobals,
        options: {
          target: "storybook-preview-iframe"
        }
      });
    }
  };
  const state = {
    globals: {},
    globalTypes: {}
  };
  const updateGlobals = (globals) => {
    const currentGlobals = store2.getState()?.globals;
    if (!dequal2(globals, currentGlobals)) {
      store2.setState({ globals });
    }
  };
  provider.channel?.on(
    GLOBALS_UPDATED,
    function handleGlobalsUpdated({ globals }) {
      const { ref } = getEventMetadata(this, fullAPI);
      if (!ref) {
        updateGlobals(globals);
      } else {
        logger.warn(
          "received a GLOBALS_UPDATED from a non-local ref. This is not currently supported."
        );
      }
    }
  );
  provider.channel?.on(
    SET_GLOBALS,
    function handleSetStories({ globals, globalTypes }) {
      const { ref } = getEventMetadata(this, fullAPI);
      const currentGlobals = store2.getState()?.globals;
      if (!ref) {
        store2.setState({ globals, globalTypes });
      } else if (Object.keys(globals).length > 0) {
        logger.warn("received globals from a non-local ref. This is not currently supported.");
      }
      if (currentGlobals && Object.keys(currentGlobals).length !== 0 && !dequal2(globals, currentGlobals)) {
        api.updateGlobals(currentGlobals);
      }
    }
  );
  return {
    api,
    state
  };
};
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
    this.loaders = {};
    this.elements = {};
    this.config = {};
    this.getChannel = () => {
      if (!this.channel) {
        this.setChannel(mockChannel());
      }
      return this.channel;
    };
    this.ready = () => this.promise;
    this.hasChannel = () => !!this.channel;
    this.setChannel = (channel) => {
      this.channel = channel;
      this.resolve();
    };
    this.setConfig = (value2) => {
      Object.assign(this.config, value2);
      if (this.hasChannel()) {
        this.getChannel().emit(SET_CONFIG, this.config);
      } else {
        this.ready().then((channel) => {
          channel.emit(SET_CONFIG, this.config);
        });
      }
    };
    this.getConfig = () => this.config;
    this.register = (id, callback) => {
      if (this.loaders[id]) {
        logger.warn(`${id} was loaded twice, this could have bad side-effects`);
      }
      this.loaders[id] = callback;
    };
    this.loadAddons = (api) => {
      Object.values(this.loaders).forEach((value2) => value2(api));
    };
    this.promise = new Promise((res) => {
      this.resolve = () => res(this.getChannel());
    });
  }
  getElements(type) {
    if (!this.elements[type]) {
      this.elements[type] = {};
    }
    return this.elements[type];
  }
  /**
   * Adds an addon to the addon store.
   * @param {string} id - The id of the addon.
   * @param {Addon_Type} addon - The addon to add.
   * @returns {void}
   */
  add(id, addon) {
    const { type } = addon;
    const collection = this.getElements(type);
    collection[id] = { ...addon, id };
  }
};
var KEY2 = "__STORYBOOK_ADDONS_MANAGER";
function getAddonsStore() {
  if (!scope[KEY2]) {
    scope[KEY2] = new AddonStore();
  }
  return scope[KEY2];
}
var addons = getAddonsStore();
var { ActiveTabs: ActiveTabs2 } = layout_exports;
var ManagerContext = createContext2({ api: void 0, state: initial_state_default({}) });
var combineParameters = (...parameterSets) => (0, import_mergeWith.default)({}, ...parameterSets, (objValue, srcValue) => {
  if (Array.isArray(srcValue))
    return srcValue;
  return void 0;
});
var ManagerProvider = class extends import_react2.Component {
  constructor(props) {
    super(props);
    this.api = {};
    this.initModules = () => {
      this.modules.forEach((module) => {
        if ("init" in module) {
          module.init();
        }
      });
    };
    const {
      location: location22,
      path,
      refId,
      viewMode = props.docsOptions.docsMode ? "docs" : props.viewMode,
      singleStory,
      storyId,
      docsOptions,
      navigate
    } = props;
    const store2 = new Store({
      getState: () => this.state,
      setState: (stateChange, callback) => {
        this.setState(stateChange, () => callback(this.state));
        return this.state;
      }
    });
    const routeData = { location: location22, path, viewMode, singleStory, storyId, refId };
    const optionsData = { docsOptions };
    this.state = store2.getInitialState(initial_state_default({ ...routeData, ...optionsData }));
    const apiData = {
      navigate,
      store: store2,
      provider: props.provider
    };
    this.modules = [
      provider_exports,
      channel_exports,
      addons_exports,
      layout_exports,
      notifications_exports,
      settings_exports,
      shortcuts_exports,
      stories_exports,
      refs_exports,
      globals_exports,
      url_exports,
      versions_exports,
      whatsnew_exports
    ].map(
      (m) => m.init({ ...routeData, ...optionsData, ...apiData, state: this.state, fullAPI: this.api })
    );
    const state = initial_state_default(this.state, ...this.modules.map((m) => m.state));
    const api = Object.assign(this.api, { navigate }, ...this.modules.map((m) => m.api));
    this.state = state;
    this.api = api;
  }
  static getDerivedStateFromProps(props, state) {
    if (state.path !== props.path) {
      return {
        ...state,
        location: props.location,
        path: props.path,
        refId: props.refId,
        viewMode: props.viewMode,
        storyId: props.storyId
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    const prevState = this.state;
    const prevProps = this.props;
    if (prevState !== nextState) {
      return true;
    }
    if (prevProps.path !== nextProps.path) {
      return true;
    }
    return false;
  }
  render() {
    const { children } = this.props;
    const value2 = {
      state: this.state,
      api: this.api
    };
    return /* @__PURE__ */ import_react2.default.createElement(EffectOnMount, { effect: this.initModules }, /* @__PURE__ */ import_react2.default.createElement(ManagerContext.Provider, { value: value2 }, /* @__PURE__ */ import_react2.default.createElement(ManagerConsumer, null, children)));
  }
};
ManagerProvider.displayName = "Manager";
var EffectOnMount = ({ children, effect }) => {
  import_react2.default.useEffect(effect, []);
  return children;
};
var defaultFilter = (c2) => c2;
function ManagerConsumer({
  // @ts-expect-error (Converted from ts-ignore)
  filter = defaultFilter,
  children
}) {
  const managerContext = (0, import_react2.useContext)(ManagerContext);
  const renderer = (0, import_react2.useRef)(children);
  const filterer = (0, import_react2.useRef)(filter);
  if (typeof renderer.current !== "function") {
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, renderer.current);
  }
  const comboData = filterer.current(managerContext);
  const comboDataArray = (0, import_react2.useMemo)(() => {
    return [...Object.entries(comboData).reduce((acc, keyval) => acc.concat(keyval), [])];
  }, [managerContext.state]);
  return (0, import_react2.useMemo)(() => {
    const Child = renderer.current;
    return /* @__PURE__ */ import_react2.default.createElement(Child, { ...comboData });
  }, comboDataArray);
}
function useStorybookState() {
  const { state } = (0, import_react2.useContext)(ManagerContext);
  return {
    ...state,
    // deprecated fields for back-compat
    get storiesHash() {
      deprecate("state.storiesHash is deprecated, please use state.index");
      return this.index || {};
    },
    get storiesConfigured() {
      deprecate("state.storiesConfigured is deprecated, please use state.previewInitialized");
      return this.previewInitialized;
    },
    get storiesFailed() {
      deprecate("state.storiesFailed is deprecated, please use state.indexError");
      return this.indexError;
    }
  };
}
function useStorybookApi() {
  const { api } = (0, import_react2.useContext)(ManagerContext);
  return api;
}
function orDefault(fromStore, defaultState) {
  if (typeof fromStore === "undefined") {
    return defaultState;
  }
  return fromStore;
}
var useChannel = (eventMap, deps = []) => {
  const api = useStorybookApi();
  (0, import_react2.useEffect)(() => {
    Object.entries(eventMap).forEach(([type, listener]) => api.on(type, listener));
    return () => {
      Object.entries(eventMap).forEach(([type, listener]) => api.off(type, listener));
    };
  }, deps);
  return api.emit;
};
function useStoryPrepared(storyId) {
  const api = useStorybookApi();
  return api.isPrepared(storyId);
}
function useParameter(parameterKey, defaultValue) {
  const api = useStorybookApi();
  const result2 = api.getCurrentParameter(parameterKey);
  return orDefault(result2, defaultValue);
}
globalThis.STORYBOOK_ADDON_STATE = {};
var { STORYBOOK_ADDON_STATE } = globalThis;
function useSharedState(stateId, defaultState) {
  const api = useStorybookApi();
  const existingState = api.getAddonState(stateId) || STORYBOOK_ADDON_STATE[stateId];
  const state = orDefault(
    existingState,
    STORYBOOK_ADDON_STATE[stateId] ? STORYBOOK_ADDON_STATE[stateId] : defaultState
  );
  let quicksync = false;
  if (state === defaultState && defaultState !== void 0) {
    STORYBOOK_ADDON_STATE[stateId] = defaultState;
    quicksync = true;
  }
  (0, import_react2.useEffect)(() => {
    if (quicksync) {
      api.setAddonState(stateId, defaultState);
    }
  }, [quicksync]);
  const setState = async (s, options2) => {
    await api.setAddonState(stateId, s, options2);
    const result2 = api.getAddonState(stateId);
    STORYBOOK_ADDON_STATE[stateId] = result2;
    return result2;
  };
  const allListeners = (0, import_react2.useMemo)(() => {
    const stateChangeHandlers = {
      [`${SHARED_STATE_CHANGED}-client-${stateId}`]: setState,
      [`${SHARED_STATE_SET}-client-${stateId}`]: setState
    };
    const stateInitializationHandlers = {
      [SET_STORIES]: async () => {
        const currentState = api.getAddonState(stateId);
        if (currentState) {
          STORYBOOK_ADDON_STATE[stateId] = currentState;
          api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, currentState);
        } else if (STORYBOOK_ADDON_STATE[stateId]) {
          await setState(STORYBOOK_ADDON_STATE[stateId]);
          api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, STORYBOOK_ADDON_STATE[stateId]);
        } else if (defaultState !== void 0) {
          await setState(defaultState);
          STORYBOOK_ADDON_STATE[stateId] = defaultState;
          api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, defaultState);
        }
      },
      [STORY_CHANGED]: () => {
        const currentState = api.getAddonState(stateId);
        if (currentState !== void 0) {
          api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, currentState);
        }
      }
    };
    return {
      ...stateChangeHandlers,
      ...stateInitializationHandlers
    };
  }, [stateId]);
  const emit = useChannel(allListeners);
  return [
    state,
    async (newStateOrMerger, options2) => {
      await setState(newStateOrMerger, options2);
      const result2 = api.getAddonState(stateId);
      emit(`${SHARED_STATE_CHANGED}-manager-${stateId}`, result2);
    }
  ];
}
function useAddonState(addonId, defaultState) {
  return useSharedState(addonId, defaultState);
}
function useArgs() {
  const { getCurrentStoryData, updateStoryArgs, resetStoryArgs } = useStorybookApi();
  const data = getCurrentStoryData();
  const args2 = data?.type === "story" ? data.args : {};
  const updateArgs = (0, import_react2.useCallback)(
    (newArgs) => updateStoryArgs(data, newArgs),
    [data, updateStoryArgs]
  );
  const resetArgs = (0, import_react2.useCallback)(
    (argNames) => resetStoryArgs(data, argNames),
    [data, resetStoryArgs]
  );
  return [args2, updateArgs, resetArgs];
}
function useGlobals() {
  const api = useStorybookApi();
  return [api.getGlobals(), api.updateGlobals];
}
function useGlobalTypes() {
  return useStorybookApi().getGlobalTypes();
}
function useCurrentStory() {
  const { getCurrentStoryData } = useStorybookApi();
  return getCurrentStoryData();
}
function useArgTypes() {
  const current = useCurrentStory();
  return current?.type === "story" && current.argTypes || {};
}
var typesX = Addon_TypesEnum;

// ../../lib/core-events/dist/errors/manager-errors.mjs
var manager_errors_exports = {};
__export(manager_errors_exports, {
  Category: () => Category,
  ProviderDoesNotExtendBaseProviderError: () => ProviderDoesNotExtendBaseProviderError,
  UncaughtManagerError: () => UncaughtManagerError
});

// ../../lib/core-events/dist/chunk-HW7OXSS4.mjs
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

// ../../lib/core-events/dist/errors/manager-errors.mjs
var Category = /* @__PURE__ */ ((Category2) => {
  Category2["MANAGER_UNCAUGHT"] = "MANAGER_UNCAUGHT";
  Category2["MANAGER_UI"] = "MANAGER_UI";
  Category2["MANAGER_API"] = "MANAGER_API";
  Category2["MANAGER_CLIENT_LOGGER"] = "MANAGER_CLIENT-LOGGER";
  Category2["MANAGER_CHANNELS"] = "MANAGER_CHANNELS";
  Category2["MANAGER_CORE_EVENTS"] = "MANAGER_CORE-EVENTS";
  Category2["MANAGER_ROUTER"] = "MANAGER_ROUTER";
  Category2["MANAGER_THEMING"] = "MANAGER_THEMING";
  return Category2;
})(Category || {});
var ProviderDoesNotExtendBaseProviderError = class extends StorybookError {
  constructor() {
    super(...arguments);
    this.category = "MANAGER_UI";
    this.code = 1;
  }
  template() {
    return `The Provider passed into Storybook's UI is not extended from the base Provider. Please check your Provider implementation.`;
  }
};
var UncaughtManagerError = class extends StorybookError {
  constructor(data) {
    super(data.error.message);
    this.data = data;
    this.category = "MANAGER_UNCAUGHT";
    this.code = 1;
    this.stack = data.error.stack;
  }
  template() {
    return this.message;
  }
};

// ../../node_modules/@storybook/icons/dist/index.mjs
var dist_exports6 = {};
__export(dist_exports6, {
  AccessibilityAltIcon: () => AccessibilityAltIcon,
  AccessibilityIcon: () => AccessibilityIcon,
  AddIcon: () => AddIcon,
  AdminIcon: () => AdminIcon,
  AlertAltIcon: () => AlertAltIcon,
  AlertIcon: () => AlertIcon,
  AlignLeftIcon: () => AlignLeftIcon,
  AlignRightIcon: () => AlignRightIcon,
  AppleIcon: () => AppleIcon,
  ArrowDownIcon: () => ArrowDownIcon,
  ArrowLeftIcon: () => ArrowLeftIcon,
  ArrowRightIcon: () => ArrowRightIcon,
  ArrowSolidDownIcon: () => ArrowSolidDownIcon,
  ArrowSolidLeftIcon: () => ArrowSolidLeftIcon,
  ArrowSolidRightIcon: () => ArrowSolidRightIcon,
  ArrowSolidUpIcon: () => ArrowSolidUpIcon,
  ArrowUpIcon: () => ArrowUpIcon,
  AzureDevOpsIcon: () => AzureDevOpsIcon,
  BackIcon: () => BackIcon,
  BasketIcon: () => BasketIcon,
  BatchAcceptIcon: () => BatchAcceptIcon,
  BatchDenyIcon: () => BatchDenyIcon,
  BeakerIcon: () => BeakerIcon,
  BellIcon: () => BellIcon,
  BitbucketIcon: () => BitbucketIcon,
  BoldIcon: () => BoldIcon,
  BookIcon: () => BookIcon,
  BookmarkHollowIcon: () => BookmarkHollowIcon,
  BookmarkIcon: () => BookmarkIcon,
  BottomBarIcon: () => BottomBarIcon,
  BottomBarToggleIcon: () => BottomBarToggleIcon,
  BoxIcon: () => BoxIcon,
  BranchIcon: () => BranchIcon,
  BrowserIcon: () => BrowserIcon,
  ButtonIcon: () => ButtonIcon,
  CPUIcon: () => CPUIcon,
  CalendarIcon: () => CalendarIcon,
  CameraIcon: () => CameraIcon,
  CategoryIcon: () => CategoryIcon,
  CertificateIcon: () => CertificateIcon,
  ChangedIcon: () => ChangedIcon,
  ChatIcon: () => ChatIcon,
  CheckIcon: () => CheckIcon,
  ChevronDownIcon: () => ChevronDownIcon,
  ChevronLeftIcon: () => ChevronLeftIcon,
  ChevronRightIcon: () => ChevronRightIcon,
  ChevronSmallDownIcon: () => ChevronSmallDownIcon,
  ChevronSmallLeftIcon: () => ChevronSmallLeftIcon,
  ChevronSmallRightIcon: () => ChevronSmallRightIcon,
  ChevronSmallUpIcon: () => ChevronSmallUpIcon,
  ChevronUpIcon: () => ChevronUpIcon,
  ChromaticIcon: () => ChromaticIcon,
  ChromeIcon: () => ChromeIcon,
  CircleHollowIcon: () => CircleHollowIcon,
  CircleIcon: () => CircleIcon,
  ClearIcon: () => ClearIcon,
  CloseAltIcon: () => CloseAltIcon,
  CloseIcon: () => CloseIcon,
  CloudHollowIcon: () => CloudHollowIcon,
  CloudIcon: () => CloudIcon,
  CogIcon: () => CogIcon,
  CollapseIcon: () => CollapseIcon,
  CommandIcon: () => CommandIcon,
  CommentAddIcon: () => CommentAddIcon,
  CommentIcon: () => CommentIcon,
  CommentsIcon: () => CommentsIcon,
  CommitIcon: () => CommitIcon,
  CompassIcon: () => CompassIcon,
  ComponentDrivenIcon: () => ComponentDrivenIcon,
  ComponentIcon: () => ComponentIcon,
  ContrastIcon: () => ContrastIcon,
  ControlsIcon: () => ControlsIcon,
  CopyIcon: () => CopyIcon,
  CreditIcon: () => CreditIcon,
  CrossIcon: () => CrossIcon,
  DashboardIcon: () => DashboardIcon,
  DatabaseIcon: () => DatabaseIcon,
  DeleteIcon: () => DeleteIcon,
  DiamondIcon: () => DiamondIcon,
  DirectionIcon: () => DirectionIcon,
  DiscordIcon: () => DiscordIcon,
  DocChartIcon: () => DocChartIcon,
  DocListIcon: () => DocListIcon,
  DocumentIcon: () => DocumentIcon,
  DownloadIcon: () => DownloadIcon,
  DragIcon: () => DragIcon,
  EditIcon: () => EditIcon,
  EllipsisIcon: () => EllipsisIcon,
  EmailIcon: () => EmailIcon,
  ExpandAltIcon: () => ExpandAltIcon,
  ExpandIcon: () => ExpandIcon,
  EyeCloseIcon: () => EyeCloseIcon,
  EyeIcon: () => EyeIcon,
  FaceHappyIcon: () => FaceHappyIcon,
  FaceNeutralIcon: () => FaceNeutralIcon,
  FaceSadIcon: () => FaceSadIcon,
  FacebookIcon: () => FacebookIcon,
  FailedIcon: () => FailedIcon,
  FastForwardIcon: () => FastForwardIcon,
  FigmaIcon: () => FigmaIcon,
  FilterIcon: () => FilterIcon,
  FlagIcon: () => FlagIcon,
  FolderIcon: () => FolderIcon,
  FormIcon: () => FormIcon,
  GDriveIcon: () => GDriveIcon,
  GithubIcon: () => GithubIcon,
  GitlabIcon: () => GitlabIcon,
  GlobeIcon: () => GlobeIcon,
  GoogleIcon: () => GoogleIcon,
  GraphBarIcon: () => GraphBarIcon,
  GraphLineIcon: () => GraphLineIcon,
  GraphqlIcon: () => GraphqlIcon,
  GridAltIcon: () => GridAltIcon,
  GridIcon: () => GridIcon,
  GrowIcon: () => GrowIcon,
  HeartHollowIcon: () => HeartHollowIcon,
  HeartIcon: () => HeartIcon,
  HomeIcon: () => HomeIcon,
  HourglassIcon: () => HourglassIcon,
  InfoIcon: () => InfoIcon,
  ItalicIcon: () => ItalicIcon,
  JumpToIcon: () => JumpToIcon,
  KeyIcon: () => KeyIcon,
  LightningIcon: () => LightningIcon,
  LightningOffIcon: () => LightningOffIcon,
  LinkBrokenIcon: () => LinkBrokenIcon,
  LinkIcon: () => LinkIcon,
  LinkedinIcon: () => LinkedinIcon,
  LinuxIcon: () => LinuxIcon,
  ListOrderedIcon: () => ListOrderedIcon,
  ListUnorderedIcon: () => ListUnorderedIcon,
  LocationIcon: () => LocationIcon,
  LockIcon: () => LockIcon,
  MarkdownIcon: () => MarkdownIcon,
  MarkupIcon: () => MarkupIcon,
  MediumIcon: () => MediumIcon,
  MemoryIcon: () => MemoryIcon,
  MenuIcon: () => MenuIcon,
  MergeIcon: () => MergeIcon,
  MirrorIcon: () => MirrorIcon,
  MobileIcon: () => MobileIcon,
  MoonIcon: () => MoonIcon,
  NutIcon: () => NutIcon,
  OutboxIcon: () => OutboxIcon,
  OutlineIcon: () => OutlineIcon,
  PaintBrushIcon: () => PaintBrushIcon,
  PaperClipIcon: () => PaperClipIcon,
  ParagraphIcon: () => ParagraphIcon,
  PassedIcon: () => PassedIcon,
  PhoneIcon: () => PhoneIcon,
  PhotoDragIcon: () => PhotoDragIcon,
  PhotoIcon: () => PhotoIcon,
  PinAltIcon: () => PinAltIcon,
  PinIcon: () => PinIcon,
  PlayBackIcon: () => PlayBackIcon,
  PlayIcon: () => PlayIcon,
  PlayNextIcon: () => PlayNextIcon,
  PlusIcon: () => PlusIcon,
  PointerDefaultIcon: () => PointerDefaultIcon,
  PointerHandIcon: () => PointerHandIcon,
  PowerIcon: () => PowerIcon,
  PrintIcon: () => PrintIcon,
  ProceedIcon: () => ProceedIcon,
  ProfileIcon: () => ProfileIcon,
  PullRequestIcon: () => PullRequestIcon,
  QuestionIcon: () => QuestionIcon,
  RSSIcon: () => RSSIcon,
  RedirectIcon: () => RedirectIcon,
  ReduxIcon: () => ReduxIcon,
  RefreshIcon: () => RefreshIcon,
  ReplyIcon: () => ReplyIcon,
  RepoIcon: () => RepoIcon,
  RequestChangeIcon: () => RequestChangeIcon,
  RewindIcon: () => RewindIcon,
  RulerIcon: () => RulerIcon,
  SearchIcon: () => SearchIcon,
  ShareAltIcon: () => ShareAltIcon,
  ShareIcon: () => ShareIcon,
  ShieldIcon: () => ShieldIcon,
  SideBySideIcon: () => SideBySideIcon,
  SidebarAltIcon: () => SidebarAltIcon,
  SidebarAltToggleIcon: () => SidebarAltToggleIcon,
  SidebarIcon: () => SidebarIcon,
  SidebarToggleIcon: () => SidebarToggleIcon,
  SpeakerIcon: () => SpeakerIcon,
  StackedIcon: () => StackedIcon,
  StarHollowIcon: () => StarHollowIcon,
  StarIcon: () => StarIcon,
  StickerIcon: () => StickerIcon,
  StopAltIcon: () => StopAltIcon,
  StopIcon: () => StopIcon,
  StorybookIcon: () => StorybookIcon,
  StructureIcon: () => StructureIcon,
  SubtractIcon: () => SubtractIcon,
  SunIcon: () => SunIcon,
  SupportIcon: () => SupportIcon,
  SwitchAltIcon: () => SwitchAltIcon,
  SyncIcon: () => SyncIcon,
  TabletIcon: () => TabletIcon,
  ThumbsUpIcon: () => ThumbsUpIcon,
  TimeIcon: () => TimeIcon,
  TimerIcon: () => TimerIcon,
  TransferIcon: () => TransferIcon,
  TrashIcon: () => TrashIcon,
  TwitterIcon: () => TwitterIcon,
  TypeIcon: () => TypeIcon,
  UbuntuIcon: () => UbuntuIcon,
  UndoIcon: () => UndoIcon,
  UnfoldIcon: () => UnfoldIcon,
  UnlockIcon: () => UnlockIcon,
  UnpinIcon: () => UnpinIcon,
  UploadIcon: () => UploadIcon,
  UserAddIcon: () => UserAddIcon,
  UserAltIcon: () => UserAltIcon,
  UserIcon: () => UserIcon,
  UsersIcon: () => UsersIcon,
  VSCodeIcon: () => VSCodeIcon,
  VerifiedIcon: () => VerifiedIcon,
  VideoIcon: () => VideoIcon,
  WandIcon: () => WandIcon,
  WatchIcon: () => WatchIcon,
  WindowsIcon: () => WindowsIcon,
  WrenchIcon: () => WrenchIcon,
  YoutubeIcon: () => YoutubeIcon,
  ZoomIcon: () => ZoomIcon,
  ZoomOutIcon: () => ZoomOutIcon,
  ZoomResetIcon: () => ZoomResetIcon,
  iconList: () => iconList
});
var React33 = __toESM(require_react(), 1);
var iconList = [
  {
    name: "Images",
    icons: [
      "PhotoIcon",
      "ComponentIcon",
      "GridIcon",
      "OutlineIcon",
      "PhotoDragIcon",
      "GridAltIcon",
      "SearchIcon",
      "ZoomIcon",
      "ZoomOutIcon",
      "ZoomResetIcon",
      "EyeIcon",
      "EyeCloseIcon",
      "LightningIcon",
      "LightningOffIcon",
      "ContrastIcon",
      "SwitchAltIcon",
      "MirrorIcon",
      "GrowIcon",
      "PaintBrushIcon",
      "RulerIcon",
      "StopIcon",
      "CameraIcon",
      "VideoIcon",
      "SpeakerIcon",
      "PlayIcon",
      "PlayBackIcon",
      "PlayNextIcon",
      "RewindIcon",
      "FastForwardIcon",
      "StopAltIcon",
      "SideBySideIcon",
      "StackedIcon",
      "SunIcon",
      "MoonIcon"
    ]
  },
  {
    name: "Documents",
    icons: [
      "BookIcon",
      "DocumentIcon",
      "CopyIcon",
      "CategoryIcon",
      "FolderIcon",
      "PrintIcon",
      "GraphLineIcon",
      "CalendarIcon",
      "GraphBarIcon",
      "AlignLeftIcon",
      "AlignRightIcon",
      "FilterIcon",
      "DocChartIcon",
      "DocListIcon",
      "DragIcon",
      "MenuIcon"
    ]
  },
  {
    name: "Editing",
    icons: [
      "MarkupIcon",
      "BoldIcon",
      "ItalicIcon",
      "PaperClipIcon",
      "ListOrderedIcon",
      "ListUnorderedIcon",
      "ParagraphIcon",
      "MarkdownIcon"
    ]
  },
  {
    name: "Git",
    icons: [
      "RepoIcon",
      "CommitIcon",
      "BranchIcon",
      "PullRequestIcon",
      "MergeIcon"
    ]
  },
  {
    name: "OS",
    icons: [
      "AppleIcon",
      "LinuxIcon",
      "UbuntuIcon",
      "WindowsIcon",
      "ChromeIcon"
    ]
  },
  {
    name: "Logos",
    icons: [
      "StorybookIcon",
      "AzureDevOpsIcon",
      "BitbucketIcon",
      "ChromaticIcon",
      "ComponentDrivenIcon",
      "DiscordIcon",
      "FacebookIcon",
      "FigmaIcon",
      "GDriveIcon",
      "GithubIcon",
      "GitlabIcon",
      "GoogleIcon",
      "GraphqlIcon",
      "MediumIcon",
      "ReduxIcon",
      "TwitterIcon",
      "YoutubeIcon",
      "VSCodeIcon",
      "LinkedinIcon"
    ]
  },
  {
    name: "Devices",
    icons: [
      "BrowserIcon",
      "TabletIcon",
      "MobileIcon",
      "WatchIcon",
      "SidebarIcon",
      "SidebarAltIcon",
      "SidebarAltToggleIcon",
      "SidebarToggleIcon",
      "BottomBarIcon",
      "BottomBarToggleIcon",
      "CPUIcon",
      "DatabaseIcon",
      "MemoryIcon",
      "StructureIcon",
      "BoxIcon",
      "PowerIcon"
    ]
  },
  {
    name: "CRUD",
    icons: [
      "EditIcon",
      "CogIcon",
      "NutIcon",
      "WrenchIcon",
      "EllipsisIcon",
      "WandIcon",
      "CheckIcon",
      "FormIcon",
      "BatchDenyIcon",
      "BatchAcceptIcon",
      "ControlsIcon",
      "PlusIcon",
      "CloseAltIcon",
      "CrossIcon",
      "TrashIcon",
      "PinAltIcon",
      "UnpinIcon",
      "AddIcon",
      "SubtractIcon",
      "CloseIcon",
      "DeleteIcon",
      "PassedIcon",
      "ChangedIcon",
      "FailedIcon",
      "ClearIcon",
      "CommentIcon",
      "CommentAddIcon",
      "RequestChangeIcon",
      "CommentsIcon",
      "ChatIcon",
      "LockIcon",
      "UnlockIcon",
      "KeyIcon",
      "OutboxIcon",
      "CreditIcon",
      "ButtonIcon",
      "TypeIcon",
      "PointerDefaultIcon",
      "PointerHandIcon",
      "CommandIcon"
    ]
  },
  {
    name: "Communicate",
    icons: [
      "InfoIcon",
      "QuestionIcon",
      "SupportIcon",
      "AlertIcon",
      "AlertAltIcon",
      "EmailIcon",
      "PhoneIcon",
      "LinkIcon",
      "LinkBrokenIcon",
      "BellIcon",
      "RSSIcon",
      "ShareAltIcon",
      "ShareIcon",
      "JumpToIcon",
      "CircleHollowIcon",
      "CircleIcon",
      "BookmarkHollowIcon",
      "BookmarkIcon",
      "DiamondIcon",
      "HeartHollowIcon",
      "HeartIcon",
      "StarHollowIcon",
      "StarIcon",
      "CertificateIcon",
      "VerifiedIcon",
      "ThumbsUpIcon",
      "ShieldIcon",
      "BasketIcon",
      "BeakerIcon",
      "HourglassIcon",
      "FlagIcon",
      "CloudHollowIcon",
      "CloudIcon",
      "StickerIcon"
    ]
  },
  {
    name: "Wayfinding",
    icons: [
      "ChevronUpIcon",
      "ChevronDownIcon",
      "ChevronLeftIcon",
      "ChevronRightIcon",
      "ChevronSmallUpIcon",
      "ChevronSmallDownIcon",
      "ChevronSmallLeftIcon",
      "ChevronSmallRightIcon",
      "ArrowUpIcon",
      "ArrowDownIcon",
      "ArrowLeftIcon",
      "ArrowRightIcon",
      "ArrowSolidUpIcon",
      "ArrowSolidDownIcon",
      "ArrowSolidLeftIcon",
      "ArrowSolidRightIcon",
      "ExpandAltIcon",
      "CollapseIcon",
      "ExpandIcon",
      "UnfoldIcon",
      "TransferIcon",
      "RedirectIcon",
      "UndoIcon",
      "ReplyIcon",
      "SyncIcon",
      "UploadIcon",
      "DownloadIcon",
      "BackIcon",
      "ProceedIcon",
      "RefreshIcon",
      "GlobeIcon",
      "CompassIcon",
      "LocationIcon",
      "PinIcon",
      "TimeIcon",
      "DashboardIcon",
      "TimerIcon",
      "HomeIcon",
      "AdminIcon",
      "DirectionIcon"
    ]
  },
  {
    name: "People",
    icons: [
      "UserIcon",
      "UserAltIcon",
      "UserAddIcon",
      "UsersIcon",
      "ProfileIcon",
      "FaceHappyIcon",
      "FaceNeutralIcon",
      "FaceSadIcon",
      "AccessibilityIcon",
      "AccessibilityAltIcon"
    ]
  }
];
var PhotoIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
        fill: color2
      }
    )
  );
});
var ComponentIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
        fill: color2
      }
    )
  );
});
var GridIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
        fill: color2
      }
    )
  );
});
var OutlineIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    )
  );
});
var PhotoDragIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
        fill: color2
      }
    )
  );
});
var GridAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
        fill: color2
      }
    )
  );
});
var SearchIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: color2
      }
    )
  );
});
var ZoomIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: color2
      }
    )
  );
});
var ZoomOutIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
        fill: color2
      }
    )
  );
});
var ZoomResetIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
        fill: color2
      }
    )
  );
});
var EyeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
        fill: color2
      }
    )
  );
});
var EyeCloseIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
        fill: color2
      }
    )
  );
});
var LightningIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
        fill: color2
      }
    )
  );
});
var LightningOffIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
        fill: color2
      }
    )
  );
});
var ContrastIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
        fill: color2
      }
    )
  );
});
var SwitchAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
        fill: color2
      }
    )
  );
});
var MirrorIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
        fill: color2
      }
    )
  );
});
var GrowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
        fill: color2
      }
    )
  );
});
var PaintBrushIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
        fill: color2
      }
    )
  );
});
var RulerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
        fill: color2
      }
    )
  );
});
var StopIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var CameraIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
        fill: color2
      }
    )
  );
});
var VideoIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
        fill: color2
      }
    )
  );
});
var SpeakerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
        fill: color2
      }
    )
  );
});
var PlayIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
        fill: color2
      }
    )
  );
});
var PlayBackIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
        fill: color2
      }
    )
  );
});
var PlayNextIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
        fill: color2
      }
    )
  );
});
var RewindIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
        fill: color2
      }
    )
  );
});
var FastForwardIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
        fill: color2
      }
    )
  );
});
var StopAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
        fill: color2
      }
    )
  );
});
var SideBySideIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
        fill: color2
      }
    )
  );
});
var StackedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
        fill: color2
      }
    )
  );
});
var SunIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3492)", fill: color2 }, /* @__PURE__ */ React33.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z" }), /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
      }
    ), /* @__PURE__ */ React33.createElement("path", { d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z" })),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3492" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var MoonIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3493)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z",
        fill: color2
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3493" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        fill: "#fff",
        transform: "scale(1.07124)",
        d: "M0 0h14.001v14.002H0z"
      }
    )))
  );
});
var BookIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
        fill: color2
      }
    )
  );
});
var DocumentIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
        fill: color2
      }
    )
  );
});
var CopyIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
        fill: color2
      }
    )
  );
});
var CategoryIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
        fill: color2
      }
    )
  );
});
var FolderIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
        fill: color2
      }
    )
  );
});
var PrintIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
        fill: color2
      }
    )
  );
});
var GraphLineIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
        fill: color2
      }
    )
  );
});
var CalendarIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
        fill: color2
      }
    )
  );
});
var GraphBarIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
        fill: color2
      }
    )
  );
});
var AlignLeftIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
        fill: color2
      }
    )
  );
});
var AlignRightIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
        fill: color2
      }
    )
  );
});
var FilterIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: color2
      }
    )
  );
});
var DocChartIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
        fill: color2
      }
    )
  );
});
var DocListIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
        fill: color2
      }
    )
  );
});
var DragIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
        fill: color2
      }
    )
  );
});
var MenuIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
        fill: color2
      }
    )
  );
});
var MarkupIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
        fill: color2
      }
    )
  );
});
var BoldIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
        fill: color2
      }
    )
  );
});
var ItalicIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z", fill: color2 })
  );
});
var PaperClipIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
        fill: color2
      }
    )
  );
});
var ListOrderedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
        fill: color2
      }
    )
  );
});
var ListUnorderedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
        fill: color2
      }
    )
  );
});
var ParagraphIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
        fill: color2
      }
    )
  );
});
var MarkdownIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
        fill: color2
      }
    )
  );
});
var RepoIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
        fill: color2
      }
    )
  );
});
var CommitIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
        fill: color2
      }
    )
  );
});
var BranchIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var PullRequestIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var MergeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var AppleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
        fill: color2
      }
    )
  );
});
var LinuxIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
        fill: color2
      }
    )
  );
});
var UbuntuIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3497)", fill: color2 }, /* @__PURE__ */ React33.createElement("path", { d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" })),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3497" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var WindowsIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
        fill: color2
      }
    )
  );
});
var ChromeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3496)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
        fill: color2
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3496" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var StorybookIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
        fill: color2
      }
    )
  );
});
var AzureDevOpsIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3503)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
        fill: color2
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3503" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var BitbucketIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
        fill: color2
      }
    )
  );
});
var ChromaticIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
        fill: color2
      }
    )
  );
});
var ComponentDrivenIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
        fill: color2
      }
    )
  );
});
var DiscordIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
        fill: color2
      }
    )
  );
});
var FacebookIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
        fill: color2
      }
    )
  );
});
var FigmaIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
        fill: color2
      }
    )
  );
});
var GDriveIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
        fill: color2
      }
    )
  );
});
var GithubIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
        fill: color2
      }
    )
  );
});
var GitlabIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
        fill: color2
      }
    )
  );
});
var GoogleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
        fill: color2
      }
    )
  );
});
var GraphqlIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
        fill: color2
      }
    )
  );
});
var MediumIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
        fill: color2
      }
    )
  );
});
var ReduxIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
        fill: color2
      }
    )
  );
});
var TwitterIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
        fill: color2
      }
    )
  );
});
var YoutubeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
        fill: color2
      }
    )
  );
});
var VSCodeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
        fill: color2
      }
    )
  );
});
var LinkedinIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
        fill: color2
      }
    )
  );
});
var BrowserIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var TabletIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
        fill: color2
      }
    )
  );
});
var MobileIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
        fill: color2
      }
    )
  );
});
var WatchIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: color2
      }
    )
  );
});
var SidebarIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
        fill: color2
      }
    )
  );
});
var SidebarAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
        fill: color2
      }
    )
  );
});
var SidebarAltToggleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
        fill: color2
      }
    )
  );
});
var SidebarToggleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
        fill: color2
      }
    )
  );
});
var BottomBarIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
        fill: color2
      }
    )
  );
});
var BottomBarToggleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
        fill: color2
      }
    )
  );
});
var CPUIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
        fill: color2
      }
    )
  );
});
var DatabaseIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
        fill: color2
      }
    )
  );
});
var MemoryIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
        fill: color2
      }
    )
  );
});
var StructureIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
        fill: color2
      }
    )
  );
});
var BoxIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
        fill: color2
      }
    )
  );
});
var PowerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
        fill: color2
      }
    )
  );
});
var EditIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
        fill: color2
      }
    )
  );
});
var CogIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
        fill: color2
      }
    )
  );
});
var NutIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
        fill: color2
      }
    )
  );
});
var WrenchIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var EllipsisIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
        fill: color2
      }
    )
  );
});
var WandIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
        fill: color2
      }
    )
  );
});
var CheckIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
        fill: color2
      }
    )
  );
});
var FormIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
        fill: color2
      }
    )
  );
});
var BatchDenyIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: color2
      }
    )
  );
});
var BatchAcceptIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: color2
      }
    )
  );
});
var ControlsIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
        fill: color2
      }
    )
  );
});
var PlusIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.5.5a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6z",
        fill: color2
      }
    )
  );
});
var CloseAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
        fill: color2
      }
    )
  );
});
var CrossIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
        fill: color2
      }
    )
  );
});
var TrashIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
        fill: color2
      }
    )
  );
});
var PinAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3502)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
        fill: color2
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3502" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var UnpinIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3501)", fill: color2 }, /* @__PURE__ */ React33.createElement("path", { d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z" })),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3501" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var AddIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var SubtractIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var CloseIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var DeleteIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
        fill: color2
      }
    )
  );
});
var PassedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ChangedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
        fill: color2
      }
    )
  );
});
var FailedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ClearIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var CommentIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
        fill: color2
      }
    )
  );
});
var CommentAddIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: color2
      }
    )
  );
});
var RequestChangeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: color2
      }
    )
  );
});
var CommentsIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
        fill: color2
      }
    )
  );
});
var ChatIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
        fill: color2
      }
    )
  );
});
var LockIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
        fill: color2
      }
    )
  );
});
var UnlockIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3614)", fill: color2 }, /* @__PURE__ */ React33.createElement("path", { d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" }), /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3614" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var KeyIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
        fill: color2
      }
    )
  );
});
var OutboxIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
        fill: color2
      }
    )
  );
});
var CreditIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
        fill: color2
      }
    )
  );
});
var ButtonIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
        fill: color2
      }
    )
  );
});
var TypeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
        fill: color2
      }
    )
  );
});
var PointerDefaultIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
        fill: color2
      }
    )
  );
});
var PointerHandIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
        fill: color2
      }
    )
  );
});
var CommandIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
        fill: color2
      }
    )
  );
});
var InfoIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var QuestionIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var SupportIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
        fill: color2
      }
    )
  );
});
var AlertIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
        fill: color2
      }
    )
  );
});
var AlertAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
        fill: color2
      }
    )
  );
});
var EmailIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
        fill: color2
      }
    )
  );
});
var PhoneIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
        fill: color2
      }
    )
  );
});
var LinkIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
        fill: color2
      }
    )
  );
});
var LinkBrokenIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
        fill: color2
      }
    )
  );
});
var BellIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
        fill: color2
      }
    )
  );
});
var RSSIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
        fill: color2
      }
    )
  );
});
var ShareAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
        fill: color2
      }
    )
  );
});
var ShareIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
        fill: color2
      }
    )
  );
});
var JumpToIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
        fill: color2
      }
    )
  );
});
var CircleHollowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
        fill: color2
      }
    )
  );
});
var CircleIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M14 7A7 7 0 110 7a7 7 0 0114 0z", fill: color2 })
  );
});
var BookmarkHollowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
        fill: color2
      }
    )
  );
});
var BookmarkIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var DiamondIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1449_588)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
        fill: "#2E3438"
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1449_588" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var HeartHollowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
        fill: color2
      }
    )
  );
});
var HeartIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
        fill: color2
      }
    )
  );
});
var StarHollowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
        fill: color2
      }
    )
  );
});
var StarIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
        fill: color2
      }
    )
  );
});
var CertificateIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
        fill: color2
      }
    )
  );
});
var VerifiedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ThumbsUpIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var ShieldIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
        fill: color2
      }
    )
  );
});
var BasketIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
        fill: color2
      }
    )
  );
});
var BeakerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
        fill: color2
      }
    )
  );
});
var HourglassIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
        fill: color2
      }
    )
  );
});
var FlagIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var CloudHollowIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
        fill: color2
      }
    )
  );
});
var CloudIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
        fill: color2
      }
    )
  );
});
var StickerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
        fill: color2
      }
    )
  );
});
var ChevronUpIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ChevronDownIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
        fill: color2
      }
    )
  );
});
var ChevronLeftIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
        fill: color2
      }
    )
  );
});
var ChevronRightIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
        fill: color2
      }
    )
  );
});
var ChevronSmallUpIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
        fill: color2
      }
    )
  );
});
var ChevronSmallDownIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
        fill: color2
      }
    )
  );
});
var ChevronSmallLeftIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
        fill: color2
      }
    )
  );
});
var ChevronSmallRightIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
        fill: color2
      }
    )
  );
});
var ArrowUpIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
        fill: color2
      }
    )
  );
});
var ArrowDownIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
        fill: color2
      }
    )
  );
});
var ArrowLeftIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ArrowRightIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var ArrowSolidUpIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
        fill: color2
      }
    )
  );
});
var ArrowSolidDownIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
        fill: color2
      }
    )
  );
});
var ArrowSolidLeftIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
        fill: color2
      }
    )
  );
});
var ArrowSolidRightIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
        fill: color2
      }
    )
  );
});
var ExpandAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var CollapseIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
        fill: color2
      }
    )
  );
});
var ExpandIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
        fill: color2
      }
    )
  );
});
var UnfoldIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
        fill: color2
      }
    )
  );
});
var TransferIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
        fill: color2
      }
    )
  );
});
var RedirectIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var UndoIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
        fill: color2
      }
    )
  );
});
var ReplyIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var SyncIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
        fill: color2
      }
    )
  );
});
var UploadIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var DownloadIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
        fill: color2
      }
    )
  );
});
var BackIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
        fill: color2
      }
    )
  );
});
var ProceedIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
        fill: color2
      }
    )
  );
});
var RefreshIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
        fill: color2
      }
    )
  );
});
var GlobeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
        fill: color2
      }
    )
  );
});
var CompassIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var LocationIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
        fill: color2
      }
    )
  );
});
var PinIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
        fill: color2
      }
    )
  );
});
var TimeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var DashboardIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
        fill: color2
      }
    )
  );
});
var TimerIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
        fill: color2
      }
    )
  );
});
var HomeIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
        fill: color2
      }
    )
  );
});
var AdminIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    )
  );
});
var DirectionIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement("g", { clipPath: "url(#prefix__clip0_1107_3594)" }, /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z",
        stroke: color2,
        strokeWidth: 1.077
      }
    )),
    /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("clipPath", { id: "prefix__clip0_1107_3594" }, /* @__PURE__ */ React33.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var UserIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
        fill: color2
      }
    )
  );
});
var UserAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
        fill: color2
      }
    )
  );
});
var UserAddIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var UsersIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
        fill: color2
      }
    )
  );
});
var ProfileIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
        fill: color2
      }
    )
  );
});
var FaceHappyIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var FaceNeutralIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var FaceSadIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var AccessibilityIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: color2
      }
    ),
    /* @__PURE__ */ React33.createElement("path", { d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z", fill: color2 }),
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var AccessibilityAltIcon = /* @__PURE__ */ React33.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 15 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ React33.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: color2
      }
    )
  );
});

// ../components/dist/index.mjs
var dist_exports7 = {};
__export(dist_exports7, {
  A: () => A,
  ActionBar: () => ActionBar,
  AddonPanel: () => AddonPanel,
  Badge: () => Badge,
  Bar: () => Bar,
  Blockquote: () => Blockquote,
  Button: () => Button,
  ClipboardCode: () => ClipboardCode,
  Code: () => Code,
  DL: () => DL,
  Div: () => Div,
  DocumentWrapper: () => DocumentWrapper,
  ErrorFormatter: () => ErrorFormatter,
  FlexBar: () => FlexBar,
  Form: () => Form,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  HR: () => HR,
  IconButton: () => IconButton,
  IconButtonSkeleton: () => IconButtonSkeleton,
  Icons: () => Icons,
  Img: () => Img,
  LI: () => LI,
  Link: () => Link22,
  ListItem: () => ListItem_default,
  Loader: () => Loader,
  OL: () => OL,
  P: () => P,
  Placeholder: () => Placeholder,
  Pre: () => Pre,
  ResetWrapper: () => ResetWrapper,
  ScrollArea: () => ScrollArea,
  Separator: () => Separator,
  Spaced: () => Spaced,
  Span: () => Span,
  StorybookIcon: () => StorybookIcon2,
  StorybookLogo: () => StorybookLogo,
  Symbols: () => Symbols,
  SyntaxHighlighter: () => SyntaxHighlighter22,
  TT: () => TT,
  TabBar: () => TabBar,
  TabButton: () => TabButton,
  TabWrapper: () => TabWrapper,
  Table: () => Table,
  Tabs: () => Tabs,
  TabsState: () => TabsState,
  TooltipLinkList: () => TooltipLinkList,
  TooltipMessage: () => TooltipMessage,
  TooltipNote: () => TooltipNote,
  UL: () => UL,
  WithTooltip: () => WithTooltip,
  WithTooltipPure: () => WithTooltipPure,
  Zoom: () => Zoom,
  codeCommon: () => codeCommon,
  components: () => components2,
  createCopyToClipboardFunction: () => createCopyToClipboardFunction,
  getStoryHref: () => getStoryHref,
  icons: () => icons,
  interleaveSeparators: () => interleaveSeparators,
  nameSpaceClassNames: () => nameSpaceClassNames,
  resetComponents: () => resetComponents,
  withReset: () => withReset
});
var React3 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_memoizerific4 = __toESM(require_memoizerific(), 1);
var nameSpaceClassNames = ({ ...props }, key2) => {
  const classes = [props.class, props.className];
  delete props.class;
  props.className = ["sbdocs", `sbdocs-${key2}`, ...classes].filter(Boolean).join(" ");
  return props;
};
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args2, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args22, Class2) {
      var a = [null];
      a.push.apply(a, args22);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper3);
    }
    function Wrapper3() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper3.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper3,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper3, Class2);
  };
  return _wrapNativeSuper(Class);
}
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  "12": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  "13": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  "14": 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "15": 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  "70": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  "71": 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "72": 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  "78": 'base must be set in "px" or "%" but you set it in "%s".\n'
};
function format() {
  for (var _len = arguments.length, args2 = new Array(_len), _key = 0; _key < _len; _key++) {
    args2[_key] = arguments[_key];
  }
  var a = args2[0];
  var b2 = [];
  var c2;
  for (c2 = 1; c2 < args2.length; c2 += 1) {
    b2.push(args2[c2]);
  }
  b2.forEach(function(d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    {
      for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args2[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args2))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color2) {
  if (typeof color2 !== "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color2.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color2.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color2.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function reduceHexValue2(value2) {
  if (value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6]) {
    return "#" + value2[1] + value2[3] + value2[5];
  }
  return value2;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value2, saturation, lightness);
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value2.hue, value2.saturation, value2.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value2, saturation, lightness) : "rgba(" + hslToRgb(value2, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value2 === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isRgba = function isRgba2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
};
var isHsl = function isHsl2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isHsla = function isHsla2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
};
function toColorString(color2) {
  if (typeof color2 !== "object")
    throw new PolishedError(8);
  if (isRgba(color2))
    return rgba(color2);
  if (isRgb(color2))
    return rgb(color2);
  if (isHsla(color2))
    return hsla(color2);
  if (isHsl(color2))
    return hsl(color2);
  throw new PolishedError(8);
}
function curried(f3, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f3.apply(this, combined) : curried(f3, length, combined);
  };
}
function curry(f3) {
  return curried(f3, f3.length, []);
}
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken = /* @__PURE__ */ curry(darken);
var curriedDarken$1 = curriedDarken;
function lighten(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = /* @__PURE__ */ curry(lighten);
var curriedLighten$1 = curriedLighten;
function transparentize(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var headerCommon = ({ theme }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: theme.color.defaultText,
  "&:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "&:hover a.anchor": {
    textDecoration: "none"
  },
  "& tt, & code": {
    fontSize: "inherit"
  }
});
var codeCommon = ({ theme }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: theme.typography.size.s2 - 1,
  border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`,
  color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText),
  backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border
});
var withReset = ({ theme }) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
});
var withMargin = {
  margin: "16px 0"
};
var Link3 = ({ href: input, ...props }) => {
  const isStorybookPath = /^\//.test(input);
  const href = isStorybookPath ? `./?path=${input}` : input;
  const isAnchorUrl = /^#.*/.test(input);
  const target = isAnchorUrl ? "_self" : "_top";
  return /* @__PURE__ */ import_react3.default.createElement("a", { href, target, ...props });
};
var A = newStyled(Link3)(withReset, ({ theme }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: theme.color.secondary,
  textDecoration: "none",
  "&.absent": {
    color: "#cc0000"
  },
  "&.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  }
}));
var Blockquote = newStyled.blockquote(withReset, withMargin, ({ theme }) => ({
  borderLeft: `4px solid ${theme.color.medium}`,
  padding: "0 15px",
  color: theme.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
var isReactChildString = (child) => typeof child === "string";
var isInlineCodeRegex = /[\n\r]/g;
var DefaultCodeBlock = newStyled.code(
  ({ theme }) => ({
    // from reset
    fontFamily: theme.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  codeCommon
);
var StyledSyntaxHighlighter = newStyled(SyntaxHighlighter2)(({ theme }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: theme.typography.fonts.mono,
  fontSize: `${theme.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: theme.appBorderRadius,
  boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
}));
var Code = ({
  className,
  children,
  ...props
}) => {
  const language = (className || "").match(/lang-(\S+)/);
  const childrenArray = import_react3.Children.toArray(children);
  const isInlineCode = !childrenArray.filter(isReactChildString).some((child) => child.match(isInlineCodeRegex));
  if (isInlineCode) {
    return /* @__PURE__ */ import_react3.default.createElement(DefaultCodeBlock, { ...props, className }, childrenArray);
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    StyledSyntaxHighlighter,
    {
      bordered: true,
      copyable: true,
      language: language?.[1] ?? "text",
      format: false,
      ...props
    },
    children
  );
};
var Div = newStyled.div(withReset);
var DL = newStyled.dl(withReset, withMargin, {
  padding: 0,
  "& dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 0,
    margin: "16px 0 4px"
  },
  "& dt:first-of-type": {
    padding: 0
  },
  "& dt > :first-of-type": {
    marginTop: 0
  },
  "& dt > :last-child": {
    marginBottom: 0
  },
  "& dd": {
    margin: "0 0 16px",
    padding: "0 15px"
  },
  "& dd > :first-of-type": {
    marginTop: 0
  },
  "& dd > :last-child": {
    marginBottom: 0
  }
});
var H1 = newStyled.h1(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.l1}px`,
  fontWeight: theme.typography.weight.bold
}));
var H2 = newStyled.h2(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${theme.appBorderColor}`
}));
var H3 = newStyled.h3(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.m1}px`
}));
var H4 = newStyled.h4(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.s3}px`
}));
var H5 = newStyled.h5(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.s2}px`
}));
var H6 = newStyled.h6(withReset, headerCommon, ({ theme }) => ({
  fontSize: `${theme.typography.size.s2}px`,
  color: theme.color.dark
}));
var HR = newStyled.hr(({ theme }) => ({
  border: "0 none",
  borderTop: `1px solid ${theme.appBorderColor}`,
  height: 4,
  padding: 0
}));
var Img = newStyled.img({
  maxWidth: "100%"
});
var LI = newStyled.li(withReset, ({ theme }) => ({
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": codeCommon({ theme })
}));
var listCommon = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var OL = newStyled.ol(withReset, withMargin, listCommon, {
  listStyle: "decimal"
});
var P = newStyled.p(withReset, withMargin, ({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "24px",
  color: theme.color.defaultText,
  "& code": codeCommon({ theme })
}));
var Pre = newStyled.pre(withReset, withMargin, ({ theme }) => ({
  // reset
  fontFamily: theme.typography.fonts.mono,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "18px",
  padding: "11px 1rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  borderRadius: 3,
  margin: "1rem 0",
  "&:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "& pre, &.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px",
    code: {
      color: "inherit",
      fontSize: "inherit"
    }
  },
  "& code": {
    whiteSpace: "pre"
  },
  "& code, & tt": {
    border: "none"
  }
}));
var Span = newStyled.span(withReset, ({ theme }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${theme.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: theme.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "&.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "&.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "&.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "&.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  }
}));
var Table = newStyled.table(withReset, withMargin, ({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${theme.appBorderColor}`,
    backgroundColor: theme.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: theme.color.defaultText,
    border: `1px solid ${theme.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${theme.appBorderColor}`,
    color: theme.color.defaultText,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr th :first-of-type, & tr td :first-of-type": {
    marginTop: 0
  },
  "& tr th :last-child, & tr td :last-child": {
    marginBottom: 0
  }
}));
var TT = newStyled.title(codeCommon);
var listCommon2 = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var UL = newStyled.ul(withReset, withMargin, listCommon2, { listStyle: "disc" });
var ResetWrapper = newStyled.div(withReset);
var components = {
  h1: (props) => /* @__PURE__ */ import_react3.default.createElement(H1, { ...nameSpaceClassNames(props, "h1") }),
  h2: (props) => /* @__PURE__ */ import_react3.default.createElement(H2, { ...nameSpaceClassNames(props, "h2") }),
  h3: (props) => /* @__PURE__ */ import_react3.default.createElement(H3, { ...nameSpaceClassNames(props, "h3") }),
  h4: (props) => /* @__PURE__ */ import_react3.default.createElement(H4, { ...nameSpaceClassNames(props, "h4") }),
  h5: (props) => /* @__PURE__ */ import_react3.default.createElement(H5, { ...nameSpaceClassNames(props, "h5") }),
  h6: (props) => /* @__PURE__ */ import_react3.default.createElement(H6, { ...nameSpaceClassNames(props, "h6") }),
  pre: (props) => /* @__PURE__ */ import_react3.default.createElement(Pre, { ...nameSpaceClassNames(props, "pre") }),
  a: (props) => /* @__PURE__ */ import_react3.default.createElement(A, { ...nameSpaceClassNames(props, "a") }),
  hr: (props) => /* @__PURE__ */ import_react3.default.createElement(HR, { ...nameSpaceClassNames(props, "hr") }),
  dl: (props) => /* @__PURE__ */ import_react3.default.createElement(DL, { ...nameSpaceClassNames(props, "dl") }),
  blockquote: (props) => /* @__PURE__ */ import_react3.default.createElement(Blockquote, { ...nameSpaceClassNames(props, "blockquote") }),
  table: (props) => /* @__PURE__ */ import_react3.default.createElement(Table, { ...nameSpaceClassNames(props, "table") }),
  img: (props) => /* @__PURE__ */ import_react3.default.createElement(Img, { ...nameSpaceClassNames(props, "img") }),
  div: (props) => /* @__PURE__ */ import_react3.default.createElement(Div, { ...nameSpaceClassNames(props, "div") }),
  span: (props) => /* @__PURE__ */ import_react3.default.createElement(Span, { ...nameSpaceClassNames(props, "span") }),
  li: (props) => /* @__PURE__ */ import_react3.default.createElement(LI, { ...nameSpaceClassNames(props, "li") }),
  ul: (props) => /* @__PURE__ */ import_react3.default.createElement(UL, { ...nameSpaceClassNames(props, "ul") }),
  ol: (props) => /* @__PURE__ */ import_react3.default.createElement(OL, { ...nameSpaceClassNames(props, "ol") }),
  p: (props) => /* @__PURE__ */ import_react3.default.createElement(P, { ...nameSpaceClassNames(props, "p") }),
  code: (props) => /* @__PURE__ */ import_react3.default.createElement(Code, { ...nameSpaceClassNames(props, "code") }),
  tt: (props) => /* @__PURE__ */ import_react3.default.createElement(TT, { ...nameSpaceClassNames(props, "tt") }),
  resetwrapper: (props) => /* @__PURE__ */ import_react3.default.createElement(ResetWrapper, { ...nameSpaceClassNames(props, "resetwrapper") })
};
var BadgeWrapper = newStyled.div(
  ({ theme }) => ({
    display: "inline-block",
    fontSize: 11,
    lineHeight: "12px",
    alignSelf: "center",
    padding: "4px 12px",
    borderRadius: "3em",
    fontWeight: theme.typography.weight.bold
  }),
  {
    svg: {
      height: 12,
      width: 12,
      marginRight: 4,
      marginTop: -2,
      path: {
        fill: "currentColor"
      }
    }
  },
  ({ theme, status }) => {
    switch (status) {
      case "critical": {
        return {
          color: theme.color.critical,
          background: theme.background.critical
        };
      }
      case "negative": {
        return {
          color: theme.color.negativeText,
          background: theme.background.negative,
          boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1(0.9, theme.color.negativeText)}` : "none"
        };
      }
      case "warning": {
        return {
          color: theme.color.warningText,
          background: theme.background.warning,
          boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1(0.9, theme.color.warningText)}` : "none"
        };
      }
      case "neutral": {
        return {
          color: theme.color.dark,
          background: theme.color.mediumlight,
          boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1(0.9, theme.color.dark)}` : "none"
        };
      }
      case "positive": {
        return {
          color: theme.color.positiveText,
          background: theme.background.positive,
          boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1(0.9, theme.color.positiveText)}` : "none"
        };
      }
      default: {
        return {};
      }
    }
  }
);
var Badge = ({ ...props }) => {
  return /* @__PURE__ */ import_react3.default.createElement(BadgeWrapper, { ...props });
};
var LEFT_BUTTON = 0;
var isPlainLeftClick = (e) => e.button === LEFT_BUTTON && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
var cancelled = (e, cb) => {
  if (isPlainLeftClick(e)) {
    e.preventDefault();
    cb(e);
  }
};
var LinkInner = newStyled.span(
  ({ withArrow }) => withArrow ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon }) => containsIcon ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
);
var A2 = newStyled.a(
  ({ theme }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: theme.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: curriedDarken$1(0.07, theme.color.secondary),
      "svg path:not([fill])": {
        fill: curriedDarken$1(0.07, theme.color.secondary)
      }
    },
    "&:active": {
      color: curriedDarken$1(0.1, theme.color.secondary),
      "svg path:not([fill])": {
        fill: curriedDarken$1(0.1, theme.color.secondary)
      }
    },
    svg: {
      display: "inline-block",
      height: "1em",
      width: "1em",
      verticalAlign: "text-top",
      position: "relative",
      bottom: "-0.125em",
      marginRight: "0.4em",
      "& path": {
        fill: theme.color.secondary
      }
    }
  }),
  ({ theme, secondary, tertiary }) => {
    let colors;
    if (secondary) {
      colors = [theme.textMutedColor, theme.color.dark, theme.color.darker];
    }
    if (tertiary) {
      colors = [theme.color.dark, theme.color.darkest, theme.textMutedColor];
    }
    return colors ? {
      color: colors[0],
      "svg path:not([fill])": {
        fill: colors[0]
      },
      "&:hover": {
        color: colors[1],
        "svg path:not([fill])": {
          fill: colors[1]
        }
      },
      "&:active": {
        color: colors[2],
        "svg path:not([fill])": {
          fill: colors[2]
        }
      }
    } : {};
  },
  ({ nochrome }) => nochrome ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme, inverse }) => inverse ? {
    color: theme.color.lightest,
    ":not([fill])": {
      fill: theme.color.lightest
    },
    "&:hover": {
      color: theme.color.lighter,
      "svg path:not([fill])": {
        fill: theme.color.lighter
      }
    },
    "&:active": {
      color: theme.color.light,
      "svg path:not([fill])": {
        fill: theme.color.light
      }
    }
  } : {},
  ({ isButton: isButton2 }) => isButton2 ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
);
var Link22 = ({
  cancel = true,
  children,
  onClick = void 0,
  withArrow = false,
  containsIcon = false,
  className = void 0,
  style = void 0,
  ...rest
}) => /* @__PURE__ */ import_react3.default.createElement(
  A2,
  {
    ...rest,
    onClick: onClick && cancel ? (e) => cancelled(e, onClick) : onClick,
    className
  },
  /* @__PURE__ */ import_react3.default.createElement(LinkInner, { withArrow, containsIcon }, children, withArrow && /* @__PURE__ */ import_react3.default.createElement(ChevronRightIcon, null))
);
var DocumentWrapper = newStyled.div(({ theme }) => ({
  fontSize: `${theme.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${theme.typography.size.l1}px`,
    fontWeight: theme.typography.weight.bold
  },
  h2: {
    fontSize: `${theme.typography.size.m2}px`,
    borderBottom: `1px solid ${theme.appBorderColor}`
  },
  h3: {
    fontSize: `${theme.typography.size.m1}px`
  },
  h4: {
    fontSize: `${theme.typography.size.s3}px`
  },
  h5: {
    fontSize: `${theme.typography.size.s2}px`
  },
  h6: {
    fontSize: `${theme.typography.size.s2}px`,
    color: theme.color.dark
  },
  "pre:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "pre pre, pre.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px"
  },
  "pre pre code, pre.prismjs code": {
    color: "inherit",
    fontSize: "inherit"
  },
  "pre code": {
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    border: "none",
    background: "transparent"
  },
  "pre code, pre tt": {
    backgroundColor: "transparent",
    border: "none"
  },
  /* GitHub inspired Markdown styles loosely from https://gist.github.com/tuzz/3331384 */
  "body > *:first-of-type": {
    marginTop: "0 !important"
  },
  "body > *:last-child": {
    marginBottom: "0 !important"
  },
  a: {
    color: theme.color.secondary,
    textDecoration: "none"
  },
  "a.absent": {
    color: "#cc0000"
  },
  "a.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "20px 0 10px",
    padding: 0,
    cursor: "text",
    position: "relative",
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0
    },
    "&:hover a.anchor": {
      textDecoration: "none"
    },
    "& tt, & code": {
      fontSize: "inherit"
    }
  },
  "h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "p, blockquote, ul, ol, dl, li, table, pre": {
    margin: "15px 0"
  },
  hr: {
    border: "0 none",
    borderTop: `1px solid ${theme.appBorderColor}`,
    height: 4,
    padding: 0
  },
  "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "body > h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
    marginTop: 0,
    paddingTop: 0
  },
  "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": {
    marginTop: 0
  },
  "li p.first": {
    display: "inline-block"
  },
  "ul, ol": {
    paddingLeft: 30,
    "& :first-of-type": {
      marginTop: 0
    },
    "& :last-child": {
      marginBottom: 0
    }
  },
  dl: {
    padding: 0
  },
  "dl dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: "0 0 15px",
    padding: "0 15px",
    "&:first-of-type": {
      padding: 0
    },
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  blockquote: {
    borderLeft: `4px solid ${theme.color.medium}`,
    padding: "0 15px",
    color: theme.color.dark,
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  table: {
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${theme.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${theme.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${theme.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: theme.color.lighter
      },
      "& th :first-of-type, & td :first-of-type": {
        marginTop: 0
      },
      "& th :last-child, & td :last-child": {
        marginBottom: 0
      }
    }
  },
  img: {
    maxWidth: "100%"
  },
  "span.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${theme.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: theme.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "span.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "span.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  },
  "code, tt": {
    margin: "0 2px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    border: `1px solid ${theme.color.mediumlight}`,
    backgroundColor: theme.color.lighter,
    borderRadius: 3,
    color: theme.base === "dark" && theme.color.darkest
  }
}));
var languages = [];
var Comp = null;
var LazySyntaxHighlighter = (0, import_react3.lazy)(async () => {
  const { SyntaxHighlighter: SyntaxHighlighter3 } = await import("./syntaxhighlighter-ZKFMBJWN-B5IEEVZG.js");
  if (languages.length > 0) {
    languages.forEach((args2) => {
      SyntaxHighlighter3.registerLanguage(...args2);
    });
    languages = [];
  }
  if (Comp === null)
    Comp = SyntaxHighlighter3;
  return {
    default: (props) => /* @__PURE__ */ import_react3.default.createElement(SyntaxHighlighter3, { ...props })
  };
});
var LazySyntaxHighlighterWithFormatter = (0, import_react3.lazy)(async () => {
  const [{ SyntaxHighlighter: SyntaxHighlighter3 }, { formatter }] = await Promise.all([
    import("./syntaxhighlighter-ZKFMBJWN-B5IEEVZG.js"),
    import("./formatter-MOD6AG2F-3RBZZ2YZ.js")
  ]);
  if (languages.length > 0) {
    languages.forEach((args2) => {
      SyntaxHighlighter3.registerLanguage(...args2);
    });
    languages = [];
  }
  if (Comp === null) {
    Comp = SyntaxHighlighter3;
  }
  return {
    default: (props) => /* @__PURE__ */ import_react3.default.createElement(SyntaxHighlighter3, { ...props, formatter })
  };
});
var SyntaxHighlighter22 = (props) => /* @__PURE__ */ import_react3.default.createElement(import_react3.Suspense, { fallback: /* @__PURE__ */ import_react3.default.createElement("div", null) }, props.format !== false ? /* @__PURE__ */ import_react3.default.createElement(LazySyntaxHighlighterWithFormatter, { ...props }) : /* @__PURE__ */ import_react3.default.createElement(LazySyntaxHighlighter, { ...props }));
SyntaxHighlighter22.registerLanguage = (...args2) => {
  if (Comp !== null) {
    Comp.registerLanguage(...args2);
    return;
  }
  languages.push(args2);
};
var toNumber = (input) => typeof input === "number" ? input : Number(input);
var Container = newStyled.div(
  ({ theme, col, row = 1 }) => col ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: col * theme.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${ignoreSsrWarning}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: row * theme.layoutMargin
    },
    [`& > *:first-child${ignoreSsrWarning}`]: {
      marginTop: 0
    }
  },
  ({ theme, outer, col, row }) => {
    switch (true) {
      case !!(outer && col): {
        return {
          marginLeft: outer * theme.layoutMargin,
          marginRight: outer * theme.layoutMargin
        };
      }
      case !!(outer && row): {
        return {
          marginTop: outer * theme.layoutMargin,
          marginBottom: outer * theme.layoutMargin
        };
      }
      default: {
        return {};
      }
    }
  }
);
var Spaced = ({ col, row, outer, children, ...rest }) => {
  const outerAmount = toNumber(typeof outer === "number" || !outer ? outer : col || row);
  return /* @__PURE__ */ import_react3.default.createElement(Container, { col, row, outer: outerAmount, ...rest }, children);
};
var Title = newStyled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var Desc = newStyled.div();
var Message = newStyled.div(({ theme }) => ({
  padding: 30,
  textAlign: "center",
  color: theme.color.defaultText,
  fontSize: theme.typography.size.s2 - 1
}));
var Placeholder = ({ children, ...props }) => {
  const [title, desc] = import_react3.Children.toArray(children);
  return /* @__PURE__ */ import_react3.default.createElement(Message, { ...props }, /* @__PURE__ */ import_react3.default.createElement(Title, null, title), desc && /* @__PURE__ */ import_react3.default.createElement(Desc, null, desc));
};
function useResolvedElement(subscriber, refOrElement) {
  var lastReportRef = (0, import_react3.useRef)(null);
  var refOrElementRef = (0, import_react3.useRef)(null);
  refOrElementRef.current = refOrElement;
  var cbElementRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(function() {
    evaluateSubscription();
  });
  var evaluateSubscription = (0, import_react3.useCallback)(function() {
    var cbElement = cbElementRef.current;
    var refOrElement2 = refOrElementRef.current;
    var element = cbElement ? cbElement : refOrElement2 ? refOrElement2 instanceof Element ? refOrElement2 : refOrElement2.current : null;
    if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.subscriber === subscriber) {
      return;
    }
    if (lastReportRef.current && lastReportRef.current.cleanup) {
      lastReportRef.current.cleanup();
    }
    lastReportRef.current = {
      element,
      subscriber,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: element ? subscriber(element) : void 0
    };
  }, [subscriber]);
  (0, import_react3.useEffect)(function() {
    return function() {
      if (lastReportRef.current && lastReportRef.current.cleanup) {
        lastReportRef.current.cleanup();
        lastReportRef.current = null;
      }
    };
  }, []);
  return (0, import_react3.useCallback)(function(element) {
    cbElementRef.current = element;
    evaluateSubscription();
  }, [evaluateSubscription]);
}
function extractSize(entry, boxProp, sizeType) {
  if (!entry[boxProp]) {
    if (boxProp === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return entry[boxProp][0] ? entry[boxProp][0][sizeType] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    entry[boxProp][sizeType]
  );
}
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var onResize = opts.onResize;
  var onResizeRef = (0, import_react3.useRef)(void 0);
  onResizeRef.current = onResize;
  var round = opts.round || Math.round;
  var resizeObserverRef = (0, import_react3.useRef)();
  var _useState = (0, import_react3.useState)({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var didUnmount = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(function() {
    didUnmount.current = false;
    return function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = (0, import_react3.useRef)({
    width: void 0,
    height: void 0
  });
  var refCallback = useResolvedElement((0, import_react3.useCallback)(function(element) {
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(function(entries) {
          var entry = entries[0];
          var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
          var reportedWidth = extractSize(entry, boxProp, "inlineSize");
          var reportedHeight = extractSize(entry, boxProp, "blockSize");
          var newWidth = reportedWidth ? round(reportedWidth) : void 0;
          var newHeight = reportedHeight ? round(reportedHeight) : void 0;
          if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (onResizeRef.current) {
              onResizeRef.current(newSize);
            } else {
              if (!didUnmount.current) {
                setSize(newSize);
              }
            }
          }
        })
      };
    }
    resizeObserverRef.current.instance.observe(element, {
      box: opts.box
    });
    return function() {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.instance.unobserve(element);
      }
    };
  }, [opts.box, round]), opts.ref);
  return (0, import_react3.useMemo)(function() {
    return {
      ref: refCallback,
      width: size.width,
      height: size.height
    };
  }, [refCallback, size.width, size.height]);
}
var ZoomElementWrapper = newStyled.div(
  ({ scale = 1, elementHeight }) => ({
    height: elementHeight || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / scale})`
  })
);
function ZoomElement({ scale, children }) {
  const componentWrapperRef = (0, import_react3.useRef)(null);
  const [elementHeight, setElementHeight] = (0, import_react3.useState)(0);
  const onResize = (0, import_react3.useCallback)(
    ({ height }) => {
      if (height) {
        setElementHeight(height / scale);
      }
    },
    [scale]
  );
  (0, import_react3.useEffect)(() => {
    if (componentWrapperRef.current) {
      setElementHeight(componentWrapperRef.current.getBoundingClientRect().height);
    }
  }, [scale]);
  useResizeObserver({
    ref: componentWrapperRef,
    onResize
  });
  return /* @__PURE__ */ import_react3.default.createElement(ZoomElementWrapper, { scale, elementHeight }, /* @__PURE__ */ import_react3.default.createElement("div", { ref: componentWrapperRef, className: "innerZoomElementWrapper" }, children));
}
var ZoomIFrame = class extends import_react3.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    const { iFrameRef } = this.props;
    this.iframe = iFrameRef.current;
  }
  shouldComponentUpdate(nextProps) {
    const { scale, active } = this.props;
    if (scale !== nextProps.scale) {
      this.setIframeInnerZoom(nextProps.scale);
    }
    if (active !== nextProps.active) {
      this.iframe.setAttribute("data-is-storybook", nextProps.active ? "true" : "false");
    }
    return nextProps.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(scale) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${scale * 100}%`,
        height: `${scale * 100}%`,
        transform: `scale(${1 / scale})`,
        transformOrigin: "top left"
      });
    } catch (e) {
      this.setIframeZoom(scale);
    }
  }
  setIframeZoom(scale) {
    Object.assign(this.iframe.style, {
      width: `${scale * 100}%`,
      height: `${scale * 100}%`,
      transform: `scale(${1 / scale})`,
      transformOrigin: "top left"
    });
  }
  render() {
    const { children } = this.props;
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
  }
};
var Zoom = {
  Element: ZoomElement,
  IFrame: ZoomIFrame
};
var { document: document24 } = scope;
var ErrorName = newStyled.strong(({ theme }) => ({
  color: theme.color.orange
}));
var ErrorImportant = newStyled.strong(({ theme }) => ({
  color: theme.color.ancillary,
  textDecoration: "underline"
}));
var ErrorDetail = newStyled.em(({ theme }) => ({
  color: theme.textMutedColor
}));
var firstLineRegex = /(Error): (.*)\n/;
var linesRegexChromium = /at (?:(.*) )?\(?(.+)\)?/;
var linesRegexFirefox = /([^@]+)?(?:\/<)?@(.+)?/;
var linesRegexSafari = /([^@]+)?@(.+)?/;
var ErrorFormatter = ({ error }) => {
  if (!error) {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, null, "This error has no stack or message");
  }
  if (!error.stack) {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, null, error.message || "This error has no stack or message");
  }
  let input = error.stack.toString();
  if (input && error.message && !input.includes(error.message)) {
    input = `Error: ${error.message}

${input}`;
  }
  const match = input.match(firstLineRegex);
  if (!match) {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, null, input);
  }
  const [, type, name2] = match;
  const rawLines = input.split(/\n/).slice(1);
  const [, ...lines] = rawLines.map((line) => {
    const result2 = line.match(linesRegexChromium) || line.match(linesRegexFirefox) || line.match(linesRegexSafari);
    if (result2) {
      return {
        name: (result2[1] || "").replace("/<", ""),
        location: result2[2].replace(document24.location.origin, "")
      };
    }
    return null;
  }).filter(Boolean);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("span", null, type), ": ", /* @__PURE__ */ import_react3.default.createElement(ErrorName, null, name2), /* @__PURE__ */ import_react3.default.createElement("br", null), lines.map(
    (l, i) => l.name ? /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, { key: i }, "  ", "at ", /* @__PURE__ */ import_react3.default.createElement(ErrorImportant, null, l.name), " (", /* @__PURE__ */ import_react3.default.createElement(ErrorDetail, null, l.location), ")", /* @__PURE__ */ import_react3.default.createElement("br", null)) : /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, { key: i }, "  ", "at ", /* @__PURE__ */ import_react3.default.createElement(ErrorDetail, null, l.location), /* @__PURE__ */ import_react3.default.createElement("br", null))
  ));
};
var Button = (0, import_react3.forwardRef)(
  ({
    asChild = false,
    animation = "none",
    size = "small",
    variant = "outline",
    padding = "medium",
    disabled = false,
    active = false,
    onClick,
    ...props
  }, ref) => {
    let Comp2 = "button";
    if (props.isLink)
      Comp2 = "a";
    if (asChild)
      Comp2 = $5e63c961fc1ce211$export$8c6ed5c666ac1360;
    let localVariant = variant;
    let localSize = size;
    const [isAnimating, setIsAnimating] = (0, import_react3.useState)(false);
    const handleClick = (event) => {
      if (onClick)
        onClick(event);
      if (animation === "none")
        return;
      setIsAnimating(true);
    };
    (0, import_react3.useEffect)(() => {
      const timer = setTimeout(() => {
        if (isAnimating)
          setIsAnimating(false);
      }, 1e3);
      return () => clearTimeout(timer);
    }, [isAnimating]);
    if (props.primary) {
      localVariant = "solid";
      localSize = "medium";
    }
    if (props.secondary || props.tertiary || props.gray || props.outline || props.inForm) {
      localVariant = "outline";
      localSize = "medium";
    }
    if (props.small || props.isLink || props.primary || props.secondary || props.tertiary || props.gray || props.outline || props.inForm || props.containsIcon) {
      const buttonContent = import_react3.default.Children.toArray(props.children).filter(
        (e) => typeof e === "string" && e !== ""
      );
      deprecate(
        `Use of deprecated props in the button ${buttonContent.length > 0 ? `"${buttonContent.join(" ")}"` : "component"} detected, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-ui-and-props-for-button-and-iconbutton-components`
      );
    }
    return /* @__PURE__ */ import_react3.default.createElement(
      StyledButton,
      {
        as: Comp2,
        ref,
        variant: localVariant,
        size: localSize,
        padding,
        disabled,
        active,
        animating: isAnimating,
        animation,
        onClick: handleClick,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var StyledButton = newStyled("button", {
  shouldForwardProp: (prop) => isPropValid(prop)
})(({ theme, variant, size, disabled, active, animating, animation, padding }) => ({
  border: 0,
  cursor: disabled ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: (() => {
    if (padding === "small" && size === "small")
      return "0 7px";
    if (padding === "small" && size === "medium")
      return "0 9px";
    if (size === "small")
      return "0 10px";
    if (size === "medium")
      return "0 12px";
    return 0;
  })(),
  height: size === "small" ? "28px" : "32px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transitionProperty: "background, box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  userSelect: "none",
  opacity: disabled ? 0.5 : 1,
  margin: 0,
  fontSize: `${theme.typography.size.s1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: "1",
  background: (() => {
    if (variant === "solid")
      return theme.color.secondary;
    if (variant === "outline")
      return theme.button.background;
    if (variant === "ghost" && active)
      return theme.background.hoverable;
    return "transparent";
  })(),
  color: (() => {
    if (variant === "solid")
      return theme.color.lightest;
    if (variant === "outline")
      return theme.input.color;
    if (variant === "ghost" && active)
      return theme.color.secondary;
    if (variant === "ghost")
      return theme.color.mediumdark;
    return theme.input.color;
  })(),
  boxShadow: variant === "outline" ? `${theme.button.border} 0 0 0 1px inset` : "none",
  borderRadius: theme.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: variant === "ghost" ? theme.color.secondary : null,
    background: (() => {
      let bgColor = theme.color.secondary;
      if (variant === "solid")
        bgColor = theme.color.secondary;
      if (variant === "outline")
        bgColor = theme.button.background;
      if (variant === "ghost")
        return curriedTransparentize$1(0.86, theme.color.secondary);
      return theme.base === "light" ? curriedDarken$1(0.02, bgColor) : curriedLighten$1(0.03, bgColor);
    })()
  },
  "&:active": {
    color: variant === "ghost" ? theme.color.secondary : null,
    background: (() => {
      let bgColor = theme.color.secondary;
      if (variant === "solid")
        bgColor = theme.color.secondary;
      if (variant === "outline")
        bgColor = theme.button.background;
      if (variant === "ghost")
        return theme.background.hoverable;
      return theme.base === "light" ? curriedDarken$1(0.02, bgColor) : curriedLighten$1(0.03, bgColor);
    })()
  },
  "&:focus": {
    boxShadow: `${rgba(theme.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: animating && animation !== "none" ? `${theme.animation[animation]} 1000ms ease-out` : ""
  }
}));
var IconButton = (0, import_react3.forwardRef)(
  ({ padding = "small", variant = "ghost", ...props }, ref) => {
    return /* @__PURE__ */ import_react3.default.createElement(Button, { padding, variant, ref, ...props });
  }
);
IconButton.displayName = "IconButton";
var Wrapper = newStyled.label(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
}));
var Label = newStyled.span(({ theme }) => ({
  minWidth: 100,
  fontWeight: theme.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
}));
var Field = ({ label, children, ...props }) => /* @__PURE__ */ import_react3.default.createElement(Wrapper, { ...props }, label ? /* @__PURE__ */ import_react3.default.createElement(Label, null, /* @__PURE__ */ import_react3.default.createElement("span", null, label)) : null, children);
Field.defaultProps = {
  label: void 0
};
var index = import_react3.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;
var useLatest = function useLatest2(value2) {
  var ref = React3.useRef(value2);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value2;
  });
  return ref;
};
var updateRef = function updateRef2(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
    return;
  }
  ref.current = value2;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react3.useRef)();
  return (0, import_react3.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key2) {
    node.style.setProperty(key2, HIDDEN_TEXTAREA_STYLE[key2], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value2, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key2 = _key;
    hiddenTextarea.style[key2] = sizingStyle[key2];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value2;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value2;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop = function noop2() {
};
var pick2 = function pick22(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick2(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React3.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded3 = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded3);
  var isControlled = props.value !== void 0;
  var libRef = React3.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React3.useRef(0);
  var measurementsCacheRef = React3.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React3.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return /* @__PURE__ */ React3.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index2 = /* @__PURE__ */ React3.forwardRef(TextareaAutosize);
var styleResets = {
  // resets
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
};
var styles = ({ theme }) => ({
  ...styleResets,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: theme.input.color || "inherit",
  background: theme.input.background,
  boxShadow: `${theme.input.border} 0 0 0 1px inset`,
  borderRadius: theme.input.borderRadius,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
    outline: "none"
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset` },
  "&::placeholder": {
    color: theme.textMutedColor,
    opacity: 1
  }
});
var sizes = ({ size }) => {
  switch (size) {
    case "100%": {
      return { width: "100%" };
    }
    case "flex": {
      return { flex: 1 };
    }
    case "auto":
    default: {
      return { display: "inline" };
    }
  }
};
var alignment = ({ align }) => {
  switch (align) {
    case "end": {
      return { textAlign: "right" };
    }
    case "center": {
      return { textAlign: "center" };
    }
    case "start":
    default: {
      return { textAlign: "left" };
    }
  }
};
var validation = ({ valid, theme }) => {
  switch (valid) {
    case "valid": {
      return { boxShadow: `${theme.color.positive} 0 0 0 1px inset !important` };
    }
    case "error": {
      return { boxShadow: `${theme.color.negative} 0 0 0 1px inset !important` };
    }
    case "warn": {
      return {
        boxShadow: `${theme.color.warning} 0 0 0 1px inset`
      };
    }
    case void 0:
    case null:
    default: {
      return {};
    }
  }
};
var Input = Object.assign(
  newStyled(
    (0, import_react3.forwardRef)(function Input2({ size, valid, align, ...props }, ref) {
      return /* @__PURE__ */ import_react3.default.createElement("input", { ...props, ref });
    })
  )(styles, sizes, alignment, validation, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
);
var Select = Object.assign(
  newStyled(
    (0, import_react3.forwardRef)(function Select2({ size, valid, align, ...props }, ref) {
      return /* @__PURE__ */ import_react3.default.createElement("select", { ...props, ref });
    })
  )(styles, sizes, validation, {
    height: 32,
    userSelect: "none",
    paddingRight: 20,
    appearance: "menulist"
  }),
  {
    displayName: "Select"
  }
);
var Textarea = Object.assign(
  newStyled(
    (0, import_react3.forwardRef)(function Textarea2({ size, valid, align, ...props }, ref) {
      return /* @__PURE__ */ import_react3.default.createElement(index2, { ...props, ref });
    })
  )(styles, sizes, alignment, validation, ({ height = 400 }) => ({
    overflow: "visible",
    maxHeight: height
  })),
  {
    displayName: "Textarea"
  }
);
var Form = Object.assign(
  newStyled.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field,
    Input,
    Select,
    Textarea,
    Button
  }
);
var LazyWithTooltip = (0, import_react3.lazy)(
  () => import("./WithTooltip-VJGWYUBX-TSSU4VZ2.js").then((mod) => ({ default: mod.WithTooltip }))
);
var WithTooltip = (props) => /* @__PURE__ */ import_react3.default.createElement(import_react3.Suspense, { fallback: /* @__PURE__ */ import_react3.default.createElement("div", null) }, /* @__PURE__ */ import_react3.default.createElement(LazyWithTooltip, { ...props }));
var LazyWithTooltipPure = (0, import_react3.lazy)(
  () => import("./WithTooltip-VJGWYUBX-TSSU4VZ2.js").then((mod) => ({ default: mod.WithTooltipPure }))
);
var WithTooltipPure = (props) => /* @__PURE__ */ import_react3.default.createElement(import_react3.Suspense, { fallback: /* @__PURE__ */ import_react3.default.createElement("div", null) }, /* @__PURE__ */ import_react3.default.createElement(LazyWithTooltipPure, { ...props }));
var Title2 = newStyled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var Desc2 = newStyled.span();
var Links = newStyled.div(({ theme }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: theme.typography.weight.bold
  }
}));
var Message2 = newStyled.div(({ theme }) => ({
  color: theme.color.defaultText,
  lineHeight: "18px"
}));
var MessageWrapper = newStyled.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
});
var TooltipMessage = ({ title, desc, links }) => {
  return /* @__PURE__ */ import_react3.default.createElement(MessageWrapper, null, /* @__PURE__ */ import_react3.default.createElement(Message2, null, title && /* @__PURE__ */ import_react3.default.createElement(Title2, null, title), desc && /* @__PURE__ */ import_react3.default.createElement(Desc2, null, desc)), links && /* @__PURE__ */ import_react3.default.createElement(Links, null, links.map(({ title: linkTitle, ...other }) => /* @__PURE__ */ import_react3.default.createElement(Link22, { ...other, key: linkTitle }, linkTitle))));
};
TooltipMessage.defaultProps = {
  title: null,
  desc: null,
  links: null
};
var Note = newStyled.div(({ theme }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: theme.typography.weight.bold,
  color: theme.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: theme.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
}));
var TooltipNote = ({ note, ...props }) => {
  return /* @__PURE__ */ import_react3.default.createElement(Note, { ...props }, note);
};
var Title3 = newStyled(({ active, loading, disabled, ...rest }) => /* @__PURE__ */ import_react3.default.createElement("span", { ...rest }))(
  ({ theme }) => ({
    color: theme.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: theme.typography.weight.regular
  }),
  ({ active, theme }) => active ? {
    color: theme.color.secondary,
    fontWeight: theme.typography.weight.bold
  } : {},
  ({ loading, theme }) => loading ? {
    display: "inline-block",
    flex: "none",
    ...theme.animation.inlineGlow
  } : {},
  ({ disabled, theme }) => disabled ? {
    color: curriedTransparentize$1(0.7, theme.color.defaultText)
  } : {}
);
var Right = newStyled.span({
  display: "flex",
  "& svg": {
    height: 12,
    width: 12,
    margin: "3px 0",
    verticalAlign: "top"
  },
  "& path": {
    fill: "inherit"
  }
});
var Center = newStyled.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented }) => isIndented ? { marginLeft: 24 } : {}
);
var CenterText = newStyled.span(
  ({ theme }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active, theme }) => active ? {
    color: theme.color.secondary
  } : {},
  ({ theme, disabled }) => disabled ? {
    color: theme.textMutedColor
  } : {}
);
var Left = newStyled.span(
  ({ active, theme }) => active ? {
    color: theme.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
);
var Item = newStyled.a(
  ({ theme }) => ({
    fontSize: theme.typography.size.s1,
    transition: "all 150ms ease-out",
    color: theme.color.dark,
    textDecoration: "none",
    cursor: "pointer",
    justifyContent: "space-between",
    lineHeight: "18px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      paddingLeft: 10
    },
    "&:hover": {
      background: theme.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  }),
  ({ disabled }) => disabled ? {
    cursor: "not-allowed"
  } : {}
);
var getItemProps = (0, import_memoizerific4.default)(100)((onClick, href, LinkWrapper) => {
  const result2 = {};
  if (onClick) {
    Object.assign(result2, {
      onClick
    });
  }
  if (href) {
    Object.assign(result2, {
      href
    });
  }
  if (LinkWrapper && href) {
    Object.assign(result2, {
      to: href,
      as: LinkWrapper
    });
  }
  return result2;
});
var ListItem = ({
  loading,
  title,
  center,
  right,
  icon,
  active,
  disabled,
  isIndented,
  href,
  onClick,
  LinkWrapper,
  ...rest
}) => {
  const itemProps = getItemProps(onClick, href, LinkWrapper);
  const commonProps = { active, disabled };
  return /* @__PURE__ */ import_react3.default.createElement(Item, { ...commonProps, ...rest, ...itemProps }, icon && /* @__PURE__ */ import_react3.default.createElement(Left, { ...commonProps }, icon), title || center ? /* @__PURE__ */ import_react3.default.createElement(Center, { isIndented: !icon && isIndented }, title && /* @__PURE__ */ import_react3.default.createElement(Title3, { ...commonProps, loading }, title), center && /* @__PURE__ */ import_react3.default.createElement(CenterText, { ...commonProps }, center)) : null, right && /* @__PURE__ */ import_react3.default.createElement(Right, { ...commonProps }, right));
};
ListItem.defaultProps = {
  loading: false,
  title: /* @__PURE__ */ import_react3.default.createElement("span", null, "Loading state"),
  center: null,
  right: null,
  active: false,
  disabled: false,
  href: null,
  LinkWrapper: null,
  onClick: null
};
var ListItem_default = ListItem;
var List = newStyled.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32
    // 11.5 items
  },
  ({ theme }) => ({
    borderRadius: theme.appBorderRadius
  })
);
var Item2 = (props) => {
  const { LinkWrapper, onClick: onClickFromProps, id, isIndented, ...rest } = props;
  const { title, href, active } = rest;
  const onClick = (0, import_react3.useCallback)(
    (event) => {
      onClickFromProps(event, rest);
    },
    [onClickFromProps]
  );
  const hasOnClick = !!onClickFromProps;
  return /* @__PURE__ */ import_react3.default.createElement(
    ListItem_default,
    {
      title,
      active,
      href,
      id: `list-item-${id}`,
      LinkWrapper,
      isIndented,
      ...rest,
      ...hasOnClick ? { onClick } : {}
    }
  );
};
var TooltipLinkList = ({ links, LinkWrapper }) => {
  const hasIcon = links.some((link) => link.icon);
  return /* @__PURE__ */ import_react3.default.createElement(List, null, links.map(({ isGatsby, ...p }) => /* @__PURE__ */ import_react3.default.createElement(Item2, { key: p.id, LinkWrapper: isGatsby ? LinkWrapper : null, isIndented: hasIcon, ...p })));
};
TooltipLinkList.defaultProps = {
  LinkWrapper: ListItem_default.defaultProps.LinkWrapper
};
var isLink = (obj) => {
  return typeof obj.props.href === "string";
};
var isButton = (obj) => {
  return typeof obj.props.href !== "string";
};
function ForwardRefFunction({ children, ...rest }, ref) {
  const o = { props: rest, ref };
  if (isLink(o)) {
    return /* @__PURE__ */ import_react3.default.createElement("a", { ref: o.ref, ...o.props }, children);
  }
  if (isButton(o)) {
    return /* @__PURE__ */ import_react3.default.createElement("button", { ref: o.ref, type: "button", ...o.props }, children);
  }
  throw new Error("invalid props");
}
var ButtonOrLink = (0, import_react3.forwardRef)(ForwardRefFunction);
ButtonOrLink.displayName = "ButtonOrLink";
var TabButton = newStyled(ButtonOrLink, { shouldForwardProp: isPropValid })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": {
      display: "none"
    },
    "&[hidden]": {
      display: "none"
    }
  },
  ({ theme }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": {
      outline: "0 none",
      borderBottomColor: theme.color.secondary
    }
  }),
  ({ active, textColor, theme }) => active ? {
    color: textColor || theme.barSelectedColor,
    borderBottomColor: theme.barSelectedColor
  } : {
    color: textColor || theme.barTextColor,
    borderBottomColor: "transparent"
  }
);
TabButton.displayName = "TabButton";
var IconPlaceholder = newStyled.div(({ theme }) => ({
  width: 14,
  height: 14,
  backgroundColor: theme.appBorderColor,
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`
}));
var IconButtonSkeletonWrapper = newStyled.div(() => ({
  marginTop: 6,
  padding: 7,
  height: 28
}));
var IconButtonSkeleton = () => /* @__PURE__ */ import_react3.default.createElement(IconButtonSkeletonWrapper, null, /* @__PURE__ */ import_react3.default.createElement(IconPlaceholder, null));
var Side = newStyled.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 3
  },
  ({ scrollable }) => scrollable ? { flexShrink: 0 } : {},
  ({ left }) => left ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right }) => right ? {
    marginLeft: 30,
    "& > *": {
      marginRight: 4
    }
  } : {}
);
Side.displayName = "Side";
var UnstyledBar = ({ children, className, scrollable }) => scrollable ? /* @__PURE__ */ import_react3.default.createElement(ScrollArea, { vertical: false, className }, children) : /* @__PURE__ */ import_react3.default.createElement("div", { className }, children);
var Bar = newStyled(UnstyledBar)(
  ({ theme, scrollable = true }) => ({
    color: theme.barTextColor,
    width: "100%",
    height: 40,
    flexShrink: 0,
    overflow: scrollable ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme, border = false }) => border ? {
    boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
    background: theme.barBg
  } : {}
);
Bar.displayName = "Bar";
var BarInner = newStyled.div(({ bgColor }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: bgColor || ""
}));
var FlexBar = ({ children, backgroundColor, ...rest }) => {
  const [left, right] = import_react3.Children.toArray(children);
  return /* @__PURE__ */ import_react3.default.createElement(Bar, { ...rest }, /* @__PURE__ */ import_react3.default.createElement(BarInner, { bgColor: backgroundColor }, /* @__PURE__ */ import_react3.default.createElement(Side, { scrollable: rest.scrollable, left: true }, left), right ? /* @__PURE__ */ import_react3.default.createElement(Side, { right: true }, right) : null));
};
FlexBar.displayName = "FlexBar";
var VisuallyHidden = newStyled.div(
  ({ active }) => active ? { display: "block" } : { display: "none" }
);
var childrenToList = (children) => import_react3.Children.toArray(children).map(
  ({
    props: { title, id, color: color2, children: childrenOfChild }
  }) => {
    const content = Array.isArray(
      childrenOfChild
    ) ? childrenOfChild[0] : childrenOfChild;
    const render = typeof content === "function" ? content : ({ active }) => /* @__PURE__ */ import_react3.default.createElement(VisuallyHidden, { active, role: "tabpanel" }, content);
    return {
      title,
      id,
      ...color2 ? { color: color2 } : {},
      render
    };
  }
);
var CollapseIcon2 = newStyled.span(({ theme, isActive }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: isActive ? theme.color.secondary : theme.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: `3px solid transparent`,
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
}));
var AddonButton = newStyled(TabButton)(({ active, theme, preActive }) => {
  return `
    color: ${preActive || active ? theme.color.secondary : theme.color.mediumdark};
    &:hover {
      color: ${theme.color.secondary};
      .addon-collapsible-icon {
        color: ${theme.color.secondary};
      }
    }
  `;
});
function useList(list) {
  const tabBarRef = (0, import_react3.useRef)();
  const addonsRef = (0, import_react3.useRef)();
  const tabRefs = (0, import_react3.useRef)(/* @__PURE__ */ new Map());
  const { width: tabBarWidth = 1 } = useResizeObserver({
    ref: tabBarRef
  });
  const [visibleList, setVisibleList] = (0, import_react3.useState)(list);
  const [invisibleList, setInvisibleList] = (0, import_react3.useState)([]);
  const previousList = (0, import_react3.useRef)(list);
  const AddonTab = (0, import_react3.useCallback)(
    ({
      menuName,
      actions
    }) => {
      const isAddonsActive = invisibleList.some(({ active }) => active);
      const [isTooltipVisible, setTooltipVisible] = (0, import_react3.useState)(false);
      return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
        WithToolTipState,
        {
          interactive: true,
          visible: isTooltipVisible,
          onVisibleChange: setTooltipVisible,
          placement: "bottom",
          delayHide: 100,
          tooltip: /* @__PURE__ */ import_react3.default.createElement(
            TooltipLinkList,
            {
              links: invisibleList.map(({ title, id, color: color2, active }) => {
                return {
                  id,
                  title,
                  color: color2,
                  active,
                  onClick: (e) => {
                    e.preventDefault();
                    actions.onSelect(id);
                  }
                };
              })
            }
          )
        },
        /* @__PURE__ */ import_react3.default.createElement(
          AddonButton,
          {
            ref: addonsRef,
            active: isAddonsActive,
            preActive: isTooltipVisible,
            style: { visibility: invisibleList.length ? "visible" : "hidden" },
            "aria-hidden": !invisibleList.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          menuName,
          /* @__PURE__ */ import_react3.default.createElement(
            CollapseIcon2,
            {
              className: "addon-collapsible-icon",
              isActive: isAddonsActive || isTooltipVisible
            }
          )
        )
      ), invisibleList.map(({ title, id, color: color2 }, index3) => {
        const indexId = `index-${index3}`;
        return /* @__PURE__ */ import_react3.default.createElement(
          TabButton,
          {
            id: `tabbutton-${L(id) ?? indexId}`,
            style: { visibility: "hidden" },
            "aria-hidden": true,
            tabIndex: -1,
            ref: (ref) => {
              tabRefs.current.set(id, ref);
            },
            className: "tabbutton",
            type: "button",
            key: id,
            textColor: color2,
            role: "tab"
          },
          title
        );
      }));
    },
    [invisibleList]
  );
  const setTabLists = (0, import_react3.useCallback)(() => {
    if (!tabBarRef.current || !addonsRef.current) {
      return;
    }
    const { x: x2, width } = tabBarRef.current.getBoundingClientRect();
    const { width: widthAddonsTab } = addonsRef.current.getBoundingClientRect();
    const rightBorder = invisibleList.length ? x2 + width - widthAddonsTab : x2 + width;
    const newVisibleList = [];
    let widthSum = 0;
    const newInvisibleList = list.filter((item) => {
      const { id } = item;
      const tabButton = tabRefs.current.get(id);
      const { width: tabWidth = 0 } = tabButton?.getBoundingClientRect() || {};
      const crossBorder = x2 + widthSum + tabWidth > rightBorder;
      if (!crossBorder || !tabButton) {
        newVisibleList.push(item);
      }
      widthSum += tabWidth;
      return crossBorder;
    });
    if (newVisibleList.length !== visibleList.length || previousList.current !== list) {
      setVisibleList(newVisibleList);
      setInvisibleList(newInvisibleList);
      previousList.current = list;
    }
  }, [invisibleList.length, list, visibleList]);
  (0, import_react3.useLayoutEffect)(setTabLists, [setTabLists, tabBarWidth]);
  return {
    tabRefs,
    addonsRef,
    tabBarRef,
    visibleList,
    invisibleList,
    AddonTab
  };
}
var ignoreSsrWarning2 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
var Wrapper2 = newStyled.div(
  ({ theme, bordered }) => bordered ? {
    backgroundClip: "padding-box",
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: theme.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute }) => absolute ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
);
var TabBar = newStyled.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
TabBar.displayName = "TabBar";
var Content = newStyled.div(
  {
    display: "block",
    position: "relative"
  },
  ({ theme }) => ({
    fontSize: theme.typography.size.s2 - 1,
    background: theme.background.content
  }),
  ({ bordered, theme }) => bordered ? {
    borderRadius: `0 0 ${theme.appBorderRadius - 1}px ${theme.appBorderRadius - 1}px`
  } : {},
  ({ absolute, bordered }) => absolute ? {
    height: `calc(100% - ${bordered ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (bordered ? 1 : 0),
    right: 0 + (bordered ? 1 : 0),
    bottom: 0 + (bordered ? 1 : 0),
    top: 40 + (bordered ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${ignoreSsrWarning2}`]: {
      position: "absolute",
      left: 0 + (bordered ? 1 : 0),
      right: 0 + (bordered ? 1 : 0),
      bottom: 0 + (bordered ? 1 : 0),
      top: 0 + (bordered ? 1 : 0),
      height: `calc(100% - ${bordered ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
);
var TabWrapper = ({ active, render, children }) => /* @__PURE__ */ import_react3.default.createElement(VisuallyHidden, { active }, render ? render() : children);
var Tabs = (0, import_react3.memo)(
  ({
    children,
    selected,
    actions,
    absolute,
    bordered,
    tools,
    backgroundColor,
    id: htmlId,
    menuName
  }) => {
    const idList = childrenToList(children).map((i) => i.id).join(",");
    const list = (0, import_react3.useMemo)(
      () => childrenToList(children).map((i, index3) => ({
        ...i,
        active: selected ? i.id === selected : index3 === 0
      })),
      // eslint-disable-next-line react-hooks/exhaustive-deps -- we're using idList as a replacement for children
      [selected, idList]
    );
    const { visibleList, tabBarRef, tabRefs, AddonTab } = useList(list);
    return list.length ? /* @__PURE__ */ import_react3.default.createElement(Wrapper2, { absolute, bordered, id: htmlId }, /* @__PURE__ */ import_react3.default.createElement(FlexBar, { scrollable: false, border: true, backgroundColor }, /* @__PURE__ */ import_react3.default.createElement(TabBar, { style: { whiteSpace: "normal" }, ref: tabBarRef, role: "tablist" }, visibleList.map(({ title, id, active, color: color2 }, index3) => {
      const indexId = `index-${index3}`;
      return /* @__PURE__ */ import_react3.default.createElement(
        TabButton,
        {
          id: `tabbutton-${L(id) ?? indexId}`,
          ref: (ref) => {
            tabRefs.current.set(id, ref);
          },
          className: `tabbutton ${active ? "tabbutton-active" : ""}`,
          type: "button",
          key: id,
          active,
          textColor: color2,
          onClick: (e) => {
            e.preventDefault();
            actions.onSelect(id);
          },
          role: "tab"
        },
        typeof title === "function" ? /* @__PURE__ */ import_react3.default.createElement("title", null) : title
      );
    }), /* @__PURE__ */ import_react3.default.createElement(AddonTab, { menuName, actions })), tools), /* @__PURE__ */ import_react3.default.createElement(Content, { id: "panel-tab-content", bordered, absolute }, list.map(({ id, active, render }) => {
      return import_react3.default.createElement(render, { key: id, active }, null);
    }))) : /* @__PURE__ */ import_react3.default.createElement(Placeholder, null, /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, { key: "title" }, "Nothing found"));
  }
);
Tabs.displayName = "Tabs";
Tabs.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: false,
  bordered: false,
  menuName: "Tabs"
};
var TabsState = class extends import_react3.Component {
  constructor(props) {
    super(props);
    this.handlers = {
      onSelect: (id) => this.setState({ selected: id })
    };
    this.state = {
      selected: props.initial
    };
  }
  render() {
    const { bordered = false, absolute = false, children, backgroundColor, menuName } = this.props;
    const { selected } = this.state;
    return /* @__PURE__ */ import_react3.default.createElement(
      Tabs,
      {
        bordered,
        absolute,
        selected,
        backgroundColor,
        menuName,
        actions: this.handlers
      },
      children
    );
  }
};
TabsState.defaultProps = {
  children: [],
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: "",
  menuName: void 0
};
var Separator = newStyled.span(
  ({ theme }) => ({
    width: 1,
    height: 20,
    background: theme.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force }) => force ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
Separator.displayName = "Separator";
var interleaveSeparators = (list) => list.reduce(
  (acc, item, index3) => item ? /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, { key: item.id || item.key || `f-${index3}` }, acc, index3 > 0 ? /* @__PURE__ */ import_react3.default.createElement(Separator, { key: `s-${index3}` }) : null, item.render() || item) : acc,
  null
);
var usePrevious = (value2) => {
  const ref = (0, import_react3.useRef)();
  (0, import_react3.useEffect)(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
};
var useUpdate = (update2, value2) => {
  const previousValue = usePrevious(value2);
  return update2 ? value2 : previousValue;
};
var AddonPanel = ({ active, children }) => {
  return (
    // the hidden attribute is an valid html element that's both accessible and works to visually hide content
    /* @__PURE__ */ import_react3.default.createElement("div", { hidden: !active }, useUpdate(active, children))
  );
};
var NEW_ICON_MAP = dist_exports6;
var Svg = newStyled.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`;
var Icons = ({ icon, useSymbol, ...props }) => {
  deprecate(
    `Use of the deprecated Icons ${`(${icon})` || ""} component detected. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
  );
  const findIcon = icons[icon] || null;
  if (!findIcon) {
    logger.warn(
      `Use of an unknown prop ${`(${icon})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
    );
    return null;
  }
  const Icon = NEW_ICON_MAP[findIcon];
  return /* @__PURE__ */ import_react3.default.createElement(Icon, { ...props });
};
var Symbols = (0, import_react3.memo)(function Symbols2({ icons: keys2 = Object.keys(icons) }) {
  return /* @__PURE__ */ import_react3.default.createElement(
    Svg,
    {
      viewBox: "0 0 14 14",
      style: { position: "absolute", width: 0, height: 0 },
      "data-chromatic": "ignore"
    },
    keys2.map((key2) => /* @__PURE__ */ import_react3.default.createElement("symbol", { id: `icon--${key2}`, key: key2 }, icons[key2]))
  );
});
var icons = {
  user: "UserIcon",
  useralt: "UserAltIcon",
  useradd: "UserAddIcon",
  users: "UsersIcon",
  profile: "ProfileIcon",
  facehappy: "FaceHappyIcon",
  faceneutral: "FaceNeutralIcon",
  facesad: "FaceSadIcon",
  accessibility: "AccessibilityIcon",
  accessibilityalt: "AccessibilityAltIcon",
  arrowup: "ChevronUpIcon",
  arrowdown: "ChevronDownIcon",
  arrowleft: "ChevronLeftIcon",
  arrowright: "ChevronRightIcon",
  arrowupalt: "ArrowUpIcon",
  arrowdownalt: "ArrowDownIcon",
  arrowleftalt: "ArrowLeftIcon",
  arrowrightalt: "ArrowRightIcon",
  expandalt: "ExpandAltIcon",
  collapse: "CollapseIcon",
  expand: "ExpandIcon",
  unfold: "UnfoldIcon",
  transfer: "TransferIcon",
  redirect: "RedirectIcon",
  undo: "UndoIcon",
  reply: "ReplyIcon",
  sync: "SyncIcon",
  upload: "UploadIcon",
  download: "DownloadIcon",
  back: "BackIcon",
  proceed: "ProceedIcon",
  refresh: "RefreshIcon",
  globe: "GlobeIcon",
  compass: "CompassIcon",
  location: "LocationIcon",
  pin: "PinIcon",
  time: "TimeIcon",
  dashboard: "DashboardIcon",
  timer: "TimerIcon",
  home: "HomeIcon",
  admin: "AdminIcon",
  info: "InfoIcon",
  question: "QuestionIcon",
  support: "SupportIcon",
  alert: "AlertIcon",
  email: "EmailIcon",
  phone: "PhoneIcon",
  link: "LinkIcon",
  unlink: "LinkBrokenIcon",
  bell: "BellIcon",
  rss: "RSSIcon",
  sharealt: "ShareAltIcon",
  share: "ShareIcon",
  circle: "CircleIcon",
  circlehollow: "CircleHollowIcon",
  bookmarkhollow: "BookmarkHollowIcon",
  bookmark: "BookmarkIcon",
  hearthollow: "HeartHollowIcon",
  heart: "HeartIcon",
  starhollow: "StarHollowIcon",
  star: "StarIcon",
  certificate: "CertificateIcon",
  verified: "VerifiedIcon",
  thumbsup: "ThumbsUpIcon",
  shield: "ShieldIcon",
  basket: "BasketIcon",
  beaker: "BeakerIcon",
  hourglass: "HourglassIcon",
  flag: "FlagIcon",
  cloudhollow: "CloudHollowIcon",
  edit: "EditIcon",
  cog: "CogIcon",
  nut: "NutIcon",
  wrench: "WrenchIcon",
  ellipsis: "EllipsisIcon",
  check: "CheckIcon",
  form: "FormIcon",
  batchdeny: "BatchDenyIcon",
  batchaccept: "BatchAcceptIcon",
  controls: "ControlsIcon",
  plus: "PlusIcon",
  closeAlt: "CloseAltIcon",
  cross: "CrossIcon",
  trash: "TrashIcon",
  pinalt: "PinAltIcon",
  unpin: "UnpinIcon",
  add: "AddIcon",
  subtract: "SubtractIcon",
  close: "CloseIcon",
  delete: "DeleteIcon",
  passed: "PassedIcon",
  changed: "ChangedIcon",
  failed: "FailedIcon",
  clear: "ClearIcon",
  comment: "CommentIcon",
  commentadd: "CommentAddIcon",
  requestchange: "RequestChangeIcon",
  comments: "CommentsIcon",
  lock: "LockIcon",
  unlock: "UnlockIcon",
  key: "KeyIcon",
  outbox: "OutboxIcon",
  credit: "CreditIcon",
  button: "ButtonIcon",
  type: "TypeIcon",
  pointerdefault: "PointerDefaultIcon",
  pointerhand: "PointerHandIcon",
  browser: "BrowserIcon",
  tablet: "TabletIcon",
  mobile: "MobileIcon",
  watch: "WatchIcon",
  sidebar: "SidebarIcon",
  sidebaralt: "SidebarAltIcon",
  sidebaralttoggle: "SidebarAltToggleIcon",
  sidebartoggle: "SidebarToggleIcon",
  bottombar: "BottomBarIcon",
  bottombartoggle: "BottomBarToggleIcon",
  cpu: "CPUIcon",
  database: "DatabaseIcon",
  memory: "MemoryIcon",
  structure: "StructureIcon",
  box: "BoxIcon",
  power: "PowerIcon",
  photo: "PhotoIcon",
  component: "ComponentIcon",
  grid: "GridIcon",
  outline: "OutlineIcon",
  photodrag: "PhotoDragIcon",
  search: "SearchIcon",
  zoom: "ZoomIcon",
  zoomout: "ZoomOutIcon",
  zoomreset: "ZoomResetIcon",
  eye: "EyeIcon",
  eyeclose: "EyeCloseIcon",
  lightning: "LightningIcon",
  lightningoff: "LightningOffIcon",
  contrast: "ContrastIcon",
  switchalt: "SwitchAltIcon",
  mirror: "MirrorIcon",
  grow: "GrowIcon",
  paintbrush: "PaintBrushIcon",
  ruler: "RulerIcon",
  stop: "StopIcon",
  camera: "CameraIcon",
  video: "VideoIcon",
  speaker: "SpeakerIcon",
  play: "PlayIcon",
  playback: "PlayBackIcon",
  playnext: "PlayNextIcon",
  rewind: "RewindIcon",
  fastforward: "FastForwardIcon",
  stopalt: "StopAltIcon",
  sidebyside: "SideBySideIcon",
  stacked: "StackedIcon",
  sun: "SunIcon",
  moon: "MoonIcon",
  book: "BookIcon",
  document: "DocumentIcon",
  copy: "CopyIcon",
  category: "CategoryIcon",
  folder: "FolderIcon",
  print: "PrintIcon",
  graphline: "GraphLineIcon",
  calendar: "CalendarIcon",
  graphbar: "GraphBarIcon",
  menu: "MenuIcon",
  menualt: "MenuIcon",
  filter: "FilterIcon",
  docchart: "DocChartIcon",
  doclist: "DocListIcon",
  markup: "MarkupIcon",
  bold: "BoldIcon",
  paperclip: "PaperClipIcon",
  listordered: "ListOrderedIcon",
  listunordered: "ListUnorderedIcon",
  paragraph: "ParagraphIcon",
  markdown: "MarkdownIcon",
  repository: "RepoIcon",
  commit: "CommitIcon",
  branch: "BranchIcon",
  pullrequest: "PullRequestIcon",
  merge: "MergeIcon",
  apple: "AppleIcon",
  linux: "LinuxIcon",
  ubuntu: "UbuntuIcon",
  windows: "WindowsIcon",
  storybook: "StorybookIcon",
  azuredevops: "AzureDevOpsIcon",
  bitbucket: "BitbucketIcon",
  chrome: "ChromeIcon",
  chromatic: "ChromaticIcon",
  componentdriven: "ComponentDrivenIcon",
  discord: "DiscordIcon",
  facebook: "FacebookIcon",
  figma: "FigmaIcon",
  gdrive: "GDriveIcon",
  github: "GithubIcon",
  gitlab: "GitlabIcon",
  google: "GoogleIcon",
  graphql: "GraphqlIcon",
  medium: "MediumIcon",
  redux: "ReduxIcon",
  twitter: "TwitterIcon",
  youtube: "YoutubeIcon",
  vscode: "VSCodeIcon"
};
var StorybookLogo = ({ alt, ...props }) => /* @__PURE__ */ import_react3.default.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...props, role: "img" }, alt ? /* @__PURE__ */ import_react3.default.createElement("title", null, alt) : null, /* @__PURE__ */ import_react3.default.createElement("defs", null, /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
    id: "a"
  }
)), /* @__PURE__ */ import_react3.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
    fill: "currentColor"
  }
), /* @__PURE__ */ import_react3.default.createElement("mask", { id: "b", fill: "#fff" }, /* @__PURE__ */ import_react3.default.createElement("use", { xlinkHref: "#a" })), /* @__PURE__ */ import_react3.default.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
    fill: "#FFF",
    fillRule: "nonzero",
    mask: "url(#b)"
  }
)));
var StorybookIcon2 = (props) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 64 64", ...props }, /* @__PURE__ */ import_react3.default.createElement("title", null, "Storybook icon"), /* @__PURE__ */ import_react3.default.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
    id: "path-1",
    fill: "#FF4785",
    fillRule: "nonzero"
  }
), /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
    id: "path9_fill-path",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }
), /* @__PURE__ */ import_react3.default.createElement(
  "path",
  {
    d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
    id: "Path",
    fill: "#FFFFFF"
  }
)));
var rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var LoaderWrapper = newStyled.div(({ size = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(size / 2),
  marginLeft: -(size / 2),
  height: size,
  width: size,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${rotate360} 0.7s linear infinite`,
  mixBlendMode: "difference"
}));
var ProgressWrapper = newStyled.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
});
var ProgressTrack = newStyled.div(({ theme }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: curriedTransparentize$1(0.8, theme.color.secondary),
  overflow: "hidden",
  cursor: "progress"
}));
var ProgressBar = newStyled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: theme.color.secondary
}));
var ProgressMessage = newStyled.div(({ theme }) => ({
  minHeight: "2em",
  fontSize: `${theme.typography.size.s1}px`,
  color: theme.barTextColor
}));
var ErrorIcon = newStyled(Icons)(({ theme }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: theme.textMutedColor
}));
var ellipsis = keyframes`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`;
var Ellipsis = newStyled.span({
  "&::after": {
    content: "'...'",
    animation: `${ellipsis} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
});
var Loader = ({ progress, error, size, ...props }) => {
  if (error) {
    return /* @__PURE__ */ import_react3.default.createElement(ProgressWrapper, { "aria-label": error.toString(), "aria-live": "polite", role: "status", ...props }, /* @__PURE__ */ import_react3.default.createElement(ErrorIcon, { icon: "lightningoff" }), /* @__PURE__ */ import_react3.default.createElement(ProgressMessage, null, error.message));
  }
  if (progress) {
    const { value: value2, modules } = progress;
    let { message } = progress;
    if (modules)
      message += ` ${modules.complete} / ${modules.total} modules`;
    return /* @__PURE__ */ import_react3.default.createElement(
      ProgressWrapper,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": value2 * 100,
        "aria-valuetext": message,
        role: "progressbar",
        ...props
      },
      /* @__PURE__ */ import_react3.default.createElement(ProgressTrack, null, /* @__PURE__ */ import_react3.default.createElement(ProgressBar, { style: { width: `${value2 * 100}%` } })),
      /* @__PURE__ */ import_react3.default.createElement(ProgressMessage, null, message, value2 < 1 && /* @__PURE__ */ import_react3.default.createElement(Ellipsis, { key: message }))
    );
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    LoaderWrapper,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size,
      ...props
    }
  );
};
function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
var getStoryHref = (baseUrl, storyId, additionalParams = {}) => {
  const [url, paramsStr] = baseUrl.split("?");
  const params = paramsStr ? {
    ...parseQuery(paramsStr),
    ...additionalParams,
    id: storyId
  } : {
    ...additionalParams,
    id: storyId
  };
  return `${url}?${Object.entries(params).map((item) => `${item[0]}=${item[1]}`).join("&")}`;
};
var Code2 = newStyled.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${color.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${typography.fonts.mono};
  font-size: ${typography.size.s2 - 1}px;
`;
var ClipboardCode = ({ code, ...props }) => /* @__PURE__ */ import_react3.default.createElement(Code2, { id: "clipboard-code", ...props }, code);
var components2 = components;
var resetComponents = {};
Object.keys(components).forEach((key2) => {
  resetComponents[key2] = (0, import_react3.forwardRef)((props, ref) => (0, import_react3.createElement)(key2, { ...props, ref }));
});

export {
  require_lib,
  useNavigate2,
  Link2,
  Location,
  Route2,
  LocationProvider,
  dist_exports,
  require_root2 as require_root,
  require_isObject,
  CHANNEL_CREATED,
  FORCE_REMOUNT,
  PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS,
  SET_CURRENT_STORY,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  TELEMETRY_ERROR,
  dist_exports2,
  require_store2,
  Addon_TypesEnum,
  dist_exports4 as dist_exports3,
  require_isSymbol,
  createBrowserChannel,
  dist_exports3 as dist_exports4,
  merge_default,
  eventToShortcut,
  shortcutMatchesShortcut,
  shortcutToHumanString,
  addons,
  ManagerProvider,
  ManagerConsumer,
  useStorybookState,
  useStorybookApi,
  typesX,
  dist_exports5,
  ProviderDoesNotExtendBaseProviderError,
  UncaughtManagerError,
  manager_errors_exports,
  SearchIcon,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  EyeIcon,
  EyeCloseIcon,
  DocumentIcon,
  MenuIcon,
  StorybookIcon,
  GithubIcon,
  SidebarAltIcon,
  BottomBarIcon,
  BottomBarToggleIcon,
  CogIcon,
  WandIcon,
  CheckIcon,
  CloseAltIcon,
  TrashIcon,
  CloseIcon,
  LockIcon,
  InfoIcon,
  AlertIcon,
  LinkIcon,
  ShareAltIcon,
  HeartIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ExpandAltIcon,
  CollapseIcon,
  ExpandIcon,
  SyncIcon,
  GlobeIcon,
  dist_exports6,
  Badge,
  Link22,
  Spaced,
  Zoom,
  ErrorFormatter,
  Button,
  IconButton,
  Form,
  WithTooltip,
  TooltipLinkList,
  TabButton,
  TabBar,
  Tabs,
  Separator,
  Icons,
  StorybookLogo,
  Loader,
  getStoryHref,
  dist_exports7
};
