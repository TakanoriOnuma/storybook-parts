import{j as F}from"./jsx-runtime-31019b9d.js";import{w as u}from"./index-73c7a0c2.js";import{a as y,S as L}from"./Story-05e15bc9.js";import{P as G,E as N,C as K}from"./Button.stories-62bed46d.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./index-9ed7e0e5.js";import"./index-356e4a49.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9e46a6e4.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./index-728c6c1a.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./Button-c17b619e.js";const{RESET_STORY_ARGS:j,STORY_ARGS_UPDATED:g,UPDATE_STORY_ARGS:M}=__STORYBOOK_MODULE_CORE_EVENTS__,S=window.__STORYBOOK_PREVIEW__,t=window.__STORYBOOK_ADDONS_CHANNEL__,c=S.renderStoryToElement.bind(S),gr={component:y,parameters:{relativeCsfPaths:["../examples/Button.stories"]},args:{height:"100px",primary:!1,storyExport:G},render({storyExport:l,...r},{loaded:m}){const e=m.docsContext.resolveOf(l,["story"]);return F(y,{...r,story:e.story})}},o=()=>F(L,{}),n={args:{inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:c}},s={args:{storyExport:N,inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:c}},a={name:"IFrame",args:{inline:!1}},i={args:{storyExport:G,inline:!0,autoplay:!0,forceInitialArgs:!0,renderStoryToElement:c},play:async({args:l,canvasElement:r,loaded:m})=>{const e=m.docsContext.resolveOf(l.storyExport,["story"]);await u(r).findByText(/Button/);const k=new Promise(d=>{t.once(g,d)});await t.emit(M,{storyId:e.story.id,updatedArgs:{label:"Updated"}}),await k,await u(r).findByText(/Button/),await t.emit(j,{storyId:e.story.id}),await new Promise(d=>{t.once(g,d)})}},p={args:{storyExport:K,inline:!0,autoplay:!0,renderStoryToElement:c}};var E,x,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"() => <StorySkeleton />",...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,w,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inline: true,
    // @ts-expect-error getting too complex with props
    autoplay: false,
    forceInitialArgs: false,
    renderStoryToElement
  }
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,O,R;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    storyExport: ButtonStories.ErrorStory,
    inline: true,
    // @ts-expect-error getting too complex with props
    autoplay: false,
    forceInitialArgs: false,
    renderStoryToElement
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,P,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'IFrame',
  args: {
    inline: false
  }
}`,...(v=(P=a.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var h,C,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    storyExport: ButtonStories.Primary,
    inline: true,
    autoplay: true,
    forceInitialArgs: true,
    renderStoryToElement
  },
  // test that it ignores updated args by emitting an arg update and assert that it isn't reflected in the DOM
  play: async ({
    args,
    canvasElement,
    loaded
  }: PlayFunctionContext<WebRenderer>) => {
    const docsContext = (loaded.docsContext as DocsContextProps);
    const resolved = docsContext.resolveOf(args.storyExport, ['story']);
    await within(canvasElement).findByText(/Button/);
    const updatedPromise = new Promise<void>(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
    await channel.emit(UPDATE_STORY_ARGS, {
      storyId: resolved.story.id,
      updatedArgs: {
        label: 'Updated'
      }
    });
    await updatedPromise;
    await within(canvasElement).findByText(/Button/);
    await channel.emit(RESET_STORY_ARGS, {
      storyId: resolved.story.id
    });
    await new Promise<void>(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
  }
}`,...(B=(C=i.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,Y,U;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    storyExport: ButtonStories.Clicking,
    inline: true,
    // @ts-expect-error getting too complex with props
    autoplay: true,
    renderStoryToElement
  }
}`,...(U=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const Sr=["Loading","Inline","InlineError","IFrame","ForceInitialArgs","Autoplay"];export{p as Autoplay,i as ForceInitialArgs,a as IFrame,n as Inline,s as InlineError,o as Loading,Sr as __namedExportsOrder,gr as default};
//# sourceMappingURL=Story.stories-e2b3ee31.js.map
