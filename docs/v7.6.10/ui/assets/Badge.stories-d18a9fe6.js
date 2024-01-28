import{j as B}from"./jsx-runtime-31019b9d.js";import{n as C}from"./index-9e46a6e4.js";import{c as a}from"./polished.esm-b305131d.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";const $=C.div(({theme:r})=>({display:"inline-block",fontSize:11,lineHeight:"12px",alignSelf:"center",padding:"4px 12px",borderRadius:"3em",fontWeight:r.typography.weight.bold}),{svg:{height:12,width:12,marginRight:4,marginTop:-2,path:{fill:"currentColor"}}},({theme:r,status:W})=>{switch(W){case"critical":return{color:r.color.critical,background:r.background.critical};case"negative":return{color:r.color.negativeText,background:r.background.negative,boxShadow:r.base==="light"?`inset 0 0 0 1px ${a(.9,r.color.negativeText)}`:"none"};case"warning":return{color:r.color.warningText,background:r.background.warning,boxShadow:r.base==="light"?`inset 0 0 0 1px ${a(.9,r.color.warningText)}`:"none"};case"neutral":return{color:r.color.dark,background:r.color.mediumlight,boxShadow:r.base==="light"?`inset 0 0 0 1px ${a(.9,r.color.dark)}`:"none"};case"positive":return{color:r.color.positiveText,background:r.background.positive,boxShadow:r.base==="light"?`inset 0 0 0 1px ${a(.9,r.color.positiveText)}`:"none"};default:return{}}}),c=({...r})=>B($,{...r});try{c.displayName="Badge",c.__docgenInfo={description:"",displayName:"Badge",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'},{value:'"warning"'},{value:'"critical"'}]}}}}}catch{}const q={component:c},e={args:{children:"Default"}},n={args:{status:"positive",children:"Positive"}},o={args:{status:"negative",children:"Negative"}},s={args:{status:"neutral",children:"Neutral"}},t={args:{status:"warning",children:"Warning"}},i={args:{status:"critical",children:"Critical"}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,p,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'positive',
    children: 'Positive'
  }
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var m,b,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'negative',
    children: 'Negative'
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,h,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'neutral',
    children: 'Neutral'
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var S,k,_;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    children: 'Warning'
  }
}`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var N,y,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    children: 'Critical'
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const E=["Default","Positive","Negative","Neutral","Warning","Critical"];export{i as Critical,e as Default,o as Negative,s as Neutral,n as Positive,t as Warning,E as __namedExportsOrder,q as default};
//# sourceMappingURL=Badge.stories-d18a9fe6.js.map
