const{global:d}=__STORYBOOK_MODULE_GLOBAL__,p={component:d.Components.Pre,decorators:[(l,m)=>l({args:{object:{...m.args}}})]},e={parameters:{controls:{matchers:{date:/whateverIwant/}},docs:{source:{state:"open"}}},args:{whateverIwant:"10/10/2020"}},r={parameters:{controls:{matchers:{date:null,color:null}}},args:{purchaseDate:"10/10/2020",backgroundColor:"#BADA55"}};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    controls: {
      matchers: {
        date: /whateverIwant/
      }
    },
    docs: {
      source: {
        state: 'open'
      }
    }
  },
  args: {
    whateverIwant: '10/10/2020'
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,o,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      matchers: {
        date: null,
        color: null
      }
    }
  },
  args: {
    purchaseDate: '10/10/2020',
    backgroundColor: '#BADA55'
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const u=["CustomMatchers","DisabledMatchers"];export{e as CustomMatchers,r as DisabledMatchers,u as __namedExportsOrder,p as default};
