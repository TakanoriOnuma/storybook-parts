import{R as a}from"./index-f1f2c4b1.js";import{m as p}from"./mockdata-27992e36.js";import{a as m,I as O,s as x}from"./Explorer-b469d64d.js";import"./index-b4514f1c.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./index-4b2a7d13.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./index-8c127ed0.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./index-758f4e48.js";import"./throttle-d46bc519.js";import"./Heading-67bee835.js";import"./Menu-2bb664ec.js";import"./LayoutProvider-eb9b2e6f.js";import"./constants-277f2eb4.js";import"./index-d6b32626.js";import"./index-8d9ddb1f.js";const he={component:m,title:"Sidebar/SearchResults",includeStories:/^[A-Z]/,parameters:{layout:"fullscreen"},decorators:[e=>a.createElement("div",{style:{padding:"0 20px",maxWidth:"230px"}},a.createElement(O,null),e())]},E=e=>{const t=Object.entries(e).reduce((b,[n,w])=>Object.assign(b,{[n]:{index:w,title:null,id:n,url:"iframe.html",ready:!0,error:!1}}),{});return{hash:t,entries:Object.entries(t)}},i=E({internal:p.withRoot,composed:p.noRoot}),N=Object.values(i.hash.internal.index).map(e=>x(e,i.hash.internal)),V=Object.values(i.hash.composed.index).map(e=>x(e,i.hash.composed)),I=N.concat(V),j=I.filter(({name:e})=>e.includes("A2")).map(e=>{const t=e.name.indexOf("A2");return{item:e,matches:[{value:e.name,indices:[[t,t+1]]}],score:0}}),v=I.filter(e=>e.type==="component").map(e=>({item:e,matches:[],score:0})),c=(e={})=>({key:e.key}),_={query:"query",results:j,closeMenu:()=>{},getMenuProps:c,getItemProps:c,highlightedIndex:0},M={..._,results:[]},P={query:"",results:v,closeMenu:()=>{},getMenuProps:c,getItemProps:c,highlightedIndex:0},s=()=>a.createElement(m,{..._}),r=()=>a.createElement(m,{...M}),o=()=>a.createElement(m,{...P});s.__docgenInfo={description:"",methods:[],displayName:"Searching"};r.__docgenInfo={description:"",methods:[],displayName:"NoResults"};o.__docgenInfo={description:"",methods:[],displayName:"LastViewed"};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"() => <SearchResults {...searching} />",...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,R;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"() => <SearchResults {...noResults} />",...(R=(g=r.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var S,y,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"() => <SearchResults {...lastViewed} />",...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const ge=["searching","noResults","lastViewed","Searching","NoResults","LastViewed"];export{o as LastViewed,r as NoResults,s as Searching,ge as __namedExportsOrder,he as default,P as lastViewed,M as noResults,_ as searching};
//# sourceMappingURL=SearchResults.stories-66dc2a0a.js.map