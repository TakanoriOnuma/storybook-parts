import{w as p}from"./index-7Zzp-dQq.js";import{e as m}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{useEffect:S}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_ARGS_UPDATED:s,UPDATE_STORY_ARGS:x,RESET_STORY_ARGS:O}=__STORYBOOK_MODULE_CORE_EVENTS__,h={component:d.Components.Pre,parameters:{useProjectDecorator:!0},decorators:[(n,t)=>n({args:{...t.args,text:`component ${t.args.text}`}})]},o={decorators:[(n,t)=>n({args:{...t.args,text:`story ${t.args.text}`}})],args:{text:"starting"},play:async({canvasElement:n})=>{const t=p(n);await m(t.getByTestId("pre").innerText).toEqual("story component project starting")}},e={decorators:[(n,t)=>(S(()=>{}),n({args:{...t.args,text:`story ${t.args.text}`}})),(n,t)=>t.args.condition?n():t.originalStoryFn(t.args,t)],args:{text:"text",condition:!0},play:async({id:n,args:t})=>{const r=d.__STORYBOOK_ADDONS_CHANNEL__;await r.emit(O,{storyId:n}),await new Promise(a=>r.once(s,a)),await r.emit(x,{storyId:n,updatedArgs:{condition:!1}}),await new Promise(a=>r.once(s,a))}};var c,i,_;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [(storyFn: PartialStoryFn, context: StoryContext) => storyFn({
    args: {
      ...context.args,
      text: \`story \${context.args['text']}\`
    }
  })],
  args: {
    text: 'starting'
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('pre').innerText).toEqual('story component project starting');
  }
}`,...(_=(i=o.parameters)==null?void 0:i.docs)==null?void 0:_.source}}};var g,y,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [
  // decorator that uses hooks
  (storyFn: PartialStoryFn, context: StoryContext) => {
    useEffect(() => {});
    return storyFn({
      args: {
        ...context.args,
        text: \`story \${context.args['text']}\`
      }
    });
  },
  // conditional decorator, runs before the above
  (storyFn: PartialStoryFn, context: StoryContext) => context.args.condition ? storyFn() : (context.originalStoryFn as ArgsStoryFn)(context.args, context)],
  args: {
    text: 'text',
    condition: true
  },
  play: async ({
    id,
    args
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    await channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise(resolve => channel.once(STORY_ARGS_UPDATED, resolve));
    await channel.emit(UPDATE_STORY_ARGS, {
      storyId: id,
      updatedArgs: {
        condition: false
      }
    });
    await new Promise(resolve => channel.once(STORY_ARGS_UPDATED, resolve));
  }
}`,...(l=(y=e.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const F=["Inheritance","Hooks"];export{e as Hooks,o as Inheritance,F as __namedExportsOrder,h as default};
