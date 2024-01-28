import{j as t,a as m,F as k}from"./jsx-runtime-31019b9d.js";import{R as A,r as d}from"./index-9f32f44c.js";import{u as T,A as q}from"./index-0d1d6e7e.js";import{n as v}from"./index-9e46a6e4.js";import{q as h}from"./index-0d90a496.js";import{b as F}from"./index-f64ebf9a.js";const C=v.div({position:"fixed",left:0,top:0,width:"100vw",height:"100vh",overflow:"hidden"});try{C.displayName="Root",C.__docgenInfo={description:"",displayName:"Root",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const{SIDEBAR:p,CANVAS:c,ADDONS:f}=q,V=v.div({transition:"transform .2s ease",position:"absolute",top:0,height:"100%",overflow:"auto"},({theme:e})=>({background:e.background.content,"&:nth-of-type(1)":{borderRight:`1px solid ${e.appBorderColor}`},"&:nth-of-type(3)":{borderLeft:`1px solid ${e.appBorderColor}`}}),({index:e})=>{switch(e){case 0:return{width:"80vw",transform:"translateX(-80vw)",left:0};case 1:return{width:"100%",transform:"translateX(0) scale(1)",left:0};case 2:return{width:"80vw",transform:"translateX(80vw)",right:0};default:return{}}},({active:e,index:r})=>{switch(!0){case(r===0&&e===p):return{transform:"translateX(-0px)"};case(r===1&&e===p):return{transform:"translateX(40vw) translateY(-42.5vh) translateY(40px) scale(0.2)"};case(r===1&&e===f):return{transform:"translateX(-40vw) translateY(-42.5vh) translateY(40px) scale(0.2)"};case(r===2&&e===f):return{transform:"translateX(0px)"};default:return{}}}),y=A.memo(({children:e,active:r,isFullscreen:b})=>t(N,{isFullscreen:b,children:d.Children.toArray(e).map((w,l)=>t(V,{index:l,active:r,children:w},l))}));y.displayName="Panels";const N=v.div({position:"fixed",top:0,left:0,width:"100vw"},({isFullscreen:e})=>({height:e?"100vh":"calc(100% - 40px)"})),B=v.nav({position:"fixed",bottom:0,left:0,width:"100vw",height:40,display:"flex",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.1)","& > *":{flex:1}},({theme:e})=>({background:e.barBg})),E=({Sidebar:e,Preview:r,Panel:b,Notifications:w,pages:l,viewMode:n,options:o})=>{const[{active:s},u]=d.useState({active:o.isFullscreen?c:o.initialActive||p}),i=T(),_=d.useCallback(()=>{u({active:c});const a=i.retrieveSelection();a?i.selectStory(a):i.selectFirstStory()},[]),x=d.useCallback(()=>{u({active:p});const a=i.retrieveSelection();a?i.selectStory(a):i.selectFirstStory()},[]);return m(C,{children:[t(w,{placement:{position:"fixed",bottom:60,left:20,right:20}}),m(y,{active:s,isFullscreen:o.isFullscreen,children:[t(e,{}),m("div",{children:[t("div",{hidden:n!=="docs"&&n!=="story",children:t(r,{showToolbar:o.showToolbar,id:"main",viewMode:n})}),l.map(({id:a,render:g})=>t(d.Fragment,{children:t(g,{})},a))]}),t(b,{hidden:n!=="story"})]}),!o.isFullscreen&&m(B,{children:[t(h,{onClick:x,active:s===p,children:"Sidebar"}),t(h,{onClick:_,active:s===c&&(n==="docs"||n==="story"),children:"Canvas"}),t(F,{children:({path:a})=>t(k,{children:l.map(({id:g,title:P,url:S})=>t(h,{onClick:()=>{u({active:c}),i.navigateUrl(S,{plain:!1})},active:s===c&&a.startsWith(S),children:P},g))})}),n==="story"&&o.showPanel?t(h,{onClick:()=>u({active:f}),active:s===f,children:"Addons"}):null]})]})};try{y.displayName="Panels",y.__docgenInfo={description:"",displayName:"Panels",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'Pick<API_Layout, "isFullscreen" | "showPanel" | "initialActive" | "showToolbar">'}},Sidebar:{defaultValue:null,description:"",name:"Sidebar",required:!0,type:{name:"ComponentType<any>"}},Preview:{defaultValue:null,description:"",name:"Preview",required:!0,type:{name:"ComponentType<any>"}},Panel:{defaultValue:null,description:"",name:"Panel",required:!0,type:{name:"ComponentType<any>"}},Notifications:{defaultValue:null,description:"",name:"Notifications",required:!0,type:{name:"ComponentType<any>"}},viewMode:{defaultValue:null,description:"",name:"viewMode",required:!0,type:{name:"string | undefined"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"Addon_PageType[]"}}}}}catch{}export{E as M};
//# sourceMappingURL=mobile-cff33830.js.map