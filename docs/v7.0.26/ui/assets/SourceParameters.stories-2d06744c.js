import{b as K}from"./index-74303de9.js";import{d as u}from"./index-356e4a49.js";import{E as M}from"./EmptyExample-504b79c9.js";import"./mapValues-511dc51c.js";import"./_baseAssignValue-531dc4d6.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";const g=`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
`,ae={title:"examples/Stories for the Source Block",component:M},s={args:{something:"else"}},o={parameters:{docs:{source:{type:K.CODE}}}},t={args:{something:"else"},parameters:{docs:{source:{transform:(r,e)=>u`// this comment has been added via parameters.docs.source.transform!
        // this is the story id: ${e.id}
        // these are the current args: ${JSON.stringify(e.args)}
        ${r}`}}}},a={args:{something:"else"},parameters:{docs:{source:{transformSource:(r,e)=>u`// this comment has been added via parameters.docs.source.transformSource!
        // this is the story id: ${e.id}
        // these are the current args: ${JSON.stringify(e.args)}
        ${r}`}}}},n={args:{something:"else"},parameters:{docs:{transformSource:(r,e)=>u`// this comment has been added via parameters.docs.transformSource!
      // this is the story id: ${e.id}
      // these are the current args: ${JSON.stringify(e.args)}
      ${r}`}}},c={args:{something:"else"},parameters:{jsx:{transformSource:(r,e)=>u`// this comment has been added via parameters.jsx.transformSource!
      // this is the story id: ${e.id}
      // these are the current args: ${JSON.stringify(e.args)}
      ${r}`}}},m={parameters:{docs:{source:{code:g}}}},d={parameters:{docs:{source:{code:g,format:!0}}}},i={parameters:{docs:{source:{code:g,format:!0,language:"graphql"}}}},p={parameters:{docs:{source:{code:g,dark:!0}}}};var h,S,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    something: 'else'
  }
  // This is here so we can tell if we are looking at the real vs emitted source
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,l,$;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: SourceType.CODE
      }
    }
  }
}`,...($=(l=o.parameters)==null?void 0:l.docs)==null?void 0:$.source}}};var C,x,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var N,O,J;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    something: 'else'
  },
  parameters: {
    docs: {
      source: {
        transformSource: (src: string, storyContext: StoryContext) => dedent\`// this comment has been added via parameters.docs.source.transformSource!
        // this is the story id: \${storyContext.id}
        // these are the current args: \${JSON.stringify(storyContext.args)}
        \${src}\`
      }
    }
  }
}`,...(J=(O=a.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var b,v,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    something: 'else'
  },
  parameters: {
    docs: {
      transformSource: (src: string, storyContext: StoryContext) => dedent\`// this comment has been added via parameters.docs.transformSource!
      // this is the story id: \${storyContext.id}
      // these are the current args: \${JSON.stringify(storyContext.args)}
      \${src}\`
    }
  }
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var k,D,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    something: 'else'
  },
  parameters: {
    jsx: {
      transformSource: (src: string, storyContext: StoryContext) => dedent\`// this comment has been added via parameters.jsx.transformSource!
      // this is the story id: \${storyContext.id}
      // these are the current args: \${JSON.stringify(storyContext.args)}
      \${src}\`
    }
  }
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var q,F,w;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code
      }
    }
  }
}`,...(w=(F=m.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var L,P,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        format: true
      }
    }
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var A,B,H;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        format: true,
        language: 'graphql'
      }
    }
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var z,G,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code,
        dark: true
      }
    }
  }
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const ne=["NoParameters","TypeCode","Transform","SourceTransformSource","DocsTransformSource","JsxTransformSource","Code","CodeFormat","CodeLanguage","CodeDark"];export{m as Code,p as CodeDark,d as CodeFormat,i as CodeLanguage,n as DocsTransformSource,c as JsxTransformSource,s as NoParameters,a as SourceTransformSource,t as Transform,o as TypeCode,ne as __namedExportsOrder,ae as default};
//# sourceMappingURL=SourceParameters.stories-2d06744c.js.map
