import{j as o}from"./jsx-runtime-0f39435c.js";import{e as A}from"./index-7a180320.js";import{f as N}from"./index-90790cc0.js";import{e as _}from"./index-5a529529.js";import{w as H,u as I,s as K}from"./index-1c0ca390.js";import{S as i,T as L}from"./Menu-cd6fe8ee.js";import{u as B}from"./menu-2019c8e3.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-341540c2.js";import"./index-d475d2ea.js";import"./isEqual-09b8ceb9.js";import"./_baseIsEqual-a479ac5d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./lz-string-475d838e.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./index-df581bf3.js";import"./index-356e4a49.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./index-f8624f6f.js";import"./_baseAssignValue-531dc4d6.js";import"./mapValues-511dc51c.js";import"./_baseIteratee-11045650.js";import"./isSymbol-de103834.js";import"./keysIn-d555f552.js";import"./_getPrototype-d314cec2.js";import"./isPlainObject-9af51d09.js";import"./index-ee3f53bc.js";import"./_basePickBy-ac4ea461.js";import"./index-a0fdfe9c.js";import"./chunk-P672VJMD-915057e7.js";const Me={component:i,title:"Sidebar/Menu"},p=[{title:"has icon",icon:"link",id:"icon"},{title:"has no icon",id:"non"}],s=()=>o(N,{links:p}),a=()=>o(i,{menu:p,isHighlighted:!0}),n=()=>o(L,{menu:p}),D=_.div({'#storybook-root > [data-side="left"] > &':{textAlign:"right"}}),t=()=>{const e=B({getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,releaseNotesVersion:()=>"6.0.0"},!1,!1,!1,!1,!1);return o(D,{children:o(i,{menu:e,isHighlighted:!0})})};t.play=async({canvasElement:e})=>{const m=H(e);await new Promise(E=>{setTimeout(E,500)});const u=await m.findByRole("button");await I.click(u);const l=await K.findByText(/About your Storybook/);await A(l).toBeInTheDocument()};const r=()=>{const e=B({getShortcutKeys:()=>({}),getAddonsShortcuts:()=>({}),versionUpdateAvailable:()=>!1,releaseNotesVersion:()=>{}},!1,!1,!1,!1,!1);return o(D,{children:o(i,{menu:e})})};r.play=async e=>{const m=H(e.canvasElement);await new Promise(l=>{setTimeout(l,500)}),await t.play(e);const u=await m.queryByText(/Release notes/);await A(u).not.toBeInTheDocument()};var c,d,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"() => <TooltipLinkList links={fakemenu} />",...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"() => <SidebarMenu menu={fakemenu} isHighlighted />",...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,k,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"() => <ToolbarMenu menu={fakemenu} />",...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,v,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const menu = useMenu({
    // @ts-expect-error (Converted from ts-ignore)
    getShortcutKeys: () => ({}),
    getAddonsShortcuts: () => ({}),
    versionUpdateAvailable: () => false,
    releaseNotesVersion: () => '6.0.0'
  }, false, false, false, false, false);
  return <DoubleThemeRenderingHack>
      <SidebarMenu menu={menu} isHighlighted />
    </DoubleThemeRenderingHack>;
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,M,R;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const menu = useMenu({
    // @ts-expect-error (invalid)
    getShortcutKeys: () => ({}),
    getAddonsShortcuts: () => ({}),
    versionUpdateAvailable: () => false,
    releaseNotesVersion: () => undefined
  }, false, false, false, false, false);
  return <DoubleThemeRenderingHack>
      <SidebarMenu menu={menu} />
    </DoubleThemeRenderingHack>;
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Re=["Items","Real","Toolbar","Expanded","ExpandedWithoutReleaseNotes"];export{t as Expanded,r as ExpandedWithoutReleaseNotes,s as Items,a as Real,n as Toolbar,Re as __namedExportsOrder,Me as default};
//# sourceMappingURL=Menu.stories-7dc65d8f.js.map
