import{a as s,F as i,j as e}from"./jsx-runtime-0f39435c.js";import{S as d,a as p,G as o,D as E,H as G}from"./HighlightStyles-bdd60786.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";const q={title:"Sidebar/TreeNode",parameters:{layout:"fullscreen",withSymbols:!0},component:d},t=()=>s(i,{children:[e(p,{children:"Component"}),e(o,{children:"Group"}),e(d,{children:"Story"}),e(E,{docsMode:!1,children:"Document"})]}),a=()=>s(i,{children:[e(p,{isExpandable:!0,children:"Collapsed component"}),e(p,{isExpandable:!0,isExpanded:!0,children:"Expanded component"}),e(o,{isExpandable:!0,children:"Collapsed group"}),e(o,{isExpandable:!0,isExpanded:!0,children:"Expanded group"})]}),r=()=>s(i,{children:[e(E,{docsMode:!1,depth:0,children:"Zero"}),e(o,{isExpandable:!0,isExpanded:!0,depth:0,children:"Zero"}),e(o,{isExpandable:!0,isExpanded:!0,depth:1,children:"One"}),e(d,{depth:2,children:"Two"}),e(p,{isExpandable:!0,isExpanded:!0,depth:2,children:"Two"}),e(d,{depth:3,children:"Three"})]}),n=()=>s(i,{children:[e(G,{refId:"foo",itemId:"bar"}),e(d,{"data-ref-id":"baz","data-item-id":"bar","data-nodetype":"story","data-selected":"false",children:"Default story"}),e(d,{"data-ref-id":"baz","data-item-id":"bar","data-nodetype":"story","data-selected":"true",children:"Selected story"}),e(d,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"story","data-selected":"false",children:"Highlighted story"}),e(d,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"story","data-selected":"true",children:"Highlighted + Selected story"}),e(o,{"data-ref-id":"foo","data-item-id":"baz","data-nodetype":"group","data-selected":"false",children:"Default group"}),e(o,{"data-ref-id":"foo","data-item-id":"bar","data-nodetype":"group","data-selected":"false",children:"Highlighted group"})]});var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => <>
    <ComponentNode>Component</ComponentNode>
    <GroupNode>Group</GroupNode>
    <StoryNode>Story</StoryNode>
    <DocumentNode docsMode={false}>Document</DocumentNode>
  </>`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => <>
    <ComponentNode isExpandable>Collapsed component</ComponentNode>
    <ComponentNode isExpandable isExpanded>
      Expanded component
    </ComponentNode>
    <GroupNode isExpandable>Collapsed group</GroupNode>
    <GroupNode isExpandable isExpanded>
      Expanded group
    </GroupNode>
  </>`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,f,b;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`() => <>
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
  </>`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
    <HighlightStyles refId="foo" itemId="bar" />
    <StoryNode data-ref-id="baz" data-item-id="bar" data-nodetype="story" data-selected="false">
      Default story
    </StoryNode>
    <StoryNode data-ref-id="baz" data-item-id="bar" data-nodetype="story" data-selected="true">
      Selected story
    </StoryNode>
    <StoryNode data-ref-id="foo" data-item-id="bar" data-nodetype="story" data-selected="false">
      Highlighted story
    </StoryNode>
    <StoryNode data-ref-id="foo" data-item-id="bar" data-nodetype="story" data-selected="true">
      Highlighted + Selected story
    </StoryNode>
    <GroupNode data-ref-id="foo" data-item-id="baz" data-nodetype="group" data-selected="false">
      Default group
    </GroupNode>
    <GroupNode data-ref-id="foo" data-item-id="bar" data-nodetype="group" data-selected="false">
      Highlighted group
    </GroupNode>
  </>`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const v=["Types","Expandable","Nested","Selection"];export{a as Expandable,r as Nested,n as Selection,t as Types,v as __namedExportsOrder,q as default};
//# sourceMappingURL=TreeNode.stories-d27ab9fe.js.map
