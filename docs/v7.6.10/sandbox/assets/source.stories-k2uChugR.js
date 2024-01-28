import{d as b}from"./index-PPLHz8o0.js";const{global:h}=__STORYBOOK_MODULE_GLOBAL__,$={component:h.Components.Button,tags:["autodocs"],args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},r={},e={parameters:{docs:{source:{code:null}}}},s={parameters:{docs:{source:{type:"code"}}}},o={parameters:{docs:{source:{code:"custom source"}}}},a={parameters:{docs:{source:{transform(x,y){return b`// We transformed this!
          // The current args are: ${JSON.stringify(y.args)}
          const example = (${x});
          `}}}}};var t,n,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,d,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: 'custom source'
      }
    }
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,_,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        transform(src: string, storyContext: StoryContext) {
          return dedent\`// We transformed this!
          // The current args are: \${JSON.stringify(storyContext.args)}
          const example = (\${src});
          \`;
        }
      }
    }
  }
}`,...(O=(_=a.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const A=["Auto","Disabled","Code","Custom","Transform"];export{r as Auto,s as Code,o as Custom,e as Disabled,a as Transform,A as __namedExportsOrder,$ as default};
