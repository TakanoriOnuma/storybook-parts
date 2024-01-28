import{d as E}from"./index-356e4a49.js";const{useMemo:b,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var u="backgrounds",{document:i,window:S}=h,x=()=>S.matchMedia("(prefers-reduced-motion: reduce)").matches,L=(r,e=[],n)=>{if(r==="transparent")return"transparent";if(e.find(o=>o.value===r))return r;const a=e.find(o=>o.name===n);if(a)return a.value;if(n){const o=e.map(s=>s.name).join(", ");B.warn(E`
        Backgrounds Addon: could not find the default color "${n}".
        These are the available colors for your story based on your configuration:
        ${o}.
      `)}return"transparent"},M=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{var n;const e=i.getElementById(r);e&&((n=e.parentElement)==null||n.removeChild(e))},w=(r,e)=>{const n=i.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{const a=i.createElement("style");a.setAttribute("id",r),a.innerHTML=e,i.head.appendChild(a)}},A=(r,e,n)=>{var o;const a=i.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{const s=i.createElement("style");s.setAttribute("id",r),s.innerHTML=e;const d=`addon-backgrounds-grid${n?`-docs-${n}`:""}`,t=i.getElementById(d);t?(o=t.parentElement)==null||o.insertBefore(s,t):i.head.appendChild(s)}},T=(r,e)=>{var $;const{globals:n,parameters:a}=e,o=($=n[u])==null?void 0:$.value,s=a[u],d=b(()=>s.disable?"transparent":L(o,s.values,s.default),[s,o]),t=b(()=>d&&d!=="transparent",[d]),l=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",g=b(()=>{const c="transition: background-color 0.3s;";return`
      ${l} {
        background: ${d} !important;
        ${x()?"":c}
      }
    `},[d,l]);return k(()=>{const c=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){M(c);return}A(c,g,e.viewMode==="docs"?e.id:null)},[t,g,e]),r()},C=(r,e)=>{var y;const{globals:n,parameters:a}=e,o=a[u].grid,s=((y=n[u])==null?void 0:y.grid)===!0&&o.disable!==!0,{cellAmount:d,cellSize:t,opacity:l}=o,g=e.viewMode==="docs",c=a.layout===void 0||a.layout==="padded"?16:0,p=o.offsetX??(g?20:c),f=o.offsetY??(g?20:c),v=b(()=>{const m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${t*d}px ${t*d}px`,`${t*d}px ${t*d}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${m} {
        background-size: ${_} !important;
        background-position: ${p}px ${f}px, ${p}px ${f}px, ${p}px ${f}px, ${p}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${l/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return k(()=>{const m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!s){M(m);return}w(m,v)},[s,v,e]),r()},R=[C,T],G={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},H={[u]:null};export{R as decorators,H as globals,G as parameters};
//# sourceMappingURL=preview-fa241db3.js.map
