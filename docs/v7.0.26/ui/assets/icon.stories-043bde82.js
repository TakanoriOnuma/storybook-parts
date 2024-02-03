import{j as o,a as r,F as k}from"./jsx-runtime-0f39435c.js";import{e as c,h as w}from"./index-5a529529.js";import{I as m,i as t}from"./icon-f65261a7.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";const L=c.div`
  color: #666;
  font-size: 12px;
`,u=c.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 16%;
  min-width: 120px;
  margin: 16px;

  svg {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }

  ${e=>e.minimal&&w`
      flex: none;
      min-width: auto;
      padding: 0;
      margin: 16px;

      svg {
        display: block;
        margin-right: 0;
        width: 14px;
        height: 14px;
      }
    `};
`,I=c.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`,j=c.h2`
  font-size: 16px;
  margin: 16px;
`,P={component:m,argTypes:{color:{control:"color"}}},n=e=>o(m,{...e});n.args={icon:"watch"};const a=e=>r(k,{children:[r(j,{children:[Object.keys(t).length," icons"]}),o(I,{children:Object.keys(t).map(s=>r(u,{children:[o(m,{icon:s,"aria-hidden":!0,...e}),o(L,{children:s})]},s))})]}),i=e=>r(k,{children:[r(j,{children:[Object.keys(t).length," icons"]}),o(I,{children:Object.keys(t).map(s=>o(u,{minimal:!0,children:o(m,{icon:s,"aria-label":s,...e})},s))})]});var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"(args: ComponentProps<typeof Icons>) => <Icons {...args} />",...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item key={key}>
          <Icons icon={(key as IconKey)} aria-hidden {...args} />
          <Meta>{key}</Meta>
        </Item>)}
    </List>
  </>`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item minimal key={key}>
          <Icons icon={(key as IconKey)} aria-label={key} {...args} />
        </Item>)}
    </List>
  </>`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const S=["Basic","Labels","NoLabels"];export{n as Basic,a as Labels,i as NoLabels,S as __namedExportsOrder,P as default};
//# sourceMappingURL=icon.stories-043bde82.js.map
