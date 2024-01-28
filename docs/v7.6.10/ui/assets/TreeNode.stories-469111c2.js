import{a as s,F as l,j as e}from"./jsx-runtime-31019b9d.js";import{c as d,C as n,G as a,d as G,H as C,L as o}from"./Sidebar-86458011.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./index-9e46a6e4.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./index-0d1d6e7e.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./isEqual-8e48f6f6.js";import"./index-356e4a49.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9ed7e0e5.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";const te={title:"Sidebar/TreeNode",parameters:{layout:"fullscreen",withSymbols:!0},component:d},t=()=>s(l,{children:[e(n,{children:"Component"}),e(a,{children:"Group"}),e(d,{children:"Story"}),e(G,{docsMode:!1,children:"Document"})]}),r=()=>s(l,{children:[e(n,{isExpandable:!0,children:"Collapsed component"}),e(n,{isExpandable:!0,isExpanded:!0,children:"Expanded component"}),e(a,{isExpandable:!0,children:"Collapsed group"}),e(a,{isExpandable:!0,isExpanded:!0,children:"Expanded group"})]}),p=()=>s(l,{children:[e(G,{docsMode:!1,depth:0,children:"Zero"}),e(a,{isExpandable:!0,isExpanded:!0,depth:0,children:"Zero"}),e(a,{isExpandable:!0,isExpanded:!0,depth:1,children:"One"}),e(d,{depth:2,children:"Two"}),e(n,{isExpandable:!0,isExpanded:!0,depth:2,children:"Two"}),e(d,{depth:3,children:"Three"})]}),i=()=>s(l,{children:[e(C,{refId:"foo",itemId:"bar"}),e(o,{"data-ref-id":"baz","data-item-id":"bar","data-nodetype":"story","data-selected":"false",className:"sidebar-item",children:e(d,{children:"Default story"})}),e(o,{"data-ref-id":"baz","data-item-id":"bar","data-nodetype":"story","data-selected":"true",className:"sidebar-item",children:e(d,{children:"Selected story"})}),e(o,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"story","data-selected":"false",className:"sidebar-item",children:e(d,{children:"Highlighted story"})}),e(o,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"story","data-selected":"true",className:"sidebar-item",children:e(d,{children:"Highlighted + Selected story"})}),e(o,{"data-ref-id":"foo","data-item-id":"baz","data-nodetype":"group","data-selected":"false",className:"sidebar-item",children:e(a,{children:"Default group"})}),e(o,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"group","data-selected":"false",className:"sidebar-item",children:e(a,{children:"Highlighted group"})})]});var m,c,N;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <>
    <ComponentNode>Component</ComponentNode>
    <GroupNode>Group</GroupNode>
    <StoryNode>Story</StoryNode>
    <DocumentNode docsMode={false}>Document</DocumentNode>
  </>`,...(N=(c=t.parameters)==null?void 0:c.docs)==null?void 0:N.source}}};var u,y,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => <>
    <ComponentNode isExpandable>Collapsed component</ComponentNode>
    <ComponentNode isExpandable isExpanded>
      Expanded component
    </ComponentNode>
    <GroupNode isExpandable>Collapsed group</GroupNode>
    <GroupNode isExpandable isExpanded>
      Expanded group
    </GroupNode>
  </>`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,b,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
    <DocumentNode docsMode={false} depth={0}>
      Zero
    </DocumentNode>
    <GroupNode isExpandable isExpanded depth={0}>
      Zero
    </GroupNode>
    <GroupNode isExpandable isExpanded depth={1}>
      One
    </GroupNode>
    <StoryNode depth={2}>Two</StoryNode>
    <ComponentNode isExpandable isExpanded depth={2}>
      Two
    </ComponentNode>
    <StoryNode depth={3}>Three</StoryNode>
  </>`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,g,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
    <HighlightStyles refId="foo" itemId="bar" />
    <LeafNodeStyleWrapper data-ref-id="baz" data-item-id="bar" data-nodetype="story" data-selected="false" className="sidebar-item">
      <StoryNode>Default story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper data-ref-id="baz" data-item-id="bar" data-nodetype="story" data-selected="true" className="sidebar-item">
      <StoryNode>Selected story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper data-ref-id="foo" data-item-id="bar" data-nodetype="story" data-selected="false" className="sidebar-item">
      <StoryNode>Highlighted story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper data-ref-id="foo" data-item-id="bar" data-nodetype="story" data-selected="true" className="sidebar-item">
      <StoryNode>Highlighted + Selected story</StoryNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper data-ref-id="foo" data-item-id="baz" data-nodetype="group" data-selected="false" className="sidebar-item">
      <GroupNode>Default group</GroupNode>
    </LeafNodeStyleWrapper>
    <LeafNodeStyleWrapper data-ref-id="foo" data-item-id="bar" data-nodetype="group" data-selected="false" className="sidebar-item">
      <GroupNode>Highlighted group</GroupNode>
    </LeafNodeStyleWrapper>
  </>`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const re=["Types","Expandable","Nested","Selection"];export{r as Expandable,p as Nested,i as Selection,t as Types,re as __namedExportsOrder,te as default};
//# sourceMappingURL=TreeNode.stories-469111c2.js.map
