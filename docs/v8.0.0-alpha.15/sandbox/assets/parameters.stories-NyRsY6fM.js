import{P as O,b as E}from"./chunk-AT66UTFE-lZPZjQnT.js";import"./v4-yQnnJER4.js";const{global:v}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:f,useEffect:g}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:l,Element:m}=v,k=/^(\S+)\s*(.*)$/,b=m!=null&&!m.prototype.matches,A=b?"msMatchesSelector":"matches",p=(t,r)=>{if(t[A](r))return!0;const e=t.parentElement;return e?p(e,r):!1},B=(t,...r)=>{const e=t(...r);return Object.entries(e).map(([n,a])=>{const[o,u,c]=n.match(k)||[];return{eventName:u,handler:i=>{(!c||p(i.target,c))&&a(i)}}})},L=(t,...r)=>{const e=l&&l.getElementById("storybook-root");g(()=>{if(e!=null){const n=B(t,...r);return n.forEach(({eventName:a,handler:o})=>e.addEventListener(a,o)),()=>n.forEach(({eventName:a,handler:o})=>e.removeEventListener(a,o))}},[e,t,r])},M=f({name:"withActions",parameterName:O,skipIfNoParametersOrOptions:!0,wrapper:(t,r,{parameters:e})=>(e!=null&&e.handles&&L(E,...e.handles),t(r))});const{global:S}=__STORYBOOK_MODULE_GLOBAL__,P={component:S.Components.Button,args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},s={parameters:{handles:[{click:"clicked",contextmenu:"right clicked"}]},decorators:[M]};var d,_,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    handles: [{
      click: 'clicked',
      contextmenu: 'right clicked'
    }]
  },
  decorators: [withActions]
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const R=["Basic"];export{s as Basic,R as __namedExportsOrder,P as default};
