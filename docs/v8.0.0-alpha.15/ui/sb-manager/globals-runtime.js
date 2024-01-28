import {
  TELEMETRY_ERROR,
  UncaughtManagerError,
  dist_exports as dist_exports2,
  dist_exports2 as dist_exports3,
  dist_exports3 as dist_exports4,
  dist_exports4 as dist_exports5,
  dist_exports5 as dist_exports6,
  dist_exports6 as dist_exports8,
  dist_exports7 as dist_exports9,
  manager_errors_exports
} from "./chunk-2K6RFV3A.js";
import "./chunk-PIZJANOT.js";
import "./chunk-44MKFPSY.js";
import {
  dist_exports,
  dist_exports2 as dist_exports7,
  require_react,
  require_react_dom,
  scope
} from "./chunk-TCL6UHAX.js";
import {
  __commonJS,
  __toESM
} from "./chunk-54QAZ5U5.js";

// ../../node_modules/browser-dtector/browser-dtector.umd.min.js
var require_browser_dtector_umd_min = __commonJS({
  "../../node_modules/browser-dtector/browser-dtector.umd.min.js"(exports, module) {
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
          var t3, a2, l2, s2 = {}, c = e2 || this.userAgent || "", d = c.toLowerCase().replace(/\s\s+/g, " "), u = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(opt)[/]([\w.]+)/.exec(d) || /(fxios)[/]([\w.]+)/.exec(d) || /(edgios)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [], f = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && false === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [], p = u[5] || u[3] || u[1] || null, w = f[0] || null, x = u[4] || u[2] || null, b = i();
          "chrome" === p && "function" == typeof (null == b || null === (t3 = b.brave) || void 0 === t3 ? void 0 : t3.isBrave) && (p = "brave"), p && (s2[p] = true), w && (s2[w] = true);
          var v = Boolean(s2.tablet || s2.android || s2.androidTablet), m = Boolean(s2.ipad || s2.tablet || s2.androidTablet), g = Boolean(s2.android || s2.androidTablet || s2.tablet || s2.ipad || s2.ipod || s2.iphone || s2["windows phone"]), h = Boolean(s2.cros || s2.mac || s2.linux || s2.win), y = Boolean(s2.brave || s2.chrome || s2.crios || s2.opr || s2.safari || s2.edg || s2.electron), A = Boolean(s2.msie || s2.rv);
          return { name: null !== (a2 = o[p]) && void 0 !== a2 ? a2 : null, platform: null !== (l2 = r[w]) && void 0 !== l2 ? l2 : null, userAgent: c, version: x, shortVersion: x ? n(parseFloat(x), 2) : null, isAndroid: v, isTablet: m, isMobile: g, isDesktop: h, isWebkit: y, isIE: A };
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

// src/globals/runtime.ts
var REACT = __toESM(require_react());
var REACT_DOM = __toESM(require_react_dom());
var globalsNameValueMap = {
  react: REACT,
  "react-dom": REACT_DOM,
  "@storybook/components": dist_exports9,
  "@storybook/channels": dist_exports5,
  "@storybook/core-events": dist_exports3,
  "@storybook/core-events/manager-errors": manager_errors_exports,
  "@storybook/router": dist_exports2,
  "@storybook/theming": dist_exports7,
  "@storybook/icons": dist_exports8,
  "@storybook/manager-api": dist_exports6,
  "@storybook/client-logger": dist_exports,
  "@storybook/types": dist_exports4
};

// src/globals/globals.ts
var globalsNameReferenceMap = {
  react: "__REACT__",
  "react-dom": "__REACT_DOM__",
  "@storybook/components": "__STORYBOOK_COMPONENTS__",
  "@storybook/channels": "__STORYBOOK_CHANNELS__",
  "@storybook/core-events": "__STORYBOOK_CORE_EVENTS__",
  "@storybook/core-events/manager-errors": "__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__",
  "@storybook/router": "__STORYBOOK_ROUTER__",
  "@storybook/theming": "__STORYBOOK_THEMING__",
  "@storybook/icons": "__STORYBOOK_ICONS__",
  "@storybook/manager-api": "__STORYBOOK_API__",
  "@storybook/client-logger": "__STORYBOOK_CLIENT_LOGGER__",
  "@storybook/types": "__STORYBOOK_TYPES__"
};
var globalPackages = Object.keys(globalsNameReferenceMap);

// src/utils/prepareForTelemetry.ts
var import_browser_dtector = __toESM(require_browser_dtector_umd_min());
var browserInfo;
function getBrowserInfo() {
  if (!browserInfo) {
    browserInfo = new import_browser_dtector.default(scope.navigator?.userAgent).getBrowserInfo();
  }
  return browserInfo;
}
var errorMessages = [
  // It's a harmless issue with react-resize-detector that supposedly will be gone when we move to React 18.
  // https://github.com/maslianok/react-resize-detector/issues/45#issuecomment-1500958024
  "ResizeObserver loop completed with undelivered notifications.",
  "ResizeObserver loop limit exceeded",
  // Safari does not seem to provide any helpful info on window.onerror
  // https://bugs.webkit.org/show_bug.cgi?id=132945
  "Script error."
];
var shouldSkipError = (error) => errorMessages.includes(error?.message);
function prepareForTelemetry(originalError) {
  let error = originalError;
  if (originalError.target === scope || originalError.currentTarget === scope || originalError.srcElement === scope) {
    error = new Error(originalError.message);
    error.name = originalError.name || error.name;
  }
  if (!originalError.fromStorybook) {
    error = new UncaughtManagerError({ error });
  }
  error.browserInfo = getBrowserInfo();
  return error;
}

// src/globals-runtime.ts
globalPackages.forEach((key) => {
  scope[globalsNameReferenceMap[key]] = globalsNameValueMap[key];
});
scope.sendTelemetryError = (error) => {
  if (!shouldSkipError(error)) {
    const channel = scope.__STORYBOOK_ADDONS_CHANNEL__;
    channel.emit(TELEMETRY_ERROR, prepareForTelemetry(error));
  }
};
scope.addEventListener("error", (args) => {
  const error = args.error || args;
  scope.sendTelemetryError(error);
});
scope.addEventListener("unhandledrejection", ({ reason }) => {
  scope.sendTelemetryError(reason);
});
