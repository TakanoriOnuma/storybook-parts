import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as u}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const i=()=>r.jsx("p",{children:"Story"}),S={component:i,tags:["autodocs"],decorators:[e=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Component Decorator"}),r.jsx(e,{})]})]},o={decorators:[e=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Local Decorator"}),r.jsx(e,{})]})]},n=u.createContext(!1),t={decorators:[e=>r.jsx(n.Provider,{value:!0,children:r.jsx(e,{})})],render:function(l,m){if(!u.useContext(n))throw new Error("TestContext not set, decorator did not run!");return r.jsx("p",{children:"Story"})}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [Story => <>
        <p>Local Decorator</p>
        <Story />
      </>]
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,x,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // parameters: { docs: { source: { excludeDecorators: true } } },
  decorators: [Story => <TestContext.Provider value>
        <Story />
      </TestContext.Provider>],
  render: function Render(args, context) {
    const value = useContext(TestContext);
    if (!value) throw new Error('TestContext not set, decorator did not run!');
    return <p>Story</p>;
  }
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const f=["All","Context"];export{o as All,t as Context,f as __namedExportsOrder,S as default};
