import{j as d}from"./jsx-runtime-31019b9d.js";import{r as u}from"./index-9f32f44c.js";import{a as f}from"./chunk-C5H4AMN5-7fdb7c46.js";import{w as v}from"./index-73c7a0c2.js";import{e as H}from"./index-728c6c1a.js";import{T as g,D as r}from"./Sidebar-86458011.js";import{i}from"./mockdata.large-90c8bb3e.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./index-9ed7e0e5.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./index-9e46a6e4.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./index-0d1d6e7e.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";const _={sized:{name:"Sized",styles:{width:"380px",height:"90%"}}},Te={component:g,title:"Sidebar/Tree",excludeStories:/.*Data$/,parameters:{layout:"fullscreen",withSymbols:!0,theme:"light",viewport:{defaultViewport:"sized",viewports:_},chromatic:{viewports:[380]}}},M=Object.values(i).find(n=>n.type==="story").id,l={args:{docsMode:!1,isBrowsing:!0,isMain:!0,refId:r,setHighlightedItemId:f("setHighlightedItemId")},render:n=>{const[o,t]=u.useState(M);return d(g,{...n,data:i,selectedStoryId:o,onSelectStoryId:t,highlightedRef:{current:{itemId:o,refId:r}}})}},p={...l,parameters:{theme:"dark"}},c={args:{docsMode:!1,isBrowsing:!0,isMain:!0,refId:r,setHighlightedItemId:f("setHighlightedItemId")},render:n=>{const[o,t]=u.useState("tooltip-tooltipbuildlist--default");return d(g,{...n,data:{single:{type:"component",name:"Single",id:"single",isRoot:!1,isLeaf:!1,isComponent:!0,parent:null,depth:0,children:["single--single"],renderLabel:()=>d("span",{children:"🔥 Single"})},"single--single":{type:"story",id:"single--single",title:"Single",name:"Single",kind:"single",tags:[],isRoot:!1,isLeaf:!0,isComponent:!1,prepared:!0,args:{},argTypes:{},initialArgs:{},depth:1,parent:"single",renderLabel:()=>d("span",{children:"🔥 Single"}),importPath:"./single.stories.js"},...Object.keys(i).reduce((e,s)=>s==="tooltip-tooltipselect--default"?(e["tooltip-tooltipselect--tooltipselect"]={...i[s],id:"tooltip-tooltipselect--tooltipselect",name:"TooltipSelect"},e):s==="tooltip-tooltipselect"?(e[s]={...i[s],children:["tooltip-tooltipselect--tooltipselect"]},e):(s.startsWith("tooltip")&&(e[s]=i[s]),e),{})},highlightedRef:{current:{itemId:o,refId:r}},selectedStoryId:o,onSelectStoryId:t})}},a={render:()=>{const[n,o]=u.useState("tooltip-tooltipbuildlist--default");return d(g,{docsMode:!1,isBrowsing:!0,isMain:!0,refId:r,data:{single:{type:"component",name:"Single",isRoot:!1,isLeaf:!1,isComponent:!0,id:"single",parent:null,depth:0,children:["single--docs"]},"single--docs":{type:"docs",id:"single--docs",title:"Single",name:"Single",kind:"single",tags:[],isRoot:!1,isLeaf:!0,isComponent:!1,prepared:!0,depth:1,parent:"single",importPath:"./single.stories.js"},...Object.keys(i).reduce((t,e)=>e==="tooltip-tooltipselect--default"?(t["tooltip-tooltipselect--tooltipselect"]={...i[e],id:"tooltip-tooltipselect--tooltipselect",name:"TooltipSelect"},t):e==="tooltip-tooltipselect"?(t[e]={...i[e],children:["tooltip-tooltipselect--tooltipselect"]},t):(e.startsWith("tooltip")&&(t[e]=i[e]),t),{})},highlightedRef:{current:{itemId:n,refId:r}},setHighlightedItemId:f("setHighlightedItemId"),selectedStoryId:n,onSelectStoryId:o})}},m={...a,parameters:{chromatic:{disable:!0},viewport:{defaultViewport:"sized",viewports:_,defaultOrientation:"landscape"}},play:async({canvasElement:n})=>{const t=await(await v(n)).findByText("Skip to canvas");await t.focus(),await H(t).toBeVisible()}};var I,h,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    docsMode: false,
    isBrowsing: true,
    isMain: true,
    refId: DEFAULT_REF_ID,
    setHighlightedItemId: action('setHighlightedItemId')
  },
  render: args => {
    const [selectedId, setSelectedId] = useState(storyId);
    return <Tree {...args} data={index} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} highlightedRef={{
      current: {
        itemId: selectedId,
        refId: DEFAULT_REF_ID
      }
    }} />;
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,w,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Full,
  parameters: {
    theme: 'dark'
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var k,T,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    docsMode: false,
    isBrowsing: true,
    isMain: true,
    refId: DEFAULT_REF_ID,
    setHighlightedItemId: action('setHighlightedItemId')
  },
  render: args => {
    const [selectedId, setSelectedId] = useState('tooltip-tooltipbuildlist--default');
    return <Tree {...args} data={{
      ...{
        single: {
          type: 'component',
          name: 'Single',
          id: 'single',
          isRoot: false,
          isLeaf: false,
          isComponent: true,
          parent: null,
          depth: 0,
          children: ['single--single'],
          renderLabel: () => <span>🔥 Single</span>
        },
        'single--single': {
          type: 'story',
          id: 'single--single',
          title: 'Single',
          name: 'Single',
          kind: 'single',
          tags: [],
          isRoot: false,
          isLeaf: true,
          isComponent: false,
          prepared: true,
          args: {},
          argTypes: {},
          initialArgs: {},
          depth: 1,
          parent: 'single',
          renderLabel: () => <span>🔥 Single</span>,
          importPath: './single.stories.js'
        }
      },
      ...Object.keys(index).reduce((acc, key) => {
        if (key === 'tooltip-tooltipselect--default') {
          acc['tooltip-tooltipselect--tooltipselect'] = {
            ...index[key],
            id: 'tooltip-tooltipselect--tooltipselect',
            name: 'TooltipSelect'
          };
          return acc;
        }
        if (key === 'tooltip-tooltipselect') {
          acc[key] = {
            ...(index[key] as ComponentEntry),
            children: ['tooltip-tooltipselect--tooltipselect']
          };
          return acc;
        }
        if (key.startsWith('tooltip')) {
          acc[key] = index[key];
        }
        return acc;
      }, ({} as IndexHash))
    }} highlightedRef={{
      current: {
        itemId: selectedId,
        refId: DEFAULT_REF_ID
      }
    }} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} />;
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var L,R,E;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState('tooltip-tooltipbuildlist--default');
    return <Tree docsMode={false} isBrowsing isMain refId={DEFAULT_REF_ID} data={{
      ...{
        single: {
          type: 'component',
          name: 'Single',
          isRoot: false,
          isLeaf: false,
          isComponent: true,
          id: 'single',
          parent: null,
          depth: 0,
          children: ['single--docs']
        },
        'single--docs': {
          type: 'docs',
          id: 'single--docs',
          title: 'Single',
          name: 'Single',
          kind: 'single',
          tags: [],
          isRoot: false,
          isLeaf: true,
          isComponent: false,
          prepared: true,
          depth: 1,
          parent: 'single',
          importPath: './single.stories.js'
        }
      },
      ...Object.keys(index).reduce((acc, key) => {
        if (key === 'tooltip-tooltipselect--default') {
          acc['tooltip-tooltipselect--tooltipselect'] = {
            ...index[key],
            id: 'tooltip-tooltipselect--tooltipselect',
            name: 'TooltipSelect'
          };
          return acc;
        }
        if (key === 'tooltip-tooltipselect') {
          acc[key] = {
            ...(index[key] as ComponentEntry),
            children: ['tooltip-tooltipselect--tooltipselect']
          };
          return acc;
        }
        if (key.startsWith('tooltip')) {
          acc[key] = index[key];
        }
        return acc;
      }, ({} as IndexHash))
    }} highlightedRef={{
      current: {
        itemId: selectedId,
        refId: DEFAULT_REF_ID
      }
    }} setHighlightedItemId={action('setHighlightedItemId')} selectedStoryId={selectedId} onSelectStoryId={setSelectedId} />;
  }
}`,...(E=(R=a.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var b,F,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DocsOnlySingleStoryComponents,
  parameters: {
    chromatic: {
      disable: true
    },
    viewport: {
      defaultViewport: 'sized',
      viewports: customViewports,
      defaultOrientation: 'landscape'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const screen = await within(canvasElement);
    const link = await screen.findByText('Skip to canvas');
    await link.focus();
    await expect(link).toBeVisible();
  }
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const xe=["Full","Dark","SingleStoryComponents","DocsOnlySingleStoryComponents","SkipToCanvasLinkFocused"];export{p as Dark,a as DocsOnlySingleStoryComponents,l as Full,c as SingleStoryComponents,m as SkipToCanvasLinkFocused,xe as __namedExportsOrder,Te as default};
//# sourceMappingURL=Tree.stories-36073b7c.js.map
