import{a as e}from"./chunk-AT66UTFE-lZPZjQnT.js";import"./v4-yQnnJER4.js";const{global:Ae}=__STORYBOOK_MODULE_GLOBAL__,je={component:Ae.Components.Button,args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},o={args:{onClick:e("onClick")}},n={args:{onClick:()=>e("onClick")("string")}},a={args:{onClick:()=>e("onClick")(!1)}},s={args:{onClick:()=>e("onClick")({})}},c={args:{onClick:()=>e("onClick")(null)}},i={args:{onClick:()=>e("onClick")(void 0)}},t={args:{onClick:()=>e("onClick")(NaN)}},l={args:{onClick:()=>e("onClick")(1/0)}},p={args:{onClick:()=>e("onClick")(-1/0)}},m={args:{onClick:()=>e("onClick")(1e4)}},C={args:{onClick:()=>e("onClick")(Ae)}},u={args:{onClick:()=>e("onClick")(Symbol("MySymbol"))}},d={args:{onClick:()=>e("onClick")(new RegExp("MyRegExp"))}},k={args:{onClick:()=>e("onClick")(["a","b","c"])}},g={args:{onClick:()=>e("onClick")(class{})}},y={args:{onClick:()=>e("onClick")(function(){})}},T={args:{onClick:()=>e("onClick")("string",!0,!1,null,void 0,[],{})}},S={args:{onClick:()=>e("onClick")((()=>{const r={};return r.cyclical=r,r})())}},b={args:{onClick:e("delete")}},f={args:{onClick:e("onClick",{clearOnStoryChange:!1})}},M={args:{onClick:e("onClick",{depth:2})}},O={args:{onClick:e("onCLick")},parameters:{actions:{disabled:!0}}};var N,R,h;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    onClick: action('onClick')
  }
}`,...(h=(R=o.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var _,x,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')('string')
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var I,B,D;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(false)
  }
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,v,F;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')({})
  }
}`,...(F=(v=s.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var A,G,U;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(null)
  }
}`,...(U=(G=c.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var j,w,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(undefined)
  }
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var K,Y,q;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(NaN)
  }
}`,...(q=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var z,H,J;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(Infinity)
  }
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,V,W;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(-Infinity)
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Z,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(10000)
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(globalThis)
  }
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ae,se;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(Symbol('MySymbol'))
  }
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,ie,te;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(new RegExp('MyRegExp'))
  }
}`,...(te=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,pe,me;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(['a', 'b', 'c'])
  }
}`,...(me=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Ce,ue,de;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(class MyClass {})
  }
}`,...(de=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ke,ge,ye;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(function MyFunction() {})
  }
}`,...(ye=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Te,Se,be;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')('string', true, false, null, undefined, [], {})
  }
}`,...(be=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var fe,Me,Oe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')((() => {
      const cyclical: Record<string, any> = {};
      cyclical.cyclical = cyclical;
      return cyclical;
    })())
  }
}`,...(Oe=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ne,Re,he;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    onClick: action('delete')
  }
}`,...(he=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:he.source}}};var _e,xe,Ee;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    onClick: action('onClick', {
      clearOnStoryChange: false
    })
  }
}`,...(Ee=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Ie,Be,De;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    onClick: action('onClick', {
      depth: 2
    })
  }
}`,...(De=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Le,ve,Fe;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    onClick: action('onCLick')
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
}`,...(Fe=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};const Pe=["Basic","TypeString","TypeBoolean","TypeObject","TypeNull","TypeUndefined","TypeNaN","TypeInfinity","TypeMinusInfinity","TypeNumber","TypeGlobal","TypeSymbol","TypeRegExp","TypeArray","TypeClass","TypeFunction","TypeMultiple","Cyclical","Reserved","OptionPersist","OptionDepth","Disabled"];export{o as Basic,S as Cyclical,O as Disabled,M as OptionDepth,f as OptionPersist,b as Reserved,k as TypeArray,a as TypeBoolean,g as TypeClass,y as TypeFunction,C as TypeGlobal,l as TypeInfinity,p as TypeMinusInfinity,T as TypeMultiple,t as TypeNaN,c as TypeNull,m as TypeNumber,s as TypeObject,d as TypeRegExp,n as TypeString,u as TypeSymbol,i as TypeUndefined,Pe as __namedExportsOrder,je as default};
