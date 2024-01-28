import{r as i,R as u}from"./index-f1f2c4b1.js";import{n as p}from"./index-4b2a7d13.js";import{F as d}from"./index-a443495b.js";import{a as c}from"./helpers-a9e07cde.js";const f=p(d.Input)({padding:10});function g(t){t.forEach(e=>{e.startsWith("blob:")&&URL.revokeObjectURL(e)})}const y=({onChange:t,name:e,accept:s="image/*",value:n})=>{const r=i.useRef(null);function o(a){if(!a.target.files)return;const l=Array.from(a.target.files).map(m=>URL.createObjectURL(m));t(l),g(n)}return i.useEffect(()=>{n==null&&r.current&&(r.current.value=null)},[n,e]),u.createElement(f,{ref:r,id:c(e),type:"file",name:e,multiple:!0,onChange:o,accept:s,size:"flex"})};y.__docgenInfo={description:"",methods:[],displayName:"FilesControl",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},argType:{required:!1,tsType:{name:"ArgType"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => T | void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"union",raw:"T | void",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"void"}]}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: any) => void",signature:{arguments:[{type:{name:"any"},name:"evt"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: any) => void",signature:{arguments:[{type:{name:"any"},name:"evt"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:`The accept attribute value is a string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers.
@example
*\\/*
@example
.webm,video/webm
@example
.doc,.docx,application/msword
@defaultValue \`image/*\`
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`,defaultValue:{value:"'image/*'",computed:!1}}}};export{y as F};
//# sourceMappingURL=Files-71f7b76b.js.map
