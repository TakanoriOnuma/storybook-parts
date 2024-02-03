import{j as O}from"./jsx-runtime-0f39435c.js";import{b as Tr}from"./index-74303de9.js";import{d as xr}from"./index-356e4a49.js";import{b as Dr,c as k,S as $r}from"./Source-8ef45ad9.js";import{NoParameters as b,TypeCode as vr,Transform as Nr,Code as Fr,CodeFormat as Ur,CodeLanguage as Lr,CodeDark as Er}from"./SourceParameters.stories-2d06744c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./mapValues-511dc51c.js";import"./_baseAssignValue-531dc4d6.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_baseIteratee-11045650.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./Source-d9d734f3.js";import"./index-5a529529.js";import"./index-d475d2ea.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./EmptyBlock-6324a57c.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./DocsContext-001c90b3.js";import"./index-ee3f53bc.js";import"./useStory-cba48327.js";import"./EmptyExample-504b79c9.js";const pe={component:Dr,parameters:{relativeCsfPaths:["../examples/SourceParameters.stories"],snippets:{"storybook-blocks-examples-stories-for-the-source-block--no-parameters":{[k({})]:{code:"const emitted = 'source';"}},"storybook-blocks-examples-stories-for-the-source-block--transform":{[k({})]:{code:"const emitted = 'source';"}},"storybook-blocks-examples-stories-for-the-source-block--type-dynamic":{[k({})]:{code:"const emitted = 'source';"}}},docsStyles:!0},decorators:[(r,{parameters:{snippets:a={}}})=>O($r.Provider,{value:{sources:a},children:O(r,{})})]},e=`query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
`,s={},o={args:{of:b}},t={args:{of:void 0},parameters:{chromatic:{disableSnapshot:!0}},decorators:[r=>window!=null&&window.navigator.userAgent.match(/StorybookTestRunner/)?O("div",{}):r()]},n={args:{of:b,type:Tr.CODE}},c={args:{of:vr}},m={args:{of:b,transform:(r,a)=>xr`// this comment has been added via the transform prop!
    // this is the story id: ${a.id}
    // these are the current args: ${JSON.stringify(a.args)}
    ${r}`}},d={args:{of:Nr}},p={args:{of:b},parameters:{attached:!1}},i={args:{code:e}},u={args:{code:e},parameters:{attached:!1}},g={parameters:{attached:!1}},f={args:{of:Fr}},l={args:{code:e,format:!0}},h={args:{of:Ur}},S={args:{code:e,language:"graphql",format:!0}},C={args:{of:Lr}},P={args:{code:e,dark:!0}},y={args:{of:Er}};var T,x,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var $,v,N;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var F,U,L;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(U=t.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var E,A,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters,
    type: SourceType.CODE
  }
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var q,j,H;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.TypeCode
  }
}`,...(H=(j=c.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,R,_;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.NoParameters,
    transform: (src, storyContext) => dedent\`// this comment has been added via the transform prop!
    // this is the story id: \${storyContext.id}
    // these are the current args: \${JSON.stringify(storyContext.args)}
    \${src}\`
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,B,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var rr,er,ar;g.parameters={...g.parameters,docs:{...(rr=g.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  parameters: {
    attached: false
  }
}`,...(ar=(er=g.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var sr,or,tr;f.parameters={...f.parameters,docs:{...(sr=f.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.Code
  }
}`,...(tr=(or=f.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var nr,cr,mr;l.parameters={...l.parameters,docs:{...(nr=l.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    code,
    format: true
  }
}`,...(mr=(cr=l.parameters)==null?void 0:cr.docs)==null?void 0:mr.source}}};var dr,pr,ir;h.parameters={...h.parameters,docs:{...(dr=h.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeFormat
  }
}`,...(ir=(pr=h.parameters)==null?void 0:pr.docs)==null?void 0:ir.source}}};var ur,gr,fr;S.parameters={...S.parameters,docs:{...(ur=S.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    code,
    language: 'graphql',
    format: true
  }
}`,...(fr=(gr=S.parameters)==null?void 0:gr.docs)==null?void 0:fr.source}}};var lr,hr,Sr;C.parameters={...C.parameters,docs:{...(lr=C.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeLanguage
  }
}`,...(Sr=(hr=C.parameters)==null?void 0:hr.docs)==null?void 0:Sr.source}}};var Cr,Pr,yr;P.parameters={...P.parameters,docs:{...(Cr=P.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    code,
    dark: true
  }
}`,...(yr=(Pr=P.parameters)==null?void 0:Pr.docs)==null?void 0:yr.source}}};var br,kr,Or;y.parameters={...y.parameters,docs:{...(br=y.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    of: ParametersStories.CodeDark
  }
}`,...(Or=(kr=y.parameters)==null?void 0:kr.docs)==null?void 0:Or.source}}};const ie=["DefaultAttached","Of","OfUndefined","OfTypeProp","OfTypeParameter","OfTransformProp","OfTransformParameter","OfUnattached","Code","CodeUnattached","EmptyUnattached","CodeParameters","CodeFormat","CodeFormatParameters","CodeLanguage","CodeLanguageParameters","Dark","CodeDarkParameters"];export{i as Code,y as CodeDarkParameters,l as CodeFormat,h as CodeFormatParameters,S as CodeLanguage,C as CodeLanguageParameters,f as CodeParameters,u as CodeUnattached,P as Dark,s as DefaultAttached,g as EmptyUnattached,o as Of,d as OfTransformParameter,m as OfTransformProp,c as OfTypeParameter,n as OfTypeProp,p as OfUnattached,t as OfUndefined,ie as __namedExportsOrder,pe as default};
//# sourceMappingURL=Source.stories-518e647c.js.map
