import{R as r}from"./index-f1f2c4b1.js";import{t as B}from"./index-b4514f1c.js";import{w as pe,u as D}from"./index-09d824d7.js";import{B as A,h as ce}from"./index-a443495b.js";import{F as h}from"./index-758f4e48.js";import{b as a,I as ue,D as s}from"./Explorer-b469d64d.js";import{standardData as le}from"./Heading.stories-2521afd8.js";import Ie from"./Explorer.stories-c47ef68b.js";import{m as fe}from"./mockdata-27992e36.js";import{L as ge}from"./LayoutProvider-eb9b2e6f.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./index-4b2a7d13.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./index-8c127ed0.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./throttle-d46bc519.js";import"./Heading-67bee835.js";import"./Menu-2bb664ec.js";import"./index-d6b32626.js";import"./constants-277f2eb4.js";import"./chunk-AT66UTFE-23ee157f.js";import"./v4-4a60fe23.js";import"./index-f10f74ef.js";import"./Refs.stories-fe042b7e.js";const ye=e=>new Promise(o=>{setTimeout(o,e)}),mr={component:a,title:"Sidebar/Sidebar",excludeStories:/.*Data$/,parameters:{layout:"fullscreen"},decorators:[Ie.decorators[0],e=>r.createElement(ge,null,r.createElement(ue,null),e())]},{menu:t}=le,i=fe.withRoot,n="root-1-child-a2--grandchild-a1-1",pr={menu:t,index:i,storyId:n},cr={menu:t},S={optimized:{id:"optimized",title:"This is a ref",url:"https://example.com",type:"lazy",index:i,previewInitialized:!0}},me=new Error("Failed to load index"),Ee={optimized:{...S.optimized,index:void 0,indexError:me}},xe={optimized:{...S.optimized,index:{}}},c={args:{previewInitialized:!0},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:i,storyId:n,refId:s,refs:{},status:{}})},u={args:{previewInitialized:!1},render:e=>r.createElement(a,{...e,menu:t,extra:[],storyId:n,refId:s,refs:{},status:{}})},l={args:{previewInitialized:!0},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:{},storyId:n,refId:s,refs:{},status:{}})},I={args:{previewInitialized:!0},render:e=>r.createElement(a,{...e,indexError:me,extra:[],menu:t,storyId:n,refId:s,refs:{},status:{}})},f={args:{previewInitialized:!0},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:i,storyId:n,refId:s,refs:S,status:{}})},g={args:{previewInitialized:!1},render:e=>r.createElement(a,{...e,menu:t,extra:[],storyId:n,refId:s,refs:S,status:{}})},y={args:{previewInitialized:!1},render:e=>r.createElement(a,{...e,menu:t,extra:[],storyId:n,refId:s,refs:Ee,status:{}})},E={args:{previewInitialized:!0},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:{},storyId:n,refId:s,refs:xe,status:{}})},d={args:{previewInitialized:!0,status:Object.entries(i).reduce((e,[o,m])=>m.type!=="story"?e:m.name.includes("B")?{...e,[o]:{addonA:{status:"warn",title:"Addon A",description:"We just wanted you to know"},addonB:{status:"error",title:"Addon B",description:"This is a big deal!"}}}:e,{})},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:i,storyId:n,refId:s,refs:{}})},p={...d,args:{...d.args,status:Object.entries(i).reduce((e,[o,m])=>m.type!=="story"?e:{...e,[o]:{addonA:{status:"warn",title:"Addon A",description:"We just wanted you to know"},addonB:{status:"error",title:"Addon B",description:"This is a big deal!"}}},{})}},x={...p,parameters:{theme:"light",chromatic:{delay:2200}},play:async({canvasElement:e,step:o})=>{await o("wait 2000ms",()=>ye(2e3));const _=await(await pe(e)).findByPlaceholderText("Find components");D.clear(_),D.type(_,"B2")}},w={args:{previewInitialized:!0},parameters:{theme:"light"},render:e=>r.createElement(a,{...e,menu:t,extra:[],index:i,storyId:n,refId:s,refs:{},status:{},bottom:[{id:"1",type:B.experimental_SIDEBAR_BOTTOM,render:()=>r.createElement(A,null,r.createElement(h,null),"Custom addon A")},{id:"2",type:B.experimental_SIDEBAR_BOTTOM,render:()=>r.createElement(A,null," ",r.createElement(h,null),"Custom addon B")},{id:"3",type:B.experimental_SIDEBAR_BOTTOM,render:()=>r.createElement(ce,null," ",r.createElement(h,null))}]})};var v,T,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var z,R,b;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(b=(R=u.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var O,L,W;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={{}} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,j,C;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} indexError={indexError} extra={[]} menu={menu} storyId={storyId} refId={DEFAULT_REF_ID} refs={{}} status={{}} />
}`,...(C=(j=I.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var M,k,H;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={(index as any)} storyId={storyId} refId={DEFAULT_REF_ID} refs={refs} status={{}} />
}`,...(H=(k=f.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var P,X,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={refs} status={{}} />
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var q,G,J;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    previewInitialized: false
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} storyId={storyId} refId={DEFAULT_REF_ID} refs={refsError} status={{}} />
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    previewInitialized: true
  },
  render: args => <Sidebar {...args} menu={menu} extra={[]} index={{}} storyId={storyId} refId={DEFAULT_REF_ID} refs={refsEmpty} status={{}} />
}`,...(Q=(N=E.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var V,Y,Z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(re=p.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,de;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
              <FaceHappyIcon />
              Custom addon A
            </Button>
  }, {
    id: '2',
    type: types.experimental_SIDEBAR_BOTTOM,
    render: () => <Button>
              {' '}
              <FaceHappyIcon />
              Custom addon B
            </Button>
  }, {
    id: '3',
    type: types.experimental_SIDEBAR_BOTTOM,
    render: () => <IconButton>
              {' '}
              <FaceHappyIcon />
            </IconButton>
  }]} />
}`,...(de=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const ur=["simpleData","loadingData","Simple","Loading","Empty","IndexError","WithRefs","LoadingWithRefs","LoadingWithRefError","WithRefEmpty","StatusesCollapsed","StatusesOpen","Searching","Bottom"];export{w as Bottom,l as Empty,I as IndexError,u as Loading,y as LoadingWithRefError,g as LoadingWithRefs,x as Searching,c as Simple,d as StatusesCollapsed,p as StatusesOpen,E as WithRefEmpty,f as WithRefs,ur as __namedExportsOrder,mr as default,cr as loadingData,pr as simpleData};
//# sourceMappingURL=Sidebar.stories-378748a0.js.map
