import{R as e}from"./index-f1f2c4b1.js";import{a as on}from"./index-0a25eb6d.js";import{N as en}from"./NotificationItem-3ee0fa06.js";const an={component:en,title:"Notifications/NotificationItem",decorators:[h=>e.createElement(on,null,e.createElement(h,null)),h=>e.createElement("div",{style:{width:"240px",margin:"1rem"}},e.createElement(h,null))],excludeStories:/.*Data$/},o=()=>{},tn=()=>{},n={args:{notification:{id:"1",onClear:o,content:{headline:"Storybook cool!"},link:"/some/path"},onDismissNotification:tn}},a={args:{...n.args,notification:{id:"2",onClear:o,content:{headline:"This is a long message that extends over two lines!"},link:"/some/path"}}},i={args:{...n.args,notification:{id:"3",onClear:o,content:{headline:"Storybook X.X is available! Download now »"},link:"/some/path"}}},t={args:{...n.args,notification:{id:"4",onClear:o,content:{headline:"Storybook with a smile!"},icon:{name:"facehappy",color:"hotpink"},link:"/some/path"}}},s={args:{...n.args,notification:{id:"5",onClear:o,content:{headline:"Storybook X.X is available with a smile! Download now »",subHeadline:"This link also has a sub headline"},icon:{name:"facehappy",color:"tomato"},link:"/some/path"}}},r={args:{...n.args,notification:{id:"6",onClear:o,content:{headline:"Storybook has a book icon!"},icon:{name:"book"},link:"/some/path"}}},c={args:{...n.args,notification:{id:"7",onClear:o,content:{headline:"Storybook has a book icon!",subHeadline:e.createElement("strong",null,"Strong subHeadline")},icon:{name:"book"},link:"/some/path"}}},l={args:{...n.args,notification:{id:"8",onClear:o,content:{headline:"Storybook cool!",subHeadline:e.createElement("span",null,e.createElement("em",null,"Emphasized")," normal ",e.createElement("strong",null,"strong Storybook!"))},icon:{name:"book"},link:"/some/path"}}},d={args:{...n.args,notification:{id:"9",onClear:o,content:{headline:"Storybook has a book icon!",subHeadline:"Find out more!"},icon:{name:"book"},link:"/some/path"}}},m={args:{...n.args,notification:{id:"10",onClear:o,content:{headline:"Storybook has a book icon!",subHeadline:"Find out more! by clicking on on buttons and downloading some applications. Find out more! by clicking on buttons and downloading some applications"},icon:{name:"book"},link:"/some/path"}}},p={args:{...n.args,notification:{id:"11",onClear:o,content:{headline:"Storybook has a accessibility icon!",subHeadline:"It is here!"},icon:{name:"accessibility"},link:"/some/path"}}},b={args:{...n.args,notification:{id:"12",onClear:o,content:{headline:"Accessibility icon!",subHeadline:"It is gold!"},icon:{name:"accessibility",color:"gold"},link:"/some/path"}}},g={args:{...n.args,notification:{id:"13",onClear:o,content:{headline:"Storybook notifications has a accessibility icon it can be any color!"},icon:{name:"accessibility",color:"gold"},link:"/some/path"}}};var u,k,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    notification: {
      id: '1',
      onClear,
      content: {
        headline: 'Storybook cool!'
      },
      link: '/some/path'
    },
    onDismissNotification
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var y,f,H;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '2',
      onClear,
      content: {
        headline: 'This is a long message that extends over two lines!'
      },
      link: '/some/path'
    }
  }
}`,...(H=(f=a.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var I,w,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '3',
      onClear,
      content: {
        headline: 'Storybook X.X is available! Download now »'
      },
      link: '/some/path'
    }
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,E,B;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '4',
      onClear,
      content: {
        headline: 'Storybook with a smile!'
      },
      icon: {
        name: 'facehappy',
        color: 'hotpink'
      },
      link: '/some/path'
    }
  }
}`,...(B=(E=t.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var v,x,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '5',
      onClear,
      content: {
        headline: 'Storybook X.X is available with a smile! Download now »',
        subHeadline: 'This link also has a sub headline'
      },
      icon: {
        name: 'facehappy',
        color: 'tomato'
      },
      link: '/some/path'
    }
  }
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var N,X,D;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '6',
      onClear,
      content: {
        headline: 'Storybook has a book icon!'
      },
      icon: {
        name: 'book'
      },
      link: '/some/path'
    }
  }
}`,...(D=(X=r.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var F,_,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '7',
      onClear,
      content: {
        headline: 'Storybook has a book icon!',
        subHeadline: <strong>Strong subHeadline</strong>
      },
      icon: {
        name: 'book'
      },
      link: '/some/path'
    }
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var T,G,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '8',
      onClear,
      content: {
        headline: 'Storybook cool!',
        subHeadline: <span>
            <em>Emphasized</em> normal <strong>strong Storybook!</strong>
          </span>
      },
      icon: {
        name: 'book'
      },
      link: '/some/path'
    }
  }
}`,...(W=(G=l.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var O,j,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '9',
      onClear,
      content: {
        headline: 'Storybook has a book icon!',
        subHeadline: 'Find out more!'
      },
      icon: {
        name: 'book'
      },
      link: '/some/path'
    }
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var R,M,$;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '10',
      onClear,
      content: {
        headline: 'Storybook has a book icon!',
        subHeadline: 'Find out more! by clicking on on buttons and downloading some applications. Find out more! by clicking on buttons and downloading some applications'
      },
      icon: {
        name: 'book'
      },
      link: '/some/path'
    }
  }
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var q,J,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '11',
      onClear,
      content: {
        headline: 'Storybook has a accessibility icon!',
        subHeadline: 'It is here!'
      },
      icon: {
        name: 'accessibility'
      },
      link: '/some/path'
    }
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '12',
      onClear,
      content: {
        headline: 'Accessibility icon!',
        subHeadline: 'It is gold!'
      },
      icon: {
        name: 'accessibility',
        color: 'gold'
      },
      link: '/some/path'
    }
  }
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Y,Z,nn;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    notification: {
      id: '13',
      onClear,
      content: {
        headline: 'Storybook notifications has a accessibility icon it can be any color!'
      },
      icon: {
        name: 'accessibility',
        color: 'gold'
      },
      link: '/some/path'
    }
  }
}`,...(nn=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};const sn=["Simple","LongHeadline","Link","LinkIconWithColor","LinkIconWithColorSubHeadline","BookIcon","StrongSubHeadline","StrongEmphasizedSubHeadline","BookIconSubHeadline","BookIconLongSubHeadline","AccessibilityIcon","AccessibilityGoldIcon","AccessibilityGoldIconLongHeadLineNoSubHeadline"],dn=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityGoldIcon:b,AccessibilityGoldIconLongHeadLineNoSubHeadline:g,AccessibilityIcon:p,BookIcon:r,BookIconLongSubHeadline:m,BookIconSubHeadline:d,Link:i,LinkIconWithColor:t,LinkIconWithColorSubHeadline:s,LongHeadline:a,Simple:n,StrongEmphasizedSubHeadline:l,StrongSubHeadline:c,__namedExportsOrder:sn,default:an},Symbol.toStringTag,{value:"Module"}));export{dn as i};
//# sourceMappingURL=NotificationItem.stories-d370f6d8.js.map
