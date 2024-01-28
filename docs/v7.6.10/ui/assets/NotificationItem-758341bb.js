import{a as s,j as t,F as x}from"./jsx-runtime-31019b9d.js";import{L as u}from"./index-f64ebf9a.js";import{n as o,u as y}from"./index-9e46a6e4.js";import{h as b,I as f}from"./index-0d90a496.js";import{c as I}from"./polished.esm-b305131d.js";const h=o.div(({theme:i})=>({position:"relative",display:"flex",padding:15,width:280,borderRadius:4,alignItems:"center",background:i.base==="light"?"hsla(203, 50%, 20%, .97)":"hsla(203, 30%, 95%, .97)",boxShadow:"0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",color:i.color.inverseText,textDecoration:"none"})),N=o(h)(()=>({transition:"all 150ms ease-out",transform:"translate3d(0, 0, 0)","&:hover":{transform:"translate3d(0, -3px, 0)",boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"},"&:active":{transform:"translate3d(0, 0, 0)",boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"},"&:focus":{boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"}})),_=N.withComponent(u),v=o.div(()=>({display:"flex",marginRight:10,alignItems:"center"})),w=o.div(()=>({width:"100%",display:"flex",flexDirection:"column"})),S=o.div(({theme:i,hasIcon:e})=>({height:"100%",width:e?205:230,alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:i.typography.size.s1,lineHeight:"16px",fontWeight:i.typography.weight.bold})),D=o.div(({theme:i})=>({color:I(.25,i.color.inverseText),fontSize:i.typography.size.s1-1,lineHeight:"14px",marginTop:2})),l=({icon:i,content:{headline:e,subHeadline:a}})=>{const n=y(),r=n.base==="dark"?n.color.mediumdark:n.color.mediumlight;return s(x,{children:[!i||t(v,{children:t(f,{icon:i.name,width:16,height:16,color:i.color||r})}),s(w,{children:[t(S,{title:e,hasIcon:!!i,children:e}),a&&t(D,{children:a})]})]})},T=o(b)(({theme:i})=>({alignSelf:"center",marginTop:0,color:i.base==="light"?"rgba(255,255,255,0.7)":" #999999"})),d=({onDismiss:i})=>t(T,{title:"Dismiss notification",onClick:e=>{e.preventDefault(),i()},children:t(f,{icon:"closeAlt",height:12,width:12})}),m=o.div({height:48}),c=({notification:{content:i,link:e,onClear:a,id:n,icon:r},onDismissNotification:g})=>{const p=()=>{g(n),a&&a({dismissed:!0})};return e?s(_,{to:e,children:[t(l,{icon:r,content:i}),t(d,{onDismiss:p})]}):s(h,{children:[t(l,{icon:r,content:i}),t(d,{onDismiss:p})]})},j=c;try{m.displayName="NotificationItemSpacer",m.__docgenInfo={description:"",displayName:"NotificationItemSpacer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{c.displayName="NotificationItem",c.__docgenInfo={description:"",displayName:"NotificationItem",props:{notification:{defaultValue:null,description:"",name:"notification",required:!0,type:{name:"API_Notification"}},onDismissNotification:{defaultValue:null,description:"",name:"onDismissNotification",required:!0,type:{name:"(id: string) => void"}}}}}catch{}export{j as N};
//# sourceMappingURL=NotificationItem-758341bb.js.map