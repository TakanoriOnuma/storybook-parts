const{global:i}=__STORYBOOK_MODULE_GLOBAL__,l={component:i.Components.Button,args:{label:"Click Me!"},argTypes:{onClick:{}},parameters:{chromatic:{disable:!0},actions:{argTypesRegex:"^on.*"}}},e={argTypes:{onClick:{action:"clicked!"}}},o={argTypes:{onClick:{action:!0}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  argTypes: {
    onClick: {
      action: 'clicked!'
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,c,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    onClick: {
      action: true
    }
  }
}`,...(t=(c=o.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};const p=["String","Boolean"];export{o as Boolean,e as String,p as __namedExportsOrder,l as default};
