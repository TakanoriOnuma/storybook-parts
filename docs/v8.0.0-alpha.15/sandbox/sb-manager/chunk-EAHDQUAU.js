import {
  Addon_TypesEnum,
  AlertIcon,
  ArrowLeftIcon,
  Badge,
  BottomBarIcon,
  BottomBarToggleIcon,
  Button,
  CheckIcon,
  ChevronDownIcon,
  CloseAltIcon,
  CloseIcon,
  CogIcon,
  CollapseIcon,
  DocumentIcon,
  ErrorFormatter,
  ExpandAltIcon,
  ExpandIcon,
  EyeCloseIcon,
  EyeIcon,
  FORCE_REMOUNT,
  Form,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  IconButton,
  Icons,
  InfoIcon,
  Link2,
  Link22,
  LinkIcon,
  Loader,
  Location,
  LocationProvider,
  LockIcon,
  ManagerConsumer,
  ManagerProvider,
  MenuIcon,
  PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS,
  ProviderDoesNotExtendBaseProviderError,
  Route2,
  SET_CURRENT_STORY,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  SearchIcon,
  Separator,
  ShareAltIcon,
  SidebarAltIcon,
  Spaced,
  StorybookIcon,
  StorybookLogo,
  SyncIcon,
  TabBar,
  TabButton,
  Tabs,
  TooltipLinkList,
  TrashIcon,
  WandIcon,
  WithTooltip,
  Zoom,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  addons,
  eventToShortcut,
  getStoryHref,
  merge_default,
  require_isObject,
  require_isSymbol,
  require_lib,
  require_root,
  require_store2,
  shortcutMatchesShortcut,
  shortcutToHumanString,
  typesX,
  useNavigate2,
  useStorybookApi,
  useStorybookState
} from "./chunk-M64TUTI2.js";
import {
  ScrollArea,
  _extends
} from "./chunk-PIZJANOT.js";
import {
  Global,
  ThemeProvider,
  createGlobal,
  ensure,
  keyframes,
  logger,
  newStyled,
  require_react,
  require_react_dom,
  scope,
  useTheme,
  withTheme
} from "./chunk-TCL6UHAX.js";
import {
  __commonJS,
  __toESM,
  require_memoizerific
} from "./chunk-54QAZ5U5.js";

// ../../node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m2 = require_react_dom();
    if (false) {
      exports.createRoot = m2.createRoot;
      exports.hydrateRoot = m2.hydrateRoot;
    } else {
      i3 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c2, o2) {
        i3.usingClientEntryPoint = true;
        try {
          return m2.createRoot(c2, o2);
        } finally {
          i3.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c2, h2, o2) {
        i3.usingClientEntryPoint = true;
        try {
          return m2.hydrateRoot(c2, h2, o2);
        } finally {
          i3.usingClientEntryPoint = false;
        }
      };
    }
    var i3;
  }
});

// ../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment9 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment9;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
          return test2[n3];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i3 = 0; i3 < propValue.length; i3++) {
            var error = typeChecker(propValue, i3, componentName, location, propFullName + "[" + i3 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i3 = 0; i3 < expectedValues.length; i3++) {
            if (is(propValue, expectedValues[i3])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
          var checker = arrayOfTypeCheckers[i3];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i3 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i4 = 0; i4 < arrayOfTypeCheckers.length; i4++) {
            var checker2 = arrayOfTypeCheckers[i4];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "../../node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i3, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal(a2[i3], b2[i3]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i3 = it.next()).done)
            if (!b2.has(i3.value[0]))
              return false;
          it = a2.entries();
          while (!(i3 = it.next()).done)
            if (!equal(i3.value[1], b2.get(i3.value[0])))
              return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i3 = it.next()).done)
            if (!b2.has(i3.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (a2[i3] !== b2[i3])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b2.valueOf === "function")
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b2.toString === "function")
          return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3]))
            return false;
        if (hasElementType && a2 instanceof Element)
          return false;
        for (i3 = length; i3-- !== 0; ) {
          if ((keys[i3] === "_owner" || keys[i3] === "__v" || keys[i3] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal(a2[keys[i3]], b2[keys[i3]]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function isEqual(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// ../../node_modules/invariant/browser.js
var require_browser = __commonJS({
  "../../node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant = function(condition, format2, a2, b2, c2, d2, e3, f2) {
      if (true) {
        if (format2 === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format2 === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a2, b2, c2, d2, e3, f2];
          var argIndex = 0;
          error = new Error(
            format2.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});

// ../../node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "../../node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../node_modules/lodash/now.js
var require_now = __commonJS({
  "../../node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce3(func, wait, options2) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options2)) {
        leading = !!options2.leading;
        maxing = "maxWait" in options2;
        maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce3;
  }
});

// ../../node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "../../node_modules/lodash/throttle.js"(exports, module) {
    var debounce3 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options2) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options2)) {
        leading = "leading" in options2 ? !!options2.leading : leading;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      return debounce3(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment9 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment9;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// ../../node_modules/fuse.js/dist/fuse.js
var require_fuse = __commonJS({
  "../../node_modules/fuse.js/dist/fuse.js"(exports, module) {
    !function(e3, t3) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t3() : "function" == typeof define && define.amd ? define("Fuse", [], t3) : "object" == typeof exports ? exports.Fuse = t3() : e3.Fuse = t3();
    }(exports, function() {
      return function(e3) {
        var t3 = {};
        function r3(n3) {
          if (t3[n3])
            return t3[n3].exports;
          var o2 = t3[n3] = { i: n3, l: false, exports: {} };
          return e3[n3].call(o2.exports, o2, o2.exports, r3), o2.l = true, o2.exports;
        }
        return r3.m = e3, r3.c = t3, r3.d = function(e4, t4, n3) {
          r3.o(e4, t4) || Object.defineProperty(e4, t4, { enumerable: true, get: n3 });
        }, r3.r = function(e4) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
        }, r3.t = function(e4, t4) {
          if (1 & t4 && (e4 = r3(e4)), 8 & t4)
            return e4;
          if (4 & t4 && "object" == typeof e4 && e4 && e4.__esModule)
            return e4;
          var n3 = /* @__PURE__ */ Object.create(null);
          if (r3.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: e4 }), 2 & t4 && "string" != typeof e4)
            for (var o2 in e4)
              r3.d(n3, o2, (function(t5) {
                return e4[t5];
              }).bind(null, o2));
          return n3;
        }, r3.n = function(e4) {
          var t4 = e4 && e4.__esModule ? function() {
            return e4.default;
          } : function() {
            return e4;
          };
          return r3.d(t4, "a", t4), t4;
        }, r3.o = function(e4, t4) {
          return Object.prototype.hasOwnProperty.call(e4, t4);
        }, r3.p = "", r3(r3.s = 0);
      }([function(e3, t3, r3) {
        function n3(e4) {
          return (n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          })(e4);
        }
        function o2(e4, t4) {
          for (var r4 = 0; r4 < t4.length; r4++) {
            var n4 = t4[r4];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
          }
        }
        var i3 = r3(1), a2 = r3(7), s2 = a2.get, c2 = (a2.deepValue, a2.isArray), h2 = function() {
          function e4(t5, r5) {
            var n4 = r5.location, o3 = void 0 === n4 ? 0 : n4, i4 = r5.distance, a4 = void 0 === i4 ? 100 : i4, c3 = r5.threshold, h3 = void 0 === c3 ? 0.6 : c3, l2 = r5.maxPatternLength, u2 = void 0 === l2 ? 32 : l2, f2 = r5.caseSensitive, v2 = void 0 !== f2 && f2, p2 = r5.tokenSeparator, d2 = void 0 === p2 ? / +/g : p2, g2 = r5.findAllMatches, y2 = void 0 !== g2 && g2, m2 = r5.minMatchCharLength, k2 = void 0 === m2 ? 1 : m2, b2 = r5.id, S2 = void 0 === b2 ? null : b2, x2 = r5.keys, M2 = void 0 === x2 ? [] : x2, _2 = r5.shouldSort, w2 = void 0 === _2 || _2, L2 = r5.getFn, A2 = void 0 === L2 ? s2 : L2, O2 = r5.sortFn, C2 = void 0 === O2 ? function(e5, t6) {
              return e5.score - t6.score;
            } : O2, j2 = r5.tokenize, P2 = void 0 !== j2 && j2, I2 = r5.matchAllTokens, F2 = void 0 !== I2 && I2, T2 = r5.includeMatches, N2 = void 0 !== T2 && T2, z2 = r5.includeScore, E2 = void 0 !== z2 && z2, W2 = r5.verbose, K2 = void 0 !== W2 && W2;
            !function(e5, t6) {
              if (!(e5 instanceof t6))
                throw new TypeError("Cannot call a class as a function");
            }(this, e4), this.options = { location: o3, distance: a4, threshold: h3, maxPatternLength: u2, isCaseSensitive: v2, tokenSeparator: d2, findAllMatches: y2, minMatchCharLength: k2, id: S2, keys: M2, includeMatches: N2, includeScore: E2, shouldSort: w2, getFn: A2, sortFn: C2, verbose: K2, tokenize: P2, matchAllTokens: F2 }, this.setCollection(t5), this._processKeys(M2);
          }
          var t4, r4, a3;
          return t4 = e4, (r4 = [{ key: "setCollection", value: function(e5) {
            return this.list = e5, e5;
          } }, { key: "_processKeys", value: function(e5) {
            if (this._keyWeights = {}, this._keyNames = [], e5.length && "string" == typeof e5[0])
              for (var t5 = 0, r5 = e5.length; t5 < r5; t5 += 1) {
                var n4 = e5[t5];
                this._keyWeights[n4] = 1, this._keyNames.push(n4);
              }
            else {
              for (var o3 = null, i4 = null, a4 = 0, s3 = 0, c3 = e5.length; s3 < c3; s3 += 1) {
                var h3 = e5[s3];
                if (!h3.hasOwnProperty("name"))
                  throw new Error('Missing "name" property in key object');
                var l2 = h3.name;
                if (this._keyNames.push(l2), !h3.hasOwnProperty("weight"))
                  throw new Error('Missing "weight" property in key object');
                var u2 = h3.weight;
                if (u2 < 0 || u2 > 1)
                  throw new Error('"weight" property in key must bein the range of [0, 1)');
                i4 = null == i4 ? u2 : Math.max(i4, u2), o3 = null == o3 ? u2 : Math.min(o3, u2), this._keyWeights[l2] = u2, a4 += u2;
              }
              if (a4 > 1)
                throw new Error("Total of weights cannot exceed 1");
            }
          } }, { key: "search", value: function(e5) {
            var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: false };
            this._log('---------\nSearch pattern: "'.concat(e5, '"'));
            var r5 = this._prepareSearchers(e5), n4 = r5.tokenSearchers, o3 = r5.fullSearcher, i4 = this._search(n4, o3);
            return this._computeScore(i4), this.options.shouldSort && this._sort(i4), t5.limit && "number" == typeof t5.limit && (i4 = i4.slice(0, t5.limit)), this._format(i4);
          } }, { key: "_prepareSearchers", value: function() {
            var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t5 = [];
            if (this.options.tokenize)
              for (var r5 = e5.split(this.options.tokenSeparator), n4 = 0, o3 = r5.length; n4 < o3; n4 += 1)
                t5.push(new i3(r5[n4], this.options));
            return { tokenSearchers: t5, fullSearcher: new i3(e5, this.options) };
          } }, { key: "_search", value: function() {
            var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t5 = arguments.length > 1 ? arguments[1] : void 0, r5 = this.list, n4 = {}, o3 = [];
            if ("string" == typeof r5[0]) {
              for (var i4 = 0, a4 = r5.length; i4 < a4; i4 += 1)
                this._analyze({ key: "", value: r5[i4], record: i4, index: i4 }, { resultMap: n4, results: o3, tokenSearchers: e5, fullSearcher: t5 });
              return o3;
            }
            for (var s3 = 0, c3 = r5.length; s3 < c3; s3 += 1)
              for (var h3 = r5[s3], l2 = 0, u2 = this._keyNames.length; l2 < u2; l2 += 1) {
                var f2 = this._keyNames[l2];
                this._analyze({ key: f2, value: this.options.getFn(h3, f2), record: h3, index: s3 }, { resultMap: n4, results: o3, tokenSearchers: e5, fullSearcher: t5 });
              }
            return o3;
          } }, { key: "_analyze", value: function(e5, t5) {
            var r5 = this, n4 = e5.key, o3 = e5.arrayIndex, i4 = void 0 === o3 ? -1 : o3, a4 = e5.value, s3 = e5.record, h3 = e5.index, l2 = t5.tokenSearchers, u2 = void 0 === l2 ? [] : l2, f2 = t5.fullSearcher, v2 = t5.resultMap, p2 = void 0 === v2 ? {} : v2, d2 = t5.results, g2 = void 0 === d2 ? [] : d2;
            !function e6(t6, o4, i5, a5) {
              if (null != o4) {
                if ("string" == typeof o4) {
                  var s4 = false, h4 = -1, l3 = 0;
                  r5._log("\nKey: ".concat("" === n4 ? "--" : n4));
                  var v3 = f2.search(o4);
                  if (r5._log('Full text: "'.concat(o4, '", score: ').concat(v3.score)), r5.options.tokenize) {
                    for (var d3 = o4.split(r5.options.tokenSeparator), y2 = d3.length, m2 = [], k2 = 0, b2 = u2.length; k2 < b2; k2 += 1) {
                      var S2 = u2[k2];
                      r5._log('\nPattern: "'.concat(S2.pattern, '"'));
                      for (var x2 = false, M2 = 0; M2 < y2; M2 += 1) {
                        var _2 = d3[M2], w2 = S2.search(_2), L2 = {};
                        w2.isMatch ? (L2[_2] = w2.score, s4 = true, x2 = true, m2.push(w2.score)) : (L2[_2] = 1, r5.options.matchAllTokens || m2.push(1)), r5._log('Token: "'.concat(_2, '", score: ').concat(L2[_2]));
                      }
                      x2 && (l3 += 1);
                    }
                    h4 = m2[0];
                    for (var A2 = m2.length, O2 = 1; O2 < A2; O2 += 1)
                      h4 += m2[O2];
                    h4 /= A2, r5._log("Token score average:", h4);
                  }
                  var C2 = v3.score;
                  h4 > -1 && (C2 = (C2 + h4) / 2), r5._log("Score average:", C2);
                  var j2 = !r5.options.tokenize || !r5.options.matchAllTokens || l3 >= u2.length;
                  if (r5._log("\nCheck Matches: ".concat(j2)), (s4 || v3.isMatch) && j2) {
                    var P2 = { key: n4, arrayIndex: t6, value: o4, score: C2 };
                    r5.options.includeMatches && (P2.matchedIndices = v3.matchedIndices);
                    var I2 = p2[a5];
                    I2 ? I2.output.push(P2) : (p2[a5] = { item: i5, output: [P2] }, g2.push(p2[a5]));
                  }
                } else if (c2(o4))
                  for (var F2 = 0, T2 = o4.length; F2 < T2; F2 += 1)
                    e6(F2, o4[F2], i5, a5);
              }
            }(i4, a4, s3, h3);
          } }, { key: "_computeScore", value: function(e5) {
            this._log("\n\nComputing score:\n");
            for (var t5 = this._keyWeights, r5 = !!Object.keys(t5).length, n4 = 0, o3 = e5.length; n4 < o3; n4 += 1) {
              for (var i4 = e5[n4], a4 = i4.output, s3 = a4.length, c3 = 1, h3 = 0; h3 < s3; h3 += 1) {
                var l2 = a4[h3], u2 = l2.key, f2 = r5 ? t5[u2] : 1, v2 = 0 === l2.score && t5 && t5[u2] > 0 ? Number.EPSILON : l2.score;
                c3 *= Math.pow(v2, f2);
              }
              i4.score = c3, this._log(i4);
            }
          } }, { key: "_sort", value: function(e5) {
            this._log("\n\nSorting...."), e5.sort(this.options.sortFn);
          } }, { key: "_format", value: function(e5) {
            var t5 = [];
            if (this.options.verbose) {
              var r5 = [];
              this._log("\n\nOutput:\n\n", JSON.stringify(e5, function(e6, t6) {
                if ("object" === n3(t6) && null !== t6) {
                  if (-1 !== r5.indexOf(t6))
                    return;
                  r5.push(t6);
                }
                return t6;
              }, 2)), r5 = null;
            }
            var o3 = [];
            this.options.includeMatches && o3.push(function(e6, t6) {
              var r6 = e6.output;
              t6.matches = [];
              for (var n4 = 0, o4 = r6.length; n4 < o4; n4 += 1) {
                var i5 = r6[n4];
                if (0 !== i5.matchedIndices.length) {
                  var a5 = { indices: i5.matchedIndices, value: i5.value };
                  i5.key && (a5.key = i5.key), i5.hasOwnProperty("arrayIndex") && i5.arrayIndex > -1 && (a5.arrayIndex = i5.arrayIndex), t6.matches.push(a5);
                }
              }
            }), this.options.includeScore && o3.push(function(e6, t6) {
              t6.score = e6.score;
            });
            for (var i4 = 0, a4 = e5.length; i4 < a4; i4 += 1) {
              var s3 = e5[i4];
              if (this.options.id && (s3.item = this.options.getFn(s3.item, this.options.id)[0]), o3.length) {
                for (var c3 = { item: s3.item }, h3 = 0, l2 = o3.length; h3 < l2; h3 += 1)
                  o3[h3](s3, c3);
                t5.push(c3);
              } else
                t5.push(s3.item);
            }
            return t5;
          } }, { key: "_log", value: function() {
            var e5;
            this.options.verbose && (e5 = console).log.apply(e5, arguments);
          } }]) && o2(t4.prototype, r4), a3 && o2(t4, a3), e4;
        }();
        e3.exports = h2;
      }, function(e3, t3, r3) {
        function n3(e4, t4) {
          for (var r4 = 0; r4 < t4.length; r4++) {
            var n4 = t4[r4];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
          }
        }
        var o2 = r3(2), i3 = r3(3), a2 = r3(6), s2 = function() {
          function e4(t5, r5) {
            var n4 = r5.location, o3 = void 0 === n4 ? 0 : n4, i4 = r5.distance, s4 = void 0 === i4 ? 100 : i4, c2 = r5.threshold, h2 = void 0 === c2 ? 0.6 : c2, l2 = r5.maxPatternLength, u2 = void 0 === l2 ? 32 : l2, f2 = r5.isCaseSensitive, v2 = void 0 !== f2 && f2, p2 = r5.tokenSeparator, d2 = void 0 === p2 ? / +/g : p2, g2 = r5.findAllMatches, y2 = void 0 !== g2 && g2, m2 = r5.minMatchCharLength, k2 = void 0 === m2 ? 1 : m2, b2 = r5.includeMatches, S2 = void 0 !== b2 && b2;
            !function(e5, t6) {
              if (!(e5 instanceof t6))
                throw new TypeError("Cannot call a class as a function");
            }(this, e4), this.options = { location: o3, distance: s4, threshold: h2, maxPatternLength: u2, isCaseSensitive: v2, tokenSeparator: d2, findAllMatches: y2, includeMatches: S2, minMatchCharLength: k2 }, this.pattern = v2 ? t5 : t5.toLowerCase(), this.pattern.length <= u2 && (this.patternAlphabet = a2(this.pattern));
          }
          var t4, r4, s3;
          return t4 = e4, (r4 = [{ key: "search", value: function(e5) {
            var t5 = this.options, r5 = t5.isCaseSensitive, n4 = t5.includeMatches;
            if (r5 || (e5 = e5.toLowerCase()), this.pattern === e5) {
              var a3 = { isMatch: true, score: 0 };
              return n4 && (a3.matchedIndices = [[0, e5.length - 1]]), a3;
            }
            var s4 = this.options, c2 = s4.maxPatternLength, h2 = s4.tokenSeparator;
            if (this.pattern.length > c2)
              return o2(e5, this.pattern, h2);
            var l2 = this.options, u2 = l2.location, f2 = l2.distance, v2 = l2.threshold, p2 = l2.findAllMatches, d2 = l2.minMatchCharLength;
            return i3(e5, this.pattern, this.patternAlphabet, { location: u2, distance: f2, threshold: v2, findAllMatches: p2, minMatchCharLength: d2, includeMatches: n4 });
          } }]) && n3(t4.prototype, r4), s3 && n3(t4, s3), e4;
        }();
        e3.exports = s2;
      }, function(e3, t3) {
        var r3 = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
        e3.exports = function(e4, t4) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o2 = new RegExp(t4.replace(r3, "\\$&").replace(n3, "|")), i3 = e4.match(o2), a2 = !!i3, s2 = [];
          if (a2)
            for (var c2 = 0, h2 = i3.length; c2 < h2; c2 += 1) {
              var l2 = i3[c2];
              s2.push([e4.indexOf(l2), l2.length - 1]);
            }
          return { score: a2 ? 0.5 : 1, isMatch: a2, matchedIndices: s2 };
        };
      }, function(e3, t3, r3) {
        var n3 = r3(4), o2 = r3(5);
        e3.exports = function(e4, t4, r4, i3) {
          for (var a2 = i3.location, s2 = void 0 === a2 ? 0 : a2, c2 = i3.distance, h2 = void 0 === c2 ? 100 : c2, l2 = i3.threshold, u2 = void 0 === l2 ? 0.6 : l2, f2 = i3.findAllMatches, v2 = void 0 !== f2 && f2, p2 = i3.minMatchCharLength, d2 = void 0 === p2 ? 1 : p2, g2 = i3.includeMatches, y2 = void 0 !== g2 && g2, m2 = s2, k2 = e4.length, b2 = u2, S2 = e4.indexOf(t4, m2), x2 = t4.length, M2 = [], _2 = 0; _2 < k2; _2 += 1)
            M2[_2] = 0;
          if (-1 !== S2) {
            var w2 = n3(t4, { errors: 0, currentLocation: S2, expectedLocation: m2, distance: h2 });
            if (b2 = Math.min(w2, b2), -1 !== (S2 = e4.lastIndexOf(t4, m2 + x2))) {
              var L2 = n3(t4, { errors: 0, currentLocation: S2, expectedLocation: m2, distance: h2 });
              b2 = Math.min(L2, b2);
            }
          }
          S2 = -1;
          for (var A2 = [], O2 = 1, C2 = x2 + k2, j2 = 1 << (x2 <= 31 ? x2 - 1 : 30), P2 = 0; P2 < x2; P2 += 1) {
            for (var I2 = 0, F2 = C2; I2 < F2; ) {
              n3(t4, { errors: P2, currentLocation: m2 + F2, expectedLocation: m2, distance: h2 }) <= b2 ? I2 = F2 : C2 = F2, F2 = Math.floor((C2 - I2) / 2 + I2);
            }
            C2 = F2;
            var T2 = Math.max(1, m2 - F2 + 1), N2 = v2 ? k2 : Math.min(m2 + F2, k2) + x2, z2 = Array(N2 + 2);
            z2[N2 + 1] = (1 << P2) - 1;
            for (var E2 = N2; E2 >= T2; E2 -= 1) {
              var W2 = E2 - 1, K2 = r4[e4.charAt(W2)];
              if (K2 && (M2[W2] = 1), z2[E2] = (z2[E2 + 1] << 1 | 1) & K2, 0 !== P2 && (z2[E2] |= (A2[E2 + 1] | A2[E2]) << 1 | 1 | A2[E2 + 1]), z2[E2] & j2 && (O2 = n3(t4, { errors: P2, currentLocation: W2, expectedLocation: m2, distance: h2 })) <= b2) {
                if (b2 = O2, (S2 = W2) <= m2)
                  break;
                T2 = Math.max(1, 2 * m2 - S2);
              }
            }
            if (n3(t4, { errors: P2 + 1, currentLocation: m2, expectedLocation: m2, distance: h2 }) > b2)
              break;
            A2 = z2;
          }
          var $ = { isMatch: S2 >= 0, score: 0 === O2 ? 1e-3 : O2 };
          return y2 && ($.matchedIndices = o2(M2, d2)), $;
        };
      }, function(e3, t3) {
        e3.exports = function(e4, t4) {
          var r3 = t4.errors, n3 = void 0 === r3 ? 0 : r3, o2 = t4.currentLocation, i3 = void 0 === o2 ? 0 : o2, a2 = t4.expectedLocation, s2 = void 0 === a2 ? 0 : a2, c2 = t4.distance, h2 = void 0 === c2 ? 100 : c2, l2 = n3 / e4.length, u2 = Math.abs(s2 - i3);
          return h2 ? l2 + u2 / h2 : u2 ? 1 : l2;
        };
      }, function(e3, t3) {
        e3.exports = function() {
          for (var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r3 = [], n3 = -1, o2 = -1, i3 = 0, a2 = e4.length; i3 < a2; i3 += 1) {
            var s2 = e4[i3];
            s2 && -1 === n3 ? n3 = i3 : s2 || -1 === n3 || ((o2 = i3 - 1) - n3 + 1 >= t4 && r3.push([n3, o2]), n3 = -1);
          }
          return e4[i3 - 1] && i3 - n3 >= t4 && r3.push([n3, i3 - 1]), r3;
        };
      }, function(e3, t3) {
        e3.exports = function(e4) {
          for (var t4 = {}, r3 = e4.length, n3 = 0; n3 < r3; n3 += 1)
            t4[e4.charAt(n3)] = 0;
          for (var o2 = 0; o2 < r3; o2 += 1)
            t4[e4.charAt(o2)] |= 1 << r3 - o2 - 1;
          return t4;
        };
      }, function(e3, t3) {
        var r3 = function(e4) {
          return Array.isArray ? Array.isArray(e4) : "[object Array]" === Object.prototype.toString.call(e4);
        }, n3 = function(e4) {
          return null == e4 ? "" : function(e5) {
            if ("string" == typeof e5)
              return e5;
            var t4 = e5 + "";
            return "0" == t4 && 1 / e5 == -1 / 0 ? "-0" : t4;
          }(e4);
        }, o2 = function(e4) {
          return "string" == typeof e4;
        }, i3 = function(e4) {
          return "number" == typeof e4;
        };
        e3.exports = { get: function(e4, t4) {
          var a2 = [];
          return function e5(t5, s2) {
            if (s2) {
              var c2 = s2.indexOf("."), h2 = s2, l2 = null;
              -1 !== c2 && (h2 = s2.slice(0, c2), l2 = s2.slice(c2 + 1));
              var u2 = t5[h2];
              if (null != u2)
                if (l2 || !o2(u2) && !i3(u2))
                  if (r3(u2))
                    for (var f2 = 0, v2 = u2.length; f2 < v2; f2 += 1)
                      e5(u2[f2], l2);
                  else
                    l2 && e5(u2, l2);
                else
                  a2.push(n3(u2));
            } else
              a2.push(t5);
          }(e4, t4), a2;
        }, isArray: r3, isString: o2, isNum: i3, toString: n3 };
      }]);
    });
  }
});

// ../../node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "../../node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i3 = 0; i3 < selection.rangeCount; i3++) {
        ranges.push(selection.getRangeAt(i3));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// ../../node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "../../node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options2) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options2) {
        options2 = {};
      }
      debug = options2.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e3) {
          e3.stopPropagation();
          if (options2.format) {
            e3.preventDefault();
            if (typeof e3.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options2.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text);
            } else {
              e3.clipboardData.clearData();
              e3.clipboardData.setData(options2.format, text);
            }
          }
          if (options2.onCopy) {
            e3.preventDefault();
            options2.onCopy(e3.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options2.format || "text", text);
          options2.onCopy && options2.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options2 ? options2.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  }
});

// src/index.tsx
var import_client = __toESM(require_client());
var import_react62 = __toESM(require_react());

// ../../node_modules/react-helmet-async/lib/index.module.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_react_fast_compare = __toESM(require_react_fast_compare());
var import_invariant = __toESM(require_browser());
var import_shallowequal = __toESM(require_shallowequal());
function a() {
  return a = Object.assign || function(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var r3 = arguments[e3];
      for (var n3 in r3)
        Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
    }
    return t3;
  }, a.apply(this, arguments);
}
function s(t3, e3) {
  t3.prototype = Object.create(e3.prototype), t3.prototype.constructor = t3, c(t3, e3);
}
function c(t3, e3) {
  return c = Object.setPrototypeOf || function(t4, e4) {
    return t4.__proto__ = e4, t4;
  }, c(t3, e3);
}
function u(t3, e3) {
  if (null == t3)
    return {};
  var r3, n3, i3 = {}, o2 = Object.keys(t3);
  for (n3 = 0; n3 < o2.length; n3++)
    e3.indexOf(r3 = o2[n3]) >= 0 || (i3[r3] = t3[r3]);
  return i3;
}
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" };
var p = { rel: ["amphtml", "canonical", "alternate"] };
var f = { type: ["application/ld+json"] };
var d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] };
var h = Object.keys(l).map(function(t3) {
  return l[t3];
});
var m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" };
var y = Object.keys(m).reduce(function(t3, e3) {
  return t3[m[e3]] = e3, t3;
}, {});
var T = function(t3, e3) {
  for (var r3 = t3.length - 1; r3 >= 0; r3 -= 1) {
    var n3 = t3[r3];
    if (Object.prototype.hasOwnProperty.call(n3, e3))
      return n3[e3];
  }
  return null;
};
var g = function(t3) {
  var e3 = T(t3, l.TITLE), r3 = T(t3, "titleTemplate");
  if (Array.isArray(e3) && (e3 = e3.join("")), r3 && e3)
    return r3.replace(/%s/g, function() {
      return e3;
    });
  var n3 = T(t3, "defaultTitle");
  return e3 || n3 || void 0;
};
var b = function(t3) {
  return T(t3, "onChangeClientState") || function() {
  };
};
var v = function(t3, e3) {
  return e3.filter(function(e4) {
    return void 0 !== e4[t3];
  }).map(function(e4) {
    return e4[t3];
  }).reduce(function(t4, e4) {
    return a({}, t4, e4);
  }, {});
};
var A = function(t3, e3) {
  return e3.filter(function(t4) {
    return void 0 !== t4[l.BASE];
  }).map(function(t4) {
    return t4[l.BASE];
  }).reverse().reduce(function(e4, r3) {
    if (!e4.length)
      for (var n3 = Object.keys(r3), i3 = 0; i3 < n3.length; i3 += 1) {
        var o2 = n3[i3].toLowerCase();
        if (-1 !== t3.indexOf(o2) && r3[o2])
          return e4.concat(r3);
      }
    return e4;
  }, []);
};
var C = function(t3, e3, r3) {
  var n3 = {};
  return r3.filter(function(e4) {
    return !!Array.isArray(e4[t3]) || (void 0 !== e4[t3] && console && "function" == typeof console.warn && console.warn("Helmet: " + t3 + ' should be of type "Array". Instead found type "' + typeof e4[t3] + '"'), false);
  }).map(function(e4) {
    return e4[t3];
  }).reverse().reduce(function(t4, r4) {
    var i3 = {};
    r4.filter(function(t5) {
      for (var r5, o3 = Object.keys(t5), a2 = 0; a2 < o3.length; a2 += 1) {
        var s3 = o3[a2], c3 = s3.toLowerCase();
        -1 === e3.indexOf(c3) || "rel" === r5 && "canonical" === t5[r5].toLowerCase() || "rel" === c3 && "stylesheet" === t5[c3].toLowerCase() || (r5 = c3), -1 === e3.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r5 = s3);
      }
      if (!r5 || !t5[r5])
        return false;
      var u3 = t5[r5].toLowerCase();
      return n3[r5] || (n3[r5] = {}), i3[r5] || (i3[r5] = {}), !n3[r5][u3] && (i3[r5][u3] = true, true);
    }).reverse().forEach(function(e4) {
      return t4.push(e4);
    });
    for (var o2 = Object.keys(i3), s2 = 0; s2 < o2.length; s2 += 1) {
      var c2 = o2[s2], u2 = a({}, n3[c2], i3[c2]);
      n3[c2] = u2;
    }
    return t4;
  }, []).reverse();
};
var O = function(t3, e3) {
  if (Array.isArray(t3) && t3.length) {
    for (var r3 = 0; r3 < t3.length; r3 += 1)
      if (t3[r3][e3])
        return true;
  }
  return false;
};
var S = function(t3) {
  return Array.isArray(t3) ? t3.join("") : t3;
};
var E = function(t3, e3) {
  return Array.isArray(t3) ? t3.reduce(function(t4, r3) {
    return function(t5, e4) {
      for (var r4 = Object.keys(t5), n3 = 0; n3 < r4.length; n3 += 1)
        if (e4[r4[n3]] && e4[r4[n3]].includes(t5[r4[n3]]))
          return true;
      return false;
    }(r3, e3) ? t4.priority.push(r3) : t4.default.push(r3), t4;
  }, { priority: [], default: [] }) : { default: t3 };
};
var I = function(t3, e3) {
  var r3;
  return a({}, t3, ((r3 = {})[e3] = void 0, r3));
};
var P = [l.NOSCRIPT, l.SCRIPT, l.STYLE];
var w = function(t3, e3) {
  return void 0 === e3 && (e3 = true), false === e3 ? String(t3) : String(t3).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var x = function(t3) {
  return Object.keys(t3).reduce(function(e3, r3) {
    var n3 = void 0 !== t3[r3] ? r3 + '="' + t3[r3] + '"' : "" + r3;
    return e3 ? e3 + " " + n3 : n3;
  }, "");
};
var L = function(t3, e3) {
  return void 0 === e3 && (e3 = {}), Object.keys(t3).reduce(function(e4, r3) {
    return e4[m[r3] || r3] = t3[r3], e4;
  }, e3);
};
var j = function(e3, r3) {
  return r3.map(function(r4, n3) {
    var i3, o2 = ((i3 = { key: n3 })["data-rh"] = true, i3);
    return Object.keys(r4).forEach(function(t3) {
      var e4 = m[t3] || t3;
      "innerHTML" === e4 || "cssText" === e4 ? o2.dangerouslySetInnerHTML = { __html: r4.innerHTML || r4.cssText } : o2[e4] = r4[t3];
    }), import_react.default.createElement(e3, o2);
  });
};
var M = function(e3, r3, n3) {
  switch (e3) {
    case l.TITLE:
      return { toComponent: function() {
        return n4 = r3.titleAttributes, (i3 = { key: e4 = r3.title })["data-rh"] = true, o2 = L(n4, i3), [import_react.default.createElement(l.TITLE, o2, e4)];
        var e4, n4, i3, o2;
      }, toString: function() {
        return function(t3, e4, r4, n4) {
          var i3 = x(r4), o2 = S(e4);
          return i3 ? "<" + t3 + ' data-rh="true" ' + i3 + ">" + w(o2, n4) + "</" + t3 + ">" : "<" + t3 + ' data-rh="true">' + w(o2, n4) + "</" + t3 + ">";
        }(e3, r3.title, r3.titleAttributes, n3);
      } };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: function() {
        return L(r3);
      }, toString: function() {
        return x(r3);
      } };
    default:
      return { toComponent: function() {
        return j(e3, r3);
      }, toString: function() {
        return function(t3, e4, r4) {
          return e4.reduce(function(e5, n4) {
            var i3 = Object.keys(n4).filter(function(t4) {
              return !("innerHTML" === t4 || "cssText" === t4);
            }).reduce(function(t4, e6) {
              var i4 = void 0 === n4[e6] ? e6 : e6 + '="' + w(n4[e6], r4) + '"';
              return t4 ? t4 + " " + i4 : i4;
            }, ""), o2 = n4.innerHTML || n4.cssText || "", a2 = -1 === P.indexOf(t3);
            return e5 + "<" + t3 + ' data-rh="true" ' + i3 + (a2 ? "/>" : ">" + o2 + "</" + t3 + ">");
          }, "");
        }(e3, r3, n3);
      } };
  }
};
var k = function(t3) {
  var e3 = t3.baseTag, r3 = t3.bodyAttributes, n3 = t3.encode, i3 = t3.htmlAttributes, o2 = t3.noscriptTags, a2 = t3.styleTags, s2 = t3.title, c2 = void 0 === s2 ? "" : s2, u2 = t3.titleAttributes, h2 = t3.linkTags, m2 = t3.metaTags, y2 = t3.scriptTags, T2 = { toComponent: function() {
  }, toString: function() {
    return "";
  } };
  if (t3.prioritizeSeoTags) {
    var g2 = function(t4) {
      var e4 = t4.linkTags, r4 = t4.scriptTags, n4 = t4.encode, i4 = E(t4.metaTags, d), o3 = E(e4, p), a3 = E(r4, f);
      return { priorityMethods: { toComponent: function() {
        return [].concat(j(l.META, i4.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
      }, toString: function() {
        return M(l.META, i4.priority, n4) + " " + M(l.LINK, o3.priority, n4) + " " + M(l.SCRIPT, a3.priority, n4);
      } }, metaTags: i4.default, linkTags: o3.default, scriptTags: a3.default };
    }(t3);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e3, n3), bodyAttributes: M("bodyAttributes", r3, n3), htmlAttributes: M("htmlAttributes", i3, n3), link: M(l.LINK, h2, n3), meta: M(l.META, m2, n3), noscript: M(l.NOSCRIPT, o2, n3), script: M(l.SCRIPT, y2, n3), style: M(l.STYLE, a2, n3), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n3) };
};
var H = [];
var N = function(t3, e3) {
  var r3 = this;
  void 0 === e3 && (e3 = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: function(t4) {
    r3.context.helmet = t4;
  }, helmetInstances: { get: function() {
    return r3.canUseDOM ? H : r3.instances;
  }, add: function(t4) {
    (r3.canUseDOM ? H : r3.instances).push(t4);
  }, remove: function(t4) {
    var e4 = (r3.canUseDOM ? H : r3.instances).indexOf(t4);
    (r3.canUseDOM ? H : r3.instances).splice(e4, 1);
  } } }, this.context = t3, this.canUseDOM = e3, e3 || (t3.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
};
var R = import_react.default.createContext({});
var D = import_prop_types.default.shape({ setHelmet: import_prop_types.default.func, helmetInstances: import_prop_types.default.shape({ get: import_prop_types.default.func, add: import_prop_types.default.func, remove: import_prop_types.default.func }) });
var U = "undefined" != typeof document;
var q = /* @__PURE__ */ function(e3) {
  function r3(t3) {
    var n3;
    return (n3 = e3.call(this, t3) || this).helmetData = new N(n3.props.context, r3.canUseDOM), n3;
  }
  return s(r3, e3), r3.prototype.render = function() {
    return import_react.default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r3;
}(import_react.Component);
q.canUseDOM = U, q.propTypes = { context: import_prop_types.default.shape({ helmet: import_prop_types.default.shape() }), children: import_prop_types.default.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = function(t3, e3) {
  var r3, n3 = document.head || document.querySelector(l.HEAD), i3 = n3.querySelectorAll(t3 + "[data-rh]"), o2 = [].slice.call(i3), a2 = [];
  return e3 && e3.length && e3.forEach(function(e4) {
    var n4 = document.createElement(t3);
    for (var i4 in e4)
      Object.prototype.hasOwnProperty.call(e4, i4) && ("innerHTML" === i4 ? n4.innerHTML = e4.innerHTML : "cssText" === i4 ? n4.styleSheet ? n4.styleSheet.cssText = e4.cssText : n4.appendChild(document.createTextNode(e4.cssText)) : n4.setAttribute(i4, void 0 === e4[i4] ? "" : e4[i4]));
    n4.setAttribute("data-rh", "true"), o2.some(function(t4, e5) {
      return r3 = e5, n4.isEqualNode(t4);
    }) ? o2.splice(r3, 1) : a2.push(n4);
  }), o2.forEach(function(t4) {
    return t4.parentNode.removeChild(t4);
  }), a2.forEach(function(t4) {
    return n3.appendChild(t4);
  }), { oldTags: o2, newTags: a2 };
};
var B = function(t3, e3) {
  var r3 = document.getElementsByTagName(t3)[0];
  if (r3) {
    for (var n3 = r3.getAttribute("data-rh"), i3 = n3 ? n3.split(",") : [], o2 = [].concat(i3), a2 = Object.keys(e3), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e3[c2] || "";
      r3.getAttribute(c2) !== u2 && r3.setAttribute(c2, u2), -1 === i3.indexOf(c2) && i3.push(c2);
      var l2 = o2.indexOf(c2);
      -1 !== l2 && o2.splice(l2, 1);
    }
    for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1)
      r3.removeAttribute(o2[p2]);
    i3.length === o2.length ? r3.removeAttribute("data-rh") : r3.getAttribute("data-rh") !== a2.join(",") && r3.setAttribute("data-rh", a2.join(","));
  }
};
var K = function(t3, e3) {
  var r3 = t3.baseTag, n3 = t3.htmlAttributes, i3 = t3.linkTags, o2 = t3.metaTags, a2 = t3.noscriptTags, s2 = t3.onChangeClientState, c2 = t3.scriptTags, u2 = t3.styleTags, p2 = t3.title, f2 = t3.titleAttributes;
  B(l.BODY, t3.bodyAttributes), B(l.HTML, n3), function(t4, e4) {
    void 0 !== t4 && document.title !== t4 && (document.title = S(t4)), B(l.TITLE, e4);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r3), linkTags: Y(l.LINK, i3), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t4) {
    var e4 = d2[t4], r4 = e4.newTags, n4 = e4.oldTags;
    r4.length && (h2[t4] = r4), n4.length && (m2[t4] = d2[t4].oldTags);
  }), e3 && e3(), s2(t3, h2, m2);
};
var _ = null;
var z = /* @__PURE__ */ function(t3) {
  function e3() {
    for (var e4, r4 = arguments.length, n3 = new Array(r4), i3 = 0; i3 < r4; i3++)
      n3[i3] = arguments[i3];
    return (e4 = t3.call.apply(t3, [this].concat(n3)) || this).rendered = false, e4;
  }
  s(e3, t3);
  var r3 = e3.prototype;
  return r3.shouldComponentUpdate = function(t4) {
    return !(0, import_shallowequal.default)(t4, this.props);
  }, r3.componentDidUpdate = function() {
    this.emitChange();
  }, r3.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r3.emitChange = function() {
    var t4, e4, r4 = this.props.context, n3 = r4.setHelmet, i3 = null, o2 = (t4 = r4.helmetInstances.get().map(function(t5) {
      var e5 = a({}, t5.props);
      return delete e5.context, e5;
    }), { baseTag: A(["href"], t4), bodyAttributes: v("bodyAttributes", t4), defer: T(t4, "defer"), encode: T(t4, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t4), linkTags: C(l.LINK, ["rel", "href"], t4), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t4), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t4), onChangeClientState: b(t4), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t4), styleTags: C(l.STYLE, ["cssText"], t4), title: g(t4), titleAttributes: v("titleAttributes", t4), prioritizeSeoTags: O(t4, "prioritizeSeoTags") });
    q.canUseDOM ? (e4 = o2, _ && cancelAnimationFrame(_), e4.defer ? _ = requestAnimationFrame(function() {
      K(e4, function() {
        _ = null;
      });
    }) : (K(e4), _ = null)) : k && (i3 = k(o2)), n3(i3);
  }, r3.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r3.render = function() {
    return this.init(), null;
  }, e3;
}(import_react.Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"];
var G = ["children"];
var W = /* @__PURE__ */ function(e3) {
  function r3() {
    return e3.apply(this, arguments) || this;
  }
  s(r3, e3);
  var o2 = r3.prototype;
  return o2.shouldComponentUpdate = function(t3) {
    return !(0, import_react_fast_compare.default)(I(this.props, "helmetData"), I(t3, "helmetData"));
  }, o2.mapNestedChildrenToProps = function(t3, e4) {
    if (!e4)
      return null;
    switch (t3.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e4 };
      case l.STYLE:
        return { cssText: e4 };
      default:
        throw new Error("<" + t3.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o2.flattenArrayTypeChildren = function(t3) {
    var e4, r4 = t3.child, n3 = t3.arrayTypeChildren;
    return a({}, n3, ((e4 = {})[r4.type] = [].concat(n3[r4.type] || [], [a({}, t3.newChildProps, this.mapNestedChildrenToProps(r4, t3.nestedChildren))]), e4));
  }, o2.mapObjectTypeChildren = function(t3) {
    var e4, r4, n3 = t3.child, i3 = t3.newProps, o3 = t3.newChildProps, s2 = t3.nestedChildren;
    switch (n3.type) {
      case l.TITLE:
        return a({}, i3, ((e4 = {})[n3.type] = s2, e4.titleAttributes = a({}, o3), e4));
      case l.BODY:
        return a({}, i3, { bodyAttributes: a({}, o3) });
      case l.HTML:
        return a({}, i3, { htmlAttributes: a({}, o3) });
      default:
        return a({}, i3, ((r4 = {})[n3.type] = a({}, o3), r4));
    }
  }, o2.mapArrayTypeChildrenToProps = function(t3, e4) {
    var r4 = a({}, e4);
    return Object.keys(t3).forEach(function(e5) {
      var n3;
      r4 = a({}, r4, ((n3 = {})[e5] = t3[e5], n3));
    }), r4;
  }, o2.warnOnInvalidChildren = function(t3, e4) {
    return (0, import_invariant.default)(h.some(function(e5) {
      return t3.type === e5;
    }), "function" == typeof t3.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t3.type + "> elements. Refer to our API for more information."), (0, import_invariant.default)(!e4 || "string" == typeof e4 || Array.isArray(e4) && !e4.some(function(t4) {
      return "string" != typeof t4;
    }), "Helmet expects a string as a child of <" + t3.type + ">. Did you forget to wrap your children in braces? ( <" + t3.type + ">{``}</" + t3.type + "> ) Refer to our API for more information."), true;
  }, o2.mapChildrenToProps = function(e4, r4) {
    var n3 = this, i3 = {};
    return import_react.default.Children.forEach(e4, function(t3) {
      if (t3 && t3.props) {
        var e5 = t3.props, o3 = e5.children, a2 = u(e5, F), s2 = Object.keys(a2).reduce(function(t4, e6) {
          return t4[y[e6] || e6] = a2[e6], t4;
        }, {}), c2 = t3.type;
        switch ("symbol" == typeof c2 ? c2 = c2.toString() : n3.warnOnInvalidChildren(t3, o3), c2) {
          case l.FRAGMENT:
            r4 = n3.mapChildrenToProps(o3, r4);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i3 = n3.flattenArrayTypeChildren({ child: t3, arrayTypeChildren: i3, newChildProps: s2, nestedChildren: o3 });
            break;
          default:
            r4 = n3.mapObjectTypeChildren({ child: t3, newProps: r4, newChildProps: s2, nestedChildren: o3 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i3, r4);
  }, o2.render = function() {
    var e4 = this.props, r4 = e4.children, n3 = u(e4, G), i3 = a({}, n3), o3 = n3.helmetData;
    return r4 && (i3 = this.mapChildrenToProps(r4, i3)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? /* @__PURE__ */ import_react.default.createElement(z, a({}, i3, { context: o3.value, helmetData: void 0 })) : /* @__PURE__ */ import_react.default.createElement(R.Consumer, null, function(e5) {
      return import_react.default.createElement(z, a({}, i3, { context: e5 }));
    });
  }, r3;
}(import_react.Component);
W.propTypes = { base: import_prop_types.default.object, bodyAttributes: import_prop_types.default.object, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]), defaultTitle: import_prop_types.default.string, defer: import_prop_types.default.bool, encodeSpecialCharacters: import_prop_types.default.bool, htmlAttributes: import_prop_types.default.object, link: import_prop_types.default.arrayOf(import_prop_types.default.object), meta: import_prop_types.default.arrayOf(import_prop_types.default.object), noscript: import_prop_types.default.arrayOf(import_prop_types.default.object), onChangeClientState: import_prop_types.default.func, script: import_prop_types.default.arrayOf(import_prop_types.default.object), style: import_prop_types.default.arrayOf(import_prop_types.default.object), title: import_prop_types.default.string, titleAttributes: import_prop_types.default.object, titleTemplate: import_prop_types.default.string, prioritizeSeoTags: import_prop_types.default.bool, helmetData: import_prop_types.default.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";

// src/App.tsx
var import_react53 = __toESM(require_react());

// src/container/Sidebar.tsx
var import_react26 = __toESM(require_react());

// src/components/sidebar/Sidebar.tsx
var import_react24 = __toESM(require_react());

// src/components/sidebar/Heading.tsx
var import_react6 = __toESM(require_react());

// src/components/sidebar/Brand.tsx
var import_react2 = __toESM(require_react());
var StorybookLogoStyled = newStyled(StorybookLogo)(({ theme }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: theme.base === "light" ? theme.color.defaultText : theme.color.lightest
}));
var Img = newStyled.img({
  display: "block",
  maxWidth: "150px",
  maxHeight: "100px"
});
var LogoLink = newStyled.a(({ theme }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: theme.color.secondary
  }
}));
var Brand = withTheme(({ theme }) => {
  const { title = "Storybook", url = "./", image, target } = theme.brand;
  const targetValue = target || (url === "./" ? "" : "_blank");
  if (image === null) {
    if (title === null)
      return null;
    if (!url)
      return /* @__PURE__ */ import_react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: title } });
    return /* @__PURE__ */ import_react2.default.createElement(LogoLink, { href: url, target: targetValue, dangerouslySetInnerHTML: { __html: title } });
  }
  const logo = image ? /* @__PURE__ */ import_react2.default.createElement(Img, { src: image, alt: title }) : /* @__PURE__ */ import_react2.default.createElement(StorybookLogoStyled, { alt: title });
  if (url) {
    return /* @__PURE__ */ import_react2.default.createElement(LogoLink, { title, href: url, target: targetValue }, logo);
  }
  return /* @__PURE__ */ import_react2.default.createElement("div", null, logo);
});

// src/components/sidebar/Menu.tsx
var import_react5 = __toESM(require_react());

// ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}

// ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// ../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}

// ../../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e3) {
    return typeof fn === "function";
  }
}

// ../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
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
  } catch (e3) {
    return false;
  }
}

// ../../node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

// ../../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
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

// ../../node_modules/polished/dist/polished.esm.js
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
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var a2 = args[0];
  var b2 = [];
  var c2;
  for (c2 = 1; c2 < args.length; c2 += 1) {
    b2.push(args[c2]);
  }
  b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  });
  return a2;
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (false) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
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
function nameToHex(color) {
  if (typeof color !== "string")
    return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
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
var reduceHexValue = function reduceHexValue2(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgb(value, green, blue) {
  if (typeof value === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
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
function curried(f2, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function transparentize(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

// src/components/layout/LayoutProvider.tsx
var import_react4 = __toESM(require_react());

// src/components/hooks/useMedia.tsx
var import_react3 = __toESM(require_react());
function useMediaQuery(query) {
  const getMatches = (queryMatch) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(queryMatch).matches;
    }
    return false;
  };
  const [matches, setMatches] = (0, import_react3.useState)(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  (0, import_react3.useEffect)(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}

// src/constants.ts
var BREAKPOINT = 600;
var MEDIA_DESKTOP_BREAKPOINT = `@media (min-width: ${BREAKPOINT}px)`;
var MOBILE_TRANSITION_DURATION = 300;

// src/components/layout/LayoutProvider.tsx
var LayoutContext = (0, import_react4.createContext)({
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {
  },
  isMobileAboutOpen: false,
  setMobileAboutOpen: () => {
  },
  isMobilePanelOpen: false,
  setMobilePanelOpen: () => {
  },
  isDesktop: false,
  isMobile: false
});
var LayoutProvider = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(false);
  const [isMobileAboutOpen, setMobileAboutOpen] = (0, import_react4.useState)(false);
  const [isMobilePanelOpen, setMobilePanelOpen] = (0, import_react4.useState)(false);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINT}px)`);
  const isMobile = !isDesktop;
  return /* @__PURE__ */ import_react4.default.createElement(
    LayoutContext.Provider,
    {
      value: {
        isMobileMenuOpen,
        setMobileMenuOpen,
        isMobileAboutOpen,
        setMobileAboutOpen,
        isMobilePanelOpen,
        setMobilePanelOpen,
        isDesktop,
        isMobile
      }
    },
    children
  );
};
var useLayout = () => (0, import_react4.useContext)(LayoutContext);

// src/components/sidebar/Menu.tsx
var SidebarIconButton = newStyled(IconButton)(({ highlighted, theme }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...highlighted && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: theme.background.app,
      border: `1px solid ${theme.background.app}`,
      boxShadow: `0 0 0 2px ${theme.background.app}`
    },
    "&:after": {
      background: theme.color.positive,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      boxShadow: `0 0 0 2px ${theme.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${curriedTransparentize$1(0.88, theme.color.secondary)}`
    }
  }
}));
var MenuButtonGroup = newStyled.div({
  display: "flex",
  gap: 4
});
var SidebarMenuList = ({ menu, onHide }) => {
  const links = (0, import_react5.useMemo)(() => {
    return menu.map(({ onClick, ...rest }) => ({
      ...rest,
      onClick: (event, item) => {
        if (onClick) {
          onClick(event, item);
        }
        onHide();
      }
    }));
  }, [menu, onHide]);
  return /* @__PURE__ */ import_react5.default.createElement(TooltipLinkList, { links });
};
var SidebarMenu = ({ menu, isHighlighted, onClick }) => {
  const [isTooltipVisible, setIsTooltipVisible] = (0, import_react5.useState)(false);
  const { isMobile, setMobileMenuOpen } = useLayout();
  if (isMobile) {
    return /* @__PURE__ */ import_react5.default.createElement(MenuButtonGroup, null, /* @__PURE__ */ import_react5.default.createElement(
      SidebarIconButton,
      {
        title: "About Storybook",
        "aria-label": "About Storybook",
        highlighted: isHighlighted,
        active: false,
        onClick
      },
      /* @__PURE__ */ import_react5.default.createElement(CogIcon, null)
    ), /* @__PURE__ */ import_react5.default.createElement(
      IconButton,
      {
        title: "Close menu",
        "aria-label": "Close menu",
        onClick: () => setMobileMenuOpen(false)
      },
      /* @__PURE__ */ import_react5.default.createElement(CloseIcon, null)
    ));
  }
  return /* @__PURE__ */ import_react5.default.createElement(
    WithTooltip,
    {
      placement: "top",
      closeOnOutsideClick: true,
      tooltip: ({ onHide }) => /* @__PURE__ */ import_react5.default.createElement(SidebarMenuList, { onHide, menu }),
      onVisibleChange: setIsTooltipVisible
    },
    /* @__PURE__ */ import_react5.default.createElement(
      SidebarIconButton,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: isHighlighted,
        active: isTooltipVisible
      },
      /* @__PURE__ */ import_react5.default.createElement(CogIcon, null)
    )
  );
};

// src/components/sidebar/Heading.tsx
var BrandArea = newStyled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
}));
var HeadingWrapper = newStyled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
});
var SkipToCanvasLink = newStyled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: theme.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
}));
var Heading = ({
  menuHighlighted = false,
  menu,
  skipLinkHref,
  extra,
  isLoading,
  onMenuClick,
  ...props
}) => {
  return /* @__PURE__ */ import_react6.default.createElement(HeadingWrapper, { ...props }, skipLinkHref && /* @__PURE__ */ import_react6.default.createElement(SkipToCanvasLink, { asChild: true }, /* @__PURE__ */ import_react6.default.createElement("a", { href: skipLinkHref, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ import_react6.default.createElement(BrandArea, null, /* @__PURE__ */ import_react6.default.createElement(Brand, null)), isLoading ? null : extra.map(({ id, render: Render }) => /* @__PURE__ */ import_react6.default.createElement(Render, { key: id })), /* @__PURE__ */ import_react6.default.createElement(SidebarMenu, { menu, isHighlighted: menuHighlighted, onClick: onMenuClick }));
};

// src/components/sidebar/Explorer.tsx
var import_react19 = __toESM(require_react());

// src/components/sidebar/Refs.tsx
var import_react16 = __toESM(require_react());

// src/components/sidebar/RefBlocks.tsx
var import_react8 = __toESM(require_react());

// src/components/sidebar/Loader.tsx
var import_react7 = __toESM(require_react());
var LOADER_SEQUENCE = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3];
var Loadingitem = newStyled.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth = 0 }) => ({
    marginLeft: depth * 15,
    maxWidth: 85 - depth * 5
  }),
  ({ theme }) => theme.animation.inlineGlow,
  ({ theme }) => ({
    background: theme.appBorderColor
  })
);
var Contained = newStyled.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
});
var Loader2 = ({ size }) => {
  const repeats = Math.ceil(size / LOADER_SEQUENCE.length);
  const sequence = Array.from(Array(repeats)).fill(LOADER_SEQUENCE).flat().slice(0, size);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.Fragment, null, sequence.map((depth, index) => /* @__PURE__ */ import_react7.default.createElement(Loadingitem, { depth, key: index })));
};

// src/components/sidebar/RefBlocks.tsx
var { window: globalWindow } = scope;
var TextStyle = newStyled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "20px",
  margin: 0
}));
var Text = newStyled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: theme.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
}));
var ErrorDisplay = newStyled.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme }) => ({
    color: theme.color.dark
  })
);
var AuthBlock = ({ loginUrl, id }) => {
  const [isAuthAttempted, setAuthAttempted] = (0, import_react8.useState)(false);
  const refresh = (0, import_react8.useCallback)(() => {
    globalWindow.document.location.reload();
  }, []);
  const open = (0, import_react8.useCallback)((e3) => {
    e3.preventDefault();
    const childWindow = globalWindow.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
    const timer = setInterval(() => {
      if (!childWindow) {
        logger.error("unable to access loginUrl window");
        clearInterval(timer);
      } else if (childWindow.closed) {
        clearInterval(timer);
        setAuthAttempted(true);
      }
    }, 1e3);
  }, []);
  return /* @__PURE__ */ import_react8.default.createElement(Contained, null, /* @__PURE__ */ import_react8.default.createElement(Spaced, null, isAuthAttempted ? /* @__PURE__ */ import_react8.default.createElement(import_react8.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(Text, null, "Authentication on ", /* @__PURE__ */ import_react8.default.createElement("strong", null, loginUrl), " concluded. Refresh the page to fetch this Storybook."), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(Button, { small: true, gray: true, onClick: refresh }, /* @__PURE__ */ import_react8.default.createElement(SyncIcon, null), "Refresh now"))) : /* @__PURE__ */ import_react8.default.createElement(import_react8.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(Text, null, "Sign in to browse this Storybook."), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(Button, { small: true, gray: true, onClick: open }, /* @__PURE__ */ import_react8.default.createElement(LockIcon, null), "Sign in")))));
};
var ErrorBlock = ({ error }) => /* @__PURE__ */ import_react8.default.createElement(Contained, null, /* @__PURE__ */ import_react8.default.createElement(Spaced, null, /* @__PURE__ */ import_react8.default.createElement(TextStyle, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ import_react8.default.createElement("br", null), /* @__PURE__ */ import_react8.default.createElement(
  WithTooltip,
  {
    tooltip: /* @__PURE__ */ import_react8.default.createElement(ErrorDisplay, null, /* @__PURE__ */ import_react8.default.createElement(ErrorFormatter, { error }))
  },
  /* @__PURE__ */ import_react8.default.createElement(Link22, { isButton: true }, "View error ", /* @__PURE__ */ import_react8.default.createElement(ChevronDownIcon, null))
), " ", /* @__PURE__ */ import_react8.default.createElement(Link22, { withArrow: true, href: "https://storybook.js.org/docs", cancel: false, target: "_blank" }, "View docs"))));
var FlexSpaced = newStyled(Spaced)({
  display: "flex"
});
var WideSpaced = newStyled(Spaced)({
  flex: 1
});
var EmptyBlock = ({ isMain }) => /* @__PURE__ */ import_react8.default.createElement(Contained, null, /* @__PURE__ */ import_react8.default.createElement(FlexSpaced, { col: 1 }, /* @__PURE__ */ import_react8.default.createElement(WideSpaced, null, /* @__PURE__ */ import_react8.default.createElement(Text, null, isMain ? /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, "Oh no! Your Storybook is empty. Possible reasons why:", /* @__PURE__ */ import_react8.default.createElement("ul", null, /* @__PURE__ */ import_react8.default.createElement("li", null, "The glob specified in ", /* @__PURE__ */ import_react8.default.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ import_react8.default.createElement("li", null, "No stories are defined in your story files."), /* @__PURE__ */ import_react8.default.createElement("li", null, "You're using filter-functions, and all stories are filtered away.")), " ") : /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, "This composed storybook is empty, maybe you're using filter-functions, and all stories are filtered away.")))));
var LoaderBlock = ({ isMain }) => /* @__PURE__ */ import_react8.default.createElement(Contained, null, /* @__PURE__ */ import_react8.default.createElement(Loader2, { size: isMain ? 17 : 5 }));

// src/components/sidebar/RefIndicator.tsx
var import_react9 = __toESM(require_react());
var { document: document2, window: globalWindow2 } = scope;
var IndicatorPlacement = newStyled.aside(({ theme }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: theme.layoutMargin
  }
}));
var IndicatorClickTarget = newStyled.button(({ theme }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText),
  "&:hover": {
    color: theme.barSelectedColor
  },
  "&:focus": {
    color: theme.barSelectedColor,
    borderColor: theme.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
}));
var MessageTitle = newStyled.span(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var Message = newStyled.a(({ theme }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: theme.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.appBorderColor}`
  },
  "&:hover": {
    background: theme.background.hoverable,
    color: theme.color.darker
  },
  "&:link": {
    color: theme.color.darker
  },
  "&:active": {
    color: theme.color.darker
  },
  "&:focus": {
    color: theme.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
}));
var MessageWrapper = newStyled.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
});
var BlueIcon = newStyled(Icons)(({ theme }) => ({
  color: theme.color.secondary
}));
var YellowIcon = newStyled(Icons)(({ theme }) => ({
  color: theme.color.gold
}));
var RedIcon = newStyled(Icons)(({ theme }) => ({
  color: theme.color.negative
}));
var GreenIcon = newStyled(Icons)(({ theme }) => ({
  color: theme.color.green
}));
var Version = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.regular,
  color: theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
}));
var CurrentVersion = ({ url, versions }) => {
  const currentVersionId = (0, import_react9.useMemo)(() => {
    const c2 = Object.entries(versions).find(([k2, v2]) => v2 === url);
    return c2 && c2[0] ? c2[0] : "current";
  }, [url, versions]);
  return /* @__PURE__ */ import_react9.default.createElement(Version, null, /* @__PURE__ */ import_react9.default.createElement("span", null, currentVersionId), /* @__PURE__ */ import_react9.default.createElement(ChevronDownIcon, null));
};
var RefIndicator = import_react9.default.memo(
  (0, import_react9.forwardRef)(
    ({ state, ...ref }, forwardedRef) => {
      const api = useStorybookApi();
      const list = (0, import_react9.useMemo)(() => Object.values(ref.index || {}), [ref.index]);
      const componentCount = (0, import_react9.useMemo)(
        () => list.filter((v2) => v2.type === "component").length,
        [list]
      );
      const leafCount = (0, import_react9.useMemo)(
        () => list.filter((v2) => v2.type === "docs" || v2.type === "story").length,
        [list]
      );
      return /* @__PURE__ */ import_react9.default.createElement(IndicatorPlacement, { ref: forwardedRef }, /* @__PURE__ */ import_react9.default.createElement(
        WithTooltip,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: true,
          tooltip: /* @__PURE__ */ import_react9.default.createElement(MessageWrapper, null, /* @__PURE__ */ import_react9.default.createElement(Spaced, { row: 0 }, state === "loading" && /* @__PURE__ */ import_react9.default.createElement(LoadingMessage, { url: ref.url }), (state === "error" || state === "empty") && /* @__PURE__ */ import_react9.default.createElement(ErrorOccurredMessage, { url: ref.url }), state === "ready" && /* @__PURE__ */ import_react9.default.createElement(ReadyMessage, { ...{ url: ref.url, componentCount, leafCount } }), state === "auth" && /* @__PURE__ */ import_react9.default.createElement(LoginRequiredMessage, { ...ref }), ref.type === "auto-inject" && state !== "error" && /* @__PURE__ */ import_react9.default.createElement(PerformanceDegradedMessage, null), state !== "loading" && /* @__PURE__ */ import_react9.default.createElement(ReadDocsMessage, null)))
        },
        /* @__PURE__ */ import_react9.default.createElement(IndicatorClickTarget, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ import_react9.default.createElement(GlobeIcon, null))
      ), ref.versions && Object.keys(ref.versions).length ? /* @__PURE__ */ import_react9.default.createElement(
        WithTooltip,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: true,
          tooltip: (tooltip) => /* @__PURE__ */ import_react9.default.createElement(
            TooltipLinkList,
            {
              links: Object.entries(ref.versions).map(([id, href]) => ({
                icon: href === ref.url ? "check" : void 0,
                id,
                title: id,
                href,
                onClick: (event, item) => {
                  event.preventDefault();
                  api.changeRefVersion(ref.id, item.href);
                  tooltip.onHide();
                }
              }))
            }
          )
        },
        /* @__PURE__ */ import_react9.default.createElement(CurrentVersion, { url: ref.url, versions: ref.versions })
      ) : null);
    }
  )
);
var ReadyMessage = ({ url, componentCount, leafCount }) => /* @__PURE__ */ import_react9.default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ import_react9.default.createElement(BlueIcon, { icon: "globe" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "View external Storybook"), /* @__PURE__ */ import_react9.default.createElement("div", null, "Explore ", componentCount, " components and ", leafCount, " stories in a new browser tab.")));
var LoginRequiredMessage = ({ loginUrl, id }) => {
  const open = (0, import_react9.useCallback)((e3) => {
    e3.preventDefault();
    const childWindow = globalWindow2.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
    const timer = setInterval(() => {
      if (!childWindow) {
        clearInterval(timer);
      } else if (childWindow.closed) {
        clearInterval(timer);
        document2.location.reload();
      }
    }, 1e3);
  }, []);
  return /* @__PURE__ */ import_react9.default.createElement(Message, { onClick: open }, /* @__PURE__ */ import_react9.default.createElement(YellowIcon, { icon: "lock" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "Log in required"), /* @__PURE__ */ import_react9.default.createElement("div", null, "You need to authenticate to view this Storybook's components.")));
};
var ReadDocsMessage = () => /* @__PURE__ */ import_react9.default.createElement(Message, { href: "https://storybook.js.org/docs/react/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ import_react9.default.createElement(GreenIcon, { icon: "document" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "Read Composition docs"), /* @__PURE__ */ import_react9.default.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
var ErrorOccurredMessage = ({ url }) => /* @__PURE__ */ import_react9.default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ import_react9.default.createElement(RedIcon, { icon: "alert" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "Something went wrong"), /* @__PURE__ */ import_react9.default.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
var LoadingMessage = ({ url }) => /* @__PURE__ */ import_react9.default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ import_react9.default.createElement(BlueIcon, { icon: "time" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "Please wait"), /* @__PURE__ */ import_react9.default.createElement("div", null, "This Storybook is loading.")));
var PerformanceDegradedMessage = () => /* @__PURE__ */ import_react9.default.createElement(
  Message,
  {
    href: "https://storybook.js.org/docs/react/sharing/storybook-composition#improve-your-storybook-composition",
    target: "_blank"
  },
  /* @__PURE__ */ import_react9.default.createElement(YellowIcon, { icon: "lightning" }),
  /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(MessageTitle, null, "Reduce lag"), /* @__PURE__ */ import_react9.default.createElement("div", null, "Learn how to speed up Composition performance."))
);

// src/components/sidebar/Tree.tsx
var import_react15 = __toESM(require_react());

// src/components/sidebar/TreeNode.tsx
var import_react12 = __toESM(require_react());

// src/components/sidebar/IconSymbols.tsx
var import_react10 = __toESM(require_react());
var Svg = newStyled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`;
var GROUP_ID = "icon--group";
var COMPONENT_ID = "icon--component";
var DOCUMENT_ID = "icon--document";
var STORY_ID = "icon--story";
var IconSymbols = () => {
  return /* @__PURE__ */ import_react10.default.createElement(Svg, { "data-chromatic": "ignore" }, /* @__PURE__ */ import_react10.default.createElement("symbol", { id: GROUP_ID }, /* @__PURE__ */ import_react10.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
      fill: "currentColor"
    }
  )), /* @__PURE__ */ import_react10.default.createElement("symbol", { id: COMPONENT_ID }, /* @__PURE__ */ import_react10.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
      fill: "currentColor"
    }
  )), /* @__PURE__ */ import_react10.default.createElement("symbol", { id: DOCUMENT_ID }, /* @__PURE__ */ import_react10.default.createElement(
    "path",
    {
      d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ import_react10.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
      fill: "currentColor"
    }
  )), /* @__PURE__ */ import_react10.default.createElement("symbol", { id: STORY_ID }, /* @__PURE__ */ import_react10.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
      fill: "currentColor"
    }
  )));
};
var UseSymbol = ({ type }) => {
  if (type === "group")
    return /* @__PURE__ */ import_react10.default.createElement("use", { xlinkHref: `#${GROUP_ID}` });
  if (type === "component")
    return /* @__PURE__ */ import_react10.default.createElement("use", { xlinkHref: `#${COMPONENT_ID}` });
  if (type === "document")
    return /* @__PURE__ */ import_react10.default.createElement("use", { xlinkHref: `#${DOCUMENT_ID}` });
  if (type === "story")
    return /* @__PURE__ */ import_react10.default.createElement("use", { xlinkHref: `#${STORY_ID}` });
  return null;
};

// src/components/sidebar/components/CollapseIcon.tsx
var import_react11 = __toESM(require_react());
var CollapseIconWrapper = newStyled.div(({ theme, isExpanded }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: curriedTransparentize$1(0.4, theme.textMutedColor),
  transform: isExpanded ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
}));
var CollapseIcon2 = ({ isExpanded }) => /* @__PURE__ */ import_react11.default.createElement(CollapseIconWrapper, { isExpanded }, /* @__PURE__ */ import_react11.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ import_react11.default.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
)));

// src/components/sidebar/TreeNode.tsx
var TypeIcon = newStyled.svg(
  ({ theme, type }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: (() => {
      if (type === "group")
        return theme.base === "dark" ? theme.color.primary : theme.color.ultraviolet;
      if (type === "component")
        return theme.color.secondary;
      if (type === "document")
        return theme.base === "dark" ? theme.color.gold : "#ff8300";
      if (type === "story")
        return theme.color.seafoam;
      return "currentColor";
    })()
  })
);
var BranchNode = newStyled.button(({ theme, depth = 0, isExpandable = false }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(isExpandable ? 8 : 22) + depth * 18}px`,
  color: "inherit",
  fontSize: `${theme.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4,
  "&:hover, &:focus": {
    background: curriedTransparentize$1(0.93, theme.color.secondary),
    outline: "none"
  }
}));
var LeafNode = newStyled.a(({ theme, depth = 0 }) => ({
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + depth * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${theme.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
}));
var RootNode = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${theme.typography.size.s1 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.textMutedColor
}));
var Wrapper = newStyled.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
});
var GroupNode = import_react12.default.memo(function GroupNode2({
  children,
  isExpanded = false,
  isExpandable = false,
  ...props
}) {
  return /* @__PURE__ */ import_react12.default.createElement(BranchNode, { isExpandable, tabIndex: -1, ...props }, /* @__PURE__ */ import_react12.default.createElement(Wrapper, null, isExpandable && /* @__PURE__ */ import_react12.default.createElement(CollapseIcon2, { isExpanded }), /* @__PURE__ */ import_react12.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" }, /* @__PURE__ */ import_react12.default.createElement(UseSymbol, { type: "group" }))), children);
});
var ComponentNode = import_react12.default.memo(
  function ComponentNode2({ theme, children, isExpanded, isExpandable, isSelected, ...props }) {
    return /* @__PURE__ */ import_react12.default.createElement(BranchNode, { isExpandable, tabIndex: -1, ...props }, /* @__PURE__ */ import_react12.default.createElement(Wrapper, null, isExpandable && /* @__PURE__ */ import_react12.default.createElement(CollapseIcon2, { isExpanded }), /* @__PURE__ */ import_react12.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "12", height: "12", type: "component" }, /* @__PURE__ */ import_react12.default.createElement(UseSymbol, { type: "component" }))), children);
  }
);
var DocumentNode = import_react12.default.memo(
  function DocumentNode2({ theme, children, docsMode, ...props }) {
    return /* @__PURE__ */ import_react12.default.createElement(LeafNode, { tabIndex: -1, ...props }, /* @__PURE__ */ import_react12.default.createElement(Wrapper, null, /* @__PURE__ */ import_react12.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ import_react12.default.createElement(UseSymbol, { type: "document" }))), children);
  }
);
var StoryNode = import_react12.default.memo(function StoryNode2({
  theme,
  children,
  ...props
}) {
  return /* @__PURE__ */ import_react12.default.createElement(LeafNode, { tabIndex: -1, ...props }, /* @__PURE__ */ import_react12.default.createElement(Wrapper, null, /* @__PURE__ */ import_react12.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ import_react12.default.createElement(UseSymbol, { type: "story" }))), children);
});

// src/components/sidebar/useExpanded.ts
var import_throttle = __toESM(require_throttle());
var import_react13 = __toESM(require_react());

// src/keybinding.ts
var codeToKeyMap = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
};
var allFalse = { alt: false, ctrl: false, meta: false, shift: false };
var matchesModifiers = (modifiers, event) => {
  const { alt, ctrl, meta, shift } = modifiers === false ? allFalse : modifiers;
  if (typeof alt === "boolean" && alt !== event.altKey)
    return false;
  if (typeof ctrl === "boolean" && ctrl !== event.ctrlKey)
    return false;
  if (typeof meta === "boolean" && meta !== event.metaKey)
    return false;
  if (typeof shift === "boolean" && shift !== event.shiftKey)
    return false;
  return true;
};
var matchesKeyCode = (code, event) => {
  return event.code ? event.code === code : event.key === codeToKeyMap[code];
};

// src/utils/tree.ts
var import_memoizerific = __toESM(require_memoizerific());
var { document: document3, window: globalWindow3 } = scope;
var createId = (itemId, refId) => !refId || refId === DEFAULT_REF_ID ? itemId : `${refId}_${itemId}`;
var getLink = (item, refId) => {
  return `${document3.location.pathname}?path=/${item.type}/${createId(item.id, refId)}`;
};
var get = (0, import_memoizerific.default)(1e3)((id, dataset) => dataset[id]);
var getParent = (0, import_memoizerific.default)(1e3)((id, dataset) => {
  const item = get(id, dataset);
  return item && item.type !== "root" ? get(item.parent, dataset) : void 0;
});
var getParents = (0, import_memoizerific.default)(1e3)((id, dataset) => {
  const parent = getParent(id, dataset);
  return parent ? [parent, ...getParents(parent.id, dataset)] : [];
});
var getAncestorIds = (0, import_memoizerific.default)(1e3)(
  (data, id) => getParents(id, data).map((item) => item.id)
);
var getDescendantIds = (0, import_memoizerific.default)(1e3)((data, id, skipLeafs) => {
  const entry = data[id];
  const children = entry.type === "story" || entry.type === "docs" ? [] : entry.children;
  return children.reduce((acc, childId) => {
    const child = data[childId];
    if (!child || skipLeafs && (child.type === "story" || child.type === "docs"))
      return acc;
    acc.push(childId, ...getDescendantIds(data, childId, skipLeafs));
    return acc;
  }, []);
});
function getPath(item, ref) {
  const parent = item.type !== "root" && item.parent ? ref.index[item.parent] : null;
  if (parent)
    return [...getPath(parent, ref), parent.name];
  return ref.id === DEFAULT_REF_ID ? [] : [ref.title || ref.id];
}
var searchItem = (item, ref) => {
  return { ...item, refId: ref.id, path: getPath(item, ref) };
};
function cycle(array, index, delta) {
  let next = index + delta % array.length;
  if (next < 0)
    next = array.length + next;
  if (next >= array.length)
    next -= array.length;
  return next;
}
var scrollIntoView = (element, center = false) => {
  if (!element)
    return;
  const { top, bottom } = element.getBoundingClientRect();
  const isInView = top >= 0 && bottom <= (globalWindow3.innerHeight || document3.documentElement.clientHeight);
  if (!isInView)
    element.scrollIntoView({ block: center ? "center" : "nearest" });
};
var getStateType = (isLoading, isAuthRequired, isError, isEmpty) => {
  switch (true) {
    case isAuthRequired:
      return "auth";
    case isError:
      return "error";
    case isLoading:
      return "loading";
    case isEmpty:
      return "empty";
    default:
      return "ready";
  }
};
var isAncestor = (element, maybeAncestor) => {
  if (!element || !maybeAncestor)
    return false;
  if (element === maybeAncestor)
    return true;
  return isAncestor(element.parentElement, maybeAncestor);
};
var removeNoiseFromName = (storyName) => storyName.replaceAll(/(\s|-|_)/gi, "");
var isStoryHoistable = (storyName, componentName) => removeNoiseFromName(storyName) === removeNoiseFromName(componentName);

// src/components/sidebar/useExpanded.ts
var { document: document4 } = scope;
var initializeExpanded = ({
  refId,
  data,
  initialExpanded,
  highlightedRef,
  rootIds
}) => {
  const highlightedAncestors = highlightedRef.current?.refId === refId ? getAncestorIds(data, highlightedRef.current?.itemId) : [];
  return [...rootIds, ...highlightedAncestors].reduce(
    (acc, id) => Object.assign(acc, { [id]: id in initialExpanded ? initialExpanded[id] : true }),
    {}
  );
};
var noop = () => {
};
var useExpanded = ({
  containerRef,
  isBrowsing,
  refId,
  data,
  initialExpanded,
  rootIds,
  highlightedRef,
  setHighlightedItemId,
  selectedStoryId,
  onSelectStoryId
}) => {
  const api = useStorybookApi();
  const [expanded, setExpanded] = (0, import_react13.useReducer)(
    (state, { ids, value }) => ids.reduce((acc, id) => Object.assign(acc, { [id]: value }), { ...state }),
    { refId, data, highlightedRef, rootIds, initialExpanded },
    initializeExpanded
  );
  const getElementByDataItemId = (0, import_react13.useCallback)(
    (id) => containerRef.current?.querySelector(`[data-item-id="${id}"]`),
    [containerRef]
  );
  const highlightElement = (0, import_react13.useCallback)(
    (element) => {
      setHighlightedItemId(element.getAttribute("data-item-id"));
      scrollIntoView(element);
    },
    [setHighlightedItemId]
  );
  const updateExpanded = (0, import_react13.useCallback)(
    ({ ids, value }) => {
      setExpanded({ ids, value });
      if (ids.length === 1) {
        const element = containerRef.current?.querySelector(
          `[data-item-id="${ids[0]}"][data-ref-id="${refId}"]`
        );
        if (element)
          highlightElement(element);
      }
    },
    [containerRef, highlightElement, refId]
  );
  (0, import_react13.useEffect)(() => {
    setExpanded({ ids: getAncestorIds(data, selectedStoryId), value: true });
  }, [data, selectedStoryId]);
  const collapseAll = (0, import_react13.useCallback)(() => {
    const ids = Object.keys(data).filter((id) => !rootIds.includes(id));
    setExpanded({ ids, value: false });
  }, [data, rootIds]);
  const expandAll = (0, import_react13.useCallback)(() => {
    setExpanded({ ids: Object.keys(data), value: true });
  }, [data]);
  (0, import_react13.useEffect)(() => {
    if (!api)
      return noop;
    api.on(STORIES_COLLAPSE_ALL, collapseAll);
    api.on(STORIES_EXPAND_ALL, expandAll);
    return () => {
      api.off(STORIES_COLLAPSE_ALL, collapseAll);
      api.off(STORIES_EXPAND_ALL, expandAll);
    };
  }, [api, collapseAll, expandAll]);
  (0, import_react13.useEffect)(() => {
    const menuElement = document4.getElementById("storybook-explorer-menu");
    const navigateTree = (0, import_throttle.default)((event) => {
      const highlightedItemId = highlightedRef.current?.refId === refId && highlightedRef.current?.itemId;
      if (!isBrowsing || !containerRef.current || !highlightedItemId || event.repeat)
        return;
      if (!matchesModifiers(false, event))
        return;
      const isEnter = matchesKeyCode("Enter", event);
      const isSpace = matchesKeyCode("Space", event);
      const isArrowLeft = matchesKeyCode("ArrowLeft", event);
      const isArrowRight = matchesKeyCode("ArrowRight", event);
      if (!(isEnter || isSpace || isArrowLeft || isArrowRight))
        return;
      const highlightedElement = getElementByDataItemId(highlightedItemId);
      if (!highlightedElement || highlightedElement.getAttribute("data-ref-id") !== refId)
        return;
      const target = event.target;
      if (!isAncestor(menuElement, target) && !isAncestor(target, menuElement))
        return;
      if (target.hasAttribute("data-action")) {
        if (isEnter || isSpace)
          return;
        target.blur();
      }
      const type = highlightedElement.getAttribute("data-nodetype");
      if ((isEnter || isSpace) && ["component", "story", "document"].includes(type)) {
        onSelectStoryId(highlightedItemId);
      }
      const isExpanded = highlightedElement.getAttribute("aria-expanded");
      if (isArrowLeft) {
        if (isExpanded === "true") {
          setExpanded({ ids: [highlightedItemId], value: false });
          return;
        }
        const parentId = highlightedElement.getAttribute("data-parent-id");
        const parentElement = parentId && getElementByDataItemId(parentId);
        if (parentElement && parentElement.getAttribute("data-highlightable") === "true") {
          highlightElement(parentElement);
          return;
        }
        setExpanded({ ids: getDescendantIds(data, highlightedItemId, true), value: false });
        return;
      }
      if (isArrowRight) {
        if (isExpanded === "false") {
          updateExpanded({ ids: [highlightedItemId], value: true });
        } else if (isExpanded === "true") {
          updateExpanded({ ids: getDescendantIds(data, highlightedItemId, true), value: true });
        }
      }
    }, 60);
    document4.addEventListener("keydown", navigateTree);
    return () => document4.removeEventListener("keydown", navigateTree);
  }, [
    containerRef,
    isBrowsing,
    refId,
    data,
    highlightedRef,
    setHighlightedItemId,
    onSelectStoryId
  ]);
  return [expanded, updateExpanded];
};

// src/utils/status.tsx
var import_react14 = __toESM(require_react());
var SmallIcons = newStyled(Icons)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
});
var LoadingIcons = newStyled(SmallIcons)(({ theme: { animation, color, base } }) => ({
  // specificity hack
  animation: `${animation.glow} 1.5s ease-in-out infinite`,
  color: base === "light" ? color.mediumdark : color.darker
}));
var statusPriority = ["unknown", "pending", "success", "warn", "error"];
var statusMapping = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ import_react14.default.createElement(LoadingIcons, { key: "icon", icon: "circle" }), "currentColor"],
  success: [/* @__PURE__ */ import_react14.default.createElement(SmallIcons, { key: "icon", icon: "circle", style: { color: "green" } }), "currentColor"],
  warn: [/* @__PURE__ */ import_react14.default.createElement(SmallIcons, { key: "icon", icon: "circle", style: { color: "orange" } }), "#A15C20"],
  error: [/* @__PURE__ */ import_react14.default.createElement(SmallIcons, { key: "icon", icon: "circle", style: { color: "red" } }), "brown"]
};
var getHighestStatus = (statuses) => {
  return statusPriority.reduce(
    (acc, status) => statuses.includes(status) ? status : acc,
    "unknown"
  );
};
function getGroupStatus(collapsedData, status) {
  return Object.values(collapsedData).reduce((acc, item) => {
    if (item.type === "group" || item.type === "component") {
      const leafs = getDescendantIds(collapsedData, item.id, false).map((id) => collapsedData[id]).filter((i3) => i3.type === "story");
      const combinedStatus = getHighestStatus(
        leafs.flatMap((story) => Object.values(status?.[story.id] || {})).map((s2) => s2.status)
      );
      if (combinedStatus) {
        acc[item.id] = combinedStatus;
      }
    }
    return acc;
  }, {});
}

// src/components/sidebar/Tree.tsx
var Container = newStyled.div((props) => ({
  marginTop: props.hasOrphans ? 20 : 0,
  marginBottom: 20
}));
var Action = newStyled.button(
  ({ theme, height, width }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: width || 20,
    height: height || 20,
    boxSizing: "border-box",
    margin: 0,
    marginLeft: "auto",
    padding: 0,
    outline: 0,
    lineHeight: "normal",
    background: "none",
    border: `1px solid transparent`,
    borderRadius: "100%",
    cursor: "pointer",
    transition: "all 150ms ease-out",
    color: theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText),
    "&:hover": {
      color: theme.color.secondary
    },
    "&:focus": {
      color: theme.color.secondary,
      borderColor: theme.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    },
    svg: {
      width: 10,
      height: 10
    }
  })
);
var CollapseButton = newStyled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: curriedTransparentize$1(0.93, theme.color.secondary)
  }
}));
var LeafNodeStyleWrapper = newStyled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: 20,
  color: theme.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  "&:hover, &:focus": {
    outline: "none",
    background: curriedTransparentize$1(0.93, theme.color.secondary)
  },
  '&[data-selected="true"]': {
    color: theme.color.lightest,
    background: theme.color.secondary,
    fontWeight: theme.typography.weight.bold,
    "&:hover, &:focus": {
      background: theme.color.secondary
    },
    svg: { color: theme.color.lightest }
  },
  a: { color: "currentColor" }
}));
var SkipToContentLink = newStyled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: theme.color.secondary,
      width: "auto"
    }
  }
}));
var Node = import_react15.default.memo(function Node2({
  item,
  status,
  refId,
  docsMode,
  isOrphan,
  isDisplayed,
  isSelected,
  isFullyExpanded,
  color,
  setFullyExpanded,
  isExpanded,
  setExpanded,
  onSelectStoryId,
  api
}) {
  const { isDesktop, isMobile, setMobileMenuOpen } = useLayout();
  if (!isDisplayed) {
    return null;
  }
  const id = createId(item.id, refId);
  if (item.type === "story" || item.type === "docs") {
    const LeafNode2 = item.type === "docs" ? DocumentNode : StoryNode;
    const statusValue = getHighestStatus(Object.values(status || {}).map((s2) => s2.status));
    const [icon, textColor] = statusMapping[statusValue];
    return /* @__PURE__ */ import_react15.default.createElement(
      LeafNodeStyleWrapper,
      {
        "data-selected": isSelected,
        "data-ref-id": refId,
        "data-item-id": item.id,
        "data-parent-id": item.parent,
        "data-nodetype": item.type === "docs" ? "document" : "story",
        "data-highlightable": isDisplayed,
        className: "sidebar-item"
      },
      /* @__PURE__ */ import_react15.default.createElement(
        LeafNode2,
        {
          style: isSelected ? {} : { color: textColor },
          key: id,
          href: getLink(item, refId),
          id,
          depth: isOrphan ? item.depth : item.depth - 1,
          onClick: (event) => {
            event.preventDefault();
            onSelectStoryId(item.id);
            if (isMobile)
              setMobileMenuOpen(false);
          },
          ...item.type === "docs" && { docsMode }
        },
        item.renderLabel?.(item) || item.name
      ),
      isSelected && /* @__PURE__ */ import_react15.default.createElement(SkipToContentLink, { asChild: true }, /* @__PURE__ */ import_react15.default.createElement("a", { href: "#storybook-preview-wrapper" }, "Skip to canvas")),
      icon ? /* @__PURE__ */ import_react15.default.createElement(
        WithTooltip,
        {
          placement: "top",
          style: { display: "flex" },
          tooltip: () => /* @__PURE__ */ import_react15.default.createElement(
            TooltipLinkList,
            {
              links: Object.entries(status || {}).map(([k2, v2]) => ({
                id: k2,
                title: v2.title,
                description: v2.description,
                right: statusMapping[v2.status][0]
              }))
            }
          ),
          closeOnOutsideClick: true
        },
        /* @__PURE__ */ import_react15.default.createElement(Action, { type: "button", height: 22 }, icon)
      ) : null
    );
  }
  if (item.type === "root") {
    return /* @__PURE__ */ import_react15.default.createElement(
      RootNode,
      {
        key: id,
        id,
        className: "sidebar-subheading",
        "data-ref-id": refId,
        "data-item-id": item.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ import_react15.default.createElement(
        CollapseButton,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (event) => {
            event.preventDefault();
            setExpanded({ ids: [item.id], value: !isExpanded });
          },
          "aria-expanded": isExpanded
        },
        /* @__PURE__ */ import_react15.default.createElement(CollapseIcon2, { isExpanded }),
        item.renderLabel?.(item) || item.name
      ),
      isExpanded && /* @__PURE__ */ import_react15.default.createElement(
        IconButton,
        {
          className: "sidebar-subheading-action",
          "aria-label": isFullyExpanded ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": isFullyExpanded,
          onClick: (event) => {
            event.preventDefault();
            setFullyExpanded();
          }
        },
        isFullyExpanded ? /* @__PURE__ */ import_react15.default.createElement(CollapseIcon, null) : /* @__PURE__ */ import_react15.default.createElement(ExpandAltIcon, null)
      )
    );
  }
  if (item.type === "component" || item.type === "group") {
    const BranchNode2 = item.type === "component" ? ComponentNode : GroupNode;
    return /* @__PURE__ */ import_react15.default.createElement(
      BranchNode2,
      {
        key: id,
        id,
        style: color ? { color } : {},
        className: "sidebar-item",
        "data-ref-id": refId,
        "data-item-id": item.id,
        "data-parent-id": item.parent,
        "data-nodetype": item.type === "component" ? "component" : "group",
        "data-highlightable": isDisplayed,
        "aria-controls": item.children && item.children[0],
        "aria-expanded": isExpanded,
        depth: isOrphan ? item.depth : item.depth - 1,
        isComponent: item.type === "component",
        isExpandable: item.children && item.children.length > 0,
        isExpanded,
        onClick: (event) => {
          event.preventDefault();
          setExpanded({ ids: [item.id], value: !isExpanded });
          if (item.type === "component" && !isExpanded && isDesktop)
            onSelectStoryId(item.id);
        },
        onMouseEnter: () => {
          if (item.type === "component") {
            api.emit(PRELOAD_ENTRIES, {
              ids: [item.children[0]],
              options: { target: refId }
            });
          }
        }
      },
      item.renderLabel?.(item) || item.name
    );
  }
  return null;
});
var Root = import_react15.default.memo(function Root2({
  setExpanded,
  isFullyExpanded,
  expandableDescendants,
  ...props
}) {
  const setFullyExpanded = (0, import_react15.useCallback)(
    () => setExpanded({ ids: expandableDescendants, value: !isFullyExpanded }),
    [setExpanded, isFullyExpanded, expandableDescendants]
  );
  return /* @__PURE__ */ import_react15.default.createElement(
    Node,
    {
      ...props,
      setExpanded,
      isFullyExpanded,
      setFullyExpanded
    }
  );
});
var Tree = import_react15.default.memo(function Tree2({
  isBrowsing,
  isMain,
  refId,
  data,
  status,
  docsMode,
  highlightedRef,
  setHighlightedItemId,
  selectedStoryId,
  onSelectStoryId
}) {
  const containerRef = (0, import_react15.useRef)(null);
  const api = useStorybookApi();
  const [rootIds, orphanIds, initialExpanded] = (0, import_react15.useMemo)(
    () => Object.keys(data).reduce(
      (acc, id) => {
        const item = data[id];
        if (item.type === "root")
          acc[0].push(id);
        else if (!item.parent)
          acc[1].push(id);
        if (item.type === "root" && item.startCollapsed)
          acc[2][id] = false;
        return acc;
      },
      [[], [], {}]
    ),
    [data]
  );
  const { expandableDescendants } = (0, import_react15.useMemo)(() => {
    return [...orphanIds, ...rootIds].reduce(
      (acc, nodeId) => {
        acc.expandableDescendants[nodeId] = getDescendantIds(data, nodeId, false).filter(
          (d2) => !["story", "docs"].includes(data[d2].type)
        );
        return acc;
      },
      { orphansFirst: [], expandableDescendants: {} }
    );
  }, [data, rootIds, orphanIds]);
  const singleStoryComponentIds = (0, import_react15.useMemo)(() => {
    return Object.keys(data).filter((id) => {
      const entry = data[id];
      if (entry.type !== "component")
        return false;
      const { children = [], name } = entry;
      if (children.length !== 1)
        return false;
      const onlyChild = data[children[0]];
      if (onlyChild.type === "docs")
        return true;
      if (onlyChild.type === "story")
        return isStoryHoistable(onlyChild.name, name);
      return false;
    });
  }, [data]);
  const collapsedItems = (0, import_react15.useMemo)(
    () => Object.keys(data).filter((id) => !singleStoryComponentIds.includes(id)),
    [singleStoryComponentIds]
  );
  const collapsedData = (0, import_react15.useMemo)(() => {
    return singleStoryComponentIds.reduce(
      (acc, id) => {
        const { children, parent, name } = data[id];
        const [childId] = children;
        if (parent) {
          const siblings = [...data[parent].children];
          siblings[siblings.indexOf(id)] = childId;
          acc[parent] = { ...data[parent], children: siblings };
        }
        acc[childId] = {
          ...data[childId],
          name,
          parent,
          depth: data[childId].depth - 1
        };
        return acc;
      },
      { ...data }
    );
  }, [data]);
  const ancestry = (0, import_react15.useMemo)(() => {
    return collapsedItems.reduce(
      (acc, id) => Object.assign(acc, { [id]: getAncestorIds(collapsedData, id) }),
      {}
    );
  }, [collapsedItems, collapsedData]);
  const [expanded, setExpanded] = useExpanded({
    containerRef,
    isBrowsing,
    refId,
    data: collapsedData,
    initialExpanded,
    rootIds,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId
  });
  const groupStatus = (0, import_react15.useMemo)(() => getGroupStatus(collapsedData, status), [collapsedData, status]);
  return /* @__PURE__ */ import_react15.default.createElement(Container, { ref: containerRef, hasOrphans: isMain && orphanIds.length > 0 }, /* @__PURE__ */ import_react15.default.createElement(IconSymbols, null), collapsedItems.map((itemId) => {
    const item = collapsedData[itemId];
    const id = createId(itemId, refId);
    if (item.type === "root") {
      const descendants = expandableDescendants[item.id];
      const isFullyExpanded = descendants.every((d2) => expanded[d2]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ import_react15.default.createElement(
          Root,
          {
            key: id,
            item,
            refId,
            isOrphan: false,
            isDisplayed: true,
            isSelected: selectedStoryId === itemId,
            isExpanded: !!expanded[itemId],
            setExpanded,
            isFullyExpanded,
            expandableDescendants: descendants,
            onSelectStoryId
          }
        )
      );
    }
    const isDisplayed = !item.parent || ancestry[itemId].every((a2) => expanded[a2]);
    const color = groupStatus[itemId] ? statusMapping[groupStatus[itemId]][1] : null;
    return /* @__PURE__ */ import_react15.default.createElement(
      Node,
      {
        api,
        key: id,
        item,
        status: status?.[itemId],
        refId,
        color,
        docsMode,
        isOrphan: orphanIds.some((oid) => itemId === oid || itemId.startsWith(`${oid}-`)),
        isDisplayed,
        isSelected: selectedStoryId === itemId,
        isExpanded: !!expanded[itemId],
        setExpanded,
        onSelectStoryId
      }
    );
  }));
});

// src/components/sidebar/Refs.tsx
var Wrapper2 = newStyled.div(({ isMain }) => ({
  position: "relative",
  marginTop: isMain ? void 0 : 0
}));
var RefHead = newStyled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${theme.appBorderColor}`,
  color: theme.base === "light" ? theme.color.defaultText : curriedTransparentize$1(0.2, theme.color.defaultText)
}));
var RefTitle = newStyled.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
});
var CollapseButton2 = newStyled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  "&:focus": {
    borderColor: theme.color.secondary,
    "span:first-of-type": {
      borderLeftColor: theme.color.secondary
    }
  }
}));
var Ref = import_react16.default.memo(
  function Ref2(props) {
    const { docsOptions } = useStorybookState();
    const api = useStorybookApi();
    const {
      index,
      id: refId,
      title = refId,
      isLoading: isLoadingMain,
      isBrowsing,
      selectedStoryId,
      highlightedRef,
      setHighlighted,
      loginUrl,
      type,
      expanded = true,
      indexError,
      previewInitialized
    } = props;
    const length = (0, import_react16.useMemo)(() => index ? Object.keys(index).length : 0, [index]);
    const indicatorRef = (0, import_react16.useRef)(null);
    const isMain = refId === DEFAULT_REF_ID;
    const isLoadingInjected = type === "auto-inject" && !previewInitialized || type === "server-checked";
    const isLoading = isLoadingMain || isLoadingInjected || type === "unknown";
    const isError = !!indexError;
    const isEmpty = !isLoading && length === 0;
    const isAuthRequired = !!loginUrl && length === 0;
    const state = getStateType(isLoading, isAuthRequired, isError, isEmpty);
    const [isExpanded, setExpanded] = (0, import_react16.useState)(expanded);
    (0, import_react16.useEffect)(() => {
      if (index && selectedStoryId && index[selectedStoryId]) {
        setExpanded(true);
      }
    }, [setExpanded, index, selectedStoryId]);
    const handleClick = (0, import_react16.useCallback)(() => setExpanded((value) => !value), [setExpanded]);
    const setHighlightedItemId = (0, import_react16.useCallback)(
      (itemId) => setHighlighted({ itemId, refId }),
      [setHighlighted]
    );
    const onSelectStoryId = (0, import_react16.useCallback)(
      (storyId) => api && api.selectStory(storyId, void 0, { ref: !isMain && refId }),
      [api, isMain, refId]
    );
    return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, isMain || /* @__PURE__ */ import_react16.default.createElement(
      RefHead,
      {
        "aria-label": `${isExpanded ? "Hide" : "Show"} ${title} stories`,
        "aria-expanded": isExpanded
      },
      /* @__PURE__ */ import_react16.default.createElement(CollapseButton2, { "data-action": "collapse-ref", onClick: handleClick }, /* @__PURE__ */ import_react16.default.createElement(CollapseIcon2, { isExpanded }), /* @__PURE__ */ import_react16.default.createElement(RefTitle, { title }, title)),
      /* @__PURE__ */ import_react16.default.createElement(RefIndicator, { ...props, state, ref: indicatorRef })
    ), isExpanded && /* @__PURE__ */ import_react16.default.createElement(Wrapper2, { "data-title": title, isMain }, state === "auth" && /* @__PURE__ */ import_react16.default.createElement(AuthBlock, { id: refId, loginUrl }), state === "error" && /* @__PURE__ */ import_react16.default.createElement(ErrorBlock, { error: indexError }), state === "loading" && /* @__PURE__ */ import_react16.default.createElement(LoaderBlock, { isMain }), state === "empty" && /* @__PURE__ */ import_react16.default.createElement(EmptyBlock, { isMain }), state === "ready" && /* @__PURE__ */ import_react16.default.createElement(
      Tree,
      {
        status: props.status,
        isBrowsing,
        isMain,
        refId,
        data: index,
        docsMode: docsOptions.docsMode,
        selectedStoryId,
        onSelectStoryId,
        highlightedRef,
        setHighlightedItemId
      }
    )));
  }
);

// src/components/sidebar/useHighlighted.ts
var import_react17 = __toESM(require_react());
var { document: document5, window: globalWindow4 } = scope;
var fromSelection = (selection) => selection ? { itemId: selection.storyId, refId: selection.refId } : null;
var useHighlighted = ({
  containerRef,
  isLoading,
  isBrowsing,
  dataset,
  selected
}) => {
  const initialHighlight = fromSelection(selected);
  const highlightedRef = (0, import_react17.useRef)(initialHighlight);
  const [highlighted, setHighlighted] = (0, import_react17.useState)(initialHighlight);
  const api = useStorybookApi();
  const updateHighlighted = (0, import_react17.useCallback)(
    (highlight) => {
      highlightedRef.current = highlight;
      setHighlighted(highlight);
    },
    [highlightedRef]
  );
  const highlightElement = (0, import_react17.useCallback)(
    (element, center = false) => {
      const itemId = element.getAttribute("data-item-id");
      const refId = element.getAttribute("data-ref-id");
      if (!itemId || !refId)
        return;
      updateHighlighted({ itemId, refId });
      scrollIntoView(element, center);
    },
    [updateHighlighted]
  );
  (0, import_react17.useEffect)(() => {
    const highlight = fromSelection(selected);
    updateHighlighted(highlight);
    if (highlight) {
      const { itemId, refId } = highlight;
      setTimeout(() => {
        scrollIntoView(
          containerRef.current?.querySelector(`[data-item-id="${itemId}"][data-ref-id="${refId}"]`),
          true
          // make sure it's clearly visible by centering it
        );
      }, 0);
    }
  }, [dataset, highlightedRef, containerRef, selected]);
  (0, import_react17.useEffect)(() => {
    const menuElement = document5.getElementById("storybook-explorer-menu");
    let lastRequestId;
    const navigateTree = (event) => {
      if (isLoading || !isBrowsing || !containerRef.current)
        return;
      if (!matchesModifiers(false, event))
        return;
      const isArrowUp = matchesKeyCode("ArrowUp", event);
      const isArrowDown = matchesKeyCode("ArrowDown", event);
      if (!(isArrowUp || isArrowDown))
        return;
      const requestId = globalWindow4.requestAnimationFrame(() => {
        globalWindow4.cancelAnimationFrame(lastRequestId);
        lastRequestId = requestId;
        const target = event.target;
        if (!isAncestor(menuElement, target) && !isAncestor(target, menuElement))
          return;
        if (target.hasAttribute("data-action"))
          target.blur();
        const highlightable = Array.from(
          containerRef.current.querySelectorAll("[data-highlightable=true]")
        );
        const currentIndex = highlightable.findIndex(
          (el) => el.getAttribute("data-item-id") === highlightedRef.current?.itemId && el.getAttribute("data-ref-id") === highlightedRef.current?.refId
        );
        const nextIndex = cycle(highlightable, currentIndex, isArrowUp ? -1 : 1);
        const didRunAround = isArrowUp ? nextIndex === highlightable.length - 1 : nextIndex === 0;
        highlightElement(highlightable[nextIndex], didRunAround);
        if (highlightable[nextIndex].getAttribute("data-nodetype") === "component") {
          const { itemId, refId } = highlightedRef.current;
          const item = api.resolveStory(itemId, refId === "storybook_internal" ? void 0 : refId);
          if (item.type === "component") {
            api.emit(PRELOAD_ENTRIES, {
              ids: [item.children[0]],
              options: { target: refId }
            });
          }
        }
      });
    };
    document5.addEventListener("keydown", navigateTree);
    return () => document5.removeEventListener("keydown", navigateTree);
  }, [isLoading, isBrowsing, highlightedRef, highlightElement]);
  return [highlighted, updateHighlighted, highlightedRef];
};

// src/components/sidebar/HighlightStyles.tsx
var import_react18 = __toESM(require_react());
var HighlightStyles = ({ refId, itemId }) => /* @__PURE__ */ import_react18.default.createElement(
  Global,
  {
    styles: ({ color }) => {
      const background = curriedTransparentize$1(0.85, color.secondary);
      return {
        [`[data-ref-id="${refId}"][data-item-id="${itemId}"]:not([data-selected="true"])`]: {
          [`&[data-nodetype="component"], &[data-nodetype="group"]`]: {
            background,
            "&:hover, &:focus": { background }
          },
          [`&[data-nodetype="story"], &[data-nodetype="document"]`]: {
            color: color.defaultText,
            background,
            "&:hover, &:focus": { background }
          }
        }
      };
    }
  }
);

// src/components/sidebar/Explorer.tsx
var Explorer = import_react19.default.memo(function Explorer2({
  isLoading,
  isBrowsing,
  dataset,
  selected
}) {
  const containerRef = (0, import_react19.useRef)(null);
  const [highlighted, setHighlighted, highlightedRef] = useHighlighted({
    containerRef,
    isLoading,
    isBrowsing,
    dataset,
    selected
  });
  return /* @__PURE__ */ import_react19.default.createElement(
    "div",
    {
      ref: containerRef,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": highlighted?.refId,
      "data-highlighted-item-id": highlighted?.itemId
    },
    highlighted && /* @__PURE__ */ import_react19.default.createElement(HighlightStyles, { ...highlighted }),
    dataset.entries.map(([refId, ref]) => /* @__PURE__ */ import_react19.default.createElement(
      Ref,
      {
        ...ref,
        key: refId,
        isLoading,
        isBrowsing,
        selectedStoryId: selected?.refId === ref.id ? selected.storyId : null,
        highlightedRef,
        setHighlighted
      }
    ))
  );
});

// ../../node_modules/downshift/dist/downshift.esm.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react20 = __toESM(require_react());
var import_react_is = __toESM(require_react_is2());

// ../../node_modules/compute-scroll-into-view/dist/index.mjs
function t2(t3) {
  return "object" == typeof t3 && null != t3 && 1 === t3.nodeType;
}
function e2(t3, e3) {
  return (!e3 || "hidden" !== t3) && "visible" !== t3 && "clip" !== t3;
}
function n2(t3, n3) {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    var r3 = getComputedStyle(t3, null);
    return e2(r3.overflowY, n3) || e2(r3.overflowX, n3) || function(t4) {
      var e3 = function(t5) {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      }(t4);
      return !!e3 && (e3.clientHeight < t4.scrollHeight || e3.clientWidth < t4.scrollWidth);
    }(t3);
  }
  return false;
}
function r2(t3, e3, n3, r3, i3, o2, l2, d2) {
  return o2 < t3 && l2 > e3 || o2 > t3 && l2 < e3 ? 0 : o2 <= t3 && d2 <= n3 || l2 >= e3 && d2 >= n3 ? o2 - t3 - r3 : l2 > e3 && d2 < n3 || o2 < t3 && d2 > n3 ? l2 - e3 + i3 : 0;
}
var i2 = function(e3, i3) {
  var o2 = window, l2 = i3.scrollMode, d2 = i3.block, f2 = i3.inline, h2 = i3.boundary, u2 = i3.skipOverflowHiddenElements, s2 = "function" == typeof h2 ? h2 : function(t3) {
    return t3 !== h2;
  };
  if (!t2(e3))
    throw new TypeError("Invalid target");
  for (var a2, c2, g2 = document.scrollingElement || document.documentElement, p2 = [], m2 = e3; t2(m2) && s2(m2); ) {
    if ((m2 = null == (c2 = (a2 = m2).parentElement) ? a2.getRootNode().host || null : c2) === g2) {
      p2.push(m2);
      break;
    }
    null != m2 && m2 === document.body && n2(m2) && !n2(document.documentElement) || null != m2 && n2(m2, u2) && p2.push(m2);
  }
  for (var w2 = o2.visualViewport ? o2.visualViewport.width : innerWidth, v2 = o2.visualViewport ? o2.visualViewport.height : innerHeight, W2 = window.scrollX || pageXOffset, H2 = window.scrollY || pageYOffset, b2 = e3.getBoundingClientRect(), y2 = b2.height, E2 = b2.width, M2 = b2.top, V = b2.right, x2 = b2.bottom, I2 = b2.left, C2 = "start" === d2 || "nearest" === d2 ? M2 : "end" === d2 ? x2 : M2 + y2 / 2, R2 = "center" === f2 ? I2 + E2 / 2 : "end" === f2 ? V : I2, T2 = [], k2 = 0; k2 < p2.length; k2++) {
    var B2 = p2[k2], D2 = B2.getBoundingClientRect(), O2 = D2.height, X = D2.width, Y2 = D2.top, L2 = D2.right, S2 = D2.bottom, j2 = D2.left;
    if ("if-needed" === l2 && M2 >= 0 && I2 >= 0 && x2 <= v2 && V <= w2 && M2 >= Y2 && x2 <= S2 && I2 >= j2 && V <= L2)
      return T2;
    var N2 = getComputedStyle(B2), q2 = parseInt(N2.borderLeftWidth, 10), z2 = parseInt(N2.borderTopWidth, 10), A2 = parseInt(N2.borderRightWidth, 10), F2 = parseInt(N2.borderBottomWidth, 10), G2 = 0, J = 0, K2 = "offsetWidth" in B2 ? B2.offsetWidth - B2.clientWidth - q2 - A2 : 0, P2 = "offsetHeight" in B2 ? B2.offsetHeight - B2.clientHeight - z2 - F2 : 0, Q = "offsetWidth" in B2 ? 0 === B2.offsetWidth ? 0 : X / B2.offsetWidth : 0, U2 = "offsetHeight" in B2 ? 0 === B2.offsetHeight ? 0 : O2 / B2.offsetHeight : 0;
    if (g2 === B2)
      G2 = "start" === d2 ? C2 : "end" === d2 ? C2 - v2 : "nearest" === d2 ? r2(H2, H2 + v2, v2, z2, F2, H2 + C2, H2 + C2 + y2, y2) : C2 - v2 / 2, J = "start" === f2 ? R2 : "center" === f2 ? R2 - w2 / 2 : "end" === f2 ? R2 - w2 : r2(W2, W2 + w2, w2, q2, A2, W2 + R2, W2 + R2 + E2, E2), G2 = Math.max(0, G2 + H2), J = Math.max(0, J + W2);
    else {
      G2 = "start" === d2 ? C2 - Y2 - z2 : "end" === d2 ? C2 - S2 + F2 + P2 : "nearest" === d2 ? r2(Y2, S2, O2, z2, F2 + P2, C2, C2 + y2, y2) : C2 - (Y2 + O2 / 2) + P2 / 2, J = "start" === f2 ? R2 - j2 - q2 : "center" === f2 ? R2 - (j2 + X / 2) + K2 / 2 : "end" === f2 ? R2 - L2 + A2 + K2 : r2(j2, L2, X, q2, A2 + K2, R2, R2 + E2, E2);
      var Z = B2.scrollLeft, $ = B2.scrollTop;
      C2 += $ - (G2 = Math.max(0, Math.min($ + G2 / U2, B2.scrollHeight - O2 / U2 + P2))), R2 += Z - (J = Math.max(0, Math.min(Z + J / Q, B2.scrollWidth - X / Q + K2)));
    }
    T2.push({ el: B2, top: G2, left: J });
  }
  return T2;
};

// ../../node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t3) {
    for (var s2, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s2 = arguments[i3];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t3[p2] = s2[p2];
    }
    return t3;
  };
  return __assign.apply(this, arguments);
};

// ../../node_modules/downshift/dist/downshift.esm.js
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb === "function" ? cb : noop2;
}
function noop2() {
}
function scrollIntoView2(node, menuNode) {
  if (!node) {
    return;
  }
  const actions = i2(node, {
    boundary: menuNode,
    block: "nearest",
    scrollMode: "if-needed"
  });
  actions.forEach((_ref) => {
    let {
      el,
      top,
      left
    } = _ref;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
function isOrContainsNode(parent, child, environment) {
  const result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}
function debounce(fn, time) {
  let timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some((fn) => {
      if (fn) {
        fn(event, ...args);
      }
      return event.preventDownshiftDefault || event.hasOwnProperty("nativeEvent") && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
function generateId() {
  return String(idCounter++);
}
function getA11yStatusMessage$1(_ref2) {
  let {
    isOpen,
    resultCount,
    previousResultCount
  } = _ref2;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return `${resultCount} result${resultCount === 1 ? " is" : "s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`;
  }
  return "";
}
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? (
    /* istanbul ignore next (preact) */
    arg[0]
  ) : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
function isDOMElement(element) {
  return typeof element.type === "string";
}
function getElementProps(element) {
  return element.props;
}
function requiredProp(fnName, propName) {
  console.error(`The property "${propName}" is required in "${fnName}"`);
}
var stateKeys = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function pickState(state) {
  if (state === void 0) {
    state = {};
  }
  const result = {};
  stateKeys.forEach((k2) => {
    if (state.hasOwnProperty(k2)) {
      result[k2] = state[k2];
    }
  });
  return result;
}
function getState(state, props) {
  return Object.keys(state).reduce((prevState, key) => {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
function normalizeArrowKey(event) {
  const {
    key,
    keyCode
  } = event;
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) {
    return `Arrow${key}`;
  }
  return key;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }
  if (itemCount === 0) {
    return -1;
  }
  const itemsLastIndex = itemCount - 1;
  if (typeof baseIndex !== "number" || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }
  let newIndex = baseIndex + moveAmount;
  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }
  const nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }
  return nonDisabledNewIndex;
}
function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  const currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute("disabled")) {
    return baseIndex;
  }
  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute("disabled")) {
        return index;
      }
    }
  } else {
    for (let index = baseIndex - 1; index >= 0; index--) {
      if (!getItemNodeFromIndex(index).hasAttribute("disabled")) {
        return index;
      }
    }
  }
  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }
  return -1;
}
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return downshiftElements.some((contextNode) => contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment)));
}
var validateControlledUnchanged = noop2;
if (true) {
  validateControlledUnchanged = (state, prevProps, nextProps) => {
    const warningDescription = `This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props`;
    Object.keys(state).forEach((propKey) => {
      if (prevProps[propKey] !== void 0 && nextProps[propKey] === void 0) {
        console.error(`downshift: A component has changed the controlled prop "${propKey}" to be uncontrolled. ${warningDescription}`);
      } else if (prevProps[propKey] === void 0 && nextProps[propKey] !== void 0) {
        console.error(`downshift: A component has changed the uncontrolled prop "${propKey}" to be controlled. ${warningDescription}`);
      }
    });
  };
}
var cleanupStatus = debounce((documentProp) => {
  getStatusDiv(documentProp).textContent = "";
}, 500);
function setStatus(status, documentProp) {
  const div = getStatusDiv(documentProp);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus(documentProp);
}
function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }
  let statusDiv = documentProp.getElementById("a11y-status-message");
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}
var unknown = true ? "__autocomplete_unknown__" : 0;
var mouseUp = true ? "__autocomplete_mouseup__" : 1;
var itemMouseEnter = true ? "__autocomplete_item_mouseenter__" : 2;
var keyDownArrowUp = true ? "__autocomplete_keydown_arrow_up__" : 3;
var keyDownArrowDown = true ? "__autocomplete_keydown_arrow_down__" : 4;
var keyDownEscape = true ? "__autocomplete_keydown_escape__" : 5;
var keyDownEnter = true ? "__autocomplete_keydown_enter__" : 6;
var keyDownHome = true ? "__autocomplete_keydown_home__" : 7;
var keyDownEnd = true ? "__autocomplete_keydown_end__" : 8;
var clickItem = true ? "__autocomplete_click_item__" : 9;
var blurInput = true ? "__autocomplete_blur_input__" : 10;
var changeInput = true ? "__autocomplete_change_input__" : 11;
var keyDownSpaceButton = true ? "__autocomplete_keydown_space_button__" : 12;
var clickButton = true ? "__autocomplete_click_button__" : 13;
var blurButton = true ? "__autocomplete_blur_button__" : 14;
var controlledPropUpdatedSelectedItem = true ? "__autocomplete_controlled_prop_updated_selected_item__" : 15;
var touchEnd = true ? "__autocomplete_touchend__" : 16;
var stateChangeTypes$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown,
  mouseUp,
  itemMouseEnter,
  keyDownArrowUp,
  keyDownArrowDown,
  keyDownEscape,
  keyDownEnter,
  keyDownHome,
  keyDownEnd,
  clickItem,
  blurInput,
  changeInput,
  keyDownSpaceButton,
  clickButton,
  blurButton,
  controlledPropUpdatedSelectedItem,
  touchEnd
});
var Downshift = /* @__PURE__ */ (() => {
  class Downshift2 extends import_react20.Component {
    constructor(_props) {
      var _this;
      super(_props);
      _this = this;
      this.id = this.props.id || `downshift-${generateId()}`;
      this.menuId = this.props.menuId || `${this.id}-menu`;
      this.labelId = this.props.labelId || `${this.id}-label`;
      this.inputId = this.props.inputId || `${this.id}-input`;
      this.getItemId = this.props.getItemId || ((index) => `${this.id}-item-${index}`);
      this.input = null;
      this.items = [];
      this.itemCount = null;
      this.previousResultCount = 0;
      this.timeoutIds = [];
      this.internalSetTimeout = (fn, time) => {
        const id = setTimeout(() => {
          this.timeoutIds = this.timeoutIds.filter((i3) => i3 !== id);
          fn();
        }, time);
        this.timeoutIds.push(id);
      };
      this.setItemCount = (count) => {
        this.itemCount = count;
      };
      this.unsetItemCount = () => {
        this.itemCount = null;
      };
      this.setHighlightedIndex = function(highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState({
          highlightedIndex,
          ...otherStateToSet
        });
      };
      this.clearSelection = (cb) => {
        this.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: this.props.defaultHighlightedIndex,
          isOpen: this.props.defaultIsOpen
        }, cb);
      };
      this.selectItem = (item, otherStateToSet, cb) => {
        otherStateToSet = pickState(otherStateToSet);
        this.internalSetState({
          isOpen: this.props.defaultIsOpen,
          highlightedIndex: this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: this.props.itemToString(item),
          ...otherStateToSet
        }, cb);
      };
      this.selectItemAtIndex = (itemIndex, otherStateToSet, cb) => {
        const item = this.items[itemIndex];
        if (item == null) {
          return;
        }
        this.selectItem(item, otherStateToSet, cb);
      };
      this.selectHighlightedItem = (otherStateToSet, cb) => {
        return this.selectItemAtIndex(this.getState().highlightedIndex, otherStateToSet, cb);
      };
      this.internalSetState = (stateToSet, cb) => {
        let isItemSelected, onChangeArg;
        const onStateChangeArg = {};
        const isStateToSetFunction = typeof stateToSet === "function";
        if (!isStateToSetFunction && stateToSet.hasOwnProperty("inputValue")) {
          this.props.onInputValueChange(stateToSet.inputValue, {
            ...this.getStateAndHelpers(),
            ...stateToSet
          });
        }
        return this.setState((state) => {
          state = this.getState(state);
          let newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
          newStateToSet = this.props.stateReducer(state, newStateToSet);
          isItemSelected = newStateToSet.hasOwnProperty("selectedItem");
          const nextState = {};
          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }
          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach((key) => {
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            }
            if (key === "type") {
              return;
            }
            newStateToSet[key];
            if (!isControlledProp(this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          });
          if (isStateToSetFunction && newStateToSet.hasOwnProperty("inputValue")) {
            this.props.onInputValueChange(newStateToSet.inputValue, {
              ...this.getStateAndHelpers(),
              ...newStateToSet
            });
          }
          return nextState;
        }, () => {
          cbToCb(cb)();
          const hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
          if (hasMoreStateThanType) {
            this.props.onStateChange(onStateChangeArg, this.getStateAndHelpers());
          }
          if (isItemSelected) {
            this.props.onSelect(stateToSet.selectedItem, this.getStateAndHelpers());
          }
          if (onChangeArg !== void 0) {
            this.props.onChange(onChangeArg, this.getStateAndHelpers());
          }
          this.props.onUserAction(onStateChangeArg, this.getStateAndHelpers());
        });
      };
      this.rootRef = (node) => this._rootNode = node;
      this.getRootProps = function(_temp, _temp2) {
        let {
          refKey = "ref",
          ref,
          ...rest
        } = _temp === void 0 ? {} : _temp;
        let {
          suppressRefError = false
        } = _temp2 === void 0 ? {} : _temp2;
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;
        const {
          isOpen
        } = _this.getState();
        return {
          [refKey]: handleRefs(ref, _this.rootRef),
          role: "combobox",
          "aria-expanded": isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": isOpen ? _this.menuId : null,
          "aria-labelledby": _this.labelId,
          ...rest
        };
      };
      this.keyDownHandlers = {
        ArrowDown(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter(event) {
          if (event.which === 229) {
            return;
          }
          const {
            isOpen,
            highlightedIndex
          } = this.getState();
          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            const item = this.items[highlightedIndex];
            const itemNode = this.getItemNodeFromIndex(highlightedIndex);
            if (item == null || itemNode && itemNode.hasAttribute("disabled")) {
              return;
            }
            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape(event) {
          event.preventDefault();
          this.reset({
            type: keyDownEscape,
            ...!this.state.isOpen && {
              selectedItem: null,
              inputValue: ""
            }
          });
        }
      };
      this.buttonKeyDownHandlers = {
        ...this.keyDownHandlers,
        " "(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      };
      this.inputKeyDownHandlers = {
        ...this.keyDownHandlers,
        Home(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          const newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, (index) => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          const newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, (index) => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      };
      this.getToggleButtonProps = function(_temp3) {
        let {
          onClick,
          onPress,
          onKeyDown,
          onKeyUp,
          onBlur,
          ...rest
        } = _temp3 === void 0 ? {} : _temp3;
        const {
          isOpen
        } = _this.getState();
        const enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        const eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return {
          type: "button",
          role: "button",
          "aria-label": isOpen ? "close menu" : "open menu",
          "aria-haspopup": true,
          "data-toggle": true,
          ...eventHandlers,
          ...rest
        };
      };
      this.buttonHandleKeyUp = (event) => {
        event.preventDefault();
      };
      this.buttonHandleKeyDown = (event) => {
        const key = normalizeArrowKey(event);
        if (this.buttonKeyDownHandlers[key]) {
          this.buttonKeyDownHandlers[key].call(this, event);
        }
      };
      this.buttonHandleClick = (event) => {
        event.preventDefault();
        if (this.props.environment.document.activeElement === this.props.environment.document.body) {
          event.target.focus();
        }
        if (false) {
          this.toggleMenu({
            type: clickButton
          });
        } else {
          this.internalSetTimeout(() => this.toggleMenu({
            type: clickButton
          }));
        }
      };
      this.buttonHandleBlur = (event) => {
        const blurTarget = event.target;
        this.internalSetTimeout(() => {
          if (!this.isMouseDown && (this.props.environment.document.activeElement == null || this.props.environment.document.activeElement.id !== this.inputId) && this.props.environment.document.activeElement !== blurTarget) {
            this.reset({
              type: blurButton
            });
          }
        });
      };
      this.getLabelProps = (props) => {
        return {
          htmlFor: this.inputId,
          id: this.labelId,
          ...props
        };
      };
      this.getInputProps = function(_temp4) {
        let {
          onKeyDown,
          onBlur,
          onChange,
          onInput,
          onChangeText,
          ...rest
        } = _temp4 === void 0 ? {} : _temp4;
        let onChangeKey;
        let eventHandlers = {};
        {
          onChangeKey = "onChange";
        }
        const {
          inputValue,
          isOpen,
          highlightedIndex
        } = _this.getState();
        if (!rest.disabled) {
          eventHandlers = {
            [onChangeKey]: callAllEventHandlers(onChange, onInput, _this.inputHandleChange),
            onKeyDown: callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown),
            onBlur: callAllEventHandlers(onBlur, _this.inputHandleBlur)
          };
        }
        return {
          "aria-autocomplete": "list",
          "aria-activedescendant": isOpen && typeof highlightedIndex === "number" && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          "aria-controls": isOpen ? _this.menuId : null,
          "aria-labelledby": _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: inputValue,
          id: _this.inputId,
          ...eventHandlers,
          ...rest
        };
      };
      this.inputHandleKeyDown = (event) => {
        const key = normalizeArrowKey(event);
        if (key && this.inputKeyDownHandlers[key]) {
          this.inputKeyDownHandlers[key].call(this, event);
        }
      };
      this.inputHandleChange = (event) => {
        this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: this.props.defaultHighlightedIndex
        });
      };
      this.inputHandleBlur = () => {
        this.internalSetTimeout(() => {
          const downshiftButtonIsActive = this.props.environment.document && !!this.props.environment.document.activeElement && !!this.props.environment.document.activeElement.dataset && this.props.environment.document.activeElement.dataset.toggle && this._rootNode && this._rootNode.contains(this.props.environment.document.activeElement);
          if (!this.isMouseDown && !downshiftButtonIsActive) {
            this.reset({
              type: blurInput
            });
          }
        });
      };
      this.menuRef = (node) => {
        this._menuNode = node;
      };
      this.getMenuProps = function(_temp5, _temp6) {
        let {
          refKey = "ref",
          ref,
          ...props
        } = _temp5 === void 0 ? {} : _temp5;
        let {
          suppressRefError = false
        } = _temp6 === void 0 ? {} : _temp6;
        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return {
          [refKey]: handleRefs(ref, _this.menuRef),
          role: "listbox",
          "aria-labelledby": props && props["aria-label"] ? null : _this.labelId,
          id: _this.menuId,
          ...props
        };
      };
      this.getItemProps = function(_temp7) {
        let {
          onMouseMove,
          onMouseDown,
          onClick,
          onPress,
          index,
          item = false ? (
            /* istanbul ignore next */
            void 0
          ) : requiredProp("getItemProps", "item"),
          ...rest
        } = _temp7 === void 0 ? {} : _temp7;
        if (index === void 0) {
          _this.items.push(item);
          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }
        const onSelectKey = "onClick";
        const customClickHandler = onClick;
        const enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, () => {
            if (index === _this.getState().highlightedIndex) {
              return;
            }
            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            });
            _this.avoidScrolling = true;
            _this.internalSetTimeout(() => _this.avoidScrolling = false, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, (event) => {
            event.preventDefault();
          }),
          [onSelectKey]: callAllEventHandlers(customClickHandler, () => {
            _this.selectItemAtIndex(index, {
              type: clickItem
            });
          })
        };
        const eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return {
          id: _this.getItemId(index),
          role: "option",
          "aria-selected": _this.getState().highlightedIndex === index,
          ...eventHandlers,
          ...rest
        };
      };
      this.clearItems = () => {
        this.items = [];
      };
      this.reset = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState((_ref) => {
          let {
            selectedItem
          } = _ref;
          return {
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem),
            ...otherStateToSet
          };
        }, cb);
      };
      this.toggleMenu = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState((_ref2) => {
          let {
            isOpen
          } = _ref2;
          return {
            isOpen: !isOpen,
            ...isOpen && {
              highlightedIndex: _this.props.defaultHighlightedIndex
            },
            ...otherStateToSet
          };
        }, () => {
          const {
            isOpen,
            highlightedIndex
          } = _this.getState();
          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === "number") {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }
          cbToCb(cb)();
        });
      };
      this.openMenu = (cb) => {
        this.internalSetState({
          isOpen: true
        }, cb);
      };
      this.closeMenu = (cb) => {
        this.internalSetState({
          isOpen: false
        }, cb);
      };
      this.updateStatus = debounce(() => {
        const state = this.getState();
        const item = this.items[state.highlightedIndex];
        const resultCount = this.getItemCount();
        const status = this.props.getA11yStatusMessage({
          itemToString: this.props.itemToString,
          previousResultCount: this.previousResultCount,
          resultCount,
          highlightedItem: item,
          ...state
        });
        this.previousResultCount = resultCount;
        setStatus(status, this.props.environment.document);
      }, 200);
      const {
        defaultHighlightedIndex,
        initialHighlightedIndex: _highlightedIndex = defaultHighlightedIndex,
        defaultIsOpen,
        initialIsOpen: _isOpen = defaultIsOpen,
        initialInputValue: _inputValue = "",
        initialSelectedItem: _selectedItem = null
      } = this.props;
      const _state = this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });
      if (_state.selectedItem != null && this.props.initialInputValue === void 0) {
        _state.inputValue = this.props.itemToString(_state.selectedItem);
      }
      this.state = _state;
    }
    /**
     * Clear all running timeouts
     */
    internalClearTimeouts() {
      this.timeoutIds.forEach((id) => {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    getState(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }
      return getState(stateToMerge, this.props);
    }
    getItemCount() {
      let itemCount = this.items.length;
      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== void 0) {
        itemCount = this.props.itemCount;
      }
      return itemCount;
    }
    getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    }
    scrollHighlightedItemIntoView() {
      {
        const node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    }
    moveHighlightedIndex(amount, otherStateToSet) {
      const itemCount = this.getItemCount();
      const {
        highlightedIndex
      } = this.getState();
      if (itemCount > 0) {
        const nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    }
    getStateAndHelpers() {
      const {
        highlightedIndex,
        inputValue,
        selectedItem,
        isOpen
      } = this.getState();
      const {
        itemToString: itemToString2
      } = this.props;
      const {
        id
      } = this;
      const {
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        reset,
        setItemCount,
        unsetItemCount,
        internalSetState: setState
      } = this;
      return {
        // prop getters
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        // actions
        reset,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        setItemCount,
        unsetItemCount,
        setState,
        // props
        itemToString: itemToString2,
        // derived
        id,
        // state
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      };
    }
    //////////////////////////// ROOT
    componentDidMount() {
      if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      {
        const onMouseDown = () => {
          this.isMouseDown = true;
        };
        const onMouseUp = (event) => {
          this.isMouseDown = false;
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment);
          if (!contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: mouseUp
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        const onTouchStart = () => {
          this.isTouchMove = false;
        };
        const onTouchMove = () => {
          this.isTouchMove = true;
        };
        const onTouchEnd = (event) => {
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment, false);
          if (!this.isTouchMove && !contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: touchEnd
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        const {
          environment
        } = this.props;
        environment.addEventListener("mousedown", onMouseDown);
        environment.addEventListener("mouseup", onMouseUp);
        environment.addEventListener("touchstart", onTouchStart);
        environment.addEventListener("touchmove", onTouchMove);
        environment.addEventListener("touchend", onTouchEnd);
        this.cleanup = () => {
          this.internalClearTimeouts();
          this.updateStatus.cancel();
          environment.removeEventListener("mousedown", onMouseDown);
          environment.removeEventListener("mouseup", onMouseUp);
          environment.removeEventListener("touchstart", onTouchStart);
          environment.removeEventListener("touchmove", onTouchMove);
          environment.removeEventListener("touchend", onTouchEnd);
        };
      }
    }
    shouldScroll(prevState, prevProps) {
      const {
        highlightedIndex: currentHighlightedIndex
      } = this.props.highlightedIndex === void 0 ? this.getState() : this.props;
      const {
        highlightedIndex: prevHighlightedIndex
      } = prevProps.highlightedIndex === void 0 ? prevState : prevProps;
      const scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      const scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    }
    componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }
      if (isControlledProp(this.props, "selectedItem") && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }
      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      {
        this.updateStatus();
      }
    }
    componentWillUnmount() {
      this.cleanup();
    }
    render() {
      const children = unwrapArray(this.props.children, noop2);
      this.clearItems();
      this.getRootProps.called = false;
      this.getRootProps.refKey = void 0;
      this.getRootProps.suppressRefError = void 0;
      this.getMenuProps.called = false;
      this.getMenuProps.refKey = void 0;
      this.getMenuProps.suppressRefError = void 0;
      this.getLabelProps.called = false;
      this.getInputProps.called = false;
      const element = unwrapArray(children(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called || this.props.suppressRefError) {
        if (!this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        return /* @__PURE__ */ (0, import_react20.cloneElement)(element, this.getRootProps(getElementProps(element)));
      }
      if (true) {
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
      }
      return void 0;
    }
  }
  Downshift2.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage$1,
    itemToString: (i3) => {
      if (i3 == null) {
        return "";
      }
      if (isPlainObject(i3) && !i3.hasOwnProperty("toString")) {
        console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", i3);
      }
      return String(i3);
    },
    onStateChange: noop2,
    onInputValueChange: noop2,
    onUserAction: noop2,
    onChange: noop2,
    onSelect: noop2,
    onOuterClick: noop2,
    selectedItemChanged: (prevItem, item) => prevItem !== item,
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window === "undefined" ? {} : window
    ),
    stateReducer: (state, stateToSet) => stateToSet,
    suppressRefError: false,
    scrollIntoView: scrollIntoView2
  };
  Downshift2.stateChangeTypes = stateChangeTypes$3;
  return Downshift2;
})();
true ? Downshift.propTypes = {
  children: import_prop_types2.default.func,
  defaultHighlightedIndex: import_prop_types2.default.number,
  defaultIsOpen: import_prop_types2.default.bool,
  initialHighlightedIndex: import_prop_types2.default.number,
  initialSelectedItem: import_prop_types2.default.any,
  initialInputValue: import_prop_types2.default.string,
  initialIsOpen: import_prop_types2.default.bool,
  getA11yStatusMessage: import_prop_types2.default.func,
  itemToString: import_prop_types2.default.func,
  onChange: import_prop_types2.default.func,
  onSelect: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onInputValueChange: import_prop_types2.default.func,
  onUserAction: import_prop_types2.default.func,
  onOuterClick: import_prop_types2.default.func,
  selectedItemChanged: import_prop_types2.default.func,
  stateReducer: import_prop_types2.default.func,
  itemCount: import_prop_types2.default.number,
  id: import_prop_types2.default.string,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any
    })
  }),
  suppressRefError: import_prop_types2.default.bool,
  scrollIntoView: import_prop_types2.default.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: import_prop_types2.default.any,
  isOpen: import_prop_types2.default.bool,
  inputValue: import_prop_types2.default.string,
  highlightedIndex: import_prop_types2.default.number,
  labelId: import_prop_types2.default.string,
  inputId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func
  /* eslint-enable react/no-unused-prop-types */
} : void 0;
var Downshift$1 = Downshift;
function validateGetMenuPropsCalledCorrectly(node, _ref3) {
  let {
    refKey
  } = _ref3;
  if (!node) {
    console.error(`downshift: The ref prop "${refKey}" from getMenuProps was not applied correctly on your menu element.`);
  }
}
function validateGetRootPropsCalledCorrectly(element, _ref4) {
  let {
    refKey
  } = _ref4;
  const refKeySpecified = refKey !== "ref";
  const isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified && !(0, import_react_is.isForwardRef)(element)) {
    console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps");
  } else if (!isComposite && refKeySpecified) {
    console.error(`downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "${refKey}"`);
  }
  if (!(0, import_react_is.isForwardRef)(element) && !getElementProps(element)[refKey]) {
    console.error(`downshift: You must apply the ref prop "${refKey}" from getRootProps onto your root element.`);
  }
}
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ""
};
function callOnChangeProps(action, state, newState) {
  const {
    props,
    type
  } = action;
  const changes = {};
  Object.keys(state).forEach((key) => {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange({
      type,
      ...changes
    });
  }
}
function invokeOnChangeHandler(key, action, state, newState) {
  const {
    props,
    type
  } = action;
  const handler = `on${capitalizeString(key)}Change`;
  if (props[handler] && newState[key] !== void 0 && newState[key] !== state[key]) {
    props[handler]({
      type,
      ...newState
    });
  }
}
function stateReducer(s2, a2) {
  return a2.changes;
}
function getA11ySelectionMessage(selectionParameters) {
  const {
    selectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return selectedItem ? `${itemToStringLocal(selectedItem)} has been selected.` : "";
}
var updateA11yStatus = debounce((getA11yMessage, document10) => {
  setStatus(getA11yMessage(), document10);
}, 200);
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react20.useLayoutEffect : import_react20.useEffect;
function useElementIds(_ref) {
  let {
    id = `downshift-${generateId()}`,
    labelId,
    menuId,
    getItemId,
    toggleButtonId,
    inputId
  } = _ref;
  const elementIdsRef = (0, import_react20.useRef)({
    labelId: labelId || `${id}-label`,
    menuId: menuId || `${id}-menu`,
    getItemId: getItemId || ((index) => `${id}-item-${index}`),
    toggleButtonId: toggleButtonId || `${id}-toggle-button`,
    inputId: inputId || `${id}-input`
  });
  return elementIdsRef.current;
}
function getItemIndex(index, item, items) {
  if (index !== void 0) {
    return index;
  }
  if (items.length === 0) {
    return -1;
  }
  return items.indexOf(item);
}
function itemToString(item) {
  return item ? String(item) : "";
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
function useLatestRef(val) {
  const ref = (0, import_react20.useRef)(val);
  ref.current = val;
  return ref;
}
function useEnhancedReducer(reducer, initialState, props) {
  const prevStateRef = (0, import_react20.useRef)();
  const actionRef = (0, import_react20.useRef)();
  const enhancedReducer = (0, import_react20.useCallback)((state2, action2) => {
    actionRef.current = action2;
    state2 = getState(state2, action2.props);
    const changes = reducer(state2, action2);
    const newState = action2.props.stateReducer(state2, {
      ...action2,
      changes
    });
    return newState;
  }, [reducer]);
  const [state, dispatch] = (0, import_react20.useReducer)(enhancedReducer, initialState);
  const propsRef = useLatestRef(props);
  const dispatchWithProps = (0, import_react20.useCallback)((action2) => dispatch({
    props: propsRef.current,
    ...action2
  }), [propsRef]);
  const action = actionRef.current;
  (0, import_react20.useEffect)(() => {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }
    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
function useControlledReducer$1(reducer, initialState, props) {
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  return [getState(state, props), dispatch];
}
var defaultProps$3 = {
  itemToString,
  stateReducer,
  getA11ySelectionMessage,
  scrollIntoView: scrollIntoView2,
  circularNavigation: false,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window === "undefined" ? {} : window
  )
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  const defaultValue = props[`default${capitalizeString(propKey)}`];
  if (defaultValue !== void 0) {
    return defaultValue;
  }
  return defaultStateValues2[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  const value = props[propKey];
  if (value !== void 0) {
    return value;
  }
  const initialValue = props[`initial${capitalizeString(propKey)}`];
  if (initialValue !== void 0) {
    return initialValue;
  }
  return getDefaultValue$1(props, propKey, defaultStateValues2);
}
function getInitialState$2(props) {
  const selectedItem = getInitialValue$1(props, "selectedItem");
  const isOpen = getInitialValue$1(props, "isOpen");
  const highlightedIndex = getInitialValue$1(props, "highlightedIndex");
  const inputValue = getInitialValue$1(props, "inputValue");
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  const {
    items,
    initialHighlightedIndex,
    defaultHighlightedIndex
  } = props;
  const {
    selectedItem,
    highlightedIndex
  } = state;
  if (items.length === 0) {
    return -1;
  }
  if (initialHighlightedIndex !== void 0 && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== void 0) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }
    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }
  if (offset === 0) {
    return -1;
  }
  return offset < 0 ? items.length - 1 : 0;
}
function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  const mouseAndTouchTrackersRef = (0, import_react20.useRef)({
    isMouseDown: false,
    isTouchMove: false
  });
  (0, import_react20.useEffect)(() => {
    const onMouseDown = () => {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };
    const onMouseUp = (event) => {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map((ref) => ref.current), environment)) {
        handleBlur();
      }
    };
    const onTouchStart = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };
    const onTouchMove = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };
    const onTouchEnd = (event) => {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map((ref) => ref.current), environment, false)) {
        handleBlur();
      }
    };
    environment.addEventListener("mousedown", onMouseDown);
    environment.addEventListener("mouseup", onMouseUp);
    environment.addEventListener("touchstart", onTouchStart);
    environment.addEventListener("touchmove", onTouchMove);
    environment.addEventListener("touchend", onTouchEnd);
    return function cleanup() {
      environment.removeEventListener("mousedown", onMouseDown);
      environment.removeEventListener("mouseup", onMouseUp);
      environment.removeEventListener("touchstart", onTouchStart);
      environment.removeEventListener("touchmove", onTouchMove);
      environment.removeEventListener("touchend", onTouchEnd);
    };
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
var useGetterPropsCalledChecker = () => noop2;
if (true) {
  useGetterPropsCalledChecker = function() {
    const isInitialMountRef = (0, import_react20.useRef)(true);
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    const getterPropsCalledRef = (0, import_react20.useRef)(propKeys.reduce((acc, propKey) => {
      acc[propKey] = {};
      return acc;
    }, {}));
    (0, import_react20.useEffect)(() => {
      Object.keys(getterPropsCalledRef.current).forEach((propKey) => {
        const propCallInfo = getterPropsCalledRef.current[propKey];
        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            console.error(`downshift: You forgot to call the ${propKey} getter function on your component / element.`);
            return;
          }
        }
        const {
          suppressRefError,
          refKey,
          elementRef
        } = propCallInfo;
        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          console.error(`downshift: The ref prop "${refKey}" from ${propKey} was not applied correctly on your element.`);
        }
      });
      isInitialMountRef.current = false;
    });
    const setGetterPropCallInfo = (0, import_react20.useCallback)((propKey, suppressRefError, refKey, elementRef) => {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError,
        refKey,
        elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  let {
    isInitialMount,
    highlightedIndex,
    items,
    environment,
    ...rest
  } = _ref2;
  (0, import_react20.useEffect)(() => {
    if (isInitialMount || false) {
      return;
    }
    updateA11yStatus(() => getA11yMessage({
      highlightedIndex,
      highlightedItem: items[highlightedIndex],
      resultCount: items.length,
      ...rest
    }), environment.document);
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  let {
    highlightedIndex,
    isOpen,
    itemRefs,
    getItemNodeFromIndex,
    menuElement,
    scrollIntoView: scrollIntoViewProp
  } = _ref3;
  const shouldScrollRef = (0, import_react20.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
  }, [highlightedIndex]);
  return shouldScrollRef;
}
var useControlPropsValidator = noop2;
if (true) {
  useControlPropsValidator = (_ref4) => {
    let {
      isInitialMount,
      props,
      state
    } = _ref4;
    const prevPropsRef = (0, import_react20.useRef)(props);
    (0, import_react20.useEffect)(() => {
      if (isInitialMount) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  const {
    type,
    props
  } = action;
  let changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = {
        highlightedIndex: action.disabled ? -1 : action.index
      };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        isOpen: getDefaultValue$1(props, "isOpen"),
        selectedItem: getDefaultValue$1(props, "selectedItem"),
        inputValue: getDefaultValue$1(props, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return {
    ...state,
    ...changes
  };
}
function getItemIndexByCharacterKey(_a) {
  var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString2 = _a.itemToString, getItemNodeFromIndex = _a.getItemNodeFromIndex;
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
  for (var index = 0; index < items.length; index++) {
    var offsetIndex = (index + highlightedIndex + 1) % items.length;
    var item = items[offsetIndex];
    if (item !== void 0 && itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar)) {
      var element = getItemNodeFromIndex(offsetIndex);
      if (!(element === null || element === void 0 ? void 0 : element.hasAttribute("disabled"))) {
        return offsetIndex;
      }
    }
  }
  return highlightedIndex;
}
var propTypes$2 = {
  items: import_prop_types2.default.array.isRequired,
  itemToString: import_prop_types2.default.func,
  getA11yStatusMessage: import_prop_types2.default.func,
  getA11ySelectionMessage: import_prop_types2.default.func,
  circularNavigation: import_prop_types2.default.bool,
  highlightedIndex: import_prop_types2.default.number,
  defaultHighlightedIndex: import_prop_types2.default.number,
  initialHighlightedIndex: import_prop_types2.default.number,
  isOpen: import_prop_types2.default.bool,
  defaultIsOpen: import_prop_types2.default.bool,
  initialIsOpen: import_prop_types2.default.bool,
  selectedItem: import_prop_types2.default.any,
  initialSelectedItem: import_prop_types2.default.any,
  defaultSelectedItem: import_prop_types2.default.any,
  id: import_prop_types2.default.string,
  labelId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
  toggleButtonId: import_prop_types2.default.string,
  stateReducer: import_prop_types2.default.func,
  onSelectedItemChange: import_prop_types2.default.func,
  onHighlightedIndexChange: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onIsOpenChange: import_prop_types2.default.func,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any
    })
  })
};
function getA11yStatusMessage(_a) {
  var isOpen = _a.isOpen, resultCount = _a.resultCount, previousResultCount = _a.previousResultCount;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return "".concat(resultCount, " result").concat(resultCount === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.");
  }
  return "";
}
var defaultProps$2 = __assign(__assign({}, defaultProps$3), { getA11yStatusMessage });
var validatePropTypes$2 = noop2;
if (true) {
  validatePropTypes$2 = function(options2, caller) {
    import_prop_types2.default.checkPropTypes(propTypes$2, options2, "prop", caller.name);
  };
}
var MenuKeyDownArrowDown = true ? "__menu_keydown_arrow_down__" : 0;
var MenuKeyDownArrowUp = true ? "__menu_keydown_arrow_up__" : 1;
var MenuKeyDownEscape = true ? "__menu_keydown_escape__" : 2;
var MenuKeyDownHome = true ? "__menu_keydown_home__" : 3;
var MenuKeyDownEnd = true ? "__menu_keydown_end__" : 4;
var MenuKeyDownEnter = true ? "__menu_keydown_enter__" : 5;
var MenuKeyDownSpaceButton = true ? "__menu_keydown_space_button__" : 6;
var MenuKeyDownCharacter = true ? "__menu_keydown_character__" : 7;
var MenuBlur = true ? "__menu_blur__" : 8;
var MenuMouseLeave$1 = true ? "__menu_mouse_leave__" : 9;
var ItemMouseMove$1 = true ? "__item_mouse_move__" : 10;
var ItemClick$1 = true ? "__item_click__" : 11;
var ToggleButtonClick$1 = true ? "__togglebutton_click__" : 12;
var ToggleButtonKeyDownArrowDown = true ? "__togglebutton_keydown_arrow_down__" : 13;
var ToggleButtonKeyDownArrowUp = true ? "__togglebutton_keydown_arrow_up__" : 14;
var ToggleButtonKeyDownCharacter = true ? "__togglebutton_keydown_character__" : 15;
var FunctionToggleMenu$1 = true ? "__function_toggle_menu__" : 16;
var FunctionOpenMenu$1 = true ? "__function_open_menu__" : 17;
var FunctionCloseMenu$1 = true ? "__function_close_menu__" : 18;
var FunctionSetHighlightedIndex$1 = true ? "__function_set_highlighted_index__" : 19;
var FunctionSelectItem$1 = true ? "__function_select_item__" : 20;
var FunctionSetInputValue$1 = true ? "__function_set_input_value__" : 21;
var FunctionReset$2 = true ? "__function_reset__" : 22;
var stateChangeTypes$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown,
  MenuKeyDownArrowUp,
  MenuKeyDownEscape,
  MenuKeyDownHome,
  MenuKeyDownEnd,
  MenuKeyDownEnter,
  MenuKeyDownSpaceButton,
  MenuKeyDownCharacter,
  MenuBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$2
});
function downshiftSelectReducer(state, action) {
  const {
    type,
    props,
    shiftKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index]
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        const lowercasedKey = action.key;
        const inputValue = `${state.inputValue}${lowercasedKey}`;
        const itemIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: state.selectedItem ? props.items.indexOf(state.selectedItem) : -1,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = {
          inputValue,
          ...itemIndex >= 0 && {
            selectedItem: props.items[itemIndex]
          }
        };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        ...state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex]
        }
      };
      break;
    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuKeyDownCharacter:
      {
        const lowercasedKey = action.key;
        const inputValue = `${state.inputValue}${lowercasedKey}`;
        const highlightedIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: state.highlightedIndex,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = {
          inputValue,
          ...highlightedIndex >= 0 && {
            highlightedIndex
          }
        };
      }
      break;
    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return {
    ...state,
    ...changes
  };
}
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$2(userProps, useSelect);
  const props = {
    ...defaultProps$2,
    ...userProps
  };
  const {
    items,
    scrollIntoView: scrollIntoView3,
    environment,
    initialIsOpen,
    defaultIsOpen,
    itemToString: itemToString2,
    getA11ySelectionMessage: getA11ySelectionMessage2,
    getA11yStatusMessage: getA11yStatusMessage2
  } = props;
  const initialState = getInitialState$2(props);
  const [state, dispatch] = useControlledReducer$1(downshiftSelectReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;
  const toggleButtonRef = (0, import_react20.useRef)(null);
  const menuRef = (0, import_react20.useRef)(null);
  const itemRefs = (0, import_react20.useRef)({});
  const shouldBlurRef = (0, import_react20.useRef)(true);
  const clearTimeoutRef = (0, import_react20.useRef)(null);
  const elementIds = useElementIds(props);
  const previousResultCountRef = (0, import_react20.useRef)();
  const isInitialMountRef = (0, import_react20.useRef)(true);
  const latest = useLatestRef({
    state,
    props
  });
  const getItemNodeFromIndex = (0, import_react20.useCallback)((index) => itemRefs.current[elementIds.getItemId(index)], [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex
  });
  (0, import_react20.useEffect)(() => {
    clearTimeoutRef.current = debounce((outerDispatch) => {
      outerDispatch({
        type: FunctionSetInputValue$1,
        inputValue: ""
      });
    }, 500);
    return () => {
      clearTimeoutRef.current.cancel();
    };
  }, []);
  (0, import_react20.useEffect)(() => {
    if (!inputValue) {
      return;
    }
    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  (0, import_react20.useEffect)(() => {
    if (isInitialMountRef.current) {
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (isOpen) {
      if (menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (environment.document.activeElement === menuRef.current) {
      if (toggleButtonRef.current) {
        shouldBlurRef.current = false;
        toggleButtonRef.current.focus();
      }
    }
  }, [isOpen]);
  (0, import_react20.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: MenuBlur
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getMenuProps", "getToggleButtonProps");
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);
  (0, import_react20.useEffect)(() => {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  const toggleButtonKeyDownHandlers = (0, import_react20.useMemo)(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowDown,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowUp,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    }
  }), [dispatch, getItemNodeFromIndex]);
  const menuKeyDownHandlers = (0, import_react20.useMemo)(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowDown,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowUp,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    Home(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape() {
      dispatch({
        type: MenuKeyDownEscape
      });
    },
    Enter(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnter
      });
    },
    " "(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownSpaceButton
      });
    }
  }), [dispatch, getItemNodeFromIndex]);
  const toggleMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  const closeMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  const openMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  const setHighlightedIndex = (0, import_react20.useCallback)((newHighlightedIndex) => {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = (0, import_react20.useCallback)((newSelectedItem) => {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const reset = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  const setInputValue = (0, import_react20.useCallback)((newInputValue) => {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  const getLabelProps = (0, import_react20.useCallback)((labelProps) => ({
    id: elementIds.labelId,
    htmlFor: elementIds.toggleButtonId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = (0, import_react20.useCallback)(function(_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = "ref",
      onKeyDown,
      onBlur,
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    const latestState = latest.current.state;
    const menuHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && menuKeyDownHandlers[key]) {
        menuKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: MenuKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    const menuHandleBlur = () => {
      if (shouldBlurRef.current === false) {
        shouldBlurRef.current = true;
        return;
      }
      const shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
      if (shouldBlur) {
        dispatch({
          type: MenuBlur
        });
      }
    };
    const menuHandleMouseLeave = () => {
      dispatch({
        type: MenuMouseLeave$1
      });
    };
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, (menuNode) => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: "listbox",
      "aria-labelledby": elementIds.labelId,
      tabIndex: -1,
      ...latestState.isOpen && latestState.highlightedIndex > -1 && {
        "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
      },
      onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
      onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
      onBlur: callAllEventHandlers(onBlur, menuHandleBlur),
      ...rest
    };
  }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  const getToggleButtonProps = (0, import_react20.useCallback)(function(_temp3, _temp4) {
    let {
      onClick,
      onKeyDown,
      refKey = "ref",
      ref,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    let {
      suppressRefError = false
    } = _temp4 === void 0 ? {} : _temp4;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick$1
      });
    };
    const toggleButtonHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    const toggleProps = {
      [refKey]: handleRefs(ref, (toggleButtonNode) => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      id: elementIds.toggleButtonId,
      "aria-haspopup": "listbox",
      "aria-expanded": latest.current.state.isOpen,
      "aria-labelledby": `${elementIds.labelId} ${elementIds.toggleButtonId}`,
      ...rest
    };
    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }
    setGetterPropCallInfo("getToggleButtonProps", suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  const getItemProps = (0, import_react20.useCallback)(function(_temp5) {
    let {
      item,
      index,
      onMouseMove,
      onClick,
      refKey = "ref",
      ref,
      disabled,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    const {
      state: latestState,
      props: latestProps
    } = latest.current;
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick$1,
        index
      });
    };
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    const itemProps = {
      disabled,
      role: "option",
      "aria-selected": `${itemIndex === latestState.highlightedIndex}`,
      id: elementIds.getItemId(itemIndex),
      [refKey]: handleRefs(ref, (itemNode) => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      ...rest
    };
    if (!disabled) {
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }
    itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
    return itemProps;
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  return {
    // prop getters.
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var InputKeyDownArrowDown = true ? "__input_keydown_arrow_down__" : 0;
var InputKeyDownArrowUp = true ? "__input_keydown_arrow_up__" : 1;
var InputKeyDownEscape = true ? "__input_keydown_escape__" : 2;
var InputKeyDownHome = true ? "__input_keydown_home__" : 3;
var InputKeyDownEnd = true ? "__input_keydown_end__" : 4;
var InputKeyDownEnter = true ? "__input_keydown_enter__" : 5;
var InputChange = true ? "__input_change__" : 6;
var InputBlur = true ? "__input_blur__" : 7;
var MenuMouseLeave = true ? "__menu_mouse_leave__" : 8;
var ItemMouseMove = true ? "__item_mouse_move__" : 9;
var ItemClick = true ? "__item_click__" : 10;
var ToggleButtonClick = true ? "__togglebutton_click__" : 11;
var FunctionToggleMenu = true ? "__function_toggle_menu__" : 12;
var FunctionOpenMenu = true ? "__function_open_menu__" : 13;
var FunctionCloseMenu = true ? "__function_close_menu__" : 14;
var FunctionSetHighlightedIndex = true ? "__function_set_highlighted_index__" : 15;
var FunctionSelectItem = true ? "__function_select_item__" : 16;
var FunctionSetInputValue = true ? "__function_set_input_value__" : 17;
var FunctionReset$1 = true ? "__function_reset__" : 18;
var ControlledPropUpdatedSelectedItem = true ? "__controlled_prop_updated_selected_item__" : 19;
var stateChangeTypes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown,
  InputKeyDownArrowUp,
  InputKeyDownEscape,
  InputKeyDownHome,
  InputKeyDownEnd,
  InputKeyDownEnter,
  InputChange,
  InputBlur,
  MenuMouseLeave,
  ItemMouseMove,
  ItemClick,
  ToggleButtonClick,
  FunctionToggleMenu,
  FunctionOpenMenu,
  FunctionCloseMenu,
  FunctionSetHighlightedIndex,
  FunctionSelectItem,
  FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem
});
function getInitialState$1(props) {
  const initialState = getInitialState$2(props);
  const {
    selectedItem
  } = initialState;
  let {
    inputValue
  } = initialState;
  if (inputValue === "" && selectedItem && props.defaultInputValue === void 0 && props.initialInputValue === void 0 && props.inputValue === void 0) {
    inputValue = props.itemToString(selectedItem);
  }
  return {
    ...initialState,
    inputValue
  };
}
var propTypes$1 = {
  items: import_prop_types2.default.array.isRequired,
  itemToString: import_prop_types2.default.func,
  getA11yStatusMessage: import_prop_types2.default.func,
  getA11ySelectionMessage: import_prop_types2.default.func,
  circularNavigation: import_prop_types2.default.bool,
  highlightedIndex: import_prop_types2.default.number,
  defaultHighlightedIndex: import_prop_types2.default.number,
  initialHighlightedIndex: import_prop_types2.default.number,
  isOpen: import_prop_types2.default.bool,
  defaultIsOpen: import_prop_types2.default.bool,
  initialIsOpen: import_prop_types2.default.bool,
  selectedItem: import_prop_types2.default.any,
  initialSelectedItem: import_prop_types2.default.any,
  defaultSelectedItem: import_prop_types2.default.any,
  inputValue: import_prop_types2.default.string,
  defaultInputValue: import_prop_types2.default.string,
  initialInputValue: import_prop_types2.default.string,
  id: import_prop_types2.default.string,
  labelId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
  inputId: import_prop_types2.default.string,
  toggleButtonId: import_prop_types2.default.string,
  stateReducer: import_prop_types2.default.func,
  onSelectedItemChange: import_prop_types2.default.func,
  onHighlightedIndexChange: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onIsOpenChange: import_prop_types2.default.func,
  onInputValueChange: import_prop_types2.default.func,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any
    })
  })
};
function useControlledReducer(reducer, initialState, props) {
  const previousSelectedItemRef = (0, import_react20.useRef)();
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  (0, import_react20.useEffect)(() => {
    if (isControlledProp(props, "selectedItem")) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
}
var validatePropTypes$1 = noop2;
if (true) {
  validatePropTypes$1 = (options2, caller) => {
    import_prop_types2.default.checkPropTypes(propTypes$1, options2, "prop", caller.name);
  };
}
var defaultProps$1 = {
  ...defaultProps$3,
  getA11yStatusMessage: getA11yStatusMessage$1,
  circularNavigation: true
};
function downshiftUseComboboxReducer(state, action) {
  const {
    type,
    props,
    shiftKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = {
        ...state.isOpen && state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
          isOpen: getDefaultValue$1(props, "isOpen"),
          highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        }
      };
      break;
    case InputKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...!state.isOpen && {
          selectedItem: null,
          inputValue: ""
        }
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...state.highlightedIndex >= 0 && action.selectItem && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        }
      };
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        inputValue: action.inputValue
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return {
    ...state,
    ...changes
  };
}
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1(userProps, useCombobox);
  const props = {
    ...defaultProps$1,
    ...userProps
  };
  const {
    initialIsOpen,
    defaultIsOpen,
    items,
    scrollIntoView: scrollIntoView3,
    environment,
    getA11yStatusMessage: getA11yStatusMessage2,
    getA11ySelectionMessage: getA11ySelectionMessage2,
    itemToString: itemToString2
  } = props;
  const initialState = getInitialState$1(props);
  const [state, dispatch] = useControlledReducer(downshiftUseComboboxReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;
  const menuRef = (0, import_react20.useRef)(null);
  const itemRefs = (0, import_react20.useRef)({});
  const inputRef = (0, import_react20.useRef)(null);
  const toggleButtonRef = (0, import_react20.useRef)(null);
  const comboboxRef = (0, import_react20.useRef)(null);
  const isInitialMountRef = (0, import_react20.useRef)(true);
  const elementIds = useElementIds(props);
  const previousResultCountRef = (0, import_react20.useRef)();
  const latest = useLatestRef({
    state,
    props
  });
  const getItemNodeFromIndex = (0, import_react20.useCallback)((index) => itemRefs.current[elementIds.getItemId(index)], [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  (0, import_react20.useEffect)(() => {
    const focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  (0, import_react20.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getInputProps", "getComboboxProps", "getMenuProps");
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);
  (0, import_react20.useEffect)(() => {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  const inputKeyDownHandlers = (0, import_react20.useMemo)(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowDown,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowUp,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex
      });
    },
    Home(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape(event) {
      const latestState = latest.current.state;
      if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownEscape
        });
      }
    },
    Enter(event) {
      const latestState = latest.current.state;
      if (!latestState.isOpen || latestState.highlightedIndex < 0 || event.which === 229) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnter,
        getItemNodeFromIndex
      });
    }
  }), [dispatch, latest, getItemNodeFromIndex]);
  const getLabelProps = (0, import_react20.useCallback)((labelProps) => ({
    id: elementIds.labelId,
    htmlFor: elementIds.inputId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = (0, import_react20.useCallback)(function(_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = "ref",
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, (menuNode) => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: "listbox",
      "aria-labelledby": elementIds.labelId,
      onMouseLeave: callAllEventHandlers(onMouseLeave, () => {
        dispatch({
          type: MenuMouseLeave
        });
      }),
      ...rest
    };
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  const getItemProps = (0, import_react20.useCallback)(function(_temp3) {
    let {
      item,
      index,
      refKey = "ref",
      ref,
      onMouseMove,
      onMouseDown,
      onClick,
      onPress,
      disabled,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    const {
      props: latestProps,
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    const onSelectKey = "onClick";
    const customClickHandler = onClick;
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick,
        index
      });
    };
    const itemHandleMouseDown = (e3) => e3.preventDefault();
    return {
      [refKey]: handleRefs(ref, (itemNode) => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      disabled,
      role: "option",
      "aria-selected": `${itemIndex === latestState.highlightedIndex}`,
      id: elementIds.getItemId(itemIndex),
      ...!disabled && {
        [onSelectKey]: callAllEventHandlers(customClickHandler, itemHandleClick)
      },
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
      onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown),
      ...rest
    };
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  const getToggleButtonProps = (0, import_react20.useCallback)(function(_temp4) {
    let {
      onClick,
      onPress,
      refKey = "ref",
      ref,
      ...rest
    } = _temp4 === void 0 ? {} : _temp4;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick
      });
      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return {
      [refKey]: handleRefs(ref, (toggleButtonNode) => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      id: elementIds.toggleButtonId,
      tabIndex: -1,
      ...!rest.disabled && {
        ...{
          onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
        }
      },
      ...rest
    };
  }, [dispatch, latest, elementIds]);
  const getInputProps = (0, import_react20.useCallback)(function(_temp5, _temp6) {
    let {
      onKeyDown,
      onChange,
      onInput,
      onBlur,
      onChangeText,
      refKey = "ref",
      ref,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    let {
      suppressRefError = false
    } = _temp6 === void 0 ? {} : _temp6;
    setGetterPropCallInfo("getInputProps", suppressRefError, refKey, inputRef);
    const latestState = latest.current.state;
    const inputHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };
    const inputHandleChange = (event) => {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };
    const inputHandleBlur = () => {
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    const onChangeKey = "onChange";
    let eventHandlers = {};
    if (!rest.disabled) {
      eventHandlers = {
        [onChangeKey]: callAllEventHandlers(onChange, onInput, inputHandleChange),
        onKeyDown: callAllEventHandlers(onKeyDown, inputHandleKeyDown),
        onBlur: callAllEventHandlers(onBlur, inputHandleBlur)
      };
    }
    return {
      [refKey]: handleRefs(ref, (inputNode) => {
        inputRef.current = inputNode;
      }),
      id: elementIds.inputId,
      "aria-autocomplete": "list",
      "aria-controls": elementIds.menuId,
      ...latestState.isOpen && latestState.highlightedIndex > -1 && {
        "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
      },
      "aria-labelledby": elementIds.labelId,
      // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
      // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
      autoComplete: "off",
      value: latestState.inputValue,
      ...eventHandlers,
      ...rest
    };
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);
  const getComboboxProps = (0, import_react20.useCallback)(function(_temp7, _temp8) {
    let {
      refKey = "ref",
      ref,
      ...rest
    } = _temp7 === void 0 ? {} : _temp7;
    let {
      suppressRefError = false
    } = _temp8 === void 0 ? {} : _temp8;
    setGetterPropCallInfo("getComboboxProps", suppressRefError, refKey, comboboxRef);
    return {
      [refKey]: handleRefs(ref, (comboboxNode) => {
        comboboxRef.current = comboboxNode;
      }),
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-owns": elementIds.menuId,
      "aria-expanded": latest.current.state.isOpen,
      ...rest
    };
  }, [latest, setGetterPropCallInfo, elementIds]);
  const toggleMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  const closeMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  const openMenu = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  const setHighlightedIndex = (0, import_react20.useCallback)((newHighlightedIndex) => {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = (0, import_react20.useCallback)((newSelectedItem) => {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const setInputValue = (0, import_react20.useCallback)((newInputValue) => {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  const reset = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getToggleButtonProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState(props) {
  const activeIndex = getInitialValue(props, "activeIndex");
  const selectedItems = getInitialValue(props, "selectedItems");
  return {
    activeIndex,
    selectedItems
  };
}
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  const element = event.target;
  if (element instanceof HTMLInputElement && // if element is a text input
  element.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }
  return true;
}
function getA11yRemovalMessage(selectionParameters) {
  const {
    removedSelectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return `${itemToStringLocal(removedSelectedItem)} has been removed.`;
}
var propTypes = {
  selectedItems: import_prop_types2.default.array,
  initialSelectedItems: import_prop_types2.default.array,
  defaultSelectedItems: import_prop_types2.default.array,
  itemToString: import_prop_types2.default.func,
  getA11yRemovalMessage: import_prop_types2.default.func,
  stateReducer: import_prop_types2.default.func,
  activeIndex: import_prop_types2.default.number,
  initialActiveIndex: import_prop_types2.default.number,
  defaultActiveIndex: import_prop_types2.default.number,
  onActiveIndexChange: import_prop_types2.default.func,
  onSelectedItemsChange: import_prop_types2.default.func,
  keyNavigationNext: import_prop_types2.default.string,
  keyNavigationPrevious: import_prop_types2.default.string,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any
    })
  })
};
var defaultProps = {
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
};
var validatePropTypes = noop2;
if (true) {
  validatePropTypes = (options2, caller) => {
    import_prop_types2.default.checkPropTypes(propTypes, options2, "prop", caller.name);
  };
}
var SelectedItemClick = true ? "__selected_item_click__" : 0;
var SelectedItemKeyDownDelete = true ? "__selected_item_keydown_delete__" : 1;
var SelectedItemKeyDownBackspace = true ? "__selected_item_keydown_backspace__" : 2;
var SelectedItemKeyDownNavigationNext = true ? "__selected_item_keydown_navigation_next__" : 3;
var SelectedItemKeyDownNavigationPrevious = true ? "__selected_item_keydown_navigation_previous__" : 4;
var DropdownKeyDownNavigationPrevious = true ? "__dropdown_keydown_navigation_previous__" : 5;
var DropdownKeyDownBackspace = true ? "__dropdown_keydown_backspace__" : 6;
var DropdownClick = true ? "__dropdown_click__" : 7;
var FunctionAddSelectedItem = true ? "__function_add_selected_item__" : 8;
var FunctionRemoveSelectedItem = true ? "__function_remove_selected_item__" : 9;
var FunctionSetSelectedItems = true ? "__function_set_selected_items__" : 10;
var FunctionSetActiveIndex = true ? "__function_set_active_index__" : 11;
var FunctionReset = true ? "__function_reset__" : 12;
var stateChangeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  SelectedItemClick,
  SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace,
  DropdownClick,
  FunctionAddSelectedItem,
  FunctionRemoveSelectedItem,
  FunctionSetSelectedItems,
  FunctionSetActiveIndex,
  FunctionReset
});
function downshiftMultipleSelectionReducer(state, action) {
  const {
    type,
    index,
    props,
    selectedItem
  } = action;
  const {
    activeIndex,
    selectedItems
  } = state;
  let changes;
  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      let newActiveIndex = activeIndex;
      if (selectedItems.length === 1) {
        newActiveIndex = -1;
      } else if (activeIndex === selectedItems.length - 1) {
        newActiveIndex = selectedItems.length - 2;
      }
      changes = {
        selectedItems: [...selectedItems.slice(0, activeIndex), ...selectedItems.slice(activeIndex + 1)],
        ...{
          activeIndex: newActiveIndex
        }
      };
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;
    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [...selectedItems, selectedItem]
      };
      break;
    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;
    case FunctionRemoveSelectedItem: {
      let newActiveIndex = activeIndex;
      const selectedItemIndex = selectedItems.indexOf(selectedItem);
      if (selectedItemIndex >= 0) {
        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (selectedItemIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }
        changes = {
          selectedItems: [...selectedItems.slice(0, selectedItemIndex), ...selectedItems.slice(selectedItemIndex + 1)],
          activeIndex: newActiveIndex
        };
      }
      break;
    }
    case FunctionSetSelectedItems: {
      const {
        selectedItems: newSelectedItems
      } = action;
      changes = {
        selectedItems: newSelectedItems
      };
      break;
    }
    case FunctionSetActiveIndex: {
      const {
        activeIndex: newActiveIndex
      } = action;
      changes = {
        activeIndex: newActiveIndex
      };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, "activeIndex"),
        selectedItems: getDefaultValue(props, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return {
    ...state,
    ...changes
  };
}
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes(userProps, useMultipleSelection);
  const props = {
    ...defaultProps,
    ...userProps
  };
  const {
    getA11yRemovalMessage: getA11yRemovalMessage2,
    itemToString: itemToString2,
    environment,
    keyNavigationNext,
    keyNavigationPrevious
  } = props;
  const [state, dispatch] = useControlledReducer$1(downshiftMultipleSelectionReducer, getInitialState(props), props);
  const {
    activeIndex,
    selectedItems
  } = state;
  const isInitialMountRef = (0, import_react20.useRef)(true);
  const dropdownRef = (0, import_react20.useRef)(null);
  const previousSelectedItemsRef = (0, import_react20.useRef)(selectedItems);
  const selectedItemRefs = (0, import_react20.useRef)();
  selectedItemRefs.current = [];
  const latest = useLatestRef({
    state,
    props
  });
  (0, import_react20.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      const removedSelectedItem = previousSelectedItemsRef.current.find((item) => selectedItems.indexOf(item) < 0);
      setStatus(getA11yRemovalMessage2({
        itemToString: itemToString2,
        resultCount: selectedItems.length,
        removedSelectedItem,
        activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }
    previousSelectedItemsRef.current = selectedItems;
  }, [selectedItems.length]);
  (0, import_react20.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps");
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);
  const selectedItemKeyDownHandlers = (0, import_react20.useMemo)(() => ({
    [keyNavigationPrevious]() {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    },
    [keyNavigationNext]() {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    },
    Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    },
    Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }
  }), [dispatch, keyNavigationNext, keyNavigationPrevious]);
  const dropdownKeyDownHandlers = (0, import_react20.useMemo)(() => ({
    [keyNavigationPrevious](event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    },
    Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }
  }), [dispatch, keyNavigationPrevious]);
  const getSelectedItemProps = (0, import_react20.useCallback)(function(_temp) {
    let {
      refKey = "ref",
      ref,
      onClick,
      onKeyDown,
      selectedItem,
      index,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    const {
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);
    if (itemIndex < 0) {
      throw new Error("Pass either selectedItem or index in getSelectedItemProps!");
    }
    const selectedItemHandleClick = () => {
      dispatch({
        type: SelectedItemClick,
        index
      });
    };
    const selectedItemHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    };
    return {
      [refKey]: handleRefs(ref, (selectedItemNode) => {
        if (selectedItemNode) {
          selectedItemRefs.current.push(selectedItemNode);
        }
      }),
      tabIndex: index === latestState.activeIndex ? 0 : -1,
      onClick: callAllEventHandlers(onClick, selectedItemHandleClick),
      onKeyDown: callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown),
      ...rest
    };
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  const getDropdownProps = (0, import_react20.useCallback)(function(_temp2, _temp3) {
    let {
      refKey = "ref",
      ref,
      onKeyDown,
      onClick,
      preventKeyAction = false,
      ...rest
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      suppressRefError = false
    } = _temp3 === void 0 ? {} : _temp3;
    setGetterPropCallInfo("getDropdownProps", suppressRefError, refKey, dropdownRef);
    const dropdownHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    };
    const dropdownHandleClick = () => {
      dispatch({
        type: DropdownClick
      });
    };
    return {
      [refKey]: handleRefs(ref, (dropdownNode) => {
        if (dropdownNode) {
          dropdownRef.current = dropdownNode;
        }
      }),
      ...!preventKeyAction && {
        onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
        onClick: callAllEventHandlers(onClick, dropdownHandleClick)
      },
      ...rest
    };
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);
  const addSelectedItem = (0, import_react20.useCallback)((selectedItem) => {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const removeSelectedItem = (0, import_react20.useCallback)((selectedItem) => {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const setSelectedItems = (0, import_react20.useCallback)((newSelectedItems) => {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  const setActiveIndex = (0, import_react20.useCallback)((newActiveIndex) => {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  const reset = (0, import_react20.useCallback)(() => {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex
  };
}

// src/components/sidebar/Search.tsx
var import_fuse = __toESM(require_fuse());
var import_react21 = __toESM(require_react());

// src/components/sidebar/types.ts
function isExpandType(x2) {
  return !!(x2 && x2.showAll);
}
function isSearchResult(x2) {
  return !!(x2 && x2.item);
}

// src/components/sidebar/Search.tsx
var { document: document6 } = scope;
var DEFAULT_MAX_SEARCH_RESULTS = 50;
var options = {
  shouldSort: true,
  tokenize: true,
  findAllMatches: true,
  includeScore: true,
  includeMatches: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
};
var ScreenReaderLabel = newStyled.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
});
var SearchIconWrapper = newStyled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 8,
  zIndex: 1,
  pointerEvents: "none",
  color: theme.textMutedColor,
  display: "flex",
  alignItems: "center",
  height: "100%"
}));
var SearchField = newStyled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
var Input = newStyled.input(({ theme }) => ({
  appearance: "none",
  height: 32,
  paddingLeft: 28,
  paddingRight: 28,
  border: `1px solid ${theme.appBorderColor}`,
  background: "transparent",
  borderRadius: 4,
  fontSize: `${theme.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: theme.color.defaultText,
  width: "100%",
  "&:focus, &:active": {
    outline: 0,
    borderColor: theme.color.secondary,
    background: theme.background.app
  },
  "&::placeholder": {
    color: theme.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
}));
var FocusKey = newStyled.code(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 9,
  height: 16,
  zIndex: 1,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4
}));
var FocusKeyCmd = newStyled.span({
  fontSize: "14px"
});
var ClearIcon = newStyled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 8,
  zIndex: 1,
  color: theme.textMutedColor,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: "100%"
}));
var FocusContainer = newStyled.div({ outline: 0 });
var Search = import_react21.default.memo(function Search2({
  children,
  dataset,
  enableShortcuts = true,
  getLastViewed,
  initialQuery = ""
}) {
  const api = useStorybookApi();
  const inputRef = (0, import_react21.useRef)(null);
  const [inputPlaceholder, setPlaceholder] = (0, import_react21.useState)("Find components");
  const [allComponents, showAllComponents] = (0, import_react21.useState)(false);
  const searchShortcut = api ? shortcutToHumanString(api.getShortcutKeys().search) : "/";
  const selectStory = (0, import_react21.useCallback)(
    (id, refId) => {
      if (api) {
        api.selectStory(id, void 0, { ref: refId !== DEFAULT_REF_ID && refId });
      }
      inputRef.current.blur();
      showAllComponents(false);
    },
    [api, inputRef, showAllComponents, DEFAULT_REF_ID]
  );
  const list = (0, import_react21.useMemo)(() => {
    return dataset.entries.reduce((acc, [refId, { index, status }]) => {
      const groupStatus = getGroupStatus(index || {}, status);
      if (index) {
        acc.push(
          ...Object.values(index).map((item) => {
            const statusValue = status && status[item.id] ? getHighestStatus(Object.values(status[item.id] || {}).map((s2) => s2.status)) : null;
            return {
              ...searchItem(item, dataset.hash[refId]),
              status: statusValue || groupStatus[item.id] || null
            };
          })
        );
      }
      return acc;
    }, []);
  }, [dataset]);
  const fuse = (0, import_react21.useMemo)(() => new import_fuse.default(list, options), [list]);
  const getResults = (0, import_react21.useCallback)(
    (input) => {
      if (!input)
        return [];
      let results = [];
      const resultIds = /* @__PURE__ */ new Set();
      const distinctResults = fuse.search(input).filter(({ item }) => {
        if (!(item.type === "component" || item.type === "docs" || item.type === "story") || resultIds.has(item.parent))
          return false;
        resultIds.add(item.id);
        return true;
      });
      if (distinctResults.length) {
        results = distinctResults.slice(0, allComponents ? 1e3 : DEFAULT_MAX_SEARCH_RESULTS);
        if (distinctResults.length > DEFAULT_MAX_SEARCH_RESULTS && !allComponents) {
          results.push({
            showAll: () => showAllComponents(true),
            totalCount: distinctResults.length,
            moreCount: distinctResults.length - DEFAULT_MAX_SEARCH_RESULTS
          });
        }
      }
      return results;
    },
    [allComponents, fuse]
  );
  const stateReducer2 = (0, import_react21.useCallback)(
    (state, changes) => {
      switch (changes.type) {
        case Downshift$1.stateChangeTypes.blurInput: {
          return {
            ...changes,
            // Prevent clearing the input on blur
            inputValue: state.inputValue,
            // Return to the tree view after selecting an item
            isOpen: state.inputValue && !state.selectedItem,
            selectedItem: null
          };
        }
        case Downshift$1.stateChangeTypes.mouseUp: {
          return {};
        }
        case Downshift$1.stateChangeTypes.keyDownEscape: {
          if (state.inputValue) {
            return { ...changes, inputValue: "", isOpen: true, selectedItem: null };
          }
          inputRef.current.blur();
          return { ...changes, isOpen: false, selectedItem: null };
        }
        case Downshift$1.stateChangeTypes.clickItem:
        case Downshift$1.stateChangeTypes.keyDownEnter: {
          if (isSearchResult(changes.selectedItem)) {
            const { id, refId } = changes.selectedItem.item;
            selectStory(id, refId);
            return { ...changes, inputValue: state.inputValue, isOpen: false };
          }
          if (isExpandType(changes.selectedItem)) {
            changes.selectedItem.showAll();
            return {};
          }
          return changes;
        }
        case Downshift$1.stateChangeTypes.changeInput: {
          showAllComponents(false);
          return changes;
        }
        default:
          return changes;
      }
    },
    [inputRef, selectStory, showAllComponents]
  );
  return /* @__PURE__ */ import_react21.default.createElement(
    Downshift$1,
    {
      initialInputValue: initialQuery,
      stateReducer: stateReducer2,
      itemToString: (result) => result?.item?.name || "",
      scrollIntoView: (e3) => scrollIntoView(e3)
    },
    ({
      isOpen,
      openMenu,
      closeMenu,
      inputValue,
      clearSelection,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getRootProps,
      highlightedIndex
    }) => {
      const input = inputValue ? inputValue.trim() : "";
      let results = input ? getResults(input) : [];
      const lastViewed = !input && getLastViewed();
      if (lastViewed && lastViewed.length) {
        results = lastViewed.reduce((acc, { storyId, refId }) => {
          const data = dataset.hash[refId];
          if (data && data.index && data.index[storyId]) {
            const story = data.index[storyId];
            const item = story.type === "story" ? data.index[story.parent] : story;
            if (!acc.some((res) => res.item.refId === refId && res.item.id === item.id)) {
              acc.push({ item: searchItem(item, dataset.hash[refId]), matches: [], score: 0 });
            }
          }
          return acc;
        }, []);
      }
      const inputId = "storybook-explorer-searchfield";
      const inputProps = getInputProps({
        id: inputId,
        ref: inputRef,
        required: true,
        type: "search",
        placeholder: inputPlaceholder,
        onFocus: () => {
          openMenu();
          setPlaceholder("Type to find...");
        },
        onBlur: () => setPlaceholder("Find components")
      });
      const labelProps = getLabelProps({
        htmlFor: inputId
      });
      return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(ScreenReaderLabel, { ...labelProps }, "Search for components"), /* @__PURE__ */ import_react21.default.createElement(
        SearchField,
        {
          ...getRootProps({ refKey: "" }, { suppressRefError: true }),
          className: "search-field"
        },
        /* @__PURE__ */ import_react21.default.createElement(SearchIconWrapper, null, /* @__PURE__ */ import_react21.default.createElement(SearchIcon, null)),
        /* @__PURE__ */ import_react21.default.createElement(Input, { ...inputProps }),
        enableShortcuts && !isOpen && /* @__PURE__ */ import_react21.default.createElement(FocusKey, null, searchShortcut === "\u2318 K" ? /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(FocusKeyCmd, null, "\u2318"), "K") : searchShortcut),
        isOpen && /* @__PURE__ */ import_react21.default.createElement(ClearIcon, { onClick: () => clearSelection() }, /* @__PURE__ */ import_react21.default.createElement(CloseIcon, null))
      ), /* @__PURE__ */ import_react21.default.createElement(FocusContainer, { tabIndex: 0, id: "storybook-explorer-menu" }, children({
        query: input,
        results,
        isBrowsing: !isOpen && document6.activeElement !== inputRef.current,
        closeMenu,
        getMenuProps,
        getItemProps,
        highlightedIndex
      })));
    }
  );
});

// src/components/sidebar/SearchResults.tsx
var import_react22 = __toESM(require_react());
var { document: document7 } = scope;
var ResultsList = newStyled.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
});
var ResultRow = newStyled.li(({ theme, isHighlighted }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  color: "inherit",
  fontSize: `${theme.typography.size.s2}px`,
  background: isHighlighted ? theme.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: curriedTransparentize$1(0.93, theme.color.secondary),
    outline: "none"
  }
}));
var IconWrapper = newStyled.div({
  marginTop: 2
});
var ResultRowContent = newStyled.div(() => ({
  display: "flex",
  flexDirection: "column"
}));
var NoResults = newStyled.div(({ theme }) => ({
  marginTop: 20,
  textAlign: "center",
  fontSize: `${theme.typography.size.s2}px`,
  lineHeight: `18px`,
  color: theme.color.defaultText,
  small: {
    color: theme.barTextColor,
    fontSize: `${theme.typography.size.s1}px`
  }
}));
var Mark = newStyled.mark(({ theme }) => ({
  background: "transparent",
  color: theme.color.secondary
}));
var MoreWrapper = newStyled.div({
  marginTop: 8
});
var RecentlyOpenedTitle = newStyled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${theme.typography.size.s1 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
}));
var Highlight = import_react22.default.memo(function Highlight2({
  children,
  match
}) {
  if (!match)
    return children;
  const { value, indices } = match;
  const { nodes: result } = indices.reduce(
    ({ cursor, nodes }, [start, end], index, { length }) => {
      nodes.push(/* @__PURE__ */ import_react22.default.createElement("span", null, value.slice(cursor, start)));
      nodes.push(/* @__PURE__ */ import_react22.default.createElement(Mark, null, value.slice(start, end + 1)));
      if (index === length - 1) {
        nodes.push(/* @__PURE__ */ import_react22.default.createElement("span", null, value.slice(end + 1)));
      }
      return { cursor: end + 1, nodes };
    },
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ import_react22.default.createElement("span", null, result);
});
var Title = newStyled.div(({ theme }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  color: theme.textMutedColor,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));
var Path = newStyled.div(({ theme }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  color: theme.textMutedColor,
  fontSize: `${theme.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
}));
var Result = import_react22.default.memo(function Result2({ item, matches, icon, onClick, ...props }) {
  const click = (0, import_react22.useCallback)(
    (event) => {
      event.preventDefault();
      onClick(event);
    },
    [onClick]
  );
  const api = useStorybookApi();
  (0, import_react22.useEffect)(() => {
    if (api && props.isHighlighted && item.type === "component") {
      api.emit(PRELOAD_ENTRIES, { ids: [item.children[0]] }, { options: { target: item.refId } });
    }
  }, [props.isHighlighted, item]);
  const nameMatch = matches.find((match) => match.key === "name");
  const pathMatches = matches.filter((match) => match.key === "path");
  const [i3] = item.status ? statusMapping[item.status] : [];
  return /* @__PURE__ */ import_react22.default.createElement(ResultRow, { ...props, onClick: click }, /* @__PURE__ */ import_react22.default.createElement(IconWrapper, null, item.type === "component" && /* @__PURE__ */ import_react22.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ import_react22.default.createElement(UseSymbol, { type: "component" })), item.type === "story" && /* @__PURE__ */ import_react22.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ import_react22.default.createElement(UseSymbol, { type: "story" })), !(item.type === "component" || item.type === "story") && /* @__PURE__ */ import_react22.default.createElement(TypeIcon, { viewBox: "0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ import_react22.default.createElement(UseSymbol, { type: "document" }))), /* @__PURE__ */ import_react22.default.createElement(ResultRowContent, { className: "search-result-item--label" }, /* @__PURE__ */ import_react22.default.createElement(Title, null, /* @__PURE__ */ import_react22.default.createElement(Highlight, { match: nameMatch }, item.name)), /* @__PURE__ */ import_react22.default.createElement(Path, null, item.path.map((group, index) => /* @__PURE__ */ import_react22.default.createElement("span", { key: index }, /* @__PURE__ */ import_react22.default.createElement(Highlight, { match: pathMatches.find((match) => match.arrayIndex === index) }, group))))), item.status ? i3 : null);
});
var SearchResults = import_react22.default.memo(function SearchResults2({
  query,
  results,
  closeMenu,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  isLoading = false,
  enableShortcuts = true,
  clearLastViewed
}) {
  const api = useStorybookApi();
  (0, import_react22.useEffect)(() => {
    const handleEscape = (event) => {
      if (!enableShortcuts || isLoading || event.repeat)
        return;
      if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
        const target = event.target;
        if (target?.id === "storybook-explorer-searchfield")
          return;
        event.preventDefault();
        closeMenu();
      }
    };
    document7.addEventListener("keydown", handleEscape);
    return () => document7.removeEventListener("keydown", handleEscape);
  }, [closeMenu, enableShortcuts, isLoading]);
  const mouseOverHandler = (0, import_react22.useCallback)((event) => {
    if (!api) {
      return;
    }
    const currentTarget = event.currentTarget;
    const storyId = currentTarget.getAttribute("data-id");
    const refId = currentTarget.getAttribute("data-refid");
    const item = api.resolveStory(storyId, refId === "storybook_internal" ? void 0 : refId);
    if (item?.type === "component") {
      api.emit(PRELOAD_ENTRIES, {
        // @ts-expect-error (TODO)
        ids: [item.isLeaf ? item.id : item.children[0]],
        options: { target: refId }
      });
    }
  }, []);
  const handleClearLastViewed = () => {
    clearLastViewed();
    closeMenu();
  };
  return /* @__PURE__ */ import_react22.default.createElement(ResultsList, { ...getMenuProps() }, results.length > 0 && !query && /* @__PURE__ */ import_react22.default.createElement(RecentlyOpenedTitle, { className: "search-result-recentlyOpened" }, "Recently opened", /* @__PURE__ */ import_react22.default.createElement(
    IconButton,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: handleClearLastViewed
    },
    /* @__PURE__ */ import_react22.default.createElement(TrashIcon, null)
  )), results.length === 0 && query && /* @__PURE__ */ import_react22.default.createElement("li", null, /* @__PURE__ */ import_react22.default.createElement(NoResults, null, /* @__PURE__ */ import_react22.default.createElement("strong", null, "No components found"), /* @__PURE__ */ import_react22.default.createElement("br", null), /* @__PURE__ */ import_react22.default.createElement("small", null, "Find components by name or path."))), results.map((result, index) => {
    if (isExpandType(result)) {
      return /* @__PURE__ */ import_react22.default.createElement(MoreWrapper, { key: "search-result-expand" }, /* @__PURE__ */ import_react22.default.createElement(
        Button,
        {
          ...result,
          ...getItemProps({ key: index, index, item: result }),
          size: "small"
        },
        "Show ",
        result.moreCount,
        " more results"
      ));
    }
    const { item } = result;
    const key = `${item.refId}::${item.id}`;
    return /* @__PURE__ */ import_react22.default.createElement(
      Result,
      {
        key: item.id,
        ...result,
        ...getItemProps({ key, index, item: result }),
        isHighlighted: highlightedIndex === index,
        "data-id": result.item.id,
        "data-refid": result.item.refId,
        onMouseOver: mouseOverHandler,
        className: "search-result-item"
      }
    );
  }));
});

// src/components/sidebar/useLastViewed.ts
var import_debounce = __toESM(require_debounce());
var import_react23 = __toESM(require_react());
var import_store2 = __toESM(require_store2());
var save = (0, import_debounce.default)((value) => import_store2.default.set("lastViewedStoryIds", value), 1e3);
var useLastViewed = (selection) => {
  const initialLastViewedStoryIds = (0, import_react23.useMemo)(() => {
    const items = import_store2.default.get("lastViewedStoryIds");
    if (!items || !Array.isArray(items))
      return [];
    if (!items.some((item) => typeof item === "object" && item.storyId && item.refId))
      return [];
    return items;
  }, [import_store2.default]);
  const lastViewedRef = (0, import_react23.useRef)(initialLastViewedStoryIds);
  const updateLastViewed = (0, import_react23.useCallback)(
    (story) => {
      const items = lastViewedRef.current;
      const index = items.findIndex(
        ({ storyId, refId }) => storyId === story.storyId && refId === story.refId
      );
      if (index === 0)
        return;
      if (index === -1) {
        lastViewedRef.current = [story, ...items];
      } else {
        lastViewedRef.current = [story, ...items.slice(0, index), ...items.slice(index + 1)];
      }
      save(lastViewedRef.current);
    },
    [lastViewedRef]
  );
  (0, import_react23.useEffect)(() => {
    if (selection)
      updateLastViewed(selection);
  }, [selection]);
  return {
    getLastViewed: (0, import_react23.useCallback)(() => lastViewedRef.current, [lastViewedRef]),
    clearLastViewed: (0, import_react23.useCallback)(() => {
      lastViewedRef.current = lastViewedRef.current.slice(0, 1);
      save(lastViewedRef.current);
    }, [lastViewedRef])
  };
};

// src/components/sidebar/Sidebar.tsx
var DEFAULT_REF_ID = "storybook_internal";
var Container2 = newStyled.nav(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.background.content,
  [MEDIA_DESKTOP_BREAKPOINT]: {
    background: theme.background.app
  }
}));
var Top = newStyled(Spaced)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
});
var Bottom = newStyled.div(({ theme }) => ({
  borderTop: `1px solid ${theme.appBorderColor}`,
  padding: theme.layoutMargin / 2,
  display: "flex",
  flexWrap: "wrap",
  gap: theme.layoutMargin / 2,
  backgroundColor: theme.barBg,
  "&:empty": {
    display: "none"
  }
}));
var Swap = import_react24.default.memo(function Swap2({
  children,
  condition
}) {
  const [a2, b2] = import_react24.default.Children.toArray(children);
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, /* @__PURE__ */ import_react24.default.createElement("div", { style: { display: condition ? "block" : "none" } }, a2), /* @__PURE__ */ import_react24.default.createElement("div", { style: { display: condition ? "none" : "block" } }, b2));
});
var useCombination = (defaultRefData, refs) => {
  const hash = (0, import_react24.useMemo)(
    () => ({
      [DEFAULT_REF_ID]: {
        ...defaultRefData,
        title: null,
        id: DEFAULT_REF_ID,
        url: "iframe.html"
      },
      ...refs
    }),
    [refs, defaultRefData]
  );
  return (0, import_react24.useMemo)(() => ({ hash, entries: Object.entries(hash) }), [hash]);
};
var Sidebar = import_react24.default.memo(function Sidebar2({
  storyId = null,
  refId = DEFAULT_REF_ID,
  index,
  indexError,
  status,
  previewInitialized,
  menu,
  extra,
  bottom = [],
  menuHighlighted = false,
  enableShortcuts = true,
  refs = {},
  onMenuClick
}) {
  const selected = (0, import_react24.useMemo)(() => storyId && { storyId, refId }, [storyId, refId]);
  const dataset = useCombination({ index, indexError, previewInitialized, status }, refs);
  const isLoading = !index && !indexError;
  const lastViewedProps = useLastViewed(selected);
  return /* @__PURE__ */ import_react24.default.createElement(Container2, { className: "container sidebar-container" }, /* @__PURE__ */ import_react24.default.createElement(ScrollArea, { vertical: true, offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ import_react24.default.createElement(Top, { row: 1.6 }, /* @__PURE__ */ import_react24.default.createElement(
    Heading,
    {
      className: "sidebar-header",
      menuHighlighted,
      menu,
      extra,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading,
      onMenuClick
    }
  ), /* @__PURE__ */ import_react24.default.createElement(Search, { dataset, enableShortcuts, ...lastViewedProps }, ({
    query,
    results,
    isBrowsing,
    closeMenu,
    getMenuProps,
    getItemProps,
    highlightedIndex
  }) => /* @__PURE__ */ import_react24.default.createElement(Swap, { condition: isBrowsing }, /* @__PURE__ */ import_react24.default.createElement(
    Explorer,
    {
      dataset,
      selected,
      isLoading,
      isBrowsing
    }
  ), /* @__PURE__ */ import_react24.default.createElement(
    SearchResults,
    {
      query,
      results,
      closeMenu,
      getMenuProps,
      getItemProps,
      highlightedIndex,
      enableShortcuts,
      isLoading,
      clearLastViewed: lastViewedProps.clearLastViewed
    }
  ))))), isLoading ? null : /* @__PURE__ */ import_react24.default.createElement(Bottom, null, bottom.map(({ id, render: Render }) => /* @__PURE__ */ import_react24.default.createElement(Render, { key: id }))));
});

// src/container/Menu.tsx
var import_react25 = __toESM(require_react());
var focusableUIElements = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
};
var Key = newStyled.span(({ theme }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: theme.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
}));
var KeyChild = newStyled.code(
  ({ theme }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
);
var Shortcut = ({ keys }) => /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, /* @__PURE__ */ import_react25.default.createElement(Key, null, keys.map((key, index) => /* @__PURE__ */ import_react25.default.createElement(KeyChild, { key }, shortcutToHumanString([key])))));
var useMenu = (state, api, showToolbar, isFullscreen, isPanelShown, isNavShown, enableShortcuts) => {
  const theme = useTheme();
  const shortcutKeys = api.getShortcutKeys();
  const about = (0, import_react25.useMemo)(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: () => api.changeSettingsTab("about"),
      icon: /* @__PURE__ */ import_react25.default.createElement(InfoIcon, null)
    }),
    [api]
  );
  const documentation = (0, import_react25.useMemo)(() => {
    const docsUrl = api.getDocsUrl({ versioned: true, renderer: true });
    return {
      id: "documentation",
      title: "Documentation",
      href: docsUrl,
      icon: /* @__PURE__ */ import_react25.default.createElement(ShareAltIcon, null)
    };
  }, [api]);
  const whatsNewNotificationsEnabled = state.whatsNewData?.status === "SUCCESS" && !state.disableWhatsNewNotifications;
  const isWhatsNewUnread = api.isWhatsNewUnread();
  const whatsNew = (0, import_react25.useMemo)(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: () => api.changeSettingsTab("whats-new"),
      right: whatsNewNotificationsEnabled && isWhatsNewUnread && /* @__PURE__ */ import_react25.default.createElement(Badge, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ import_react25.default.createElement(WandIcon, null)
    }),
    [api, whatsNewNotificationsEnabled, isWhatsNewUnread]
  );
  const shortcuts = (0, import_react25.useMemo)(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: () => api.changeSettingsTab("shortcuts"),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.shortcutsPage }) : null,
      style: {
        borderBottom: `4px solid ${theme.appBorderColor}`
      }
    }),
    [api, enableShortcuts, shortcutKeys.shortcutsPage, theme.appBorderColor]
  );
  const sidebarToggle = (0, import_react25.useMemo)(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: () => api.toggleNav(),
      active: isNavShown,
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.toggleNav }) : null,
      icon: isNavShown ? /* @__PURE__ */ import_react25.default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isNavShown]
  );
  const toolbarToogle = (0, import_react25.useMemo)(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: () => api.toggleToolbar(),
      active: showToolbar,
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.toolbar }) : null,
      icon: showToolbar ? /* @__PURE__ */ import_react25.default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, showToolbar]
  );
  const addonsToggle = (0, import_react25.useMemo)(
    () => ({
      id: "A",
      title: "Show addons",
      onClick: () => api.togglePanel(),
      active: isPanelShown,
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.togglePanel }) : null,
      icon: isPanelShown ? /* @__PURE__ */ import_react25.default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isPanelShown]
  );
  const addonsOrientationToggle = (0, import_react25.useMemo)(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: () => api.togglePanelPosition(),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.panelPosition }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const fullscreenToggle = (0, import_react25.useMemo)(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: () => api.toggleFullscreen(),
      active: isFullscreen,
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.fullScreen }) : null,
      icon: isFullscreen ? /* @__PURE__ */ import_react25.default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isFullscreen]
  );
  const searchToggle = (0, import_react25.useMemo)(
    () => ({
      id: "/",
      title: "Search",
      onClick: () => api.focusOnUIElement(focusableUIElements.storySearchField),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.search }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const up = (0, import_react25.useMemo)(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: () => api.jumpToComponent(-1),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.prevComponent }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const down = (0, import_react25.useMemo)(
    () => ({
      id: "down",
      title: "Next component",
      onClick: () => api.jumpToComponent(1),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.nextComponent }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const prev = (0, import_react25.useMemo)(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: () => api.jumpToStory(-1),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.prevStory }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const next = (0, import_react25.useMemo)(
    () => ({
      id: "next",
      title: "Next story",
      onClick: () => api.jumpToStory(1),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.nextStory }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const collapse = (0, import_react25.useMemo)(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: () => api.collapseAll(),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: shortcutKeys.collapseAll }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const getAddonsShortcuts = (0, import_react25.useCallback)(() => {
    const addonsShortcuts = api.getAddonsShortcuts();
    const keys = shortcutKeys;
    return Object.entries(addonsShortcuts).filter(([_2, { showInMenu }]) => showInMenu).map(([actionName, { label, action }]) => ({
      id: actionName,
      title: label,
      onClick: () => action(),
      right: enableShortcuts ? /* @__PURE__ */ import_react25.default.createElement(Shortcut, { keys: keys[actionName] }) : null
    }));
  }, [api, enableShortcuts, shortcutKeys]);
  return (0, import_react25.useMemo)(
    () => [
      about,
      ...state.whatsNewData?.status === "SUCCESS" ? [whatsNew] : [],
      documentation,
      shortcuts,
      sidebarToggle,
      toolbarToogle,
      addonsToggle,
      addonsOrientationToggle,
      fullscreenToggle,
      searchToggle,
      up,
      down,
      prev,
      next,
      collapse,
      ...getAddonsShortcuts()
    ],
    [
      about,
      state,
      whatsNew,
      documentation,
      shortcuts,
      sidebarToggle,
      toolbarToogle,
      addonsToggle,
      addonsOrientationToggle,
      fullscreenToggle,
      searchToggle,
      up,
      down,
      prev,
      next,
      collapse,
      getAddonsShortcuts
    ]
  );
};

// src/container/Sidebar.tsx
var Sidebar3 = import_react26.default.memo(function Sideber({ onMenuClick }) {
  const mapper4 = ({ state, api }) => {
    const {
      ui: { name, url, enableShortcuts },
      viewMode,
      storyId,
      refId,
      layout: { showToolbar },
      index,
      status,
      indexError,
      previewInitialized,
      refs
    } = state;
    const menu = useMenu(
      state,
      api,
      showToolbar,
      api.getIsFullscreen(),
      api.getIsPanelShown(),
      api.getIsNavShown(),
      enableShortcuts
    );
    const whatsNewNotificationsEnabled = state.whatsNewData?.status === "SUCCESS" && !state.disableWhatsNewNotifications;
    const bottomItems = api.getElements(Addon_TypesEnum.experimental_SIDEBAR_BOTTOM);
    const topItems = api.getElements(Addon_TypesEnum.experimental_SIDEBAR_TOP);
    const bottom = (0, import_react26.useMemo)(() => Object.values(bottomItems), [...Object.values(bottomItems)]);
    const top = (0, import_react26.useMemo)(() => Object.values(topItems), [...Object.values(topItems)]);
    return {
      title: name,
      url,
      index,
      indexError,
      status,
      previewInitialized,
      refs,
      storyId,
      refId,
      viewMode,
      menu,
      menuHighlighted: whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
      enableShortcuts,
      bottom,
      extra: top
    };
  };
  return /* @__PURE__ */ import_react26.default.createElement(ManagerConsumer, { filter: mapper4 }, (fromState) => {
    return /* @__PURE__ */ import_react26.default.createElement(Sidebar, { ...fromState, onMenuClick });
  });
});
var Sidebar_default = Sidebar3;

// src/container/Preview.tsx
var import_react38 = __toESM(require_react());

// src/components/preview/Preview.tsx
var import_react37 = __toESM(require_react());

// src/components/preview/utils/components.ts
var PreviewContainer = newStyled.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
});
var FrameWrap = newStyled.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
});
var UnstyledLink = newStyled(Link2)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
});
var DesktopOnly = newStyled.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
});
var IframeWrapper = newStyled.div(({ theme }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
}));
var LoaderWrapper = newStyled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: theme.background.preview,
  zIndex: 1
}));

// src/components/preview/tools/zoom.tsx
var import_react27 = __toESM(require_react());
var initialZoom = 1;
var Context = (0, import_react27.createContext)({ value: initialZoom, set: (v2) => {
} });
var ZoomProvider = class extends import_react27.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: initialZoom
    };
    this.set = (value) => this.setState({ value });
  }
  render() {
    const { children, shouldScale } = this.props;
    const { set } = this;
    const { value } = this.state;
    return /* @__PURE__ */ import_react27.default.createElement(Context.Provider, { value: { value: shouldScale ? value : initialZoom, set } }, children);
  }
};
var { Consumer: ZoomConsumer } = Context;
var Zoom2 = (0, import_react27.memo)(function Zoom3({ zoomIn, zoomOut, reset }) {
  return /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, /* @__PURE__ */ import_react27.default.createElement(IconButton, { key: "zoomin", onClick: zoomIn, title: "Zoom in" }, /* @__PURE__ */ import_react27.default.createElement(ZoomIcon, null)), /* @__PURE__ */ import_react27.default.createElement(IconButton, { key: "zoomout", onClick: zoomOut, title: "Zoom out" }, /* @__PURE__ */ import_react27.default.createElement(ZoomOutIcon, null)), /* @__PURE__ */ import_react27.default.createElement(IconButton, { key: "zoomreset", onClick: reset, title: "Reset zoom" }, /* @__PURE__ */ import_react27.default.createElement(ZoomResetIcon, null)));
});
var ZoomWrapper = (0, import_react27.memo)(function ZoomWrapper2({
  set,
  value
}) {
  const zoomIn = (0, import_react27.useCallback)(
    (e3) => {
      e3.preventDefault();
      set(0.8 * value);
    },
    [set, value]
  );
  const zoomOut = (0, import_react27.useCallback)(
    (e3) => {
      e3.preventDefault();
      set(1.25 * value);
    },
    [set, value]
  );
  const reset = (0, import_react27.useCallback)(
    (e3) => {
      e3.preventDefault();
      set(initialZoom);
    },
    [set, initialZoom]
  );
  return /* @__PURE__ */ import_react27.default.createElement(Zoom2, { key: "zoom", ...{ zoomIn, zoomOut, reset } });
});
function ZoomToolRenderer() {
  return /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, /* @__PURE__ */ import_react27.default.createElement(ZoomConsumer, null, ({ set, value }) => /* @__PURE__ */ import_react27.default.createElement(ZoomWrapper, { ...{ set, value } })), /* @__PURE__ */ import_react27.default.createElement(Separator, null));
}
var zoomTool = {
  title: "zoom",
  id: "zoom",
  type: typesX.TOOL,
  match: ({ viewMode }) => viewMode === "story",
  render: ZoomToolRenderer
};

// src/components/preview/Wrappers.tsx
var import_react28 = __toESM(require_react());
var ApplyWrappers = ({
  wrappers,
  id,
  storyId,
  active,
  children
}) => {
  return /* @__PURE__ */ import_react28.default.createElement(import_react28.Fragment, null, wrappers.reduceRight(
    (acc, wrapper, index) => /* @__PURE__ */ import_react28.default.createElement(wrapper.render, { ...{ index, children: acc, id, storyId, active } }),
    children
  ));
};
var defaultWrappers = [
  {
    id: "iframe-wrapper",
    type: Addon_TypesEnum.PREVIEW,
    render: (p2) => /* @__PURE__ */ import_react28.default.createElement(IframeWrapper, { id: "storybook-preview-wrapper", hidden: !p2.active }, p2.children)
  }
];

// src/components/preview/Toolbar.tsx
var import_react34 = __toESM(require_react());

// src/components/preview/tools/copy.tsx
var import_react29 = __toESM(require_react());
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
var { PREVIEW_URL, document: document8 } = scope;
var copyMapper = ({ state }) => {
  const { storyId, refId, refs } = state;
  const { location } = document8;
  const ref = refs[refId];
  let baseUrl = `${location.origin}${location.pathname}`;
  if (!baseUrl.endsWith("/"))
    baseUrl += "/";
  return {
    refId,
    baseUrl: ref ? `${ref.url}/iframe.html` : PREVIEW_URL || `${baseUrl}iframe.html`,
    storyId,
    queryParams: state.customQueryParams
  };
};
var copyTool = {
  title: "copy",
  id: "copy",
  type: typesX.TOOL,
  match: ({ viewMode }) => viewMode === "story",
  render: () => /* @__PURE__ */ import_react29.default.createElement(ManagerConsumer, { filter: copyMapper }, ({ baseUrl, storyId, queryParams }) => storyId ? /* @__PURE__ */ import_react29.default.createElement(
    IconButton,
    {
      key: "copy",
      onClick: () => (0, import_copy_to_clipboard.default)(getStoryHref(baseUrl, storyId, queryParams)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ import_react29.default.createElement(LinkIcon, null)
  ) : null)
};

// src/components/preview/tools/eject.tsx
var import_react30 = __toESM(require_react());
var { PREVIEW_URL: PREVIEW_URL2 } = scope;
var ejectMapper = ({ state }) => {
  const { storyId, refId, refs } = state;
  const ref = refs[refId];
  return {
    refId,
    baseUrl: ref ? `${ref.url}/iframe.html` : PREVIEW_URL2 || "iframe.html",
    storyId,
    queryParams: state.customQueryParams
  };
};
var ejectTool = {
  title: "eject",
  id: "eject",
  type: typesX.TOOL,
  match: ({ viewMode }) => viewMode === "story",
  render: () => /* @__PURE__ */ import_react30.default.createElement(ManagerConsumer, { filter: ejectMapper }, ({ baseUrl, storyId, queryParams }) => storyId ? /* @__PURE__ */ import_react30.default.createElement(IconButton, { key: "opener", asChild: true }, /* @__PURE__ */ import_react30.default.createElement(
    "a",
    {
      href: getStoryHref(baseUrl, storyId, queryParams),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
    /* @__PURE__ */ import_react30.default.createElement(ShareAltIcon, null)
  )) : null)
};

// src/components/preview/tools/menu.tsx
var import_react31 = __toESM(require_react());
var menuMapper = ({ api, state }) => ({
  isVisible: api.getIsNavShown(),
  singleStory: state.singleStory,
  toggle: () => api.toggleNav()
});
var menuTool = {
  title: "menu",
  id: "menu",
  type: typesX.TOOL,
  match: ({ viewMode }) => ["story", "docs"].includes(viewMode),
  render: () => /* @__PURE__ */ import_react31.default.createElement(ManagerConsumer, { filter: menuMapper }, ({ isVisible, toggle, singleStory }) => !singleStory && !isVisible && /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, null, /* @__PURE__ */ import_react31.default.createElement(IconButton, { "aria-label": "Show sidebar", key: "menu", onClick: toggle, title: "Show sidebar" }, /* @__PURE__ */ import_react31.default.createElement(MenuIcon, null)), /* @__PURE__ */ import_react31.default.createElement(Separator, null)))
};

// src/components/preview/tools/addons.tsx
var import_react32 = __toESM(require_react());
var menuMapper2 = ({ api, state }) => ({
  isVisible: api.getIsPanelShown(),
  singleStory: state.singleStory,
  panelPosition: state.layout.panelPosition,
  toggle: () => api.togglePanel()
});
var addonsTool = {
  title: "addons",
  id: "addons",
  type: typesX.TOOL,
  match: ({ viewMode }) => viewMode === "story",
  render: () => /* @__PURE__ */ import_react32.default.createElement(ManagerConsumer, { filter: menuMapper2 }, ({ isVisible, toggle, singleStory, panelPosition }) => !singleStory && !isVisible && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(IconButton, { "aria-label": "Show addons", key: "addons", onClick: toggle, title: "Show addons" }, panelPosition === "bottom" ? /* @__PURE__ */ import_react32.default.createElement(BottomBarIcon, null) : /* @__PURE__ */ import_react32.default.createElement(SidebarAltIcon, null))))
};

// src/components/preview/tools/remount.tsx
var import_react33 = __toESM(require_react());
var StyledAnimatedIconButton = newStyled(IconButton)(({ theme, animating, disabled }) => ({
  opacity: disabled ? 0.5 : 1,
  svg: {
    animation: animating && `${theme.animation.rotate360} 1000ms ease-out`
  }
}));
var menuMapper3 = ({ api, state }) => {
  const { storyId } = state;
  return {
    storyId,
    remount: () => api.emit(FORCE_REMOUNT, { storyId: state.storyId }),
    api
  };
};
var remountTool = {
  title: "remount",
  id: "remount",
  type: typesX.TOOL,
  match: ({ viewMode }) => viewMode === "story",
  render: () => /* @__PURE__ */ import_react33.default.createElement(ManagerConsumer, { filter: menuMapper3 }, ({ remount, storyId, api }) => {
    const [isAnimating, setIsAnimating] = (0, import_react33.useState)(false);
    const remountComponent = () => {
      if (!storyId)
        return;
      remount();
    };
    api.on(FORCE_REMOUNT, () => {
      setIsAnimating(true);
    });
    return /* @__PURE__ */ import_react33.default.createElement(
      StyledAnimatedIconButton,
      {
        key: "remount",
        title: "Remount component",
        onClick: remountComponent,
        onAnimationEnd: () => setIsAnimating(false),
        animating: isAnimating,
        disabled: !storyId
      },
      /* @__PURE__ */ import_react33.default.createElement(SyncIcon, null)
    );
  })
};

// src/components/preview/Toolbar.tsx
var getTools = (getFn) => Object.values(getFn(typesX.TOOL));
var getToolsExtra = (getFn) => Object.values(getFn(typesX.TOOLEXTRA));
var fullScreenMapper = ({ api, state }) => {
  return {
    toggle: api.toggleFullscreen,
    isFullscreen: api.getIsFullscreen(),
    shortcut: shortcutToHumanString(api.getShortcutKeys().fullScreen),
    hasPanel: Object.keys(api.getElements(Addon_TypesEnum.PANEL)).length > 0,
    singleStory: state.singleStory
  };
};
var fullScreenTool = {
  title: "fullscreen",
  id: "fullscreen",
  type: typesX.TOOL,
  match: (p2) => ["story", "docs"].includes(p2.viewMode),
  render: () => {
    const { isMobile } = useLayout();
    if (isMobile)
      return null;
    return /* @__PURE__ */ import_react34.default.createElement(ManagerConsumer, { filter: fullScreenMapper }, ({ toggle, isFullscreen, shortcut, hasPanel, singleStory }) => (!singleStory || singleStory && hasPanel) && /* @__PURE__ */ import_react34.default.createElement(
      IconButton,
      {
        key: "full",
        onClick: toggle,
        title: `${isFullscreen ? "Exit full screen" : "Go full screen"} [${shortcut}]`,
        "aria-label": isFullscreen ? "Exit full screen" : "Go full screen"
      },
      isFullscreen ? /* @__PURE__ */ import_react34.default.createElement(CloseIcon, null) : /* @__PURE__ */ import_react34.default.createElement(ExpandIcon, null)
    ));
  }
};
var tabsMapper = ({ state }) => ({
  viewMode: state.docsOnly,
  storyId: state.storyId,
  path: state.path,
  location: state.location,
  refId: state.refId
});
var createTabsTool = (tabs) => ({
  title: "title",
  id: "title",
  type: typesX.TOOL,
  render: () => /* @__PURE__ */ import_react34.default.createElement(ManagerConsumer, { filter: tabsMapper }, (rp) => /* @__PURE__ */ import_react34.default.createElement(import_react34.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(TabBar, { key: "tabs" }, tabs.filter((p2) => !p2.hidden).map((t3, index) => {
    const to = t3.route(rp);
    const isActive = rp.path === to;
    return /* @__PURE__ */ import_react34.default.createElement(UnstyledLink, { key: t3.id || `l${index}`, to }, /* @__PURE__ */ import_react34.default.createElement(TabButton, { disabled: t3.disabled, active: isActive }, t3.title));
  })), /* @__PURE__ */ import_react34.default.createElement(Separator, null)))
});
var defaultTools = [remountTool, zoomTool];
var defaultToolsExtra = [
  addonsTool,
  fullScreenTool,
  ejectTool,
  copyTool
];
var useTools = (getElements, tabs, viewMode, entry, location, path) => {
  const toolsFromConfig = (0, import_react34.useMemo)(
    () => getTools(getElements),
    [getElements, getTools(getElements).length]
  );
  const toolsExtraFromConfig = (0, import_react34.useMemo)(() => getToolsExtra(getElements), [getElements]);
  const tools = (0, import_react34.useMemo)(
    () => [...defaultTools, ...toolsFromConfig],
    [defaultTools, toolsFromConfig]
  );
  const toolsExtra = (0, import_react34.useMemo)(
    () => [...defaultToolsExtra, ...toolsExtraFromConfig],
    [defaultToolsExtra, toolsExtraFromConfig]
  );
  return (0, import_react34.useMemo)(() => {
    return ["story", "docs"].includes(entry?.type) ? filterTools(tools, toolsExtra, tabs, {
      viewMode,
      entry,
      location,
      path
    }) : { left: tools, right: toolsExtra };
  }, [viewMode, entry, location, path, tools, toolsExtra, tabs]);
};
var ToolRes = import_react34.default.memo(
  function ToolRes2({ api, entry, tabs, isShown, location, path, viewMode }) {
    const { left, right } = useTools(api.getElements, tabs, viewMode, entry, location, path);
    return left || right ? /* @__PURE__ */ import_react34.default.createElement(Toolbar, { key: "toolbar", shown: isShown, "data-test-id": "sb-preview-toolbar" }, /* @__PURE__ */ import_react34.default.createElement(ToolbarInner, null, /* @__PURE__ */ import_react34.default.createElement(ToolbarLeft, null, /* @__PURE__ */ import_react34.default.createElement(Tools, { key: "left", list: left })), /* @__PURE__ */ import_react34.default.createElement(ToolbarRight, null, /* @__PURE__ */ import_react34.default.createElement(Tools, { key: "right", list: right })))) : null;
  }
);
var ToolbarComp = import_react34.default.memo(function ToolbarComp2(props) {
  return /* @__PURE__ */ import_react34.default.createElement(Location, null, ({ location, path, viewMode }) => /* @__PURE__ */ import_react34.default.createElement(ToolRes, { ...props, ...{ location, path, viewMode } }));
});
var Tools = import_react34.default.memo(function Tools2({ list }) {
  return /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, list.filter(Boolean).map(({ render: Render, id, ...t3 }, index) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ import_react34.default.createElement(Render, { key: id || t3.key || `f-${index}` })
  )));
});
function toolbarItemHasBeenExcluded(item, entry) {
  const parameters = entry.type === "story" && entry.prepared ? entry.parameters : {};
  const toolbarItemsFromStoryParameters = "toolbar" in parameters ? parameters.toolbar : void 0;
  const { toolbar: toolbarItemsFromAddonsConfig } = addons.getConfig();
  const toolbarItems = merge_default(toolbarItemsFromAddonsConfig, toolbarItemsFromStoryParameters);
  return toolbarItems ? !!toolbarItems[item.id]?.hidden : false;
}
function filterTools(tools, toolsExtra, tabs, {
  viewMode,
  entry,
  location,
  path
}) {
  const toolsLeft = [
    menuTool,
    tabs.filter((p2) => !p2.hidden).length > 1 && createTabsTool(tabs),
    ...tools
  ];
  const toolsRight = [...toolsExtra];
  const filter = (item) => item && (!item.match || item.match({
    storyId: entry.id,
    refId: entry.refId,
    viewMode,
    location,
    path
  })) && !toolbarItemHasBeenExcluded(item, entry);
  const left = toolsLeft.filter(filter);
  const right = toolsRight.filter(filter);
  return { left, right };
}
var Toolbar = newStyled.div(({ theme, shown }) => ({
  position: "relative",
  color: theme.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: shown ? 0 : -40,
  boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
  background: theme.barBg,
  zIndex: 4
}));
var ToolbarInner = newStyled.div({
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
});
var ToolbarLeft = newStyled.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
});
var ToolbarRight = newStyled(ToolbarLeft)({
  marginLeft: 30
});

// src/components/preview/FramesRenderer.tsx
var import_react36 = __toESM(require_react());

// src/components/preview/Iframe.tsx
var import_react35 = __toESM(require_react());
var StyledIframe = newStyled.iframe(({ theme }) => ({
  backgroundColor: theme.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: `auto`,
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function IFrame(props) {
  const { active, id, title, src, allowFullScreen, scale, ...rest } = props;
  const iFrameRef = import_react35.default.useRef(null);
  return /* @__PURE__ */ import_react35.default.createElement(Zoom.IFrame, { scale, active, iFrameRef }, /* @__PURE__ */ import_react35.default.createElement(
    StyledIframe,
    {
      "data-is-storybook": active ? "true" : "false",
      onLoad: (e3) => e3.currentTarget.setAttribute("data-is-loaded", "true"),
      id,
      title,
      src,
      allow: "clipboard-write;",
      allowFullScreen,
      ref: iFrameRef,
      ...rest
    }
  ));
}

// src/components/preview/utils/stringifyQueryParams.tsx
var import_qs = __toESM(require_lib());
var stringifyQueryParams = (queryParams) => import_qs.default.stringify(queryParams, { addQueryPrefix: true, encode: false }).replace(/^\?/, "&");

// src/components/preview/FramesRenderer.tsx
var getActive = (refId, refs) => {
  if (refId && refs[refId]) {
    return `storybook-ref-${refId}`;
  }
  return "storybook-preview-iframe";
};
var SkipToSidebarLink = newStyled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: theme.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
}));
var whenSidebarIsVisible = ({ api, state }) => ({
  isFullscreen: api.getIsFullscreen(),
  isNavShown: api.getIsNavShown(),
  selectedStoryId: state.storyId
});
var styles = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
};
var FramesRenderer = ({
  refs,
  scale,
  viewMode = "story",
  refId,
  queryParams = {},
  baseUrl,
  storyId = "*"
}) => {
  const version = refs[refId]?.version;
  const stringifiedQueryParams = stringifyQueryParams({
    ...queryParams,
    ...version && { version }
  });
  const active = getActive(refId, refs);
  const { current: frames } = (0, import_react36.useRef)({});
  const refsToLoad = Object.values(refs).filter((ref) => {
    return ref.type === "auto-inject" || ref.id === refId;
  }, {});
  if (!frames["storybook-preview-iframe"]) {
    frames["storybook-preview-iframe"] = getStoryHref(baseUrl, storyId, {
      ...queryParams,
      ...version && { version },
      viewMode
    });
  }
  refsToLoad.forEach((ref) => {
    const id = `storybook-ref-${ref.id}`;
    const existingUrl = frames[id]?.split("/iframe.html")[0];
    if (!existingUrl || ref.url !== existingUrl) {
      const newUrl = `${ref.url}/iframe.html?id=${storyId}&viewMode=${viewMode}&refId=${ref.id}${stringifiedQueryParams}`;
      frames[id] = newUrl;
    }
  });
  return /* @__PURE__ */ import_react36.default.createElement(import_react36.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(Global, { styles }), /* @__PURE__ */ import_react36.default.createElement(ManagerConsumer, { filter: whenSidebarIsVisible }, ({ isFullscreen, isNavShown, selectedStoryId }) => {
    if (isFullscreen || !isNavShown || !selectedStoryId) {
      return null;
    }
    return /* @__PURE__ */ import_react36.default.createElement(SkipToSidebarLink, { asChild: true }, /* @__PURE__ */ import_react36.default.createElement("a", { href: `#${selectedStoryId}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"));
  }), Object.entries(frames).map(([id, src]) => {
    return /* @__PURE__ */ import_react36.default.createElement(import_react36.Fragment, { key: id }, /* @__PURE__ */ import_react36.default.createElement(
      IFrame,
      {
        active: id === active,
        key: id,
        id,
        title: id,
        src,
        allowFullScreen: true,
        scale
      }
    ));
  }));
};

// src/components/preview/Preview.tsx
var getWrappers = (getFn) => Object.values(getFn(typesX.PREVIEW));
var getTabs = (getFn) => Object.values(getFn(typesX.TAB));
var canvasMapper = ({ state, api }) => ({
  storyId: state.storyId,
  refId: state.refId,
  viewMode: state.viewMode,
  customCanvas: api.renderPreview,
  queryParams: state.customQueryParams,
  getElements: api.getElements,
  entry: api.getData(state.storyId, state.refId),
  previewInitialized: state.previewInitialized,
  refs: state.refs,
  active: !!(state.viewMode && state.viewMode.match(/^(story|docs)$/))
});
var createCanvasTab = () => ({
  id: "canvas",
  type: typesX.TAB,
  title: "Canvas",
  route: ({ storyId, refId }) => refId ? `/story/${refId}_${storyId}` : `/story/${storyId}`,
  match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
  render: () => null
});
var useTabs = (getElements, entry) => {
  const canvasTab = (0, import_react37.useMemo)(() => createCanvasTab(), []);
  const tabsFromConfig = (0, import_react37.useMemo)(() => getTabs(getElements), [getElements]);
  return (0, import_react37.useMemo)(() => {
    if (entry?.type === "story" && entry.parameters) {
      return filterTabs([canvasTab, ...tabsFromConfig], entry.parameters);
    }
    return [canvasTab, ...tabsFromConfig];
  }, [entry, ...tabsFromConfig]);
};
var Preview = import_react37.default.memo(function Preview2(props) {
  const {
    api,
    id: previewId,
    options: options2,
    viewMode,
    storyId,
    entry = void 0,
    description,
    baseUrl,
    withLoader = true
  } = props;
  const { getElements } = api;
  const tabs = useTabs(getElements, entry);
  const shouldScale = viewMode === "story";
  const { showToolbar, showTabs = true } = options2;
  const visibleTabsInToolbar = showTabs ? tabs : [];
  const previousStoryId = (0, import_react37.useRef)(storyId);
  (0, import_react37.useEffect)(() => {
    if (entry && viewMode) {
      if (storyId !== previousStoryId.current) {
        previousStoryId.current = storyId;
        if (viewMode.match(/docs|story/)) {
          const { refId, id } = entry;
          api.emit(SET_CURRENT_STORY, {
            storyId: id,
            viewMode,
            options: { target: refId }
          });
        }
      }
    }
  }, [entry, viewMode]);
  return /* @__PURE__ */ import_react37.default.createElement(import_react37.Fragment, null, previewId === "main" && /* @__PURE__ */ import_react37.default.createElement(W, { key: "description" }, /* @__PURE__ */ import_react37.default.createElement("title", null, description)), /* @__PURE__ */ import_react37.default.createElement(ZoomProvider, { shouldScale }, /* @__PURE__ */ import_react37.default.createElement(PreviewContainer, null, /* @__PURE__ */ import_react37.default.createElement(
    ToolbarComp,
    {
      key: "tools",
      entry,
      api,
      isShown: showToolbar,
      tabs: visibleTabsInToolbar
    }
  ), /* @__PURE__ */ import_react37.default.createElement(FrameWrap, { key: "frame" }, /* @__PURE__ */ import_react37.default.createElement(Canvas, { ...{ withLoader, baseUrl } }), tabs.map(({ render: Render, match, ...t3 }, i3) => {
    const key = t3.id || t3.key || i3;
    return /* @__PURE__ */ import_react37.default.createElement(import_react37.Fragment, { key }, /* @__PURE__ */ import_react37.default.createElement(Location, null, (lp) => /* @__PURE__ */ import_react37.default.createElement(Render, { active: match(lp) })));
  })))));
});
var Canvas = ({
  baseUrl,
  withLoader
}) => {
  return /* @__PURE__ */ import_react37.default.createElement(ManagerConsumer, { filter: canvasMapper }, ({
    entry,
    refs,
    customCanvas,
    storyId,
    refId,
    viewMode,
    queryParams,
    getElements,
    previewInitialized,
    active
  }) => {
    const id = "canvas";
    const wrappers = (0, import_react37.useMemo)(
      () => [...defaultWrappers, ...getWrappers(getElements)],
      [getElements, ...defaultWrappers]
    );
    const [progress, setProgress] = (0, import_react37.useState)(void 0);
    (0, import_react37.useEffect)(() => {
      if (scope.CONFIG_TYPE === "DEVELOPMENT") {
        try {
          const channel = addons.getChannel();
          channel.on(PREVIEW_BUILDER_PROGRESS, (options2) => {
            setProgress(options2);
          });
        } catch {
        }
      }
    }, []);
    const refLoading = !!refs[refId] && !refs[refId].previewInitialized;
    const isBuilding = !(progress?.value === 1 || progress === void 0);
    const rootLoading = !refId && (!previewInitialized || isBuilding);
    const isLoading = entry ? refLoading || rootLoading : rootLoading;
    return /* @__PURE__ */ import_react37.default.createElement(ZoomConsumer, null, ({ value: scale }) => {
      return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, withLoader && isLoading && /* @__PURE__ */ import_react37.default.createElement(LoaderWrapper, null, /* @__PURE__ */ import_react37.default.createElement(Loader, { id: "preview-loader", role: "progressbar", progress })), /* @__PURE__ */ import_react37.default.createElement(
        ApplyWrappers,
        {
          id,
          storyId,
          viewMode,
          active,
          wrappers
        },
        customCanvas ? customCanvas(storyId, viewMode, id, baseUrl, scale, queryParams) : /* @__PURE__ */ import_react37.default.createElement(
          FramesRenderer,
          {
            baseUrl,
            refs,
            scale,
            entry,
            viewMode,
            refId,
            queryParams,
            storyId
          }
        )
      ));
    });
  });
};
function filterTabs(panels, parameters) {
  const { previewTabs } = addons.getConfig();
  const parametersTabs = parameters ? parameters.previewTabs : void 0;
  if (previewTabs || parametersTabs) {
    const tabs = merge_default(previewTabs, parametersTabs);
    const arrTabs = Object.keys(tabs).map((key, index) => ({
      index,
      ...typeof tabs[key] === "string" ? { title: tabs[key] } : tabs[key],
      id: key
    }));
    return panels.filter((panel) => {
      const t3 = arrTabs.find((tab) => tab.id === panel.id);
      return t3 === void 0 || t3.id === "canvas" || !t3.hidden;
    }).map((panel, index) => ({ ...panel, index })).sort((p1, p2) => {
      const tab_1 = arrTabs.find((tab) => tab.id === p1.id);
      const index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index;
      const tab_2 = arrTabs.find((tab) => tab.id === p2.id);
      const index_2 = tab_2 ? tab_2.index : arrTabs.length + p2.index;
      return index_1 - index_2;
    }).map((panel) => {
      const t3 = arrTabs.find((tab) => tab.id === panel.id);
      if (t3) {
        return {
          ...panel,
          title: t3.title || panel.title,
          disabled: t3.disabled,
          hidden: t3.hidden
        };
      }
      return panel;
    });
  }
  return panels;
}

// src/container/Preview.tsx
var { PREVIEW_URL: PREVIEW_URL3 } = scope;
var splitTitleAddExtraSpace = (input) => input.split("/").join(" / ").replace(/\s\s/, " ");
var getDescription = (item) => {
  if (item?.type === "story" || item?.type === "docs") {
    const { title, name } = item;
    return title && name ? splitTitleAddExtraSpace(`${title} - ${name} \u22C5 Storybook`) : "Storybook";
  }
  return item?.name ? `${item.name} \u22C5 Storybook` : "Storybook";
};
var mapper = ({ api, state }) => {
  const { layout, location, customQueryParams, storyId, refs, viewMode, path, refId } = state;
  const entry = api.getData(storyId, refId);
  return {
    api,
    entry,
    options: layout,
    description: getDescription(entry),
    viewMode,
    path,
    refs,
    storyId,
    baseUrl: PREVIEW_URL3 || "iframe.html",
    queryParams: customQueryParams,
    location
  };
};
var PreviewConnected = import_react38.default.memo(function PreviewConnected2(props) {
  return /* @__PURE__ */ import_react38.default.createElement(ManagerConsumer, { filter: mapper }, (fromState) => /* @__PURE__ */ import_react38.default.createElement(Preview, { ...props, ...fromState }));
});
var Preview_default = PreviewConnected;

// src/container/Panel.tsx
var import_react40 = __toESM(require_react());
var import_memoizerific2 = __toESM(require_memoizerific());

// src/components/panel/Panel.tsx
var import_react39 = __toESM(require_react());
var SafeTab = class extends import_react39.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return /* @__PURE__ */ import_react39.default.createElement("h1", null, "Something went wrong.");
    }
    return children;
  }
};
var AddonPanel = import_react39.default.memo(
  ({
    panels,
    shortcuts,
    actions,
    selectedPanel = null,
    panelPosition = "right",
    absolute = true
  }) => {
    const { isDesktop, setMobilePanelOpen } = useLayout();
    return /* @__PURE__ */ import_react39.default.createElement(
      Tabs,
      {
        absolute,
        ...selectedPanel ? { selected: selectedPanel } : {},
        menuName: "Addons",
        actions,
        tools: /* @__PURE__ */ import_react39.default.createElement(Actions, null, isDesktop ? /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(
          IconButton,
          {
            key: "position",
            onClick: actions.togglePosition,
            title: `Change addon orientation [${shortcutToHumanString(
              shortcuts.panelPosition
            )}]`
          },
          panelPosition === "bottom" ? /* @__PURE__ */ import_react39.default.createElement(SidebarAltIcon, null) : /* @__PURE__ */ import_react39.default.createElement(BottomBarIcon, null)
        ), /* @__PURE__ */ import_react39.default.createElement(
          IconButton,
          {
            key: "visibility",
            onClick: actions.toggleVisibility,
            title: `Hide addons [${shortcutToHumanString(shortcuts.togglePanel)}]`
          },
          /* @__PURE__ */ import_react39.default.createElement(CloseIcon, null)
        )) : /* @__PURE__ */ import_react39.default.createElement(IconButton, { onClick: () => setMobilePanelOpen(false), title: "Close addon panel" }, /* @__PURE__ */ import_react39.default.createElement(CloseIcon, null))),
        id: "storybook-panel-root"
      },
      Object.entries(panels).map(([k2, v2]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ import_react39.default.createElement(SafeTab, { key: k2, id: k2, title: typeof v2.title === "function" ? /* @__PURE__ */ import_react39.default.createElement(v2.title, null) : v2.title }, v2.render)
      ))
    );
  }
);
AddonPanel.displayName = "AddonPanel";
var Actions = newStyled.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/container/Panel.tsx
var createPanelActions = (0, import_memoizerific2.default)(1)((api) => ({
  onSelect: (panel) => api.setSelectedPanel(panel),
  toggleVisibility: () => api.togglePanel(),
  togglePosition: () => api.togglePanelPosition()
}));
var getPanels = (api) => {
  const allPanels = api.getElements(Addon_TypesEnum.PANEL);
  const story = api.getCurrentStoryData();
  if (!allPanels || !story || story.type !== "story") {
    return allPanels;
  }
  const { parameters } = story;
  const filteredPanels = {};
  Object.entries(allPanels).forEach(([id, panel]) => {
    const { paramKey } = panel;
    if (paramKey && parameters && parameters[paramKey] && parameters[paramKey].disable) {
      return;
    }
    filteredPanels[id] = panel;
  });
  return filteredPanels;
};
var mapper2 = ({ state, api }) => ({
  panels: getPanels(api),
  selectedPanel: api.getSelectedPanel(),
  panelPosition: state.layout.panelPosition,
  actions: createPanelActions(api),
  shortcuts: api.getShortcutKeys()
});
var Panel = (props) => /* @__PURE__ */ import_react40.default.createElement(ManagerConsumer, { filter: mapper2 }, (customProps) => /* @__PURE__ */ import_react40.default.createElement(AddonPanel, { ...props, ...customProps }));
var Panel_default = Panel;

// src/components/layout/Layout.tsx
var import_react52 = __toESM(require_react());

// src/components/layout/useDragging.ts
var import_react41 = __toESM(require_react());
var SNAP_THRESHOLD_PX = 30;
var SIDEBAR_MIN_WIDTH_PX = 240;
var RIGHT_PANEL_MIN_WIDTH_PX = 270;
var MIN_WIDTH_STIFFNESS = 0.9;
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function interpolate(relativeValue, min, max) {
  return min + (max - min) * relativeValue;
}
function useDragging({
  setState,
  isPanelShown,
  isDesktop
}) {
  const panelResizerRef = (0, import_react41.useRef)(null);
  const sidebarResizerRef = (0, import_react41.useRef)(null);
  (0, import_react41.useEffect)(() => {
    const panelResizer = panelResizerRef.current;
    const sidebarResizer = sidebarResizerRef.current;
    const previewIframe = document.querySelector("#storybook-preview-iframe");
    let draggedElement = null;
    const onDragStart = (e3) => {
      e3.preventDefault();
      setState((state) => ({
        ...state,
        isDragging: true
      }));
      if (e3.currentTarget === panelResizer) {
        draggedElement = panelResizer;
      } else if (e3.currentTarget === sidebarResizer) {
        draggedElement = sidebarResizer;
      }
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onDragEnd);
      if (previewIframe) {
        previewIframe.style.pointerEvents = "none";
      }
    };
    const onDragEnd = (e3) => {
      setState((state) => {
        if (draggedElement === sidebarResizer) {
          if (state.navSize < SIDEBAR_MIN_WIDTH_PX && state.navSize > 0) {
            return {
              ...state,
              isDragging: false,
              navSize: SIDEBAR_MIN_WIDTH_PX
            };
          }
        }
        if (draggedElement === panelResizer) {
          if (state.panelPosition === "right" && state.rightPanelWidth < RIGHT_PANEL_MIN_WIDTH_PX && state.rightPanelWidth > 0) {
            return {
              ...state,
              isDragging: false,
              rightPanelWidth: RIGHT_PANEL_MIN_WIDTH_PX
            };
          }
        }
        return {
          ...state,
          isDragging: false
        };
      });
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", onDragEnd);
      previewIframe?.removeAttribute("style");
      draggedElement = null;
    };
    const onDrag = (e3) => {
      if (e3.buttons === 0) {
        onDragEnd(e3);
        return;
      }
      setState((state) => {
        if (draggedElement === sidebarResizer) {
          const sidebarDragX = e3.clientX;
          if (sidebarDragX === state.navSize) {
            return state;
          }
          if (sidebarDragX <= SNAP_THRESHOLD_PX) {
            return {
              ...state,
              navSize: 0
            };
          }
          if (sidebarDragX <= SIDEBAR_MIN_WIDTH_PX) {
            return {
              ...state,
              navSize: interpolate(MIN_WIDTH_STIFFNESS, sidebarDragX, SIDEBAR_MIN_WIDTH_PX)
            };
          }
          return {
            ...state,
            navSize: clamp(sidebarDragX, 0, e3.view.innerWidth)
          };
        }
        if (draggedElement === panelResizer) {
          const sizeAxisState = state.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth";
          const panelDragSize = state.panelPosition === "bottom" ? e3.view.innerHeight - e3.clientY : e3.view.innerWidth - e3.clientX;
          if (panelDragSize === state[sizeAxisState]) {
            return state;
          }
          if (panelDragSize <= SNAP_THRESHOLD_PX) {
            return {
              ...state,
              [sizeAxisState]: 0
            };
          }
          if (state.panelPosition === "right" && panelDragSize <= RIGHT_PANEL_MIN_WIDTH_PX) {
            return {
              ...state,
              [sizeAxisState]: interpolate(
                MIN_WIDTH_STIFFNESS,
                panelDragSize,
                RIGHT_PANEL_MIN_WIDTH_PX
              )
            };
          }
          const sizeAxisMax = state.panelPosition === "bottom" ? e3.view.innerHeight : e3.view.innerWidth;
          return {
            ...state,
            [sizeAxisState]: clamp(panelDragSize, 0, sizeAxisMax)
          };
        }
        return state;
      });
    };
    panelResizer?.addEventListener("mousedown", onDragStart);
    sidebarResizer?.addEventListener("mousedown", onDragStart);
    return () => {
      panelResizer?.removeEventListener("mousedown", onDragStart);
      sidebarResizer?.removeEventListener("mousedown", onDragStart);
      previewIframe?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    isPanelShown,
    isDesktop,
    setState
  ]);
  return { panelResizerRef, sidebarResizerRef };
}

// src/components/mobile/navigation/MobileNavigation.tsx
var import_react48 = __toESM(require_react());

// src/components/mobile/navigation/MobileMenuDrawer.tsx
var import_react46 = __toESM(require_react());

// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/react-transition-group/esm/Transition.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react43 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// ../../node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// ../../node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types3 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.shape({
  enter: import_prop_types3.default.number,
  exit: import_prop_types3.default.number,
  appear: import_prop_types3.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.shape({
  enter: import_prop_types3.default.string,
  exit: import_prop_types3.default.string,
  active: import_prop_types3.default.string
}), import_prop_types3.default.shape({
  enter: import_prop_types3.default.string,
  enterDone: import_prop_types3.default.string,
  enterActive: import_prop_types3.default.string,
  exit: import_prop_types3.default.string,
  exitDone: import_prop_types3.default.string,
  exitActive: import_prop_types3.default.string
})]) : null;

// ../../node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react42 = __toESM(require_react());
var TransitionGroupContext_default = import_react42.default.createContext(null);

// ../../node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// ../../node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react43.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react43.default.cloneElement(import_react43.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react43.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types4.default.shape({
    current: typeof Element === "undefined" ? import_prop_types4.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types4.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types4.default.oneOfType([import_prop_types4.default.func.isRequired, import_prop_types4.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types4.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types4.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types4.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types4.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types4.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types4.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types4.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types4.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types4.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types4.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types4.default.func
} : {};
function noop3() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop3,
  onEntering: noop3,
  onEntered: noop3,
  onExit: noop3,
  onExiting: noop3,
  onExited: noop3
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// src/components/mobile/about/MobileAbout.tsx
var import_react45 = __toESM(require_react());

// src/components/upgrade/UpgradeBlock.tsx
var import_react44 = __toESM(require_react());
var UpgradeBlock = ({ onNavigateToWhatsNew }) => {
  const api = useStorybookApi();
  const [activeTab, setActiveTab] = (0, import_react44.useState)("npm");
  return /* @__PURE__ */ import_react44.default.createElement(Container3, null, /* @__PURE__ */ import_react44.default.createElement("strong", null, "You are on Storybook ", api.getCurrentVersion().version), /* @__PURE__ */ import_react44.default.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ import_react44.default.createElement(Tabs2, null, /* @__PURE__ */ import_react44.default.createElement(ButtonTab, { active: activeTab === "npm", onClick: () => setActiveTab("npm") }, "npm"), /* @__PURE__ */ import_react44.default.createElement(ButtonTab, { active: activeTab === "pnpm", onClick: () => setActiveTab("pnpm") }, "pnpm")), /* @__PURE__ */ import_react44.default.createElement(Code, null, activeTab === "npm" ? "npx storybook@latest upgrade" : "pnpm dlx storybook@latest upgrade"), onNavigateToWhatsNew && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ import_react44.default.createElement(Link22, { onClick: onNavigateToWhatsNew }, "See what's new in Storybook"));
};
var Container3 = newStyled.div(({ theme }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: theme.appBorderColor,
  fontSize: theme.typography.size.s2,
  width: "100%",
  [MEDIA_DESKTOP_BREAKPOINT]: {
    maxWidth: 400
  }
}));
var Tabs2 = newStyled.div({
  display: "flex",
  gap: 2
});
var Code = newStyled.pre(({ theme }) => ({
  background: theme.base === "light" ? "rgba(0, 0, 0, 0.05)" : theme.appBorderColor,
  fontSize: theme.typography.size.s2 - 1,
  margin: "4px 0 16px"
}));
var ButtonTab = newStyled.button(({ theme, active }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: theme.color.defaultText,
  fontSize: theme.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: active ? theme.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/components/mobile/about/MobileAbout.tsx
var MobileAbout = () => {
  const { isMobileAboutOpen, setMobileAboutOpen } = useLayout();
  const aboutRef = (0, import_react45.useRef)(null);
  return /* @__PURE__ */ import_react45.default.createElement(
    Transition_default,
    {
      nodeRef: aboutRef,
      in: isMobileAboutOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true
    },
    (state) => /* @__PURE__ */ import_react45.default.createElement(Container4, { ref: aboutRef, state, transitionDuration: MOBILE_TRANSITION_DURATION }, /* @__PURE__ */ import_react45.default.createElement(Button2, { onClick: () => setMobileAboutOpen(false), title: "Close about section" }, /* @__PURE__ */ import_react45.default.createElement(ArrowLeftIcon, null), "Back"), /* @__PURE__ */ import_react45.default.createElement(LinkContainer, null, /* @__PURE__ */ import_react45.default.createElement(LinkLine, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ import_react45.default.createElement(LinkLeft, null, /* @__PURE__ */ import_react45.default.createElement(GithubIcon, null), /* @__PURE__ */ import_react45.default.createElement("span", null, "Github")), /* @__PURE__ */ import_react45.default.createElement(ShareAltIcon, { width: 12 })), /* @__PURE__ */ import_react45.default.createElement(
      LinkLine,
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
      /* @__PURE__ */ import_react45.default.createElement(LinkLeft, null, /* @__PURE__ */ import_react45.default.createElement(StorybookIcon, null), /* @__PURE__ */ import_react45.default.createElement("span", null, "Documentation")),
      /* @__PURE__ */ import_react45.default.createElement(ShareAltIcon, { width: 12 })
    )), /* @__PURE__ */ import_react45.default.createElement(UpgradeBlock, null), /* @__PURE__ */ import_react45.default.createElement(BottomText, null, "Open source software maintained by", " ", /* @__PURE__ */ import_react45.default.createElement(Link22, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ import_react45.default.createElement(Link22, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
};
var Container4 = newStyled.div(
  ({ theme, state, transitionDuration }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${transitionDuration}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: theme.color.defaultText,
    background: theme.background.content,
    opacity: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
);
var LinkContainer = newStyled.div({
  marginTop: 20,
  marginBottom: 20
});
var LinkLine = newStyled.a(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: theme.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${theme.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
}));
var LinkLeft = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.typography.size.s2 - 1,
  height: 40,
  gap: 5
}));
var BottomText = newStyled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginTop: 30
}));
var Button2 = newStyled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: theme.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/components/mobile/navigation/MobileMenuDrawer.tsx
var MobileMenuDrawer = ({ children }) => {
  const containerRef = (0, import_react46.useRef)(null);
  const sidebarRef = (0, import_react46.useRef)(null);
  const overlayRef = (0, import_react46.useRef)(null);
  const { isMobileMenuOpen, setMobileMenuOpen, isMobileAboutOpen, setMobileAboutOpen } = useLayout();
  return /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement(
    Transition_default,
    {
      nodeRef: containerRef,
      in: isMobileMenuOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true,
      onExited: () => setMobileAboutOpen(false)
    },
    (state) => /* @__PURE__ */ import_react46.default.createElement(Container5, { ref: containerRef, state }, /* @__PURE__ */ import_react46.default.createElement(
      Transition_default,
      {
        nodeRef: sidebarRef,
        in: !isMobileAboutOpen,
        timeout: MOBILE_TRANSITION_DURATION
      },
      (sidebarState) => /* @__PURE__ */ import_react46.default.createElement(SidebarContainer, { ref: sidebarRef, state: sidebarState }, children)
    ), /* @__PURE__ */ import_react46.default.createElement(MobileAbout, null))
  ), /* @__PURE__ */ import_react46.default.createElement(
    Transition_default,
    {
      nodeRef: overlayRef,
      in: isMobileMenuOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true
    },
    (state) => /* @__PURE__ */ import_react46.default.createElement(
      Overlay,
      {
        ref: overlayRef,
        state,
        onClick: () => setMobileMenuOpen(false),
        "aria-label": "Close navigation menu"
      }
    )
  ));
};
var Container5 = newStyled.div(({ theme, state }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: theme.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  overflow: "hidden",
  transform: `${(() => {
    if (state === "entering")
      return "translateY(0)";
    if (state === "entered")
      return "translateY(0)";
    if (state === "exiting")
      return "translateY(100%)";
    if (state === "exited")
      return "translateY(100%)";
    return "translateY(0)";
  })()}`
}));
var SidebarContainer = newStyled.div(({ theme, state }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${(() => {
    if (state === "entered")
      return 1;
    if (state === "entering")
      return 1;
    if (state === "exiting")
      return 0;
    if (state === "exited")
      return 0;
    return 1;
  })()}`,
  transform: `${(() => {
    switch (state) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
}));
var Overlay = newStyled.div(({ state }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (state) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/components/mobile/navigation/MobileAddonsDrawer.tsx
var import_react47 = __toESM(require_react());
var TRANSITION_DURATION = 200;
var Container6 = newStyled.div(({ theme, state }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: theme.background.content,
  height: "50%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
  overflow: "hidden",
  borderTop: `1px solid ${theme.appBorderColor}`,
  transform: `${(() => {
    switch (state) {
      case "entering":
      case "entered":
        return "translateY(0)";
      case "exiting":
      case "exited":
        return "translateY(100%)";
      default:
        return "translateY(0)";
    }
  })()}`
}));
var MobileAddonsDrawer = ({ children }) => {
  const { isMobilePanelOpen } = useLayout();
  const containerRef = (0, import_react47.useRef)(null);
  return /* @__PURE__ */ import_react47.default.createElement(
    Transition_default,
    {
      nodeRef: containerRef,
      in: isMobilePanelOpen,
      timeout: TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true
    },
    (state) => /* @__PURE__ */ import_react47.default.createElement(Container6, { ref: containerRef, state }, children)
  );
};

// src/components/mobile/navigation/MobileNavigation.tsx
var useFullStoryName = () => {
  const { index } = useStorybookState();
  const currentStory = useStorybookApi().getCurrentStoryData();
  if (!currentStory)
    return "";
  let fullStoryName = currentStory.renderLabel?.(currentStory) || currentStory.name;
  let node = index[currentStory.id];
  while ("parent" in node && node.parent && index[node.parent] && fullStoryName.length < 24) {
    node = index[node.parent];
    const parentName = node.renderLabel?.(node) || node.name;
    fullStoryName = `${parentName}/${fullStoryName}`;
  }
  return fullStoryName;
};
var MobileNavigation = ({ menu, panel, showPanel }) => {
  const { isMobileMenuOpen, setMobileMenuOpen, setMobilePanelOpen } = useLayout();
  const fullStoryName = useFullStoryName();
  return /* @__PURE__ */ import_react48.default.createElement(Container7, null, /* @__PURE__ */ import_react48.default.createElement(MobileMenuDrawer, null, menu), /* @__PURE__ */ import_react48.default.createElement(MobileAddonsDrawer, null, panel), /* @__PURE__ */ import_react48.default.createElement(Button3, { onClick: () => setMobileMenuOpen(!isMobileMenuOpen), title: "Open navigation menu" }, /* @__PURE__ */ import_react48.default.createElement(MenuIcon, null), /* @__PURE__ */ import_react48.default.createElement(Text2, null, fullStoryName)), showPanel && /* @__PURE__ */ import_react48.default.createElement(IconButton, { onClick: () => setMobilePanelOpen(true), title: "Open addon panel" }, /* @__PURE__ */ import_react48.default.createElement(BottomBarToggleIcon, null)));
};
var Container7 = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bottom: 0,
  left: 0,
  width: "100%",
  height: 40,
  zIndex: 10,
  background: theme.barBg,
  padding: "0 6px",
  borderTop: `1px solid ${theme.appBorderColor}`
}));
var Button3 = newStyled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: theme.color.mediumdark,
  fontSize: `${theme.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: theme.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
}));
var Text2 = newStyled.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/container/Notifications.tsx
var import_react51 = __toESM(require_react());

// src/components/notifications/NotificationList.tsx
var import_react50 = __toESM(require_react());

// src/components/notifications/NotificationItem.tsx
var import_react49 = __toESM(require_react());
var Notification = newStyled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: 15,
  width: 280,
  borderRadius: 4,
  alignItems: "center",
  background: theme.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
  boxShadow: `0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)`,
  color: theme.color.inverseText,
  textDecoration: "none"
}));
var NotificationWithInteractiveStates = newStyled(Notification)(() => ({
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  }
}));
var NotificationLink = NotificationWithInteractiveStates.withComponent(Link2);
var NotificationIconWrapper = newStyled.div(() => ({
  display: "flex",
  marginRight: 10,
  alignItems: "center"
}));
var NotificationTextWrapper = newStyled.div(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column"
}));
var Headline = newStyled.div(({ theme, hasIcon }) => ({
  height: "100%",
  width: hasIcon ? 205 : 230,
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: theme.typography.size.s1,
  lineHeight: "16px",
  fontWeight: theme.typography.weight.bold
}));
var SubHeadline = newStyled.div(({ theme }) => ({
  color: curriedTransparentize$1(0.25, theme.color.inverseText),
  fontSize: theme.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2
}));
var ItemContent = ({
  icon,
  content: { headline, subHeadline }
}) => {
  const theme = useTheme();
  const defaultColor = theme.base === "dark" ? theme.color.mediumdark : theme.color.mediumlight;
  return /* @__PURE__ */ import_react49.default.createElement(import_react49.default.Fragment, null, !icon || /* @__PURE__ */ import_react49.default.createElement(NotificationIconWrapper, null, /* @__PURE__ */ import_react49.default.createElement(
    Icons,
    {
      icon: icon.name,
      width: 16,
      height: 16,
      color: icon.color || defaultColor
    }
  )), /* @__PURE__ */ import_react49.default.createElement(NotificationTextWrapper, null, /* @__PURE__ */ import_react49.default.createElement(Headline, { title: headline, hasIcon: !!icon }, headline), subHeadline && /* @__PURE__ */ import_react49.default.createElement(SubHeadline, null, subHeadline)));
};
var DismissButtonWrapper = newStyled(IconButton)(({ theme }) => ({
  alignSelf: "center",
  marginTop: 0,
  color: theme.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
}));
var DismissNotificationItem = ({ onDismiss }) => /* @__PURE__ */ import_react49.default.createElement(
  DismissButtonWrapper,
  {
    title: "Dismiss notification",
    onClick: (e3) => {
      e3.preventDefault();
      onDismiss();
    }
  },
  /* @__PURE__ */ import_react49.default.createElement(CloseAltIcon, { size: 12 })
);
var NotificationItemSpacer = newStyled.div({
  height: 48
});
var NotificationItem = ({ notification: { content, link, onClear, id, icon }, onDismissNotification }) => {
  const dismissNotificationItem = () => {
    onDismissNotification(id);
    if (onClear) {
      onClear({ dismissed: true });
    }
  };
  return link ? /* @__PURE__ */ import_react49.default.createElement(NotificationLink, { to: link }, /* @__PURE__ */ import_react49.default.createElement(ItemContent, { icon, content }), /* @__PURE__ */ import_react49.default.createElement(DismissNotificationItem, { onDismiss: dismissNotificationItem })) : /* @__PURE__ */ import_react49.default.createElement(Notification, null, /* @__PURE__ */ import_react49.default.createElement(ItemContent, { icon, content }), /* @__PURE__ */ import_react49.default.createElement(DismissNotificationItem, { onDismiss: dismissNotificationItem }));
};
var NotificationItem_default = NotificationItem;

// src/components/notifications/NotificationList.tsx
var NotificationList = ({
  notifications,
  clearNotification
}) => {
  return /* @__PURE__ */ import_react50.default.createElement(List, null, notifications && notifications.map((notification) => /* @__PURE__ */ import_react50.default.createElement(
    NotificationItem_default,
    {
      key: notification.id,
      onDismissNotification: (id) => clearNotification(id),
      notification
    }
  )));
};
var List = newStyled.div({
  zIndex: 200,
  position: "fixed",
  left: 20,
  bottom: 60,
  [MEDIA_DESKTOP_BREAKPOINT]: {
    bottom: 20
  },
  "> * + *": {
    marginTop: 10
  },
  "&:empty": {
    display: "none"
  }
});

// src/container/Notifications.tsx
var mapper3 = ({ state, api }) => {
  return {
    notifications: state.notifications,
    clearNotification: api.clearNotification
  };
};
var Notifications = (props) => /* @__PURE__ */ import_react51.default.createElement(ManagerConsumer, { filter: mapper3 }, (fromState) => /* @__PURE__ */ import_react51.default.createElement(NotificationList, { ...props, ...fromState }));

// src/components/layout/Layout.tsx
var MINIMUM_CONTENT_WIDTH_PX = 100;
var layoutStateIsEqual = (state, other) => state.navSize === other.navSize && state.bottomPanelHeight === other.bottomPanelHeight && state.rightPanelWidth === other.rightPanelWidth && state.panelPosition === other.panelPosition;
var useLayoutSyncingState = ({
  managerLayoutState,
  setManagerLayoutState,
  isDesktop
}) => {
  const prevManagerLayoutStateRef = import_react52.default.useRef(managerLayoutState);
  const [internalDraggingSizeState, setInternalDraggingSizeState] = (0, import_react52.useState)({
    ...managerLayoutState,
    isDragging: false
  });
  (0, import_react52.useEffect)(() => {
    if (internalDraggingSizeState.isDragging || // don't interrupt user's drag
    layoutStateIsEqual(managerLayoutState, prevManagerLayoutStateRef.current)) {
      return;
    }
    prevManagerLayoutStateRef.current = managerLayoutState;
    setInternalDraggingSizeState((state) => ({ ...state, ...managerLayoutState }));
  }, [internalDraggingSizeState.isDragging, managerLayoutState, setInternalDraggingSizeState]);
  (0, import_react52.useLayoutEffect)(() => {
    if (internalDraggingSizeState.isDragging || // wait with syncing managerLayoutState until user is done dragging
    layoutStateIsEqual(prevManagerLayoutStateRef.current, internalDraggingSizeState)) {
      return;
    }
    const nextState = {
      navSize: internalDraggingSizeState.navSize,
      bottomPanelHeight: internalDraggingSizeState.bottomPanelHeight,
      rightPanelWidth: internalDraggingSizeState.rightPanelWidth
    };
    prevManagerLayoutStateRef.current = {
      ...prevManagerLayoutStateRef.current,
      ...nextState
    };
    setManagerLayoutState(nextState);
  }, [internalDraggingSizeState, setManagerLayoutState]);
  const isPagesShown = managerLayoutState.viewMode !== "story" && managerLayoutState.viewMode !== "docs";
  const isPanelShown = managerLayoutState.viewMode === "story";
  const { panelResizerRef, sidebarResizerRef } = useDragging({
    setState: setInternalDraggingSizeState,
    isPanelShown,
    isDesktop
  });
  const { navSize, rightPanelWidth, bottomPanelHeight } = internalDraggingSizeState.isDragging ? internalDraggingSizeState : managerLayoutState;
  return {
    navSize,
    rightPanelWidth,
    bottomPanelHeight,
    panelPosition: managerLayoutState.panelPosition,
    panelResizerRef,
    sidebarResizerRef,
    showPages: isPagesShown,
    showPanel: isPanelShown,
    isDragging: internalDraggingSizeState.isDragging
  };
};
var Layout = ({ managerLayoutState, setManagerLayoutState, ...slots }) => {
  const { isDesktop, isMobile } = useLayout();
  const {
    navSize,
    rightPanelWidth,
    bottomPanelHeight,
    panelPosition,
    panelResizerRef,
    sidebarResizerRef,
    showPages,
    showPanel,
    isDragging
  } = useLayoutSyncingState({ managerLayoutState, setManagerLayoutState, isDesktop });
  return /* @__PURE__ */ import_react52.default.createElement(
    LayoutContainer,
    {
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      panelPosition: managerLayoutState.panelPosition,
      isDragging,
      viewMode: managerLayoutState.viewMode
    },
    /* @__PURE__ */ import_react52.default.createElement(Notifications, null),
    showPages && /* @__PURE__ */ import_react52.default.createElement(PagesContainer, null, slots.slotPages),
    /* @__PURE__ */ import_react52.default.createElement(ContentContainer, null, slots.slotMain),
    isDesktop && /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, /* @__PURE__ */ import_react52.default.createElement(SidebarContainer2, null, /* @__PURE__ */ import_react52.default.createElement(Drag, { ref: sidebarResizerRef }), slots.slotSidebar), showPanel && /* @__PURE__ */ import_react52.default.createElement(PanelContainer, { position: panelPosition }, /* @__PURE__ */ import_react52.default.createElement(
      Drag,
      {
        orientation: panelPosition === "bottom" ? "horizontal" : "vertical",
        position: panelPosition === "bottom" ? "left" : "right",
        ref: panelResizerRef
      }
    ), slots.slotPanel)),
    isMobile && /* @__PURE__ */ import_react52.default.createElement(MobileNavigation, { menu: slots.slotSidebar, panel: slots.slotPanel, showPanel })
  );
};
var LayoutContainer = newStyled.div(
  ({ navSize, rightPanelWidth, bottomPanelHeight, viewMode, panelPosition }) => {
    return {
      width: "100%",
      height: ["100vh", "100dvh"],
      // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      [MEDIA_DESKTOP_BREAKPOINT]: {
        display: "grid",
        gap: 0,
        gridTemplateColumns: `minmax(0, ${navSize}px) minmax(${MINIMUM_CONTENT_WIDTH_PX}px, 1fr) minmax(0, ${rightPanelWidth}px)`,
        gridTemplateRows: `1fr minmax(0, ${bottomPanelHeight}px)`,
        gridTemplateAreas: (() => {
          if (viewMode === "docs") {
            return `"sidebar content content"
                  "sidebar content content"`;
          }
          if (panelPosition === "right") {
            return `"sidebar content panel"
                  "sidebar content panel"`;
          }
          return `"sidebar content content"
                "sidebar panel   panel"`;
        })()
      }
    };
  }
);
var SidebarContainer2 = newStyled.div(({ theme }) => ({
  backgroundColor: theme.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${theme.color.border}`
}));
var ContentContainer = newStyled.div(({ theme }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: theme.background.content,
  display: "grid",
  // This is needed to make the content container fill the available space
  [MEDIA_DESKTOP_BREAKPOINT]: {
    flex: "auto",
    gridArea: "content"
  }
}));
var PagesContainer = newStyled.div(({ theme }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: theme.background.content,
  zIndex: 1
}));
var PanelContainer = newStyled.div(
  ({ theme, position }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: theme.background.content,
    borderTop: position === "bottom" ? `1px solid ${theme.color.border}` : null,
    borderLeft: position === "right" ? `1px solid ${theme.color.border}` : null
  })
);
var Drag = newStyled.div(
  ({ theme }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: theme.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation = "vertical", position = "left" }) => {
    if (orientation === "vertical")
      return {
        width: position === "left" ? 10 : 13,
        height: "100%",
        top: 0,
        right: position === "left" ? "-7px" : null,
        left: position === "right" ? "-7px" : null,
        "&:after": {
          width: 1,
          height: "100%",
          marginLeft: position === "left" ? 3 : 6
        },
        "&:hover": {
          cursor: "col-resize"
        }
      };
    return {
      width: "100%",
      height: "13px",
      top: "-7px",
      left: 0,
      "&:after": {
        width: "100%",
        height: 1,
        marginTop: 6
      },
      "&:hover": {
        cursor: "row-resize"
      }
    };
  }
);

// src/App.tsx
var App = ({ managerLayoutState, setManagerLayoutState, pages }) => {
  const { setMobileAboutOpen } = useLayout();
  return /* @__PURE__ */ import_react53.default.createElement(import_react53.default.Fragment, null, /* @__PURE__ */ import_react53.default.createElement(Global, { styles: createGlobal }), /* @__PURE__ */ import_react53.default.createElement(
    Layout,
    {
      managerLayoutState,
      setManagerLayoutState,
      slotMain: /* @__PURE__ */ import_react53.default.createElement(Route2, { path: /(^\/story|docs|onboarding\/|^\/$)/, hideOnly: true }, /* @__PURE__ */ import_react53.default.createElement(Preview_default, { id: "main", withLoader: true })),
      slotSidebar: /* @__PURE__ */ import_react53.default.createElement(Sidebar_default, { onMenuClick: () => setMobileAboutOpen((state) => !state) }),
      slotPanel: /* @__PURE__ */ import_react53.default.createElement(Panel_default, null),
      slotPages: pages.map(({ id, render: Content2 }) => /* @__PURE__ */ import_react53.default.createElement(Content2, { key: id }))
    }
  ));
};

// src/provider.ts
var Provider = class {
  getElements(_type) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(_api) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    console.error("Provider.getConfig() is not implemented!");
    return {};
  }
};

// src/settings/index.tsx
var import_react61 = __toESM(require_react());

// src/settings/AboutPage.tsx
var import_react55 = __toESM(require_react());

// src/settings/About.tsx
var import_react54 = __toESM(require_react());
var Container8 = newStyled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
});
var Header = newStyled.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
});
var Footer = newStyled.div(({ theme }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.base === "light" ? theme.color.dark : theme.color.lightest,
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s2
}));
var Actions2 = newStyled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
});
var StyledLink = newStyled(Link22)(({ theme }) => ({
  "&&": {
    fontWeight: theme.typography.weight.bold,
    color: theme.base === "light" ? theme.color.dark : theme.color.light
  },
  "&:hover": {
    color: theme.base === "light" ? theme.color.darkest : theme.color.lightest
  }
}));
var AboutScreen = ({ onNavigateToWhatsNew }) => {
  return /* @__PURE__ */ import_react54.default.createElement(Container8, null, /* @__PURE__ */ import_react54.default.createElement(Header, null, /* @__PURE__ */ import_react54.default.createElement(StorybookLogo, { alt: "Storybook" })), /* @__PURE__ */ import_react54.default.createElement(UpgradeBlock, { onNavigateToWhatsNew }), /* @__PURE__ */ import_react54.default.createElement(Footer, null, /* @__PURE__ */ import_react54.default.createElement(Actions2, null, /* @__PURE__ */ import_react54.default.createElement(Button, { asChild: true }, /* @__PURE__ */ import_react54.default.createElement("a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ import_react54.default.createElement(GithubIcon, null), "GitHub")), /* @__PURE__ */ import_react54.default.createElement(Button, { asChild: true }, /* @__PURE__ */ import_react54.default.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ import_react54.default.createElement(DocumentIcon, { style: { display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ import_react54.default.createElement("div", null, "Open source software maintained by", " ", /* @__PURE__ */ import_react54.default.createElement(StyledLink, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ import_react54.default.createElement(StyledLink, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community"))));
};

// src/settings/AboutPage.tsx
var NotificationClearer = class extends import_react55.Component {
  componentDidMount() {
    const { api, notificationId } = this.props;
    api.clearNotification(notificationId);
  }
  render() {
    const { children } = this.props;
    return children;
  }
};
var AboutPage = () => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const onNavigateToWhatsNew = (0, import_react55.useCallback)(() => {
    api.changeSettingsTab("whats-new");
  }, [api]);
  return /* @__PURE__ */ import_react55.default.createElement(NotificationClearer, { api, notificationId: "update" }, /* @__PURE__ */ import_react55.default.createElement(
    AboutScreen,
    {
      onNavigateToWhatsNew: state.whatsNewData?.status === "SUCCESS" ? onNavigateToWhatsNew : void 0
    }
  ));
};

// src/settings/ShortcutsPage.tsx
var import_react58 = __toESM(require_react());

// src/settings/shortcuts.tsx
var import_react57 = __toESM(require_react());

// src/settings/SettingsFooter.tsx
var import_react56 = __toESM(require_react());
var Footer2 = newStyled.div(({ theme }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${theme.appBorderColor}`,
  fontWeight: theme.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
}));
var SettingsFooter = (props) => /* @__PURE__ */ import_react56.default.createElement(Footer2, { ...props }, /* @__PURE__ */ import_react56.default.createElement(Link22, { secondary: true, href: "https://storybook.js.org", cancel: false, target: "_blank" }, "Docs"), /* @__PURE__ */ import_react56.default.createElement(Link22, { secondary: true, href: "https://github.com/storybookjs/storybook", cancel: false, target: "_blank" }, "GitHub"), /* @__PURE__ */ import_react56.default.createElement(
  Link22,
  {
    secondary: true,
    href: "https://storybook.js.org/community#support",
    cancel: false,
    target: "_blank"
  },
  "Support"
));
var SettingsFooter_default = SettingsFooter;

// src/settings/shortcuts.tsx
var Header2 = newStyled.header(({ theme }) => ({
  marginBottom: 20,
  fontSize: theme.typography.size.m3,
  fontWeight: theme.typography.weight.bold,
  alignItems: "center",
  display: "flex"
}));
var HeaderItem = newStyled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var GridHeaderRow = newStyled.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
});
var Row = newStyled.div(({ theme }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${theme.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
}));
var GridWrapper = newStyled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
});
var Description = newStyled.div({
  alignSelf: "center"
});
var TextInput = newStyled(Form.Input)(
  ({ valid, theme }) => valid === "error" ? {
    animation: `${theme.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
);
var Fade = keyframes`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`;
var SuccessIcon = newStyled(Icons)(
  ({ valid, theme }) => valid === "valid" ? {
    color: theme.color.positive,
    animation: `${Fade} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
);
var Container9 = newStyled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  padding: `3rem 20px`,
  maxWidth: 600,
  margin: "0 auto"
}));
var shortcutLabels = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
};
var fixedShortcuts = ["escape"];
function toShortcutState(shortcutKeys) {
  return Object.entries(shortcutKeys).reduce(
    (acc, [feature, shortcut]) => fixedShortcuts.includes(feature) ? acc : { ...acc, [feature]: { shortcut, error: false } },
    {}
  );
}
var ShortcutsScreen = class extends import_react57.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = (e3) => {
      const { activeFeature, shortcutKeys } = this.state;
      if (e3.key === "Backspace") {
        return this.restoreDefault();
      }
      const shortcut = eventToShortcut(e3);
      if (!shortcut) {
        return false;
      }
      const error = !!Object.entries(shortcutKeys).find(
        ([feature, { shortcut: existingShortcut }]) => feature !== activeFeature && existingShortcut && shortcutMatchesShortcut(shortcut, existingShortcut)
      );
      return this.setState({
        shortcutKeys: { ...shortcutKeys, [activeFeature]: { shortcut, error } }
      });
    };
    this.onFocus = (focusedInput) => () => {
      const { shortcutKeys } = this.state;
      this.setState({
        activeFeature: focusedInput,
        shortcutKeys: {
          ...shortcutKeys,
          [focusedInput]: { shortcut: null, error: false }
        }
      });
    };
    this.onBlur = async () => {
      const { shortcutKeys, activeFeature } = this.state;
      if (shortcutKeys[activeFeature]) {
        const { shortcut, error } = shortcutKeys[activeFeature];
        if (!shortcut || error) {
          return this.restoreDefault();
        }
        return this.saveShortcut();
      }
      return false;
    };
    this.saveShortcut = async () => {
      const { activeFeature, shortcutKeys } = this.state;
      const { setShortcut } = this.props;
      await setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut);
      this.setState({ successField: activeFeature });
    };
    this.restoreDefaults = async () => {
      const { restoreAllDefaultShortcuts } = this.props;
      const defaultShortcuts = await restoreAllDefaultShortcuts();
      return this.setState({ shortcutKeys: toShortcutState(defaultShortcuts) });
    };
    this.restoreDefault = async () => {
      const { activeFeature, shortcutKeys } = this.state;
      const { restoreDefaultShortcut } = this.props;
      const defaultShortcut = await restoreDefaultShortcut(activeFeature);
      return this.setState({
        shortcutKeys: {
          ...shortcutKeys,
          ...toShortcutState({ [activeFeature]: defaultShortcut })
        }
      });
    };
    this.displaySuccessMessage = (activeElement) => {
      const { successField, shortcutKeys } = this.state;
      return activeElement === successField && shortcutKeys[activeElement].error === false ? "valid" : void 0;
    };
    this.displayError = (activeElement) => {
      const { activeFeature, shortcutKeys } = this.state;
      return activeElement === activeFeature && shortcutKeys[activeElement].error === true ? "error" : void 0;
    };
    this.renderKeyInput = () => {
      const { shortcutKeys, addonsShortcutLabels } = this.state;
      const arr = Object.entries(shortcutKeys).map(([feature, { shortcut }]) => /* @__PURE__ */ import_react57.default.createElement(Row, { key: feature }, /* @__PURE__ */ import_react57.default.createElement(Description, null, shortcutLabels[feature] || addonsShortcutLabels[feature]), /* @__PURE__ */ import_react57.default.createElement(
        TextInput,
        {
          spellCheck: "false",
          valid: this.displayError(feature),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(feature),
          onKeyDown: this.onKeyDown,
          value: shortcut ? shortcutToHumanString(shortcut) : "",
          placeholder: "Type keys",
          readOnly: true
        }
      ), /* @__PURE__ */ import_react57.default.createElement(SuccessIcon, { valid: this.displaySuccessMessage(feature), icon: "check" })));
      return arr;
    };
    this.renderKeyForm = () => /* @__PURE__ */ import_react57.default.createElement(GridWrapper, null, /* @__PURE__ */ import_react57.default.createElement(GridHeaderRow, null, /* @__PURE__ */ import_react57.default.createElement(HeaderItem, null, "Commands"), /* @__PURE__ */ import_react57.default.createElement(HeaderItem, null, "Shortcut")), this.renderKeyInput());
    this.state = {
      activeFeature: void 0,
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      shortcutKeys: toShortcutState(props.shortcutKeys),
      addonsShortcutLabels: props.addonsShortcutLabels
    };
  }
  render() {
    const layout = this.renderKeyForm();
    return /* @__PURE__ */ import_react57.default.createElement(Container9, null, /* @__PURE__ */ import_react57.default.createElement(Header2, null, "Keyboard shortcuts"), layout, /* @__PURE__ */ import_react57.default.createElement(
      Button,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), /* @__PURE__ */ import_react57.default.createElement(SettingsFooter_default, null));
  }
};

// src/settings/ShortcutsPage.tsx
var ShortcutsPage = () => /* @__PURE__ */ import_react58.default.createElement(ManagerConsumer, null, ({
  api: {
    getShortcutKeys,
    getAddonsShortcutLabels,
    setShortcut,
    restoreDefaultShortcut,
    restoreAllDefaultShortcuts
  }
}) => /* @__PURE__ */ import_react58.default.createElement(
  ShortcutsScreen,
  {
    shortcutKeys: getShortcutKeys(),
    addonsShortcutLabels: getAddonsShortcutLabels(),
    ...{ setShortcut, restoreDefaultShortcut, restoreAllDefaultShortcuts }
  }
));

// src/settings/whats_new_page.tsx
var import_react60 = __toESM(require_react());

// src/settings/whats_new.tsx
var import_react59 = __toESM(require_react());
var Centered = newStyled.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
});
var LoaderWrapper2 = newStyled.div({
  position: "relative",
  height: "32px"
});
var Message2 = newStyled.div(({ theme }) => ({
  paddingTop: "12px",
  color: theme.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${theme.typography.size.s1}px`,
  lineHeight: `16px`
}));
var Container10 = newStyled.div(({ theme }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: theme.background.bar,
  fontSize: `13px`,
  borderTop: "1px solid",
  borderColor: theme.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));
var WhatsNewFooter = ({
  isNotificationsEnabled,
  onToggleNotifications,
  onCopyLink
}) => {
  const theme = useTheme();
  const [copyText, setCopyText] = (0, import_react59.useState)("Copy Link");
  const copyLink = () => {
    onCopyLink();
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy Link"), 4e3);
  };
  return /* @__PURE__ */ import_react59.default.createElement(Container10, null, /* @__PURE__ */ import_react59.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ import_react59.default.createElement(HeartIcon, { color: theme.color.mediumdark }), /* @__PURE__ */ import_react59.default.createElement("div", null, "Share this with your team."), /* @__PURE__ */ import_react59.default.createElement(Button, { onClick: copyLink, size: "small", variant: "ghost" }, copyText)), isNotificationsEnabled ? /* @__PURE__ */ import_react59.default.createElement(Button, { size: "small", variant: "ghost", onClick: onToggleNotifications }, /* @__PURE__ */ import_react59.default.createElement(EyeCloseIcon, null), "Hide notifications") : /* @__PURE__ */ import_react59.default.createElement(Button, { size: "small", variant: "ghost", onClick: onToggleNotifications }, /* @__PURE__ */ import_react59.default.createElement(EyeIcon, null), "Show notifications"));
};
var Iframe = newStyled.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded }) => ({ visibility: isLoaded ? "visible" : "hidden" })
);
var AlertIcon2 = newStyled((props) => /* @__PURE__ */ import_react59.default.createElement(AlertIcon, { ...props }))(({ theme }) => ({
  color: theme.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
}));
var WhatsNewLoader = () => /* @__PURE__ */ import_react59.default.createElement(Centered, null, /* @__PURE__ */ import_react59.default.createElement(LoaderWrapper2, null, /* @__PURE__ */ import_react59.default.createElement(Loader, null)), /* @__PURE__ */ import_react59.default.createElement(Message2, null, "Loading..."));
var MaxWaitTimeMessaging = () => /* @__PURE__ */ import_react59.default.createElement(Centered, null, /* @__PURE__ */ import_react59.default.createElement(AlertIcon2, null), /* @__PURE__ */ import_react59.default.createElement(Message2, null, "The page couldn't be loaded. Check your internet connection and try again."));
var PureWhatsNewScreen = ({
  didHitMaxWaitTime,
  isLoaded,
  onLoad,
  url,
  onCopyLink,
  onToggleNotifications,
  isNotificationsEnabled
}) => /* @__PURE__ */ import_react59.default.createElement(import_react59.Fragment, null, !isLoaded && !didHitMaxWaitTime && /* @__PURE__ */ import_react59.default.createElement(WhatsNewLoader, null), didHitMaxWaitTime ? /* @__PURE__ */ import_react59.default.createElement(MaxWaitTimeMessaging, null) : /* @__PURE__ */ import_react59.default.createElement(import_react59.default.Fragment, null, /* @__PURE__ */ import_react59.default.createElement(Iframe, { isLoaded, onLoad, src: url, title: `What's new?` }), /* @__PURE__ */ import_react59.default.createElement(
  WhatsNewFooter,
  {
    isNotificationsEnabled,
    onToggleNotifications,
    onCopyLink
  }
)));
var MAX_WAIT_TIME = 1e4;
var WhatsNewScreen = () => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const { whatsNewData } = state;
  const [isLoaded, setLoaded] = (0, import_react59.useState)(false);
  const [didHitMaxWaitTime, setDidHitMaxWaitTime] = (0, import_react59.useState)(false);
  (0, import_react59.useEffect)(() => {
    const timer = setTimeout(() => !isLoaded && setDidHitMaxWaitTime(true), MAX_WAIT_TIME);
    return () => clearTimeout(timer);
  }, [isLoaded]);
  if (whatsNewData?.status !== "SUCCESS")
    return null;
  const isNotificationsEnabled = !whatsNewData.disableWhatsNewNotifications;
  return /* @__PURE__ */ import_react59.default.createElement(
    PureWhatsNewScreen,
    {
      didHitMaxWaitTime,
      isLoaded,
      onLoad: () => {
        api.whatsNewHasBeenRead();
        setLoaded(true);
      },
      url: whatsNewData.url,
      isNotificationsEnabled,
      onCopyLink: () => {
        navigator.clipboard?.writeText(whatsNewData.blogUrl ?? whatsNewData.url);
      },
      onToggleNotifications: () => {
        if (isNotificationsEnabled) {
          if (scope.confirm("All update notifications will no longer be shown. Are you sure?")) {
            api.toggleWhatsNewNotifications();
          }
        } else {
          api.toggleWhatsNewNotifications();
        }
      }
    }
  );
};

// src/settings/whats_new_page.tsx
var WhatsNewPage = () => {
  return /* @__PURE__ */ import_react60.default.createElement(WhatsNewScreen, null);
};

// src/settings/index.tsx
var { document: document9 } = scope;
var Header3 = newStyled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
  background: theme.barBg,
  paddingRight: 8
}));
var TabBarButton = import_react61.default.memo(function TabBarButton2({
  changeTab,
  id,
  title
}) {
  return /* @__PURE__ */ import_react61.default.createElement(Location, null, ({ path }) => {
    const active = path.includes(`settings/${id}`);
    return /* @__PURE__ */ import_react61.default.createElement(
      TabButton,
      {
        id: `tabbutton-${id}`,
        className: ["tabbutton"].concat(active ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active,
        onClick: () => changeTab(id),
        role: "tab"
      },
      title
    );
  });
});
var Content = newStyled(ScrollArea)(({ theme }) => ({
  background: theme.background.content
}));
var Pages = ({ changeTab, onClose, enableShortcuts = true, enableWhatsNew }) => {
  import_react61.default.useEffect(() => {
    const handleEscape = (event) => {
      if (!enableShortcuts || event.repeat)
        return;
      if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
        event.preventDefault();
        onClose();
      }
    };
    document9.addEventListener("keydown", handleEscape);
    return () => document9.removeEventListener("keydown", handleEscape);
  }, [enableShortcuts, onClose]);
  return /* @__PURE__ */ import_react61.default.createElement(import_react61.Fragment, null, /* @__PURE__ */ import_react61.default.createElement(Header3, null, /* @__PURE__ */ import_react61.default.createElement(TabBar, { role: "tablist" }, /* @__PURE__ */ import_react61.default.createElement(TabBarButton, { id: "about", title: "About", changeTab }), enableWhatsNew && /* @__PURE__ */ import_react61.default.createElement(TabBarButton, { id: "whats-new", title: "What's new?", changeTab }), /* @__PURE__ */ import_react61.default.createElement(TabBarButton, { id: "shortcuts", title: "Keyboard shortcuts", changeTab })), /* @__PURE__ */ import_react61.default.createElement(
    IconButton,
    {
      onClick: (e3) => {
        e3.preventDefault();
        return onClose();
      },
      title: "Close settings page"
    },
    /* @__PURE__ */ import_react61.default.createElement(CloseIcon, null)
  )), /* @__PURE__ */ import_react61.default.createElement(Content, { vertical: true, horizontal: false }, /* @__PURE__ */ import_react61.default.createElement(Route2, { path: "about" }, /* @__PURE__ */ import_react61.default.createElement(AboutPage, { key: "about" })), /* @__PURE__ */ import_react61.default.createElement(Route2, { path: "whats-new" }, /* @__PURE__ */ import_react61.default.createElement(WhatsNewPage, { key: "whats-new" })), /* @__PURE__ */ import_react61.default.createElement(Route2, { path: "shortcuts" }, /* @__PURE__ */ import_react61.default.createElement(ShortcutsPage, { key: "shortcuts" }))));
};
var SettingsPages = () => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const changeTab = (tab) => api.changeSettingsTab(tab);
  return /* @__PURE__ */ import_react61.default.createElement(
    Pages,
    {
      enableWhatsNew: state.whatsNewData?.status === "SUCCESS",
      enableShortcuts: state.ui.enableShortcuts,
      changeTab,
      onClose: api.closeSettings
    }
  );
};
var settingsPageAddon = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: typesX.experimental_PAGE,
  render: () => /* @__PURE__ */ import_react61.default.createElement(Route2, { path: "/settings/", startsWith: true }, /* @__PURE__ */ import_react61.default.createElement(SettingsPages, null))
};

// src/index.tsx
ThemeProvider.displayName = "ThemeProvider";
q.displayName = "HelmetProvider";
var Root3 = ({ provider }) => /* @__PURE__ */ import_react62.default.createElement(q, { key: "helmet.Provider" }, /* @__PURE__ */ import_react62.default.createElement(LocationProvider, { key: "location.provider" }, /* @__PURE__ */ import_react62.default.createElement(Main, { provider })));
var Main = ({ provider }) => {
  const navigate = useNavigate2();
  return /* @__PURE__ */ import_react62.default.createElement(Location, { key: "location.consumer" }, (locationData) => /* @__PURE__ */ import_react62.default.createElement(
    ManagerProvider,
    {
      key: "manager",
      provider,
      ...locationData,
      navigate,
      docsOptions: scope?.DOCS_OPTIONS || {}
    },
    (combo) => {
      const { state, api } = combo;
      const setManagerLayoutState = (0, import_react62.useCallback)(
        (sizes) => {
          api.setSizes(sizes);
        },
        [api]
      );
      const pages = (0, import_react62.useMemo)(
        () => [settingsPageAddon, ...Object.values(api.getElements(typesX.experimental_PAGE))],
        [Object.keys(api.getElements(typesX.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ import_react62.default.createElement(ThemeProvider, { key: "theme.provider", theme: ensure(state.theme) }, /* @__PURE__ */ import_react62.default.createElement(LayoutProvider, null, /* @__PURE__ */ import_react62.default.createElement(
        App,
        {
          key: "app",
          pages,
          managerLayoutState: { ...state.layout, viewMode: state.viewMode },
          setManagerLayoutState
        }
      )));
    }
  ));
};
function renderStorybookUI(domNode, provider) {
  if (!(provider instanceof Provider)) {
    throw new ProviderDoesNotExtendBaseProviderError();
  }
  const root = (0, import_client.createRoot)(domNode);
  root.render(/* @__PURE__ */ import_react62.default.createElement(Root3, { key: "root", provider }));
}

export {
  Provider,
  Root3 as Root,
  renderStorybookUI
};
