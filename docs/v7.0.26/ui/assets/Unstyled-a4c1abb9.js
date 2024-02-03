import{j as e,a as l,F as h}from"./jsx-runtime-0f39435c.js";import{U as d}from"./Unstyled-f586b0a6.js";import{u as s}from"./index-9329054d.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";function y(t={}){const{wrapper:i}=Object.assign({},s(),t.components);return i?e(i,Object.assign({},t,{children:e(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},s(),t.components);return l(h,{children:[e(n.h1,{id:"the-unstyled-block",children:"The Unstyled Block"}),`
`,l(n.p,{children:["By default most elements in docs have a few default styles applied to ensure the docs look good. This is achieved by applying default styles to most elements like ",e(n.code,{children:"h1"}),", ",e(n.code,{children:"p"}),`, etc..
However sometimes you might want some of your content to not have these styles applied, this is where the `,e(n.code,{children:"Unstyled"})," block is useful. Wrap any content you want in the ",e(n.code,{children:"Unstyled"})," block to remove the default styles:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-md",children:`import { Unstyled } from '@storybook/blocks';

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
`,e(n.p,{children:"Yields:"}),`
`,e(n.h1,{id:"this-heading-will-be-styled",children:"This heading will be styled"}),`
`,e("h2",{children:"So will this subheading"}),`
`,l(n.blockquote,{children:[`
`,e(n.p,{children:"This block quote will be styled"}),`
`]}),`
`,e(n.p,{children:"... and so will this paragraph."}),`
`,l(d,{children:[e(n.h1,{id:"this-heading-will-not-be-styled",children:"This heading will not be styled"}),e("h2",{children:"Neither will this subheading"}),l(n.blockquote,{children:[`
`,e(n.p,{children:"This block quote will not be styled"}),`
`]}),e(n.p,{children:"... neither will this paragraph, nor the following component:"})]})]})}}export{y as default};
//# sourceMappingURL=Unstyled-a4c1abb9.js.map
