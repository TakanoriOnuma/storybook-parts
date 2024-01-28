import{w as n}from"./index-vlIbkheJ.js";import{e as u}from"./index-cuPYNwTH.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,g={component:d.Components.Pre},o={decorators:[(a,t)=>a({args:{object:t.globals}})],play:async({canvasElement:a})=>{await u(JSON.parse(n(a).getByTestId("pre").innerText)).toMatchObject({foo:"fooValue",bar:"barDefaultValue"})}},e={parameters:{chromatic:{disableSnapshot:!0}},decorators:[(a,t)=>a({args:{text:t.globals.foo}})],play:async({canvasElement:a})=>{const t=d.__STORYBOOK_ADDONS_CHANNEL__;await t.emit("updateGlobals",{globals:{foo:"fooValue"}}),await n(a).findByText("fooValue"),await t.emit("updateGlobals",{globals:{foo:"updated"}}),await n(a).findByText("updated"),await t.emit("updateGlobals",{globals:{foo:"fooValue"}}),await n(a).findByText("fooValue")}};var s,l,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Compose all the globals into \`object\`, so the pre component only needs a single prop
  decorators: [(storyFn: PartialStoryFn, context: StoryContext) => storyFn({
    args: {
      object: context.globals
    }
  })],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toMatchObject({
      foo: 'fooValue',
      bar: 'barDefaultValue'
    });
  }
}`,...(r=(l=o.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  // Just pass the "foo" global to the pre
  decorators: [(storyFn: PartialStoryFn, context: StoryContext) => storyFn({
    args: {
      text: context.globals['foo']
    }
  })],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    await channel.emit('updateGlobals', {
      globals: {
        foo: 'fooValue'
      }
    });
    await within(canvasElement).findByText('fooValue');
    await channel.emit('updateGlobals', {
      globals: {
        foo: 'updated'
      }
    });
    await within(canvasElement).findByText('updated');

    // Reset it back to the original value just to avoid polluting the URL
    await channel.emit('updateGlobals', {
      globals: {
        foo: 'fooValue'
      }
    });
    await within(canvasElement).findByText('fooValue');
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const h=["Inheritance","Events"];export{e as Events,o as Inheritance,h as __namedExportsOrder,g as default};
