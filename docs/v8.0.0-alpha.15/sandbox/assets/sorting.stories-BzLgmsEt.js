const{global:g}=__STORYBOOK_MODULE_GLOBAL__,b={component:g.Components.Pre,decorators:[(l,u)=>l({args:{object:{...u.args}}})],argTypes:{x:{type:{required:!0}},y:{type:{required:!0},table:{category:"foo"}},z:{},a:{type:{required:!0}},b:{table:{category:"foo"}},c:{}},args:{x:"x",y:"y",z:"z",a:"a",b:"b",c:"c"},parameters:{chromatic:{disable:!0}}},r={parameters:{controls:{sort:"none"}}},e={parameters:{controls:{sort:"alpha"}}},o={parameters:{controls:{sort:"requiredFirst"}}};var s,a,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    controls: {
      sort: 'none'
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      sort: 'alpha'
    }
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      sort: 'requiredFirst'
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["None","Alpha","RequiredFirst"];export{e as Alpha,r as None,o as RequiredFirst,y as __namedExportsOrder,b as default};
