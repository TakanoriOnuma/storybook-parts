import{R as gr}from"./index-f1f2c4b1.js";import{a as E}from"./chunk-AT66UTFE-23ee157f.js";import{n as ur}from"./index-4b2a7d13.js";import{A as mr,a as br}from"./ArgsTable-a4024097.js";import{String as lr,Number as A,LongEnum as wr,ArrayOf as yr,Boolean as Sr,Color as Ar,Date as Tr,Radio as Er,InlineRadio as Rr,Check as fr,InlineCheck as Cr,Select as Pr,MultiSelect as Nr,ObjectOf as Or,Func as hr}from"./ArgRow.stories-da9d0e6a.js";import"./v4-4a60fe23.js";import"./uniq-d9955a1e.js";import"./_baseIteratee-c4babb20.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./isSymbol-ef7afaa8.js";import"./_basePickBy-c1531931.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./cloneDeep-aaf9573b.js";import"./polished.esm-e310f6d0.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./index-b75c9059.js";import"./index-a443495b.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./index-758f4e48.js";import"./index.modern-a28060bf.js";import"./Object-e0f2a1e7.js";import"./helpers-a9e07cde.js";import"./Boolean-a63c3b4a.js";import"./Date-f9d82492.js";import"./Number-a23fefb8.js";import"./Options-cd78c11b.js";import"./Range-a5dee546.js";import"./Text-92f16433.js";import"./Files-71f7b76b.js";import"./EmptyBlock-e1d254ca.js";const de={component:mr,title:"Components/ArgsTable/ArgsTable",args:{updateArgs:E("updateArgs"),resetArgs:E("resetArgs")}},S={category:"props "},T={category:"events "},o={subcategory:"MyComponent "},dr={subcategory:"HTMLElement"},r=lr.args.row,t=A.args.row,Ir=wr.args.row,c={args:{isLoading:!0}},n={args:{rows:{stringType:r,numberType:t}}},i={args:{...n.args,compact:!0}},Lr=ur.div(({theme:e})=>({fontSize:e.typography.size.s2-1,background:e.background.content})),a={args:{...n.args,inAddonPanel:!0},decorators:[e=>gr.createElement(Lr,null,e())]},p={render:e=>gr.createElement(mr,{...e}),args:{rows:{stringType:{...r,control:!1},numberType:{...t,control:!1}}},decorators:a.decorators},s={args:{rows:{a:{...r,table:{...r.table,...S}},b:{...t,table:{...r.table,...S}},c:{...r,table:{...r.table,...T}}}}},g={args:{...s.args,compact:!0}},m={args:{rows:{a:{...r,table:{...r.table,...S,...o}},b:{...t,table:{...r.table,...S,...o}},c:{...r,table:{...r.table,...T,...o}},d:{...r,table:{...r.table,...T,...dr}}}}},l={args:{rows:{a:{...r,table:{...r.table,...o}},b:{...t,table:{...r.table,...o}},c:{...r,table:{...r.table,...o}},d:{...r,table:{...r.table,...dr}}}}},d={args:{rows:{array:yr.args.row,boolean:Sr.args.row,color:Ar.args.row,date:Tr.args.row,string:lr.args.row,number:A.args.row,range:A.args.row,radio:Er.args.row,inlineRadio:Rr.args.row,check:fr.args.row,inlineCheck:Cr.args.row,select:Pr.args.row,multiSelect:Nr.args.row,object:Or.args.row,func:hr.args.row}}},u={args:{error:br.NO_COMPONENT}},b={args:{},parameters:{layout:"centered"}},w={args:{isLoading:!1,inAddonPanel:!0},parameters:{layout:"centered"}},y={args:{rows:{longEnumType:Ir},initialExpandedArgs:!0}};var R,f,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var P,N,O;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    rows: {
      stringType,
      numberType
    }
  }
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var h,I,L;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    compact: true
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,v,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    inAddonPanel: true
  },
  decorators: [(storyFn: any) => <AddonPanelLayout>{storyFn()}</AddonPanelLayout>]
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var M,j,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: any) => <ArgsTable {...args} />,
  args: {
    rows: {
      stringType: {
        ...stringType,
        control: false
      },
      numberType: {
        ...numberType,
        control: false
      }
    }
  },
  decorators: InAddonPanel.decorators
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var F,_,z;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(_=s.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var B,W,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Sections.args,
    compact: true
  }
}`,...(H=(W=g.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var q,G,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    error: ArgsTableError.NO_COMPONENT
  }
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,nr,or;b.parameters={...b.parameters,docs:{...(er=b.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {},
  parameters: {
    layout: 'centered'
  }
}`,...(or=(nr=b.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var ar,sr,tr;w.parameters={...w.parameters,docs:{...(ar=w.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    inAddonPanel: true
  },
  parameters: {
    layout: 'centered'
  }
}`,...(tr=(sr=w.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var cr,ir,pr;y.parameters={...y.parameters,docs:{...(cr=y.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    rows: {
      longEnumType
    },
    initialExpandedArgs: true
  }
}`,...(pr=(ir=y.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};const ue=["Loading","Normal","Compact","InAddonPanel","InAddonPanelNoControls","Sections","SectionsCompact","SectionsAndSubsections","SubsectionsOnly","AllControls","Error","Empty","EmptyInsideAddonPanel","WithDefaultExpandedArgs"];export{d as AllControls,i as Compact,b as Empty,w as EmptyInsideAddonPanel,u as Error,a as InAddonPanel,p as InAddonPanelNoControls,c as Loading,n as Normal,s as Sections,m as SectionsAndSubsections,g as SectionsCompact,l as SubsectionsOnly,y as WithDefaultExpandedArgs,ue as __namedExportsOrder,de as default};
//# sourceMappingURL=ArgsTable.stories-5859d4de.js.map
