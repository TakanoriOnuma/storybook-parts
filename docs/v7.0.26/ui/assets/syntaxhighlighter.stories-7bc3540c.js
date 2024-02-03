import{j as r}from"./jsx-runtime-0f39435c.js";import{T as me,d as ge,t as he}from"./index-5a529529.js";import{_ as H}from"./iframe-5727660f.js";import{r as b}from"./index-6f814c40.js";import"./index-d475d2ea.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";const ye=b.lazy(()=>H(()=>import("./syntaxhighlighter-46fcb8c6.js"),["./syntaxhighlighter-46fcb8c6.js","./jsx-runtime-0f39435c.js","./index-6f814c40.js","./_commonjsHelpers-042e6b4d.js","./index-5a529529.js","./index-d475d2ea.js","./objectWithoutPropertiesLoose-4f48578a.js","./extends-d80d5c28.js","./ActionBar-a354ea07.js","./ScrollArea-c6c0f0eb.js","./iframe-5727660f.js"],import.meta.url)),fe=b.lazy(async()=>{const[{SyntaxHighlighter:e},{formatter:ce}]=await Promise.all([H(()=>import("./syntaxhighlighter-46fcb8c6.js"),["./syntaxhighlighter-46fcb8c6.js","./jsx-runtime-0f39435c.js","./index-6f814c40.js","./_commonjsHelpers-042e6b4d.js","./index-5a529529.js","./index-d475d2ea.js","./objectWithoutPropertiesLoose-4f48578a.js","./extends-d80d5c28.js","./ActionBar-a354ea07.js","./ScrollArea-c6c0f0eb.js","./iframe-5727660f.js"],import.meta.url),H(()=>import("./formatter-c005dcf6.js"),["./formatter-c005dcf6.js","./index-5a529529.js","./index-d475d2ea.js","./index-6f814c40.js","./_commonjsHelpers-042e6b4d.js","./index-356e4a49.js"],import.meta.url)]);return{default:pe=>r(e,{...pe,formatter:ce})}}),f=e=>r(b.Suspense,{fallback:r("div",{}),children:e.format!==!1?r(fe,{...e}):r(ye,{...e})});try{f.displayName="SyntaxHighlighter",f.__docgenInfo={description:"",displayName:"SyntaxHighlighter",props:{codeTagProps:{defaultValue:null,description:"",name:"codeTagProps",required:!1,type:{name:"HTMLProps<HTMLElement>"}},customStyle:{defaultValue:null,description:"",name:"customStyle",required:!1,type:{name:"any"}},language:{defaultValue:null,description:"",name:"language",required:!1,type:{name:"string"}},lineNumberStyle:{defaultValue:null,description:"",name:"lineNumberStyle",required:!1,type:{name:"any"}},lineProps:{defaultValue:null,description:"",name:"lineProps",required:!1,type:{name:"HTMLProps<HTMLElement> | LineTagPropsFunction"}},showLineNumbers:{defaultValue:null,description:"",name:"showLineNumbers",required:!1,type:{name:"boolean"}},startingLineNumber:{defaultValue:null,description:"",name:"startingLineNumber",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},useInlineStyles:{defaultValue:null,description:"",name:"useInlineStyles",required:!1,type:{name:"boolean"}},copyable:{defaultValue:null,description:"",name:"copyable",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},padded:{defaultValue:null,description:"",name:"padded",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"SyntaxHighlighterFormatTypes"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"(type: SyntaxHighlighterFormatTypes, source: string) => string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderer:{defaultValue:null,description:"",name:"renderer",required:!1,type:{name:"SyntaxHighlighterRenderer"}}}}}catch{}const ke={component:f},a={args:{language:"js",children:`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };`}},n=a,o={args:{language:"bash",children:"npx npm-check-updates ' / storybook / ' -u && npm install"}},s={args:{language:"css",children:`.className {
              border: 1px solid hotpink;
            }`}},t={args:{language:"json",children:`{
        "number": 1,
        "string": "something",
        "object": {
          "property": "value",
        },
        array: [1,2,3],
      }`}},l={args:{language:"markdown",children:`
# a big header

some code:
      
\`\`\`js
const name = "a string";
\`\`\`
      
> crazy`}},i={args:{language:"yaml",children:`
      product:
        - sku: BL394D
          quantity: 4
          description: Basketball
          price: 450.00
`}},d={args:{language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things all={true} /></Good>;

    export { result as default };
`}},u={args:{language:"graphql",children:`query HeroNameAndFriends($episode: Episode) {
      hero(episode: $episode) {
        name
      friends {
          name
      }
    }
  }
`}},c={args:{language:"C#",children:`// A Hello World! program in C#.
    using System;
    namespace HelloWorld
    {
        class Hello
      {
          static void Main()
        {
            Console.WriteLine("Hello World!");

          // Keep the console window open in debug mode.
          Console.WriteLine("Press any key to exit.");
          Console.ReadKey();
        }
      }
    }`}},p={args:{language:"C#",children:`// A Hello World! program in C#.
    using System;
    namespace HelloWorld
    {
        class Hello
      {
          static void Main()
        {
            Console.WriteLine("Hello World!");

          // Keep the console window open in debug mode.
          Console.WriteLine("Press any key to exit.");
          Console.ReadKey();
        }
      }
    }`},render:e=>r(me,{theme:ge(he.dark),children:r(f,{...e})})},m={args:{language:"jsx",children:`import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { styled } from '@storybook/theming';

    import Heading from './heading';

    const Holder = styled.div({
        margin: 10,
      border: '1px dashed deepskyblue',
      // overflow: 'hidden',
    });

    storiesOf('Basics|Heading', module).add('types', () => (
        <div>
        <Holder>
          <Heading>DEFAULT WITH ALL CAPS</Heading>
        </Holder>
        <Holder>
          <Heading sub="With a great sub">THIS LONG DEFAULT WITH ALL CAPS & SUB</Heading>
        </Holder>
        <Holder>
          <Heading type="page">page type</Heading>
        </Holder>
        <Holder>
          <Heading type="page" sub="With a sub">
            page type
          </Heading>
        </Holder>
      </div>
    ));`}},g={args:{copyable:!0,bordered:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},h={args:{padded:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},y={args:{showLineNumbers:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}};var S,x,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    language: 'js',
    children: \`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };\`
  }
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var L,G,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:"JS",...(k=(G=n.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var C,W,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    language: 'bash',
    children: \`npx npm-check-updates ' / storybook / ' -u && npm install\`
  }
}`,...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,q,v;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    language: 'css',
    children: \`.className {
              border: 1px solid hotpink;
            }\`
  }
}`,...(v=(q=s.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var E,N,w;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    language: 'json',
    children: \`{
        "number": 1,
        "string": "something",
        "object": {
          "property": "value",
        },
        array: [1,2,3],
      }\`
  }
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,j,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    language: 'markdown',
    children: \`
# a big header

some code:
      
\\\`\\\`\\\`js
const name = "a string";
\\\`\\\`\\\`
      
> crazy\`
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var D,B,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    language: 'yaml',
    children: \`
      product:
        - sku: BL394D
          quantity: 4
          description: Basketball
          price: 450.00
\`
  }
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var O,R,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things all={true} /></Good>;

    export { result as default };
\`
  }
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var M,U,K;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    language: 'graphql',
    children: \`query HeroNameAndFriends($episode: Episode) {
      hero(episode: $episode) {
        name
      friends {
          name
      }
    }
  }
\`
  }
}`,...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var J,z,$;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    language: 'C#',
    children: \`// A Hello World! program in C#.
    using System;
    namespace HelloWorld
    {
        class Hello
      {
          static void Main()
        {
            Console.WriteLine("Hello World!");

          // Keep the console window open in debug mode.
          Console.WriteLine("Press any key to exit.");
          Console.ReadKey();
        }
      }
    }\`
  }
}`,...($=(z=c.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    language: 'C#',
    children: \`// A Hello World! program in C#.
    using System;
    namespace HelloWorld
    {
        class Hello
      {
          static void Main()
        {
            Console.WriteLine("Hello World!");

          // Keep the console window open in debug mode.
          Console.WriteLine("Press any key to exit.");
          Console.ReadKey();
        }
      }
    }\`
  },
  render: (args: ComponentProps<typeof SyntaxHighlighter>) => <ThemeProvider theme={ensure(themes.dark)}>
      <SyntaxHighlighter {...args} />
    </ThemeProvider>
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    language: 'jsx',
    children: \`import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { styled } from '@storybook/theming';

    import Heading from './heading';

    const Holder = styled.div({
        margin: 10,
      border: '1px dashed deepskyblue',
      // overflow: 'hidden',
    });

    storiesOf('Basics|Heading', module).add('types', () => (
        <div>
        <Holder>
          <Heading>DEFAULT WITH ALL CAPS</Heading>
        </Holder>
        <Holder>
          <Heading sub="With a great sub">THIS LONG DEFAULT WITH ALL CAPS & SUB</Heading>
        </Holder>
        <Holder>
          <Heading type="page">page type</Heading>
        </Holder>
        <Holder>
          <Heading type="page" sub="With a sub">
            page type
          </Heading>
        </Holder>
      </div>
    ));\`
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    copyable: true,
    bordered: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,te,le;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    padded: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,de,ue;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    showLineNumbers: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ce=["JS","Default","Bash","CSS","JSON","Markdown","Yaml","JSX","GraphQL","Unsupported","UnsupportedDark","Story","BorderedCopyable","Padded","ShowLineNumbers"];export{o as Bash,g as BorderedCopyable,s as CSS,n as Default,u as GraphQL,a as JS,t as JSON,d as JSX,l as Markdown,h as Padded,y as ShowLineNumbers,m as Story,c as Unsupported,p as UnsupportedDark,i as Yaml,Ce as __namedExportsOrder,ke as default};
//# sourceMappingURL=syntaxhighlighter.stories-7bc3540c.js.map
