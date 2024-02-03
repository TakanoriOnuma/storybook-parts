import{j as f}from"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const s=({a:T="a",b:S})=>f("div",{children:"Example story"});try{s.displayName="ArgTypesParameters",s.__docgenInfo={description:"",displayName:"ArgTypesParameters",props:{a:{defaultValue:{value:"a"},description:"",name:"a",required:!1,type:{name:"string"}},b:{defaultValue:null,description:"",name:"b",required:!0,type:{name:"string"}}}}}catch{}const h={title:"examples/Stories for the ArgTypes Block",component:s,args:{b:"b"},argTypes:{extraMetaArgType:{type:{name:"string"},name:"Extra Meta",description:"An extra argtype added at the meta level",table:{defaultValue:{summary:"'a default value'"}}}},parameters:{docs:{description:{component:"Reference stories to be used by the ArgTypes stories"}}}},e={argTypes:{extraStoryArgType:{type:{name:"string"},name:"Extra Story",description:"An extra argtype added at the story level",table:{defaultValue:{summary:"'a default value'"}}}}},r={...e,parameters:{docs:{argTypes:{include:["a"]}}}},a={...e,parameters:{docs:{argTypes:{exclude:["a"]}}}},t={...e,parameters:{docs:{argTypes:{sort:"alpha"}}}};var o,n,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        include: ['a']
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['a']
      }
    }
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var y,g,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      argTypes: {
        sort: 'alpha'
      }
    }
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const v=["NoParameters","Include","Exclude","Sort"];export{a as Exclude,r as Include,e as NoParameters,t as Sort,v as __namedExportsOrder,h as default};
//# sourceMappingURL=ArgTypesParameters.stories-c1f10197.js.map
