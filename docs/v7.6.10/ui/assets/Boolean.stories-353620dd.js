import{e as c}from"./index-728c6c1a.js";import{w as D,f as l,a as m}from"./index-73c7a0c2.js";import{B as U}from"./Boolean-978b032e.js";import"./_commonjsHelpers-de833af9.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./index-9ed7e0e5.js";import"./index-356e4a49.js";import"./jsx-runtime-31019b9d.js";import"./index-9f32f44c.js";import"./polished.esm-b305131d.js";import"./index-9e46a6e4.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./helpers-a9e07cde.js";const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{RESET_STORY_ARGS:I,STORY_ARGS_UPDATED:b}=__STORYBOOK_MODULE_CORE_EVENTS__,ie={component:U,tags:["autodocs"],parameters:{withRawArg:"value",controls:{include:["value"]},notes:"These are notes for the Boolean control stories",info:"This is info for the Boolean control stories",jsx:{useBooleanShorthandSyntax:!1}}},o={args:{value:!0,name:"True"}},t={args:{value:!1,name:"False"}},s={args:{value:void 0,name:"Undefined"}},a={args:{value:void 0,name:"Toggling"},play:async({canvasElement:O,id:F,args:x,step:i})=>{const g=A.getChannel();g.emit(I,{storyId:F}),await new Promise(e=>{g.once(b,e)});const n=D(O);await i("Change from Undefined to False",async()=>{const e=n.getByText("Set boolean");await l.click(e);const k=await n.findByLabelText(x.name);await c(k).toBeVisible()}),await i("Change from False to True",async()=>{const e=n.getByRole("switch");await l.click(e),await m(async()=>{await c(e).toBeChecked()})}),await i("Change from True to False",async()=>{const e=n.getByRole("switch");await l.click(e),await m(async()=>{await c(e).not.toBeChecked()})})}},r={...a,args:{name:"Toggling In Docs"},parameters:{docs:{autoplay:!0}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: true,
    name: 'True'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var w,T,f;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ce=["True","False","Undefined","Toggling","TogglingInDocs"];export{t as False,a as Toggling,r as TogglingInDocs,o as True,s as Undefined,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=Boolean.stories-353620dd.js.map
