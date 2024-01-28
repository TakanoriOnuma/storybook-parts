import{w as n}from"./index-7Zzp-dQq.js";import{e as u}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,w={component:d.Components.Pre},o={decorators:[(a,t)=>a({args:{object:t.globals}})],play:async({canvasElement:a})=>{await u(JSON.parse(n(a).getByTestId("pre").innerText)).toMatchObject({foo:"fooValue",bar:"barDefaultValue"})}},e={parameters:{chromatic:{disableSnapshot:!0}},decorators:[(a,t)=>a({args:{text:t.globals.foo}})],play:async({canvasElement:a})=>{const t=d.__STORYBOOK_ADDONS_CHANNEL__;await t.emit("updateGlobals",{globals:{foo:"fooValue"}}),await n(a).findByText("fooValue"),await t.emit("updateGlobals",{globals:{foo:"updated"}}),await n(a).findByText("updated"),await t.emit("updateGlobals",{globals:{foo:"fooValue"}}),await n(a).findByText("fooValue")}};var s,l,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Inheritance","Events"];export{e as Events,o as Inheritance,O as __namedExportsOrder,w as default};
