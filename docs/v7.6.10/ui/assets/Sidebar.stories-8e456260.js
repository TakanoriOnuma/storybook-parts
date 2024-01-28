import{j as r,a as h}from"./jsx-runtime-31019b9d.js";import{t as E}from"./index-0d1d6e7e.js";import{w as oe,u as A}from"./index-73c7a0c2.js";import{B as D,I as S,h as de}from"./index-0d90a496.js";import{b as a,D as n}from"./Sidebar-86458011.js";import{standardData as pe}from"./Heading.stories-121b7eda.js";import ce from"./Explorer.stories-5ff1016f.js";import{m as me}from"./mockdata-27992e36.js";import"./index-9f32f44c.js";import"./_commonjsHelpers-de833af9.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./index-9e46a6e4.js";import"./isEqual-8e48f6f6.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9ed7e0e5.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";import"./chunk-C5H4AMN5-7fdb7c46.js";import"./preview-errors-208e1923.js";import"./Refs.stories-afbedeec.js";const ue=e=>new Promise(o=>{setTimeout(o,e)}),tr={component:a,title:"Sidebar/Sidebar",excludeStories:/.*Data$/,parameters:{layout:"fullscreen",withSymbols:!0},decorators:[ce.decorators[0]]},{menu:t}=pe,i=me.withRoot,s="root-1-child-a2--grandchild-a1-1",ar={menu:t,index:i,storyId:s},sr={menu:t},B={optimized:{id:"optimized",title:"This is a ref",url:"https://example.com",type:"lazy",index:i,previewInitialized:!0}},ie=new Error("Failed to load index"),le={optimized:{...B.optimized,index:void 0,indexError:ie}},m={args:{previewInitialized:!0},render:e=>r(a,{...e,menu:t,extra:[],index:i,storyId:s,refId:n,refs:{},status:{}})},u={args:{previewInitialized:!1},render:e=>r(a,{...e,menu:t,extra:[],storyId:s,refId:n,refs:{},status:{}})},l={args:{previewInitialized:!0},render:e=>r(a,{...e,menu:t,extra:[],index:{},storyId:s,refId:n,refs:{},status:{}})},I={args:{previewInitialized:!0},render:e=>r(a,{...e,indexError:ie,extra:[],menu:t,storyId:s,refId:n,refs:{},status:{}})},f={args:{previewInitialized:!0},render:e=>r(a,{...e,menu:t,extra:[],index:i,storyId:s,refId:n,refs:B,status:{}})},g={args:{previewInitialized:!1},render:e=>r(a,{...e,menu:t,extra:[],storyId:s,refId:n,refs:B,status:{}})},y={args:{previewInitialized:!1},render:e=>r(a,{...e,menu:t,extra:[],storyId:s,refId:n,refs:le,status:{}})},d={args:{previewInitialized:!0,status:Object.entries(i).reduce((e,[o,p])=>p.type!=="story"?e:p.name.includes("B")?{...e,[o]:{addonA:{status:"warn",title:"Addon A",description:"We just wanted you to know"},addonB:{status:"error",title:"Addon B",description:"This is a big deal!"}}}:e,{})},render:e=>r(a,{...e,menu:t,extra:[],index:i,storyId:s,refId:n,refs:{}})},c={...d,args:{...d.args,status:Object.entries(i).reduce((e,[o,p])=>p.type!=="story"?e:{...e,[o]:{addonA:{status:"warn",title:"Addon A",description:"We just wanted you to know"},addonB:{status:"error",title:"Addon B",description:"This is a big deal!"}}},{})}},x={...c,parameters:{theme:"light",chromatic:{delay:2200}},play:async({canvasElement:e,step:o})=>{await o("wait 2000ms",()=>ue(2e3));const _=await(await oe(e)).findByPlaceholderText("Find components");A.clear(_),A.type(_,"B2")}},w={args:{previewInitialized:!0},parameters:{theme:"light"},render:e=>r(a,{...e,menu:t,extra:[],index:i,storyId:s,refId:n,refs:{},status:{},bottom:[{id:"1",type:E.experimental_SIDEBAR_BOTTOM,render:()=>h(D,{children:[r(S,{icon:"facehappy"}),"Custom addon A"]})},{id:"2",type:E.experimental_SIDEBAR_BOTTOM,render:()=>h(D,{children:[" ",r(S,{icon:"facehappy"}),"Custom addon B"]})},{id:"3",type:E.experimental_SIDEBAR_BOTTOM,render:()=>h(de,{children:[" ",r(S,{icon:"facehappy"})]})}]})};var T,v,b;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var z,F,R;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,L,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={{}} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var U,W,C;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} indexError={indexError} extra={[]} menu={menu} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(C=(W=I.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var M,k,P;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={refs} status={{}} />
}`,...(P=(k=f.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var X,$,q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={refs} status={{}} />
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={refsError} status={{}} />
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    previewInitialized: true,
    status: Object.entries(index).reduce<State['status']>((acc, [id, item]) => {
      if (item.type !== 'story') {
        return acc;
      }
      if (item.name.includes('B')) {
        return {
          ...acc,
          [id]: {
            addonA: {
              status: 'warn',
              title: 'Addon A',
              description: 'We just wanted you to know'
            },
            addonB: {
              status: 'error',
              title: 'Addon B',
              description: 'This is a big deal!'
            }
          }
        };
      }
      return acc;
    }, {})
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} />
}`,...(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var V,Y,Z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StatusesCollapsed,
  args: {
    ...StatusesCollapsed.args,
    status: Object.entries(index).reduce<State['status']>((acc, [id, item]) => {
      if (item.type !== 'story') {
        return acc;
      }
      return {
        ...acc,
        [id]: {
          addonA: {
            status: 'warn',
            title: 'Addon A',
            description: 'We just wanted you to know'
          },
          addonB: {
            status: 'error',
            title: 'Addon B',
            description: 'This is a big deal!'
          }
        }
      };
    }, {})
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...StatusesOpen,
  parameters: {
    theme: 'light',
    chromatic: {
      delay: 2200
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('wait 2000ms', () => wait(2000));
    const canvas = await within(canvasElement);
    const search = await canvas.findByPlaceholderText('Find components');
    userEvent.clear(search);
    userEvent.type(search, 'B2');
  }
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,se,ne;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  parameters: {
    theme: 'light'
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} bottom={[{
    id: '1',
    type: types.experimental_SIDEBAR_BOTTOM,
    render: () => <Button>
              <Icons icon="facehappy" />
              Custom addon A
            </Button>
  }, {
    id: '2',
    type: types.experimental_SIDEBAR_BOTTOM,
    render: () => <Button>
              {' '}
              <Icons icon="facehappy" />
              Custom addon B
            </Button>
  }, {
    id: '3',
    type: types.experimental_SIDEBAR_BOTTOM,
    render: () => <IconButton>
              {' '}
              <Icons icon="facehappy" />
            </IconButton>
  }]} />
}`,...(ne=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const nr=["simpleData","loadingData","Simple","Loading","Empty","IndexError","WithRefs","LoadingWithRefs","LoadingWithRefError","StatusesCollapsed","StatusesOpen","Searching","Bottom"];export{w as Bottom,l as Empty,I as IndexError,u as Loading,y as LoadingWithRefError,g as LoadingWithRefs,x as Searching,m as Simple,d as StatusesCollapsed,c as StatusesOpen,f as WithRefs,nr as __namedExportsOrder,tr as default,sr as loadingData,ar as simpleData};
//# sourceMappingURL=Sidebar.stories-8e456260.js.map
