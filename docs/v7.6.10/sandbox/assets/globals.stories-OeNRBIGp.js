const{global:n}=__STORYBOOK_MODULE_GLOBAL__,l=r=>{switch(r){case"es":return"Hola!";case"fr":return"Bonjour !";case"zh":return"你好!";case"kr":return"안녕하세요!";case"en":default:return"Hello"}},u={component:n.Components.Pre,decorators:[(r,{globals:o})=>{const t={...o,caption:`Locale is '${o.locale}', so I say: ${l(o.locale)}`};return r({args:{object:t}})}]},e={};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const i=["Basic"];export{e as Basic,i as __namedExportsOrder,u as default};