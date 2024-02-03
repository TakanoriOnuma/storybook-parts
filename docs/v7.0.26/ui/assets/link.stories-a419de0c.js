import{a as s,j as e}from"./jsx-runtime-0f39435c.js";import{a as x}from"./chunk-CSVBMRUK-183fa11f.js";import{L as r}from"./link-63c10a99.js";import{I as l}from"./icon-f65261a7.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";const I=x("onClick"),P={component:r},n={args:{href:"/",onClick:I,children:"Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)"},name:"Cancel w/ onClick"},c={args:{href:"http://example.com",children:"Link"},name:"Cancel w/ href"},t={args:{href:"/",children:"Any click will go through",onClick:I},name:"No-cancel w/ onClick"},i={args:{href:"http://example.com",children:"Link"},name:"No-cancel w/ href"},a={render:o=>s("div",{children:[e(r,{href:"http://google.com",...o,children:"Default"}),e("br",{}),e(r,{secondary:!0,href:"http://google.com",...o,children:"Secondary"}),e("br",{}),e(r,{tertiary:!0,href:"http://google.com",...o,children:"tertiary"}),e("br",{}),e(r,{nochrome:!0,href:"http://google.com",...o,children:"nochrome"}),e("br",{}),s(r,{href:"http://google.com",...o,children:[e(l,{icon:"discord"}),"With icon in front"]}),e("br",{}),e(r,{title:"Toggle sidebar",containsIcon:!0,href:"http://google.com",...o,children:e(l,{icon:"sidebar"})}),e("br",{}),e(r,{containsIcon:!0,withArrow:!0,href:"http://google.com",...o,children:"With arrow behind"}),e("br",{}),e("span",{style:{background:"#333"},children:e(r,{inverse:!0,href:"http://google.com",...o,children:"Inverted colors"})}),e("br",{})]}),name:"Styled links"};var h,m,d;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: '/',
    onClick,
    children: 'Try clicking with different mouse buttons and modifier keys (shift/ctrl/alt/cmd)'
  },
  name: 'Cancel w/ onClick'
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(W=a.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const q=["CancelWOnClick","CancelWHref","NoCancelWOnClick","NoCancelWHref","StyledLinks"];export{c as CancelWHref,n as CancelWOnClick,i as NoCancelWHref,t as NoCancelWOnClick,a as StyledLinks,q as __namedExportsOrder,P as default};
//# sourceMappingURL=link.stories-a419de0c.js.map
