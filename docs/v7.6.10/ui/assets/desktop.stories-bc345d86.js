import{j as s}from"./jsx-runtime-31019b9d.js";import{i as O}from"./isChromatic-110c0762.js";import{B as T}from"./index-f64ebf9a.js";import{a as V,t as X}from"./index-0d1d6e7e.js";import{D as r}from"./desktop-7ea47ee8.js";import{m as $,M as q}from"./app.mockdata-f972930d.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9e46a6e4.js";import"./index-9ed7e0e5.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./isEqual-8e48f6f6.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-58fe527f.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";import"./index-9c2d1831.js";import"./Sidebar-86458011.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./bundle.esm-ef1ed2af.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./panel-5f9cc569.js";import"./preview-b92ff423.js";import"./index-eafb6329.js";import"./iframe-0bb403ee.js";import"./preview.mockdata-60027cc9.js";const Eo={title:"Layout/Desktop",component:r,parameters:{passArgsFirst:!1,path:"story/my-id",layout:"fullscreen",viewport:{viewports:{tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}},defaultViewport:"tablet",defaultOrientation:"landscape"},theme:"light",chromatic:{viewports:[1112]}},decorators:[(o,l)=>{O()&&V.local.set("storybook-layout",{});const L=$;return s(T,{location:`/?path=/${l.parameters.path}`,navigator:{},children:s("div",{style:{height:"100vh",width:"100vw",position:"absolute",top:0,left:0},children:s(o,{props:L,...l})})})}]},e=({props:o})=>s(r,{...o}),p=({props:o})=>s(r,{...o,panelCount:0}),a=({props:o})=>s(r,{...o,options:{...o.options,showNav:!1}}),n=({props:o})=>s(r,{...o,options:{...o.options,showPanel:!1}}),i=({props:o})=>s(r,{...o,options:{...o.options,panelPosition:"bottom"}}),m=({props:o})=>s(r,{...o,options:{...o.options,isFullscreen:!0}}),c=({props:o})=>s(r,{...o,options:{...o.options,showPanel:!1,showNav:!1}}),t=({props:o})=>s(r,{...o,pages:[{id:"/settings/",title:"Settings",url:"/settings/",type:X.experimental_PAGE,render:()=>s(q,{})}]});t.parameters={path:"/settings/"};var d,u,P;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} />`,...(P=(u=e.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var g,h,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} panelCount={0} />`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,D,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showNav: false
}} />`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var N,S,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showPanel: false
}} />`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,v,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  panelPosition: 'bottom'
}} />`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,F,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  isFullscreen: true
}} />`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var B,C,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} options={{
  ...props.options,
  showPanel: false,
  showNav: false
}} />`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var M,j,G;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`({
  props
}: {
  props: DesktopProps;
}) => <Desktop {...props} pages={[{
  id: '/settings/',
  title: 'Settings',
  url: '/settings/',
  type: types.experimental_PAGE,
  render: () => <MockPage />
}]} />`,...(G=(j=t.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const Mo=["Default","NoAddons","NoSidebar","NoPanel","BottomPanel","Fullscreen","NoPanelNoSidebar","Page"];export{i as BottomPanel,e as Default,m as Fullscreen,p as NoAddons,n as NoPanel,c as NoPanelNoSidebar,a as NoSidebar,t as Page,Mo as __namedExportsOrder,Eo as default};
//# sourceMappingURL=desktop.stories-bc345d86.js.map
