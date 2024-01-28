import{w as r}from"./index-7Zzp-dQq.js";import{e as c}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:p}=__STORYBOOK_MODULE_GLOBAL__,u={component:p.Components.Pre,tags:["component-one","component-two"],decorators:[(o,e)=>o({args:{object:{tags:e.tags}}})]},t={tags:["story-one","story-two"],play:async({canvasElement:o})=>{const e=r(o);await c(JSON.parse(e.getByTestId("pre").innerText)).toEqual({tags:["story-one","story-two","story"]})}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['story-one', 'story-two'],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const canvas = within(canvasElement);
    await expect(JSON.parse(canvas.getByTestId('pre').innerText)).toEqual({
      tags: ['story-one', 'story-two', 'story']
    });
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const O=["Inheritance"];export{t as Inheritance,O as __namedExportsOrder,u as default};
