import{e as m}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,f={component:d.Components.Pre,args:{text:"Check that id assertions in interaction tests are passing"},id:"indexer-custom-meta-id"},e={play:async({id:a})=>{await m(a).toBe("indexer-custom-meta-id--default")}},t={parameters:{__id:"custom-id"},play:async({id:a})=>{await m(a).toBe("custom-id")}};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    id
  }: PlayFunctionContext<any>) => {
    await expect(id).toBe('indexer-custom-meta-id--default');
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    __id: 'custom-id'
  },
  play: async ({
    id
  }: PlayFunctionContext<any>) => {
    await expect(id).toBe('custom-id');
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const g=["Default","CustomParametersId"];export{t as CustomParametersId,e as Default,g as __namedExportsOrder,f as default};
