import{S as O,a as L}from"./Source-d9d734f3.js";import"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./EmptyBlock-6324a57c.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";const B={component:O},r={args:{isLoading:!0}},o={args:{code:`
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,language:"jsx",format:!1}},e={args:{code:`
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

.waitingForConnection {
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(.5, 0, 1, 1);
  -webkit-animation-duration: 1.7s;
}
`,language:"css",format:!1,dark:!0}},a={args:{code:`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
`,language:"graphql",format:!0}},n={args:{error:L.NO_STORY,format:!1}},t={args:{error:L.SOURCE_UNAVAILABLE,format:!1}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    code: \`
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
\`,
    language: 'jsx',
    format: false
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    code: \`
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

.waitingForConnection {
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(.5, 0, 1, 1);
  -webkit-animation-duration: 1.7s;
}
\`,
    language: 'css',
    format: false,
    dark: true
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var f,S,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    code: \`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
\`,
    language: 'graphql',
    format: true
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,y,h;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: SourceError.NO_STORY,
    format: false
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,C,E;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    error: SourceError.SOURCE_UNAVAILABLE,
    format: false
  }
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const D=["Loading","JSX","CSSWithDarkMode","GraphQLWithFormatting","NoStory","SourceUnavailable"];export{e as CSSWithDarkMode,a as GraphQLWithFormatting,o as JSX,r as Loading,n as NoStory,t as SourceUnavailable,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Source.stories-e1fe1814.js.map
