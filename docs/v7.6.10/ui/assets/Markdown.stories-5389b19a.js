import{d as k}from"./index-356e4a49.js";import{M as g}from"./Markdown-70546d9b.js";import"./jsx-runtime-31019b9d.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./index.modern-47b9f3ba.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9e46a6e4.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./DocsContext-57fe6f9a.js";import"./Source-9e9bdbea.js";import"./EmptyBlock-f69a59b0.js";import"./polished.esm-b305131d.js";const u=`# This is an \`.md\` file

it has been imported using \`import content from './Markdown-content.md?raw'\`

Notice the \`?raw\` at the end above, it is necessary to work.

A full example:

\`\`\`md
import { Markdown } from '@storybook/blocks';
import content from './Markdown-content.md?raw';

<Markdown>{content}</Markdown>
\`\`\`
`,A={component:g,parameters:{docsStyles:!0}},o={args:{children:k`
    # My Example Markdown

    The group looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.
    
    ![An image](https://storybook.js.org/images/placeholders/350x150.png)
    
    He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a skyscraper canyon.
    
    Paragraph with an \`inline code\` block.

    \`\`\`tsx
    // TypeScript React code block
    export const MyStory = () => {
      return <Button>Click me</Button>;
    };
    \`\`\`
    
    \`\`\`
    code block with with no language
    const a = fn({
      b: 2,
    });
    \`\`\`

    <h3>Native h3 element</h3>

    # [Link](https://storybook.js.org/) in heading
    ## [Link](https://storybook.js.org/) in heading
    ### [Link](https://storybook.js.org/) in heading
    #### [Link](https://storybook.js.org/) in heading
    ##### [Link](https://storybook.js.org/) in heading
    ###### [Link](https://storybook.js.org/) in heading
    
    He stared at the clinic, [Molly](https://storybook.js.org/) took him to the *[Tank War](https://storybook.js.org/)*, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a **[skyscraper](https://storybook.js.org/)** canyon.
    
    { brackets, valid MD but invalid MDX - works here }
    
    <Looks like a JSX tag/>
    <!-- above is valid MD but invalid in markdown-to-jsx, so it will not be rendered -->

    \`<Looks like a JSX tag />\`

    The above is only visible because it is wrapped in backticks
    `}},e={name:"Imported .md file",args:{children:u}},t={args:{children:"That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the amplified breathing of the room where Case waited. The semiotics of the bright void beyond the chain link. The tug Marcus Garvey, a steel drum nine meters long and two in diameter, creaked and shuddered as Maelcum punched for a California gambling cartel, then as a paid killer in the dark, curled in his capsule in some coffin hotel, his hands clawed into the nearest door and watched the other passengers as he rode. After the postoperative check at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. Still it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the missionaries, the train reached Case’s station. Now this quiet courtyard, Sunday afternoon, this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home. Case felt the edge of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows."}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: dedent\`
    # My Example Markdown

    The group looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.
    
    ![An image](https://storybook.js.org/images/placeholders/350x150.png)
    
    He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a skyscraper canyon.
    
    Paragraph with an \\\`inline code\\\` block.

    \\\`\\\`\\\`tsx
    // TypeScript React code block
    export const MyStory = () => {
      return <Button>Click me</Button>;
    };
    \\\`\\\`\\\`
    
    \\\`\\\`\\\`
    code block with with no language
    const a = fn({
      b: 2,
    });
    \\\`\\\`\\\`

    <h3>Native h3 element</h3>

    # [Link](https://storybook.js.org/) in heading
    ## [Link](https://storybook.js.org/) in heading
    ### [Link](https://storybook.js.org/) in heading
    #### [Link](https://storybook.js.org/) in heading
    ##### [Link](https://storybook.js.org/) in heading
    ###### [Link](https://storybook.js.org/) in heading
    
    He stared at the clinic, [Molly](https://storybook.js.org/) took him to the *[Tank War](https://storybook.js.org/)*, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a **[skyscraper](https://storybook.js.org/)** canyon.
    
    { brackets, valid MD but invalid MDX - works here }
    
    <Looks like a JSX tag/>
    <!-- above is valid MD but invalid in markdown-to-jsx, so it will not be rendered -->

    \\\`<Looks like a JSX tag />\\\`

    The above is only visible because it is wrapped in backticks
    \`
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,r,h,d,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Imported .md file',
  args: {
    children: mdContent
  }
}`,...(h=(r=e.parameters)==null?void 0:r.docs)==null?void 0:h.source},description:{story:`The Markdown component won't know the difference between getting a raw string
and something imported from a .md file.
So this story doesn't actually test the component, but rather the import
at the top of the CSF file`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: \`That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the amplified breathing of the room where Case waited. The semiotics of the bright void beyond the chain link. The tug Marcus Garvey, a steel drum nine meters long and two in diameter, creaked and shuddered as Maelcum punched for a California gambling cartel, then as a paid killer in the dark, curled in his capsule in some coffin hotel, his hands clawed into the nearest door and watched the other passengers as he rode. After the postoperative check at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. Still it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the missionaries, the train reached Case’s station. Now this quiet courtyard, Sunday afternoon, this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home. Case felt the edge of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows.\`
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const E=["Markdown","ImportedMDFile","Text"];export{e as ImportedMDFile,o as Markdown,t as Text,E as __namedExportsOrder,A as default};
//# sourceMappingURL=Markdown.stories-5389b19a.js.map
