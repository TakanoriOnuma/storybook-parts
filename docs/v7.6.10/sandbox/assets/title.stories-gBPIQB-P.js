import{e as n}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__,_={component:i.Components.Pre,title:"manual title",args:{text:"No content"}},t={play:async({title:r})=>{await n(r).toBe("lib/preview-api/manual title")}};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    title
  }: PlayFunctionContext<any>) => {
    await expect(title).toBe('lib/preview-api/manual title');
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,_ as default};
