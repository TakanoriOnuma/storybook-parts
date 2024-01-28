import{R as e}from"./index-f1f2c4b1.js";import{n as c,c as k}from"./index-4b2a7d13.js";import{I as i,i as r}from"./icon-9490c14c.js";import"./index-758f4e48.js";const E=c.div`
  color: #666;
  font-size: 12px;
`,x=c.li`
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

  ${n=>n.minimal&&k`
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
`,b=c.h2`
  font-size: 16px;
  margin: 16px;
`,j={component:i,argTypes:{color:{control:"color"}}},a=n=>e.createElement(i,{...n});a.args={icon:"watch"};const t=n=>e.createElement(e.Fragment,null,e.createElement(b,null,Object.keys(r).length," icons"),e.createElement(I,null,Object.keys(r).map(s=>e.createElement(x,{key:s},e.createElement(i,{icon:s,"aria-hidden":!0,...n}),e.createElement(E,null,s))))),o=n=>e.createElement(e.Fragment,null,e.createElement(b,null,Object.keys(r).length," icons"),e.createElement(I,null,Object.keys(r).map(s=>e.createElement(x,{minimal:!0,key:s},e.createElement(i,{icon:s,"aria-label":s,...n})))));a.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"Labels"};o.__docgenInfo={description:"",methods:[],displayName:"NoLabels"};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"(args: ComponentProps<typeof Icons>) => <Icons {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item key={key}>
          <Icons icon={(key as IconType)} aria-hidden {...args} />
          <Meta>{key}</Meta>
        </Item>)}
    </List>
  </>`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,u,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ComponentProps<typeof Icons>) => <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map(key => <Item minimal key={key}>
          <Icons icon={(key as IconType)} aria-label={key} {...args} />
        </Item>)}
    </List>
  </>`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const N=["Basic","Labels","NoLabels"];export{a as Basic,t as Labels,o as NoLabels,N as __namedExportsOrder,j as default};
//# sourceMappingURL=icon.stories-0f5e6254.js.map
