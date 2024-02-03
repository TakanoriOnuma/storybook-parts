import{j as S}from"./jsx-runtime-0f39435c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const s=({a:f="a",b})=>S("div",{children:"Example story"});try{s.displayName="ControlsParameters",s.__docgenInfo={description:"",displayName:"ControlsParameters",props:{a:{defaultValue:{value:"a"},description:"",name:"a",required:!1,type:{name:"string"}},b:{defaultValue:null,description:"",name:"b",required:!0,type:{name:"string"}}}}}catch{}const P={title:"examples/Stories for the Controls Block",component:s,args:{b:"b"},argTypes:{extraMetaArgType:{type:{name:"string"},name:"Extra Meta",description:"An extra argtype added at the meta level",table:{defaultValue:{summary:"'a default value'"}}}},parameters:{docs:{description:{component:"Reference stories to be used by the Controls stories"}}}},e={argTypes:{extraStoryArgType:{type:{name:"string"},name:"Extra Story",description:"An extra argtype added at the story level",table:{defaultValue:{summary:"'a default value'"}}}}},r={...e,parameters:{docs:{controls:{include:["a"]}}}},a={...e,parameters:{docs:{controls:{exclude:["a"]}}}},t={...e,parameters:{docs:{controls:{sort:"alpha"}}}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        include: ['a']
      }
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        exclude: ['a']
      }
    }
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var y,g,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...NoParameters,
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const E=["NoParameters","Include","Exclude","Sort"];export{a as Exclude,r as Include,e as NoParameters,t as Sort,E as __namedExportsOrder,P as default};
//# sourceMappingURL=ControlsParameters.stories-df57fd7a.js.map
