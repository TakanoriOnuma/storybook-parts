import{_ as L}from"./iframe-14332c4c.js";import{T as xe,f as He,t as be}from"./index-4b2a7d13.js";import{r as C,R as r}from"./index-f1f2c4b1.js";import"../sb-preview/runtime.js";let n=[],o=null;const Le=C.lazy(async()=>{const{SyntaxHighlighter:e}=await L(()=>import("./syntaxhighlighter-511ff7f8.js"),["./syntaxhighlighter-511ff7f8.js","./index-f1f2c4b1.js","./index-4b2a7d13.js","./objectWithoutPropertiesLoose-4f48578a.js","./extends-98964cd2.js","./ActionBar-817df243.js","./ScrollArea-08f3e8ff.js","./index-c74c9f7f.js","./index-5f16f6cc.js"],import.meta.url);return n.length>0&&(n.forEach(a=>{e.registerLanguage(...a)}),n=[]),o===null&&(o=e),{default:a=>r.createElement(e,{...a})}}),ke=C.lazy(async()=>{const[{SyntaxHighlighter:e},{formatter:a}]=await Promise.all([L(()=>import("./syntaxhighlighter-511ff7f8.js"),["./syntaxhighlighter-511ff7f8.js","./index-f1f2c4b1.js","./index-4b2a7d13.js","./objectWithoutPropertiesLoose-4f48578a.js","./extends-98964cd2.js","./ActionBar-817df243.js","./ScrollArea-08f3e8ff.js","./index-c74c9f7f.js","./index-5f16f6cc.js"],import.meta.url),L(()=>import("./formatter-ff26e54d.js"),["./formatter-ff26e54d.js","./index-4b2a7d13.js","./index-f1f2c4b1.js","./index-356e4a49.js"],import.meta.url)]);return n.length>0&&(n.forEach(k=>{e.registerLanguage(...k)}),n=[]),o===null&&(o=e),{default:k=>r.createElement(e,{...k,formatter:a})}}),t=e=>r.createElement(C.Suspense,{fallback:r.createElement("div",null)},e.format!==!1?r.createElement(ke,{...e}):r.createElement(Le,{...e}));t.registerLanguage=(...e)=>{if(o!==null){o.registerLanguage(...e);return}n.push(e)};t.__docgenInfo={description:"",methods:[{name:"registerLanguage",docblock:null,modifiers:["static"],params:[{name:"...args",optional:!1,type:{name:"Parameters",elements:[{name:"ReactSyntaxHighlighter.registerLanguage"}],raw:"Parameters<typeof ReactSyntaxHighlighter.registerLanguage>",alias:"Parameters"}}],returns:null}],displayName:"SyntaxHighlighter"};const _e={component:t},s={args:{language:"js",children:`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };`}},l=s,i={args:{language:"bash",children:"npx npm-check-updates ' / storybook / ' -u && npm install"}},c={args:{language:"css",children:`.className {
              border: 1px solid hotpink;
            }`}},d={args:{language:"json",children:`{
        "number": 1,
        "string": "something",
        "object": {
          "property": "value",
        },
        array: [1,2,3],
      }`}},g={args:{language:"markdown",children:`
# a big header

some code:
      
\`\`\`js
const name = "a string";
\`\`\`
      
> crazy`}},m={args:{language:"yaml",children:`
      product:
        - sku: BL394D
          quantity: 4
          description: Basketball
          price: 450.00
`}},u={args:{language:"jsx",children:`import { Good, Things } from 'life';

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
}`},loaders:[async()=>{const e=(await L(()=>import("./scss-1f7951a9.js"),["./scss-1f7951a9.js","./index-f1f2c4b1.js"],import.meta.url)).default;t.registerLanguage("scss",e)}]},y={args:{language:"C#",children:`// A Hello World! program in C#.
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
    }`},render:e=>r.createElement(xe,{theme:He(be.dark)},r.createElement(t,{...e}))},S={args:{language:"jsx",children:`import type { Meta, StoryObj } from '@storybook/react';

    import { Header } from './Header';
    
    const meta = {
      title: 'Example/Header',
      component: Header,
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
      parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
      },
    } satisfies Meta<typeof Header>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;
    
    export const LoggedIn: Story = {
      args: {
        user: {
          name: 'Jane Doe',
        },
      },
    };
    
    export const LoggedOut: Story = {};
    `}},x={args:{copyable:!0,bordered:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},H={args:{padded:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}},b={args:{showLineNumbers:!0,language:"jsx",children:`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };`}};var E,G,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    language: 'js',
    children: \`import React, { createElement } from 'react';
import { Good, Things } from 'life';

const result = () => createElement(Good, [createElement(Things, [], { all: true }), []);

console.log(result);
export { result as default };\`
  }
}`,...(T=(G=s.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var _,w,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"JS",...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var v,W,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    language: 'bash',
    children: \`npx npm-check-updates ' / storybook / ' -u && npm install\`
  }
}`,...(P=(W=i.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var R,O,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    language: 'css',
    children: \`.className {
              border: 1px solid hotpink;
            }\`
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var D,M,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var J,B,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(B=g.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var I,q,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var $,U,V;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things all={true} /></Good>;

    export { result as default };
\`
  }
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,Q,X;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ie,ce;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    language: 'jsx',
    children: \`import type { Meta, StoryObj } from '@storybook/react';

    import { Header } from './Header';
    
    const meta = {
      title: 'Example/Header',
      component: Header,
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
      parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
      },
    } satisfies Meta<typeof Header>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;
    
    export const LoggedIn: Story = {
      args: {
        user: {
          name: 'Jane Doe',
        },
      },
    };
    
    export const LoggedOut: Story = {};
    \`
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ge,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    copyable: true,
    bordered: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(me=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ue,pe,he;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    padded: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(he=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,fe,Se;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    showLineNumbers: true,
    language: 'jsx',
    children: \`import { Good, Things } from 'life';

    const result = () => <Good><Things /></Good>;

    export { result as default };\`
  }
}`,...(Se=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};const we=["JS","Default","Bash","CSS","JSON","Markdown","Yaml","JSX","GraphQL","CustomSyntax","Unsupported","UnsupportedDark","Story","BorderedCopyable","Padded","ShowLineNumbers"];export{i as Bash,x as BorderedCopyable,c as CSS,h as CustomSyntax,l as Default,p as GraphQL,s as JS,d as JSON,u as JSX,g as Markdown,H as Padded,b as ShowLineNumbers,S as Story,y as Unsupported,f as UnsupportedDark,m as Yaml,we as __namedExportsOrder,_e as default};
//# sourceMappingURL=syntaxhighlighter.stories-e8a8c34d.js.map
