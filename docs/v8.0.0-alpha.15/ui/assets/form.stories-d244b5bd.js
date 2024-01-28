import{R as e}from"./index-f1f2c4b1.js";import{n as E}from"./index-4b2a7d13.js";import{a as f}from"./chunk-AT66UTFE-23ee157f.js";import{F as T,S as C,T as F,I as S}from"./input-979bc3bc.js";import"./v4-4a60fe23.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";const r=E(T)({display:"flex"}),P={title:"Form"},p={disabled:{defaultValue:!1,control:{type:"boolean"}},size:{defaultValue:"auto",control:{type:"radio",options:["100%","auto","flex"]}},valid:{control:{type:"radio",options:[null,"valid","warn","error"]}},align:{control:{type:"radio",options:[null,"start","center","end"]}}},a={render:n=>e.createElement(T,{key:"key",...n},e.createElement(C,{value:"val2",onChange:f("onChange")},e.createElement("option",{value:"val1"},"Value 1"),e.createElement("option",{value:"val2"},"Value 2"),e.createElement("option",{value:"val3"},"Value 3"))),argTypes:{label:{defaultValue:"label",control:{type:"text"}}}},t={render:n=>e.createElement(r,null,e.createElement(C,{onChange:f("onChange"),...n},e.createElement("option",{value:"val1"},"Value 1"),e.createElement("option",{value:"val2"},"Value 2"),e.createElement("option",{value:"val3"},"Value 3"))),argTypes:{...p,value:{defaultValue:"val2",control:{type:"radio",options:["val1","val2","val3"]}}}},o={render:n=>e.createElement(r,null,e.createElement(F,{...n})),argTypes:{...p,height:{control:{type:"number"}}}},l={render:n=>e.createElement(r,null,e.createElement(S,{...n})),argTypes:{...p,value:{control:{type:"text"}},placeholder:{control:{type:"text"},defaultValue:"Placeholder"}}};var s,u,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => <FieldComponent key="key" {...args}>
      <InputComponents.Select value="val2" onChange={action('onChange')}>
        <option value="val1">Value 1</option>
        <option value="val2">Value 2</option>
        <option value="val3">Value 3</option>
      </InputComponents.Select>
    </FieldComponent>,
  argTypes: {
    label: {
      defaultValue: 'label',
      control: {
        type: 'text'
      }
    }
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => <Flexed>
      <InputComponents.Select onChange={action('onChange')} {...args}>
        <option value="val1">Value 1</option>
        <option value="val2">Value 2</option>
        <option value="val3">Value 3</option>
      </InputComponents.Select>
    </Flexed>,
  argTypes: {
    ...sharedArgTypes,
    value: {
      defaultValue: 'val2',
      control: {
        type: 'radio',
        options: ['val1', 'val2', 'val3']
      }
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var v,y,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => <Flexed>
      <InputComponents.Textarea {...args} />
    </Flexed>,
  argTypes: {
    ...sharedArgTypes,
    height: {
      control: {
        type: 'number'
      }
    }
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,h,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => <Flexed>
      <InputComponents.Input {...args} />
    </Flexed>,
  argTypes: {
    ...sharedArgTypes,
    value: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      },
      defaultValue: 'Placeholder'
    }
  }
}`,...(V=(h=l.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const R=["Field","Select","Textarea","Input"];export{a as Field,l as Input,t as Select,o as Textarea,R as __namedExportsOrder,P as default};
//# sourceMappingURL=form.stories-d244b5bd.js.map
