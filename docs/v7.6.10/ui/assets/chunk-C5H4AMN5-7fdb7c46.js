import{I as b,v as m}from"./preview-errors-208e1923.js";const{addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:d}=__STORYBOOK_MODULE_GLOBAL__;var R="storybook/actions",j=`${R}/action-event`,a={depth:10,clearOnStoryChange:!0,limit:50},g=(e,n)=>{const t=Object.getPrototypeOf(e);return!t||n(t)?t:g(t,n)},A=e=>!!(typeof e=="object"&&e&&g(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),D=e=>{if(A(e)){const n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();const t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},w=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?m():Date.now().toString(36)+Math.random().toString(36).substring(2);function I(e,n={}){const t={...a,...n},o=function(...r){var l;if(n.implicit){const s="__STORYBOOK_PREVIEW__"in d?d.__STORYBOOK_PREVIEW__:void 0,O=s==null?void 0:s.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(O){const c=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),f=new b({phase:O.phase,name:e,deprecated:c});if(c)console.warn(f);else throw f}}const y=v.getChannel(),u=w(),_=5,p=r.map(D),h=r.length>1?p:p[0],E={id:u,count:0,data:{name:e,args:h},options:{...t,maxDepth:_+(t.depth||3),allowFunction:t.allowFunction||!1}};y.emit(j,E)};return o.isAction=!0,o}var P=(...e)=>{let n=a,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...a,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(r=>{o[r]=r}));const i={};return Object.keys(o).forEach(r=>{i[r]=I(o[r],n)}),i};export{I as a,P as b};
//# sourceMappingURL=chunk-C5H4AMN5-7fdb7c46.js.map
