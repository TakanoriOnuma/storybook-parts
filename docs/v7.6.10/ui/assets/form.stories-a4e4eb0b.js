import{j as e,a as S}from"./jsx-runtime-31019b9d.js";import{n as A}from"./index-9e46a6e4.js";import{a as I}from"./chunk-C5H4AMN5-7fdb7c46.js";import{F as b,S as B,B as $,T as j,I as k}from"./input-7d178b7c.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./polished.esm-b305131d.js";const s=A(b)({display:"flex"}),H={title:"Form"},p={disabled:{defaultValue:!1,control:{type:"boolean"}},size:{defaultValue:"auto",control:{type:"radio",options:["100%","auto","flex"]}},valid:{control:{type:"radio",options:[null,"valid","warn","error"]}},align:{control:{type:"radio",options:[null,"start","center","end"]}}},a={render:n=>e(b,{...n,children:S(B,{value:"val2",onChange:I("onChange"),children:[e("option",{value:"val1",children:"Value 1"}),e("option",{value:"val2",children:"Value 2"}),e("option",{value:"val3",children:"Value 3"})]})},"key"),argTypes:{label:{defaultValue:"label",control:{type:"text"}}}},o={render:n=>e(s,{children:S(B,{onChange:I("onChange"),...n,children:[e("option",{value:"val1",children:"Value 1"}),e("option",{value:"val2",children:"Value 2"}),e("option",{value:"val3",children:"Value 3"})]})}),argTypes:{...p,value:{defaultValue:"val2",control:{type:"radio",options:["val1","val2","val3"]}}}},r={render:n=>e(s,{children:e($,{...n,children:"Form Button"})}),argTypes:p},t={render:n=>e(s,{children:e(j,{...n})}),argTypes:{...p,height:{control:{type:"number"}}}},l={render:n=>e(s,{children:e(k,{...n})}),argTypes:{...p,value:{control:{type:"text"}},placeholder:{control:{type:"text"},defaultValue:"Placeholder"}}};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,m,v;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => <Flexed>
      <InputComponents.Button {...args}>Form Button</InputComponents.Button>
    </Flexed>,
  argTypes: sharedArgTypes
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,T,V;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var C,F,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(F=l.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const J=["Field","Select","Button","Textarea","Input"];export{r as Button,a as Field,l as Input,o as Select,t as Textarea,J as __namedExportsOrder,H as default};
//# sourceMappingURL=form.stories-a4e4eb0b.js.map
