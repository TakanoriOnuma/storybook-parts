import{j as t}from"./jsx-runtime-31019b9d.js";import{A as r}from"./index-0d1d6e7e.js";import{B as N}from"./index-f64ebf9a.js";import{M as i}from"./mobile-cff33830.js";import{m as O,M as x}from"./app.mockdata-f972930d.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./index-9e46a6e4.js";import"./isEqual-8e48f6f6.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9ed7e0e5.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./Sidebar-86458011.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";import"./panel-5f9cc569.js";import"./preview-b92ff423.js";import"./index-eafb6329.js";import"./iframe-0bb403ee.js";import"./preview.mockdata-60027cc9.js";const{Addon_TypesEnum:B}=__STORYBOOK_MODULE_TYPES__,fo={title:"Layout/Mobile",component:i,parameters:{passArgsFirst:!1,path:"story/my-id",layout:"fullscreen",viewport:{viewports:{mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"}},defaultViewport:"mobile1",defaultOrientation:"portrait"},theme:"light",chromatic:{viewports:[320]}},decorators:[(o,l)=>{const D=O;return t(N,{location:`/?path=/${l.parameters.path}`,navigator:{},children:t("div",{style:{height:"100vh",width:"100vw",position:"absolute",top:0,left:0},children:t(o,{props:D,...l})})})}]},s=({props:o})=>t(i,{...o,options:{...o.options,initialActive:r.SIDEBAR}}),p=({props:o})=>t(i,{...o,options:{...o.options,initialActive:r.CANVAS}}),n=({props:o})=>t(i,{...o,options:{...o.options,initialActive:r.ADDONS}}),a=({props:o})=>t(i,{...o,options:{...o.options,showPanel:!1}}),m=({props:o})=>t(i,{...o,options:{...o.options,initialActive:r.SIDEBAR,isFullscreen:!0}}),e=({props:o})=>t(i,{...o,options:{...o.options,initialActive:r.CANVAS},pages:[{id:"settings",url:"/settings",title:"Settings",type:B.experimental_PAGE,render:()=>t(x,{})}],viewMode:"settings"});e.parameters={path:"/settings/"};var c,d,A;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  initialActive: ActiveTabs.SIDEBAR
}} />`,...(A=(d=s.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var u,b,v;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  initialActive: ActiveTabs.CANVAS
}} />`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,S,M;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  initialActive: ActiveTabs.ADDONS
}} />`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var P,h,f;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  showPanel: false
}} />`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var _,w,y;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  initialActive: ActiveTabs.SIDEBAR,
  isFullscreen: true
}} />`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var E,I,T;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`({
  props
}: {
  props: MobileProps;
}) => <Mobile {...props} options={{
  ...props.options,
  initialActive: ActiveTabs.CANVAS
}} pages={[{
  id: 'settings',
  url: '/settings',
  title: 'Settings',
  type: Addon_TypesEnum.experimental_PAGE,
  render: () => <MockPage />
}]} viewMode="settings" />`,...(T=(I=e.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const _o=["InitialSidebar","InitialCanvas","InitialAddons","NoPanel","Fullscreen","Page"];export{m as Fullscreen,n as InitialAddons,p as InitialCanvas,s as InitialSidebar,a as NoPanel,e as Page,_o as __namedExportsOrder,fo as default};
//# sourceMappingURL=mobile.stories-1dbc6b21.js.map
