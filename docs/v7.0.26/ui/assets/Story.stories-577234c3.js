import{j as F}from"./jsx-runtime-0f39435c.js";import{w as u}from"./index-1c0ca390.js";import{a as y,S as L}from"./Story-134a3f6e.js";import{P as G,E as N,C as K}from"./Button.stories-01203404.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-341540c2.js";import"./index-d475d2ea.js";import"./lz-string-475d838e.js";import"./index-df581bf3.js";import"./index-356e4a49.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-5a529529.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./index-7a180320.js";import"./isEqual-09b8ceb9.js";import"./_baseIsEqual-a479ac5d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./Button-fe97466d.js";const{RESET_STORY_ARGS:j,STORY_ARGS_UPDATED:g,UPDATE_STORY_ARGS:M}=__STORYBOOK_MODULE_CORE_EVENTS__,S=window.__STORYBOOK_PREVIEW__,t=window.__STORYBOOK_ADDONS_CHANNEL__,c=S.renderStoryToElement.bind(S),_r={component:y,parameters:{relativeCsfPaths:["../examples/Button.stories"]},args:{height:"100px",primary:!1,storyExport:G},render({storyExport:l,...r},{loaded:m}){const e=m.docsContext.resolveOf(l,["story"]);return F(y,{...r,story:e.story})}},o=()=>F(L,{}),n={args:{inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:c}},s={args:{storyExport:N,inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:c}},a={name:"IFrame",args:{inline:!1}},i={args:{storyExport:G,inline:!0,autoplay:!0,forceInitialArgs:!0,renderStoryToElement:c},play:async({args:l,canvasElement:r,loaded:m})=>{const e=m.docsContext.resolveOf(l.storyExport,["story"]);await u(r).findByText(/Button/);const k=new Promise(d=>{t.once(g,d)});await t.emit(M,{storyId:e.story.id,updatedArgs:{label:"Updated"}}),await k,await u(r).findByText(/Button/),await t.emit(j,{storyId:e.story.id}),await new Promise(d=>{t.once(g,d)})}},p={args:{storyExport:K,inline:!0,autoplay:!0,renderStoryToElement:c}};var E,x,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"() => <StorySkeleton />",...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,w,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(U=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const fr=["Loading","Inline","InlineError","IFrame","ForceInitialArgs","Autoplay"];export{p as Autoplay,i as ForceInitialArgs,a as IFrame,n as Inline,s as InlineError,o as Loading,fr as __namedExportsOrder,_r as default};
//# sourceMappingURL=Story.stories-577234c3.js.map
