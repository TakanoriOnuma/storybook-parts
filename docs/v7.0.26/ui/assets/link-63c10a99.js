import{j as t,a as f}from"./jsx-runtime-0f39435c.js";import{e as n}from"./index-5a529529.js";import{a}from"./polished.esm-ebce2d70.js";import{I as p}from"./icon-f65261a7.js";const m=0,v=e=>e.button===m&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,g=(e,l)=>{v(e)&&(e.preventDefault(),l(e))},y=n.span(({withArrow:e})=>e?{"> svg:last-of-type":{height:"0.7em",width:"0.7em",marginRight:0,marginLeft:"0.25em",bottom:"auto",verticalAlign:"inherit"}}:{},({containsIcon:e})=>e?{svg:{height:"1em",width:"1em",verticalAlign:"middle",position:"relative",bottom:0,marginRight:0}}:{}),h=n.a(({theme:e})=>({display:"inline-block",transition:"all 150ms ease-out",textDecoration:"none",color:e.color.secondary,"&:hover, &:focus":{cursor:"pointer",color:a(.07,e.color.secondary),"svg path":{fill:a(.07,e.color.secondary)}},"&:active":{color:a(.1,e.color.secondary),"svg path":{fill:a(.1,e.color.secondary)}},svg:{display:"inline-block",height:"1em",width:"1em",verticalAlign:"text-top",position:"relative",bottom:"-0.125em",marginRight:"0.4em","& path":{fill:e.color.secondary}}}),({theme:e,secondary:l,tertiary:r})=>{let o;return l&&(o=[e.textMutedColor,e.color.dark,e.color.darker]),r&&(o=[e.color.dark,e.color.darkest,e.textMutedColor]),o?{color:o[0],"svg path":{fill:o[0]},"&:hover":{color:o[1],"svg path":{fill:o[1]}},"&:active":{color:o[2],"svg path":{fill:o[2]}}}:{}},({nochrome:e})=>e?{color:"inherit","&:hover, &:active":{color:"inherit",textDecoration:"underline"}}:{},({theme:e,inverse:l})=>l?{color:e.color.lightest,"svg path":{fill:e.color.lightest},"&:hover":{color:e.color.lighter,"svg path":{fill:e.color.lighter}},"&:active":{color:e.color.light,"svg path":{fill:e.color.light}}}:{},({isButton:e})=>e?{border:0,borderRadius:0,background:"none",padding:0,fontSize:"inherit"}:{}),i=({cancel:e,children:l,onClick:r,withArrow:o,containsIcon:s,className:c,...d})=>t(h,{...d,onClick:r&&e?u=>g(u,r):r,className:c,children:f(y,{withArrow:o,containsIcon:s,children:[l,o&&t(p,{icon:"arrowright"})]})});i.defaultProps={cancel:!0,className:void 0,style:void 0,onClick:void 0,withArrow:!1,containsIcon:!1};try{i.displayName="Link",i.__docgenInfo={description:"",displayName:"Link",props:{cancel:{defaultValue:{value:"true"},description:"",name:"cancel",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"undefined"},description:"",name:"style",required:!1,type:{name:"object & CSSProperties"}},onClick:{defaultValue:{value:"undefined"},description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) & MouseEventHandler<HTMLAnchorElement>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},withArrow:{defaultValue:{value:"false"},description:"",name:"withArrow",required:!1,type:{name:"boolean"}},containsIcon:{defaultValue:{value:"false"},description:"",name:"containsIcon",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},tertiary:{defaultValue:null,description:"",name:"tertiary",required:!1,type:{name:"boolean"}},nochrome:{defaultValue:null,description:"",name:"nochrome",required:!1,type:{name:"boolean"}},inverse:{defaultValue:null,description:"",name:"inverse",required:!1,type:{name:"boolean"}},isButton:{defaultValue:null,description:"",name:"isButton",required:!1,type:{name:"boolean"}}}}}catch{}export{i as L};
//# sourceMappingURL=link-63c10a99.js.map
