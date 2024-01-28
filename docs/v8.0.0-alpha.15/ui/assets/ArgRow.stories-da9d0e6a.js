import{R}from"./index-f1f2c4b1.js";import{R as Pe}from"./index-a443495b.js";import{b as Qe,T as Xe}from"./ArgsTable-a4024097.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-4b2a7d13.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-758f4e48.js";import"./index-b75c9059.js";import"./uniq-d9955a1e.js";import"./_baseIteratee-c4babb20.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./isSymbol-ef7afaa8.js";import"./_basePickBy-c1531931.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./cloneDeep-aaf9573b.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./index.modern-a28060bf.js";import"./Object-e0f2a1e7.js";import"./helpers-a9e07cde.js";import"./Boolean-a63c3b4a.js";import"./Date-f9d82492.js";import"./Number-a23fefb8.js";import"./Options-cd78c11b.js";import"./Range-a5dee546.js";import"./Text-92f16433.js";import"./Files-71f7b76b.js";import"./EmptyBlock-e1d254ca.js";const Dr={component:Qe,title:"Components/ArgsTable/ArgRow",decorators:[Ke=>R.createElement(Pe,null,R.createElement(Xe,null,R.createElement("tbody",null,Ke())))],argTypes:{updateArgs:{action:"updateArgs"}}},r={args:{row:{key:"someString",name:"Some String",description:"someString description",type:{required:!0},control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"reallylongstringnospaces"}}}}},o={args:{row:{...r.args.row,name:"Really Long String That Takes Up Space"}}},a={args:{row:{...r.args.row,description:"really long description that takes up a lot of space. sometimes this happens."}}},t={args:{row:{key:"someBoolean",name:"Some Boolean",description:"someBoolean description",type:{required:!0},control:{type:"boolean"},table:{type:{summary:"string"},defaultValue:{summary:"fixme"}}}}},s={args:{row:{key:"someColor",name:"Some Color",type:{name:"string"},description:"someColor description",defaultValue:"#ff0",control:{type:"color"}}}},c={args:{row:{key:"someDate",name:"Some Date",type:{name:"string"},description:"someDate description",control:{type:"date"}}}},n={args:{row:{key:"someNumber",name:"Some Number",description:"someNumber description",type:{required:!1},table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}}}},m={args:{row:{...n.args.row,control:{type:"range"}}}},e={args:{row:{key:"someEnum",name:"Some Enum",description:"someEnum description",control:{type:"radio",argType:{options:["a","b","c"]}}}}},i={args:{row:{...e.args.row,control:{...e.args.row.control,type:"inline-radio"}}}},p={args:{row:{...e.args.row,control:{...e.args.row.control,type:"check"}}}},l={args:{row:{...e.args.row,control:{...e.args.row.control,type:"inline-check"}}}},u={args:{row:{...e.args.row,control:{...e.args.row.control,type:"select"}}}},d={args:{row:{...e.args.row,control:{...e.args.row.control,type:"multi-select"}}}},g={args:{row:{key:"someObject",name:"Some Object",description:"A simple `objectOf` propType.",table:{type:{summary:"objectOf(number)"},defaultValue:{summary:"{ key: 1 }"}},control:{type:"object"}}}},y={args:{row:{key:"someArray",name:"Some Array",description:"array of a certain type",table:{type:{summary:"number[]"},defaultValue:{summary:"[1, 2, 3]"}},control:{type:"array"}}}},w={args:{row:{key:"someComplex",name:"Some Complex",description:"A very complex `objectOf` propType.",table:{type:{summary:"object",detail:`[{
      id: number,
      func: func,
      arr: [{ index: number }]
    }]`},defaultValue:{summary:"object",detail:`[{
      id: 1,
      func: () => {},
      arr: [{ index: 1 }]
    }]`}},control:{type:"object"}}}},b={args:{row:{key:"concat",name:"Concat",description:"concat 2 string values.",type:{required:!0},table:{type:{summary:"(a: string, b: string) => string"},defaultValue:{summary:"func",detail:"(a, b) => { return a + b; }"},jsDocTags:{params:[{name:"a",description:"The first string"},{name:"b",description:"The second string"}],returns:{description:"The concatenation of both strings"}}},control:!1}}},Ye='"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle"',S={args:{row:{key:"enum",name:"Some enum",type:{required:!0},table:{type:{summary:Ye}}}}},Ze='"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle" | "chevron-up" | "chevron-down" | "chevron-left" | "chevron-right" | "envelope" | "exchange" | "file" | "file-check" | "file-import" | "file-pdf" | "file-times" | "pencil" | "question" | "question-circle" | "sitemap" | "user" | "times" | "plus" | "exclamation-triangle" | "trash-alt" | "long-arrow-up" | "long-arrow-down" | "long-arrow-left" | "long-arrow-right" | "external-link-alt" | "sticky-note" | "chart-line" | "spinner-third"',f={args:{row:{key:"longEnum",name:"Long enum",type:{required:!0},table:{type:{summary:Ze}}}}},$e="((a: string | SVGSVGElement) => void) | RefObject<SVGSVGElement | number> | [a|b] | {a|b}",k={args:{row:{key:"complexUnion",name:"Complex",type:{required:!0},table:{type:{summary:$e}}}}},h={args:{row:{key:"someString",name:"Some String",description:"A `prop` can *support* __markdown__ syntax. This was ship in ~~5.2~~ 5.3. [Find more info in the storybook docs.](https://storybook.js.org/)",table:{type:{summary:"string"}},control:{type:"text"}}}},x={args:{...r.args,compact:!0}},C={args:{row:r.args.row}},j={args:{row:r.args.row,compact:!0}};var T,E,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(E=r.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,A,q;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    row: {
      ...String.args.row,
      name: 'Really Long String That Takes Up Space'
    }
  }
}`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var N,D,_;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;e.parameters={...e.parameters,docs:{...(X=e.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=e.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'inline-radio'
      }
    }
  }
}`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,oe,ae;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'check'
      }
    }
  }
}`,...(ae=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,se,ce;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'inline-check'
      }
    }
  }
}`,...(ce=(se=l.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,ie,pe;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'select'
      }
    }
  }
}`,...(pe=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var le,ue,de;d.parameters={...d.parameters,docs:{...(le=d.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    row: {
      ...Radio.args.row,
      control: {
        ...Radio.args.row.control,
        type: 'multi-select'
      }
    }
  }
}`,...(de=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ge,ye,we;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var be,Se,fe;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ke,he,xe;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(xe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ce,je,Re;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var Te,Ee,Oe;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Oe=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Ve,Ae,qe;f.parameters={...f.parameters,docs:{...(Ve=f.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(qe=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ne,De,_e;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(De=k.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var ve,Le,Be;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Be=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Ue,Fe,Ge;x.parameters={...x.parameters,docs:{...(Ue=x.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...String.args,
    compact: true
  }
}`,...(Ge=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var Ie,Me,We;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    row: String.args.row
  }
}`,...(We=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var ze,He,Je;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    row: String.args.row,
    compact: true
  }
}`,...(Je=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};const _r=["String","LongName","LongDesc","Boolean","Color","Date","Number","Range","Radio","InlineRadio","Check","InlineCheck","Select","MultiSelect","ObjectOf","ArrayOf","ComplexObject","Func","Enum","LongEnum","ComplexUnion","Markdown","StringCompact","StringNoControls","StringNoControlsCompact"];export{y as ArrayOf,t as Boolean,p as Check,s as Color,w as ComplexObject,k as ComplexUnion,c as Date,S as Enum,b as Func,l as InlineCheck,i as InlineRadio,a as LongDesc,f as LongEnum,o as LongName,h as Markdown,d as MultiSelect,n as Number,g as ObjectOf,e as Radio,m as Range,u as Select,r as String,x as StringCompact,C as StringNoControls,j as StringNoControlsCompact,_r as __namedExportsOrder,Dr as default};
//# sourceMappingURL=ArgRow.stories-da9d0e6a.js.map
