import{w as v}from"./index-vlIbkheJ.js";import{e as _}from"./index-cuPYNwTH.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:h}=__STORYBOOK_MODULE_GLOBAL__,E={component:h.Components.Pre,tags:["component-one","component-two","autodocs"],decorators:[(o,r)=>o({args:{object:{tags:r.tags}}})],parameters:{chromatic:{disable:!0}}},e={tags:["story-one","story-two"],play:async({canvasElement:o})=>{const r=v(o);await _(JSON.parse(r.getByTestId("pre").innerText)).toEqual({tags:["story-one","story-two","story"]})},parameters:{chromatic:{disable:!1}}},s={tags:["docs-only"]},t={tags:["test-only"]},a={tags:["dev-only"]};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['story-one', 'story-two'],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const canvas = within(canvasElement);
    await expect(JSON.parse(canvas.getByTestId('pre').innerText)).toEqual({
      tags: ['story-one', 'story-two', 'story']
    });
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['docs-only']
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var y,d,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['test-only']
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,O,w;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['dev-only']
}`,...(w=(O=a.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const f=["Inheritance","DocsOnly","TestOnly","DevOnly"];export{a as DevOnly,s as DocsOnly,e as Inheritance,t as TestOnly,f as __namedExportsOrder,E as default};
