import{j as n,a as r,F as k}from"./jsx-runtime-31019b9d.js";import{n as c,b as w}from"./index-9e46a6e4.js";import{I as p,i as t}from"./icon-3829cbd1.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";const L=c.div`
  color: #666;
  font-size: 12px;
`,I=c.li`
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
`,u=c.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`,j=c.h2`
  font-size: 16px;
  margin: 16px;
`,M={component:p,argTypes:{color:{control:"color"}}},o=e=>n(p,{...e});o.args={icon:"watch"};const a=e=>r(k,{children:[r(j,{children:[Object.keys(t).length," icons"]}),n(u,{children:Object.keys(t).map(s=>r(I,{children:[n(p,{icon:s,"aria-hidden":!0,...e}),n(L,{children:s})]},s))})]}),i=e=>r(k,{children:[r(j,{children:[Object.keys(t).length," icons"]}),n(u,{children:Object.keys(t).map(s=>n(I,{minimal:!0,children:n(p,{icon:s,"aria-label":s,...e})},s))})]});var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"(args: ComponentProps<typeof Icons>) => <Icons {...args} />",...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item key={key}>
          <Icons icon={(key as IconKey)} aria-hidden {...args} />
          <Meta>{key}</Meta>
        </Item>)}
    </List>
  </>`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item minimal key={key}>
          <Icons icon={(key as IconKey)} aria-label={key} {...args} />
        </Item>)}
    </List>
  </>`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const P=["Basic","Labels","NoLabels"];export{o as Basic,a as Labels,i as NoLabels,P as __namedExportsOrder,M as default};
//# sourceMappingURL=icon.stories-87160309.js.map
