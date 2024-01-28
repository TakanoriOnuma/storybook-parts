import{_ as D}from"./iframe-9b8f7ddb.js";import{j as o,a as y,F as W}from"./jsx-runtime-31019b9d.js";import{r as d}from"./index-9f32f44c.js";import{b as B}from"./polished.esm-b305131d.js";import{n as i}from"./index-9e46a6e4.js";import{m as E,n as j,h as b,I as g,Z as O,A as F}from"./index-0d90a496.js";import{g as U}from"./BlockBackgroundStyles-8d78b434.js";import{Z as $,S as K}from"./Story-05e15bc9.js";import{S as G}from"./Source-9e9bdbea.js";const H=({zoom:e,resetZoom:r})=>y(W,{children:[o(b,{onClick:t=>{t.preventDefault(),e(.8)},title:"Zoom in",children:o(g,{icon:"zoom"})},"zoomin"),o(b,{onClick:t=>{t.preventDefault(),e(1.25)},title:"Zoom out",children:o(g,{icon:"zoomout"})},"zoomout"),o(b,{onClick:t=>{t.preventDefault(),r()},title:"Reset zoom",children:o(g,{icon:"zoomreset"})},"zoomreset")]}),M=i(E)({position:"absolute",left:0,right:0,top:0,transition:"transform .2s linear"}),v=({isLoading:e,storyId:r,baseUrl:t,zoom:a,resetZoom:n,...u})=>o(M,{...u,children:o(d.Fragment,{children:e?[1,2,3].map(m=>o(j,{},m)):o(H,{zoom:a,resetZoom:n})},"left")});try{v.displayName="Toolbar",v.__docgenInfo={description:"",displayName:"Toolbar",props:{border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},zoom:{defaultValue:null,description:"",name:"zoom",required:!0,type:{name:"(val: number) => void"}},resetZoom:{defaultValue:null,description:"",name:"resetZoom",required:!0,type:{name:"() => void"}},storyId:{defaultValue:null,description:"",name:"storyId",required:!1,type:{name:"string"}},baseUrl:{defaultValue:null,description:"",name:"baseUrl",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const{global:Y}=__STORYBOOK_MODULE_GLOBAL__,J=i.div(({isColumn:e,columns:r,layout:t})=>({display:e||!r?"block":"flex",position:"relative",flexWrap:"wrap",overflow:"auto",flexDirection:e?"column":"row","& .innerZoomElementWrapper > *":e?{width:t!=="fullscreen"?"calc(100% - 20px)":"100%",display:"block"}:{maxWidth:t!=="fullscreen"?"calc(100% - 20px)":"100%",display:"inline-block"}}),({layout:e="padded"})=>e==="centered"||e==="padded"?{padding:"30px 20px","& .innerZoomElementWrapper > *":{width:"auto",border:"10px solid transparent!important"}}:{},({layout:e="padded"})=>e==="centered"?{display:"flex",justifyContent:"center",justifyItems:"center",alignContent:"center",alignItems:"center"}:{},({columns:e})=>e&&e>1?{".innerZoomElementWrapper > *":{minWidth:`calc(100% / ${e} - 20px)`}}:{}),S=i(G)(({theme:e})=>({margin:0,borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:e.appBorderRadius,borderBottomRightRadius:e.appBorderRadius,border:"none",background:e.base==="light"?"rgba(0, 0, 0, 0.85)":B(.05,e.background.content),color:e.color.lightest,button:{background:e.base==="light"?"rgba(0, 0, 0, 0.85)":B(.05,e.background.content)}})),Q=i.div(({theme:e,withSource:r,isExpanded:t})=>({position:"relative",overflow:"hidden",margin:"25px 0 40px",...U(e),borderBottomLeftRadius:r&&t&&0,borderBottomRightRadius:r&&t&&0,borderBottomWidth:t&&0,"h3 + &":{marginTop:"16px"}}),({withToolbar:e})=>e&&{paddingTop:40}),X=(e,r,t)=>{switch(!0){case!!(e&&e.error):return{source:null,actionItem:{title:"No code available",className:"docblock-code-toggle docblock-code-toggle--disabled",disabled:!0,onClick:()=>t(!1)}};case r:return{source:o(S,{...e,dark:!0}),actionItem:{title:"Hide code",className:"docblock-code-toggle docblock-code-toggle--expanded",onClick:()=>t(!1)}};default:return{source:o(S,{...e,dark:!0}),actionItem:{title:"Show code",className:"docblock-code-toggle",onClick:()=>t(!0)}}}};function ee(e){if(d.Children.count(e)===1){const r=e;if(r.props)return r.props.id}return null}const oe=i(v)({position:"absolute",top:0,left:0,right:0,height:40}),te=i.div({overflow:"hidden",position:"relative"}),h=({isLoading:e,isColumn:r,columns:t,children:a,withSource:n,withToolbar:u=!1,isExpanded:m=!1,additionalActions:_,className:T,layout:R="padded",...V})=>{const[k,q]=d.useState(m),{source:C,actionItem:A}=X(n,k,q),[f,w]=d.useState(1),Z=[T].concat(["sbdocs","sbdocs-preview","sb-unstyled"]),L=n?[A]:[],[p,I]=d.useState(_?[..._]:[]),N=[...L,...p],{window:x}=Y,P=d.useCallback(async l=>{const{createCopyToClipboardFunction:s}=await D(()=>import("./index-0d90a496.js").then(c=>c.K),["./index-0d90a496.js","./iframe-9b8f7ddb.js","./index-9f32f44c.js","./_commonjsHelpers-de833af9.js","./index-9e46a6e4.js","./index-9c2d1831.js","./bundle.esm-ef1ed2af.js","./index-b75c9059.js"],import.meta.url);s()},[]),z=l=>{const s=x.getSelection();s&&s.type==="Range"||(l.preventDefault(),p.filter(c=>c.title==="Copied").length===0&&P(C.props.code).then(()=>{I([...p,{title:"Copied",onClick:()=>{}}]),x.setTimeout(()=>I(p.filter(c=>c.title!=="Copied")),1500)}))};return y(Q,{withSource:n,withToolbar:u,...V,className:Z.join(" "),children:[u&&o(oe,{isLoading:e,border:!0,zoom:l=>w(f*l),resetZoom:()=>w(1),storyId:ee(a),baseUrl:"./iframe.html"}),o($.Provider,{value:{scale:f},children:y(te,{className:"docs-story",onCopyCapture:n&&z,children:[o(J,{isColumn:r||!Array.isArray(a),columns:t,layout:R,children:o(O.Element,{scale:f,children:Array.isArray(a)?a.map((l,s)=>o("div",{children:l},s)):o("div",{children:a})})}),o(F,{actionItems:N})]})}),n&&k&&C]})},re=i(h)(()=>({".docs-story":{paddingTop:32,paddingBottom:40}})),me=()=>o(re,{isLoading:!0,withToolbar:!0,children:o(K,{})});try{h.displayName="Preview",h.__docgenInfo={description:"A preview component for showing one or more component `Story`\nitems. The preview also shows the source for the component\nas a drop-down.",displayName:"Preview",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"true"}},layout:{defaultValue:{value:"padded"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"padded"'},{value:'"fullscreen"'},{value:'"centered"'}]}},isColumn:{defaultValue:null,description:"",name:"isColumn",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number"}},withSource:{defaultValue:null,description:"",name:"withSource",required:!1,type:{name:"SourceProps"}},isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},withToolbar:{defaultValue:{value:"false"},description:"",name:"withToolbar",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},additionalActions:{defaultValue:null,description:"",name:"additionalActions",required:!1,type:{name:"ActionItem[]"}}}}}catch{}export{me as P,h as a};
//# sourceMappingURL=Preview-7e73265d.js.map
