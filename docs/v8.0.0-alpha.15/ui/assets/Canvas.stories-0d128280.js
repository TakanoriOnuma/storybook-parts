import{R as e}from"./index-f1f2c4b1.js";import{d as Cr}from"./index-356e4a49.js";import{C as O}from"./Canvas-fa956b6d.js";import vr from"./Source.stories-b5f44da4.js";import{P as r,E as wr,C as Lr}from"./Button.stories-8508c894.js";import{WithToolbar as kr,AdditionalActions as Ar,ClassName as Br,SourceStateShown as Nr,SourceStateHidden as Er,SourceStateNone as Dr,DocsCanvasLayoutFullscreen as xr,DocsCanvasLayoutCentered as Tr,DocsCanvasLayoutPadded as Fr,LayoutFullscreen as Or,LayoutCentered as Hr,LayoutPadded as Wr,StoryParameters as _r}from"./CanvasParameters.stories-7a92977f.js";import{CodeLanguage as jr}from"./SourceParameters.stories-79b6ee30.js";import"./DocsContext-d4de082c.js";import"./Source-47bbae77.js";import"./index-3d029e08.js";import"./mapValues-3cd3a2b8.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./Source-7fb69933.js";import"./index-4b2a7d13.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./EmptyBlock-e1d254ca.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./index-9cc128d5.js";import"./Story-9a6f2b2b.js";import"./Story-c31830b5.js";import"./useOf-fbc0458b.js";import"./Preview-3057092b.js";import"./BlockBackgroundStyles-777ce86f.js";import"./index-bb7da91f.js";import"./index-09d824d7.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./Button-bf62ba13.js";import"./EmptyExample-83de1af4.js";const Aa={component:O,parameters:{relativeCsfPaths:["../examples/Button.stories","../examples/CanvasParameters.stories","../examples/SourceParameters.stories"],snippets:{"storybook-blocks-example-button--primary":{code:Cr`
          <Button
            label="Button"
            onClick={() => {}}
            primary={true}
          />`}},docsStyles:!0},decorators:vr.decorators},o={args:{of:r}},t={args:{of:r},parameters:{attached:!1}},s={args:{of:wr}},n={},c={args:{of:void 0},parameters:{chromatic:{disableSnapshot:!0}},decorators:[a=>window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/)?e.createElement("div",null):a()]},m={name:"Prop withToolbar = true",args:{of:r,withToolbar:!0}},u={name:"Prop additionalActions = [ ... ]",args:{of:r,additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/examples/Button.stories.tsx","_blank")}},{title:"Go to documentation",onClick:()=>{window.open("https://storybook.js.org/docs/react/essentials/controls#annotation","_blank")}}]}},d={name:"Prop sourceState = shown",args:{of:r,sourceState:"shown"}},p={name:"Prop sourceState = hidden",args:{of:r,sourceState:"hidden"}},i={name:"Prop sourceState = none",args:{of:r,sourceState:"none"}},l={name:"Prop layout = fullscreen",args:{of:r,layout:"fullscreen"}},S={name:"Prop layout = centered",args:{of:r,layout:"centered"}},y={name:"Prop layout = padded",args:{of:r,layout:"padded"}},g={name:"Prop source = { ... }",args:{of:r,source:{language:"html",code:"<button>           Button          </button>",format:"html"}}},P={name:"Prop story = { ..., inline: true }",args:{of:r,story:{inline:!1,height:"200px"}}},f={name:"Prop story = { ..., autoplay: true}",args:{of:Lr,story:{autoplay:!0}}},br=()=>e.createElement("p",null,"This story sets the ",e.createElement("code",null,"className")," prop on the ",e.createElement("code",null,"Canvas")," to"," ",e.createElement("code",null,"my-custom-classname"),", which will propagate to the preview element. To demonstrate this, it also adds a ",e.createElement("code",null,"style")," tag that sets another background color for that class:"),h={name:"Prop className = my-custom-classname",args:{of:r,className:"my-custom-classname"},render:a=>e.createElement(e.Fragment,null,e.createElement(br,null),e.createElement("style",null,`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        `),e.createElement(O,{...a}))},b={name:"parameters.docs.canvas.withToolbar = true",args:{of:kr}},C={name:"parameters.docs.canvas.additionalActions = [ ... ]",args:{of:Ar}},v={name:"parameters.docs.canvas.className = my-custom-classname",args:{of:Br},render:a=>e.createElement(e.Fragment,null,e.createElement(br,null),e.createElement("style",null,`
          .my-custom-classname {
            background-color: #fd5c9355;
          }
        `),e.createElement(O,{...a}))},w={name:"parameters.docs.canvas.sourceState = shown",args:{of:Nr}},L={name:"parameters.docs.canvas.sourceState = hidden",args:{of:Er}},k={name:"parameters.docs.canvas.sourceState = none",args:{of:Dr}},A={name:"parameters.docs.canvas.layout = fullscreen",args:{of:xr}},B={name:"parameters.docs.canvas.layout = centered",args:{of:Tr}},N={name:"parameters.docs.canvas.layout = padded",args:{of:Fr}},E={name:"parameters.layout = fullscreen",args:{of:Or}},D={name:"parameters.layout = centered",args:{of:Hr}},x={name:"parameters.layout = padded",args:{of:Wr}},T={name:"parameters.docs.source",args:{of:jr}},F={name:"parameters.docs.story",args:{of:_r}};var H,W,_;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Primary
  }
}`,...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var j,G,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Primary
  },
  parameters: {
    attached: false
  }
}`,...(R=(G=t.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var U,I,$;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.ErrorStory
  }
}`,...($=(I=s.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var q,z,J;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(J=(z=n.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,M,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Prop withToolbar = true',
  args: {
    of: ButtonStories.Primary,
    withToolbar: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,te;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Prop sourceState = shown',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'shown'
  }
}`,...(te=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var se,ne,ce;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Prop sourceState = hidden',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'hidden'
  }
}`,...(ce=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var me,ue,de;i.parameters={...i.parameters,docs:{...(me=i.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Prop sourceState = none',
  args: {
    of: ButtonStories.Primary,
    sourceState: 'none'
  }
}`,...(de=(ue=i.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,ie,le;l.parameters={...l.parameters,docs:{...(pe=l.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Prop layout = fullscreen',
  args: {
    of: ButtonStories.Primary,
    layout: 'fullscreen'
  }
}`,...(le=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var Se,ye,ge;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Prop layout = centered',
  args: {
    of: ButtonStories.Primary,
    layout: 'centered'
  }
}`,...(ge=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Pe,fe,he;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Prop layout = padded',
  args: {
    of: ButtonStories.Primary,
    layout: 'padded'
  }
}`,...(he=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,Ce,ve;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var we,Le,ke;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Prop story = { ..., inline: true }',
  args: {
    of: ButtonStories.Primary,
    story: {
      inline: false,
      height: '200px'
    }
  }
}`,...(ke=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ae,Be,Ne;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Prop story = { ..., autoplay: true}',
  args: {
    of: ButtonStories.Clicking,
    story: {
      autoplay: true
    }
  }
}`,...(Ne=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Ee,De,xe;h.parameters={...h.parameters,docs:{...(Ee=h.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(xe=(De=h.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Te,Fe,Oe;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.withToolbar = true',
  args: {
    of: ParameterStories.WithToolbar
  }
}`,...(Oe=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var He,We,_e;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.additionalActions = [ ... ]',
  args: {
    of: ParameterStories.AdditionalActions
  }
}`,...(_e=(We=C.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var je,Ge,Re;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Re=(Ge=v.parameters)==null?void 0:Ge.docs)==null?void 0:Re.source}}};var Ue,Ie,$e;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = shown',
  args: {
    of: ParameterStories.SourceStateShown
  }
}`,...($e=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:$e.source}}};var qe,ze,Je;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = hidden',
  args: {
    of: ParameterStories.SourceStateHidden
  }
}`,...(Je=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ke,Me,Qe;k.parameters={...k.parameters,docs:{...(Ke=k.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.sourceState = none',
  args: {
    of: ParameterStories.SourceStateNone
  }
}`,...(Qe=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Ve,Xe,Ye;A.parameters={...A.parameters,docs:{...(Ve=A.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = fullscreen',
  args: {
    of: ParameterStories.DocsCanvasLayoutFullscreen
  }
}`,...(Ye=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,er,rr;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = centered',
  args: {
    of: ParameterStories.DocsCanvasLayoutCentered
  }
}`,...(rr=(er=B.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var ar,or,tr;N.parameters={...N.parameters,docs:{...(ar=N.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  name: 'parameters.docs.canvas.layout = padded',
  args: {
    of: ParameterStories.DocsCanvasLayoutPadded
  }
}`,...(tr=(or=N.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var sr,nr,cr;E.parameters={...E.parameters,docs:{...(sr=E.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  name: 'parameters.layout = fullscreen',
  args: {
    of: ParameterStories.LayoutFullscreen
  }
}`,...(cr=(nr=E.parameters)==null?void 0:nr.docs)==null?void 0:cr.source}}};var mr,ur,dr;D.parameters={...D.parameters,docs:{...(mr=D.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  name: 'parameters.layout = centered',
  args: {
    of: ParameterStories.LayoutCentered
  }
}`,...(dr=(ur=D.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var pr,ir,lr;x.parameters={...x.parameters,docs:{...(pr=x.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  name: 'parameters.layout = padded',
  args: {
    of: ParameterStories.LayoutPadded
  }
}`,...(lr=(ir=x.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var Sr,yr,gr;T.parameters={...T.parameters,docs:{...(Sr=T.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  name: 'parameters.docs.source',
  args: {
    of: SourceParameterStories.CodeLanguage
  }
}`,...(gr=(yr=T.parameters)==null?void 0:yr.docs)==null?void 0:gr.source}}};var Pr,fr,hr;F.parameters={...F.parameters,docs:{...(Pr=F.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  name: 'parameters.docs.story',
  args: {
    of: ParameterStories.StoryParameters
  }
}`,...(hr=(fr=F.parameters)==null?void 0:fr.docs)==null?void 0:hr.source}}};const Ba=["OfAttached","OfUnattached","OfError","DefaultAttached","OfUndefined","PropWithToolbar","PropAdditionalActions","PropSourceStateShown","PropSourceStateHidden","PropSourceStateNone","PropLayoutFullscreen","PropLayoutCentered","PropLayoutPadded","PropSource","PropInlineStory","PropAutoplayingStory","PropClassName","ParameterWithToolbar","ParameterAdditionalActions","ParameterClassName","ParametersSourceStateShown","ParametersSourceStateHidden","ParametersSourceStateNone","ParameterDocsCanvasLayoutFullscreen","ParameterDocsCanvasLayoutCentered","ParameterDocsCanvasLayoutPadded","ParameterLayoutFullscreen","ParameterLayoutCentered","ParameterLayoutPadded","ParameterSource","ParameterStory"];export{n as DefaultAttached,o as OfAttached,s as OfError,t as OfUnattached,c as OfUndefined,C as ParameterAdditionalActions,v as ParameterClassName,B as ParameterDocsCanvasLayoutCentered,A as ParameterDocsCanvasLayoutFullscreen,N as ParameterDocsCanvasLayoutPadded,D as ParameterLayoutCentered,E as ParameterLayoutFullscreen,x as ParameterLayoutPadded,T as ParameterSource,F as ParameterStory,b as ParameterWithToolbar,L as ParametersSourceStateHidden,k as ParametersSourceStateNone,w as ParametersSourceStateShown,u as PropAdditionalActions,f as PropAutoplayingStory,h as PropClassName,P as PropInlineStory,S as PropLayoutCentered,l as PropLayoutFullscreen,y as PropLayoutPadded,g as PropSource,p as PropSourceStateHidden,i as PropSourceStateNone,d as PropSourceStateShown,m as PropWithToolbar,Ba as __namedExportsOrder,Aa as default};
//# sourceMappingURL=Canvas.stories-0d128280.js.map
