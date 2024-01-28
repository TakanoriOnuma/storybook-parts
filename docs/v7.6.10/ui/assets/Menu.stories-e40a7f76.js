import{j as t}from"./jsx-runtime-31019b9d.js";import{e as E}from"./index-728c6c1a.js";import{i as U}from"./index-0d90a496.js";import{n as H}from"./index-9e46a6e4.js";import{w as D,u as R,s as I}from"./index-73c7a0c2.js";import{S as i,T as C}from"./Menu-26934337.js";import{u as W}from"./menu-06406aa5.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./index-9ed7e0e5.js";import"./index-356e4a49.js";import"./polished.esm-b305131d.js";import"./index-0d1d6e7e.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";const m=[{title:"has icon",icon:"link",id:"icon"},{title:"has no icon",id:"non"}],be={component:i,title:"Sidebar/Menu",args:{menu:m}},a={render:()=>t(U,{links:m})},o={render:()=>t(i,{menu:m,isHighlighted:!0})},r={render:()=>t(C,{menu:m})},A=H.div({'#storybook-root > [data-side="left"] > &':{textAlign:"right"}}),n={render:()=>{const e=W({whatsNewData:{status:"SUCCESS",disableWhatsNewNotifications:!1}},{getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,isWhatsNewUnread:()=>!0},!1,!1,!1,!1,!1);return t(A,{children:t(i,{menu:e,isHighlighted:!0})})},play:async({canvasElement:e})=>{const c=D(e);await new Promise(M=>{setTimeout(M,500)});const u=await c.findByRole("button");await R.click(u);const d=await I.findByText(/About your Storybook/);await E(d).toBeInTheDocument()},decorators:[e=>t("div",{style:{height:800},children:t(e,{})})]},s={...n,render:()=>{const e=W({whatsNewData:void 0},{getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,isWhatsNewUnread:()=>!1},!1,!1,!1,!1,!1);return t(A,{children:t(i,{menu:e})})},play:async e=>{const c=D(e.canvasElement);await new Promise(d=>{setTimeout(d,500)}),await n.play(e);const u=await c.queryByText(/What's new/);await E(u).not.toBeInTheDocument()}};var l,p,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <TooltipLinkList links={fakemenu} />
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,w,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SidebarMenu menu={fakemenu} isHighlighted />
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,b,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ToolbarMenu menu={fakemenu} />
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,T,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const menu = useMenu(({
      whatsNewData: {
        status: 'SUCCESS',
        disableWhatsNewNotifications: false
      }
    } as State), {
      // @ts-expect-error (Converted from ts-ignore)
      getShortcutKeys: () => ({}),
      getAddonsShortcuts: () => ({}),
      versionUpdateAvailable: () => false,
      isWhatsNewUnread: () => true
    }, false, false, false, false, false);
    return <DoubleThemeRenderingHack>
        <SidebarMenu menu={menu} isHighlighted />
      </DoubleThemeRenderingHack>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await new Promise(res => {
      setTimeout(res, 500);
    });
    const menuButton = await canvas.findByRole('button');
    await userEvent.click(menuButton);
    const aboutStorybookBtn = await screen.findByText(/About your Storybook/);
    await expect(aboutStorybookBtn).toBeInTheDocument();
  },
  decorators: [StoryFn => <div style={{
    height: 800
  }}>
        <StoryFn />
      </div>]
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var x,N,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Expanded,
  render: () => {
    const menu = useMenu(({
      whatsNewData: undefined
    } as State), {
      // @ts-expect-error (invalid)
      getShortcutKeys: () => ({}),
      getAddonsShortcuts: () => ({}),
      versionUpdateAvailable: () => false,
      isWhatsNewUnread: () => false
    }, false, false, false, false, false);
    return <DoubleThemeRenderingHack>
        <SidebarMenu menu={menu} />
      </DoubleThemeRenderingHack>;
  },
  play: async context => {
    const canvas = within(context.canvasElement);
    await new Promise(res => {
      setTimeout(res, 500);
    });
    await Expanded.play(context);
    const releaseNotes = await canvas.queryByText(/What's new/);
    await expect(releaseNotes).not.toBeInTheDocument();
  }
}`,...(B=(N=s.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const ge=["Items","Real","Toolbar","Expanded","ExpandedWithoutWhatsNew"];export{n as Expanded,s as ExpandedWithoutWhatsNew,a as Items,o as Real,r as Toolbar,ge as __namedExportsOrder,be as default};
//# sourceMappingURL=Menu.stories-e40a7f76.js.map
