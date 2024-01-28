import{R as f}from"./index-f1f2c4b1.js";import{u as l}from"./useOf-fbc0458b.js";import{M as u}from"./Markdown-a9cd2ec9.js";const y=e=>{var o,s,r,a,i,p,c,m;switch(e.type){case"story":return((s=(o=e.story.parameters.docs)==null?void 0:o.description)==null?void 0:s.story)||null;case"meta":{const{parameters:t,component:n}=e.preparedMeta,d=(a=(r=t.docs)==null?void 0:r.description)==null?void 0:a.component;return d||((p=(i=t.docs)==null?void 0:i.extractComponentDescription)==null?void 0:p.call(i,n,{component:n,parameters:t}))||null}case"component":{const{component:t,projectAnnotations:{parameters:n}}=e;return((m=(c=n.docs)==null?void 0:c.extractComponentDescription)==null?void 0:m.call(c,t,{component:t,parameters:n}))||null}default:throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`)}},h=e=>{const{of:o}=e;if("of"in e&&o===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");const s=l(o||"meta"),r=y(s);return r?f.createElement(u,null,r):null};h.__docgenInfo={description:"",methods:[],displayName:"DescriptionContainer",props:{of:{required:!1,tsType:{name:"Parameters[0]",raw:"Parameters<DocsContextProps['resolveOf']>[0]"},description:`Specify where to get the description from. Can be a component, a CSF file or a story.
If not specified, the description will be extracted from the meta of the attached CSF file.`}}};export{h as D};
//# sourceMappingURL=Description-504419ff.js.map
