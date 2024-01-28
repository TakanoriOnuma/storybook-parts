import{R as C}from"./index-f1f2c4b1.js";import{n as _}from"./index-4b2a7d13.js";import{c as e}from"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";const $=_.div(({theme:r})=>({display:"inline-block",fontSize:11,lineHeight:"12px",alignSelf:"center",padding:"4px 12px",borderRadius:"3em",fontWeight:r.typography.weight.bold}),{svg:{height:12,width:12,marginRight:4,marginTop:-2,path:{fill:"currentColor"}}},({theme:r,status:W})=>{switch(W){case"critical":return{color:r.color.critical,background:r.background.critical};case"negative":return{color:r.color.negativeText,background:r.background.negative,boxShadow:r.base==="light"?`inset 0 0 0 1px ${e(.9,r.color.negativeText)}`:"none"};case"warning":return{color:r.color.warningText,background:r.background.warning,boxShadow:r.base==="light"?`inset 0 0 0 1px ${e(.9,r.color.warningText)}`:"none"};case"neutral":return{color:r.color.dark,background:r.color.mediumlight,boxShadow:r.base==="light"?`inset 0 0 0 1px ${e(.9,r.color.dark)}`:"none"};case"positive":return{color:r.color.positiveText,background:r.background.positive,boxShadow:r.base==="light"?`inset 0 0 0 1px ${e(.9,r.color.positiveText)}`:"none"};default:return{}}}),y=({...r})=>C.createElement($,{...r});y.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{status:{required:!0,tsType:{name:"union",raw:"'positive' | 'negative' | 'neutral' | 'warning' | 'critical'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const E={component:y},a={args:{children:"Default"}},n={args:{status:"positive",children:"Positive"}},t={args:{status:"negative",children:"Negative"}},i={args:{status:"neutral",children:"Neutral"}},o={args:{status:"warning",children:"Warning"}},s={args:{status:"critical",children:"Critical"}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'positive',
    children: 'Positive'
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,v,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'negative',
    children: 'Negative'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,w,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'neutral',
    children: 'Neutral'
  }
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,S,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    children: 'Warning'
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var N,T,R;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    children: 'Critical'
  }
}`,...(R=(T=s.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const H=["Default","Positive","Negative","Neutral","Warning","Critical"];export{s as Critical,a as Default,t as Negative,i as Neutral,n as Positive,o as Warning,H as __namedExportsOrder,E as default};
//# sourceMappingURL=Badge.stories-0d61a079.js.map
