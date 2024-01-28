const{global:L}=__STORYBOOK_MODULE_GLOBAL__,E={component:L.Components.Pre,decorators:[(h,_)=>h({args:{object:{..._.args}}})],args:{helloWorld:1,helloPlanet:1,byeWorld:1}},e={parameters:{controls:{include:["helloWorld"]}}},r={parameters:{controls:{include:/hello*/}}},o={parameters:{controls:{exclude:["helloPlanet","helloWorld"]}}},s={parameters:{controls:{exclude:/hello*/}}};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['helloWorld']
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,t,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: /hello*/
    }
  }
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['helloPlanet', 'helloWorld']
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,x,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: /hello*/
    }
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const O=["IncludeList","IncludeRegex","ExcludeList","ExcludeRegex"];export{o as ExcludeList,s as ExcludeRegex,e as IncludeList,r as IncludeRegex,O as __namedExportsOrder,E as default};
