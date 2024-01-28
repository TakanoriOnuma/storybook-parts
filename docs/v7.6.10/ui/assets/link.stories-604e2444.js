import{a as s,j as n}from"./jsx-runtime-31019b9d.js";import{a as x}from"./chunk-C5H4AMN5-7fdb7c46.js";import{L as e}from"./link-f51ec8d8.js";import{I as l}from"./icon-3829cbd1.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./index-9e46a6e4.js";import"./polished.esm-b305131d.js";const I=x("onClick"),P={component:e},o={args:{href:"/",onClick:I,children:"Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)"},name:"Cancel w/ onClick"},c={args:{href:"http://example.com",children:"Link"},name:"Cancel w/ href"},t={args:{href:"/",children:"Any click will go through",onClick:I},name:"No-cancel w/ onClick"},i={args:{href:"http://example.com",children:"Link"},name:"No-cancel w/ href"},a={render:r=>s("div",{children:[n(e,{href:"http://google.com",...r,children:"Default"}),n("br",{}),n(e,{secondary:!0,href:"http://google.com",...r,children:"Secondary"}),n("br",{}),n(e,{tertiary:!0,href:"http://google.com",...r,children:"tertiary"}),n("br",{}),n(e,{nochrome:!0,href:"http://google.com",...r,children:"nochrome"}),n("br",{}),s(e,{href:"http://google.com",...r,children:[n(l,{icon:"discord"}),"With icon in front"]}),n("br",{}),n(e,{title:"Toggle sidebar",containsIcon:!0,href:"http://google.com",...r,children:n(l,{icon:"sidebar"})}),n("br",{}),n(e,{containsIcon:!0,withArrow:!0,href:"http://google.com",...r,children:"With arrow behind"}),n("br",{}),n("span",{style:{background:"#333"},children:n(e,{inverse:!0,href:"http://google.com",...r,children:"Inverted colors"})}),n("br",{})]}),name:"Styled links"};var h,m,d;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: '/',
    onClick,
    children: 'Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)'
  },
  name: 'Cancel w/ onClick'
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    href: 'http://example.com',
    children: 'Link'
  },
  name: 'Cancel w/ href'
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,u,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Any click will go through',
    onClick
  },
  name: 'No-cancel w/ onClick'
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var C,L,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    href: 'http://example.com',
    children: 'Link'
  },
  name: 'No-cancel w/ href'
}`,...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,W,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Link>) => <div>
      <Link href="http://google.com" {...args}>
        Default
      </Link>
      <br />
      <Link secondary href="http://google.com" {...args}>
        Secondary
      </Link>
      <br />
      <Link tertiary href="http://google.com" {...args}>
        tertiary
      </Link>
      <br />
      <Link nochrome href="http://google.com" {...args}>
        nochrome
      </Link>
      <br />
      <Link href="http://google.com" {...args}>
        <Icons icon="discord" />
        With icon in front
      </Link>
      <br />
      <Link title="Toggle sidebar" containsIcon href="http://google.com" {...args}>
        {/* A linked icon by itself   */}
        <Icons icon="sidebar" />
      </Link>
      <br />
      <Link containsIcon withArrow href="http://google.com" {...args}>
        With arrow behind
      </Link>
      <br />
      <span style={{
      background: '#333'
    }}>
        <Link inverse href="http://google.com" {...args}>
          Inverted colors
        </Link>
      </span>
      <br />
    </div>,
  name: 'Styled links'
}`,...(S=(W=a.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const q=["CancelWOnClick","CancelWHref","NoCancelWOnClick","NoCancelWHref","StyledLinks"];export{c as CancelWHref,o as CancelWOnClick,i as NoCancelWHref,t as NoCancelWOnClick,a as StyledLinks,q as __namedExportsOrder,P as default};
//# sourceMappingURL=link.stories-604e2444.js.map
