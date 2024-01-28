import{w as _,u as p}from"./index-7Zzp-dQq.js";import{j as l,e as m}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__,{PREVIEW_KEYDOWN:O}=__STORYBOOK_MODULE_CORE_EVENTS__,B={component:s.Components.Form,tags:["autodocs"]},t={play:async({canvasElement:r})=>{const i=s.__STORYBOOK_ADDONS_CHANNEL__,n=l.fn();i.on(O,n);const c=await _(r).findByText("Submit");await p.type(c,"s"),await m(n).not.toBeCalled()}};var e,o,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    const previewKeydown = jest.fn();
    channel.on(PREVIEW_KEYDOWN, previewKeydown);
    const button = await within(canvasElement).findByText('Submit');
    await userEvent.type(button, 's');
    await expect(previewKeydown).not.toBeCalled();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const N=["KeydownDuringPlay"];export{t as KeydownDuringPlay,N as __namedExportsOrder,B as default};
