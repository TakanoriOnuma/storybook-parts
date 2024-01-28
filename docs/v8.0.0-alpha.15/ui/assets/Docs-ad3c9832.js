import{j as t}from"./jsx-runtime-d079401a.js";import{M as r,S as n,C as e,a as u}from"./index-d8049939.js";import{B as c,a as d,S as l,V as h,W as p,I as m,b as x,A as j,c as B,D as g}from"./Button.stories-73eb6edc.js";import{u as a}from"./index-1992b6bc.js";import"./index-f1f2c4b1.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-4b2a7d13.js";import"./index-a443495b.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./uniq-d9955a1e.js";import"./_baseIteratee-c4babb20.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./isSymbol-ef7afaa8.js";import"./_basePickBy-c1531931.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./cloneDeep-aaf9573b.js";import"./index.modern-a28060bf.js";import"./lodash-302d6d3a.js";import"./index-3d029e08.js";import"./mapValues-3cd3a2b8.js";import"./index-9cc128d5.js";import"./index-356e4a49.js";import"./Button-0f9be3d0.js";function i(s){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...a(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:c}),`
`,t.jsx(o.h1,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:"Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation."}),`
`,t.jsx(o.h2,{id:"import",children:"Import"}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
import { Button } from '@storybook/components

// If you would like to use icons, please import them from the icons library
import { FaceHappyIcon, HeartIcon } from '@storybook/icons'
`}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
// Using the onClick event handler
<Button onClick={}>Hello world!</Button>

// Using the asChild prop to render a custom child
<Button asChild>
  <a href="https://storybook.js.org">Hello world!</a>
</Button>
`}),`
`,t.jsx(e,{of:d}),`
`,t.jsx(u,{}),`
`,t.jsx(o.h3,{id:"button-sizes",children:"Button sizes"}),`
`,t.jsxs(o.p,{children:["Use the ",t.jsx(o.code,{children:"size"})," prop to change the size of the button. You can set the value to ",t.jsx(o.code,{children:"small"})," or ",t.jsx(o.code,{children:"medium"}),"."]}),`
`,t.jsx(e,{of:l}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
`}),`
`,t.jsx(o.h3,{id:"button-variants",children:"Button variants"}),`
`,t.jsxs(o.p,{children:["Use the ",t.jsx(o.code,{children:"variant"})," prop to change the visual style of the button. You can set the value to ",t.jsx(o.code,{children:"outline"}),", ",t.jsx(o.code,{children:"solid"})," or ",t.jsx(o.code,{children:"ghost"}),"."]}),`
`,t.jsx(e,{of:h}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button variant="outline">Outline</Button>
<Button variant="solid">Solid</Button>
<Button variant="Ghost">Ghost</Button>
`}),`
`,t.jsx(o.h3,{id:"button-with-icon",children:"Button with icon"}),`
`,t.jsxs(o.p,{children:["You can add an icon to the button by adding the icon on the left of the text. Please use any icon from the icon library ",t.jsx(o.code,{children:"@storybook/icons"}),"."]}),`
`,t.jsx(e,{of:p}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button>
  <FaceHappyIcon />Button
</Button>
`}),`
`,t.jsx(o.h3,{id:"icon-only-buttons",children:"Icon only buttons"}),`
`,t.jsxs(o.p,{children:["You can also use the button as an icon only button by removing the text. to make sure the button is square, please set the padding prop to ",t.jsx(o.code,{children:"small"})]}),`
`,t.jsx(e,{of:m}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button padding="small">
  <FaceHappyIcon />
</Button>
`}),`
`,t.jsx(o.h3,{id:"button-with-custom-wrapper",children:"Button with custom wrapper"}),`
`,t.jsxs(o.p,{children:["If you want to use a custom wrapper to set the button as an external link or to use your custom router, you can use the ",t.jsx(o.code,{children:"asChild"})," prop. This will render the button as a child of the wrapper."]}),`
`,t.jsx(e,{of:x}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button asChild>
  <a href="https://storybook.js.org">Hello world!</a>
</Button>
<Button asChild>
  <Link href='/home'>Hello world!</Link>
</Button>
`}),`
`,t.jsx(o.h3,{id:"button-with-animations",children:"Button with animations"}),`
`,t.jsxs(o.p,{children:["You can use the ",t.jsx(o.code,{children:"animate"})," prop to add animations to the button. You can set the value to ",t.jsx(o.code,{children:"glow"}),", ",t.jsx(o.code,{children:"jiggle"})," or ",t.jsx(o.code,{children:"rotate360"}),"."]}),`
`,t.jsx(e,{of:j}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button animation="glow">
  <FaceHappyIcon />Button
</Button>
<Button animation="jiggle">
  <FaceHappyIcon />Button
</Button>
<Button animation="rotate360">
  <FaceHappyIcon />Button
</Button>
`}),`
`,t.jsx(o.h3,{id:"active-button",children:"Active button"}),`
`,t.jsxs(o.p,{children:["You can use the ",t.jsx(o.code,{children:"active"})," prop to set the button as active. This will change the background color of the button."]}),`
`,t.jsx(e,{of:B}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button active>
  <FaceHappyIcon />Button
</Button>
 `}),`
`,t.jsx(o.h3,{id:"disabled-button",children:"Disabled button"}),`
`,t.jsxs(o.p,{children:["You can use the ",t.jsx(o.code,{children:"disabled"})," prop to set the button as disabled."]}),`
`,t.jsx(e,{of:g}),`
`,t.jsx(n,{language:"tsx",dark:!0,code:`
<Button disabled>
  <FaceHappyIcon />Button
</Button>
 `})]})}function Q(s={}){const{wrapper:o}={...a(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(i,{...s})}):i(s)}export{Q as default};
//# sourceMappingURL=Docs-ad3c9832.js.map
