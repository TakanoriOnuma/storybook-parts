import{e as r}from"./index-cuPYNwTH.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__,l={component:s.Components.Pre,args:{text:"No content"}},t={play:async({title:n})=>{await r(n).toBe("lib/preview-api/autotitle")}};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    title
  }: PlayFunctionContext<any>) => {
    await expect(title).toBe('lib/preview-api/autotitle');
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,l as default};
