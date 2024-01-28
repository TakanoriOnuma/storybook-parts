import{R as r}from"./index-f1f2c4b1.js";import{n as m,i as p}from"./index-4b2a7d13.js";const B=e=>typeof e=="number"?e:Number(e),R=m.div(({theme:e,col:n,row:a=1})=>n?{display:"inline-block",verticalAlign:"inherit","& > *":{marginLeft:n*e.layoutMargin,verticalAlign:"inherit"},[`& > *:first-child${p}`]:{marginLeft:0}}:{"& > *":{marginTop:a*e.layoutMargin},[`& > *:first-child${p}`]:{marginTop:0}},({theme:e,outer:n,col:a,row:d})=>{switch(!0){case!!(n&&a):return{marginLeft:n*e.layoutMargin,marginRight:n*e.layoutMargin};case!!(n&&d):return{marginTop:n*e.layoutMargin,marginBottom:n*e.layoutMargin};default:return{}}}),t=({col:e,row:n,outer:a,children:d,...S})=>{const b=B(typeof a=="number"||!a?a:e||n);return r.createElement(R,{col:e,row:n,outer:b,...S},d)};t.__docgenInfo={description:"",methods:[],displayName:"Spaced",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},col:{required:!1,tsType:{name:"number"},description:""},row:{required:!1,tsType:{name:"number"},description:""},outer:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:""}}};const l=m.div(({color:e})=>({background:e||"hotpink",padding:20})),o=m.span(({color:e})=>({background:e||"hotpink",display:"inline-block",padding:20})),_={component:t},c=e=>r.createElement("div",null,r.createElement(l,{color:"silver"}),r.createElement(t,{...e},r.createElement(l,null),r.createElement(l,null),r.createElement(l,null)),r.createElement(l,{color:"silver"})),i={render:e=>r.createElement("div",null,r.createElement(l,{color:"silver"}),r.createElement(t,{...e},r.createElement(l,null),r.createElement(l,null),r.createElement(l,null)),r.createElement(l,{color:"silver"}))},s={render:e=>r.createElement("div",null,r.createElement(o,{color:"silver"}),r.createElement(t,{...e},r.createElement(o,null),r.createElement(o,null),r.createElement(o,null)),r.createElement(o,{color:"silver"})),argTypes:{col:{defaultValue:1}}};c.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,g,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`(args: ComponentProps<typeof Spaced>) => <div>
    <PlaceholderBlock color="silver" />
    <Spaced {...args}>
      <PlaceholderBlock />
      <PlaceholderBlock />
      <PlaceholderBlock />
    </Spaced>
    <PlaceholderBlock color="silver" />
  </div>`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Spaced>) => <div>
      <PlaceholderBlock color="silver" />
      <Spaced {...args}>
        <PlaceholderBlock />
        <PlaceholderBlock />
        <PlaceholderBlock />
      </Spaced>
      <PlaceholderBlock color="silver" />
    </div>
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var y,P,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Spaced>) => <div>
      <PlaceholderInline color="silver" />
      <Spaced {...args}>
        <PlaceholderInline />
        <PlaceholderInline />
        <PlaceholderInline />
      </Spaced>
      <PlaceholderInline color="silver" />
    </div>,
  argTypes: {
    col: {
      defaultValue: 1
    }
  }
}`,...(k=(P=s.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const w=["Default","Column","Row"];export{i as Column,c as Default,s as Row,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=Spaced.stories-e2f0c45e.js.map
