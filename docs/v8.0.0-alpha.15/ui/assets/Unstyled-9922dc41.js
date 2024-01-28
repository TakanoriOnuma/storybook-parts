import{j as e}from"./jsx-runtime-d079401a.js";import{U as i}from"./Unstyled-840cf2f1.js";import{u as t}from"./index-1992b6bc.js";import"./index-f1f2c4b1.js";function s(l){const n={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"the-unstyled-block",children:"The Unstyled Block"}),`
`,e.jsxs(n.p,{children:["By default most elements in docs have a few default styles applied to ensure the docs look good. This is achieved by applying default styles to most elements like ",e.jsx(n.code,{children:"h1"}),", ",e.jsx(n.code,{children:"p"}),`, etc..
However sometimes you might want some of your content to not have these styles applied, this is where the `,e.jsx(n.code,{children:"Unstyled"})," block is useful. Wrap any content you want in the ",e.jsx(n.code,{children:"Unstyled"})," block to remove the default styles:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-md",children:`import { Unstyled } from '@storybook/blocks';

# This heading will be styled

<h2>So will this subheading</h2>

> This block quote will be styled

... and so will this paragraph.

<Unstyled>
  # This heading will not be styled

  <h2>Neither will this subheading</h2>

  > This block quote will not be styled

  ... neither will this paragraph, nor the following component:
  <MyCustomComponent />
</Unstyled>
`})}),`
`,e.jsx(n.p,{children:"Yields:"}),`
`,e.jsx(n.h1,{id:"this-heading-will-be-styled",children:"This heading will be styled"}),`
`,e.jsx("h2",{children:"So will this subheading"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This block quote will be styled"}),`
`]}),`
`,e.jsx(n.p,{children:"... and so will this paragraph."}),`
`,e.jsxs(i,{children:[e.jsx(n.h1,{id:"this-heading-will-not-be-styled",children:"This heading will not be styled"}),e.jsx("h2",{children:"Neither will this subheading"}),e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This block quote will not be styled"}),`
`]}),e.jsx(n.p,{children:"... neither will this paragraph, nor the following component:"})]})]})}function c(l={}){const{wrapper:n}={...t(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{c as default};
//# sourceMappingURL=Unstyled-9922dc41.js.map
