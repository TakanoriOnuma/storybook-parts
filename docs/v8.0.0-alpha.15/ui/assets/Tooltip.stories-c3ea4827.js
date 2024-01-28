import{R as e}from"./index-f1f2c4b1.js";import{n as y}from"./index-4b2a7d13.js";import{T as o}from"./Tooltip-a3150a95.js";const S={style:{position:"relative",top:20,left:20}},r=y.div({width:"100px",height:"100px",fontSize:"16px",textAlign:"center",lineHeight:"100px"}),b={component:o,args:S},n={render:t=>e.createElement(o,{...t},e.createElement(r,null,"Text"))},a={args:{placement:"bottom"},render:t=>e.createElement(o,{...t},e.createElement(r,null,"Text"))},s={args:{placement:"left"},render:t=>e.createElement(o,{...t},e.createElement(r,null,"Text"))},p={args:{placement:"right"},render:t=>e.createElement(o,{...t},e.createElement(r,null,"Text"))},c={args:{hasChrome:!1},render:t=>e.createElement(o,{...t},e.createElement(r,null,"Text"))};var l,m,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // args: mockPopperProps,
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <Content>Text</Content>
    </Tooltip>
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var g,d,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    // ...mockPopperProps,
    placement: 'bottom'
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <Content>Text</Content>
    </Tooltip>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,f,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    // ...mockPopperProps,
    placement: 'left'
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <Content>Text</Content>
    </Tooltip>
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,P,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    // ...mockPopperProps,
    placement: 'right'
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <Content>Text</Content>
    </Tooltip>
}`,...(h=(P=p.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var E,B,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    // ...mockPopperProps,
    hasChrome: false
  },
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
      <Content>Text</Content>
    </Tooltip>
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const v=["BasicDefault","BasicDefaultBottom","BasicDefaultLeft","BasicDefaultRight","WithoutChrome"];export{n as BasicDefault,a as BasicDefaultBottom,s as BasicDefaultLeft,p as BasicDefaultRight,c as WithoutChrome,v as __namedExportsOrder,b as default};
//# sourceMappingURL=Tooltip.stories-c3ea4827.js.map
