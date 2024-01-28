import{M as b}from"./index-b4514f1c.js";import{R as s,r as v}from"./index-f1f2c4b1.js";import{w as y}from"./index-09d824d7.js";import{M as g}from"./MobileAbout-71d11983.js";import{L as E,u as h}from"./LayoutProvider-eb9b2e6f.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./index-4b2a7d13.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./index-8c127ed0.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./UpgradeBlock-816e5ec7.js";import"./constants-277f2eb4.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-c82a83d4.js";const k=({children:t})=>{const{setMobileAboutOpen:a}=h();return v.useEffect(()=>{a(!0)},[a]),t},rt={component:g,title:"Mobile/About",parameters:{layout:"fullscreen",theme:"light",viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[320]}},decorators:[t=>s.createElement(b.Provider,{value:{api:{getCurrentVersion:()=>({version:"7.2.0"})}}},s.createElement(E,null,s.createElement(k,null,t())))]},e={},r={parameters:{theme:"dark"}},o={play:async({canvasElement:t})=>{await new Promise(f=>setTimeout(f,1e3)),await(await y(t).getByTitle("Close about section")).click()}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const closeButton = await within(canvasElement).getByTitle('Close about section');
    await closeButton.click();
  }
}`,...(w=(d=o.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const ot=["Default","Dark","Closed"];export{o as Closed,r as Dark,e as Default,ot as __namedExportsOrder,rt as default};
//# sourceMappingURL=MobileAbout.stories-a3776927.js.map
