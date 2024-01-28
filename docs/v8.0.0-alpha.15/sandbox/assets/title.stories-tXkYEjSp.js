import{e as l}from"./index-cuPYNwTH.js";const{global:r}=__STORYBOOK_MODULE_GLOBAL__,i={component:r.Components.Pre,title:"manual title",args:{text:"No content"}},t={play:async({title:n})=>{await l(n).toBe("lib/preview-api/manual title")}};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    title
  }: PlayFunctionContext<any>) => {
    await expect(title).toBe('lib/preview-api/manual title');
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,i as default};
