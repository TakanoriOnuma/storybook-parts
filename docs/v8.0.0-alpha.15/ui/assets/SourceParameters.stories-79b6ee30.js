import{S as b}from"./index-3d029e08.js";import{d as w}from"./index-356e4a49.js";import{E as J}from"./EmptyExample-83de1af4.js";import"./mapValues-3cd3a2b8.js";import"./index-f1f2c4b1.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";const c=`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
`,I={title:"examples/Stories for the Source Block",component:J},e={args:{something:"else"}},r={parameters:{docs:{source:{type:b.CODE}}}},s={args:{something:"else"},parameters:{docs:{source:{transform:(F,m)=>w`// this comment has been added via parameters.docs.source.transform!
        // this is the story id: ${m.id}
        // these are the current args: ${JSON.stringify(m.args)}
        ${F}`}}}},o={parameters:{docs:{source:{code:c}}}},a={parameters:{docs:{source:{code:c,format:!0}}}},t={parameters:{docs:{source:{code:c,format:!0,language:"graphql"}}}},n={parameters:{docs:{source:{code:c,dark:!0}}}};var d,p,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    something: 'else'
  }
  // This is here so we can tell if we are looking at the real vs emitted source
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,g,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: SourceType.CODE
      }
    }
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    something: 'else'
  },
  parameters: {
    docs: {
      source: {
        transform: (src: string, storyContext: StoryContext) => dedent\`// this comment has been added via parameters.docs.source.transform!
        // this is the story id: \${storyContext.id}
        // these are the current args: \${JSON.stringify(storyContext.args)}
        \${src}\`
      }
    }
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,S,$;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code
      }
    }
  }
}`,...($=(S=o.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var x,E,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        format: true
      }
    }
  }
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var k,N,O;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        format: true,
        language: 'graphql'
      }
    }
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,q,v;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        dark: true
      }
    }
  }
}`,...(v=(q=n.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const K=["NoParameters","TypeCode","Transform","Code","CodeFormat","CodeLanguage","CodeDark"];export{o as Code,n as CodeDark,a as CodeFormat,t as CodeLanguage,e as NoParameters,s as Transform,r as TypeCode,K as __namedExportsOrder,I as default};
//# sourceMappingURL=SourceParameters.stories-79b6ee30.js.map
