import{j as a,a as d,F as m}from"./jsx-runtime-0f39435c.js";import{s as f}from"./index-90790cc0.js";import{H as y}from"./Markdown-3259d281.js";import{A as _}from"./Anchor-45f4b247.js";import{D as b}from"./Description-37e083f0.js";import{C as h}from"./Canvas-19a6efbf.js";import{u as g}from"./useOf-fa9945b9.js";const s=({children:e,disableAnchor:r})=>{if(r||typeof e!="string")return a(f,{children:e});const o=e.toLowerCase().replace(/[^a-z0-9]/gi,"-");return a(y,{as:"h3",id:o,children:e})};try{s.displayName="Subheading",s.__docgenInfo={description:"",displayName:"Subheading",props:{disableAnchor:{defaultValue:null,description:"",name:"disableAnchor",required:!1,type:{name:"boolean"}}}}}catch{}const p=({of:e,expanded:r=!0,withToolbar:o=!1,__forceInitialArgs:n=!1,__primary:c=!1})=>{var i,l;const{story:t}=g(e||"story",["story"]),u=((l=(i=t.parameters.docs)==null?void 0:i.canvas)==null?void 0:l.withToolbar)??o;return d(_,{storyId:t.id,children:[r&&d(m,{children:[a(s,{children:t.name}),a(b,{of:e})]}),a(h,{of:e,withToolbar:u,story:{__forceInitialArgs:n,__primary:c},source:{__forceInitialArgs:n}})]})};try{p.displayName="DocsStory",p.__docgenInfo={description:"",displayName:"DocsStory",props:{of:{defaultValue:null,description:"",name:"of",required:!0,type:{name:"any"}},expanded:{defaultValue:{value:"true"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},withToolbar:{defaultValue:null,description:"",name:"withToolbar",required:!1,type:{name:"boolean"}},__forceInitialArgs:{defaultValue:{value:"false"},description:"",name:"__forceInitialArgs",required:!1,type:{name:"boolean"}},__primary:{defaultValue:{value:"false"},description:"",name:"__primary",required:!1,type:{name:"boolean"}}}}}catch{}export{p as D};
//# sourceMappingURL=DocsStory-83af1a8b.js.map