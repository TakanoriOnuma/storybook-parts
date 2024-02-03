import{j as r,a as i}from"./jsx-runtime-0f39435c.js";import{w as Lr,u as Mr}from"./index-1c0ca390.js";import{e as O}from"./index-7a180320.js";import{C as t}from"./Canvas-19a6efbf.js";import{S as o}from"./Story-8b49808a.js";import{P as n,S as a,L as s}from"./Button.stories-01203404.js";import{LayoutFullscreen as Or}from"./CanvasParameters.stories-ba728c24.js";import{a as L}from"./Source-8ef45ad9.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-341540c2.js";import"./index-d475d2ea.js";import"./lz-string-475d838e.js";import"./index-df581bf3.js";import"./index-356e4a49.js";import"./isEqual-09b8ceb9.js";import"./_baseIsEqual-a479ac5d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./Preview-8b59dcd4.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./index-5a529529.js";import"./index-90790cc0.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./Source-d9d734f3.js";import"./EmptyBlock-6324a57c.js";import"./Story-134a3f6e.js";import"./BlockBackgroundStyles-d227aefd.js";import"./DocsContext-001c90b3.js";import"./useStory-cba48327.js";import"./useOf-fa9945b9.js";import"./Button-fe97466d.js";import"./EmptyExample-504b79c9.js";import"./index-74303de9.js";import"./mapValues-511dc51c.js";import"./_baseAssignValue-531dc4d6.js";import"./_baseIteratee-11045650.js";import"./isSymbol-de103834.js";import"./index-ee3f53bc.js";const we={component:t,parameters:{theme:"light",relativeCsfPaths:["../examples/Button.stories","../examples/CanvasParameters.stories"],docsStyles:!0},render:e=>r(t,{...e,children:r(o,{of:n})})},P=e=>async({canvasElement:M})=>{const A=Lr(M),N=await A.findByText("Show code");await O(N).toBeInTheDocument(),await Mr.click(N);const Pr=await A.findAllByText("label");await O(Pr).toHaveLength(e)},u={},m={parameters:{attached:!1}},c={parameters:{attached:!1},render:e=>r(t,{...e,children:r("p",{children:"This is a plain paragraph, no stories"})})},p={...c,args:{mdxSource:"const customStaticSource = true;"}},l={args:{withSource:L.OPEN}},d={args:{withSource:L.CLOSED}},S={name:"With MDX Source",args:{withSource:L.OPEN,mdxSource:`<Button
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
}`,...(wr=(xr=w.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};const Le=["BasicStoryChild","BasicStoryChildUnattached","NoStoryChildrenUnattached","NoStoryChildrenUnattachedWithMDXSource","WithSourceOpen","WithSourceClosed","WithMdxSource","WithoutSource","LayoutProp","LayoutAsChildProp","LayoutAsChildPropMultiple","LayoutAsParameter","MultipleChildren","MultipleChildrenColumns","MultipleChildrenThreeColumns","MixedChildrenStories"];export{u as BasicStoryChild,m as BasicStoryChildUnattached,C as LayoutAsChildProp,f as LayoutAsChildPropMultiple,g as LayoutAsParameter,y as LayoutProp,w as MixedChildrenStories,B as MultipleChildren,v as MultipleChildrenColumns,x as MultipleChildrenThreeColumns,c as NoStoryChildrenUnattached,p as NoStoryChildrenUnattachedWithMDXSource,S as WithMdxSource,d as WithSourceClosed,l as WithSourceOpen,h as WithoutSource,Le as __namedExportsOrder,we as default};
//# sourceMappingURL=InternalCanvas.stories-4c8fd973.js.map
