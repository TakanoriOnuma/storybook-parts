import{j as r}from"./jsx-runtime-31019b9d.js";import{c as N,d as m}from"./index-0d1d6e7e.js";import{B as $,b as z}from"./index-f64ebf9a.js";import{T as B,f as D,t as R}from"./index-9e46a6e4.js";import{P as i}from"./preview-b92ff423.js";import{P as x}from"./FakeProvider-4aea7878.js";import{p as t}from"./preview.mockdata-60027cc9.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./isEqual-8e48f6f6.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9ed7e0e5.js";import"./index-9d475cdf.js";import"./index-eafb6329.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./iframe-0bb403ee.js";var f;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(f||(f={}));function U(e){var o=e.pathname,n=o===void 0?"/":o,s=e.search,a=s===void 0?"":s,P=e.hash,p=P===void 0?"":P;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),p&&p!=="#"&&(n+=p.charAt(0)==="#"?p:"#"+p),n}function q(e){var o={};if(e){var n=e.indexOf("#");n>=0&&(o.hash=e.substr(n),e=e.substr(0,n));var s=e.indexOf("?");s>=0&&(o.search=e.substr(s),e=e.substr(0,s)),e&&(o.pathname=e)}return o}const G=new x,J={createHref(e){return typeof e=="string"?e:U(e)},push(){},replace(){},go(){},back(){},forward(){}},We={title:"Preview",component:i,decorators:[(e,o)=>{const n=q("/?path=/story/story--id"),s={pathname:n.pathname||"/",search:n.search||"",hash:n.hash||"",state:null,key:"default"};return r($,{basename:void 0,location:s,navigator:J,static:!0,children:r(z,{children:a=>r(N,{provider:G,...a,docsOptions:{docsMode:!1},path:"/story/story--id",storyId:"story--id",navigate:()=>{},children:r(B,{theme:D(R.light),children:r(e,{...o})},"theme.provider")},"manager")},"location.consumer")},"location.provider")}]},c=()=>r(m,{children:({api:e})=>r(i,{...t,api:{...e,getElements:()=>({})},entry:{...t.entry,parameters:{previewTabs:{canvas:{hidden:!0}}}}})}),d=()=>r(m,{children:({api:e})=>r(i,{...t,api:{...e,getElements:()=>({})},entry:{...t.entry,parameters:{toolbar:{fullscreen:{hidden:!0}}}}})}),u=()=>r(m,{children:({api:e})=>r(i,{...t,api:{...e,getElements:()=>({})},entry:{...t.entry,parameters:{toolbar:{title:{hidden:!0},remount:{hidden:!0},zoom:{hidden:!0},eject:{hidden:!0},copy:{hidden:!0},fullscreen:{hidden:!0}}}}})}),l=()=>r(m,{children:({api:e})=>r(i,{...t,api:{...e,getElements:()=>({})}})}),h=()=>r(i,{...t}),v=()=>r(m,{children:({api:e})=>r(i,{...t,options:{...t.options,showTabs:!1},api:{...e,getElements:()=>({})}})});var y,b,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Consumer>
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
  </Consumer>`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var g,C,E;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Consumer>
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
  </Consumer>`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,S,H;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Consumer>
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
  </Consumer>`,...(H=(S=u.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var W,O,j;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => <Consumer>
    {({
    api
  }: Combo) => {
    return <Preview {...previewProps} api={{
      ...api,
      getElements: () => ({})
    }} />;
  }}
  </Consumer>`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var A,_,k;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:"() => <Preview {...previewProps} />",...(k=(_=h.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var F,L,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => <Consumer>
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
  </Consumer>`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Oe=["NoTabs","HideFullscreen","HideAllDefaultTools","WithCanvasTab","WithTabs","WithTabsHidden"];export{u as HideAllDefaultTools,d as HideFullscreen,c as NoTabs,l as WithCanvasTab,h as WithTabs,v as WithTabsHidden,Oe as __namedExportsOrder,We as default};
//# sourceMappingURL=preview.stories-4383f65e.js.map
