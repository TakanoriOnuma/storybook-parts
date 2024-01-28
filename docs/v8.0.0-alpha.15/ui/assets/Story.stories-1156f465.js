import{R as Ae}from"./index-f1f2c4b1.js";import{a as Be,e as Ee}from"./index-bb7da91f.js";import{S as be}from"./Story-9a6f2b2b.js";import{P,S as Fe,m as We,E as we,C as He,a as Oe}from"./Button.stories-8508c894.js";import{ForceInitialArgs as De}from"./Story.stories-142ca026.js";import{NoParameters as I,Height as ke,InlineFalse as Ce,InlineFalseWithHeight as ve,InlineFalseWithIframeHeight as Ne}from"./StoryParameters.stories-7c3e2442.js";import"./DocsContext-d4de082c.js";import"./Story-c31830b5.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-4b2a7d13.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./index-09d824d7.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./Button-bf62ba13.js";const or={component:be,parameters:{relativeCsfPaths:["../examples/Button.stories","../examples/StoryParameters.stories"],docsStyles:!0}},r={},a={args:{of:P}},t={args:{of:Fe,meta:We}},s={parameters:{attached:!1},args:{of:Fe,meta:We}},o={args:{of:we}},n={args:{of:void 0},parameters:{chromatic:{disableSnapshot:!0}},decorators:[y=>window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/)?Ae.createElement("div",null):y()]},e={args:{of:I,inline:!0}},i={...e,args:{of:I,inline:!0,height:"600px"}},m={...e,args:{of:ke}},c={...e,name:"IFrame Props",args:{of:I,inline:!1},parameters:{chromatic:{delay:3e3}},play:async({canvasElement:y})=>{await Be(async()=>{const xe=y.querySelector("iframe");await Ee(xe.contentDocument.querySelector('[data-testid="sb-iframe-text"]')).toBeVisible()},{timeout:1e4})}},p={...e,name:"IFrame With Parameter",args:{of:Ce}},l={...e,name:"IFrame With Height Props",args:{of:I,inline:!1,height:"300px"}},u={...e,name:"IFrame With Height Parameter",args:{of:ve}},d={...e,name:"IFrame With IFrame Height Parameter",args:{of:Ne}},g={args:{of:He},parameters:{chromatic:{delay:500}}},h={args:{of:He,autoplay:!0},parameters:{chromatic:{delay:500}}},f={args:{of:Oe},parameters:{chromatic:{delay:500}}},S={...De,args:{of:P,storyExport:P,__forceInitialArgs:!0}};var F,W,H;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(H=(W=r.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var x,A,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Primary
  }
}`,...(B=(A=a.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,b,w;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Secondary,
    meta: ButtonStories.default
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var O,D,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    attached: false
  },
  args: {
    of: ButtonStories.Secondary,
    meta: ButtonStories.default
  }
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var C,v,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.ErrorStory
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var _,q,M;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,U,T;e.parameters={...e.parameters,docs:{...(R=e.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    of: StoryParametersStories.NoParameters,
    inline: true
  }
}`,...(T=(U=e.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var V,$,j;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Inline,
  args: {
    of: StoryParametersStories.NoParameters,
    inline: true,
    height: '600px'
  }
}`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var z,G,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Inline,
  args: {
    of: StoryParametersStories.Height
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Inline,
  name: 'IFrame Props',
  args: {
    of: StoryParametersStories.NoParameters,
    inline: false
  },
  parameters: {
    chromatic: {
      delay: 3000
    }
  },
  play: async ({
    canvasElement
  }) => {
    // this is mostly to fix flakiness in chromatic, specifically on Safari
    // where the scrollbar appears inconsistently and causes the snapshot to be different
    await waitFor(async () => {
      const iframeEl = canvasElement.querySelector('iframe');
      await expect(iframeEl!.contentDocument!.querySelector('[data-testid="sb-iframe-text"]')).toBeVisible();
    }, {
      timeout: 10000
    });
  }
}`,...(Q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Inline,
  name: 'IFrame With Parameter',
  args: {
    of: StoryParametersStories.InlineFalse
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Inline,
  name: 'IFrame With Height Props',
  args: {
    of: StoryParametersStories.NoParameters,
    inline: false,
    height: '300px'
  }
}`,...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Inline,
  name: 'IFrame With Height Parameter',
  args: {
    of: StoryParametersStories.InlineFalseWithHeight
  }
}`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,me;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Inline,
  name: 'IFrame With IFrame Height Parameter',
  args: {
    of: StoryParametersStories.InlineFalseWithIframeHeight
  }
}`,...(me=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,pe,le;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Clicking
  },
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(le=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ue,de,ge;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.Clicking,
    autoplay: true
  },
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(ge=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var he,fe,Se;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    of: ButtonStories.ClickingInDocs
  },
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(Se=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ie,ye,Pe;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...StoryComponentStories.ForceInitialArgs,
  args: ({
    of: ButtonStories.Primary,
    storyExport: ButtonStories.Primary,
    __forceInitialArgs: true
  } as any)
}`,...(Pe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}};const nr=["DefaultAttached","Of","OfWithMeta","OfWithMetaUnattached","OfError","OfUndefined","Inline","InlineWithHeightProps","InlineWithHeightParameter","IFrameProps","IFrameWithParameter","IFrameWithHeightProps","IFrameWithHeightParameter","IFrameWithIFrameHeightParameter","WithDefaultInteractions","WithInteractionsAutoplayInProps","WithInteractionsAutoplayInParameters","ForceInitialArgs"];export{r as DefaultAttached,S as ForceInitialArgs,c as IFrameProps,u as IFrameWithHeightParameter,l as IFrameWithHeightProps,d as IFrameWithIFrameHeightParameter,p as IFrameWithParameter,e as Inline,m as InlineWithHeightParameter,i as InlineWithHeightProps,a as Of,o as OfError,n as OfUndefined,t as OfWithMeta,s as OfWithMetaUnattached,g as WithDefaultInteractions,f as WithInteractionsAutoplayInParameters,h as WithInteractionsAutoplayInProps,nr as __namedExportsOrder,or as default};
//# sourceMappingURL=Story.stories-1156f465.js.map
