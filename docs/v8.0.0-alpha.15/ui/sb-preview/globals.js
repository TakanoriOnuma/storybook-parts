"use strict";
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
  "@storybook/global": "__STORYBOOK_MODULE_GLOBAL__",
  "@storybook/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/core-events/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "@storybook/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/types": "__STORYBOOK_MODULE_TYPES__"
};
var globalPackages = Object.keys(globalsNameReferenceMap);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  globalPackages,
  globalsNameReferenceMap
});
