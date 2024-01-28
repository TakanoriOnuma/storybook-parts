import{w as u,a as p}from"./index-7Zzp-dQq.js";import{e as i}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:c}=__STORYBOOK_MODULE_GLOBAL__,{FORCE_REMOUNT:b,RESET_STORY_ARGS:O,STORY_ARGS_UPDATED:T,UPDATE_STORY_ARGS:R}=__STORYBOOK_MODULE_CORE_EVENTS__,F={component:c.Components.Button,args:{label:"Click me"}},s={parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:o,id:a})=>{if(window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/))return;const e=c.__STORYBOOK_ADDONS_CHANNEL__,t=await u(o).findByRole("button");await p(()=>i(t).not.toHaveFocus()),await new Promise(n=>setTimeout(n,3e3)),await t.focus(),await i(t).toHaveFocus(),await new Promise(n=>setTimeout(n,3e3)),await e.emit(b,{storyId:a})}},r={play:async({canvasElement:o,id:a})=>{const e=c.__STORYBOOK_ADDONS_CHANNEL__;await e.emit(O,{storyId:a}),await new Promise(n=>{e.once(T,n)});const t=await u(o).findByRole("button");await t.focus(),await i(t).toHaveFocus(),!["web-components","html","preact"].includes(c.storybookRenderer)&&(await e.emit(R,{storyId:a,updatedArgs:{label:"New Text"}}),await u(o).findByText(/New Text/),await i(t).toHaveFocus())}};var l,m,_;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  /**
   * This play function runs in an infinite loop, because the final FORCE_REMOUNT event retriggers the function
   * Because of this, it is disabled in both Chromatic and the test runner.
   * To test it manually, inspect that the button alternates being focused and blurred every 3 seconds.
   * If the button ALWAYS has focus it means the renderer didn't correctly remount the tree at the FORCE_REMOUNT event
   */
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    id
  }: PlayFunctionContext<any>) => {
    if (window?.navigator.userAgent.match(/StorybookTestRunner/)) {
      return;
    }
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    const button = await within(canvasElement).findByRole('button');
    await waitFor(() => expect(button).not.toHaveFocus());
    await new Promise(resolve => setTimeout(resolve, 3000));
    await button.focus();
    await expect(button).toHaveFocus();
    await new Promise(resolve => setTimeout(resolve, 3000));
    // By forcing the component to remount, we reset the focus state
    await channel.emit(FORCE_REMOUNT, {
      storyId: id
    });
  }
}`,...(_=(m=s.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var w,h,d;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    id
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    await channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
    const button = await within(canvasElement).findByRole('button');
    await button.focus();
    await expect(button).toHaveFocus();

    // Web-components: https://github.com/storybookjs/storybook/issues/19415
    // Preact: https://github.com/storybookjs/storybook/issues/19504

    if (['web-components', 'html', 'preact'].includes(globalThis.storybookRenderer)) return;

    // When we change the args to the button, it should not remount
    await channel.emit(UPDATE_STORY_ARGS, {
      storyId: id,
      updatedArgs: {
        label: 'New Text'
      }
    });
    await within(canvasElement).findByText(/New Text/);
    await expect(button).toHaveFocus();
  }
}`,...(d=(h=r.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const B=["ForceRemount","ChangeArgs"];export{r as ChangeArgs,s as ForceRemount,B as __namedExportsOrder,F as default};
