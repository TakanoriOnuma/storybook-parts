import{e as i}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:n}=__STORYBOOK_MODULE_GLOBAL__,_={component:n.Components.Pre,args:{text:"No content"}},t={play:async({title:r})=>{await i(r).toBe("lib/preview-api/autotitle")}};var e,o,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    title
  }: PlayFunctionContext<any>) => {
    await expect(title).toBe('lib/preview-api/autotitle');
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,_ as default};
