import{r as u,R as a}from"./index-f1f2c4b1.js";import{a as I}from"./chunk-AT66UTFE-23ee157f.js";import{w as L}from"./index-09d824d7.js";import{e as M}from"./index-bb7da91f.js";import{T as g,D as s}from"./Explorer-b469d64d.js";import{i}from"./mockdata.large-90c8bb3e.js";import"./v4-4a60fe23.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./index-b4514f1c.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./index-4b2a7d13.js";import"./index-b75c9059.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./index-758f4e48.js";import"./throttle-d46bc519.js";import"./Heading-67bee835.js";import"./Menu-2bb664ec.js";import"./LayoutProvider-eb9b2e6f.js";import"./constants-277f2eb4.js";import"./index-d6b32626.js";const H={sized:{name:"Sized",styles:{width:"380px",height:"90%"}}},De={component:g,title:"Sidebar/Tree",excludeStories:/.*Data$/,parameters:{layout:"fullscreen",theme:"light",viewport:{defaultViewport:"sized",viewports:H},chromatic:{viewports:[380]}}},O=Object.values(i).find(n=>n.type==="story").id,l={args:{docsMode:!1,isBrowsing:!0,isMain:!0,refId:s,setHighlightedItemId:I("setHighlightedItemId")},render:n=>{const[o,t]=u.useState(O);return a.createElement(g,{...n,data:i,selectedStoryId:o,onSelectStoryId:t,highlightedRef:{current:{itemId:o,refId:s}}})}},p={...l,parameters:{theme:"dark"}},c={args:{docsMode:!1,isBrowsing:!0,isMain:!0,refId:s,setHighlightedItemId:I("setHighlightedItemId")},render:n=>{const[o,t]=u.useState("tooltip-tooltipbuildlist--default");return a.createElement(g,{...n,data:{single:{type:"component",name:"Single",id:"single",parent:null,depth:0,children:["single--single"],renderLabel:()=>a.createElement("span",null,"🔥 Single")},"single--single":{type:"story",id:"single--single",title:"Single",name:"Single",tags:[],prepared:!0,args:{},argTypes:{},initialArgs:{},depth:1,parent:"single",renderLabel:()=>a.createElement("span",null,"🔥 Single"),importPath:"./single.stories.js"},...Object.keys(i).reduce((e,r)=>r==="tooltip-tooltipselect--default"?(e["tooltip-tooltipselect--tooltipselect"]={...i[r],id:"tooltip-tooltipselect--tooltipselect",name:"TooltipSelect"},e):r==="tooltip-tooltipselect"?(e[r]={...i[r],children:["tooltip-tooltipselect--tooltipselect"]},e):(r.startsWith("tooltip")&&(e[r]=i[r]),e),{})},highlightedRef:{current:{itemId:o,refId:s}},selectedStoryId:o,onSelectStoryId:t})}},d={render:()=>{const[n,o]=u.useState("tooltip-tooltipbuildlist--default");return a.createElement(g,{docsMode:!1,isBrowsing:!0,isMain:!0,refId:s,data:{single:{type:"component",name:"Single",id:"single",parent:null,depth:0,children:["single--docs"]},"single--docs":{type:"docs",id:"single--docs",title:"Single",name:"Single",tags:[],prepared:!0,depth:1,parent:"single",importPath:"./single.stories.js"},...Object.keys(i).reduce((t,e)=>e==="tooltip-tooltipselect--default"?(t["tooltip-tooltipselect--tooltipselect"]={...i[e],id:"tooltip-tooltipselect--tooltipselect",name:"TooltipSelect"},t):e==="tooltip-tooltipselect"?(t[e]={...i[e],children:["tooltip-tooltipselect--tooltipselect"]},t):(e.startsWith("tooltip")&&(t[e]=i[e]),t),{})},highlightedRef:{current:{itemId:n,refId:s}},setHighlightedItemId:I("setHighlightedItemId"),selectedStoryId:n,onSelectStoryId:o})}},m={...d,parameters:{chromatic:{disable:!0},viewport:{defaultViewport:"sized",viewports:H,defaultOrientation:"landscape"}},play:async({canvasElement:n})=>{const t=await(await L(n)).findByText("Skip to canvas");await t.focus(),await M(t).toBeVisible()}};var h,S,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,w,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Full,
  parameters: {
    theme: 'dark'
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,T,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
          tags: [],
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
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var x,F,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState('tooltip-tooltipbuildlist--default');
    return <Tree docsMode={false} isBrowsing isMain refId={DEFAULT_REF_ID} data={{
      ...{
        single: {
          type: 'component',
          name: 'Single',
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
          tags: [],
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
}`,...(b=(F=d.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var _,R,v;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(R=m.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};const Ee=["Full","Dark","SingleStoryComponents","DocsOnlySingleStoryComponents","SkipToCanvasLinkFocused"];export{p as Dark,d as DocsOnlySingleStoryComponents,l as Full,c as SingleStoryComponents,m as SkipToCanvasLinkFocused,Ee as __namedExportsOrder,De as default};
//# sourceMappingURL=Tree.stories-df564d79.js.map
