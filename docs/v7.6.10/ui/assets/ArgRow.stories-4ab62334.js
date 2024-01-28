import{j as R}from"./jsx-runtime-31019b9d.js";import{R as Pr}from"./index-0d90a496.js";import{A as Qr,T as Xr}from"./ArgsTable-15838607.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9e46a6e4.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./pickBy-0f17721a.js";import"./_baseIteratee-b502d39c.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_basePickBy-58fe527f.js";import"./_initCloneObject-5b092e6d.js";import"./_baseAssignValue-dc207ad3.js";import"./_getPrototype-7097101e.js";import"./cloneDeep-1fc2f3ad.js";import"./polished.esm-b305131d.js";import"./index.modern-47b9f3ba.js";import"./uniq-a8f06b6c.js";import"./Object-074aa8d7.js";import"./helpers-a9e07cde.js";import"./Boolean-978b032e.js";import"./Date-abdcc5b0.js";import"./Number-6a36cf35.js";import"./Options-cb6117ca.js";import"./Range-058e2e0c.js";import"./Text-c52b6464.js";import"./Files-44c86488.js";import"./EmptyBlock-f69a59b0.js";const ve={component:Qr,title:"Components/ArgsTable/ArgRow",decorators:[Kr=>R(Pr,{children:R(Xr,{children:R("tbody",{children:Kr()})})})],argTypes:{updateArgs:{action:"updateArgs"}}},e={args:{row:{key:"someString",name:"Some String",description:"someString description",type:{required:!0},control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"reallylongstringnospaces"}}}}},o={args:{row:{...e.args.row,name:"Really Long String That Takes Up Space"}}},a={args:{row:{...e.args.row,description:"really long description that takes up a lot of space. sometimes this happens."}}},t={args:{row:{key:"someBoolean",name:"Some Boolean",description:"someBoolean description",type:{required:!0},control:{type:"boolean"},table:{type:{summary:"string"},defaultValue:{summary:"fixme"}}}}},s={args:{row:{key:"someColor",name:"Some Color",type:{name:"string"},description:"someColor description",defaultValue:"#ff0",control:{type:"color"}}}},c={args:{row:{key:"someDate",name:"Some Date",type:{name:"string"},description:"someDate description",control:{type:"date"}}}},n={args:{row:{key:"someNumber",name:"Some Number",description:"someNumber description",type:{required:!1},table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}}}},m={args:{row:{...n.args.row,control:{type:"range"}}}},r={args:{row:{key:"someEnum",name:"Some Enum",description:"someEnum description",control:{type:"radio",argType:{options:["a","b","c"]}}}}},i={args:{row:{...r.args.row,control:{...r.args.row.control,type:"inline-radio"}}}},p={args:{row:{...r.args.row,control:{...r.args.row.control,type:"check"}}}},l={args:{row:{...r.args.row,control:{...r.args.row.control,type:"inline-check"}}}},u={args:{row:{...r.args.row,control:{...r.args.row.control,type:"select"}}}},d={args:{row:{...r.args.row,control:{...r.args.row.control,type:"multi-select"}}}},g={args:{row:{key:"someObject",name:"Some Object",description:"A simple `objectOf` propType.",table:{type:{summary:"objectOf(number)"},defaultValue:{summary:"{ key: 1 }"}},control:{type:"object"}}}},y={args:{row:{key:"someArray",name:"Some Array",description:"array of a certain type",table:{type:{summary:"number[]"},defaultValue:{summary:"[1, 2, 3]"}},control:{type:"array"}}}},w={args:{row:{key:"someComplex",name:"Some Complex",description:"A very complex `objectOf` propType.",table:{type:{summary:"object",detail:`[{
      id: number,
      func: func,
      arr: [{ index: number }]
    }]`},defaultValue:{summary:"object",detail:`[{
      id: 1,
      func: () => {},
      arr: [{ index: 1 }]
    }]`}},control:{type:"object"}}}},b={args:{row:{key:"concat",name:"Concat",description:"concat 2 string values.",type:{required:!0},table:{type:{summary:"(a: string, b: string) => string"},defaultValue:{summary:"func",detail:"(a, b) => { return a + b; }"},jsDocTags:{params:[{name:"a",description:"The first string"},{name:"b",description:"The second string"}],returns:{description:"The concatenation of both strings"}}},control:!1}}},Yr='"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle"',S={args:{row:{key:"enum",name:"Some enum",type:{required:!0},table:{type:{summary:Yr}}}}},Zr='"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle" | "chevron-up" | "chevron-down" | "chevron-left" | "chevron-right" | "envelope" | "exchange" | "file" | "file-check" | "file-import" | "file-pdf" | "file-times" | "pencil" | "question" | "question-circle" | "sitemap" | "user" | "times" | "plus" | "exclamation-triangle" | "trash-alt" | "long-arrow-up" | "long-arrow-down" | "long-arrow-left" | "long-arrow-right" | "external-link-alt" | "sticky-note" | "chart-line" | "spinner-third"',f={args:{row:{key:"longEnum",name:"Long enum",type:{required:!0},table:{type:{summary:Zr}}}}},$r="((a: string | SVGSVGElement) => void) | RefObject<SVGSVGElement | number> | [a|b] | {a|b}",k={args:{row:{key:"complexUnion",name:"Complex",type:{required:!0},table:{type:{summary:$r}}}}},h={args:{row:{key:"someString",name:"Some String",description:"A `prop` can *support* __markdown__ syntax. This was ship in ~~5.2~~ 5.3. [Find more info in the storybook docs.](https://storybook.js.org/)",table:{type:{summary:"string"}},control:{type:"text"}}}},x={args:{...e.args,compact:!0}},C={args:{row:e.args.row}},j={args:{row:e.args.row,compact:!0}};var T,O,V;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someString',
      name: 'Some String',
      description: 'someString description',
      type: {
        required: true
      },
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'reallylongstringnospaces'
        }
      }
    }
  }
}`,...(V=(O=e.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,E,q;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    row: {
      ...String.args.row,
      name: 'Really Long String That Takes Up Space'
    }
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var N,D,_;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    row: {
      ...String.args.row,
      description: 'really long description that takes up a lot of space. sometimes this happens.'
    }
  }
}`,...(_=(D=a.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var v,L,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someBoolean',
      name: 'Some Boolean',
      description: 'someBoolean description',
      type: {
        required: true
      },
      control: {
        type: 'boolean'
      },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'fixme'
        }
      }
    }
  }
}`,...(B=(L=t.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var U,F,G;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someColor',
      name: 'Some Color',
      type: {
        name: 'string'
      },
      description: 'someColor description',
      defaultValue: '#ff0',
      control: {
        type: 'color'
      }
    }
  }
}`,...(G=(F=s.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var I,M,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someDate',
      name: 'Some Date',
      type: {
        name: 'string'
      },
      description: 'someDate description',
      control: {
        type: 'date'
      }
    }
  }
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,H,J;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someNumber',
      name: 'Some Number',
      description: 'someNumber description',
      type: {
        required: false
      },
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: '0'
        }
      },
      control: {
        type: 'number'
      }
    }
  }
}`,...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    row: {
      ...Number.args.row,
      control: {
        type: 'range'
      }
    }
  }
}`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someEnum',
      name: 'Some Enum',
      description: 'someEnum description',
      control: {
        type: 'radio',
        argType: {
          options: ['a', 'b', 'c']
        }
      }
    }
  }
}`,...(Z=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'inline-radio'
      }
    }
  }
}`,...(er=(rr=i.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,or,ar;p.parameters={...p.parameters,docs:{...(nr=p.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'check'
      }
    }
  }
}`,...(ar=(or=p.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var tr,sr,cr;l.parameters={...l.parameters,docs:{...(tr=l.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'inline-check'
      }
    }
  }
}`,...(cr=(sr=l.parameters)==null?void 0:sr.docs)==null?void 0:cr.source}}};var mr,ir,pr;u.parameters={...u.parameters,docs:{...(mr=u.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'select'
      }
    }
  }
}`,...(pr=(ir=u.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};var lr,ur,dr;d.parameters={...d.parameters,docs:{...(lr=d.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'multi-select'
      }
    }
  }
}`,...(dr=(ur=d.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var gr,yr,wr;g.parameters={...g.parameters,docs:{...(gr=g.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someObject',
      name: 'Some Object',
      description: 'A simple \`objectOf\` propType.',
      table: {
        type: {
          summary: 'objectOf(number)'
        },
        defaultValue: {
          summary: '{ key: 1 }'
        }
      },
      control: {
        type: 'object'
      }
    }
  }
}`,...(wr=(yr=g.parameters)==null?void 0:yr.docs)==null?void 0:wr.source}}};var br,Sr,fr;y.parameters={...y.parameters,docs:{...(br=y.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someArray',
      name: 'Some Array',
      description: 'array of a certain type',
      table: {
        type: {
          summary: 'number[]'
        },
        defaultValue: {
          summary: '[1, 2, 3]'
        }
      },
      control: {
        type: 'array'
      }
    }
  }
}`,...(fr=(Sr=y.parameters)==null?void 0:Sr.docs)==null?void 0:fr.source}}};var kr,hr,xr;w.parameters={...w.parameters,docs:{...(kr=w.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someComplex',
      name: 'Some Complex',
      description: 'A very complex \`objectOf\` propType.',
      table: {
        type: {
          summary: 'object',
          detail: \`[{
      id: number,
      func: func,
      arr: [{ index: number }]
    }]\`
        },
        defaultValue: {
          summary: 'object',
          detail: \`[{
      id: 1,
      func: () => {},
      arr: [{ index: 1 }]
    }]\`
        }
      },
      control: {
        type: 'object'
      }
    }
  }
}`,...(xr=(hr=w.parameters)==null?void 0:hr.docs)==null?void 0:xr.source}}};var Cr,jr,Rr;b.parameters={...b.parameters,docs:{...(Cr=b.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'concat',
      name: 'Concat',
      description: 'concat 2 string values.',
      type: {
        required: true
      },
      table: {
        type: {
          summary: '(a: string, b: string) => string'
        },
        defaultValue: {
          summary: 'func',
          detail: '(a, b) => { return a + b; }'
        },
        jsDocTags: {
          params: [{
            name: 'a',
            description: 'The first string'
          }, {
            name: 'b',
            description: 'The second string'
          }],
          returns: {
            description: 'The concatenation of both strings'
          }
        }
      },
      control: false
    }
  }
}`,...(Rr=(jr=b.parameters)==null?void 0:jr.docs)==null?void 0:Rr.source}}};var Tr,Or,Vr;S.parameters={...S.parameters,docs:{...(Tr=S.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'enum',
      name: 'Some enum',
      type: {
        required: true
      },
      table: {
        type: {
          summary: enumeration
        }
      }
    }
  }
}`,...(Vr=(Or=S.parameters)==null?void 0:Or.docs)==null?void 0:Vr.source}}};var Ar,Er,qr;f.parameters={...f.parameters,docs:{...(Ar=f.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'longEnum',
      name: 'Long enum',
      type: {
        required: true
      },
      table: {
        type: {
          summary: longEnumeration
        }
      }
    }
  }
}`,...(qr=(Er=f.parameters)==null?void 0:Er.docs)==null?void 0:qr.source}}};var Nr,Dr,_r;k.parameters={...k.parameters,docs:{...(Nr=k.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'complexUnion',
      name: 'Complex',
      type: {
        required: true
      },
      table: {
        type: {
          summary: complexUnion
        }
      }
    }
  }
}`,...(_r=(Dr=k.parameters)==null?void 0:Dr.docs)==null?void 0:_r.source}}};var vr,Lr,Br;h.parameters={...h.parameters,docs:{...(vr=h.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    row: {
      key: 'someString',
      name: 'Some String',
      description: 'A \`prop\` can *support* __markdown__ syntax. This was ship in ~~5.2~~ 5.3. [Find more info in the storybook docs.](https://storybook.js.org/)',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      }
    }
  }
}`,...(Br=(Lr=h.parameters)==null?void 0:Lr.docs)==null?void 0:Br.source}}};var Ur,Fr,Gr;x.parameters={...x.parameters,docs:{...(Ur=x.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  args: {
    ...String.args,
    compact: true
  }
}`,...(Gr=(Fr=x.parameters)==null?void 0:Fr.docs)==null?void 0:Gr.source}}};var Ir,Mr,Wr;C.parameters={...C.parameters,docs:{...(Ir=C.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    row: String.args.row
  }
}`,...(Wr=(Mr=C.parameters)==null?void 0:Mr.docs)==null?void 0:Wr.source}}};var zr,Hr,Jr;j.parameters={...j.parameters,docs:{...(zr=j.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    row: String.args.row,
    compact: true
  }
}`,...(Jr=(Hr=j.parameters)==null?void 0:Hr.docs)==null?void 0:Jr.source}}};const Le=["String","LongName","LongDesc","Boolean","Color","Date","Number","Range","Radio","InlineRadio","Check","InlineCheck","Select","MultiSelect","ObjectOf","ArrayOf","ComplexObject","Func","Enum","LongEnum","ComplexUnion","Markdown","StringCompact","StringNoControls","StringNoControlsCompact"];export{y as ArrayOf,t as Boolean,p as Check,s as Color,w as ComplexObject,k as ComplexUnion,c as Date,S as Enum,b as Func,l as InlineCheck,i as InlineRadio,a as LongDesc,f as LongEnum,o as LongName,h as Markdown,d as MultiSelect,n as Number,g as ObjectOf,r as Radio,m as Range,u as Select,e as String,x as StringCompact,C as StringNoControls,j as StringNoControlsCompact,Le as __namedExportsOrder,ve as default};
//# sourceMappingURL=ArgRow.stories-4ab62334.js.map
