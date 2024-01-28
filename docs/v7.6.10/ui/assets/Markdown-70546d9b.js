import{j as n,a as b}from"./jsx-runtime-31019b9d.js";import{M as T}from"./index.modern-47b9f3ba.js";import{d as A}from"./index-356e4a49.js";import{r as m,R as E}from"./index-9f32f44c.js";import{C as k,o as R,p as O,I}from"./index-0d90a496.js";import{n as x}from"./index-9e46a6e4.js";import{D as d}from"./DocsContext-57fe6f9a.js";import{S as N}from"./Source-9e9bdbea.js";const{NAVIGATE_URL:w}=__STORYBOOK_MODULE_CORE_EVENTS__,{global:v}=__STORYBOOK_MODULE_GLOBAL__,{document:S}=v,h=e=>{if(typeof e!="function")throw new Error(`Expected story function, got: ${e}`);return e},g=e=>{const{children:t,...r}=e,o=E.useContext(d);return n(d.Provider,{value:{...o,...r},children:t})},l=({className:e,children:t,...r})=>{if(typeof e!="string"&&(typeof t!="string"||!t.match(/[\n\r]/g)))return n(k,{children:t});const o=e&&e.split("-");return n(N,{language:o&&o[1]||"plaintext",format:!1,code:t,...r})};function f(e,t){e.channel.emit(w,t)}const u=R.a,V=({hash:e,children:t})=>{const r=m.useContext(d);return n(u,{href:e,target:"_self",onClick:o=>{const i=e.substring(1);S.getElementById(i)&&f(r,e)},children:t})},p=e=>{const{href:t,target:r,children:o,...i}=e,s=m.useContext(d);if(t){if(t.startsWith("#"))return n(V,{hash:t,children:o});if(r!=="_blank"&&!t.startsWith("https://"))return n(u,{href:t,onClick:a=>{a.button===0&&!a.altKey&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&(a.preventDefault(),f(s,a.currentTarget.getAttribute("href")))},target:r,...i,children:o})}return n(u,{...e})},C=["h1","h2","h3","h4","h5","h6"],q=C.reduce((e,t)=>({...e,[t]:x(t)({"& svg":{position:"relative",top:"-0.1em",visibility:"hidden"},"&:hover svg":{visibility:"visible"}})}),{}),F=x.a(()=>({float:"left",lineHeight:"inherit",paddingRight:"10px",marginLeft:"-24px",color:"inherit"})),P=({as:e,id:t,children:r,...o})=>{const i=m.useContext(d),s=q[e],a=`#${t}`;return b(s,{id:t,...o,children:[n(F,{"aria-hidden":"true",href:a,tabIndex:-1,target:"_self",onClick:c=>{S.getElementById(t)&&f(i,a)},children:n(I,{icon:"link"})}),r]})},y=e=>{const{as:t,id:r,children:o,...i}=e;if(r)return n(P,{as:t,id:r,...i,children:o});const s=t,{as:a,...c}=e;return n(s,{...O(c,t)})},H=C.reduce((e,t)=>({...e,[t]:r=>n(y,{as:t,...r})}),{});try{h.displayName="assertIsFn",h.__docgenInfo={description:"",displayName:"assertIsFn",props:{}}}catch{}try{g.displayName="AddContext",g.__docgenInfo={description:"",displayName:"AddContext",props:{referenceMeta:{defaultValue:null,description:"Register a CSF file that this docs entry uses.\nUsed by the `<Meta of={} />` block to attach, and the `<Story meta={} />` bloc to reference",name:"referenceMeta",required:!0,type:{name:"(metaExports: ModuleExports, attach: boolean) => void"}},resolveOf:{defaultValue:null,description:"Find a component, meta or story object from the direct export(s) from the CSF file.\nThis is the API that drives the `of={}` syntax.",name:"resolveOf",required:!0,type:{name:"<TType extends ResolvedModuleExportType>(moduleExportOrType: any, validTypes?: TType[] | undefined) => ResolvedModuleExportFromType<TType, Renderer>"}},storyIdByName:{defaultValue:null,description:`Find a story's id from the name of the story.
This is primarily used by the \`<Story name={} /> block.
Note that the story must be part of the primary CSF file of the docs entry.`,name:"storyIdByName",required:!0,type:{name:"(storyName: string) => string"}},storyById:{defaultValue:null,description:`Syncronously find a story by id (if the id is not provided, this will look up the primary
story in the CSF file, if such a file exists).`,name:"storyById",required:!0,type:{name:"(id?: string | undefined) => PreparedStory<Renderer>"}},componentStories:{defaultValue:null,description:"Syncronously find all stories of the component referenced by the CSF file.",name:"componentStories",required:!0,type:{name:"() => PreparedStory<Renderer>[]"}},getStoryContext:{defaultValue:null,description:"Get the story context of the referenced story.",name:"getStoryContext",required:!0,type:{name:"(story: PreparedStory<Renderer>) => StoryContextForLoaders<Renderer, Args>"}},loadStory:{defaultValue:null,description:"Asyncronously load an arbitrary story by id.",name:"loadStory",required:!0,type:{name:"(id: string) => Promise<PreparedStory<Renderer>>"}},renderStoryToElement:{defaultValue:null,description:"Render a story to a given HTML element and keep it up to date across context changes",name:"renderStoryToElement",required:!0,type:{name:"(story: PreparedStory<Renderer>, element: HTMLElement, callbacks: RenderContextCallbacks<Renderer>, options: StoryRenderOptions) => () => Promise<...>"}},channel:{defaultValue:null,description:"Storybook channel -- use for low level event watching/emitting",name:"channel",required:!0,type:{name:"Channel"}},projectAnnotations:{defaultValue:null,description:"Project annotations -- can be read to get the project's global annotations",name:"projectAnnotations",required:!0,type:{name:"NormalizedProjectAnnotations<Renderer>"}}}}}catch{}try{l.displayName="CodeOrSourceMdx",l.__docgenInfo={description:"",displayName:"CodeOrSourceMdx",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="AnchorMdx",p.__docgenInfo={description:"",displayName:"AnchorMdx",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"string"}}}}}catch{}try{y.displayName="HeaderMdx",y.__docgenInfo={description:"",displayName:"HeaderMdx",props:{as:{defaultValue:null,description:"",name:"as",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const _=e=>{var t;if(!e.children)return null;if(typeof e.children!="string")throw new Error(A`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);return n(T,{...e,options:{forceBlock:!0,overrides:{code:l,a:p,...H,...(t=e==null?void 0:e.options)==null?void 0:t.overrides},...e==null?void 0:e.options}})};try{_.displayName="Markdown",_.__docgenInfo={description:"",displayName:"Markdown",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"Partial<{ createElement: (tag: string | FunctionComponent<{}> | ComponentClass<{}, any>, props: IntrinsicAttributes, ...children: ReactChild[]) => Element; ... 8 more ...; enforceAtxHeadings: boolean; }>"}}}}}catch{}export{y as H,_ as M};
//# sourceMappingURL=Markdown-70546d9b.js.map
