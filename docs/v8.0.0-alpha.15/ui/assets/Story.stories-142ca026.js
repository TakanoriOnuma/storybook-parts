import{R as F}from"./index-f1f2c4b1.js";import{w as u}from"./index-09d824d7.js";import{S as y,a as N}from"./Story-c31830b5.js";import{P as G,E as k,C as K}from"./Button.stories-8508c894.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-4b2a7d13.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./index-bb7da91f.js";import"./Button-bf62ba13.js";const{RESET_STORY_ARGS:M,STORY_ARGS_UPDATED:g,UPDATE_STORY_ARGS:V}=__STORYBOOK_MODULE_CORE_EVENTS__,S=window.__STORYBOOK_PREVIEW__,o=window.__STORYBOOK_ADDONS_CHANNEL__,l=S.renderStoryToElement.bind(S),le={component:y,parameters:{relativeCsfPaths:["../examples/Button.stories"]},args:{height:"100px",primary:!1,storyExport:G},render({storyExport:p,...r},{loaded:d}){const t=d.docsContext.resolveOf(p,["story"]);return F.createElement(y,{...r,story:t.story})}},e=()=>F.createElement(N,null),n={args:{inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:l}},s={args:{storyExport:k,inline:!0,autoplay:!1,forceInitialArgs:!1,renderStoryToElement:l}},a={name:"IFrame",args:{inline:!1}},i={args:{storyExport:G,inline:!0,autoplay:!0,forceInitialArgs:!0,renderStoryToElement:l},play:async({args:p,canvasElement:r,loaded:d})=>{const t=d.docsContext.resolveOf(p.storyExport,["story"]);await u(r).findByText(/Button/);const L=new Promise(m=>{o.once(g,m)});await o.emit(V,{storyId:t.story.id,updatedArgs:{label:"Updated"}}),await L,await u(r).findByText(/Button/),await o.emit(M,{storyId:t.story.id}),await new Promise(m=>{o.once(g,m)})}},c={args:{storyExport:K,inline:!0,autoplay:!0,renderStoryToElement:l}};e.__docgenInfo={description:"",methods:[],displayName:"Loading"};var E,_,x;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:"() => <StorySkeleton />",...(x=(_=e.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var f,w,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,P,h;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'IFrame',
  args: {
    inline: false
  }
}`,...(h=(P=a.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var v,C,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(C=i.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,Y,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    storyExport: ButtonStories.Clicking,
    inline: true,
    // @ts-expect-error getting too complex with props
    autoplay: true,
    renderStoryToElement
  }
}`,...(U=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const pe=["Loading","Inline","InlineError","IFrame","ForceInitialArgs","Autoplay"];export{c as Autoplay,i as ForceInitialArgs,a as IFrame,n as Inline,s as InlineError,e as Loading,pe as __namedExportsOrder,le as default};
//# sourceMappingURL=Story.stories-142ca026.js.map
