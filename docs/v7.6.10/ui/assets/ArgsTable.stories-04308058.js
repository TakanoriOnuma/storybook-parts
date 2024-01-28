import{j as gr}from"./jsx-runtime-31019b9d.js";import{a as E}from"./chunk-C5H4AMN5-7fdb7c46.js";import{n as ur}from"./index-9e46a6e4.js";import{a as mr,b as br}from"./ArgsTable-15838607.js";import{String as lr,Number as A,LongEnum as wr,ArrayOf as yr,Boolean as Sr,Color as Ar,Date as Tr,Radio as Er,InlineRadio as fr,Check as Rr,InlineCheck as Cr,Select as Pr,MultiSelect as Nr,ObjectOf as Or,Func as hr}from"./ArgRow.stories-4ab62334.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./pickBy-0f17721a.js";import"./_baseIteratee-b502d39c.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_basePickBy-58fe527f.js";import"./_initCloneObject-5b092e6d.js";import"./_baseAssignValue-dc207ad3.js";import"./_getPrototype-7097101e.js";import"./cloneDeep-1fc2f3ad.js";import"./polished.esm-b305131d.js";import"./index-b75c9059.js";import"./index-0d90a496.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index.modern-47b9f3ba.js";import"./uniq-a8f06b6c.js";import"./Object-074aa8d7.js";import"./helpers-a9e07cde.js";import"./Boolean-978b032e.js";import"./Date-abdcc5b0.js";import"./Number-6a36cf35.js";import"./Options-cb6117ca.js";import"./Range-058e2e0c.js";import"./Text-c52b6464.js";import"./Files-44c86488.js";import"./EmptyBlock-f69a59b0.js";const we={component:mr,title:"Components/ArgsTable/ArgsTable",args:{updateArgs:E("updateArgs"),resetArgs:E("resetArgs")}},S={category:"props "},T={category:"events "},o={subcategory:"MyComponent "},dr={subcategory:"HTMLElement"},r=lr.args.row,t=A.args.row,Ir=wr.args.row,c={args:{isLoading:!0}},n={args:{rows:{stringType:r,numberType:t}}},i={args:{...n.args,compact:!0}},Lr=ur.div(({theme:e})=>({fontSize:e.typography.size.s2-1,background:e.background.content})),a={args:{...n.args,inAddonPanel:!0},decorators:[e=>gr(Lr,{children:e()})]},p={render:e=>gr(mr,{...e}),args:{rows:{stringType:{...r,control:!1},numberType:{...t,control:!1}}},decorators:a.decorators},s={args:{rows:{a:{...r,table:{...r.table,...S}},b:{...t,table:{...r.table,...S}},c:{...r,table:{...r.table,...T}}}}},g={args:{...s.args,compact:!0}},m={args:{rows:{a:{...r,table:{...r.table,...S,...o}},b:{...t,table:{...r.table,...S,...o}},c:{...r,table:{...r.table,...T,...o}},d:{...r,table:{...r.table,...T,...dr}}}}},l={args:{rows:{a:{...r,table:{...r.table,...o}},b:{...t,table:{...r.table,...o}},c:{...r,table:{...r.table,...o}},d:{...r,table:{...r.table,...dr}}}}},d={args:{rows:{array:yr.args.row,boolean:Sr.args.row,color:Ar.args.row,date:Tr.args.row,string:lr.args.row,number:A.args.row,range:A.args.row,radio:Er.args.row,inlineRadio:fr.args.row,check:Rr.args.row,inlineCheck:Cr.args.row,select:Pr.args.row,multiSelect:Nr.args.row,object:Or.args.row,func:hr.args.row}}},u={args:{error:br.NO_COMPONENT}},b={args:{},parameters:{layout:"centered"}},w={args:{isLoading:!1,inAddonPanel:!0},parameters:{layout:"centered"}},y={args:{rows:{longEnumType:Ir},initialExpandedArgs:!0}};var f,R,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var P,N,O;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,x,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    inAddonPanel: true
  },
  decorators: [(storyFn: any) => <AddonPanelLayout>{storyFn()}</AddonPanelLayout>]
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,M,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(M=p.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,_,z;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(pr=(ir=y.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};const ye=["Loading","Normal","Compact","InAddonPanel","InAddonPanelNoControls","Sections","SectionsCompact","SectionsAndSubsections","SubsectionsOnly","AllControls","Error","Empty","EmptyInsideAddonPanel","WithDefaultExpandedArgs"];export{d as AllControls,i as Compact,b as Empty,w as EmptyInsideAddonPanel,u as Error,a as InAddonPanel,p as InAddonPanelNoControls,c as Loading,n as Normal,s as Sections,m as SectionsAndSubsections,g as SectionsCompact,l as SubsectionsOnly,y as WithDefaultExpandedArgs,ye as __namedExportsOrder,we as default};
//# sourceMappingURL=ArgsTable.stories-04308058.js.map
