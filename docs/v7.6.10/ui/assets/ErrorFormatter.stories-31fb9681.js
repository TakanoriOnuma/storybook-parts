import{j as o,a as d}from"./jsx-runtime-31019b9d.js";import{d as w}from"./index-356e4a49.js";import{r as c}from"./index-9f32f44c.js";import{n as i}from"./index-9e46a6e4.js";import"./_commonjsHelpers-de833af9.js";const{global:J}=__STORYBOOK_MODULE_GLOBAL__,{document:X}=J,C=i.strong(({theme:e})=>({color:e.color.orange})),F=i.strong(({theme:e})=>({color:e.color.ancillary,textDecoration:"underline"})),u=i.em(({theme:e})=>({color:e.textMutedColor})),R=/(Error): (.*)\n/,W=/at (?:(.*) )?\(?(.+)\)?/,I=/([^@]+)?(?:\/<)?@(.+)?/,G=/([^@]+)?@(.+)?/,h=({error:e})=>{if(!e)return o(c.Fragment,{children:"This error has no stack or message"});if(!e.stack)return o(c.Fragment,{children:e.message||"This error has no stack or message"});let s=e.stack.toString();s&&e.message&&!s.includes(e.message)&&(s=`Error: ${e.message}

${s}`);const p=s.match(R);if(!p)return o(c.Fragment,{children:s});const[,L,S]=p,T=s.split(/\n/).slice(1),[,...x]=T.map(t=>{const r=t.match(W)||t.match(I)||t.match(G);return r?{name:(r[1]||"").replace("/<",""),location:r[2].replace(X.location.origin,"")}:null}).filter(Boolean);return d(c.Fragment,{children:[o("span",{children:L}),": ",o(C,{children:S}),o("br",{}),x.map((t,r)=>t.name?d(c.Fragment,{children:["  ","at ",o(F,{children:t.name})," (",o(u,{children:t.location}),")",o("br",{})]},r):d(c.Fragment,{children:["  ","at ",o(u,{children:t.location}),o("br",{})]},r))]})};try{h.displayName="ErrorFormatter",h.__docgenInfo={description:"",displayName:"ErrorFormatter",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"Error"}}}}}catch{}const Y={component:h,decorators:[e=>o("pre",{children:o(e,{})})]},E=new Error("Rendering Problem");E.stack=`Error: Rendering problem
  at render (http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677124831161:147:11)
  at undecoratedStoryFn (http://localhost:6006/sb-preview/runtime.js:8255:38)
  at http://localhost:6006/sb-preview/runtime.js:7286:21
  at http://localhost:6006/sb-preview/runtime.js:8225:12
  at jsxDecorator (http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_react_preview.js?v=0fc15c2d:1892:17)
  at http://localhost:6006/sb-preview/runtime.js:7286:21
  at http://localhost:6006/sb-preview/runtime.js:8200:23
  at http://localhost:6006/sb-preview/runtime.js:8225:12
  at wrapper (http://localhost:6006/node_modules/.cache/.vite-storybook/deps/@storybook_addon-links_preview.js?v=0fc15c2d:66:12)
  at http://localhost:6006/sb-preview/runtime.js:11942:12`;const a={args:{error:E}},D=new Error("Rendering Problem");D.stack=w`render@http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677211545729:147:26
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
  promiseReactionJob@[native code]`;const n={args:{error:D}},g=new Error("Rendering Problem");g.stack=w`render@http://localhost:6006/blocks/src/examples/Button.stories.tsx?t=1677211545729:147:17
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
  renderElement@http://localhost:6006/node_modules/.cache/.vite-storybook/deps/chunk-VSGIUGYI.js?v=0fc15c2d:33:10`;const l={args:{error:g}};var m,v,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    error: chromeError
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var b,y,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    error: safariError
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,_,H;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    error: firefoxError
  }
}`,...(H=(_=l.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const $=["Chrome","Safari","Firefox"];export{a as Chrome,l as Firefox,n as Safari,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=ErrorFormatter.stories-31fb9681.js.map
