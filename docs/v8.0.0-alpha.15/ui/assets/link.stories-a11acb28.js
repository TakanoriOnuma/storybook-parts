import{R as e}from"./index-f1f2c4b1.js";import{a as S}from"./chunk-AT66UTFE-23ee157f.js";import{D as W,a as I}from"./index-758f4e48.js";import{L as n}from"./link-e0f662bb.js";import"./v4-4a60fe23.js";import"./index-4b2a7d13.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";const w=S("onClick"),R={component:n},o={args:{href:"/",onClick:w,children:"Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)"},name:"Cancel w/ onClick"},t={args:{href:"http://example.com",children:"Link"},name:"Cancel w/ href"},c={args:{href:"/",children:"Any click will go through",onClick:w},name:"No-cancel w/ onClick"},a={args:{href:"http://example.com",children:"Link"},name:"No-cancel w/ href"},l={render:r=>e.createElement("div",null,e.createElement(n,{href:"http://google.com",...r},"Default"),e.createElement("br",null),e.createElement(n,{secondary:!0,href:"http://google.com",...r},"Secondary"),e.createElement("br",null),e.createElement(n,{tertiary:!0,href:"http://google.com",...r},"tertiary"),e.createElement("br",null),e.createElement(n,{nochrome:!0,href:"http://google.com",...r},"nochrome"),e.createElement("br",null),e.createElement(n,{href:"http://google.com",...r},e.createElement(W,null),"With icon in front"),e.createElement("br",null),e.createElement(n,{title:"Toggle sidebar",containsIcon:!0,href:"http://google.com",...r},e.createElement(I,null)),e.createElement("br",null),e.createElement(n,{containsIcon:!0,withArrow:!0,href:"http://google.com",...r},"With arrow behind"),e.createElement("br",null),e.createElement("span",{style:{background:"#333"}},e.createElement(n,{inverse:!0,href:"http://google.com",...r},"Inverted colors")),e.createElement("br",null)),name:"Styled links"};var i,s,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    href: '/',
    onClick,
    children: 'Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)'
  },
  name: 'Cancel w/ onClick'
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var h,p,d;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: 'http://example.com',
    children: 'Link'
  },
  name: 'Cancel w/ href'
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,f,k;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Any click will go through',
    onClick
  },
  name: 'No-cancel w/ onClick'
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var u,b,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    href: 'http://example.com',
    children: 'Link'
  },
  name: 'No-cancel w/ href'
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var L,y,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <DiscordIcon />
        With icon in front
      </Link>
      <br />
      <Link title="Toggle sidebar" containsIcon href="http://google.com" {...args}>
        {/* A linked icon by itself   */}
        <SidebarIcon />
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
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const P=["CancelWOnClick","CancelWHref","NoCancelWOnClick","NoCancelWHref","StyledLinks"];export{t as CancelWHref,o as CancelWOnClick,a as NoCancelWHref,c as NoCancelWOnClick,l as StyledLinks,P as __namedExportsOrder,R as default};
//# sourceMappingURL=link.stories-a11acb28.js.map
