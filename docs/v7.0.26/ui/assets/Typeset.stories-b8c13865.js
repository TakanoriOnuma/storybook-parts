import{j as t,a as q}from"./jsx-runtime-0f39435c.js";import{c as m}from"./polished.esm-ebce2d70.js";import{e as n}from"./index-5a529529.js";import{w as V}from"./index-90790cc0.js";import{g as j}from"./BlockBackgroundStyles-d227aefd.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-d475d2ea.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";const k=n.div(({theme:e})=>({marginRight:30,fontSize:`${e.typography.size.s1}px`,color:e.base==="light"?m(.4,e.color.defaultText):m(.6,e.color.defaultText)})),B=n.div({overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),H=n.div({display:"flex",flexDirection:"row",alignItems:"baseline","&:not(:last-child)":{marginBottom:"1rem"}}),N=n.div(V,({theme:e})=>({...j(e),margin:"25px 0 40px",padding:"30px 20px"})),o=({fontFamily:e,fontSizes:F,fontWeight:w,sampleText:b,...v})=>t(N,{...v,className:"docblock-typeset sb-unstyled",children:F.map(l=>q(H,{children:[t(k,{children:l}),t(B,{style:{fontFamily:e,fontSize:l,fontWeight:w,lineHeight:1.2},children:b||"Was he a beast if music could move him so?"})]},l))});try{o.displayName="Typeset",o.__docgenInfo={description:`Convenient styleguide documentation showing examples of type
with different sizes and weights and configurable sample text.`,displayName:"Typeset",props:{fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontSizes:{defaultValue:null,description:"",name:"fontSizes",required:!0,type:{name:"string[]"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number"}},sampleText:{defaultValue:null,description:"",name:"sampleText",required:!1,type:{name:"string"}}}}}catch{}const U={component:o},p=["12px","14px","16px","20px","24px","32px","40px","48px"],_=700,I="monospace",s=()=>t(o,{fontSizes:p}),i=()=>t(o,{fontSizes:p,fontWeight:_}),r=()=>t(o,{fontSizes:p,fontFamily:I}),a=()=>t(o,{fontSizes:p,fontWeight:_,sampleText:"Heading"});var c,d,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"() => <Typeset fontSizes={fontSizes} />",...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"() => <Typeset fontSizes={fontSizes} fontWeight={fontWeight} />",...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"() => <Typeset fontSizes={fontSizes} fontFamily={fontFamily} />",...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var W,T,z;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:'() => <Typeset fontSizes={fontSizes} fontWeight={fontWeight} sampleText="Heading" />',...(z=(T=a.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const X=["WithFontSizes","WithFontWeight","WithFontFamily","WithWeightText"];export{r as WithFontFamily,s as WithFontSizes,i as WithFontWeight,a as WithWeightText,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Typeset.stories-b8c13865.js.map