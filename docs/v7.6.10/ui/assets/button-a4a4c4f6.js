import{j as t}from"./jsx-runtime-31019b9d.js";import{R as l}from"./index-9f32f44c.js";import{n as a,d as i}from"./index-9e46a6e4.js";import{c as d}from"./polished.esm-b305131d.js";import{a as s}from"./enums-54c8c3f1.js";const n=l.forwardRef(({children:o,...e},r)=>e.href!=null?t("a",{ref:r,...e,children:o}):t("button",{ref:r,type:"button",...e,children:o}));n.displayName="ButtonOrLink";const c=a(n,{shouldForwardProp:i})({whiteSpace:"normal",display:"inline-flex",overflow:"hidden",verticalAlign:"top",justifyContent:"center",alignItems:"center",textAlign:"center",textDecoration:"none","&:empty":{display:"none"}},({theme:o})=>({padding:"0 15px",transition:"color 0.2s linear, border-bottom-color 0.2s linear",height:40,lineHeight:"12px",cursor:"pointer",background:"transparent",border:"0 solid transparent",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",fontWeight:"bold",fontSize:13,"&:focus":{outline:"0 none",borderBottomColor:o.color.secondary}}),({active:o,textColor:e,theme:r})=>o?{color:e||r.barSelectedColor,borderBottomColor:r.barSelectedColor}:{color:e||r.barTextColor,borderBottomColor:"transparent"});c.displayName="TabButton";const p=a(n,{shouldForwardProp:i})(()=>({alignItems:"center",background:"transparent",border:"none",borderRadius:4,color:"inherit",cursor:"pointer",display:"inline-flex",fontSize:13,fontWeight:"bold",height:28,justifyContent:"center",marginTop:6,padding:"8px 7px","& > svg":{width:14}}),({active:o,theme:e})=>o?{backgroundColor:e.background.hoverable,color:e.barSelectedColor}:{},({disabled:o,theme:e})=>o?{opacity:.5,cursor:"not-allowed"}:{"&:hover, &:focus-visible":{background:d(.88,e.color.secondary),color:e.barHoverColor},"&:focus-visible":{outline:s},"&:focus:not(:focus-visible)":{outline:"none"}});p.displayName="IconButton";const u=a.div(({theme:o})=>({width:14,height:14,backgroundColor:o.appBorderColor,animation:`${o.animation.glow} 1.5s ease-in-out infinite`})),m=a.div(()=>({marginTop:6,padding:7,height:28})),v=()=>t(m,{children:t(u,{})});try{n.displayName="ButtonOrLink",n.__docgenInfo={description:"",displayName:"ButtonOrLink",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | void"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | void"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}}}}}catch{}export{p as I,c as T,v as a};
//# sourceMappingURL=button-a4a4c4f6.js.map