const{global:s}=__STORYBOOK_MODULE_GLOBAL__,{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:O}=__STORYBOOK_MODULE_CORE_EVENTS__;var _="storybook/highlight",l="storybookHighlight",g=`${_}/add`,E=`${_}/reset`,{document:a}=s,c=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,v=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),h=d.getChannel(),H=e=>{const t=l;r();const o=Array.from(new Set(e.elements)),n=a.createElement("style");n.setAttribute("id",t),n.innerHTML=o.map(i=>`${i}{
          ${c(e.color,e.style)}
         }`).join(" "),a.head.appendChild(n)},r=()=>{var o;const e=l,t=a.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};h.on(O,r);h.on(E,r);h.on(g,H);export{v as highlightObject,c as highlightStyle};
//# sourceMappingURL=preview-3abc084b.js.map
