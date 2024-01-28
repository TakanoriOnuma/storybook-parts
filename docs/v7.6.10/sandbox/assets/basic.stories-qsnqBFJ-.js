const{global:D}=__STORYBOOK_MODULE_GLOBAL__,A={component:D.Components.Button,tags:["autodocs"],args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},e={args:{label:"Basic"}},s={args:{label:"Disabled in DocsPage"},parameters:{docs:{disable:!0}}},a={args:{label:"Another"},parameters:{docs:{source:{type:"code"}}},play:async()=>{await new Promise(_=>_("Play function"))}};var r,o,t,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Basic'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source},description:{story:"A basic button",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.description}}};var i,l,p,d,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Disabled in DocsPage'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Won't show up in DocsPage",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var u,b,g,y,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Another'
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  play: async () => {
    await new Promise(resolve => resolve('Play function'));
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"Another button, just to show multiple stories",...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};const B=["Basic","Disabled","Another"];export{a as Another,e as Basic,s as Disabled,B as __namedExportsOrder,A as default};
