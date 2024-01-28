const{global:u}=__STORYBOOK_MODULE_GLOBAL__,d={component:u.Components.Button,tags:["autodocs"],args:{onClick:()=>console.log("clicked!")},parameters:{chromatic:{disable:!0}}},e={args:{label:"Basic"}},a={args:{label:"One"}},o={args:{label:"Two"}};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Basic'
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'One'
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Two'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["Basic","One","Two"],b=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,One:a,Two:o,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{b as B,e as a};
