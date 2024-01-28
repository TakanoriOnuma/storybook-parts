import{_ as L}from"./iframe-9b8f7ddb.js";import{j as r}from"./jsx-runtime-31019b9d.js";import{T as Se,f as be,t as xe}from"./index-9e46a6e4.js";import{r as C}from"./index-9f32f44c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";let n=[],a=null;const Le=C.lazy(async()=>{const{SyntaxHighlighter:e}=await L(()=>import("./syntaxhighlighter-245fc674.js"),["./syntaxhighlighter-245fc674.js","./jsx-runtime-31019b9d.js","./index-9f32f44c.js","./_commonjsHelpers-de833af9.js","./index-9e46a6e4.js","./ActionBar-4d2888cb.js","./ScrollArea-81e858e3.js","./index-9c2d1831.js"],import.meta.url);return n.length>0&&(n.forEach(s=>{e.registerLanguage(...s)}),n=[]),a===null&&(a=e),{default:s=>r(e,{...s})}}),Te=C.lazy(async()=>{const[{SyntaxHighlighter:e},{formatter:s}]=await Promise.all([L(()=>import("./syntaxhighlighter-245fc674.js"),["./syntaxhighlighter-245fc674.js","./jsx-runtime-31019b9d.js","./index-9f32f44c.js","./_commonjsHelpers-de833af9.js","./index-9e46a6e4.js","./ActionBar-4d2888cb.js","./ScrollArea-81e858e3.js","./index-9c2d1831.js"],import.meta.url),L(()=>import("./formatter-678faf0c.js"),["./formatter-678faf0c.js","./index-9e46a6e4.js","./index-9f32f44c.js","./_commonjsHelpers-de833af9.js","./index-356e4a49.js"],import.meta.url)]);return n.length>0&&(n.forEach(T=>{e.registerLanguage(...T)}),n=[]),a===null&&(a=e),{default:T=>r(e,{...T,formatter:s})}}),o=e=>r(C.Suspense,{fallback:r("div",{}),children:e.format!==!1?r(Te,{...e}):r(Le,{...e})});o.registerLanguage=(...e)=>{if(a!==null){a.registerLanguage(...e);return}n.push(e)};try{o.displayName="SyntaxHighlighter",o.__docgenInfo={description:"",displayName:"SyntaxHighlighter",props:{codeTagProps:{defaultValue:null,description:"",name:"codeTagProps",required:!1,type:{name:"HTMLProps<HTMLElement>"}},customStyle:{defaultValue:null,description:"",name:"customStyle",required:!1,type:{name:"any"}},language:{defaultValue:null,description:"",name:"language",required:!1,type:{name:"string"}},lineNumberStyle:{defaultValue:null,description:"",name:"lineNumberStyle",required:!1,type:{name:"any"}},lineProps:{defaultValue:null,description:"",name:"lineProps",required:!1,type:{name:"HTMLProps<HTMLElement> | LineTagPropsFunction"}},showLineNumbers:{defaultValue:null,description:"",name:"showLineNumbers",required:!1,type:{name:"boolean"}},startingLineNumber:{defaultValue:null,description:"",name:"startingLineNumber",required:!1,type:{name:"number"}},wrapLongLines:{defaultValue:null,description:"",name:"wrapLongLines",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},useInlineStyles:{defaultValue:null,description:"",name:"useInlineStyles",required:!1,type:{name:"boolean"}},copyable:{defaultValue:null,description:"",name:"copyable",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},padded:{defaultValue:null,description:"",name:"padded",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"SyntaxHighlighterFormatTypes"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((type: SyntaxHighlighterFormatTypes, source: string) => string)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderer:{defaultValue:null,description:"",name:"renderer",required:!1,type:{name:"SyntaxHighlighterRenderer"}}}}}catch{}const Pe={component:o},t={args:{language:"js",children:`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };`}},l=t,i={args:{language:"bash",children:"npx npm-check-updates ' / storybook / ' -u && npm install"}},d={args:{language:"css",children:`.className {
              border: 1px solid hotpink;
            }`}},u={args:{language:"json",children:`{
        "number": 1,
        "string": "something",
        "object": {
          "property": "value",
        },
        array: [1,2,3],
      }`}},c={args:{language:"markdown",children:`
# a big header

some code:
      
\`\`\`js
const name = "a string";
\`\`\`
      
> crazy`}},g={args:{language:"yaml",children:`
      product:
        - sku: BL394D
          quantity: 4
          description: Basketball
          price: 450.00
`}},m={args:{language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things all={true} /></Good>;

    export { result as default };
`}},p={args:{language:"graphql",children:`query HeroNameAndFriends($episode: Episode) {
      hero(episode: $episode) {
        name
      friends {
          name
      }
    }
  }
`}},h={args:{language:"scss",children:`// Custom language syntax registered
div.parent {
  div.child {
    color: $red;
  }
}`},loaders:[async()=>{const e=(await L(()=>import("./scss-5d890dee.js"),["./scss-5d890dee.js","./_commonjsHelpers-de833af9.js"],import.meta.url)).default;o.registerLanguage("scss",e)}]},y={args:{language:"C#",children:`// A Hello World! program in C#.
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
    }`}},f={args:{language:"C#",children:`// A Hello World! program in C#.
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
    }`},render:e=>r(Se,{theme:be(xe.dark),children:r(o,{...e})})},H={args:{language:"jsx",children:`import React from 'react';
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
    ));`}},S={args:{copyable:!0,bordered:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},b={args:{padded:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},x={args:{showLineNumbers:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}};var _,G,k;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    language: 'js',
    children: \`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };\`
  }
}`,...(k=(G=t.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var W,v,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:"JS",...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var w,E,q;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    language: 'bash',
    children: \`npx npm-check-updates ' / storybook / ' -u && npm install\`
  }
}`,...(q=(E=i.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var A,N,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    language: 'css',
    children: \`.className {
              border: 1px solid hotpink;
            }\`
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var j,D,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,R,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,M,U;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var K,J,z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things all={true} /></Good>;

    export { result as default };
\`
  }
}`,...(z=(J=m.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var $,Q,X;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    language: 'scss',
    children: \`// Custom language syntax registered
div.parent {
  div.child {
    color: $red;
  }
}\`
  },
  loaders: [async () => {
    const scss = (await import('react-syntax-highlighter/dist/esm/languages/prism/scss')).default;
    SyntaxHighlighter.registerLanguage('scss', scss);
  }]
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,ae;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,te;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ie,de;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,ce,ge;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    copyable: true,
    bordered: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(ge=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var me,pe,he;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    padded: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(he=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,fe,He;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    showLineNumbers: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(He=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:He.source}}};const we=["JS","Default","Bash","CSS","JSON","Markdown","Yaml","JSX","GraphQL","CustomSyntax","Unsupported","UnsupportedDark","Story","BorderedCopyable","Padded","ShowLineNumbers"];export{i as Bash,S as BorderedCopyable,d as CSS,h as CustomSyntax,l as Default,p as GraphQL,t as JS,u as JSON,m as JSX,c as Markdown,b as Padded,x as ShowLineNumbers,H as Story,y as Unsupported,f as UnsupportedDark,g as Yaml,we as __namedExportsOrder,Pe as default};
//# sourceMappingURL=syntaxhighlighter.stories-ec71fba6.js.map
