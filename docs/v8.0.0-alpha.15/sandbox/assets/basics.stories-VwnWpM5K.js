const{global:p}=__STORYBOOK_MODULE_GLOBAL__,d={component:p.Components.Pre,decorators:[(c,i)=>c({args:{object:{...i.args}}})],argTypes:{boolean:{control:"boolean"},color:{control:"color"},colorWithPresets:{control:{type:"color",presetColors:["#ff0","pink",{color:"#00f",title:"mystery"}]}},colorStartOpen:{control:{type:"color",startOpen:!0}},date:{control:"date"},file:{control:{type:"file",accept:".png"},name:"Image Urls"},number:{control:"number"},object:{control:"object"},radio:{control:{type:"radio",options:["a","b","c"]}},radioWithLabels:{control:{type:"radio",options:["a","b","c"],labels:["alpha","beta","gamma"]}},inlineRadio:{control:{type:"inline-radio",options:["a","b","c"]}},select:{control:"select",options:["a","b","c","double  space"]},multiSelect:{control:{type:"multi-select"},options:["a","b","c","double  space"]},range:{control:"range"},rangeCustom:{control:{type:"range",min:0,max:1e3,step:100}},text:{control:"text"}}},e={args:{}},b={text:"Hello world",boolean:!0,array:["One","Two","Three"],object:{a:1,b:2,c:3}},o={args:{boolean:!0,color:"#ff0",colorWithPresets:"pink",colorStartOpen:"orange",date:new Date(2010,1,1),file:["https://storybook.js.org/images/placeholders/350x150.png"],number:10,object:b,radio:"a",radioWithLabels:"b",inlineRadio:"c",select:"b",multiSelect:["a"],range:15,rangeCustom:10,text:"hello"}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    boolean: true,
    color: '#ff0',
    colorWithPresets: 'pink',
    colorStartOpen: 'orange',
    date: new Date(2010, 1, 1),
    file: ['https://storybook.js.org/images/placeholders/350x150.png'],
    number: 10,
    object: DEFAULT_NESTED_OBJECT,
    radio: 'a',
    radioWithLabels: 'b',
    inlineRadio: 'c',
    select: 'b',
    multiSelect: ['a'],
    range: 15,
    rangeCustom: 10,
    text: 'hello'
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const m=["Undefined","Defined"];export{o as Defined,e as Undefined,m as __namedExportsOrder,d as default};
