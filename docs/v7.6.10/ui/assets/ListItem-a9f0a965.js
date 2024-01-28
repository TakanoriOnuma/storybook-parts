import{j as l,a as p}from"./jsx-runtime-31019b9d.js";import{n as r,m as I}from"./index-9e46a6e4.js";import{c as q}from"./polished.esm-b305131d.js";import{I as L,i as V}from"./icon-3829cbd1.js";const k=r(({active:e,loading:a,disabled:n,...t})=>l("span",{...t}))(({theme:e})=>({color:e.color.defaultText,fontWeight:e.typography.weight.regular}),({active:e,theme:a})=>e?{color:a.color.secondary,fontWeight:a.typography.weight.bold}:{},({loading:e,theme:a})=>e?{display:"inline-block",flex:"none",...a.animation.inlineGlow}:{},({disabled:e,theme:a})=>e?{color:q(.7,a.color.defaultText)}:{}),T=r.span({display:"flex","& svg":{height:12,width:12,margin:"3px 0",verticalAlign:"top"},"& path":{fill:"inherit"}}),w=r.span({flex:1,textAlign:"left",display:"flex",flexDirection:"column"},({isIndented:e})=>e?{marginLeft:24}:{}),_=r.span(({theme:e})=>({fontSize:"11px",lineHeight:"14px"}),({active:e,theme:a})=>e?{color:a.color.secondary}:{},({theme:e,disabled:a})=>a?{color:e.textMutedColor}:{}),c=r.span(({active:e,theme:a})=>e?{"& svg":{opacity:1},"& svg path:not([fill])":{fill:a.color.secondary}}:{},()=>({display:"flex",maxWidth:14})),j=r.a(({theme:e})=>({fontSize:e.typography.size.s1,transition:"all 150ms ease-out",color:e.color.dark,textDecoration:"none",cursor:"pointer",justifyContent:"space-between",lineHeight:"18px",padding:"7px 10px",display:"flex",alignItems:"center","& > * + *":{paddingLeft:10},"&:hover":{background:e.background.hoverable},"&:hover svg":{opacity:1}}),({disabled:e})=>e?{cursor:"not-allowed"}:{}),N=I(100)((e,a,n)=>{const t={};return e&&Object.assign(t,{onClick:e}),a&&Object.assign(t,{href:a}),n&&a&&Object.assign(t,{to:a,as:n}),t}),s=({loading:e,left:a,title:n,center:t,right:d,icon:i,active:u,disabled:f,isIndented:m,href:y,onClick:g,LinkWrapper:h,...v})=>{const x=N(g,y,h),o={active:u,disabled:f},b=typeof i=="string"&&V[i];return p(j,{...o,...v,...x,children:[i?l(c,{...o,children:b?l(L,{icon:i}):i}):a&&l(c,{...o,children:a}),n||t?p(w,{isIndented:!a&&!i&&m,children:[n&&l(k,{...o,loading:e,children:n}),t&&l(_,{...o,children:t})]}):null,d&&l(T,{...o,children:d})]})};s.defaultProps={loading:!1,left:null,title:l("span",{children:"Loading state"}),center:null,right:null,active:!1,disabled:!1,href:null,LinkWrapper:null,onClick:null};const C=s;try{s.displayName="ListItem",s.__docgenInfo={description:"",displayName:"ListItem",props:{loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},left:{defaultValue:{value:"null"},description:"@deprecated This property will be removed in SB 8.0\nUse `icon` property instead.",name:"left",required:!1,type:{name:"ReactNode"}},title:{defaultValue:{value:"<span>Loading state</span>"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},center:{defaultValue:{value:"null"},description:"",name:"center",required:!1,type:{name:"ReactNode"}},right:{defaultValue:{value:"null"},description:"",name:"right",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'"key" | "alert" | "button" | "document" | "form" | "grid" | "link" | "menu" | "search" | "timer" | "email" | "location" | "time" | "copy" | "video" | "circle" | "filter" | "stop" | ... 190 more ...'}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}},LinkWrapper:{defaultValue:{value:"null"},description:"",name:"LinkWrapper",required:!1,type:{name:"LinkWrapperType"}},isIndented:{defaultValue:null,description:"",name:"isIndented",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}export{C as L};
//# sourceMappingURL=ListItem-a9f0a965.js.map
