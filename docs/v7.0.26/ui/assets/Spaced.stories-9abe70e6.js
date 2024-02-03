import{j as r,a as l}from"./jsx-runtime-0f39435c.js";import{e as m,i as u}from"./index-5a529529.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";const I=e=>typeof e=="number"?e:Number(e),C=m.div(({theme:e,col:o,row:a=1})=>o?{display:"inline-block",verticalAlign:"inherit","& > *":{marginLeft:o*e.layoutMargin,verticalAlign:"inherit"},[`& > *:first-child${u}`]:{marginLeft:0}}:{"& > *":{marginTop:a*e.layoutMargin},[`& > *:first-child${u}`]:{marginTop:0}},({theme:e,outer:o,col:a,row:p})=>{switch(!0){case!!(o&&a):return{marginLeft:o*e.layoutMargin,marginRight:o*e.layoutMargin};case!!(o&&p):return{marginTop:o*e.layoutMargin,marginBottom:o*e.layoutMargin};default:return{}}}),c=({col:e,row:o,outer:a,children:p,...b})=>{const B=I(typeof a=="number"||!a?a:e||o);return r(C,{col:e,row:o,outer:B,...b,children:p})};try{c.displayName="Spaced",c.__docgenInfo={description:"",displayName:"Spaced",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:"number"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"number"}},outer:{defaultValue:null,description:"",name:"outer",required:!1,type:{name:"number | boolean"}}}}}catch{}const n=m.div(({color:e})=>({background:e||"hotpink",padding:20})),i=m.span(({color:e})=>({background:e||"hotpink",display:"inline-block",padding:20})),N={component:c},s=e=>l("div",{children:[r(n,{color:"silver"}),l(c,{...e,children:[r(n,{}),r(n,{}),r(n,{})]}),r(n,{color:"silver"})]}),d={render:e=>l("div",{children:[r(n,{color:"silver"}),l(c,{...e,children:[r(n,{}),r(n,{}),r(n,{})]}),r(n,{color:"silver"})]})},t={render:e=>l("div",{children:[r(i,{color:"silver"}),l(c,{...e,children:[r(i,{}),r(i,{}),r(i,{})]}),r(i,{color:"silver"})]}),argTypes:{col:{defaultValue:1}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ComponentProps<typeof Spaced>) => <div>
    <PlaceholderBlock color="silver" />
    <Spaced {...args}>
      <PlaceholderBlock />
      <PlaceholderBlock />
      <PlaceholderBlock />
    </Spaced>
    <PlaceholderBlock color="silver" />
  </div>`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Spaced>) => <div>
      <PlaceholderBlock color="silver" />
      <Spaced {...args}>
        <PlaceholderBlock />
        <PlaceholderBlock />
        <PlaceholderBlock />
      </Spaced>
      <PlaceholderBlock color="silver" />
    </div>
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var k,S,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(S=t.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const j=["Default","Column","Row"];export{d as Column,s as Default,t as Row,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Spaced.stories-9abe70e6.js.map
