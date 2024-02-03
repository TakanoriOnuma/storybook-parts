import{j as e,a as I}from"./jsx-runtime-0f39435c.js";import{e as _}from"./index-5a529529.js";import{a as S}from"./chunk-CSVBMRUK-183fa11f.js";import{F as b,S as B,B as A,T as $,I as j}from"./input-7eea6be0.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./polished.esm-ebce2d70.js";const s=_(b)({display:"flex"}),J={title:"Form"},p={disabled:{defaultValue:!1,control:{type:"boolean"}},size:{defaultValue:"auto",control:{type:"radio",options:["100%","auto","flex"]}},valid:{control:{type:"radio",options:[null,"valid","warn","error"]}},align:{control:{type:"radio",options:[null,"start","center","end"]}}},o={render:a=>e(b,{...a,children:I(B,{value:"val2",onChange:S("onChange"),children:[e("option",{value:"val1",children:"Value 1"}),e("option",{value:"val2",children:"Value 2"}),e("option",{value:"val3",children:"Value 3"})]})},"key"),argTypes:{label:{defaultValue:"label",control:{type:"text"}}}},n={render:a=>e(s,{children:I(B,{onChange:S("onChange"),...a,children:[e("option",{value:"val1",children:"Value 1"}),e("option",{value:"val2",children:"Value 2"}),e("option",{value:"val3",children:"Value 3"})]})}),argTypes:{...p,value:{defaultValue:"val2",control:{type:"radio",options:["val1","val2","val3"]}}}},r={render:a=>e(s,{children:e(A,{...a,children:"Form Button"})}),argTypes:p},t={render:a=>e(s,{children:e($,{...a})}),argTypes:{...p,height:{control:{type:"number"}}}},l={render:a=>e(s,{children:e(j,{...a})}),argTypes:{...p,value:{control:{type:"text"}},placeholder:{control:{type:"text"},defaultValue:"Placeholder"}}};var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,m,v;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var f,C,F;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const K=["Field","Select","Button","Textarea","Input"];export{r as Button,o as Field,l as Input,n as Select,t as Textarea,K as __namedExportsOrder,J as default};
//# sourceMappingURL=form.stories-19b00e0d.js.map
