const{global:y}=__STORYBOOK_MODULE_GLOBAL__,T={component:y.Components.Pre,decorators:[(p,h)=>p({args:{object:{...h.args}}})]},e={argTypes:{mutuallyExclusiveA:{control:"text",if:{arg:"mutuallyExclusiveB",truthy:!1}},mutuallyExclusiveB:{control:"text",if:{arg:"mutuallyExclusiveA",truthy:!1}}}},n={argTypes:{colorMode:{control:"boolean"},dynamicText:{if:{arg:"colorMode",truthy:!1},control:"text"},dynamicColor:{if:{arg:"colorMode"},control:"color"}}},o={argTypes:{advanced:{control:"boolean"},margin:{control:"number",if:{arg:"advanced"}},padding:{control:"number",if:{arg:"advanced"}},cornerRadius:{control:"number",if:{arg:"advanced"}}}},t={argTypes:{ifThemeExists:{control:"text",if:{global:"theme"}},ifThemeNotExists:{control:"text",if:{global:"theme",exists:!1}},ifLightTheme:{control:"text",if:{global:"theme",eq:"light"}},ifNotLightTheme:{control:"text",if:{global:"theme",neq:"light"}}}};var r,a,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  argTypes: {
    mutuallyExclusiveA: {
      control: 'text',
      if: {
        arg: 'mutuallyExclusiveB',
        truthy: false
      }
    },
    mutuallyExclusiveB: {
      control: 'text',
      if: {
        arg: 'mutuallyExclusiveA',
        truthy: false
      }
    }
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    colorMode: {
      control: 'boolean'
    },
    dynamicText: {
      if: {
        arg: 'colorMode',
        truthy: false
      },
      control: 'text'
    },
    dynamicColor: {
      if: {
        arg: 'colorMode'
      },
      control: 'color'
    }
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var g,u,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    advanced: {
      control: 'boolean'
    },
    margin: {
      control: 'number',
      if: {
        arg: 'advanced'
      }
    },
    padding: {
      control: 'number',
      if: {
        arg: 'advanced'
      }
    },
    cornerRadius: {
      control: 'number',
      if: {
        arg: 'advanced'
      }
    }
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,f,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    ifThemeExists: {
      control: 'text',
      if: {
        global: 'theme'
      }
    },
    ifThemeNotExists: {
      control: 'text',
      if: {
        global: 'theme',
        exists: false
      }
    },
    ifLightTheme: {
      control: 'text',
      if: {
        global: 'theme',
        eq: 'light'
      }
    },
    ifNotLightTheme: {
      control: 'text',
      if: {
        global: 'theme',
        neq: 'light'
      }
    }
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const b=["MutuallyExclusiveModes","ToggleControl","ToggleExpandCollapse","GlobalBased"];export{t as GlobalBased,e as MutuallyExclusiveModes,n as ToggleControl,o as ToggleExpandCollapse,b as __namedExportsOrder,T as default};
