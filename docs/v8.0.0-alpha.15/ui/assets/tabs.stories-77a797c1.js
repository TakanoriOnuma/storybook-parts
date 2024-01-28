import{e as $}from"./index-bb7da91f.js";import{r as o,R as n}from"./index-f1f2c4b1.js";import{a as Pe}from"./chunk-AT66UTFE-23ee157f.js";import{w as We,a as z,s as M,u as _e,b as $e,f as De}from"./index-09d824d7.js";import{q as je,r as ze}from"./index-758f4e48.js";import{n as p,b as Me}from"./index-4b2a7d13.js";import{L as Ie}from"./index-b75c9059.js";import{P as He}from"./placeholder-84d70851.js";import{S as Ue}from"./ScrollArea-08f3e8ff.js";import{u as Ge}from"./bundle.esm-b70215da.js";import{T as Ye}from"./TooltipLinkList-5ab58518.js";import{W as Je}from"./WithTooltip-de706088.js";import{I as K}from"./IconButton-1b6aea26.js";import"./v4-4a60fe23.js";import"./lz-string-2a82d2da.js";import"./index-8d9ddb1f.js";import"./index-8c127ed0.js";import"./index-356e4a49.js";import"./extends-98964cd2.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./ListItem-23858300.js";import"./polished.esm-e310f6d0.js";import"./inheritsLoose-c82a83d4.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-ce215a3e.js";import"./Tooltip-a3150a95.js";import"./Button-0f9be3d0.js";const Ke=e=>typeof e.props.href=="string",Qe=e=>typeof e.props.href!="string";function Xe({children:e,...t},a){const r={props:t,ref:a};if(Ke(r))return n.createElement("a",{ref:r.ref,...r.props},e);if(Qe(r))return n.createElement("button",{ref:r.ref,type:"button",...r.props},e);throw new Error("invalid props")}const qe=o.forwardRef(Xe);qe.displayName="ButtonOrLink";const D=p(qe,{shouldForwardProp:Me})({whiteSpace:"normal",display:"inline-flex",overflow:"hidden",verticalAlign:"top",justifyContent:"center",alignItems:"center",textAlign:"center",textDecoration:"none","&:empty":{display:"none"},"&[hidden]":{display:"none"}},({theme:e})=>({padding:"0 15px",transition:"color 0.2s linear, border-bottom-color 0.2s linear",height:40,lineHeight:"12px",cursor:"pointer",background:"transparent",border:"0 solid transparent",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",fontWeight:"bold",fontSize:13,"&:focus":{outline:"0 none",borderBottomColor:e.color.secondary}}),({active:e,textColor:t,theme:a})=>e?{color:t||a.barSelectedColor,borderBottomColor:a.barSelectedColor}:{color:t||a.barTextColor,borderBottomColor:"transparent"});D.displayName="TabButton";p.div(({theme:e})=>({width:14,height:14,backgroundColor:e.appBorderColor,animation:`${e.animation.glow} 1.5s ease-in-out infinite`}));p.div(()=>({marginTop:6,padding:7,height:28}));const H=p.div({display:"flex",whiteSpace:"nowrap",flexBasis:"auto",marginLeft:3,marginRight:3},({scrollable:e})=>e?{flexShrink:0}:{},({left:e})=>e?{"& > *":{marginLeft:4}}:{},({right:e})=>e?{marginLeft:30,"& > *":{marginRight:4}}:{});H.displayName="Side";const Ze=({children:e,className:t,scrollable:a})=>a?n.createElement(Ue,{vertical:!1,className:t},e):n.createElement("div",{className:t},e),Le=p(Ze)(({theme:e,scrollable:t=!0})=>({color:e.barTextColor,width:"100%",height:40,flexShrink:0,overflow:t?"auto":"hidden",overflowY:"hidden"}),({theme:e,border:t=!1})=>t?{boxShadow:`${e.appBorderColor}  0 -1px 0 0 inset`,background:e.barBg}:{});Le.displayName="Bar";const et=p.div(({bgColor:e})=>({display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"nowrap",flexShrink:0,height:40,backgroundColor:e||""})),G=({children:e,backgroundColor:t,...a})=>{const[r,s]=o.Children.toArray(e);return n.createElement(Le,{...a},n.createElement(et,{bgColor:t},n.createElement(H,{scrollable:a.scrollable,left:!0},r),s?n.createElement(H,{right:!0},s):null))};G.displayName="FlexBar";G.__docgenInfo={description:"",methods:[],displayName:"FlexBar",props:{border:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentProps"]};const Fe=p.div(({active:e})=>e?{display:"block"}:{display:"none"}),Q=e=>o.Children.toArray(e).map(({props:{title:t,id:a,color:r,children:s}})=>{const m=Array.isArray(s)?s[0]:s;return{title:t,id:a,...r?{color:r}:{},render:typeof m=="function"?m:({active:d})=>n.createElement(Fe,{active:d,role:"tabpanel"},m)}}),tt=p.span(({theme:e,isActive:t})=>({display:"inline-block",width:0,height:0,marginLeft:8,color:t?e.color.secondary:e.color.mediumdark,borderRight:"3px solid transparent",borderLeft:"3px solid transparent",borderTop:"3px solid",transition:"transform .1s ease-out"})),nt=p(D)(({active:e,theme:t,preActive:a})=>`
    color: ${a||e?t.color.secondary:t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);function at(e){const t=o.useRef(),a=o.useRef(),r=o.useRef(new Map),{width:s=1}=Ge({ref:t}),[m,w]=o.useState(e),[d,j]=o.useState([]),x=o.useRef(e),C=o.useCallback(({menuName:v,actions:S})=>{const E=d.some(({active:c})=>c),[i,l]=o.useState(!1);return n.createElement(n.Fragment,null,n.createElement(Je,{interactive:!0,visible:i,onVisibleChange:l,placement:"bottom",delayHide:100,tooltip:n.createElement(Ye,{links:d.map(({title:c,id:b,color:y,active:g})=>({id:b,title:c,color:y,active:g,onClick:u=>{u.preventDefault(),S.onSelect(b)}}))})},n.createElement(nt,{ref:a,active:E,preActive:i,style:{visibility:d.length?"visible":"hidden"},"aria-hidden":!d.length,className:"tabbutton",type:"button",role:"tab"},v,n.createElement(tt,{className:"addon-collapsible-icon",isActive:E||i}))),d.map(({title:c,id:b,color:y},g)=>{const u=`index-${g}`;return n.createElement(D,{id:`tabbutton-${Ie(b)??u}`,style:{visibility:"hidden"},"aria-hidden":!0,tabIndex:-1,ref:R=>{r.current.set(b,R)},className:"tabbutton",type:"button",key:b,textColor:y,role:"tab"},c)}))},[d]),N=o.useCallback(()=>{if(!t.current||!a.current)return;const{x:v,width:S}=t.current.getBoundingClientRect(),{width:E}=a.current.getBoundingClientRect(),i=d.length?v+S-E:v+S,l=[];let c=0;const b=e.filter(y=>{const{id:g}=y,u=r.current.get(g),{width:R=0}=(u==null?void 0:u.getBoundingClientRect())||{},J=v+c+R>i;return(!J||!u)&&l.push(y),c+=R,J});(l.length!==m.length||x.current!==e)&&(w(l),j(b),x.current=e)},[d.length,e,m]);return o.useLayoutEffect(N,[N,s]),{tabRefs:r,addonsRef:a,tabBarRef:t,visibleList:m,invisibleList:d,AddonTab:C}}const rt="/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",ot=p.div(({theme:e,bordered:t})=>t?{backgroundClip:"padding-box",border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius,overflow:"hidden",boxSizing:"border-box"}:{},({absolute:e})=>e?{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column"}:{display:"block"}),Ve=p.div({overflow:"hidden","&:first-of-type":{marginLeft:-3},whiteSpace:"nowrap",flexGrow:1});Ve.displayName="TabBar";const st=p.div({display:"block",position:"relative"},({theme:e})=>({fontSize:e.typography.size.s2-1,background:e.background.content}),({bordered:e,theme:t})=>e?{borderRadius:`0 0 ${t.appBorderRadius-1}px ${t.appBorderRadius-1}px`}:{},({absolute:e,bordered:t})=>e?{height:`calc(100% - ${t?42:40}px)`,position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:40+(t?1:0),overflow:"auto",[`& > *:first-child${rt}`]:{position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:0+(t?1:0),height:`calc(100% - ${t?2:0}px)`,overflow:"auto"}}:{}),Oe=({active:e,render:t,children:a})=>n.createElement(Fe,{active:e},t?t():a),f=o.memo(({children:e,selected:t,actions:a,absolute:r,bordered:s,tools:m,backgroundColor:w,id:d,menuName:j})=>{const x=Q(e).map(i=>i.id).join(","),C=o.useMemo(()=>Q(e).map((i,l)=>({...i,active:t?i.id===t:l===0})),[t,x]),{visibleList:N,tabBarRef:v,tabRefs:S,AddonTab:E}=at(C);return C.length?n.createElement(ot,{absolute:r,bordered:s,id:d},n.createElement(G,{scrollable:!1,border:!0,backgroundColor:w},n.createElement(Ve,{style:{whiteSpace:"normal"},ref:v,role:"tablist"},N.map(({title:i,id:l,active:c,color:b},y)=>{const g=`index-${y}`;return n.createElement(D,{id:`tabbutton-${Ie(l)??g}`,ref:u=>{S.current.set(l,u)},className:`tabbutton ${c?"tabbutton-active":""}`,type:"button",key:l,active:c,textColor:b,onClick:u=>{u.preventDefault(),a.onSelect(l)},role:"tab"},typeof i=="function"?n.createElement("title",null):i)}),n.createElement(E,{menuName:j,actions:a})),m),n.createElement(st,{id:"panel-tab-content",bordered:s,absolute:r},C.map(({id:i,active:l,render:c})=>n.createElement(c,{key:i,active:l},null)))):n.createElement(He,null,n.createElement(o.Fragment,{key:"title"},"Nothing found"))});f.displayName="Tabs";f.defaultProps={id:null,children:null,tools:null,selected:null,absolute:!1,bordered:!1,menuName:"Tabs"};class h extends o.Component{constructor(t){super(t),this.handlers={onSelect:a=>this.setState({selected:a})},this.state={selected:t.initial}}render(){const{bordered:t=!1,absolute:a=!1,children:r,backgroundColor:s,menuName:m}=this.props,{selected:w}=this.state;return n.createElement(f,{bordered:t,absolute:a,selected:w,backgroundColor:s,menuName:m,actions:this.handlers},r)}}h.defaultProps={children:[],initial:null,absolute:!1,bordered:!1,backgroundColor:"",menuName:void 0};Oe.__docgenInfo={description:"",methods:[],displayName:"TabWrapper",props:{active:{required:!0,tsType:{name:"boolean"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactElement",signature:{arguments:[],return:{name:"ReactElement"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: FC<Addon_RenderOptions & PropsWithChildren>;
  title: ReactNode | FC<PropsWithChildren>;
}`,signature:{properties:[{key:"children",value:{name:"FC",elements:[{name:"intersection",raw:"Addon_RenderOptions & PropsWithChildren",elements:[{name:"Addon_RenderOptions"},{name:"PropsWithChildren"}]}],raw:"FC<Addon_RenderOptions & PropsWithChildren>",required:!0}},{key:"title",value:{name:"union",raw:"ReactNode | FC<PropsWithChildren>",elements:[{name:"ReactNode"},{name:"FC",elements:[{name:"PropsWithChildren"}],raw:"FC<PropsWithChildren>"}],required:!0}}]}}],raw:`ReactElement<{
  children: FC<Addon_RenderOptions & PropsWithChildren>;
  title: ReactNode | FC<PropsWithChildren>;
}>`}],raw:`ReactElement<{
  children: FC<Addon_RenderOptions & PropsWithChildren>;
  title: ReactNode | FC<PropsWithChildren>;
}>[]`},description:"",defaultValue:{value:"null",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},tools:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},selected:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},actions:{required:!1,tsType:{name:"intersection",raw:`{
  onSelect: (id: string) => void;
} & Record<string, any>`,elements:[{name:"signature",type:"object",raw:`{
  onSelect: (id: string) => void;
}`,signature:{properties:[{key:"onSelect",value:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}},required:!0}}]}},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},absolute:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},menuName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tabs'",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TabsState",props:{children:{required:!1,tsType:{name:"TabsProps['children']",raw:"TabsProps['children']"},description:"",defaultValue:{value:"[]",computed:!1}},initial:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},absolute:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},menuName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}}}};const it=Array.from(new Array(15),(e,t)=>t).map(e=>Math.floor(1/15*e*16777215).toString(16).padStart(6,"0"));function U(e,t){return t||(t={}),t[e]?t[e]:e<=1?1:(t[e]=U(e-1,t)+U(e-2,t),t[e])}const Y={test1:{title:"Tab title #1",render:({active:e})=>e?n.createElement("div",{id:"test1"},"CONTENT 1"):null},test2:{title:"Tab title #2",render:({active:e})=>n.createElement("div",{id:"test2",style:{background:"hotpink",minHeight:"100%",display:e?"block":"none"}},"CONTENT 2")},test3:{title:"Tab title #3",render:({active:e})=>e?n.createElement("div",{id:"test3"},it.map((t,a)=>n.createElement("div",{key:t,style:{background:`#${t}`,height:30+U(a+5)/10}}))):null},test4:{title:"Tab title #4",render:({active:e})=>e?n.createElement("div",{id:"test4"},"CONTENT 4"):null},test5:{title:"Tab title #5",render:({active:e})=>e?n.createElement("div",{id:"test5"},"CONTENT 5"):null},test6:{title:"Tab title #6",render:({active:e})=>n.createElement(Oe,{active:e,render:()=>n.createElement("div",null,"CONTENT 6")})}},B=Pe("onSelect"),k=Object.entries(Y).map(([e,t])=>n.createElement("div",{key:e,id:e,title:t.title},t.render)),Ot={title:"Tabs",args:{menuName:"Addons"}},A={render:e=>n.createElement(h,{initial:"test2",...e},n.createElement("div",{id:"test1",title:"With a function"},({active:t,selected:a})=>t?n.createElement("div",null,a," is selected"):null),n.createElement("div",{id:"test2",title:"With markup"},n.createElement("div",null,"test2 is always active (but visually hidden)")))},W={render:e=>n.createElement("div",null,n.createElement(h,{initial:"test2",...e},n.createElement("div",{id:"test1",title:"With a function",color:"#e00000"},({active:t,selected:a})=>t?n.createElement("div",null,a," is selected"):null),n.createElement("div",{id:"test2",title:"With markup",color:"green"},n.createElement("div",null,"test2 is always active (but visually hidden)"))))},I={render:e=>n.createElement("div",null,n.createElement(h,{initial:"test2",backgroundColor:"rgba(0,0,0,.05)",...e},n.createElement("div",{id:"test1",title:"With a function",color:"#e00000"},({active:t,selected:a})=>t?n.createElement("div",null,a," is selected"):null),n.createElement("div",{id:"test2",title:"With markup",color:"green"},n.createElement("div",null,"test2 is always active (but visually hidden)"))))},lt={sized:{name:"Sized",styles:{width:"380px",height:"500px"}}},T={parameters:{viewport:{defaultViewport:"sized",viewports:lt},theme:"light",chromatic:{viewports:[380]}},play:async({canvasElement:e})=>{const t=We(e);await z(async()=>{await $(t.getAllByRole("tab")).toHaveLength(3),await $(t.getByRole("tab",{name:/Addons/})).toBeInTheDocument()}),await z(async()=>{const a=await t.findByRole("tab",{name:/Addons/}),r=await M.queryByTestId("tooltip");if(r||await _e.click(a),!r)throw new Error("Tooltip not found");await $(M.queryByTestId("tooltip")).toBeInTheDocument()})},render:e=>n.createElement(h,{initial:"test1",...e},Object.entries(Y).map(([t,a])=>n.createElement("div",{key:t,id:t,title:a.title},a.render)))},q={...T,play:async e=>{await T.play(e);const t=We(e.canvasElement);await z(async()=>{const a=await M.findByTestId("tooltip"),r=await $e(a,"Tab title #4",{});De(r,new MouseEvent("click",{bubbles:!0}));const s=await t.findByText("CONTENT 4");await $(s).toBeVisible()}),await T.play(e)},render:e=>n.createElement(h,{initial:"test1",...e},Object.entries(Y).map(([t,a])=>n.createElement("div",{key:t,id:t,title:a.title},a.render)))},L={render:e=>n.createElement(h,{...e},k)},F={render:e=>n.createElement(f,{bordered:!0,absolute:!1,selected:"test3",menuName:"Addons",actions:{onSelect:B},...e},k)},V={render:e=>n.createElement(f,{bordered:!0,selected:"test3",menuName:"Addons",actions:{onSelect:B},tools:n.createElement(o.Fragment,null,n.createElement(K,{title:"Tool 1"},n.createElement(je,null)),n.createElement(K,{title:"Tool 2"},n.createElement(ze,null))),...e},k)},O={parameters:{layout:"fullscreen"},render:e=>n.createElement(f,{absolute:!0,selected:"test3",menuName:"Addons",actions:{onSelect:B},...e},k)},P={parameters:{layout:"fullscreen"},render:e=>n.createElement(f,{absolute:!0,bordered:!0,menuName:"Addons",selected:"test3",actions:{onSelect:B},...e},k)},_={parameters:{layout:"fullscreen"},render:e=>n.createElement(f,{actions:{onSelect:B},bordered:!0,menuName:"Addons",absolute:!0,...e})};var X,Z,ee;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <TabsState initial="test2" {...args}>
      <div id="test1" title="With a function">
        {((({
        active,
        selected
      }: {
        active: boolean;
        selected: string;
      }) => active ? <div>{selected} is selected</div> : null) as any)}
      </div>
      <div id="test2" title="With markup">
        <div>test2 is always active (but visually hidden)</div>
      </div>
    </TabsState>
} satisfies Story`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div>
      <TabsState initial="test2" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {((({
          active,
          selected
        }: {
          active: boolean;
          selected: string;
        }) => active ? <div>{selected} is selected</div> : null) as any)}
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
} satisfies Story`,...(ae=(ne=W.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div>
      <TabsState initial="test2" backgroundColor="rgba(0,0,0,.05)" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {((({
          active,
          selected
        }: {
          active: boolean;
          selected: string;
        }) => active ? <div>{selected} is selected</div> : null) as any)}
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
} satisfies Story`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,de;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'sized',
      viewports: customViewports
    },
    theme: 'light',
    chromatic: {
      viewports: [380]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(3);
      await expect(canvas.getByRole('tab', {
        name: /Addons/
      })).toBeInTheDocument();
    });
    await waitFor(async () => {
      const addonsTab = await canvas.findByRole('tab', {
        name: /Addons/
      });
      const tooltip = await screen.queryByTestId('tooltip');
      if (!tooltip) {
        await userEvent.click(addonsTab);
      }
      if (!tooltip) {
        throw new Error('Tooltip not found');
      }
      await expect(screen.queryByTestId('tooltip')).toBeInTheDocument();
    });
  },
  render: args => <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => <div key={k} id={k} title={(v.title as any)}>
          {/* @ts-expect-error (we know this is broken) */}
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(de=(le=T.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...StatefulDynamicWithOpenTooltip,
  play: async context => {
    await StatefulDynamicWithOpenTooltip.play(context);
    const canvas = within(context.canvasElement);
    await waitFor(async () => {
      const popperContainer = await screen.findByTestId('tooltip');
      const tab4 = await findByText(popperContainer, 'Tab title #4', {});
      fireEvent(tab4, new MouseEvent('click', {
        bubbles: true
      }));
      const content4 = await canvas.findByText('CONTENT 4');
      await expect(content4).toBeVisible();
    });

    // reopen the tooltip
    await StatefulDynamicWithOpenTooltip.play(context);
  },
  render: args => <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => <div key={k} id={k} title={(v.title as any)}>
          {/* @ts-expect-error (we know this is broken) */}
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(pe=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,fe;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <TabsState {...args}>{content}</TabsState>
} satisfies Story`,...(fe=(be=L.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,he,ve;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <Tabs bordered absolute={false} selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(ve=(he=F.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ge,Te,we;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <Tabs bordered selected="test3" menuName="Addons" actions={{
    onSelect
  }} tools={<Fragment>
          <IconButton title="Tool 1">
            <MemoryIcon />
          </IconButton>
          <IconButton title="Tool 2">
            <CPUIcon />
          </IconButton>
        </Fragment>} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(we=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Se,Ee,Ce;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs absolute selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Ce=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Be,ke,xe;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs absolute bordered menuName="Addons" selected="test3" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(xe=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Ne,Re,Ae;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs actions={{
    onSelect
  }} bordered menuName="Addons" absolute {...args} />
} satisfies Story`,...(Ae=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};const Pt=["StatefulStatic","StatefulStaticWithSetButtonTextColors","StatefulStaticWithSetBackgroundColor","StatefulDynamicWithOpenTooltip","StatefulDynamicWithSelectedAddon","StatefulNoInitial","StatelessBordered","StatelessWithTools","StatelessAbsolute","StatelessAbsoluteBordered","StatelessEmpty"];export{T as StatefulDynamicWithOpenTooltip,q as StatefulDynamicWithSelectedAddon,L as StatefulNoInitial,A as StatefulStatic,I as StatefulStaticWithSetBackgroundColor,W as StatefulStaticWithSetButtonTextColors,O as StatelessAbsolute,P as StatelessAbsoluteBordered,F as StatelessBordered,_ as StatelessEmpty,V as StatelessWithTools,Pt as __namedExportsOrder,Ot as default};
//# sourceMappingURL=tabs.stories-77a797c1.js.map
