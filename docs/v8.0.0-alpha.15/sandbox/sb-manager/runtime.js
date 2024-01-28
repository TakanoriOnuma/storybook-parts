import {
  Provider,
  renderStorybookUI
} from "./chunk-EAHDQUAU.js";
import {
  CHANNEL_CREATED,
  addons,
  createBrowserChannel
} from "./chunk-M64TUTI2.js";
import "./chunk-PIZJANOT.js";
import "./chunk-44MKFPSY.js";
import {
  scope
} from "./chunk-TCL6UHAX.js";
import "./chunk-54QAZ5U5.js";

// src/runtime.ts
var ReactProvider = class extends Provider {
  constructor() {
    super();
    const channel = createBrowserChannel({ page: "manager" });
    addons.setChannel(channel);
    channel.emit(CHANNEL_CREATED);
    this.addons = addons;
    this.channel = channel;
    scope.__STORYBOOK_ADDONS_CHANNEL__ = channel;
  }
  getElements(type) {
    return this.addons.getElements(type);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(api) {
    this.addons.loadAddons(api);
  }
};
var { document } = scope;
var rootEl = document.getElementById("root");
setTimeout(() => {
  renderStorybookUI(rootEl, new ReactProvider());
}, 0);
