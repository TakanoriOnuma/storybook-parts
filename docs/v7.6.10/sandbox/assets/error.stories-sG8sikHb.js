const{global:d}=__STORYBOOK_MODULE_GLOBAL__,m={component:d.Components.Button,tags:["autodocs"],args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},r={decorators:[c=>{var o,t;if((t=(o=window==null?void 0:window.navigator)==null?void 0:o.userAgent)!=null&&t.match(/StorybookTestRunner/))return c();throw new Error("Story did something wrong")}]};var e,s,n,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  decorators: [storyFn => {
    // Don't throw in the test runner; there's no easy way to skip (yet)
    if (window?.navigator?.userAgent?.match(/StorybookTestRunner/)) return storyFn();
    throw new Error('Story did something wrong');
  }]
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"A story that throws",...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.description}}};const u=["ErrorStory"];export{r as ErrorStory,u as __namedExportsOrder,m as default};
