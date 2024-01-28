import{j as e,a as B}from"./jsx-runtime-31019b9d.js";import{n as m}from"./index-9e46a6e4.js";import{T as F}from"./TooltipMessage-cb65d4d8.js";import{W as o}from"./WithTooltip-9caa86c0.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./link-f51ec8d8.js";import"./polished.esm-b305131d.js";import"./icon-3829cbd1.js";import"./index-9c2d1831.js";import"./index-eafb6329.js";import"./enums-54c8c3f1.js";import"./Tooltip-f5f982a6.js";const y=m.div({height:300}),A=m.div({width:500,height:500,overflowY:"scroll",background:"#eee",position:"relative"}),E=m.div({height:100}),t=m.div({width:200,height:100,backgroundColor:"red",color:"white"}),i=({onHide:r})=>e(F,{title:"Lorem ipsum dolor sit",desc:"Amet consectatur vestibulum concet durum politu coret weirom",links:[{title:"Continue",onClick:r}]}),Q={component:o,decorators:[r=>e(y,{children:B(A,{children:[e(E,{}),r()]})})]},n={args:{placement:"top",trigger:"hover"},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Hover me!"})})},s={args:{placement:"top",trigger:"hover"},render:r=>e(o,{tooltip:i,...r,children:e(t,{children:"Hover me!"})})},a={args:{placement:"top"},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},l={args:{placement:"top",startOpen:!0},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},p={args:{placement:"top",closeOnOutsideClick:!0},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})},c={args:{placement:"top",hasChrome:!1},render:r=>e(o,{tooltip:e(i,{}),...r,children:e(t,{children:"Click me!"})})};var g,d,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var W,O,f;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    startOpen: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(f=(O=l.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var H,w,x;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    closeOnOutsideClick: true
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,j,_;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    hasChrome: false
  },
  render: args => <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const R=["SimpleHover","SimpleHoverFunctional","SimpleClick","SimpleClickStartOpen","SimpleClickCloseOnClick","WithoutChrome"];export{a as SimpleClick,p as SimpleClickCloseOnClick,l as SimpleClickStartOpen,n as SimpleHover,s as SimpleHoverFunctional,c as WithoutChrome,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=WithTooltip.stories-750541fe.js.map
