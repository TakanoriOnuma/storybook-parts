import{s as d}from"./index-d475d2ea.js";var h="storybook/highlight",s="storybookHighlight",_=`${h}/add`,g=`${h}/reset`;const{addons:c}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:n}=d,H=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,v=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),r=c.getChannel(),O=e=>{const t=s;a();const i=Array.from(new Set(e.elements)),o=n.createElement("style");o.setAttribute("id",t),o.innerHTML=i.map(l=>`${l}{
          ${H(e.color,e.style)}
         }`).join(" "),n.head.appendChild(o)},a=()=>{const e=s,t=n.getElementById(e);t&&t.parentNode.removeChild(t)};r.on(E,a);r.on(g,a);r.on(_,O);export{v as highlightObject,H as highlightStyle};
//# sourceMappingURL=preview-5e019a69.js.map
