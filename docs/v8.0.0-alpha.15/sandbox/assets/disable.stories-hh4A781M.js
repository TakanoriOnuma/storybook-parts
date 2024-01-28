const{global:p}=__STORYBOOK_MODULE_GLOBAL__,d={component:p.Components.Pre,decorators:[(l,c)=>l({args:{object:{...c.args}}})]},a={args:{a:"a",b:"b"},argTypes:{b:{table:{disable:!0}}}},e={args:{a:"a",b:"b"},argTypes:{b:{control:{disable:!0}}}};var r,s,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    a: 'a',
    b: 'b'
  },
  argTypes: {
    b: {
      table: {
        disable: true
      }
    }
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,t,b;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    a: 'a',
    b: 'b'
  },
  argTypes: {
    b: {
      control: {
        disable: true
      }
    }
  }
}`,...(b=(t=e.parameters)==null?void 0:t.docs)==null?void 0:b.source}}};const i=["DisableTable","DisableControl"];export{e as DisableControl,a as DisableTable,i as __namedExportsOrder,d as default};
