import{r as x,R as n}from"./index-f1f2c4b1.js";import{c as ne,u as oe,M as G}from"./index-b4514f1c.js";import{w as h}from"./index-09d824d7.js";import{l as ae}from"./lodash-302d6d3a.js";import{n as s}from"./index-4b2a7d13.js";import{h as re}from"./index-a443495b.js";import{M as se,n as ie}from"./index-758f4e48.js";import{T as v,M as le}from"./MobileAbout-71d11983.js";import{a as m}from"./constants-277f2eb4.js";import{u as I,L as ce}from"./LayoutProvider-eb9b2e6f.js";const H=({children:e})=>{const t=x.useRef(null),a=x.useRef(null),o=x.useRef(null),{isMobileMenuOpen:r,setMobileMenuOpen:i,isMobileAboutOpen:w,setMobileAboutOpen:ee}=I();return n.createElement(n.Fragment,null,n.createElement(v,{nodeRef:t,in:r,timeout:m,mountOnEnter:!0,unmountOnExit:!0,onExited:()=>ee(!1)},E=>n.createElement(me,{ref:t,state:E},n.createElement(v,{nodeRef:a,in:!w,timeout:m},te=>n.createElement(de,{ref:a,state:te},e)),n.createElement(le,null))),n.createElement(v,{nodeRef:o,in:r,timeout:m,mountOnEnter:!0,unmountOnExit:!0},E=>n.createElement(pe,{ref:o,state:E,onClick:()=>i(!1),"aria-label":"Close navigation menu"})))},me=s.div(({theme:e,state:t})=>({position:"fixed",boxSizing:"border-box",width:"100%",background:e.background.content,height:"80%",bottom:0,left:0,zIndex:11,borderRadius:"10px 10px 0 0",transition:`all ${m}ms ease-in-out`,overflow:"hidden",transform:`${(()=>t==="entering"||t==="entered"?"translateY(0)":t==="exiting"||t==="exited"?"translateY(100%)":"translateY(0)")()}`})),de=s.div(({theme:e,state:t})=>({position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1,transition:`all ${m}ms ease-in-out`,overflow:"hidden",opacity:`${(()=>t==="entered"||t==="entering"?1:t==="exiting"||t==="exited"?0:1)()}`,transform:`${(()=>{switch(t){case"entering":case"entered":return"translateX(0)";case"exiting":case"exited":return"translateX(-20px)";default:return"translateX(0)"}})()}`})),pe=s.div(({state:e})=>({position:"fixed",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.5)",top:0,bottom:0,right:0,left:0,zIndex:10,transition:`all ${m}ms ease-in-out`,cursor:"pointer",opacity:`${(()=>{switch(e){case"entering":case"entered":return 1;case"exiting":case"exited":return 0;default:return 0}})()}`,"&:hover":{background:"rgba(0, 0, 0, 0.6)"}}));H.__docgenInfo={description:"",methods:[],displayName:"MobileMenuDrawer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J=200,ue=s.div(({theme:e,state:t})=>({position:"fixed",boxSizing:"border-box",width:"100%",background:e.background.content,height:"50%",bottom:0,left:0,zIndex:11,transition:`all ${J}ms ease-in-out`,overflow:"hidden",borderTop:`1px solid ${e.appBorderColor}`,transform:`${(()=>{switch(t){case"entering":case"entered":return"translateY(0)";case"exiting":case"exited":return"translateY(100%)";default:return"translateY(0)"}})()}`})),K=({children:e})=>{const{isMobilePanelOpen:t}=I(),a=x.useRef(null);return n.createElement(v,{nodeRef:a,in:t,timeout:J,mountOnEnter:!0,unmountOnExit:!0},o=>n.createElement(ue,{ref:a,state:o},e))};K.__docgenInfo={description:"",methods:[],displayName:"MobileAddonsDrawer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ge=()=>{var r,i;const{index:e}=ne(),t=oe().getCurrentStoryData();if(!t)return"";let a=((r=t.renderLabel)==null?void 0:r.call(t,t))||t.name,o=e[t.id];for(;"parent"in o&&o.parent&&e[o.parent]&&a.length<24;)o=e[o.parent],a=`${((i=o.renderLabel)==null?void 0:i.call(o,o))||o.name}/${a}`;return a},Q=({menu:e,panel:t,showPanel:a})=>{const{isMobileMenuOpen:o,setMobileMenuOpen:r,setMobilePanelOpen:i}=I(),w=ge();return n.createElement(ye,null,n.createElement(H,null,e),n.createElement(K,null,t),n.createElement(fe,{onClick:()=>r(!o),title:"Open navigation menu"},n.createElement(se,null),n.createElement(be,null,w)),a&&n.createElement(re,{onClick:()=>i(!0),title:"Open addon panel"},n.createElement(ie,null)))},ye=s.div(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"space-between",bottom:0,left:0,width:"100%",height:40,zIndex:10,background:e.barBg,padding:"0 6px",borderTop:`1px solid ${e.appBorderColor}`})),fe=s.button(({theme:e})=>({all:"unset",display:"flex",alignItems:"center",gap:10,color:e.color.mediumdark,fontSize:`${e.typography.size.s2-1}px`,padding:"0 7px",fontWeight:e.typography.weight.bold,WebkitLineClamp:1,"> svg":{width:14,height:14,flexShrink:0}})),be=s.p({display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden"});Q.__docgenInfo={description:"",methods:[],displayName:"MobileNavigation",props:{menu:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},panel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showPanel:{required:!0,tsType:{name:"boolean"},description:""}}};const we=()=>{const{setMobilePanelOpen:e}=I();return n.createElement("div",null,"panel",n.createElement("button",{type:"button",title:"Close addon panel",onClick:()=>e(!1)},"close"))},d=({name:e})=>ae.startCase(e),Z={state:{index:{someRootId:{type:"root",id:"someRootId",name:"root",renderLabel:d},someComponentId:{type:"component",id:"someComponentId",name:"component",parent:"someRootId",renderLabel:d},someStoryId:{type:"story",id:"someStoryId",name:"story",parent:"someComponentId",renderLabel:d}}},api:{getCurrentStoryData(){return Z.state.index.someStoryId}}},xe={component:Q,title:"Mobile/Navigation",decorators:[e=>n.createElement(G.Provider,{value:Z},n.createElement(ce,null,n.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100svh"}},n.createElement("div",{style:{flex:1}}),e())))],parameters:{layout:"fullscreen",theme:"light",viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[320]}},args:{menu:n.createElement("div",null,"navigation menu"),panel:n.createElement(we,null),showPanel:!0}},p={},u={parameters:{theme:"dark"}},g={decorators:[e=>{const t={state:{index:{someRootId:{type:"root",id:"someRootId",name:"someLongRootName",renderLabel:d},someComponentId:{type:"component",id:"someComponentId",name:"someComponentName",parent:"someRootId",renderLabel:d},someStoryId:{type:"story",id:"someStoryId",name:"someLongStoryName",parent:"someComponentId",renderLabel:d}}},api:{getCurrentStoryData(){return t.state.index.someStoryId}}};return n.createElement(G.Provider,{value:t},e())}]},l={play:async({canvasElement:e})=>{await(await h(e).getByTitle("Open navigation menu")).click()}},y={play:async e=>{await l.play(e),await new Promise(a=>setTimeout(a,500)),await(await h(e.canvasElement).getByLabelText("Close navigation menu")).click()}},c={play:async({canvasElement:e})=>{await(await h(e).getByTitle("Open addon panel")).click()}},f={play:async e=>{await c.play(e),await new Promise(a=>setTimeout(a,500)),await(await h(e.canvasElement).getByTitle("Close addon panel")).click()}},b={args:{showPanel:!1}};var S,M,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var C,O,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  }
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,T,B;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [storyFn => {
    const mockManagerStoreWithLongNames: any = {
      state: {
        index: {
          someRootId: {
            type: 'root',
            id: 'someRootId',
            name: 'someLongRootName',
            renderLabel
          },
          someComponentId: {
            type: 'component',
            id: 'someComponentId',
            name: 'someComponentName',
            parent: 'someRootId',
            renderLabel
          },
          someStoryId: {
            type: 'story',
            id: 'someStoryId',
            name: 'someLongStoryName',
            parent: 'someComponentId',
            renderLabel
          }
        }
      },
      api: {
        getCurrentStoryData() {
          return mockManagerStoreWithLongNames.state.index.someStoryId;
        }
      }
    };
    return <ManagerContext.Provider value={mockManagerStoreWithLongNames}>
          {storyFn()}
        </ManagerContext.Provider>;
  }]
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var P,L,D;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const menuOpen = await within(canvasElement).getByTitle('Open navigation menu');
    await menuOpen.click();
  }
}`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var _,$,z;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  play: async context => {
    await MenuOpen.play(context);
    await new Promise(resolve => setTimeout(resolve, 500));
    const overlay = await within(context.canvasElement).getByLabelText('Close navigation menu');
    await overlay.click();
  }
}`,...(z=($=y.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var A,W,Y;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const panelButton = await within(canvasElement).getByTitle('Open addon panel');
    await panelButton.click();
  }
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var q,F,j;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  play: async context => {
    await PanelOpen.play(context);
    await new Promise(resolve => setTimeout(resolve, 500));
    const closeButton = await within(context.canvasElement).getByTitle('Close addon panel');
    await closeButton.click();
  }
}`,...(j=(F=f.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var X,U,V;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    showPanel: false
  }
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ve=["Default","Dark","LongStoryName","MenuOpen","MenuClosed","PanelOpen","PanelClosed","PanelDisabled"],Te=Object.freeze(Object.defineProperty({__proto__:null,Dark:u,Default:p,LongStoryName:g,MenuClosed:y,MenuOpen:l,PanelClosed:f,PanelDisabled:b,PanelOpen:c,__namedExportsOrder:ve,default:xe},Symbol.toStringTag,{value:"Module"}));export{Q as M,Te as a,xe as m};
//# sourceMappingURL=MobileNavigation.stories-4b1e5cf2.js.map
