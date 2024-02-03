import{a as L,j as r}from"./jsx-runtime-0f39435c.js";import{r as O}from"./index-6f814c40.js";import{i as W}from"./isChromatic-110c0762.js";import{D as s}from"./desktop-9e154e7b.js";import{m as q,M as z}from"./app.mockdata-7991a323.js";import{s as G}from"./index-f8624f6f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./throttle-f41f6282.js";import"./isObjectLike-dbd718f5.js";import"./isSymbol-de103834.js";import"./index-4d501b15.js";import"./index-6de6b113.js";import"./Sidebar-d535dffb.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./Heading-43200e6c.js";import"./Menu-cd6fe8ee.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./HighlightStyles-bdd60786.js";import"./panel-36ec9dab.js";import"./preview-531174bb.js";import"./index-b6572a53.js";import"./index-4766af88.js";import"./chunk-P672VJMD-915057e7.js";import"./index-df581bf3.js";import"./iframe-9af5328f.js";import"./_getTag-17cccba0.js";import"./_baseAssignValue-531dc4d6.js";import"./mapValues-511dc51c.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./keysIn-d555f552.js";import"./_getPrototype-d314cec2.js";import"./isPlainObject-9af51d09.js";import"./index-ee3f53bc.js";import"./isEqual-09b8ceb9.js";import"./index-356e4a49.js";import"./_basePickBy-ac4ea461.js";import"./index-a0fdfe9c.js";const Ho={title:"Layout/Desktop",component:s,parameters:{passArgsFirst:!1},decorators:[(o,l)=>(W()&&G.local.set("storybook-layout",{}),L("div",{style:{minHeight:900,minWidth:1200},children:[r(o,{props:q,...l}),";"]}))]},e=({props:o})=>r(s,{...o}),p=({props:o})=>r(s,{...o,panelCount:0}),t=({props:o})=>r(s,{...o,options:{...o.options,showNav:!1}}),a=({props:o})=>r(s,{...o,options:{...o.options,showPanel:!1}}),n=({props:o})=>r(s,{...o,options:{...o.options,panelPosition:"bottom"}}),i=({props:o})=>r(s,{...o,options:{...o.options,isFullscreen:!0}}),m=({props:o})=>r(s,{...o,options:{...o.options,showPanel:!1,showNav:!1}}),c=({props:o})=>r(s,{...o,pages:[{key:"settings",route:({children:l})=>r(O.Fragment,{children:l}),render:()=>r(z,{})}],viewMode:"settings"});var d,u,k;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} />`,...(k=(u=e.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var P,g,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} panelCount={0} />`,...(D=(g=p.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var f,h,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showNav: false
}} />`,...(N=(h=t.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var S,w,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showPanel: false
}} />`,...(F=(w=a.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var b,v,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  panelPosition: 'bottom'
}} />`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,M,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  isFullscreen: true
}} />`,...(j=(M=i.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var A,C,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showPanel: false,
  showNav: false
}} />`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,B,H;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} pages={[{
  key: 'settings',
  route: ({
    children
  }) => <Fragment>{children}</Fragment>,
  render: () => <MockPage />
}]} viewMode="settings" />`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Lo=["Default","NoAddons","NoSidebar","NoPanel","BottomPanel","Fullscreen","NoPanelNoSidebar","Page"];export{n as BottomPanel,e as Default,i as Fullscreen,p as NoAddons,a as NoPanel,m as NoPanelNoSidebar,t as NoSidebar,c as Page,Lo as __namedExportsOrder,Ho as default};
//# sourceMappingURL=desktop.stories-fb640894.js.map
