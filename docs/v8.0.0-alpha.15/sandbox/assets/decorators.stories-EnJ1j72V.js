import{w as S}from"./index-vlIbkheJ.js";import{e as p}from"./index-cuPYNwTH.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{useEffect:x}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_ARGS_UPDATED:s,UPDATE_STORY_ARGS:m,RESET_STORY_ARGS:O}=__STORYBOOK_MODULE_CORE_EVENTS__,A={component:d.Components.Pre,parameters:{useProjectDecorator:!0},decorators:[(n,t)=>n({args:{...t.args,text:`component ${t.args.text}`}})]},r={decorators:[(n,t)=>n({args:{...t.args,text:`story ${t.args.text}`}})],args:{text:"starting"},play:async({canvasElement:n})=>{const t=S(n);await p(t.getByTestId("pre").innerText).toEqual("story component project starting")}},o={decorators:[(n,t)=>(x(()=>{}),n({args:{...t.args,text:`story ${t.args.text}`}})),(n,t)=>t.args.condition?n():t.originalStoryFn(t.args,t)],args:{text:"text",condition:!0},play:async({id:n,args:t})=>{const e=d.__STORYBOOK_ADDONS_CHANNEL__;await e.emit(O,{storyId:n}),await new Promise(a=>e.once(s,a)),await e.emit(m,{storyId:n,updatedArgs:{condition:!1}}),await new Promise(a=>e.once(s,a))}};var c,i,_;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(_=(i=r.parameters)==null?void 0:i.docs)==null?void 0:_.source}}};var g,y,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(l=(y=o.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const P=["Inheritance","Hooks"];export{o as Hooks,r as Inheritance,P as __namedExportsOrder,A as default};
