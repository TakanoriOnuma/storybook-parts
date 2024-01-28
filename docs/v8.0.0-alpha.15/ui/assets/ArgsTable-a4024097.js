import{R as t,r as E}from"./index-f1f2c4b1.js";import{u as Y,p as Q}from"./uniq-d9955a1e.js";import{n as a,m as Z}from"./index-4b2a7d13.js";import{c as S,d as ee}from"./polished.esm-e310f6d0.js";import{O as te}from"./index-b75c9059.js";import{t as N,I as V,u as ne,d as oe,L as I,h as re,R as ae}from"./index-a443495b.js";import{V as le,l as M,s as se,U as ie}from"./index-758f4e48.js";import{M as ce}from"./index.modern-a28060bf.js";import{_ as de}from"./iframe-14332c4c.js";import{O as L}from"./Object-e0f2a1e7.js";import{B as pe}from"./Boolean-a63c3b4a.js";import{D as ue}from"./Date-f9d82492.js";import{N as me}from"./Number-a23fefb8.js";import{O as C}from"./Options-cd78c11b.js";import{R as ge}from"./Range-a5dee546.js";import{T as fe}from"./Text-92f16433.js";import{F as ye}from"./Files-71f7b76b.js";import{E as be}from"./EmptyBlock-e1d254ca.js";const Ee=a.table(({theme:e})=>({"&&":{borderCollapse:"collapse",borderSpacing:0,border:"none",tr:{border:"none !important",background:"none"},"td, th":{padding:0,border:"none",width:"auto!important"},marginTop:0,marginBottom:0,"th:first-of-type, td:first-of-type":{paddingLeft:0},"th:last-of-type, td:last-of-type":{paddingRight:0},td:{paddingTop:0,paddingBottom:4,"&:not(:first-of-type)":{paddingLeft:10,paddingRight:0}},tbody:{boxShadow:"none",border:"none"},code:N({theme:e}),div:{span:{fontWeight:"bold"}},"& code":{margin:0,display:"inline-block",fontSize:e.typography.size.s1}}})),H=({tags:e})=>{const n=(e.params||[]).filter(i=>i.description),o=n.length!==0,r=e.deprecated!=null,m=e.returns!=null&&e.returns.description!=null;return!o&&!m&&!r?null:t.createElement(t.Fragment,null,t.createElement(Ee,null,t.createElement("tbody",null,r&&t.createElement("tr",{key:"deprecated"},t.createElement("td",{colSpan:2},t.createElement("strong",null,"Deprecated"),": ",e.deprecated.toString())),o&&n.map(i=>t.createElement("tr",{key:i.name},t.createElement("td",null,t.createElement("code",null,i.name)),t.createElement("td",null,i.description))),m&&t.createElement("tr",{key:"returns"},t.createElement("td",null,t.createElement("code",null,"Returns")),t.createElement("td",null,e.returns.description)))))};H.__docgenInfo={description:"",methods:[],displayName:"ArgJsDoc",props:{tags:{required:!0,tsType:{name:"JsDocTags"},description:""}}};const D=8,F=a.div(({isExpanded:e})=>({display:"flex",flexDirection:e?"column":"row",flexWrap:"wrap",alignItems:"flex-start",marginBottom:"-4px",minWidth:100})),he=a.span(N,({theme:e,simple:n=!1})=>({flex:"0 0 auto",fontFamily:e.typography.fonts.mono,fontSize:e.typography.size.s1,wordBreak:"break-word",whiteSpace:"normal",maxWidth:"100%",margin:0,marginRight:"4px",marginBottom:"4px",paddingTop:"2px",paddingBottom:"2px",lineHeight:"13px",...n&&{background:"transparent",border:"0 none",paddingLeft:0}})),xe=a.button(({theme:e})=>({fontFamily:e.typography.fonts.mono,color:e.color.secondary,marginBottom:"4px",background:"none",border:"none"})),Se=a.div(N,({theme:e})=>({fontFamily:e.typography.fonts.mono,color:e.color.secondary,fontSize:e.typography.size.s1,margin:0,whiteSpace:"nowrap",display:"flex",alignItems:"center"})),Te=a.div(({theme:e,width:n})=>({width:n,minWidth:200,maxWidth:800,padding:15,fontFamily:e.typography.fonts.mono,fontSize:e.typography.size.s1,boxSizing:"content-box","& code":{padding:"0 !important"}})),ke=a(V)({height:10,width:10,minWidth:10,marginLeft:4}),we=()=>t.createElement("span",null,"-"),U=({text:e,simple:n})=>t.createElement(he,{simple:n},e),Ce=Z(1e3)(e=>{const n=e.split(/\r?\n/);return`${Math.max(...n.map(o=>o.length))}ch`}),ve=e=>{if(!e)return[e];const o=e.split("|").map(r=>r.trim());return Y(o)},W=(e,n=!0)=>{let o=e;return n||(o=e.slice(0,D)),o.map(r=>t.createElement(U,{key:r,text:r===""?'""':r}))},Re=({value:e,initialExpandedArgs:n})=>{const{summary:o,detail:r}=e,[m,i]=E.useState(!1),[c,s]=E.useState(n||!1);if(o==null)return null;const d=typeof o.toString=="function"?o.toString():o;if(r==null){if(/[(){}[\]<>]/.test(d))return t.createElement(U,{text:d});const p=ve(d),u=p.length;return u>D?t.createElement(F,{isExpanded:c},W(p,c),t.createElement(xe,{onClick:()=>s(!c)},c?"Show less...":`Show ${u-D} more...`)):t.createElement(F,null,W(p))}return t.createElement(ne,{closeOnOutsideClick:!0,placement:"bottom",visible:m,onVisibleChange:l=>{i(l)},tooltip:t.createElement(Te,{width:Ce(r)},t.createElement(oe,{language:"jsx",format:!1},r))},t.createElement(Se,{className:"sbdocs-expandable"},t.createElement("span",null,d),t.createElement(ke,{icon:m?"arrowup":"arrowdown"})))},_=({value:e,initialExpandedArgs:n})=>e==null?t.createElement(we,null):t.createElement(Re,{value:e,initialExpandedArgs:n});_.__docgenInfo={description:"",methods:[],displayName:"ArgValue",props:{value:{required:!1,tsType:{name:"PropSummaryValue"},description:""},initialExpandedArgs:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=E.lazy(()=>de(()=>import("./Color-7bd34506.js"),["./Color-7bd34506.js","./index-f1f2c4b1.js","./index-c787bb78.js","./index-f10f74ef.js","./throttle-d46bc519.js","./isObjectLike-e57f4fa0.js","./isSymbol-ef7afaa8.js","./index-4b2a7d13.js","./index-a443495b.js","./iframe-14332c4c.js","./index-c74c9f7f.js","./index-5f16f6cc.js","./extends-98964cd2.js","./index-758f4e48.js","./index-b75c9059.js","./helpers-a9e07cde.js"],import.meta.url)),J=e=>t.createElement(E.Suspense,{fallback:t.createElement("div",null)},t.createElement(Ie,{...e}));J.__docgenInfo={description:"",methods:[],displayName:"ColorControl"};const Ae={array:L,object:L,boolean:pe,color:J,date:ue,number:me,check:C,"inline-check":C,radio:C,"inline-radio":C,select:C,"multi-select":C,range:ge,text:fe,file:ye},$=()=>t.createElement(t.Fragment,null,"-"),G=({row:e,arg:n,updateArgs:o,isHovered:r})=>{const{key:m,control:i}=e,[c,s]=E.useState(!1),[d,l]=E.useState({value:n});E.useEffect(()=>{c||l({value:n})},[c,n]);const p=E.useCallback(h=>(l({value:h}),o({[m]:h}),h),[o,m]),u=E.useCallback(()=>s(!1),[]),T=E.useCallback(()=>s(!0),[]);if(!i||i.disable)return r?t.createElement(I,{href:"https://storybook.js.org/docs/react/essentials/controls",target:"_blank",withArrow:!0},"Setup controls"):t.createElement($,null);const v={name:m,argType:e,value:d.value,onChange:p,onBlur:u,onFocus:T},k=Ae[i.type]||$;return t.createElement(k,{...v,...i,controlType:i.type})};G.__docgenInfo={description:"",methods:[],displayName:"ArgControl",props:{row:{required:!0,tsType:{name:"ArgType"},description:""},arg:{required:!0,tsType:{name:"any"},description:""},updateArgs:{required:!0,tsType:{name:"signature",type:"function",raw:"(args: Args) => void",signature:{arguments:[{type:{name:"Args"},name:"args"}],return:{name:"void"}}},description:""},isHovered:{required:!0,tsType:{name:"boolean"},description:""}}};const Be=a.span({fontWeight:"bold"}),_e=a.span(({theme:e})=>({color:e.color.negative,fontFamily:e.typography.fonts.mono,cursor:"help"})),qe=a.div(({theme:e})=>({"&&":{p:{margin:"0 0 10px 0"},a:{color:e.color.secondary}},code:{...N({theme:e}),fontSize:12,fontFamily:e.typography.fonts.mono},"& code":{margin:0,display:"inline-block"},"& pre > code":{whiteSpace:"pre-wrap"}})),Ne=a.div(({theme:e,hasDescription:n})=>({color:e.base==="light"?S(.1,e.color.defaultText):S(.2,e.color.defaultText),marginTop:n?4:0})),Oe=a.div(({theme:e,hasDescription:n})=>({color:e.base==="light"?S(.1,e.color.defaultText):S(.2,e.color.defaultText),marginTop:n?12:0,marginBottom:12})),De=a.td(({theme:e,expandable:n})=>({paddingLeft:n?"40px !important":"20px !important"})),R=e=>{var h;const[n,o]=E.useState(!1),{row:r,updateArgs:m,compact:i,expandable:c,initialExpandedArgs:s}=e,{name:d,description:l}=r,p=r.table||{},u=p.type||r.type,T=p.defaultValue||r.defaultValue,v=(h=r.type)==null?void 0:h.required,k=l!=null&&l!=="";return t.createElement("tr",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},t.createElement(De,{expandable:c},t.createElement(Be,null,d),v?t.createElement(_e,{title:"Required"},"*"):null),i?null:t.createElement("td",null,k&&t.createElement(qe,null,t.createElement(ce,null,l)),p.jsDocTags!=null?t.createElement(t.Fragment,null,t.createElement(Oe,{hasDescription:k},t.createElement(_,{value:u,initialExpandedArgs:s})),t.createElement(H,{tags:p.jsDocTags})):t.createElement(Ne,{hasDescription:k},t.createElement(_,{value:u,initialExpandedArgs:s}))),i?null:t.createElement("td",null,t.createElement(_,{value:T,initialExpandedArgs:s})),m?t.createElement("td",null,t.createElement(G,{...e,isHovered:n})):null)};R.__docgenInfo={description:"",methods:[],displayName:"ArgRow",props:{row:{required:!0,tsType:{name:"ArgType"},description:""},arg:{required:!0,tsType:{name:"any"},description:""},updateArgs:{required:!1,tsType:{name:"signature",type:"function",raw:"(args: Args) => void",signature:{arguments:[{type:{name:"Args"},name:"args"}],return:{name:"void"}}},description:""},compact:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},initialExpandedArgs:{required:!1,tsType:{name:"boolean"},description:""}}};const ze=a(V)(({theme:e})=>({marginRight:8,marginLeft:-10,marginTop:-2,height:12,width:12,color:e.base==="light"?S(.25,e.color.defaultText):S(.3,e.color.defaultText),border:"none",display:"inline-block"})),Le=a.span(({theme:e})=>({display:"flex",lineHeight:"20px",alignItems:"center"})),Fe=a.td(({theme:e})=>({position:"relative",letterSpacing:"0.35em",textTransform:"uppercase",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s1-1,color:e.base==="light"?S(.4,e.color.defaultText):S(.6,e.color.defaultText),background:`${e.background.app} !important`,"& ~ td":{background:`${e.background.app} !important`}})),We=a.td(({theme:e})=>({position:"relative",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,background:e.background.app})),$e=a.td(()=>({position:"relative"})),je=a.tr(({theme:e})=>({"&:hover > td":{backgroundColor:`${ee(.005,e.background.app)} !important`,boxShadow:`${e.color.mediumlight} 0 - 1px 0 0 inset`,cursor:"row-resize"}})),j=a.button(()=>({background:"none",border:"none",padding:"0",font:"inherit",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",width:"100%",color:"transparent",cursor:"row-resize !important"})),q=({level:e="section",label:n,children:o,initialExpanded:r=!0,colSpan:m=3})=>{const[i,c]=E.useState(r),s=e==="subsection"?We:Fe,d=(o==null?void 0:o.length)||0,l=e==="subsection"?`${d} item${d!==1?"s":""}`:"",p=i?"arrowdown":"arrowright",u=`${i?"Hide":"Show"} ${e==="subsection"?d:n} item${d!==1?"s":""}`;return t.createElement(t.Fragment,null,t.createElement(je,{title:u},t.createElement(s,{colSpan:1},t.createElement(j,{onClick:T=>c(!i),tabIndex:0},u),t.createElement(Le,null,t.createElement(ze,{icon:p}),n)),t.createElement($e,{colSpan:m-1},t.createElement(j,{onClick:T=>c(!i),tabIndex:-1,style:{outline:"none"}},u),i?null:l)),i?o:null)};q.__docgenInfo={description:"",methods:[],displayName:"SectionRow",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"union",raw:"'section' | 'subsection'",elements:[{name:"literal",value:"'section'"},{name:"literal",value:"'subsection'"}]},description:"",defaultValue:{value:"'section'",computed:!1}},initialExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};const B=a.div(({theme:e})=>({display:"flex",gap:16,borderBottom:`1px solid ${e.appBorderColor}`,"&:last-child":{borderBottom:0}})),y=a.div(({numColumn:e})=>({display:"flex",flexDirection:"column",flex:e||1,gap:5,padding:"12px 20px"})),g=a.div(({theme:e,width:n,height:o})=>({animation:`${e.animation.glow} 1.5s ease-in-out infinite`,background:e.appBorderColor,width:n||"100%",height:o||16,borderRadius:3})),b=[2,4,2,2],K=()=>t.createElement(t.Fragment,null,t.createElement(B,null,t.createElement(y,{numColumn:b[0]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[1]},t.createElement(g,{width:"30%"})),t.createElement(y,{numColumn:b[2]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[3]},t.createElement(g,{width:"60%"}))),t.createElement(B,null,t.createElement(y,{numColumn:b[0]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[1]},t.createElement(g,{width:"80%"}),t.createElement(g,{width:"30%"})),t.createElement(y,{numColumn:b[2]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[3]},t.createElement(g,{width:"60%"}))),t.createElement(B,null,t.createElement(y,{numColumn:b[0]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[1]},t.createElement(g,{width:"80%"}),t.createElement(g,{width:"30%"})),t.createElement(y,{numColumn:b[2]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[3]},t.createElement(g,{width:"60%"}))),t.createElement(B,null,t.createElement(y,{numColumn:b[0]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[1]},t.createElement(g,{width:"80%"}),t.createElement(g,{width:"30%"})),t.createElement(y,{numColumn:b[2]},t.createElement(g,{width:"60%"})),t.createElement(y,{numColumn:b[3]},t.createElement(g,{width:"60%"}))));K.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const Ve=a.div(({inAddonPanel:e,theme:n})=>({height:e?"100%":"auto",display:"flex",border:e?"none":`1px solid ${n.appBorderColor}`,borderRadius:e?0:n.appBorderRadius,padding:e?0:40,alignItems:"center",justifyContent:"center",flexDirection:"column",gap:15,background:n.background.content,boxShadow:"rgba(0, 0, 0, 0.10) 0 1px 3px 0"})),Me=a.div({display:"flex",flexDirection:"column",gap:4,maxWidth:415}),He=a.div(({theme:e})=>({fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,textAlign:"center",color:e.textColor})),Ue=a.div(({theme:e})=>({fontWeight:e.typography.weight.regular,fontSize:e.typography.size.s2-1,textAlign:"center",color:e.textMutedColor})),Je=a.div(({theme:e})=>({display:"flex",fontSize:e.typography.size.s2-1,gap:25})),Ge=a.div(({theme:e})=>({width:1,height:16,backgroundColor:e.appBorderColor})),P=({inAddonPanel:e})=>{const[n,o]=E.useState(!0);return E.useEffect(()=>{const r=setTimeout(()=>{o(!1)},100);return()=>clearTimeout(r)},[]),n?null:t.createElement(Ve,{inAddonPanel:e},t.createElement(Me,null,t.createElement(He,null,e?"Interactive story playground":"Args table with interactive controls couldn't be auto-generated"),t.createElement(Ue,null,"Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")),t.createElement(Je,null,e&&t.createElement(t.Fragment,null,t.createElement(I,{href:"https://youtu.be/0gOfS6K0x0E",target:"_blank",withArrow:!0},t.createElement(le,null)," Watch 5m video"),t.createElement(Ge,null),t.createElement(I,{href:"https://storybook.js.org/docs/essentials/controls",target:"_blank",withArrow:!0},t.createElement(M,null)," Read docs")),!e&&t.createElement(I,{href:"https://storybook.js.org/docs/essentials/controls",target:"_blank",withArrow:!0},t.createElement(se,null)," Learn how to set that up")))};P.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{inAddonPanel:{required:!1,tsType:{name:"boolean"},description:""}}};const{once:Ke}=__STORYBOOK_MODULE_CLIENT_LOGGER__,Pe=a.table(({theme:e,compact:n,inAddonPanel:o})=>({"&&":{borderSpacing:0,color:e.color.defaultText,"td, th":{padding:0,border:"none",verticalAlign:"top",textOverflow:"ellipsis"},fontSize:e.typography.size.s2-1,lineHeight:"20px",textAlign:"left",width:"100%",marginTop:o?0:25,marginBottom:o?0:40,"thead th:first-of-type, td:first-of-type":{width:"25%"},"th:first-of-type, td:first-of-type":{paddingLeft:20},"th:nth-of-type(2), td:nth-of-type(2)":{...n?null:{width:"35%"}},"td:nth-of-type(3)":{...n?null:{width:"15%"}},"th:last-of-type, td:last-of-type":{paddingRight:20,...n?null:{width:"25%"}},th:{color:e.base==="light"?S(.25,e.color.defaultText):S(.45,e.color.defaultText),paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15},td:{paddingTop:"10px",paddingBottom:"10px","&:not(:first-of-type)":{paddingLeft:15,paddingRight:15},"&:last-of-type":{paddingRight:20}},marginLeft:o?0:1,marginRight:o?0:1,tbody:{...o?null:{filter:e.base==="light"?"drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))":"drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))"},"> tr > *":{background:e.background.content,borderTop:`1px solid ${e.appBorderColor}`},...o?null:{"> tr:first-of-type > *":{borderBlockStart:`1px solid ${e.appBorderColor}`},"> tr:last-of-type > *":{borderBlockEnd:`1px solid ${e.appBorderColor}`},"> tr > *:first-of-type":{borderInlineStart:`1px solid ${e.appBorderColor}`},"> tr > *:last-of-type":{borderInlineEnd:`1px solid ${e.appBorderColor}`},"> tr:first-of-type > td:first-of-type":{borderTopLeftRadius:e.appBorderRadius},"> tr:first-of-type > td:last-of-type":{borderTopRightRadius:e.appBorderRadius},"> tr:last-of-type > td:first-of-type":{borderBottomLeftRadius:e.appBorderRadius},"> tr:last-of-type > td:last-of-type":{borderBottomRightRadius:e.appBorderRadius}}}}})),Xe=a(re)(({theme:e})=>({color:e.barTextColor,margin:"-4px -12px -4px 0"})),Ye=a.span({display:"flex",justifyContent:"space-between"});var Qe=(e=>(e.NO_COMPONENT="No component found.",e.ARGS_UNSUPPORTED="Args unsupported. See Args documentation for your framework.",e))(Qe||{});const Ze={alpha:(e,n)=>e.name.localeCompare(n.name),requiredFirst:(e,n)=>{var o,r;return+!!((o=n.type)!=null&&o.required)-+!!((r=e.type)!=null&&r.required)||e.name.localeCompare(n.name)},none:void 0},et=(e,n)=>{const o={ungrouped:[],ungroupedSubsections:{},sections:{}};if(!e)return o;Object.entries(e).forEach(([c,s])=>{const{category:d,subcategory:l}=(s==null?void 0:s.table)||{};if(d){const p=o.sections[d]||{ungrouped:[],subsections:{}};if(!l)p.ungrouped.push({key:c,...s});else{const u=p.subsections[l]||[];u.push({key:c,...s}),p.subsections[l]=u}o.sections[d]=p}else if(l){const p=o.ungroupedSubsections[l]||[];p.push({key:c,...s}),o.ungroupedSubsections[l]=p}else o.ungrouped.push({key:c,...s})});const r=Ze[n],m=c=>r?Object.keys(c).reduce((s,d)=>({...s,[d]:c[d].sort(r)}),{}):c;return{ungrouped:o.ungrouped.sort(r),ungroupedSubsections:m(o.ungroupedSubsections),sections:Object.keys(o.sections).reduce((c,s)=>({...c,[s]:{ungrouped:o.sections[s].ungrouped.sort(r),subsections:m(o.sections[s].subsections)}}),{})}},tt=(e,n,o)=>{try{return te(e,n,o)}catch(r){return Ke.warn(r.message),!1}},nt=e=>{const{updateArgs:n,resetArgs:o,compact:r,inAddonPanel:m,initialExpandedArgs:i,sort:c="none",isLoading:s}=e;if("error"in e){const{error:f}=e;return t.createElement(be,null,f," ",t.createElement(I,{href:"http://storybook.js.org/docs/",target:"_blank",withArrow:!0},t.createElement(M,null)," Read the docs"))}if(s)return t.createElement(K,null);const{rows:d,args:l,globals:p}="rows"in e&&e,u=et(Q(d,f=>{var w;return!((w=f==null?void 0:f.table)!=null&&w.disable)&&tt(f,l||{},p||{})}),c),T=u.ungrouped.length===0,v=Object.entries(u.sections).length===0,k=Object.entries(u.ungroupedSubsections).length===0;if(T&&v&&k)return t.createElement(P,{inAddonPanel:m});let h=1;n&&(h+=1),r||(h+=2);const z=Object.keys(u.sections).length>0,A={updateArgs:n,compact:r,inAddonPanel:m,initialExpandedArgs:i};return t.createElement(ae,null,t.createElement(Pe,{compact:r,inAddonPanel:m,className:"docblock-argstable sb-unstyled"},t.createElement("thead",{className:"docblock-argstable-head"},t.createElement("tr",null,t.createElement("th",null,t.createElement("span",null,"Name")),r?null:t.createElement("th",null,t.createElement("span",null,"Description")),r?null:t.createElement("th",null,t.createElement("span",null,"Default")),n?t.createElement("th",null,t.createElement(Ye,null,"Control"," ",!s&&o&&t.createElement(Xe,{onClick:()=>o(),title:"Reset controls"},t.createElement(ie,{"aria-hidden":!0})))):null)),t.createElement("tbody",{className:"docblock-argstable-body"},u.ungrouped.map(f=>t.createElement(R,{key:f.key,row:f,arg:l&&l[f.key],...A})),Object.entries(u.ungroupedSubsections).map(([f,w])=>t.createElement(q,{key:f,label:f,level:"subsection",colSpan:h},w.map(x=>t.createElement(R,{key:x.key,row:x,arg:l&&l[x.key],expandable:z,...A})))),Object.entries(u.sections).map(([f,w])=>t.createElement(q,{key:f,label:f,level:"section",colSpan:h},w.ungrouped.map(x=>t.createElement(R,{key:x.key,row:x,arg:l&&l[x.key],...A})),Object.entries(w.subsections).map(([x,X])=>t.createElement(q,{key:x,label:x,level:"subsection",colSpan:h},X.map(O=>t.createElement(R,{key:O.key,row:O,arg:l&&l[O.key],expandable:z,...A})))))))))};nt.__docgenInfo={description:`Display the props for a component as a props table. Each row is a collection of
ArgDefs, usually derived from docgen info for the component.`,methods:[],displayName:"ArgsTable",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},updateArgs:{required:!1,tsType:{name:"signature",type:"function",raw:"(args: Args) => void",signature:{arguments:[{type:{name:"Args"},name:"args"}],return:{name:"void"}}},description:""},resetArgs:{required:!1,tsType:{name:"signature",type:"function",raw:"(argNames?: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"argNames"}],return:{name:"void"}}},description:""},compact:{required:!1,tsType:{name:"boolean"},description:""},inAddonPanel:{required:!1,tsType:{name:"boolean"},description:""},initialExpandedArgs:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},sort:{required:!1,tsType:{name:"union",raw:"'alpha' | 'requiredFirst' | 'none'",elements:[{name:"literal",value:"'alpha'"},{name:"literal",value:"'requiredFirst'"},{name:"literal",value:"'none'"}]},description:""}}};export{nt as A,q as S,Pe as T,Qe as a,R as b};
//# sourceMappingURL=ArgsTable-a4024097.js.map
