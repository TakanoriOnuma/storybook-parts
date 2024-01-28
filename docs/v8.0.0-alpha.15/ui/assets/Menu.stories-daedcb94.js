import{R as t}from"./index-f1f2c4b1.js";import{e as E}from"./index-bb7da91f.js";import{i as B}from"./index-a443495b.js";import{n as U}from"./index-4b2a7d13.js";import{w as x,u as W,s as A}from"./index-09d824d7.js";import{L as R}from"./index-758f4e48.js";import{S as r}from"./Menu-2bb664ec.js";import{u as T}from"./Menu-57ad6df2.js";import{L as H}from"./LayoutProvider-eb9b2e6f.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-b75c9059.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./index-b4514f1c.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./constants-277f2eb4.js";const l=[{title:"has icon",icon:t.createElement(R,null),id:"icon"},{title:"has no icon",id:"non"}],he={component:r,title:"Sidebar/Menu",args:{menu:l},decorators:[e=>t.createElement(H,null,e())]},a={render:()=>t.createElement(B,{links:l})},o={args:{isHighlighted:!0},render:e=>t.createElement(r,{menu:l,...e})},D=U.div({'#storybook-root > [data-side="left"] > &':{textAlign:"right"}}),n={render:()=>{const e=T({whatsNewData:{status:"SUCCESS",disableWhatsNewNotifications:!1}},{getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,isWhatsNewUnread:()=>!0,getDocsUrl:()=>"https://storybook.js.org/docs/"},!1,!1,!1,!1,!1);return t.createElement(D,null,t.createElement(r,{menu:e,isHighlighted:!0}))},play:async({canvasElement:e})=>{const i=x(e);await new Promise(N=>{setTimeout(N,500)});const c=await i.findByRole("button");await W.click(c);const m=await A.findByText(/About your Storybook/);await E(m).toBeInTheDocument()},decorators:[e=>t.createElement("div",{style:{height:800}},t.createElement(e,null))]},s={...n,render:()=>{const e=T({whatsNewData:void 0},{getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,isWhatsNewUnread:()=>!1,getDocsUrl:()=>"https://storybook.js.org/docs/"},!1,!1,!1,!1,!1);return t.createElement(D,null,t.createElement(r,{menu:e}))},play:async e=>{const i=x(e.canvasElement);await new Promise(m=>{setTimeout(m,500)}),await n.play(e);const c=await i.queryByText(/What's new/);await E(c).not.toBeInTheDocument()}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TooltipLinkList links={fakemenu} />
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,f,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isHighlighted: true
  },
  render: args => <SidebarMenu menu={fakemenu} {...args} />
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var g,y,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      isWhatsNewUnread: () => true,
      getDocsUrl: () => 'https://storybook.js.org/docs/'
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,v,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Expanded,
  render: () => {
    const menu = useMenu(({
      whatsNewData: undefined
    } as State), {
      // @ts-expect-error (invalid)
      getShortcutKeys: () => ({}),
      getAddonsShortcuts: () => ({}),
      versionUpdateAvailable: () => false,
      isWhatsNewUnread: () => false,
      getDocsUrl: () => 'https://storybook.js.org/docs/'
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const fe=["Items","Real","Expanded","ExpandedWithoutWhatsNew"];export{n as Expanded,s as ExpandedWithoutWhatsNew,a as Items,o as Real,fe as __namedExportsOrder,he as default};
//# sourceMappingURL=Menu.stories-daedcb94.js.map
