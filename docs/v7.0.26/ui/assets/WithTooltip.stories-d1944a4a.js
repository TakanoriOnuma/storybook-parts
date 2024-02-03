import{j as e,a as B}from"./jsx-runtime-0f39435c.js";import{e as m}from"./index-5a529529.js";import{T as F}from"./TooltipMessage-a52d78b2.js";import{W as o}from"./WithTooltip-2eca3854.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./link-63c10a99.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./icon-f65261a7.js";import"./index-6de6b113.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-b6572a53.js";import"./enums-54c8c3f1.js";import"./Tooltip-13cb3c0b.js";const y=m.div({height:300}),A=m.div({width:500,height:500,overflowY:"scroll",background:"#eee",position:"relative"}),E=m.div({height:100}),t=m.div({width:200,height:100,backgroundColor:"red",color:"white"}),i=({onHide:r})=>e(F,{title:"Lorem ipsum dolor sit",desc:"Amet consectatur vestibulum concet durum politu coret weirom",links:[{title:"Continue",onClick:r}]}),X={component:o,decorators:[r=>e(y,{children:B(A,{children:[e(E,{}),r()]})})]},n={args:{placement:"top",trigger:"hover"},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Hover me!"})})},s={args:{placement:"top",trigger:"hover"},render:r=>e(o,{tooltip:i,...r,children:e(t,{children:"Hover me!"})})},a={args:{placement:"top"},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},p={args:{placement:"top",startOpen:!0},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},l={args:{placement:"top",closeOnOutsideClick:!0},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},c={args:{placement:"top",hasChrome:!1},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})};var g,d,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    trigger: 'hover'
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,T,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    trigger: 'hover'
  },
  render: args => <WithTooltip tooltip={Tooltip} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var k,S,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var W,O,f;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    startOpen: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(f=(O=p.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var H,w,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    closeOnOutsideClick: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var x,b,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    hasChrome: false
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const Z=["SimpleHover","SimpleHoverFunctional","SimpleClick","SimpleClickStartOpen","SimpleClickCloseOnClick","WithoutChrome"];export{a as SimpleClick,l as SimpleClickCloseOnClick,p as SimpleClickStartOpen,n as SimpleHover,s as SimpleHoverFunctional,c as WithoutChrome,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=WithTooltip.stories-d1944a4a.js.map
