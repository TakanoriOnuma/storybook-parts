import{j as i}from"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";import{a as y}from"./index-4766af88.js";import{N as r}from"./NotificationList-6f184b58.js";import{i as s,a as S,_ as D}from"./NotificationItem.stories-97a5efdc.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-P672VJMD-915057e7.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-df581bf3.js";import"./NotificationItem-45094437.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";const G={component:r,title:"Notifications/NotificationList",decorators:[t=>i(y,{children:i(t,{})}),t=>i("div",{style:{width:"240px",margin:"1rem",position:"relative",height:"100%"},children:t()})],excludeStories:/.*Data$/},c=D,h=(Array.isArray(c)?c:Array.from(Object.keys(s))).filter(t=>S.excludeStories.exec(t)).map(t=>s[t]),v=[h[0]],x=h;function n(t){}const o=()=>i(r,{notifications:v,clearNotification:n,placement:{position:"relative"}}),e=()=>i(r,{notifications:x,clearNotification:n,placement:{position:"relative"}}),a=()=>i(r,{placement:{position:"absolute",left:20,bottom:20},clearNotification:n,notifications:x});var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => <NotificationList notifications={singleData} clearNotification={clearNotification} placement={{
  position: 'relative'
}} />`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,f,N;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => <NotificationList notifications={allData} clearNotification={clearNotification} placement={{
  position: 'relative'
}} />`,...(N=(f=e.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var g,u,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() =>
// Note: position:absolute is only for QA/testing. Use position:fixed when integrating into the real UI.
<NotificationList placement={{
  position: 'absolute',
  left: 20,
  bottom: 20
}} clearNotification={clearNotification} notifications={allData} />`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};o.__docgenInfo={description:"",methods:[],displayName:"Single"};e.__docgenInfo={description:"",methods:[],displayName:"All"};a.__docgenInfo={description:"",methods:[],displayName:"Placement"};const H=["singleData","allData","Single","All","Placement"];export{e as All,a as Placement,o as Single,H as __namedExportsOrder,x as allData,G as default,v as singleData};
//# sourceMappingURL=NotificationList.stories-68bee6f1.js.map