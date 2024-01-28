import{A as h}from"./ArgTypesParameters-2c584f28.js";import"./index-f1f2c4b1.js";const P={title:"examples/Stories for the ArgTypes Block",component:h,args:{b:"b"},argTypes:{extraMetaArgType:{type:{name:"string"},name:"Extra Meta",description:"An extra argtype added at the meta level",table:{defaultValue:{summary:"'a default value'"}}}},parameters:{docs:{description:{component:"Reference stories to be used by the ArgTypes stories"}}}},e={argTypes:{extraStoryArgType:{type:{name:"string"},name:"Extra Story",description:"An extra argtype added at the story level",table:{defaultValue:{summary:"'a default value'"}}}}},a={...e,parameters:{docs:{argTypes:{include:["a"]}}}},r={...e,parameters:{docs:{argTypes:{exclude:["a"]}}}},t={...e,parameters:{docs:{argTypes:{sort:"alpha"}}}},s={...e,argTypes:{c:{description:"a description",table:{category:"the first category"}},d:{table:{category:"the first category",subcategory:"a subcategory"}},e:{table:{subcategory:"a subcategory without a category"}},f:{table:{category:"the second category"}}}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        include: ['a']
      }
    }
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,m,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['a']
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,i,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        sort: 'alpha'
      }
    }
  }
}`,...(b=(i=t.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var f,x,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...NoParameters,
  argTypes: ({
    c: {
      description: 'a description',
      table: {
        category: 'the first category'
      }
    },
    d: {
      table: {
        category: 'the first category',
        subcategory: 'a subcategory'
      }
    },
    e: {
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
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const v=["NoParameters","Include","Exclude","Sort","Categories"];export{s as Categories,r as Exclude,a as Include,e as NoParameters,t as Sort,v as __namedExportsOrder,P as default};
//# sourceMappingURL=ArgTypesParameters.stories-de1eb9b0.js.map
