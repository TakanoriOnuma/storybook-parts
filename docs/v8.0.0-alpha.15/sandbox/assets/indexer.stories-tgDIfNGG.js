import{e as d}from"./index-cuPYNwTH.js";const{global:m}=__STORYBOOK_MODULE_GLOBAL__,u={component:m.Components.Pre,args:{text:"Check that id assertions in interaction tests are passing"},id:"indexer-custom-meta-id"},e={play:async({id:a})=>{await d(a).toBe("indexer-custom-meta-id--default")}},t={parameters:{__id:"custom-id"},play:async({id:a})=>{await d(a).toBe("custom-id")}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    id
  }: PlayFunctionContext<any>) => {
    await expect(id).toBe('indexer-custom-meta-id--default');
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    __id: 'custom-id'
  },
  play: async ({
    id
  }: PlayFunctionContext<any>) => {
    await expect(id).toBe('custom-id');
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const l=["Default","CustomParametersId"];export{t as CustomParametersId,e as Default,l as __namedExportsOrder,u as default};
