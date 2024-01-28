import{e as i}from"./index-cuPYNwTH.js";const{global:p}=__STORYBOOK_MODULE_GLOBAL__,d={component:p.Components.Pre,args:{text:"No content"}},e={play:async({name:n})=>{await i(n).toBe("Prefix And Name")}},a={play:async({name:n})=>{await i(n).toBe("Prefix")}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const l=["PrefixAndName","Prefix"];export{a as Prefix,e as PrefixAndName,l as __namedExportsOrder,d as default};
