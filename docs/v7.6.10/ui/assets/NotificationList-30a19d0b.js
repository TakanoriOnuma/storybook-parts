import{j as o}from"./jsx-runtime-31019b9d.js";import{n as s}from"./index-9e46a6e4.js";import{N as c}from"./NotificationItem-758341bb.js";const d=s.div({zIndex:11,"> * + *":{marginTop:10},"&:empty":{display:"none"}},({placement:i})=>i||{bottom:0,left:0,right:0,position:"fixed"}),t=({notifications:i,clearNotification:n,placement:a=void 0})=>o(d,{placement:a,children:i.map(e=>o(c,{onDismissNotification:r=>n(r),notification:e},e.id))}),f=t;try{t.displayName="NotificationList",t.__docgenInfo={description:"",displayName:"NotificationList",props:{placement:{defaultValue:{value:"undefined"},description:"",name:"placement",required:!1,type:{name:"CSSObject"}},notifications:{defaultValue:null,description:"",name:"notifications",required:!0,type:{name:"API_Notification[]"}},clearNotification:{defaultValue:null,description:"",name:"clearNotification",required:!0,type:{name:"(id: string) => void"}}}}}catch{}export{f as N};
//# sourceMappingURL=NotificationList-30a19d0b.js.map