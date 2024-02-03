import{j as r,a as H,F as Cr}from"./jsx-runtime-0f39435c.js";import{d as wr}from"./index-356e4a49.js";import{C as j}from"./Canvas-19a6efbf.js";import Lr from"./Source.stories-518e647c.js";import{P as e,E as kr,C as Ar}from"./Button.stories-01203404.js";import{WithToolbar as Br,AdditionalActions as Nr,ClassName as xr,SourceStateShown as Dr,SourceStateHidden as Tr,SourceStateNone as Fr,DocsCanvasLayoutFullscreen as Or,DocsCanvasLayoutCentered as Hr,DocsCanvasLayoutPadded as jr,LayoutFullscreen as Er,LayoutCentered as Wr,LayoutPadded as _r,StoryParameters as Gr}from"./CanvasParameters.stories-ba728c24.js";import{CodeLanguage as Ur}from"./SourceParameters.stories-2d06744c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./Preview-8b59dcd4.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-90790cc0.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./Source-d9d734f3.js";import"./EmptyBlock-6324a57c.js";import"./Story-134a3f6e.js";import"./BlockBackgroundStyles-d227aefd.js";import"./DocsContext-001c90b3.js";import"./Source-8ef45ad9.js";import"./index-74303de9.js";import"./mapValues-511dc51c.js";import"./_baseAssignValue-531dc4d6.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./index-ee3f53bc.js";import"./useStory-cba48327.js";import"./Story-8b49808a.js";import"./useOf-fa9945b9.js";import"./index-7a180320.js";import"./index-341540c2.js";import"./isEqual-09b8ceb9.js";import"./index-1c0ca390.js";import"./lz-string-475d838e.js";import"./index-df581bf3.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./Button-fe97466d.js";import"./EmptyExample-504b79c9.js";const _a={component:j,parameters:{relativeCsfPaths:["../examples/Button.stories","../examples/CanvasParameters.stories","../examples/SourceParameters.stories"],snippets:{"storybook-blocks-example-button--primary":{code:wr`
          <Button
            label="Button"
            onClick={() => {}}
            primary={true}
          />`}},docsStyles:!0},decorators:Lr.decorators},o={args:{of:e}},s={args:{of:e},parameters:{attached:!1}},t={args:{of:kr}},n={},c={args:{of:void 0},parameters:{chromatic:{disableSnapshot:!0}},decorators:[a=>window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/)?r("div",{}):a()]},m={name:"Prop withToolbar = true",args:{of:e,withToolbar:!0}},d={name:"Prop additionalActions = [ ... ]",args:{of:e,additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/examples/Button.stories.tsx","_blank")}},{title:"Go to documentation",onClick:()=>{window.open("https://storybook.js.org/docs/react/essentials/controls#annotation","_blank")}}]}},i={name:"Prop sourceState = shown",args:{of:e,sourceState:"shown"}},p={name:"Prop sourceState = hidden",args:{of:e,sourceState:"hidden"}},u={name:"Prop sourceState = none",args:{of:e,sourceState:"none"}},l={name:"Prop layout = fullscreen",args:{of:e,layout:"fullscreen"}},S={name:"Prop layout = centered",args:{of:e,layout:"centered"}},y={name:"Prop layout = padded",args:{of:e,layout:"padded"}},g={name:"Prop source = { ... }",args:{of:e,source:{language:"html",code:"<button>           Button          </button>",format:"html"}}},P={name:"Prop story = { ..., inline: true }",args:{of:e,story:{inline:!1,height:"200px"}}},f={name:"Prop story = { ..., autoplay: true}",args:{of:Ar,story:{autoplay:!0}}},vr=()=>H("p",{children:["This story sets the ",r("code",{children:"className"})," prop on the ",r("code",{children:"Canvas"})," to"," ",r("code",{children:"my-custom-classname"}),", which will propagate to the preview element. To demonstrate this, it also adds a ",r("code",{children:"style"})," tag that sets another background color for that class:"]}),h={name:"Prop className = my-custom-classname",args:{of:e,className:"my-custom-classname"},render:a=>H(Cr,{children:[r(vr,{}),r("style",{children:`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        `}),r(j,{...a})]})},b={name:"parameters.docs.canvas.withToolbar = true",args:{of:Br}},C={name:"parameters.docs.canvas.additionalActions = [ ... ]",args:{of:Nr}},v={name:"parameters.docs.canvas.className = my-custom-classname",args:{of:xr},render:a=>H(Cr,{children:[r(vr,{}),r("style",{children:`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        `}),r(j,{...a})]})},w={name:"parameters.docs.canvas.sourceState = shown",args:{of:Dr}},L={name:"parameters.docs.canvas.sourceState = hidden",args:{of:Tr}},k={name:"parameters.docs.canvas.sourceState = none",args:{of:Fr}},A={name:"parameters.docs.canvas.layout = fullscreen",args:{of:Or}},B={name:"parameters.docs.canvas.layout = centered",args:{of:Hr}},N={name:"parameters.docs.canvas.layout = padded",args:{of:jr}},x={name:"parameters.layout = fullscreen",args:{of:Er}},D={name:"parameters.layout = centered",args:{of:Wr}},T={name:"parameters.layout = padded",args:{of:_r}},F={name:"parameters.docs.source",args:{of:Ur}},O={name:"parameters.docs.story",args:{of:Gr}};var E,W,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Primary
  }
}`,...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var G,U,I;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Primary
  },
  parameters: {
    attached: false
  }
}`,...(I=(U=s.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var R,$,q;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.ErrorStory
  }
}`,...(q=($=t.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,J,K;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    // @ts-expect-error this is supposed to be undefined
    // eslint-disable-next-line import/namespace
    of: ButtonStories.NotDefined
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  decorators: [s => window?.navigator.userAgent.match(/StorybookTestRunner/) ? <div /> : s()]
}`,...(V=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Prop withToolbar = true',
  args: {
    of: ButtonStories.Primary,
    withToolbar: true
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Prop additionalActions = [ ... ]',
  args: {
    of: ButtonStories.Primary,
    additionalActions: [{
      title: 'Open in GitHub',
      onClick: () => {
        window.open('https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/examples/Button.stories.tsx', '_blank');
      }
    }, {
      title: 'Go to documentation',
      onClick: () => {
        window.open('https://storybook.js.org/docs/react/essentials/controls#annotation', '_blank');
      }
    }]
  }
}`,...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,te;i.parameters={...i.parameters,docs:{...(oe=i.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Prop sourceState = shown',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'shown'
  }
}`,...(te=(se=i.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ce,me;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Prop sourceState = hidden',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'hidden'
  }
}`,...(me=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,ie,pe;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Prop sourceState = none',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'none'
  }
}`,...(pe=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ue,le,Se;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Prop layout = fullscreen',
  args: {
    of: ButtonStories.Primary,
    layout: 'fullscreen'
  }
}`,...(Se=(le=l.parameters)==null?void 0:le.docs)==null?void 0:Se.source}}};var ye,ge,Pe;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Prop layout = centered',
  args: {
    of: ButtonStories.Primary,
    layout: 'centered'
  }
}`,...(Pe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Pe.source}}};var fe,he,be;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Prop layout = padded',
  args: {
    of: ButtonStories.Primary,
    layout: 'padded'
  }
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Ce,ve,we;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Prop source = { ... }',
  args: {
    of: ButtonStories.Primary,
    source: {
      language: 'html',
      code: '<button>           Button          </button>',
      // spaces should be removed by the prettier formatter
      format: 'html'
    }
  }
}`,...(we=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Le,ke,Ae;P.parameters={...P.parameters,docs:{...(Le=P.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Prop story = { ..., inline: true }',
  args: {
    of: ButtonStories.Primary,
    story: {
      inline: false,
      height: '200px'
    }
  }
}`,...(Ae=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Be,Ne,xe;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Prop story = { ..., autoplay: true}',
  args: {
    of: ButtonStories.Clicking,
    story: {
      autoplay: true
    }
  }
}`,...(xe=(Ne=f.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var De,Te,Fe;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Prop className = my-custom-classname',
  args: {
    of: ButtonStories.Primary,
    className: 'my-custom-classname'
  },
  render: args => <>
      <ClassNameStoryDescription />
      <style>
        {\`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        \`}
      </style>
      <Canvas {...args} />
    </>
}`,...(Fe=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var Oe,He,je;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.withToolbar = true',
  args: {
    of: ParameterStories.WithToolbar
  }
}`,...(je=(He=b.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Ee,We,_e;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.additionalActions = [ ... ]',
  args: {
    of: ParameterStories.AdditionalActions
  }
}`,...(_e=(We=C.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Ge,Ue,Ie;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.className = my-custom-classname',
  args: {
    of: ParameterStories.ClassName
  },
  render: args => <>
      <ClassNameStoryDescription />
      <style>
        {\`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        \`}
      </style>
      <Canvas {...args} />
    </>
}`,...(Ie=(Ue=v.parameters)==null?void 0:Ue.docs)==null?void 0:Ie.source}}};var Re,$e,qe;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = shown',
  args: {
    of: ParameterStories.SourceStateShown
  }
}`,...(qe=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var ze,Je,Ke;L.parameters={...L.parameters,docs:{...(ze=L.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = hidden',
  args: {
    of: ParameterStories.SourceStateHidden
  }
}`,...(Ke=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Me,Qe,Ve;k.parameters={...k.parameters,docs:{...(Me=k.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = none',
  args: {
    of: ParameterStories.SourceStateNone
  }
}`,...(Ve=(Qe=k.parameters)==null?void 0:Qe.docs)==null?void 0:Ve.source}}};var Xe,Ye,Ze;A.parameters={...A.parameters,docs:{...(Xe=A.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = fullscreen',
  args: {
    of: ParameterStories.DocsCanvasLayoutFullscreen
  }
}`,...(Ze=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var er,rr,ar;B.parameters={...B.parameters,docs:{...(er=B.parameters)==null?void 0:er.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = centered',
  args: {
    of: ParameterStories.DocsCanvasLayoutCentered
  }
}`,...(ar=(rr=B.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var or,sr,tr;N.parameters={...N.parameters,docs:{...(or=N.parameters)==null?void 0:or.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = padded',
  args: {
    of: ParameterStories.DocsCanvasLayoutPadded
  }
}`,...(tr=(sr=N.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var nr,cr,mr;x.parameters={...x.parameters,docs:{...(nr=x.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  name: 'parameters.layout = fullscreen',
  args: {
    of: ParameterStories.LayoutFullscreen
  }
}`,...(mr=(cr=x.parameters)==null?void 0:cr.docs)==null?void 0:mr.source}}};var dr,ir,pr;D.parameters={...D.parameters,docs:{...(dr=D.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  name: 'parameters.layout = centered',
  args: {
    of: ParameterStories.LayoutCentered
  }
}`,...(pr=(ir=D.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};var ur,lr,Sr;T.parameters={...T.parameters,docs:{...(ur=T.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  name: 'parameters.layout = padded',
  args: {
    of: ParameterStories.LayoutPadded
  }
}`,...(Sr=(lr=T.parameters)==null?void 0:lr.docs)==null?void 0:Sr.source}}};var yr,gr,Pr;F.parameters={...F.parameters,docs:{...(yr=F.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  name: 'parameters.docs.source',
  args: {
    of: SourceParameterStories.CodeLanguage
  }
}`,...(Pr=(gr=F.parameters)==null?void 0:gr.docs)==null?void 0:Pr.source}}};var fr,hr,br;O.parameters={...O.parameters,docs:{...(fr=O.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  name: 'parameters.docs.story',
  args: {
    of: ParameterStories.StoryParameters
  }
}`,...(br=(hr=O.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};const Ga=["OfAttached","OfUnattached","OfError","DefaultAttached","OfUndefined","PropWithToolbar","PropAdditionalActions","PropSourceStateShown","PropSourceStateHidden","PropSourceStateNone","PropLayoutFullscreen","PropLayoutCentered","PropLayoutPadded","PropSource","PropInlineStory","PropAutoplayingStory","PropClassName","ParameterWithToolbar","ParameterAdditionalActions","ParameterClassName","ParametersSourceStateShown","ParametersSourceStateHidden","ParametersSourceStateNone","ParameterDocsCanvasLayoutFullscreen","ParameterDocsCanvasLayoutCentered","ParameterDocsCanvasLayoutPadded","ParameterLayoutFullscreen","ParameterLayoutCentered","ParameterLayoutPadded","ParameterSource","ParameterStory"];export{n as DefaultAttached,o as OfAttached,t as OfError,s as OfUnattached,c as OfUndefined,C as ParameterAdditionalActions,v as ParameterClassName,B as ParameterDocsCanvasLayoutCentered,A as ParameterDocsCanvasLayoutFullscreen,N as ParameterDocsCanvasLayoutPadded,D as ParameterLayoutCentered,x as ParameterLayoutFullscreen,T as ParameterLayoutPadded,F as ParameterSource,O as ParameterStory,b as ParameterWithToolbar,L as ParametersSourceStateHidden,k as ParametersSourceStateNone,w as ParametersSourceStateShown,d as PropAdditionalActions,f as PropAutoplayingStory,h as PropClassName,P as PropInlineStory,S as PropLayoutCentered,l as PropLayoutFullscreen,y as PropLayoutPadded,g as PropSource,p as PropSourceStateHidden,u as PropSourceStateNone,i as PropSourceStateShown,m as PropWithToolbar,Ga as __namedExportsOrder,_a as default};
//# sourceMappingURL=Canvas.stories-dd4fd16d.js.map
