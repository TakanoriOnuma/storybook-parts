import{w as l}from"./index-vlIbkheJ.js";import{e as m}from"./index-cuPYNwTH.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,h={component:d.Components.Pre,loaders:[async()=>new Promise(e=>setTimeout(()=>e({componentValue:7}),3e3))],decorators:[(e,n)=>e({args:{...n.args,object:n.loaded}})]},a={loaders:[async()=>new Promise(e=>setTimeout(()=>e({storyValue:3}),1e3))],play:async({canvasElement:e})=>{const n=l(e);await m(JSON.parse(n.getByTestId("pre").innerText)).toEqual({projectValue:2,componentValue:7,storyValue:3})}},o={args:{style:{position:"relative",zIndex:1e3,width:"500px",height:"500px",background:"coral"}}};var r,t,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  loaders: [async () => new Promise(r => setTimeout(() => r({
    storyValue: 3
  }), 1000))],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const canvas = within(canvasElement);
    await expect(JSON.parse(canvas.getByTestId('pre').innerText)).toEqual({
      projectValue: 2,
      componentValue: 7,
      storyValue: 3
    });
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var c,i,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    style: {
      position: 'relative',
      zIndex: 1000,
      width: '500px',
      height: '500px',
      background: 'coral'
    }
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const w=["Inheritance","ZIndex"];export{a as Inheritance,o as ZIndex,w as __namedExportsOrder,h as default};
