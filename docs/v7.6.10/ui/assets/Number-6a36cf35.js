import{j as i}from"./jsx-runtime-31019b9d.js";import{r as t}from"./index-9f32f44c.js";import{n as I}from"./index-9e46a6e4.js";import{F as c}from"./index-0d90a496.js";import{g as E,a as x}from"./helpers-a9e07cde.js";const S=I.label({display:"flex"}),f=e=>{const r=parseFloat(e);return Number.isNaN(r)?void 0:r},y=e=>e!=null?String(e):"",b=({name:e,value:r,onChange:l,min:_,max:g,step:V,onBlur:N,onFocus:h})=>{const[p,u]=t.useState(typeof r=="number"?r:""),[a,d]=t.useState(!1),[q,o]=t.useState(null),C=t.useCallback(n=>{u(n.target.value);const m=parseFloat(n.target.value);Number.isNaN(m)?o(new Error(`'${n.target.value}' is not a number`)):(l(m),o(null))},[l,o]),F=t.useCallback(()=>{u("0"),l(0),d(!0)},[d]),s=t.useRef(null);return t.useEffect(()=>{a&&s.current&&s.current.select()},[a]),t.useEffect(()=>{p!==(typeof r=="number"?r:"")&&u(r)},[r]),!a&&r===void 0?i(c.Button,{id:E(e),onClick:F,children:"Set number"}):i(S,{children:i(c.Input,{ref:s,id:x(e),type:"number",onChange:C,size:"flex",placeholder:"Edit number...",value:p,valid:q?"error":null,autoFocus:a,name:e,min:_,max:g,step:V,onFocus:h,onBlur:N})})};try{f.displayName="parse",f.__docgenInfo={description:"",displayName:"parse",props:{}}}catch{}try{y.displayName="format",y.__docgenInfo={description:"",displayName:"format",props:{}}}catch{}try{b.displayName="NumberControl",b.__docgenInfo={description:"",displayName:"NumberControl",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number | null"}},argType:{defaultValue:null,description:"",name:"argType",required:!1,type:{name:"ArgType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number | null) => number | void | null"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: any) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: any) => void)"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}}}}}catch{}export{b as N,f as p};
//# sourceMappingURL=Number-6a36cf35.js.map
