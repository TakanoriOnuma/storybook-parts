import{a as r}from"./chunk-C5H4AMN5-4vbKuVMZ.js";import"./preview-errors-K0YuUda6.js";import"./index-PPLHz8o0.js";const{global:Ar}=__STORYBOOK_MODULE_GLOBAL__,wr={component:Ar.Components.Button,args:{label:"Click Me!"},parameters:{chromatic:{disable:!0}}},o={args:{onClick:r("onClick")}},n={args:{onClick:()=>r("onClick")("string")}},a={args:{onClick:()=>r("onClick")(!1)}},s={args:{onClick:()=>r("onClick")({})}},c={args:{onClick:()=>r("onClick")(null)}},i={args:{onClick:()=>r("onClick")(void 0)}},t={args:{onClick:()=>r("onClick")(NaN)}},l={args:{onClick:()=>r("onClick")(1/0)}},p={args:{onClick:()=>r("onClick")(-1/0)}},m={args:{onClick:()=>r("onClick")(1e4)}},C={args:{onClick:()=>r("onClick")(Ar)}},u={args:{onClick:()=>r("onClick")(Symbol("MySymbol"))}},d={args:{onClick:()=>r("onClick")(new RegExp("MyRegExp"))}},k={args:{onClick:()=>r("onClick")(["a","b","c"])}},g={args:{onClick:()=>r("onClick")(class{})}},y={args:{onClick:()=>r("onClick")(function(){})}},T={args:{onClick:()=>r("onClick")("string",!0,!1,null,void 0,[],{})}},S={args:{onClick:()=>r("onClick")((()=>{const e={};return e.cyclical=e,e})())}},b={args:{onClick:r("delete")}},f={args:{onClick:r("onClick",{clearOnStoryChange:!1})}},M={args:{onClick:r("onClick",{depth:2})}},O={args:{onClick:r("onCLick")},parameters:{actions:{disabled:!0}}};var N,R,h;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,or;C.parameters={...C.parameters,docs:{...(rr=C.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(globalThis)
  }
}`,...(or=(er=C.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};var nr,ar,sr;u.parameters={...u.parameters,docs:{...(nr=u.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(Symbol('MySymbol'))
  }
}`,...(sr=(ar=u.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var cr,ir,tr;d.parameters={...d.parameters,docs:{...(cr=d.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(new RegExp('MyRegExp'))
  }
}`,...(tr=(ir=d.parameters)==null?void 0:ir.docs)==null?void 0:tr.source}}};var lr,pr,mr;k.parameters={...k.parameters,docs:{...(lr=k.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(['a', 'b', 'c'])
  }
}`,...(mr=(pr=k.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Cr,ur,dr;g.parameters={...g.parameters,docs:{...(Cr=g.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(class MyClass {})
  }
}`,...(dr=(ur=g.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var kr,gr,yr;y.parameters={...y.parameters,docs:{...(kr=y.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')(function MyFunction() {})
  }
}`,...(yr=(gr=y.parameters)==null?void 0:gr.docs)==null?void 0:yr.source}}};var Tr,Sr,br;T.parameters={...T.parameters,docs:{...(Tr=T.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')('string', true, false, null, undefined, [], {})
  }
}`,...(br=(Sr=T.parameters)==null?void 0:Sr.docs)==null?void 0:br.source}}};var fr,Mr,Or;S.parameters={...S.parameters,docs:{...(fr=S.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    onClick: () => action('onClick')((() => {
      const cyclical: Record<string, any> = {};
      cyclical.cyclical = cyclical;
      return cyclical;
    })())
  }
}`,...(Or=(Mr=S.parameters)==null?void 0:Mr.docs)==null?void 0:Or.source}}};var Nr,Rr,hr;b.parameters={...b.parameters,docs:{...(Nr=b.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    onClick: action('delete')
  }
}`,...(hr=(Rr=b.parameters)==null?void 0:Rr.docs)==null?void 0:hr.source}}};var _r,xr,Er;f.parameters={...f.parameters,docs:{...(_r=f.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    onClick: action('onClick', {
      clearOnStoryChange: false
    })
  }
}`,...(Er=(xr=f.parameters)==null?void 0:xr.docs)==null?void 0:Er.source}}};var Ir,Br,Dr;M.parameters={...M.parameters,docs:{...(Ir=M.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    onClick: action('onClick', {
      depth: 2
    })
  }
}`,...(Dr=(Br=M.parameters)==null?void 0:Br.docs)==null?void 0:Dr.source}}};var Lr,vr,Fr;O.parameters={...O.parameters,docs:{...(Lr=O.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  args: {
    onClick: action('onCLick')
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
}`,...(Fr=(vr=O.parameters)==null?void 0:vr.docs)==null?void 0:Fr.source}}};const Kr=["Basic","TypeString","TypeBoolean","TypeObject","TypeNull","TypeUndefined","TypeNaN","TypeInfinity","TypeMinusInfinity","TypeNumber","TypeGlobal","TypeSymbol","TypeRegExp","TypeArray","TypeClass","TypeFunction","TypeMultiple","Cyclical","Reserved","OptionPersist","OptionDepth","Disabled"];export{o as Basic,S as Cyclical,O as Disabled,M as OptionDepth,f as OptionPersist,b as Reserved,k as TypeArray,a as TypeBoolean,g as TypeClass,y as TypeFunction,C as TypeGlobal,l as TypeInfinity,p as TypeMinusInfinity,T as TypeMultiple,t as TypeNaN,c as TypeNull,m as TypeNumber,s as TypeObject,d as TypeRegExp,n as TypeString,u as TypeSymbol,i as TypeUndefined,Kr as __namedExportsOrder,wr as default};
