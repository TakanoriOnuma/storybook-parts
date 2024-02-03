import{a as s,j as r}from"./jsx-runtime-0f39435c.js";import{e as l,G as I}from"./index-5a529529.js";import{c as S}from"./index-90790cc0.js";import{c as x}from"./polished.esm-ebce2d70.js";import{R as p}from"./index-6f814c40.js";const i=l.span(({theme:e,isExpanded:o})=>({display:"inline-block",width:0,height:0,marginTop:6,marginLeft:8,marginRight:5,color:x(.4,e.textMutedColor),borderTop:"3px solid transparent",borderBottom:"3px solid transparent",borderLeft:"3px solid",transform:o?"rotateZ(90deg)":"none",transition:"transform .1s ease-out"})),u={light:{document:"#ff8300",docsModeDocument:"secondary",bookmarkhollow:"seafoam",component:"secondary",folder:"ultraviolet"},dark:{document:"gold",docsModeDocument:"secondary",bookmarkhollow:"seafoam",component:"secondary",folder:"primary"}},T=(e,o)=>o in e.color,c=l(S)({width:12,height:12,padding:1,marginTop:3,marginRight:5,flex:"0 0 auto"},({theme:e,icon:o,symbol:t=o,docsMode:a})=>{const d=(e.base==="dark"?u.dark:u.light)[a&&t==="document"?"docsModeDocument":t];return{color:T(e,d)?e.color[d]:d}}),N=l.button(({theme:e,depth:o=0,isExpandable:t=!1})=>({width:"100%",border:"none",cursor:"pointer",display:"flex",alignItems:"start",textAlign:"left",padding:3,paddingLeft:`${(t?2:18)+o*16}px`,color:"inherit",fontSize:`${e.typography.size.s2-1}px`,background:"transparent","&:hover, &:focus":{background:e.background.hoverable,outline:"none"}})),q=l.a(({theme:e,depth:o=0})=>({cursor:"pointer",display:"flex",alignItems:"start",padding:3,paddingLeft:`${18+o*16}px`,fontSize:`${e.typography.size.s2-1}px`,textDecoration:"none",color:e.color.defaultText,background:"transparent","&:hover, &:focus":{outline:"none",background:e.background.hoverable},'&[data-selected="true"]':{color:e.color.lightest,background:e.color.secondary,fontWeight:e.typography.weight.bold,"&:hover, &:focus":{background:e.color.secondary},svg:{color:e.color.lightest}}})),m=l.span(({theme:e})=>({display:"grid",justifyContent:"start",gridAutoColumns:"auto",gridAutoFlow:"column",color:e.textMutedColor,fontSize:`${e.typography.size.s1-1}px`,"& > span":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},"& > span + span":{position:"relative",marginLeft:4,paddingLeft:7,"&:before":{content:"'/'",position:"absolute",left:0}}})),y=l.div(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",marginTop:16,marginBottom:4,fontSize:`${e.typography.size.s1-1}px`,fontWeight:e.typography.weight.bold,lineHeight:"16px",minHeight:20,letterSpacing:"0.35em",textTransform:"uppercase",color:e.textMutedColor})),f=p.memo(function({children:o,isExpanded:t=!1,isExpandable:a=!1,...n}){return s(N,{isExpandable:a,tabIndex:-1,...n,children:[a?r(i,{isExpanded:t}):null,r(c,{icon:"folder",useSymbol:!0,color:"primary"}),o]})}),g=p.memo(function({theme:o,children:t,isExpanded:a,isExpandable:n,isSelected:V,...d}){return s(N,{isExpandable:n,tabIndex:-1,...d,children:[n&&r(i,{isExpanded:a}),r(c,{icon:"component",useSymbol:!0,color:"secondary"}),t]})}),h=p.memo(function({theme:o,children:t,docsMode:a,...n}){return s(q,{tabIndex:-1,...n,children:[r(c,{icon:"document",useSymbol:!0,docsMode:a}),t]})}),_=p.memo(function({theme:o,children:t,...a}){return s(q,{tabIndex:-1,...a,children:[r(c,{icon:"bookmarkhollow",useSymbol:!0}),t]})});try{i.displayName="CollapseIcon",i.__docgenInfo={description:"",displayName:"CollapseIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}}}}}catch{}try{m.displayName="Path",m.__docgenInfo={description:"",displayName:"Path",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{y.displayName="RootNode",y.__docgenInfo={description:"",displayName:"RootNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{f.displayName="GroupNode",f.__docgenInfo={description:"",displayName:"GroupNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},isExpandable:{defaultValue:null,description:"",name:"isExpandable",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isComponent:{defaultValue:null,description:"",name:"isComponent",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="ComponentNode",g.__docgenInfo={description:"",displayName:"ComponentNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},isExpandable:{defaultValue:null,description:"",name:"isExpandable",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isComponent:{defaultValue:null,description:"",name:"isComponent",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="DocumentNode",h.__docgenInfo={description:"",displayName:"DocumentNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},docsMode:{defaultValue:null,description:"",name:"docsMode",required:!0,type:{name:"boolean"}}}}}catch{}try{_.displayName="StoryNode",_.__docgenInfo={description:"",displayName:"StoryNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}}}}}catch{}const b=({refId:e,itemId:o})=>r(I,{styles:({color:t})=>{const a=x(.85,t.secondary);return{[`[data-ref-id="${e}"][data-item-id="${o}"]:not([data-selected="true"])`]:{['&[data-nodetype="component"], &[data-nodetype="group"]']:{background:a,"&:hover, &:focus":{background:a}},['&[data-nodetype="story"], &[data-nodetype="document"]']:{color:t.defaultText,background:a,"&:hover, &:focus":{background:a}}}}}});try{b.displayName="HighlightStyles",b.__docgenInfo={description:"",displayName:"HighlightStyles",props:{itemId:{defaultValue:null,description:"",name:"itemId",required:!0,type:{name:"string"}},refId:{defaultValue:null,description:"",name:"refId",required:!0,type:{name:"string"}}}}}catch{}export{i as C,h as D,f as G,b as H,m as P,y as R,_ as S,g as a};
//# sourceMappingURL=HighlightStyles-bdd60786.js.map