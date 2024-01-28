import{w as r,u as l}from"./index-cuPYNwTH.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__,m={component:i.Components.Button,args:{label:"Button"},argTypes:{onClick:{type:"function"}},parameters:{actions:{argTypesRegex:"^on[A-Z].*"}}},n={play:async s=>{const{args:p,canvasElement:o}=s,c=r(o);await l.click(c.getByRole("button"))}};var a,t,e;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async context => {
    const {
      args,
      canvasElement
    } = context;
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(e=(t=n.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,m as default};
