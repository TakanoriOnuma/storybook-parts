import{e as i}from"./index-7a180320.js";import{w as I,f as c}from"./index-1c0ca390.js";import{B as x}from"./Boolean-e61cc435.js";import"./index-341540c2.js";import"./index-d475d2ea.js";import"./isEqual-09b8ceb9.js";import"./_baseIsEqual-a479ac5d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./lz-string-475d838e.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./index-df581bf3.js";import"./index-356e4a49.js";import"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./index-5a529529.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./helpers-a9e07cde.js";const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{RESET_STORY_ARGS:U,STORY_ARGS_UPDATED:k}=__STORYBOOK_MODULE_CORE_EVENTS__,me={component:x,tags:["autodocs"],parameters:{withRawArg:"value",controls:{include:["value"]},notes:"These are notes for the Boolean control stories",info:"This is info for the Boolean control stories",jsx:{useBooleanShorthandSyntax:!1}},args:{name:"boolean"}},n={args:{value:!0}},a={args:{value:!1}},r={args:{value:void 0}},o={args:{value:void 0},play:async({canvasElement:R,id:D})=>{const l=A.getChannel();l.emit(U,{storyId:D}),await new Promise(C=>{l.once(k,C)});const t=I(R),O=t.getByText("Set boolean");await c.click(O);let e=await t.findByTitle("Change to true");i(e).toBeInTheDocument(),await c.click(e),e=await t.findByTitle("Change to false"),i(e).toBeInTheDocument(),await c.click(e),e=await t.findByTitle("Change to true"),i(e).toBeInTheDocument()}},s={...o,parameters:{docs:{autoplay:!0}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,d,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: false
  }
}`,...(T=(d=a.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var f,h,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,_,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: undefined
  },
  play: async ({
    canvasElement,
    id
  }) => {
    const channel = addons.getChannel();
    channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise<void>(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
    const canvas = within(canvasElement);

    // from Undefined to False
    const setBooleanControl = canvas.getByText('Set boolean');
    await fireEvent.click(setBooleanControl);
    let toggle = await canvas.findByTitle('Change to true');
    expect(toggle).toBeInTheDocument();

    // from False to True
    await fireEvent.click(toggle);
    toggle = await canvas.findByTitle('Change to false');
    expect(toggle).toBeInTheDocument();

    // from True to False
    await fireEvent.click(toggle);
    toggle = await canvas.findByTitle('Change to true');
    expect(toggle).toBeInTheDocument();
  }
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var w,E,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Toggling,
  parameters: {
    docs: {
      autoplay: true
    }
  }
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const pe=["True","False","Undefined","Toggling","TogglingInDocs"];export{a as False,o as Toggling,s as TogglingInDocs,n as True,r as Undefined,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=Boolean.stories-033e34da.js.map
