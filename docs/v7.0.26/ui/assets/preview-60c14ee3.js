import{s as c}from"./index-d475d2ea.js";import"./index-569f0cbf.js";var v="links";const{makeDecorator:E,addons:s}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:m,SELECT_STORY:f}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:i,HTMLElement:l}=c,O=e=>s.getChannel().emit(f,e),o=e=>{const{target:t}=e;if(!(t instanceof l))return;const _=t,{sbKind:n,sbStory:a}=_.dataset;(n||a)&&(e.preventDefault(),O({kind:n,story:a}))},r=!1,L=()=>{r||(r=!0,i.addEventListener("click",o))},d=()=>{r&&(r=!1,i.removeEventListener("click",o))},k=E({name:"withLinks",parameterName:v,wrapper:(e,t)=>(L(),s.getChannel().once(m,d),e(t))}),S=[k];export{S as decorators};
//# sourceMappingURL=preview-60c14ee3.js.map
