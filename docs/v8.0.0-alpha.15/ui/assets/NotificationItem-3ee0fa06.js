import{R as e}from"./index-f1f2c4b1.js";import{L as d}from"./index-0a25eb6d.js";import{n as o,u as g}from"./index-4b2a7d13.js";import{h as f,I as x}from"./index-a443495b.js";import{c as h}from"./polished.esm-e310f6d0.js";import{b as u}from"./index-758f4e48.js";const p=o.div(({theme:t})=>({position:"relative",display:"flex",padding:15,width:280,borderRadius:4,alignItems:"center",background:t.base==="light"?"hsla(203, 50%, 20%, .97)":"hsla(203, 30%, 95%, .97)",boxShadow:"0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",color:t.color.inverseText,textDecoration:"none"})),b=o(p)(()=>({transition:"all 150ms ease-out",transform:"translate3d(0, 0, 0)","&:hover":{transform:"translate3d(0, -3px, 0)",boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"},"&:active":{transform:"translate3d(0, 0, 0)",boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"},"&:focus":{boxShadow:"0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"}})),v=b.withComponent(d),w=o.div(()=>({display:"flex",marginRight:10,alignItems:"center"})),I=o.div(()=>({width:"100%",display:"flex",flexDirection:"column"})),y=o.div(({theme:t,hasIcon:i})=>({height:"100%",width:i?205:230,alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:t.typography.size.s1,lineHeight:"16px",fontWeight:t.typography.weight.bold})),E=o.div(({theme:t})=>({color:h(.25,t.color.inverseText),fontSize:t.typography.size.s1-1,lineHeight:"14px",marginTop:2})),c=({icon:t,content:{headline:i,subHeadline:n}})=>{const a=g(),r=a.base==="dark"?a.color.mediumdark:a.color.mediumlight;return e.createElement(e.Fragment,null,!t||e.createElement(w,null,e.createElement(x,{icon:t.name,width:16,height:16,color:t.color||r})),e.createElement(I,null,e.createElement(y,{title:i,hasIcon:!!t},i),n&&e.createElement(E,null,n)))},S=o(f)(({theme:t})=>({alignSelf:"center",marginTop:0,color:t.base==="light"?"rgba(255,255,255,0.7)":" #999999"})),l=({onDismiss:t})=>e.createElement(S,{title:"Dismiss notification",onClick:i=>{i.preventDefault(),t()}},e.createElement(u,{size:12}));o.div({height:48});const N=({notification:{content:t,link:i,onClear:n,id:a,icon:r},onDismissNotification:m})=>{const s=()=>{m(a),n&&n({dismissed:!0})};return i?e.createElement(v,{to:i},e.createElement(c,{icon:r,content:t}),e.createElement(l,{onDismiss:s})):e.createElement(p,null,e.createElement(c,{icon:r,content:t}),e.createElement(l,{onDismiss:s}))};N.__docgenInfo={description:"",methods:[],displayName:"NotificationItem",props:{notification:{required:!0,tsType:{name:"State['notifications'][0]",raw:"State['notifications'][0]"},description:""},onDismissNotification:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{N};
//# sourceMappingURL=NotificationItem-3ee0fa06.js.map