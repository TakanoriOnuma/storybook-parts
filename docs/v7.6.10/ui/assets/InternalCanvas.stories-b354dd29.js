import{j as r,a as i}from"./jsx-runtime-31019b9d.js";import{w as Lr,u as Mr}from"./index-73c7a0c2.js";import{e as O}from"./index-728c6c1a.js";import{C as t}from"./Canvas-97014b2f.js";import{S as o}from"./Story-a57355fb.js";import{P as n,S as a,L as s}from"./Button.stories-62bed46d.js";import{LayoutFullscreen as Or}from"./CanvasParameters.stories-e8f6c5c0.js";import{c as L}from"./Source-901beaec.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./index-9ed7e0e5.js";import"./index-356e4a49.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./DocsContext-57fe6f9a.js";import"./useStory-2e815b3a.js";import"./useOf-b3266417.js";import"./Preview-7e73265d.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./polished.esm-b305131d.js";import"./index-9e46a6e4.js";import"./index-0d90a496.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./BlockBackgroundStyles-8d78b434.js";import"./Story-05e15bc9.js";import"./Source-9e9bdbea.js";import"./EmptyBlock-f69a59b0.js";import"./Button-c17b619e.js";import"./EmptyExample-da7392d3.js";import"./index-c768ebd8.js";import"./mapValues-e4849353.js";import"./_baseAssignValue-dc207ad3.js";import"./_baseIteratee-b502d39c.js";import"./isSymbol-6ab5993c.js";import"./index-177da4c8.js";const fe={component:t,parameters:{theme:"light",relativeCsfPaths:["../examples/Button.stories","../examples/CanvasParameters.stories"],docsStyles:!0},render:e=>r(t,{...e,children:r(o,{of:n})})},P=e=>async({canvasElement:M})=>{const A=Lr(M),N=await A.findByText("Show code");await O(N).toBeInTheDocument(),await Mr.click(N);const Pr=await A.findAllByText("label");await O(Pr).toHaveLength(e)},u={},m={parameters:{attached:!1}},c={parameters:{attached:!1},render:e=>r(t,{...e,children:r("p",{children:"This is a plain paragraph, no stories"})})},p={...c,args:{mdxSource:"const customStaticSource = true;"}},l={args:{withSource:L.OPEN}},d={args:{withSource:L.CLOSED}},S={name:"With MDX Source",args:{withSource:L.OPEN,mdxSource:`<Button
  label="Button"
  primary
  onClick={() => {
    console.log('this is custom source for the source viewer')
  }}
/>`}},h={args:{withSource:L.NONE}},y={args:{layout:"fullscreen"}},C={render:e=>r(t,{...e,children:r(o,{of:n,parameters:{layout:"fullscreen"}})})},f={args:{isColumn:!0},render:e=>i(t,{...e,children:[r("h1",{children:"Fullscreen"}),r(o,{of:a}),r(o,{of:s,parameters:{layout:"fullscreen"}}),r(o,{of:n})]})},g={render:e=>r(t,{...e,children:r(o,{of:Or})})},B={render:e=>i(t,{...e,children:[r(o,{of:a}),r(o,{of:s})]}),play:P(2)},v={args:{isColumn:!0},render:e=>i(t,{...e,children:[r(o,{of:a}),r(o,{of:s})]}),play:P(2)},x={args:{columns:3},render:e=>i(t,{...e,children:[r(o,{of:a}),r(o,{of:a}),r(o,{of:a}),r(o,{of:s}),r(o,{of:s}),r(o,{of:s}),r(o,{of:n}),r(o,{of:n}),r(o,{of:n})]}),play:P(9)},w={args:{isColumn:!0},render:e=>i(t,{...e,children:[r("h1",{children:"Headline for secondary Button"}),r(o,{of:a}),r("h1",{children:"Headline for primary Button"}),r(o,{of:n})]}),play:async e=>{await P(2)(e);const M=Lr(e.canvasElement);O(M.queryAllByText(/Headline for /i)).toHaveLength(2)}};var E,W,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var T,D,U;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    attached: false
  }
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var I,b,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    attached: false
  },
  render: args => {
    return <Canvas {...args}>
        <p>This is a plain paragraph, no stories</p>
      </Canvas>;
  }
}`,...(F=(b=c.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var X,j,k;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...NoStoryChildrenUnattached,
  args: {
    mdxSource: \`const customStaticSource = true;\`
  }
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,_,z;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    withSource: SourceState.OPEN
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    withSource: SourceState.CLOSED
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,V;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With MDX Source',
  args: {
    withSource: SourceState.OPEN,
    mdxSource: \`<Button
  label="Button"
  primary
  onClick={() => {
    console.log('this is custom source for the source viewer')
  }}
/>\`
  }
}`,...(V=(R=S.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    withSource: SourceState.NONE
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,or;y.parameters={...y.parameters,docs:{...(rr=y.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    layout: 'fullscreen'
  }
}`,...(or=(er=y.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};var tr,nr,ar;C.parameters={...C.parameters,docs:{...(tr=C.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: args => {
    return <Canvas {...args}>
        <StoryComponent of={ButtonStories.Primary} parameters={{
        layout: 'fullscreen'
      }} />
      </Canvas>;
  }
}`,...(ar=(nr=C.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var sr,cr,ir;f.parameters={...f.parameters,docs:{...(sr=f.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    isColumn: true
  },
  render: args => {
    return <Canvas {...args}>
        <h1>Fullscreen</h1>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} parameters={{
        layout: 'fullscreen'
      }} />
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>;
  }
}`,...(ir=(cr=f.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var ur,mr,pr;g.parameters={...g.parameters,docs:{...(ur=g.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  render: args => {
    return <Canvas {...args}>
        <StoryComponent of={CanvasParameterStories.LayoutFullscreen} />
      </Canvas>;
  }
}`,...(pr=(mr=g.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};var lr,dr,Sr;B.parameters={...B.parameters,docs:{...(lr=B.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  render: args => {
    return <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
      </Canvas>;
  },
  play: expectAmountOfStoriesInSource(2)
}`,...(Sr=(dr=B.parameters)==null?void 0:dr.docs)==null?void 0:Sr.source}}};var hr,yr,Cr;v.parameters={...v.parameters,docs:{...(hr=v.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    isColumn: true
  },
  render: args => {
    return <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
      </Canvas>;
  },
  play: expectAmountOfStoriesInSource(2)
}`,...(Cr=(yr=v.parameters)==null?void 0:yr.docs)==null?void 0:Cr.source}}};var fr,gr,Br;x.parameters={...x.parameters,docs:{...(fr=x.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    columns: 3
  },
  render: args => {
    return <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Primary} />
        <StoryComponent of={ButtonStories.Primary} />
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>;
  },
  play: expectAmountOfStoriesInSource(9)
}`,...(Br=(gr=x.parameters)==null?void 0:gr.docs)==null?void 0:Br.source}}};var vr,xr,wr;w.parameters={...w.parameters,docs:{...(vr=w.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    isColumn: true
  },
  render: args => {
    return <Canvas {...args}>
        <h1>Headline for secondary Button</h1>
        <StoryComponent of={ButtonStories.Secondary} />
        <h1>Headline for primary Button</h1>
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>;
  },
  play: async args => {
    // this function will also expand the source code
    await expectAmountOfStoriesInSource(2)(args);
    const canvas = within(args.canvasElement);

    // Assert - only find two headlines, those in the story, and none in the source code
    expect(canvas.queryAllByText(/Headline for /i)).toHaveLength(2);
  }
}`,...(wr=(xr=w.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};const ge=["BasicStoryChild","BasicStoryChildUnattached","NoStoryChildrenUnattached","NoStoryChildrenUnattachedWithMDXSource","WithSourceOpen","WithSourceClosed","WithMdxSource","WithoutSource","LayoutProp","LayoutAsChildProp","LayoutAsChildPropMultiple","LayoutAsParameter","MultipleChildren","MultipleChildrenColumns","MultipleChildrenThreeColumns","MixedChildrenStories"];export{u as BasicStoryChild,m as BasicStoryChildUnattached,C as LayoutAsChildProp,f as LayoutAsChildPropMultiple,g as LayoutAsParameter,y as LayoutProp,w as MixedChildrenStories,B as MultipleChildren,v as MultipleChildrenColumns,x as MultipleChildrenThreeColumns,c as NoStoryChildrenUnattached,p as NoStoryChildrenUnattachedWithMDXSource,S as WithMdxSource,d as WithSourceClosed,l as WithSourceOpen,h as WithoutSource,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=InternalCanvas.stories-b354dd29.js.map
