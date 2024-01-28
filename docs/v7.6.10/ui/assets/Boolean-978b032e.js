import{j as a,a as c}from"./jsx-runtime-31019b9d.js";import{r as g}from"./index-9f32f44c.js";import{c as f,a as n}from"./polished.esm-b305131d.js";import{n as b}from"./index-9e46a6e4.js";import{F as y}from"./index-0d90a496.js";import{g as m,a as h}from"./helpers-a9e07cde.js";const x=b.label(({theme:e})=>({lineHeight:"18px",alignItems:"center",marginBottom:8,display:"inline-block",position:"relative",whiteSpace:"nowrap",background:e.boolean.background,borderRadius:"3em",padding:1,input:{appearance:"none",width:"100%",height:"100%",position:"absolute",left:0,top:0,margin:0,padding:0,border:"none",background:"transparent",cursor:"pointer",borderRadius:"3em","&:focus":{outline:"none",boxShadow:`${e.color.secondary} 0 0 0 1px inset !important`}},span:{textAlign:"center",fontSize:e.typography.size.s1,fontWeight:e.typography.weight.bold,lineHeight:"1",cursor:"pointer",display:"inline-block",padding:"7px 15px",transition:"all 100ms ease-out",userSelect:"none",borderRadius:"3em",color:f(.5,e.color.defaultText),background:"transparent","&:hover":{boxShadow:`${n(.3,e.appBorderColor)} 0 0 0 1px inset`},"&:active":{boxShadow:`${n(.05,e.appBorderColor)} 0 0 0 2px inset`,color:n(1,e.appBorderColor)},"&:first-of-type":{paddingRight:8},"&:last-of-type":{paddingLeft:8}},"input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":{background:e.boolean.selectedBackground,boxShadow:e.base==="light"?`${n(.1,e.appBorderColor)} 0 0 2px`:`${e.appBorderColor} 0 0 0 1px`,color:e.color.defaultText,padding:"7px 15px"}})),B=e=>e==="true",l=({name:e,value:o,onChange:r,onBlur:i,onFocus:d})=>{const p=g.useCallback(()=>r(!1),[r]);if(o===void 0)return a(y.Button,{id:m(e),onClick:p,children:"Set boolean"});const t=h(e),s=typeof o=="string"?B(o):o;return c(x,{htmlFor:t,"aria-label":e,children:[a("input",{id:t,type:"checkbox",onChange:u=>r(u.target.checked),checked:s,role:"switch",name:e,onBlur:i,onFocus:d}),a("span",{"aria-hidden":"true",children:"False"}),a("span",{"aria-hidden":"true",children:"True"})]})};try{l.displayName="BooleanControl",l.__docgenInfo={description:`# Boolean Control
Renders a switch toggle with "True" or "False".
or if the value is \`undefined\`, renders a button to set the boolean.

## Example usage

\`\`\`

<BooleanControl name="isTrue" value={value} onChange={handleValueChange}/>
\`\`\``,displayName:"BooleanControl",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"boolean"}},argType:{defaultValue:null,description:"",name:"argType",required:!1,type:{name:"ArgType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => boolean | void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: any) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: any) => void)"}}}}}catch{}export{l as B};
//# sourceMappingURL=Boolean-978b032e.js.map
