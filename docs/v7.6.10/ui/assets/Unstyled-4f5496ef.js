import{j as n,a as t,F as s}from"./jsx-runtime-31019b9d.js";import{U as h}from"./Unstyled-dfbd4440.js";import{u as o}from"./index-506666d7.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";function i(l){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},o(),l.components);return t(s,{children:[n(e.h1,{id:"the-unstyled-block",children:"The Unstyled Block"}),`
`,t(e.p,{children:["By default most elements in docs have a few default styles applied to ensure the docs look good. This is achieved by applying default styles to most elements like ",n(e.code,{children:"h1"}),", ",n(e.code,{children:"p"}),`, etc..
However sometimes you might want some of your content to not have these styles applied, this is where the `,n(e.code,{children:"Unstyled"})," block is useful. Wrap any content you want in the ",n(e.code,{children:"Unstyled"})," block to remove the default styles:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-md",children:`import { Unstyled } from '@storybook/blocks';

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
`,n(e.p,{children:"Yields:"}),`
`,n(e.h1,{id:"this-heading-will-be-styled",children:"This heading will be styled"}),`
`,n("h2",{children:"So will this subheading"}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:"This block quote will be styled"}),`
`]}),`
`,n(e.p,{children:"... and so will this paragraph."}),`
`,t(h,{children:[n(e.h1,{id:"this-heading-will-not-be-styled",children:"This heading will not be styled"}),n("h2",{children:"Neither will this subheading"}),t(e.blockquote,{children:[`
`,n(e.p,{children:"This block quote will not be styled"}),`
`]}),n(e.p,{children:"... neither will this paragraph, nor the following component:"})]})]})}function u(l={}){const{wrapper:e}=Object.assign({},o(),l.components);return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}export{u as default};
//# sourceMappingURL=Unstyled-4f5496ef.js.map
