import{C as S}from"./ControlsParameters-9fc63d41.js";import"./index-f1f2c4b1.js";const v={title:"examples/Stories for the Controls Block",component:S,args:{b:"b"},argTypes:{extraMetaArgType:{type:{name:"string"},name:"Extra Meta",description:"An extra argtype added at the meta level",table:{defaultValue:{summary:"'a default value'"}}}},parameters:{docs:{description:{component:"Reference stories to be used by the Controls stories"}}}},e={argTypes:{extraStoryArgType:{type:{name:"string"},name:"Extra Story",description:"An extra argtype added at the story level",table:{defaultValue:{summary:"'a default value'"}}}}},r={...e,parameters:{docs:{controls:{include:["a"]}}}},t={...e,parameters:{docs:{controls:{exclude:["a"]}}}},a={...e,parameters:{docs:{controls:{sort:"alpha"}}}},o={...e,argTypes:{c:{description:"a description",control:{type:"text"},table:{category:"the first category"}},d:{control:{type:"number"},table:{category:"the first category",subcategory:"a subcategory"}},e:{control:{type:"color"},table:{subcategory:"a subcategory without a category"}},f:{table:{category:"the second category"}}}};var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    // @ts-expect-error Story type is trying to force us to use real props as args
    extraStoryArgType: {
      type: {
        name: 'string'
      },
      name: 'Extra Story',
      description: 'An extra argtype added at the story level',
      table: {
        defaultValue: {
          summary: "'a default value'"
        }
      }
    }
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        include: ['a']
      }
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,y,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        exclude: ['a']
      }
    }
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var i,g,b;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,f,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...NoParameters,
  argTypes: ({
    c: {
      description: 'a description',
      control: {
        type: 'text'
      },
      table: {
        category: 'the first category'
      }
    },
    d: {
      control: {
        type: 'number'
      },
      table: {
        category: 'the first category',
        subcategory: 'a subcategory'
      }
    },
    e: {
      control: {
        type: 'color'
      },
      table: {
        subcategory: 'a subcategory without a category'
      }
    },
    f: {
      table: {
        category: 'the second category'
      }
    }
  } as any)
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const A=["NoParameters","Include","Exclude","Sort","Categories"];export{o as Categories,t as Exclude,r as Include,e as NoParameters,a as Sort,A as __namedExportsOrder,v as default};
//# sourceMappingURL=ControlsParameters.stories-115b1915.js.map
