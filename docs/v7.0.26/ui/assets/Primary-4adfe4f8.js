import{j as s}from"./jsx-runtime-0f39435c.js";import{r as d}from"./index-6f814c40.js";import{d as i}from"./index-356e4a49.js";import{D as n}from"./DocsContext-001c90b3.js";import{D as m}from"./DocsStory-83af1a8b.js";const{deprecate:c}=__STORYBOOK_MODULE_CLIENT_LOGGER__,t=({name:r})=>{const o=d.useContext(n);r&&c(i`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);const a=r&&o.storyIdByName(r),e=o.storyById(a);return e?s(m,{of:e.moduleExport,expanded:!1,__primary:!0,withToolbar:!0}):null};try{t.displayName="Primary",t.__docgenInfo={description:"",displayName:"Primary",props:{name:{defaultValue:null,description:"@deprecated Primary block should only be used to render the primary story, which is automatically found.",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{t as P};
//# sourceMappingURL=Primary-4adfe4f8.js.map