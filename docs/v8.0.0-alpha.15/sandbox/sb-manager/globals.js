var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/globals.ts
var globals_exports = {};
__export(globals_exports, {
  globalPackages: () => globalPackages,
  globalsNameReferenceMap: () => globalsNameReferenceMap
});
module.exports = __toCommonJS(globals_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  globalPackages,
  globalsNameReferenceMap
});
