import{R as b}from"./index-f1f2c4b1.js";import{S as Te}from"./index-3d029e08.js";import{d as xe}from"./index-356e4a49.js";import{S as De,a as O,b as $e}from"./Source-47bbae77.js";import{NoParameters as k,TypeCode as ve,Transform as Ee,Code as Ne,CodeFormat as Fe,CodeLanguage as Ue,CodeDark as Le}from"./SourceParameters.stories-79b6ee30.js";import"./mapValues-3cd3a2b8.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./Source-7fb69933.js";import"./index-4b2a7d13.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./EmptyBlock-e1d254ca.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./DocsContext-d4de082c.js";import"./index-9cc128d5.js";import"./EmptyExample-83de1af4.js";const nr={component:De,parameters:{relativeCsfPaths:["../examples/SourceParameters.stories"],snippets:{"storybook-blocks-examples-stories-for-the-source-block--no-parameters":{[O({})]:{code:"const emitted = 'source';"}},"storybook-blocks-examples-stories-for-the-source-block--transform":{[O({})]:{code:"const emitted = 'source';"}},"storybook-blocks-examples-stories-for-the-source-block--type-dynamic":{[O({})]:{code:"const emitted = 'source';"}}},docsStyles:!0},decorators:[(e,{parameters:{snippets:a={}}})=>b.createElement($e.Provider,{value:{sources:a}},b.createElement(e,null))]},r=`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
`,s={},o={args:{of:k}},t={args:{of:void 0},parameters:{chromatic:{disableSnapshot:!0}},decorators:[e=>window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/)?b.createElement("div",null):e()]},n={args:{of:k,type:Te.CODE}},c={args:{of:ve}},m={args:{of:k,transform:(e,a)=>xe`// this comment has been added via the transform prop!
    // this is the story id: ${a.id}
    // these are the current args: ${JSON.stringify(a.args)}
    ${e}`}},d={args:{of:Ee}},p={args:{of:k},parameters:{attached:!1}},i={args:{code:r}},u={args:{code:r},parameters:{attached:!1}},g={parameters:{attached:!1}},f={args:{of:Ne}},l={args:{code:r,format:!0}},h={args:{of:Fe}},S={args:{code:r,language:"graphql",format:!0}},C={args:{of:Ue}},P={args:{code:r,dark:!0}},y={args:{of:Le}};var T,x,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var $,v,E;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var N,F,U;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    // @ts-expect-error this is supposed to be undefined
    // eslint-disable-next-line import/namespace
    of: ParametersStories.NotDefined
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  decorators: [s => window?.navigator.userAgent.match(/StorybookTestRunner/) ? <div /> : s()]
}`,...(U=(F=t.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var L,A,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters,
    type: SourceType.CODE
  }
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var R,q,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.TypeCode
  }
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,_,j;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters,
    transform: (src, storyContext) => dedent\`// this comment has been added via the transform prop!
    // this is the story id: \${storyContext.id}
    // these are the current args: \${JSON.stringify(storyContext.args)}
    \${src}\`
  }
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,B,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.Transform
  }
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var I,K,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters
  },
  parameters: {
    attached: false
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,V,W;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    code
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    code
  },
  parameters: {
    attached: false
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    attached: false
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.Code
  }
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ce,me;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    code,
    format: true
  }
}`,...(me=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,ie;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeFormat
  }
}`,...(ie=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var ue,ge,fe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    code,
    language: 'graphql',
    format: true
  }
}`,...(fe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var le,he,Se;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeLanguage
  }
}`,...(Se=(he=C.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var Ce,Pe,ye;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    code,
    dark: true
  }
}`,...(ye=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};var ke,Oe,be;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeDark
  }
}`,...(be=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};const cr=["DefaultAttached","Of","OfUndefined","OfTypeProp","OfTypeParameter","OfTransformProp","OfTransformParameter","OfUnattached","Code","CodeUnattached","EmptyUnattached","CodeParameters","CodeFormat","CodeFormatParameters","CodeLanguage","CodeLanguageParameters","Dark","CodeDarkParameters"];export{i as Code,y as CodeDarkParameters,l as CodeFormat,h as CodeFormatParameters,S as CodeLanguage,C as CodeLanguageParameters,f as CodeParameters,u as CodeUnattached,P as Dark,s as DefaultAttached,g as EmptyUnattached,o as Of,d as OfTransformParameter,m as OfTransformProp,c as OfTypeParameter,n as OfTypeProp,p as OfUnattached,t as OfUndefined,cr as __namedExportsOrder,nr as default};
//# sourceMappingURL=Source.stories-b5f44da4.js.map
