import{_ as s}from"./iframe-Kaf2ZuH_.js";import"../sb-preview/runtime.js";const{global:a}=__STORYBOOK_MODULE_GLOBAL__;var i=Object.entries(a.TAGS_OPTIONS??{}).reduce((e,o)=>{const[r,t]=o;return t.excludeFromDocsStories&&(e[r]=!0),e},{}),c={docs:{renderer:async()=>{const{DocsRenderer:e}=await s(()=>import("./DocsRenderer-EWTX3ROV-UyqP3t4l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{c as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-EWTX3ROV-UyqP3t4l.js","./chunk-LGNCEDN7-SpUF8xBK.js","./iframe-Kaf2ZuH_.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./react-18-lltdPBKk.js","./index-jmm5gWkb.js","./index-wS29sfn3.js","./index-ogXoivrg.js","./_baseAssignValue-XAMtle1o.js","./index-8GgK5xmv.js","./_basePickBy-gBSjytaL.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
