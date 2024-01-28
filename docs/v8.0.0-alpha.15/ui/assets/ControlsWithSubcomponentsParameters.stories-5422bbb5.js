import{C as o,S as s,a as n}from"./ControlsParameters-9fc63d41.js";import"./index-f1f2c4b1.js";const l={title:"examples/Stories for the Controls Block with Subcomponents",component:o,subcomponents:{SubcomponentA:s,SubcomponentB:n},args:{b:"b"},argTypes:{extraMetaArgType:{type:{name:"string"},name:"Extra Meta",description:"An extra argtype added at the meta level",table:{defaultValue:{summary:"'a default value'"}}}},parameters:{docs:{description:{component:"Reference stories to be used by the Controls stories"}}}},e={argTypes:{extraStoryArgType:{type:{name:"string"},name:"Extra Story",description:"An extra argtype added at the story level",table:{defaultValue:{summary:"'a default value'"}}}}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const d=["NoParameters"];export{e as NoParameters,d as __namedExportsOrder,l as default};
//# sourceMappingURL=ControlsWithSubcomponentsParameters.stories-5422bbb5.js.map
