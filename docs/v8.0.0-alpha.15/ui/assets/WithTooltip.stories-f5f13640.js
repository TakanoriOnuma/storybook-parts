import{R as e}from"./index-f1f2c4b1.js";import{e as b,s as L}from"./index-bb7da91f.js";import{n as m}from"./index-4b2a7d13.js";import{T as _}from"./TooltipMessage-8ac9b3ce.js";import{W as t}from"./WithTooltip-de706088.js";import"./link-e0f662bb.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-758f4e48.js";import"./index-c74c9f7f.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-ce215a3e.js";import"./Tooltip-a3150a95.js";const D=m.div({height:300}),F=m.div({width:500,height:500,overflowY:"scroll",background:"#eee",position:"relative"}),I=m.div({height:100}),o=m.div({width:200,height:100,backgroundColor:"red",color:"white"}),n=({onHide:r})=>e.createElement(_,{title:"Lorem ipsum dolor sit",desc:"Amet consectatur vestibulum concet durum politu coret weirom",links:[{title:"Continue",onClick:r}]}),U={component:t,decorators:[r=>e.createElement(D,null,e.createElement(F,null,e.createElement(I,null),r()))]},i={args:{placement:"top",trigger:"hover"},render:r=>e.createElement(t,{tooltip:e.createElement(n,null),...r},e.createElement(o,null,"Hover me!"))},l={args:{placement:"top",trigger:"hover"},render:r=>e.createElement(t,{tooltip:n,...r},e.createElement(o,null,"Hover me!"))},a={args:{placement:"top"},render:r=>e.createElement(t,{tooltip:e.createElement(n,null),...r},e.createElement(o,null,"Click me!"))},s={args:{placement:"top",startOpen:!0},render:r=>e.createElement(t,{tooltip:e.createElement(n,null),...r},e.createElement(o,null,"Click me!")),play:async()=>{await b(await L.findByText("Lorem ipsum dolor sit")).toBeInTheDocument()}},c={args:{placement:"top",closeOnOutsideClick:!0},render:r=>e.createElement(t,{tooltip:e.createElement(n,null),...r},e.createElement(o,null,"Click me!"))},p={args:{placement:"top",hasChrome:!1},render:r=>e.createElement(t,{tooltip:e.createElement(n,null),...r},e.createElement(o,null,"Click me!"))};var g,u,d;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    trigger: 'hover'
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var T,h,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    trigger: 'hover'
  },
  render: args => <WithTooltip tooltip={Tooltip} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,E,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,W,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    startOpen: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>,
  play: async () => {
    await expect(await screen.findByText('Lorem ipsum dolor sit')).toBeInTheDocument();
  }
}`,...(f=(W=s.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var w,O,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    closeOnOutsideClick: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var x,y,B;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    hasChrome: false
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(B=(y=p.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const X=["SimpleHover","SimpleHoverFunctional","SimpleClick","SimpleClickStartOpen","SimpleClickCloseOnClick","WithoutChrome"];export{a as SimpleClick,c as SimpleClickCloseOnClick,s as SimpleClickStartOpen,i as SimpleHover,l as SimpleHoverFunctional,p as WithoutChrome,X as __namedExportsOrder,U as default};
//# sourceMappingURL=WithTooltip.stories-f5f13640.js.map
