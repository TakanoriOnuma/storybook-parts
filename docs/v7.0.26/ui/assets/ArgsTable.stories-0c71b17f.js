import{a as cr,j as w,F as mr}from"./jsx-runtime-0f39435c.js";import{a as h}from"./chunk-CSVBMRUK-183fa11f.js";import{e as ir}from"./index-5a529529.js";import{A as pr,a as dr}from"./ArgsTable-34b95858.js";import{i as ur}from"./index-90790cc0.js";import{String as gr,Number as A,LongEnum as br,ArrayOf as wr,Boolean as yr,Color as Sr,Date as Ar,Radio as Tr,InlineRadio as hr,Check as Cr,InlineCheck as Rr,Select as fr,MultiSelect as Er,ObjectOf as kr,Func as Nr}from"./ArgRow.stories-0a716edb.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./pickBy-8b4999ba.js";import"./_baseIteratee-11045650.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_baseIsEqual-a479ac5d.js";import"./isSymbol-de103834.js";import"./_basePickBy-ac4ea461.js";import"./keysIn-d555f552.js";import"./_getPrototype-d314cec2.js";import"./_baseAssignValue-531dc4d6.js";import"./cloneDeep-3d0d33b0.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./index-569f0cbf.js";import"./index.modern-19ef23af.js";import"./uniq-b081afc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./Object-950eb0de.js";import"./helpers-a9e07cde.js";import"./Boolean-e61cc435.js";import"./Date-9ddd79e5.js";import"./Number-f757122c.js";import"./Options-63a51cd8.js";import"./Range-5f4dada3.js";import"./Text-bd1d2593.js";import"./Files-c803fcc6.js";import"./EmptyBlock-6324a57c.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";const Or=ir.div(({theme:n})=>({background:n.background.warning,color:n.color.darkest,padding:"10px 15px",lineHeight:"20px",boxShadow:`${n.appBorderColor} 0 -1px 0 0 inset`})),xr=()=>cr(Or,{children:["This story is not configured to handle controls."," ",w(ur,{href:"https://storybook.js.org/docs/react/essentials/controls",target:"_blank",cancel:!1,withArrow:!0,children:"Learn how to add controls"})]}),Sn={component:pr,title:"Components/ArgsTable/ArgsTable",args:{updateArgs:h("updateArgs"),resetArgs:h("resetArgs")}},y={category:"props "},T={category:"events "},a={subcategory:"MyComponent "},lr={subcategory:"HTMLElement"},r=gr.args.row,S=A.args.row,Pr=br.args.row,t={args:{isLoading:!0}},e={args:{rows:{stringType:r,numberType:S}}},c={args:{...e.args,compact:!0}},Lr=ir.div(({theme:n})=>({fontSize:n.typography.size.s2-1,background:n.background.content})),o={args:{...e.args,inAddonPanel:!0},decorators:[n=>w(Lr,{children:n()})]},i={render:n=>cr(mr,{children:[w(xr,{}),w(pr,{...n})]}),args:{...o.args,updateArgs:null},decorators:o.decorators},s={args:{rows:{a:{...r,table:{...r.table,...y}},b:{...S,table:{...r.table,...y}},c:{...r,table:{...r.table,...T}}}}},p={args:{...s.args,compact:!0}},g={args:{rows:{a:{...r,table:{...r.table,...y,...a}},b:{...S,table:{...r.table,...y,...a}},c:{...r,table:{...r.table,...T,...a}},d:{...r,table:{...r.table,...T,...lr}}}}},l={args:{rows:{a:{...r,table:{...r.table,...a}},b:{...S,table:{...r.table,...a}},c:{...r,table:{...r.table,...a}},d:{...r,table:{...r.table,...lr}}}}},m={args:{rows:{array:wr.args.row,boolean:yr.args.row,color:Sr.args.row,date:Ar.args.row,string:gr.args.row,number:A.args.row,range:A.args.row,radio:Tr.args.row,inlineRadio:hr.args.row,check:Cr.args.row,inlineCheck:Rr.args.row,select:fr.args.row,multiSelect:Er.args.row,object:kr.args.row,func:Nr.args.row}}},d={args:{error:dr.NO_COMPONENT}},u={args:{rows:{}}},b={args:{rows:{longEnumType:Pr},initialExpandedArgs:!0}};var C,R,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(f=(R=t.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var E,k,N;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    rows: {
      stringType,
      numberType
    }
  }
}`,...(N=(k=e.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var O,x,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    compact: true
  }
}`,...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var L,I,_;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    inAddonPanel: true
  },
  decorators: [(storyFn: any) => <AddonPanelLayout>{storyFn()}</AddonPanelLayout>]
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var W,j,v;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: any) => <>
      <NoControlsWarning />
      <ArgsTable {...args} />
    </>,
  // @ts-expect-error (not strict)
  args: {
    ...InAddonPanel.args,
    updateArgs: null
  },
  decorators: InAddonPanel.decorators
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var F,M,D;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    rows: {
      a: {
        ...stringType,
        table: {
          ...stringType.table,
          ...propsSection
        }
      },
      b: {
        ...numberType,
        table: {
          ...stringType.table,
          ...propsSection
        }
      },
      c: {
        ...stringType,
        table: {
          ...stringType.table,
          ...eventsSection
        }
      }
    }
  }
}`,...(D=(M=s.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var B,z,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Sections.args,
    compact: true
  }
}`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var $,q,G;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    rows: {
      a: {
        ...stringType,
        table: {
          ...stringType.table,
          ...propsSection,
          ...componentSubsection
        }
      },
      b: {
        ...numberType,
        table: {
          ...stringType.table,
          ...propsSection,
          ...componentSubsection
        }
      },
      c: {
        ...stringType,
        table: {
          ...stringType.table,
          ...eventsSection,
          ...componentSubsection
        }
      },
      d: {
        ...stringType,
        table: {
          ...stringType.table,
          ...eventsSection,
          ...htmlElementSubsection
        }
      }
    }
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    rows: {
      a: {
        ...stringType,
        table: {
          ...stringType.table,
          ...componentSubsection
        }
      },
      b: {
        ...numberType,
        table: {
          ...stringType.table,
          ...componentSubsection
        }
      },
      c: {
        ...stringType,
        table: {
          ...stringType.table,
          ...componentSubsection
        }
      },
      d: {
        ...stringType,
        table: {
          ...stringType.table,
          ...htmlElementSubsection
        }
      }
    }
  }
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    rows: {
      array: ArgRow.ArrayOf.args.row,
      boolean: ArgRow.Boolean.args.row,
      color: ArgRow.Color.args.row,
      date: ArgRow.Date.args.row,
      string: ArgRow.String.args.row,
      number: ArgRow.Number.args.row,
      range: ArgRow.Number.args.row,
      radio: ArgRow.Radio.args.row,
      inlineRadio: ArgRow.InlineRadio.args.row,
      check: ArgRow.Check.args.row,
      inlineCheck: ArgRow.InlineCheck.args.row,
      select: ArgRow.Select.args.row,
      multiSelect: ArgRow.MultiSelect.args.row,
      object: ArgRow.ObjectOf.args.row,
      func: ArgRow.Func.args.row
    }
  }
}`,...(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,rr;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    error: ArgsTableError.NO_COMPONENT
  }
}`,...(rr=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:rr.source}}};var nr,er,or;u.parameters={...u.parameters,docs:{...(nr=u.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    rows: {}
  }
}`,...(or=(er=u.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};var ar,sr,tr;b.parameters={...b.parameters,docs:{...(ar=b.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    rows: {
      longEnumType
    },
    initialExpandedArgs: true
  }
}`,...(tr=(sr=b.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};const An=["Loading","Normal","Compact","InAddonPanel","InAddonPanelWithWarning","Sections","SectionsCompact","SectionsAndSubsections","SubsectionsOnly","AllControls","Error","Empty","WithDefaultExpandedArgs"];export{m as AllControls,c as Compact,u as Empty,d as Error,o as InAddonPanel,i as InAddonPanelWithWarning,t as Loading,e as Normal,s as Sections,g as SectionsAndSubsections,p as SectionsCompact,l as SubsectionsOnly,b as WithDefaultExpandedArgs,An as __namedExportsOrder,Sn as default};
//# sourceMappingURL=ArgsTable.stories-0c71b17f.js.map
