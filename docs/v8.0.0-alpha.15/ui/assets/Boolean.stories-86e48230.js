import{e as c}from"./index-bb7da91f.js";import{w as D,f as l,a as m}from"./index-09d824d7.js";import{B as U}from"./Boolean-a63c3b4a.js";import"./lz-string-2a82d2da.js";import"./index-f1f2c4b1.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-4b2a7d13.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./helpers-a9e07cde.js";const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{RESET_STORY_ARGS:I,STORY_ARGS_UPDATED:b}=__STORYBOOK_MODULE_CORE_EVENTS__,ne={component:U,tags:["autodocs"],parameters:{withRawArg:"value",controls:{include:["value"]},notes:"These are notes for the Boolean control stories",info:"This is info for the Boolean control stories",jsx:{useBooleanShorthandSyntax:!1}}},o={args:{value:!0,name:"True"}},t={args:{value:!1,name:"False"}},s={args:{value:void 0,name:"Undefined"}},a={args:{value:void 0,name:"Toggling"},play:async({canvasElement:O,id:F,args:x,step:i})=>{const g=A.getChannel();g.emit(I,{storyId:F}),await new Promise(e=>{g.once(b,e)});const n=D(O);await i("Change from Undefined to False",async()=>{const e=n.getByText("Set boolean");await l.click(e);const k=await n.findByLabelText(x.name);await c(k).toBeVisible()}),await i("Change from False to True",async()=>{const e=n.getByRole("switch");await l.click(e),await m(async()=>{await c(e).toBeChecked()})}),await i("Change from True to False",async()=>{const e=n.getByRole("switch");await l.click(e),await m(async()=>{await c(e).not.toBeChecked()})})}},r={...a,args:{name:"Toggling In Docs"},parameters:{docs:{autoplay:!0}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: true,
    name: 'True'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var w,T,f;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: false,
    name: 'False'
  }
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var h,v,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: undefined,
    name: 'Undefined'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,_,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: undefined,
    name: 'Toggling'
  },
  play: async ({
    canvasElement,
    id,
    args,
    step
  }) => {
    const channel = addons.getChannel();
    channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise<void>(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
    const canvas = within(canvasElement);
    await step('Change from Undefined to False', async () => {
      const setBooleanControl = canvas.getByText('Set boolean');
      await fireEvent.click(setBooleanControl);
      const toggle = await canvas.findByLabelText(args.name);
      await expect(toggle).toBeVisible();
    });
    await step('Change from False to True', async () => {
      const toggle = canvas.getByRole('switch');
      await fireEvent.click(toggle);
      await waitFor(async () => {
        await expect(toggle).toBeChecked();
      });
    });
    await step('Change from True to False', async () => {
      const toggle = canvas.getByRole('switch');
      await fireEvent.click(toggle);
      await waitFor(async () => {
        await expect(toggle).not.toBeChecked();
      });
    });
  }
}`,...(S=(_=a.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var E,R,C;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Toggling,
  args: {
    name: 'Toggling In Docs'
  },
  parameters: {
    docs: {
      autoplay: true
    }
  }
}`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const oe=["True","False","Undefined","Toggling","TogglingInDocs"];export{t as False,a as Toggling,r as TogglingInDocs,o as True,s as Undefined,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Boolean.stories-86e48230.js.map
