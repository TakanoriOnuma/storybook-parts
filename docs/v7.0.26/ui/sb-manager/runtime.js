import {
  Addon_TypesEnum,
  CHANNEL_CREATED,
  Channel,
  Provider,
  addons,
  dist_exports as dist_exports2,
  dist_exports2 as dist_exports3,
  dist_exports3 as dist_exports4,
  dist_exports4 as dist_exports5,
  dist_exports5 as dist_exports7,
  isJSON,
  mockChannel,
  parse,
  renderStorybookUI,
  require_lib,
  stringify
} from "./chunk-N5R5CICO.js";
import "./chunk-COYWNXIH.js";
import {
  require_react_dom
} from "./chunk-ZWCVRL6T.js";
import "./chunk-XUWKS7PL.js";
import {
  dist_exports,
  dist_exports2 as dist_exports6,
  logger,
  pretty,
  scope
} from "./chunk-5DYKT6FS.js";
import {
  require_react
} from "./chunk-7GZFQHKS.js";
import "./chunk-YK4HUFJB.js";
import {
  __toESM
} from "./chunk-4GZVANWA.js";

// ../../lib/channel-postmessage/dist/index.mjs
var import_qs = __toESM(require_lib(), 1);
var { document, location } = scope;
var KEY = "storybook-channel";
var defaultEventOptions = { allowFunction: true, maxDepth: 25 };
var PostmsgTransport = class {
  constructor(config) {
    this.config = config;
    this.buffer = [];
    this.handler = null;
    if (typeof scope?.addEventListener === "function") {
      scope.addEventListener("message", this.handleEvent.bind(this), false);
    }
    if (config.page !== "manager" && config.page !== "preview") {
      throw new Error(`postmsg-channel: "config.page" cannot be "${config.page}"`);
    }
  }
  setHandler(handler) {
    this.handler = (...args) => {
      handler.apply(this, args);
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
  send(event, options) {
    const {
      target,
      // telejson options
      allowRegExp,
      allowFunction,
      allowSymbol,
      allowDate,
      allowUndefined,
      allowClass,
      maxDepth,
      space,
      lazyEval
    } = options || {};
    const eventOptions = Object.fromEntries(
      Object.entries({
        allowRegExp,
        allowFunction,
        allowSymbol,
        allowDate,
        allowUndefined,
        allowClass,
        maxDepth,
        space,
        lazyEval
      }).filter(([k, v]) => typeof v !== "undefined")
    );
    const stringifyOptions = {
      ...defaultEventOptions,
      ...scope.CHANNEL_OPTIONS || {},
      ...eventOptions
    };
    const frames = this.getFrames(target);
    const query = import_qs.default.parse(location.search, { ignoreQueryPrefix: true });
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
    frames.forEach((f) => {
      try {
        f.postMessage(data, "*");
      } catch (e) {
        console.error("sending over postmessage fail");
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
        document.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      );
      const list = nodes.filter((e) => {
        try {
          return !!e.contentWindow && e.dataset.isStorybook !== void 0 && e.id === target;
        } catch (er) {
          return false;
        }
      }).map((e) => e.contentWindow);
      return list.length ? list : this.getCurrentFrames();
    }
    if (scope && scope.parent && scope.parent !== scope.self) {
      return [scope.parent];
    }
    return [];
  }
  getCurrentFrames() {
    if (this.config.page === "manager") {
      const list = Array.from(
        document.querySelectorAll('[data-is-storybook="true"]')
      );
      return list.map((e) => e.contentWindow);
    }
    if (scope && scope.parent) {
      return [scope.parent];
    }
    return [];
  }
  getLocalFrame() {
    if (this.config.page === "manager") {
      const list = Array.from(
        document.querySelectorAll("#storybook-preview-iframe")
      );
      return list.map((e) => e.contentWindow);
    }
    if (scope && scope.parent) {
      return [scope.parent];
    }
    return [];
  }
  handleEvent(rawEvent) {
    try {
      const { data } = rawEvent;
      const { key, event, refId } = typeof data === "string" && isJSON(data) ? parse(data, scope.CHANNEL_OPTIONS || {}) : data;
      if (key === KEY) {
        const pageString = this.config.page === "manager" ? `<span style="color: #37D5D3; background: black"> manager </span>` : `<span style="color: #1EA7FD; background: black"> preview </span>`;
        const eventString = Object.values(dist_exports3).includes(event.type) ? `<span style="color: #FF4785">${event.type}</span>` : `<span style="color: #FFAE00">${event.type}</span>`;
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
        this.handler(event);
      }
    } catch (error) {
      logger.error(error);
    }
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
    const src = element.getAttribute("src");
    let origin;
    try {
      ({ origin } = new URL(src, document.location.toString()));
    } catch (err) {
      return false;
    }
    return origin === event.origin;
  });
  if (frame && remainder.length === 0) {
    const src = frame.getAttribute("src");
    const { protocol, host, pathname } = new URL(src, document.location.toString());
    return `${protocol}//${host}${pathname}`;
  }
  if (remainder.length > 0) {
    logger.error("found multiple candidates for event source");
  }
  return null;
};
function createChannel({ page }) {
  const transport = new PostmsgTransport({ page });
  return new Channel({ transport });
}

// ../../lib/channel-websocket/dist/index.mjs
var { WebSocket } = scope;
var WebsocketTransport = class {
  constructor({ url, onError }) {
    this.buffer = [];
    this.isReady = false;
    this.connect(url, onError);
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
  connect(url, onError) {
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      this.isReady = true;
      this.flush();
    };
    this.socket.onmessage = ({ data }) => {
      const event = typeof data === "string" && isJSON(data) ? parse(data) : data;
      this.handler(event);
    };
    this.socket.onerror = (e) => {
      if (onError) {
        onError(e);
      }
    };
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

// src/globals/runtime.ts
var REACT = __toESM(require_react());
var REACTDOM = __toESM(require_react_dom());
var values = {
  react: REACT,
  "react-dom": REACTDOM,
  "@storybook/components": dist_exports7,
  "@storybook/channels": dist_exports4,
  "@storybook/core-events": dist_exports3,
  "@storybook/router": dist_exports2,
  "@storybook/theming": dist_exports6,
  "@storybook/api": dist_exports5,
  // deprecated, remove in 8.0
  "@storybook/manager-api": dist_exports5,
  // backwards compatibility
  "@storybook/addons": {
    addons,
    types: Addon_TypesEnum,
    mockChannel
  },
  "@storybook/client-logger": dist_exports
};

// src/globals/types.ts
var Keys = /* @__PURE__ */ ((Keys2) => {
  Keys2["react"] = "__REACT__";
  Keys2["react-dom"] = "__REACTDOM__";
  Keys2["@storybook/components"] = "__STORYBOOKCOMPONENTS__";
  Keys2["@storybook/channels"] = "__STORYBOOKCHANNELS__";
  Keys2["@storybook/core-events"] = "__STORYBOOKCOREEVENTS__";
  Keys2["@storybook/router"] = "__STORYBOOKROUTER__";
  Keys2["@storybook/theming"] = "__STORYBOOKTHEMING__";
  Keys2["@storybook/api"] = "__STORYBOOKAPI__";
  Keys2["@storybook/manager-api"] = "__STORYBOOKAPI__";
  Keys2["@storybook/addons"] = "__STORYBOOKADDONS__";
  Keys2["@storybook/client-logger"] = "__STORYBOOKCLIENTLOGGER__";
  return Keys2;
})(Keys || {});

// src/runtime.ts
var { FEATURES, CONFIG_TYPE } = scope;
var ReactProvider = class extends Provider {
  constructor() {
    super();
    const postMessageChannel = createChannel({ page: "manager" });
    addons.setChannel(postMessageChannel);
    postMessageChannel.emit(CHANNEL_CREATED);
    this.addons = addons;
    this.channel = postMessageChannel;
    if (FEATURES?.storyStoreV7 && CONFIG_TYPE === "DEVELOPMENT") {
      const serverChannel = createChannel2({});
      this.serverChannel = serverChannel;
      addons.setServerChannel(this.serverChannel);
    }
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
var { document: document2 } = scope;
var rootEl = document2.getElementById("root");
renderStorybookUI(rootEl, new ReactProvider());
Object.keys(Keys).forEach((key) => {
  scope[Keys[key]] = values[key];
});
