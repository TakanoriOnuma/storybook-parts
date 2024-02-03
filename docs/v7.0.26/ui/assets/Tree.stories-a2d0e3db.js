import{j as r}from"./jsx-runtime-0f39435c.js";import{R as p}from"./index-6f814c40.js";import{s as B}from"./dom.esm-64c5e3c1.js";import{T as a,D as C}from"./Sidebar-d535dffb.js";import{i}from"./mockdata.large-90c8bb3e.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./lz-string-475d838e.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./Heading-43200e6c.js";import"./Menu-cd6fe8ee.js";import"./polished.esm-ebce2d70.js";import"./index-f8624f6f.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_baseAssignValue-531dc4d6.js";import"./mapValues-511dc51c.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./keysIn-d555f552.js";import"./_getPrototype-d314cec2.js";import"./isPlainObject-9af51d09.js";import"./index-ee3f53bc.js";import"./isEqual-09b8ceb9.js";import"./index-356e4a49.js";import"./_basePickBy-ac4ea461.js";import"./index-a0fdfe9c.js";import"./chunk-P672VJMD-915057e7.js";import"./index-df581bf3.js";import"./HighlightStyles-bdd60786.js";import"./throttle-f41f6282.js";import"./index-4d501b15.js";const fe={component:a,title:"Sidebar/Tree",excludeStories:/.*Data$/,parameters:{layout:"fullscreen",withSymbols:!0},decorators:[e=>r("div",{style:{maxWidth:"230px"},children:e()})]},o=C,w=Object.values(i).find(e=>e.type==="story").id,c=e=>console.log(e),s=()=>{const[e,t]=p.useState(w);return r(a,{docsMode:!1,isBrowsing:!0,isMain:!0,refId:o,data:i,highlightedRef:{current:{itemId:e,refId:o}},setHighlightedItemId:c,selectedStoryId:e,onSelectStoryId:t})},x=Object.keys(i).reduce((e,t)=>t==="tooltip-tooltipselect--default"?(e["tooltip-tooltipselect--tooltipselect"]={...i[t],id:"tooltip-tooltipselect--tooltipselect",name:"TooltipSelect"},e):t==="tooltip-tooltipselect"?(e[t]={...i[t],children:["tooltip-tooltipselect--tooltipselect"]},e):(t.startsWith("tooltip")&&(e[t]=i[t]),e),{}),H={single:{type:"component",name:"Single",id:"single",parent:null,depth:0,children:["single--single"],renderLabel:()=>r("span",{children:"🔥 Single"})},"single--single":{type:"story",id:"single--single",title:"Single",name:"Single",prepared:!0,args:{},argTypes:{},initialArgs:{},depth:1,parent:"single",renderLabel:()=>r("span",{children:"🔥 Single"}),importPath:"./single.stories.js"}},n=()=>{const[e,t]=p.useState("tooltip-tooltipbuildlist--default");return r(a,{docsMode:!1,isBrowsing:!0,isMain:!0,refId:o,data:{...H,...x},highlightedRef:{current:{itemId:e,refId:o}},setHighlightedItemId:c,selectedStoryId:e,onSelectStoryId:t})},O={single:{type:"component",name:"Single",id:"single",parent:null,depth:0,children:["single--docs"]},"single--docs":{type:"docs",id:"single--docs",title:"Single",name:"Single",depth:1,parent:"single",importPath:"./single.stories.js"}},l=()=>{const[e,t]=p.useState("tooltip-tooltipbuildlist--default");return r(a,{docsMode:!1,isBrowsing:!0,isMain:!0,refId:o,data:{...O,...x},highlightedRef:{current:{itemId:e,refId:o}},setHighlightedItemId:c,selectedStoryId:e,onSelectStoryId:t})},d={args:{isBrowsing:!0,isMain:!0,refId:o,data:i,highlightedRef:{current:{itemId:"tooltip-tooltipbuildlist--default",refId:o}},setHighlightedItemId:c,selectedStoryId:"tooltip-tooltipbuildlist--default",onSelectStoryId:()=>{}},parameters:{chromatic:{delay:300}},play:()=>{B.getAllByText("Skip to canvas").forEach(e=>e.focus())}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [selectedId, setSelectedId] = React.useState(storyId);
  return <Tree docsMode={false} isBrowsing isMain refId={refId} data={index} highlightedRef={{
    current: {
      itemId: selectedId,
      refId
    }
  }} setHighlightedItemId={log} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} />;
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var I,S,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [selectedId, setSelectedId] = React.useState('tooltip-tooltipbuildlist--default');
  return <Tree docsMode={false} isBrowsing isMain refId={refId} data={{
    ...singleStoryComponent,
    ...tooltipStories
  }} highlightedRef={{
    current: {
      itemId: selectedId,
      refId
    }
  }} setHighlightedItemId={log} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} />;
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [selectedId, setSelectedId] = React.useState('tooltip-tooltipbuildlist--default');
  return <Tree docsMode={false} isBrowsing isMain refId={refId} data={{
    ...docsOnlySinglesStoryComponent,
    ...tooltipStories
  }} highlightedRef={{
    current: {
      itemId: selectedId,
      refId
    }
  }} setHighlightedItemId={log} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} />;
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var M,R,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isBrowsing: true,
    isMain: true,
    refId,
    data: index,
    highlightedRef: {
      current: {
        itemId: 'tooltip-tooltipbuildlist--default',
        refId
      }
    },
    setHighlightedItemId: log,
    selectedStoryId: 'tooltip-tooltipbuildlist--default',
    onSelectStoryId: () => {}
  },
  parameters: {
    chromatic: {
      delay: 300
    }
  },
  play: () => {
    // focus each instance for chromatic/storybook's stacked theme
    screen.getAllByText('Skip to canvas').forEach(x => x.focus());
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ye=["Full","SingleStoryComponents","DocsOnlySingleStoryComponents","SkipToCanvasLinkFocused"];export{l as DocsOnlySingleStoryComponents,s as Full,n as SingleStoryComponents,d as SkipToCanvasLinkFocused,ye as __namedExportsOrder,fe as default};
//# sourceMappingURL=Tree.stories-a2d0e3db.js.map
