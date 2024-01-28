import{j as r,a as l}from"./jsx-runtime-31019b9d.js";import{n as u,i as m}from"./index-9e46a6e4.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";const I=e=>typeof e=="number"?e:Number(e),C=u.div(({theme:e,col:o,row:a=1})=>o?{display:"inline-block",verticalAlign:"inherit","& > *":{marginLeft:o*e.layoutMargin,verticalAlign:"inherit"},[`& > *:first-child${m}`]:{marginLeft:0}}:{"& > *":{marginTop:a*e.layoutMargin},[`& > *:first-child${m}`]:{marginTop:0}},({theme:e,outer:o,col:a,row:p})=>{switch(!0){case!!(o&&a):return{marginLeft:o*e.layoutMargin,marginRight:o*e.layoutMargin};case!!(o&&p):return{marginTop:o*e.layoutMargin,marginBottom:o*e.layoutMargin};default:return{}}}),c=({col:e,row:o,outer:a,children:p,...B})=>{const _=I(typeof a=="number"||!a?a:e||o);return r(C,{col:e,row:o,outer:_,...B,children:p})};try{c.displayName="Spaced",c.__docgenInfo={description:"",displayName:"Spaced",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:"number"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"number"}},outer:{defaultValue:null,description:"",name:"outer",required:!1,type:{name:"number | boolean"}}}}}catch{}const n=u.div(({color:e})=>({background:e||"hotpink",padding:20})),i=u.span(({color:e})=>({background:e||"hotpink",display:"inline-block",padding:20})),x={component:c},d=e=>l("div",{children:[r(n,{color:"silver"}),l(c,{...e,children:[r(n,{}),r(n,{}),r(n,{})]}),r(n,{color:"silver"})]}),s={render:e=>l("div",{children:[r(n,{color:"silver"}),l(c,{...e,children:[r(n,{}),r(n,{}),r(n,{})]}),r(n,{color:"silver"})]})},t={render:e=>l("div",{children:[r(i,{color:"silver"}),l(c,{...e,children:[r(i,{}),r(i,{}),r(i,{})]}),r(i,{color:"silver"})]}),argTypes:{col:{defaultValue:1}}};var g,h,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ComponentProps<typeof Spaced>) => <div>
    <PlaceholderBlock color="silver" />
    <Spaced {...args}>
      <PlaceholderBlock />
      <PlaceholderBlock />
      <PlaceholderBlock />
    </Spaced>
    <PlaceholderBlock color="silver" />
  </div>`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Spaced>) => <div>
      <PlaceholderBlock color="silver" />
      <Spaced {...args}>
        <PlaceholderBlock />
        <PlaceholderBlock />
        <PlaceholderBlock />
      </Spaced>
      <PlaceholderBlock color="silver" />
    </div>
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var S,k,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const N=["Default","Column","Row"];export{s as Column,d as Default,t as Row,N as __namedExportsOrder,x as default};
//# sourceMappingURL=Spaced.stories-14fc6dc5.js.map
