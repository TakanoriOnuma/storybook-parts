import{j as t,a}from"./jsx-runtime-31019b9d.js";import{c as n}from"./polished.esm-b305131d.js";import{n as r}from"./index-9e46a6e4.js";import{R as w}from"./index-0d90a496.js";import{g as v}from"./BlockBackgroundStyles-8d78b434.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";const S=r.div(({theme:e})=>({fontWeight:e.typography.weight.bold,color:e.color.defaultText})),I=r.div(({theme:e})=>({color:e.base==="light"?n(.2,e.color.defaultText):n(.6,e.color.defaultText)})),_=r.div({flex:"0 0 30%",lineHeight:"20px",marginTop:5}),A=r.div(({theme:e})=>({flex:1,textAlign:"center",fontFamily:e.typography.fonts.mono,fontSize:e.typography.size.s1,lineHeight:1,overflow:"hidden",color:e.base==="light"?n(.4,e.color.defaultText):n(.6,e.color.defaultText),"> div":{display:"inline-block",overflow:"hidden",maxWidth:"100%",textOverflow:"ellipsis"},span:{display:"block",marginTop:2}})),p=r.div({display:"flex",flexDirection:"row"}),k=r.div(({background:e})=>({position:"relative",flex:1,"&::before":{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:e,content:'""'}})),m=r.div(({theme:e})=>({...v(e),display:"flex",flexDirection:"row",height:50,marginBottom:5,overflow:"hidden",backgroundColor:"white",backgroundImage:"repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",backgroundClip:"padding-box"})),g=r.div({display:"flex",flexDirection:"column",flex:1,position:"relative",marginBottom:30}),D=r.div({flex:1,display:"flex",flexDirection:"row"}),T=r.div({display:"flex",alignItems:"flex-start"}),G=r.div({flex:"0 0 30%"}),W=r.div({flex:1}),N=r.div(({theme:e})=>({display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:20,fontWeight:e.typography.weight.bold,color:e.base==="light"?n(.4,e.color.defaultText):n(.6,e.color.defaultText)})),P=r.div(({theme:e})=>({fontSize:e.typography.size.s2,lineHeight:"20px",display:"flex",flexDirection:"column"}));function h(e,o){return t(k,{title:e,background:e},`${e}-${o}`)}function u(e,o,l){return t(A,{title:e,children:a("div",{children:[e,l&&t("span",{children:l})]})},`${e}-${o}`)}function O(e){return Array.isArray(e)?a(g,{children:[t(m,{children:e.map((o,l)=>h(o,l))}),t(p,{children:e.map((o,l)=>u(o,l))})]}):a(g,{children:[t(m,{children:Object.values(e).map((o,l)=>h(o,l))}),t(p,{children:Object.keys(e).map((o,l)=>u(o,l,e[o]))})]})}const i=({title:e,subtitle:o,colors:l})=>a(T,{children:[a(_,{children:[t(S,{children:e}),t(I,{children:o})]}),t(D,{children:O(l)})]}),c=({children:e,...o})=>t(w,{children:a(P,{...o,className:"docblock-colorpalette sb-unstyled",children:[a(N,{children:[t(G,{children:"Name"}),t(W,{children:"Swatches"})]}),e]})});try{i.displayName="ColorItem",i.__docgenInfo={description:"A single color row your styleguide showing title, subtitle and one or more colors, used\nas a child of `ColorPalette`.",displayName:"ColorItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}}}}}catch{}try{c.displayName="ColorPalette",c.__docgenInfo={description:"Styleguide documentation for colors, including names, captions, and color swatches,\nall specified as `ColorItem` children of this wrapper component.",displayName:"ColorPalette",props:{}}}catch{}const M={component:c},s=()=>a(c,{children:[t(i,{title:"theme.color.greyscale",subtitle:"Some of the greys",colors:["#FFFFFF","#F8F8F8","#F3F3F3"]}),t(i,{title:"theme.color.primary",subtitle:"Coral",colors:["#FF4785"]}),t(i,{title:"theme.color.secondary",subtitle:"Ocean",colors:["#1EA7FD"]}),t(i,{title:"theme.color.positive",subtitle:"Green",colors:["rgba(102,191,60,1)","rgba(102,191,60,.8)","rgba(102,191,60,.6)","rgba(102,191,60,.3)"]}),t(i,{title:"gradient",subtitle:"Grayscale",colors:["linear-gradient(to right,white,black)"]})]}),d=()=>a(c,{children:[t(i,{title:"theme.color.greyscale",subtitle:"Some of the greys",colors:{White:"#FFFFFF",Alabaster:"#F8F8F8",Concrete:"#F3F3F3"}}),t(i,{title:"theme.color.primary",subtitle:"Coral",colors:{WildWatermelon:"#FF4785"}}),t(i,{title:"theme.color.secondary",subtitle:"Ocean",colors:{DodgerBlue:"#1EA7FD"}}),t(i,{title:"theme.color.positive",subtitle:"Green",colors:{Apple:"rgba(102,191,60,1)",Apple80:"rgba(102,191,60,.8)",Apple60:"rgba(102,191,60,.6)",Apple30:"rgba(102,191,60,.3)"}}),t(i,{title:"gradient",subtitle:"Grayscale",colors:{Gradient:"linear-gradient(to right,white,black)"}})]});var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <ColorPalette>
    <ColorItem title="theme.color.greyscale" subtitle="Some of the greys" colors={['#FFFFFF', '#F8F8F8', '#F3F3F3']} />
    <ColorItem title="theme.color.primary" subtitle="Coral" colors={['#FF4785']} />
    <ColorItem title="theme.color.secondary" subtitle="Ocean" colors={['#1EA7FD']} />
    <ColorItem title="theme.color.positive" subtitle="Green" colors={['rgba(102,191,60,1)', 'rgba(102,191,60,.8)', 'rgba(102,191,60,.6)', 'rgba(102,191,60,.3)']} />
    <ColorItem title="gradient" subtitle="Grayscale" colors={['linear-gradient(to right,white,black)']} />
  </ColorPalette>`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var F,x,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`() => <ColorPalette>
    <ColorItem title="theme.color.greyscale" subtitle="Some of the greys" colors={{
    White: '#FFFFFF',
    Alabaster: '#F8F8F8',
    Concrete: '#F3F3F3'
  }} />
    <ColorItem title="theme.color.primary" subtitle="Coral" colors={{
    WildWatermelon: '#FF4785'
  }} />
    <ColorItem title="theme.color.secondary" subtitle="Ocean" colors={{
    DodgerBlue: '#1EA7FD'
  }} />
    <ColorItem title="theme.color.positive" subtitle="Green" colors={{
    Apple: 'rgba(102,191,60,1)',
    Apple80: 'rgba(102,191,60,.8)',
    Apple60: 'rgba(102,191,60,.6)',
    Apple30: 'rgba(102,191,60,.3)'
  }} />
    <ColorItem title="gradient" subtitle="Grayscale" colors={{
    Gradient: 'linear-gradient(to right,white,black)'
  }} />
  </ColorPalette>`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Q=["DefaultStyle","NamedColors"];export{s as DefaultStyle,d as NamedColors,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=ColorPalette.stories-5739d20c.js.map