import{R as r,r as l}from"./index-f1f2c4b1.js";import{M as x}from"./index.modern-a28060bf.js";import{d as M}from"./index-356e4a49.js";import{C as O,l as T,n as k}from"./index-a443495b.js";import{n as h}from"./index-4b2a7d13.js";import{L as C}from"./index-758f4e48.js";import{D as m}from"./DocsContext-d4de082c.js";import{S as A}from"./Source-7fb69933.js";const{NAVIGATE_URL:w}=__STORYBOOK_MODULE_CORE_EVENTS__,{global:S}=__STORYBOOK_MODULE_GLOBAL__,{document:u}=S,g=({className:e,children:t,...n})=>{if(typeof e!="string"&&(typeof t!="string"||!t.match(/[\n\r]/g)))return r.createElement(O,null,t);const i=e&&e.split("-");return r.createElement(A,{language:i&&i[1]||"text",format:!1,code:t,...n})};function f(e,t){e.channel.emit(w,t)}const d=T.a,b=({hash:e,children:t})=>{const n=l.useContext(m);return r.createElement(d,{href:e,target:"_self",onClick:i=>{const s=e.substring(1);u.getElementById(s)&&f(n,e)}},t)},p=e=>{const{href:t,target:n,children:i,...s}=e,a=l.useContext(m);if(t){if(t.startsWith("#"))return r.createElement(b,{hash:t},i);if(n!=="_blank"&&!t.startsWith("https://"))return r.createElement(d,{href:t,onClick:o=>{o.button===0&&!o.altKey&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&(o.preventDefault(),f(a,o.currentTarget.getAttribute("href")))},target:n,...s},i)}return r.createElement(d,{...e})},_=["h1","h2","h3","h4","h5","h6"],L=_.reduce((e,t)=>({...e,[t]:h(t)({"& svg":{position:"relative",top:"-0.1em",visibility:"hidden"},"&:hover svg":{visibility:"visible"}})}),{}),I=h.a(()=>({float:"left",lineHeight:"inherit",paddingRight:"10px",marginLeft:"-24px",color:"inherit"})),H=({as:e,id:t,children:n,...i})=>{const s=l.useContext(m),a=L[e],o=`#${t}`;return r.createElement(a,{id:t,...i},r.createElement(I,{"aria-hidden":"true",href:o,tabIndex:-1,target:"_self",onClick:c=>{u.getElementById(t)&&f(s,o)}},r.createElement(C,null)),n)},E=e=>{const{as:t,id:n,children:i,...s}=e;if(n)return r.createElement(H,{as:t,id:n,...s},i);const a=t,{as:o,...c}=e;return r.createElement(a,{...k(c,t)})},R=_.reduce((e,t)=>({...e,[t]:n=>r.createElement(E,{as:t,...n})}),{});g.__docgenInfo={description:"",methods:[],displayName:"CodeOrSourceMdx",props:{className:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"AnchorMdx",props:{href:{required:!0,tsType:{name:"string"},description:""},target:{required:!0,tsType:{name:"string"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"HeaderMdx",props:{as:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const v=e=>{var t;if(!e.children)return null;if(typeof e.children!="string")throw new Error(M`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
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
      `);return r.createElement(x,{...e,options:{forceBlock:!0,overrides:{code:g,a:p,...R,...(t=e==null?void 0:e.options)==null?void 0:t.overrides},...e==null?void 0:e.options}})};v.__docgenInfo={description:"",methods:[],displayName:"Markdown"};export{E as H,v as M};
//# sourceMappingURL=Markdown-a9cd2ec9.js.map
