import{e as i}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:p}=__STORYBOOK_MODULE_GLOBAL__,u={component:p.Components.Pre,args:{text:"No content"}},e={play:async({name:n})=>{await i(n).toBe("Prefix And Name")}},a={play:async({name:n})=>{await i(n).toBe("Prefix")}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    name
  }: PlayFunctionContext<any>) => {
    await expect(name).toBe('Prefix And Name');
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    name
  }: PlayFunctionContext<any>) => {
    await expect(name).toBe('Prefix');
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const _=["PrefixAndName","Prefix"];export{a as Prefix,e as PrefixAndName,_ as __namedExportsOrder,u as default};
