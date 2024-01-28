import{R as t}from"./index-f1f2c4b1.js";import{n}from"./index-4b2a7d13.js";import{L as s}from"./link-e0f662bb.js";const u=n.div(({theme:e})=>({fontWeight:e.typography.weight.bold})),d=n.span(),p=n.div(({theme:e})=>({marginTop:8,textAlign:"center","> *":{margin:"0 8px",fontWeight:e.typography.weight.bold}})),c=n.div(({theme:e})=>({color:e.color.defaultText,lineHeight:"18px"})),m=n.div({padding:15,width:280,boxSizing:"border-box"}),i=({title:e,desc:l,links:r})=>t.createElement(m,null,t.createElement(c,null,e&&t.createElement(u,null,e),l&&t.createElement(d,null,l)),r&&t.createElement(p,null,r.map(({title:a,...o})=>t.createElement(s,{...o,key:a},a))));i.defaultProps={title:null,desc:null,links:null};i.__docgenInfo={description:"",methods:[],displayName:"TooltipMessage",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},desc:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:`{
  title: string;
  href?: string;
  onClick?: () => void;
}[]`},description:"",defaultValue:{value:"null",computed:!1}}}};export{i as T};
//# sourceMappingURL=TooltipMessage-8ac9b3ce.js.map
