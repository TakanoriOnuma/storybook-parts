import{r as s,R as n}from"./index-f1f2c4b1.js";import{n as d}from"./index-4b2a7d13.js";import{B as y,F as f}from"./index-a443495b.js";import{g as T,a as v}from"./helpers-a9e07cde.js";const q=d.label({display:"flex"}),C=d.div(({isMaxed:t})=>({marginLeft:"0.75rem",paddingTop:"0.35rem",color:t?"red":void 0})),x=({name:t,value:e,onChange:i,onFocus:m,onBlur:p,maxLength:r})=>{const l=g=>{i(g.target.value)},[u,a]=s.useState(!1),c=s.useCallback(()=>{i(""),a(!0)},[a]);if(e===void 0)return n.createElement(y,{variant:"outline",size:"medium",id:T(t),onClick:c},"Set string");const o=typeof e=="string";return n.createElement(q,null,n.createElement(f.Textarea,{id:v(t),maxLength:r,onChange:l,size:"flex",placeholder:"Edit string...",autoFocus:u,valid:o?null:"error",name:t,value:o?e:"",onFocus:m,onBlur:p}),r&&n.createElement(C,{isMaxed:(e==null?void 0:e.length)===r},(e==null?void 0:e.length)??0," / ",r))};x.__docgenInfo={description:"",methods:[],displayName:"TextControl",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"T"},description:""},defaultValue:{required:!1,tsType:{name:"T"},description:""},argType:{required:!1,tsType:{name:"ArgType"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => T | void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"union",raw:"T | void",elements:[{name:"T"},{name:"void"}]}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: any) => void",signature:{arguments:[{type:{name:"any"},name:"evt"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: any) => void",signature:{arguments:[{type:{name:"any"},name:"evt"}],return:{name:"void"}}},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""}}};export{x as T};
//# sourceMappingURL=Text-92f16433.js.map
