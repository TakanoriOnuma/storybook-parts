import{R as r}from"./index-f1f2c4b1.js";import{c as L}from"./polished.esm-e310f6d0.js";import{k as P,n as o}from"./index-4b2a7d13.js";import{I as T}from"./icon-9490c14c.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-758f4e48.js";const $=P`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,z=o.div(({size:e=32})=>({borderRadius:"50%",cursor:"progress",display:"inline-block",overflow:"hidden",position:"absolute",transition:"all 200ms ease-out",verticalAlign:"top",top:"50%",left:"50%",marginTop:-(e/2),marginLeft:-(e/2),height:e,width:e,zIndex:4,borderWidth:2,borderStyle:"solid",borderColor:"rgba(97, 97, 97, 0.29)",borderTopColor:"rgb(100,100,100)",animation:`${$} 0.7s linear infinite`,mixBlendMode:"difference"})),g=o.div({position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}),N=o.div(({theme:e})=>({position:"relative",width:"80%",marginBottom:"0.75rem",maxWidth:300,height:5,borderRadius:5,background:L(.8,e.color.secondary),overflow:"hidden",cursor:"progress"})),j=o.div(({theme:e})=>({position:"absolute",top:0,left:0,height:"100%",background:e.color.secondary})),u=o.div(({theme:e})=>({minHeight:"2em",fontSize:`${e.typography.size.s1}px`,color:e.barTextColor})),A=o(T)(({theme:e})=>({width:20,height:20,marginBottom:"0.5rem",color:e.textMutedColor})),R=P`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,W=o.span({"&::after":{content:"'...'",animation:`${R} 1s linear infinite`,animationDelay:"1s",display:"inline-block",width:"1em",height:"auto"}}),s=({progress:e,error:d,size:C,...c})=>{if(d)return r.createElement(g,{"aria-label":d.toString(),"aria-live":"polite",role:"status",...c},r.createElement(A,{icon:"lightningoff"}),r.createElement(u,null,d.message));if(e){const{value:m,modules:p}=e;let{message:l}=e;return p&&(l+=` ${p.complete} / ${p.total} modules`),r.createElement(g,{"aria-label":"Content is loading...","aria-live":"polite","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":m*100,"aria-valuetext":l,role:"progressbar",...c},r.createElement(N,null,r.createElement(j,{style:{width:`${m*100}%`}})),r.createElement(u,null,l,m<1&&r.createElement(W,{key:l})))}return r.createElement(z,{"aria-label":"Content is loading...","aria-live":"polite",role:"status",size:C,...c})};s.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{progress:{required:!1,tsType:{name:"Progress"},description:""},error:{required:!1,tsType:{name:"Error"},description:""},size:{required:!1,tsType:{name:"number"},description:""}}};const B=e=>r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"linear-gradient(to right, rgba(56,56,56,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(224,224,224,1) 100%)"}},r.createElement("span",{style:{position:"absolute",top:"50%",left:0,height:"50vh",width:"100vw",background:"linear-gradient(to right, red 0%, orangered 50%, blue 50%, deepskyblue 100%)"}}),e()),J={component:s},t=()=>r.createElement(s,{role:"progressbar"});t.decorators=[B];const a=()=>r.createElement(s,{size:64,role:"progressbar"});a.decorators=[B];const i=()=>r.createElement(s,{progress:{value:.3,message:"Building",modules:{complete:500,total:1337}}}),n=()=>r.createElement(s,{error:new Error("Connection closed")});t.__docgenInfo={description:"",methods:[],displayName:"InfiniteState"};a.__docgenInfo={description:"",methods:[],displayName:"SizeAdjusted"};i.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};n.__docgenInfo={description:"",methods:[],displayName:"ProgressError"};var f,h,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Loader role="progressbar" />',...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:'() => <Loader size={64} role="progressbar" />',...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var w,S,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Loader progress={{
  value: 0.3,
  message: 'Building',
  modules: {
    complete: 500,
    total: 1337
  }
}} />`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,_,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"() => <Loader error={new Error('Connection closed')} />",...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const K=["InfiniteState","SizeAdjusted","ProgressBar","ProgressError"];export{t as InfiniteState,i as ProgressBar,n as ProgressError,a as SizeAdjusted,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Loader.stories-76b19427.js.map
