import{j as s}from"./jsx-runtime-0f39435c.js";import{w as y}from"./index-90790cc0.js";import{e as t}from"./index-5a529529.js";import{c as a}from"./polished.esm-ebce2d70.js";const r=o=>`& :where(${o}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${o}))`,l=600,c=t.h1(y,({theme:o})=>({color:o.color.defaultText,fontSize:o.typography.size.m3,fontWeight:o.typography.weight.bold,lineHeight:"32px",[`@media (min-width: ${l}px)`]:{fontSize:o.typography.size.l1,lineHeight:"36px",marginBottom:"16px"}})),g=t.h2(y,({theme:o})=>({fontWeight:o.typography.weight.regular,fontSize:o.typography.size.s3,lineHeight:"20px",borderBottom:"none",marginBottom:15,[`@media (min-width: ${l}px)`]:{fontSize:o.typography.size.m1,lineHeight:"28px",marginBottom:24},color:a(.25,o.color.defaultText)})),n=t.div(({theme:o})=>{const e={fontFamily:o.typography.fonts.base,fontSize:o.typography.size.s3,margin:0,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitOverflowScrolling:"touch"},i={margin:"20px 0 8px",padding:0,cursor:"text",position:"relative",color:o.color.defaultText,"&:first-of-type":{marginTop:0,paddingTop:0},"&:hover a.anchor":{textDecoration:"none"},"& code":{fontSize:"inherit"}},d={lineHeight:1,margin:"0 2px",padding:"3px 5px",whiteSpace:"nowrap",borderRadius:3,fontSize:o.typography.size.s2-1,border:o.base==="light"?`1px solid ${o.color.mediumlight}`:`1px solid ${o.color.darker}`,color:o.base==="light"?a(.1,o.color.defaultText):a(.3,o.color.defaultText),backgroundColor:o.base==="light"?o.color.lighter:o.color.border};return{maxWidth:1e3,width:"100%",[r("a")]:{...e,fontSize:"inherit",lineHeight:"24px",color:o.color.secondary,textDecoration:"none","&.absent":{color:"#cc0000"},"&.anchor":{display:"block",paddingLeft:30,marginLeft:-30,cursor:"pointer",position:"absolute",top:0,left:0,bottom:0}},[r("blockquote")]:{...e,margin:"16px 0",borderLeft:`4px solid ${o.color.medium}`,padding:"0 15px",color:o.color.dark,"& > :first-of-type":{marginTop:0},"& > :last-child":{marginBottom:0}},[r("div")]:e,[r("dl")]:{...e,margin:"16px 0",padding:0,"& dt":{fontSize:"14px",fontWeight:"bold",fontStyle:"italic",padding:0,margin:"16px 0 4px"},"& dt:first-of-type":{padding:0},"& dt > :first-of-type":{marginTop:0},"& dt > :last-child":{marginBottom:0},"& dd":{margin:"0 0 16px",padding:"0 15px"},"& dd > :first-of-type":{marginTop:0},"& dd > :last-child":{marginBottom:0}},[r("h1")]:{...e,...i,fontSize:`${o.typography.size.l1}px`,fontWeight:o.typography.weight.bold},[r("h2")]:{...e,...i,fontSize:`${o.typography.size.m2}px`,paddingBottom:4,borderBottom:`1px solid ${o.appBorderColor}`},[r("h3")]:{...e,...i,fontSize:`${o.typography.size.m1}px`,fontWeight:o.typography.weight.bold},[r("h4")]:{...e,...i,fontSize:`${o.typography.size.s3}px`},[r("h5")]:{...e,...i,fontSize:`${o.typography.size.s2}px`},[r("h6")]:{...e,...i,fontSize:`${o.typography.size.s2}px`,color:o.color.dark},[r("hr")]:{border:"0 none",borderTop:`1px solid ${o.appBorderColor}`,height:4,padding:0},[r("img")]:{maxWidth:"100%"},[r("li")]:{...e,fontSize:o.typography.size.s2,color:o.color.defaultText,lineHeight:"24px","& + li":{marginTop:".25em"},"& ul, & ol":{marginTop:".25em",marginBottom:0},"& code":d},[r("ol")]:{...e,margin:"16px 0",paddingLeft:30,"& :first-of-type":{marginTop:0},"& :last-child":{marginBottom:0}},[r("p")]:{...e,margin:"16px 0",fontSize:o.typography.size.s2,lineHeight:"24px",color:o.color.defaultText,"& code":d},[r("pre")]:{...e,fontFamily:o.typography.fonts.mono,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",lineHeight:"18px",padding:"11px 1rem",whiteSpace:"pre-wrap",color:"inherit",borderRadius:3,margin:"1rem 0","&:not(.prismjs)":{background:"transparent",border:"none",borderRadius:0,padding:0,margin:0},"& pre, &.prismjs":{padding:15,margin:0,whiteSpace:"pre-wrap",color:"inherit",fontSize:"13px",lineHeight:"19px",code:{color:"inherit",fontSize:"inherit"}},"& code":{whiteSpace:"pre"},"& code, & tt":{border:"none"}},[r("span")]:{...e,"&.frame":{display:"block",overflow:"hidden","& > span":{border:`1px solid ${o.color.medium}`,display:"block",float:"left",overflow:"hidden",margin:"13px 0 0",padding:7,width:"auto"},"& span img":{display:"block",float:"left"},"& span span":{clear:"both",color:o.color.darkest,display:"block",padding:"5px 0 0"}},"&.align-center":{display:"block",overflow:"hidden",clear:"both","& > span":{display:"block",overflow:"hidden",margin:"13px auto 0",textAlign:"center"},"& span img":{margin:"0 auto",textAlign:"center"}},"&.align-right":{display:"block",overflow:"hidden",clear:"both","& > span":{display:"block",overflow:"hidden",margin:"13px 0 0",textAlign:"right"},"& span img":{margin:0,textAlign:"right"}},"&.float-left":{display:"block",marginRight:13,overflow:"hidden",float:"left","& span":{margin:"13px 0 0"}},"&.float-right":{display:"block",marginLeft:13,overflow:"hidden",float:"right","& > span":{display:"block",overflow:"hidden",margin:"13px auto 0",textAlign:"right"}}},[r("table")]:{...e,margin:"16px 0",fontSize:o.typography.size.s2,lineHeight:"24px",padding:0,borderCollapse:"collapse","& tr":{borderTop:`1px solid ${o.appBorderColor}`,backgroundColor:o.appContentBg,margin:0,padding:0},"& tr:nth-of-type(2n)":{backgroundColor:o.base==="dark"?o.color.darker:o.color.lighter},"& tr th":{fontWeight:"bold",color:o.color.defaultText,border:`1px solid ${o.appBorderColor}`,margin:0,padding:"6px 13px"},"& tr td":{border:`1px solid ${o.appBorderColor}`,color:o.color.defaultText,margin:0,padding:"6px 13px"},"& tr th :first-of-type, & tr td :first-of-type":{marginTop:0},"& tr th :last-child, & tr td :last-child":{marginBottom:0}},[r("ul")]:{...e,margin:"16px 0",paddingLeft:30,"& :first-of-type":{marginTop:0},"& :last-child":{marginBottom:0},listStyle:"disc"}}}),p=t.div(({theme:o})=>({background:o.background.content,display:"flex",justifyContent:"center",padding:"4rem 20px",minHeight:"100vh",boxSizing:"border-box",[`@media (min-width: ${l}px)`]:{}})),f=({children:o})=>s(p,{className:"sbdocs sbdocs-wrapper",children:s(n,{className:"sbdocs sbdocs-content",children:o})});try{c.displayName="Title",c.__docgenInfo={description:"",displayName:"Title",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{g.displayName="Subtitle",g.__docgenInfo={description:"",displayName:"Subtitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{n.displayName="DocsContent",n.__docgenInfo={description:"",displayName:"DocsContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{p.displayName="DocsWrapper",p.__docgenInfo={description:"",displayName:"DocsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{f.displayName="DocsPageWrapper",f.__docgenInfo={description:"",displayName:"DocsPageWrapper",props:{}}}catch{}export{f as D,g as S,c as T};
//# sourceMappingURL=DocsPage-62b67e98.js.map
