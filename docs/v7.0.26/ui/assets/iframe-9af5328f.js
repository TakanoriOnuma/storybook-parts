import{j as a}from"./jsx-runtime-0f39435c.js";import{R as p}from"./index-6f814c40.js";import{e as m}from"./index-5a529529.js";import{Z as f}from"./index-90790cc0.js";const b=m.iframe({backgroundColor:"white",position:"absolute",display:"block",boxSizing:"content-box",height:"100%",width:"100%",border:"0 none",transition:"all .3s, background-position 0s, visibility 0s",backgroundPosition:"-1px -1px, -1px -1px, -1px -1px, -1px -1px"});function l(e){const{active:r,id:i,title:o,src:n,allowFullScreen:s,scale:d,...u}=e,t=p.useRef(null);return a(f.IFrame,{scale:d,active:r,iFrameRef:t,children:a(b,{"data-is-storybook":r?"true":"false",onLoad:c=>c.currentTarget.setAttribute("data-is-loaded","true"),id:i,title:o,src:n,allow:"clipboard-write;",allowFullScreen:s,ref:t,...u})})}try{l.displayName="IFrame",l.__docgenInfo={description:"",displayName:"IFrame",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},allowFullScreen:{defaultValue:null,description:"",name:"allowFullScreen",required:!1,type:{name:"boolean"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"number"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}}}}}catch{}export{l as I};
//# sourceMappingURL=iframe-9af5328f.js.map
