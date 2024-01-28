import{b as k,c as _}from"./chunk-AT66UTFE-lZPZjQnT.js";import"./v4-yQnnJER4.js";const{global:B}=__STORYBOOK_MODULE_GLOBAL__,c=k("actionA","actionB","actionC"),S={component:B.Components.Button,args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},o={args:{onClick:c.actionA}},n={args:{onClick:c.actionB}},r={args:{onClick:c.actionC}},s={args:{onClick:c.actionA},decorators:[f=>(_({depth:2}),f())]};var a,e,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onClick: configs.actionA
  }
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};var i,g,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onClick: configs.actionB
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onClick: configs.actionC
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,A,C;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    onClick: configs.actionA
  },
  decorators: [(storyFn: any) => {
    configureActions({
      depth: 2
    });
    return storyFn();
  }]
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const h=["ActionA","ActionB","ActionC","ConfigureActions"];export{o as ActionA,n as ActionB,r as ActionC,s as ConfigureActions,h as __namedExportsOrder,S as default};
