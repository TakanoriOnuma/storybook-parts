import{R as e,r as c}from"./index-f1f2c4b1.js";import{d as _}from"./index-356e4a49.js";import{n as d}from"./index-4b2a7d13.js";const{global:J}=__STORYBOOK_MODULE_GLOBAL__,{document:x}=J,X=d.strong(({theme:o})=>({color:o.color.orange})),C=d.strong(({theme:o})=>({color:o.color.ancillary,textDecoration:"underline"})),i=d.em(({theme:o})=>({color:o.textMutedColor})),R=/(Error): (.*)\n/,W=/at (?:(.*) )?\(?(.+)\)?/,F=/([^@]+)?(?:\/<)?@(.+)?/,I=/([^@]+)?@(.+)?/,E=({error:o})=>{if(!o)return e.createElement(c.Fragment,null,"This error has no stack or message");if(!o.stack)return e.createElement(c.Fragment,null,o.message||"This error has no stack or message");let s=o.stack.toString();s&&o.message&&!s.includes(o.message)&&(s=`Error: ${o.message}

${s}`);const h=s.match(R);if(!h)return e.createElement(c.Fragment,null,s);const[,g,L]=h,S=s.split(/\n/).slice(1),[,...T]=S.map(t=>{const r=t.match(W)||t.match(F)||t.match(I);return r?{name:(r[1]||"").replace("/<",""),location:r[2].replace(x.location.origin,"")}:null}).filter(Boolean);return e.createElement(c.Fragment,null,e.createElement("span",null,g),": ",e.createElement(X,null,L),e.createElement("br",null),T.map((t,r)=>t.name?e.createElement(c.Fragment,{key:r},"  ","at ",e.createElement(C,null,t.name)," (",e.createElement(i,null,t.location),")",e.createElement("br",null)):e.createElement(c.Fragment,{key:r},"  ","at ",e.createElement(i,null,t.location),e.createElement("br",null))))};E.__docgenInfo={description:"",methods:[],displayName:"ErrorFormatter",props:{error:{required:!0,tsType:{name:"Error"},description:""}}};const B={component:E,decorators:[o=>e.createElement("pre",null,e.createElement(o,null))]},H=new Error("Rendering Problem");H.stack=`Error: Rendering problem
  at render (http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677124831161:147:11)
  at undecoratedStoryFn (http://localhost:6006/sb-preview/runtime.js:8255:38)
  at http://localhost:6006/sb-preview/runtime.js:7286:21
  at http://localhost:6006/sb-preview/runtime.js:8225:12
  at jsxDecorator (http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_react_preview.js?v=0fc15c2d:1892:17)
  at http://localhost:6006/sb-preview/runtime.js:7286:21
  at http://localhost:6006/sb-preview/runtime.js:8200:23
  at http://localhost:6006/sb-preview/runtime.js:8225:12
  at wrapper (http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-links_preview.js?v=0fc15c2d:66:12)
  at http://localhost:6006/sb-preview/runtime.js:11942:12`;const a={args:{error:H}},w=new Error("Rendering Problem");w.stack=_`render@http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677211545729:147:26
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  jsxDecorator@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_react_preview.js?v=0fc15c2d:1469:22
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  @http://localhost:6006/sb-preview/runtime.js:7:17017
  renderWithHooks@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:11346:35
  mountIndeterminateComponent@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:13419:36
  callCallback2@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1079:27
  dispatchEvent@[native code]
  invokeGuardedCallbackDev@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1104:37
  invokeGuardedCallback@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1135:44
  beginWork$1@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:17143:36
  performUnitOfWork@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16467:31
  workLoopSync@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16452:47
  performSyncWorkOnRoot@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16189:29
  scheduleUpdateOnFiber@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:15844:36
  updateContainer@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18002:23
  @http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18292:30
  unbatchedUpdates@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16296:22
  legacyRenderSubtreeIntoContainer@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18291:29
  @http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-VSGIUGYI.js?v=0fc15c2d:34:148
  Promise@[native code]
  @http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-VSGIUGYI.js?v=0fc15c2d:33:21
  asyncFunctionResume@[native code]
  @[native code]
  promiseReactionJobWithoutPromise@[native code]
  promiseReactionJob@[native code]`;const n={args:{error:w}},D=new Error("Rendering Problem");D.stack=_`render@http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677211545729:147:17
  undecoratedStoryFn@http://localhost:6006/sb-preview/runtime.js:34:2794
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  jsxDecorator@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_react_preview.js?v=0fc15c2d:1469:15
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  wrapper@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-links_preview.js?v=0fc15c2d:43:225
  makeDecorator/decorator/<@http://localhost:6006/sb-preview/runtime.js:93:3440
  makeDecorator/<@http://localhost:6006/sb-preview/runtime.js:93:3553
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  withGrid@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-essentials_backgrounds_preview.js?v=0fc15c2d:116:40
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  withBackground@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-essentials_backgrounds_preview.js?v=0fc15c2d:91:46
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  withMeasure@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-essentials_measure_preview.js?v=0fc15c2d:201:25
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  withOutline@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-essentials_outline_preview.js?v=0fc15c2d:443:43
  hookify/<@http://localhost:6006/sb-preview/runtime.js:7:17017
  decorateStory/<@http://localhost:6006/sb-preview/runtime.js:34:1463
  defaultDecorateStory/bindWithContext/<@http://localhost:6006/sb-preview/runtime.js:34:1915
  renderWithHooks@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:11346:35
  mountIndeterminateComponent@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:13419:21
  beginWork@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:14153:22
  callCallback2@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1079:22
  invokeGuardedCallbackDev@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1104:24
  invokeGuardedCallback@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:1135:39
  beginWork$1@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:17143:36
  performUnitOfWork@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16467:20
  workLoopSync@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16452:30
  performSyncWorkOnRoot@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16189:17
  scheduleUpdateOnFiber@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:15844:36
  updateContainer@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18002:23
  node_modules/react-dom/cjs/react-dom.development.js/legacyRenderSubtreeIntoContainer/<@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18292:30
  unbatchedUpdates@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:16296:20
  legacyRenderSubtreeIntoContainer@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18291:29
  render@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-DEJXHLHT.js?v=0fc15c2d:18354:18
  renderElement/<@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-VSGIUGYI.js?v=0fc15c2d:34:142
  renderElement@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-VSGIUGYI.js?v=0fc15c2d:33:10`;const l={args:{error:D}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    error: chromeError
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,k,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: safariError
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var y,f,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: firefoxError
  }
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const P=["Chrome","Safari","Firefox"];export{a as Chrome,l as Firefox,n as Safari,P as __namedExportsOrder,B as default};
//# sourceMappingURL=ErrorFormatter.stories-ee10de6f.js.map
