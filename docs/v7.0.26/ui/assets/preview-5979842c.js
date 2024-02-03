import{s as E}from"./index-d475d2ea.js";import{d as x}from"./index-356e4a49.js";const{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var u="backgrounds",{document:i,window:S}=E,_=()=>S.matchMedia("(prefers-reduced-motion: reduce)").matches,w=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;const o=e.find(n=>n.name===a);if(o)return o.value;if(a){const n=e.map(d=>d.name).join(", ");B.warn(x`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(A)},A=r=>{const e=i.getElementById(r);e&&e.parentElement.removeChild(e)},L=(r,e)=>{const a=i.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{const o=i.createElement("style");o.setAttribute("id",r),o.innerHTML=e,i.head.appendChild(o)}},O=(r,e,a)=>{const o=i.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{const n=i.createElement("style");n.setAttribute("id",r),n.innerHTML=e;const d=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,t=i.getElementById(d);t?t.parentElement.insertBefore(n,t):i.head.appendChild(n)}};const{useMemo:b,useEffect:M}=__STORYBOOK_MODULE_PREVIEW_API__;var T=(r,e)=>{var $;const{globals:a,parameters:o}=e,n=($=a[u])==null?void 0:$.value,d=o[u],t=b(()=>d.disable?"transparent":w(n,d.values,d.default),[d,n]),s=b(()=>t&&t!=="transparent",[t]),l=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=b(()=>{const c="transition: background-color 0.3s;";return`
      ${l} {
        background: ${t} !important;
        ${_()?"":c}
      }
    `},[t,l]);return M(()=>{const c=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!s){k(c);return}O(c,p,e.viewMode==="docs"?e.id:null)},[s,p,e]),r()},C=(r,e)=>{var y;const{globals:a,parameters:o}=e,n=o[u].grid,d=((y=a[u])==null?void 0:y.grid)===!0&&n.disable!==!0,{cellAmount:t,cellSize:s,opacity:l}=n,p=e.viewMode==="docs",c=o.layout===void 0||o.layout==="padded"?16:0,g=n.offsetX??(p?20:c),f=n.offsetY??(p?20:c),v=b(()=>{const m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${s*t}px ${s*t}px`,`${s*t}px ${s*t}px`,`${s}px ${s}px`,`${s}px ${s}px`].join(", ");return`
      ${m} {
        background-size: ${h} !important;
        background-position: ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${l/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l/2}) 1px, transparent 1px) !important;
      }
    `},[s]);return M(()=>{const m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!d){k(m);return}L(m,v)},[d,v,e]),r()},H=[C,T],P={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[u]:null};export{H as decorators,G as globals,P as parameters};
//# sourceMappingURL=preview-5979842c.js.map
