import{j as r}from"./jsx-runtime-0f39435c.js";import{d as y,b as F,M as m}from"./index-f8624f6f.js";import{B as $,L as x}from"./index-4766af88.js";import{T as R,d as z,t as D}from"./index-5a529529.js";import{P as i}from"./preview-531174bb.js";import{P as U}from"./FakeProvider-63582ba4.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_baseAssignValue-531dc4d6.js";import"./mapValues-511dc51c.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./keysIn-d555f552.js";import"./_getPrototype-d314cec2.js";import"./isPlainObject-9af51d09.js";import"./index-ee3f53bc.js";import"./isEqual-09b8ceb9.js";import"./index-d475d2ea.js";import"./index-569f0cbf.js";import"./index-356e4a49.js";import"./_basePickBy-ac4ea461.js";import"./index-a0fdfe9c.js";import"./chunk-P672VJMD-915057e7.js";import"./index-df581bf3.js";import"./index-4d501b15.js";import"./index-b6572a53.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./iframe-9af5328f.js";const o={id:"string",storyId:"story--id",api:{on:()=>{},emit:()=>{},off:()=>{},getElements:e=>e===y.TAB?[{id:"notes",type:y.TAB,title:"Notes",route:({storyId:t})=>`/info/${t}`,match:({viewMode:t})=>t==="info",render:()=>null}]:[]},entry:{tags:[],type:"story",id:"story--id",parent:"root",depth:1,title:"kind",name:"story name",importPath:"./story.stories.tsx",prepared:!0,parameters:{fileName:"",options:{}},args:{},kind:"kind",isRoot:!1,isComponent:!1,isLeaf:!0},path:"string",viewMode:"story",location:{},baseUrl:"http://example.com",queryParams:{},options:{isFullscreen:!1,showTabs:!0,showToolbar:!0},withLoader:!1,description:"",refs:{}};var P;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(P||(P={}));function q(e){var t=e.pathname,n=t===void 0?"/":t,s=e.search,a=s===void 0?"":s,f=e.hash,p=f===void 0?"":f;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),p&&p!=="#"&&(n+=p.charAt(0)==="#"?p:"#"+p),n}function G(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}const J=new U,K={createHref(e){return typeof e=="string"?e:q(e)},push(){},replace(){},go(){},back(){},forward(){}},Le={title:"Preview",component:i,decorators:[(e,t)=>{const n=G("/?path=/story/story--id"),s={pathname:n.pathname||"/",search:n.search||"",hash:n.hash||"",state:null,key:"default"};return r($,{basename:void 0,location:s,navigator:K,static:!0,children:r(x,{children:a=>r(F,{provider:J,...a,docsOptions:{docsMode:!1},path:"/story/story--id",storyId:"story--id",navigate:()=>{},children:r(R,{theme:z(D.light),children:r(e,{...t})},"theme.provider")},"manager")},"location.consumer")},"location.provider")}]},d=()=>r(m,{children:({api:e})=>r(i,{...o,api:{...e,getElements:()=>({})},entry:{...o.entry,parameters:{previewTabs:{canvas:{hidden:!0}}}}})}),c=()=>r(m,{children:({api:e})=>r(i,{...o,api:{...e,getElements:()=>({})},entry:{...o.entry,parameters:{toolbar:{fullscreen:{hidden:!0}}}}})}),u=()=>r(m,{children:({api:e})=>r(i,{...o,api:{...e,getElements:()=>({})},entry:{...o.entry,parameters:{toolbar:{title:{hidden:!0},remount:{hidden:!0},zoom:{hidden:!0},eject:{hidden:!0},copy:{hidden:!0},fullscreen:{hidden:!0}}}}})}),l=()=>r(m,{children:({api:e})=>r(i,{...o,api:{...e,getElements:()=>({})}})}),h=()=>r(i,{...o}),v=()=>r(m,{children:({api:e})=>r(i,{...o,options:{...o.options,showTabs:!1},api:{...e,getElements:()=>({})}})});var b,g,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} api={{
      ...api,
      getElements: () => ({})
    }} entry={{
      ...(previewProps.entry as StoryEntry),
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        }
      }
    }} />;
  }}
  </Consumer>`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var T,C,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} api={{
      ...api,
      getElements: () => ({})
    }} entry={{
      ...(previewProps.entry as StoryEntry),
      parameters: {
        toolbar: {
          fullscreen: {
            hidden: true
          }
        }
      }
    }} />;
  }}
  </Consumer>`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,H,A;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} api={{
      ...api,
      getElements: () => ({})
    }} entry={{
      ...(previewProps.entry as StoryEntry),
      parameters: {
        toolbar: {
          title: {
            hidden: true
          },
          remount: {
            hidden: true
          },
          zoom: {
            hidden: true
          },
          eject: {
            hidden: true
          },
          copy: {
            hidden: true
          },
          fullscreen: {
            hidden: true
          }
        }
      }
    }} />;
  }}
  </Consumer>`,...(A=(H=u.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var k,L,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} api={{
      ...api,
      getElements: () => ({})
    }} />;
  }}
  </Consumer>`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var M,N,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:"() => <Preview {...previewProps} />",...(O=(N=h.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,j,B;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} options={{
      ...previewProps.options,
      showTabs: false
    }} api={{
      ...api,
      getElements: () => ({})
    }} />;
  }}
  </Consumer>`,...(B=(j=v.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const We=["NoTabs","HideFullscreen","HideAllDefaultTools","WithCanvasTab","WithTabs","WithTabsHidden"];export{u as HideAllDefaultTools,c as HideFullscreen,d as NoTabs,l as WithCanvasTab,h as WithTabs,v as WithTabsHidden,We as __namedExportsOrder,Le as default};
//# sourceMappingURL=preview.stories-bb793112.js.map
