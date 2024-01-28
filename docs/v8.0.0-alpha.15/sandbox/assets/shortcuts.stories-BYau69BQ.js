import{w as _,u as l}from"./index-vlIbkheJ.js";import{f as p,e as O}from"./index-cuPYNwTH.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__,{PREVIEW_KEYDOWN:w}=__STORYBOOK_MODULE_CORE_EVENTS__,u={component:s.Components.Form,tags:["autodocs"]},n={play:async({canvasElement:r})=>{const c=s.__STORYBOOK_ADDONS_CHANNEL__,t=p();c.on(w,t);const i=await _(r).findByText("Submit");await l.type(i,"s"),await O(t).not.toBeCalled()}};var e,o,a;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    const previewKeydown = fn();
    channel.on(PREVIEW_KEYDOWN, previewKeydown);
    const button = await within(canvasElement).findByText('Submit');
    await userEvent.type(button, 's');
    await expect(previewKeydown).not.toBeCalled();
  }
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const K=["KeydownDuringPlay"];export{n as KeydownDuringPlay,K as __namedExportsOrder,u as default};
