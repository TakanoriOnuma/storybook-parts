import{j as r,a as n,F as $e}from"./jsx-runtime-0f39435c.js";import{e as G}from"./index-7a180320.js";import{r as o}from"./index-6f814c40.js";import{a as qe}from"./chunk-CSVBMRUK-183fa11f.js";import{w as De,a as U,s as H,u as Fe,g as je,f as He}from"./index-1c0ca390.js";import{e as h}from"./index-5a529529.js";import{L as Le}from"./index-569f0cbf.js";import{P as Me}from"./placeholder-a4deec46.js";import{T as J}from"./button-6d4b8a13.js";import{S as ze}from"./ScrollArea-c6c0f0eb.js";import{u as Pe}from"./bundle.esm-5f0471b5.js";import{T as Ge}from"./TooltipLinkList-7729629b.js";import{W as Ue}from"./WithTooltip-2eca3854.js";import"./index-341540c2.js";import"./index-d475d2ea.js";import"./isEqual-09b8ceb9.js";import"./_baseIsEqual-a479ac5d.js";import"./_getTag-17cccba0.js";import"./isObjectLike-dbd718f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./lz-string-475d838e.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./extends-d80d5c28.js";import"./uniq-b081afc0.js";import"./index-a6c8ef6f.js";import"./index-df581bf3.js";import"./index-356e4a49.js";import"./polished.esm-ebce2d70.js";import"./extends-98964cd2.js";import"./enums-54c8c3f1.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./ListItem-915e4942.js";import"./icon-f65261a7.js";import"./index-6de6b113.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-b6572a53.js";import"./Tooltip-13cb3c0b.js";const _=h.div({display:"flex",whiteSpace:"nowrap",flexBasis:"auto",marginLeft:3,marginRight:3},({scrollable:e})=>e?{flexShrink:0}:{},({left:e})=>e?{"& > *":{marginLeft:4}}:{},({right:e})=>e?{marginLeft:30,"& > *":{marginRight:4}}:{});_.displayName="Side";const Ye=({children:e,className:t,scrollable:a})=>a?r(ze,{vertical:!1,className:t,children:e}):r("div",{className:t,children:e}),Ve=h(Ye)(({theme:e,scrollable:t=!0})=>({color:e.barTextColor,width:"100%",height:40,flexShrink:0,overflow:t?"auto":"hidden",overflowY:"hidden"}),({theme:e,border:t=!1})=>t?{boxShadow:`${e.appBorderColor}  0 -1px 0 0 inset`,background:e.barBg}:{});Ve.displayName="Bar";const Ke=h.div(({bgColor:e})=>({display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"nowrap",flexShrink:0,height:40,backgroundColor:e||""})),Ie=({children:e,backgroundColor:t,...a})=>{const[i,d]=o.Children.toArray(e);return r(Ve,{...a,children:n(Ke,{bgColor:t,children:[r(_,{scrollable:a.scrollable,left:!0,children:i}),d?r(_,{right:!0,children:d}):null]})})};Ie.displayName="FlexBar";try{_.displayName="Side",_.__docgenInfo={description:"",displayName:"Side",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const M=h.div(({active:e})=>e?{display:"block"}:{display:"none"}),Je=(e,t)=>o.Children.toArray(e).map(({props:{title:a,id:i,color:d,children:c}},T)=>{const s=Array.isArray(c)?c[0]:c;return{active:t?i===t:T===0,title:a,id:i,color:d,render:typeof s=="function"?s:({active:N,key:f})=>r(M,{active:N,role:"tabpanel",children:s},f)}});try{M.displayName="VisuallyHidden",M.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const Qe=h.span(({theme:e,isActive:t})=>({display:"inline-block",width:0,height:0,marginLeft:8,color:t?e.color.secondary:e.color.mediumdark,borderRight:"3px solid transparent",borderLeft:"3px solid transparent",borderTop:"3px solid",transition:"transform .1s ease-out"})),Xe=h(J)(({active:e,theme:t,preActive:a})=>`
    color: ${a||e?t.color.secondary:t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);function Y(e){const t=o.useRef(),a=o.useRef(),i=o.useRef(new Map),{width:d=1}=Pe({ref:t}),[c,T]=o.useState(e),[s,N]=o.useState([]),f=o.useRef(e),P=o.useCallback(({menuName:w,actions:B})=>{const y=s.some(({active:u})=>u),[l,p]=o.useState(!1);return n($e,{children:[r(Ue,{interactive:!0,visible:l,onVisibleChange:p,placement:"bottom",delayHide:100,tooltip:r(Ge,{links:s.map(({title:u,id:m,color:v,active:b})=>({id:m,title:u,color:v,active:b,onClick:g=>{g.preventDefault(),B.onSelect(m)}}))}),children:n(Xe,{ref:a,active:y,preActive:l,style:{visibility:s.length?"visible":"hidden"},"aria-hidden":!s.length,className:"tabbutton",type:"button",role:"tab",children:[w,r(Qe,{className:"addon-collapsible-icon",isActive:y||l})]})}),s.map(({title:u,id:m,color:v},b)=>{const g=`index-${b}`;return r(J,{id:`tabbutton-${Le(m)??g}`,style:{visibility:"hidden"},"aria-hidden":!0,tabIndex:-1,ref:R=>{i.current.set(m,R)},className:"tabbutton",type:"button",textColor:v,role:"tab",children:u},m)})]})},[s]),W=o.useCallback(()=>{if(!t.current||!a.current)return;const{x:w,width:B}=t.current.getBoundingClientRect(),{width:y}=a.current.getBoundingClientRect(),l=s.length?w+B-y:w+B,p=[];let u=0;const m=e.filter(v=>{const{id:b}=v,g=i.current.get(b),{width:R=0}=(g==null?void 0:g.getBoundingClientRect())||{},X=w+u+R>l;return(!X||!g)&&p.push(v),u+=R,X});(p.length!==c.length||f.current!==e)&&(T(p),N(m),f.current=e)},[s.length,e,c]);return o.useLayoutEffect(W,[W,d]),{tabRefs:i,addonsRef:a,tabBarRef:t,visibleList:c,invisibleList:s,AddonTab:P}}try{Y.displayName="useList",Y.__docgenInfo={description:"",displayName:"useList",props:{}}}catch{}const Ze="/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",et=h.div(({theme:e,bordered:t})=>t?{backgroundClip:"padding-box",border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius,overflow:"hidden",boxSizing:"border-box"}:{},({absolute:e})=>e?{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column"}:{display:"block"}),z=h.div({overflow:"hidden","&:first-of-type":{marginLeft:-3},whiteSpace:"nowrap",flexGrow:1});z.displayName="TabBar";const tt=h.div({display:"block",position:"relative"},({theme:e})=>({fontSize:e.typography.size.s2-1,background:e.background.content}),({bordered:e,theme:t})=>e?{borderRadius:`0 0 ${t.appBorderRadius-1}px ${t.appBorderRadius-1}px`}:{},({absolute:e,bordered:t})=>e?{height:`calc(100% - ${t?42:40}px)`,position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:40+(t?1:0),overflow:"auto",[`& > *:first-child${Ze}`]:{position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:0+(t?1:0),height:`calc(100% - ${t?2:0}px)`,overflow:"auto"}}:{}),rt=({active:e,render:t,children:a})=>r(M,{active:e,children:t?t():a}),S=o.memo(({children:e,selected:t,actions:a,absolute:i,bordered:d,tools:c,backgroundColor:T,id:s,menuName:N})=>{const f=o.useMemo(()=>Je(e,t),[e,t]),{visibleList:P,tabBarRef:W,tabRefs:w,AddonTab:B}=Y(f);return f.length?n(et,{absolute:i,bordered:d,id:s,children:[n(Ie,{scrollable:!1,border:!0,backgroundColor:T,children:[n(z,{style:{whiteSpace:"normal"},ref:W,role:"tablist",children:[P.map(({title:y,id:l,active:p,color:u},m)=>{const v=`index-${m}`;return r(J,{id:`tabbutton-${Le(l)??v}`,ref:b=>{w.current.set(l,b)},className:`tabbutton ${p?"tabbutton-active":""}`,type:"button",active:p,textColor:u,onClick:b=>{b.preventDefault(),a.onSelect(l)},role:"tab",children:y},l)}),r(B,{menuName:N,actions:a})]}),c]}),r(tt,{id:"panel-tab-content",bordered:d,absolute:i,children:f.map(({id:y,active:l,render:p})=>p({key:y,active:l}))})]}):r(Me,{children:r(o.Fragment,{children:"Nothing found"},"title")})});S.displayName="Tabs";S.defaultProps={id:null,children:null,tools:null,selected:null,absolute:!1,bordered:!1,menuName:"Tabs"};class x extends o.Component{constructor(t){super(t),this.handlers={onSelect:a=>this.setState({selected:a})},this.state={selected:t.initial}}render(){const{bordered:t=!1,absolute:a=!1,children:i,backgroundColor:d,menuName:c}=this.props,{selected:T}=this.state;return r(S,{bordered:t,absolute:a,selected:T,backgroundColor:d,menuName:c,actions:this.handlers,children:i})}}x.defaultProps={children:[],initial:null,absolute:!1,bordered:!1,backgroundColor:"",menuName:void 0};try{z.displayName="TabBar",z.__docgenInfo={description:"",displayName:"TabBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const{logger:Z}=__STORYBOOK_MODULE_CLIENT_LOGGER__,at=Array.from(new Array(15),(e,t)=>t).map(e=>Math.floor(1/15*e*16777215).toString(16).padStart(6,"0"));function K(e,t){return t||(t={}),t[e]?t[e]:e<=1?1:(t[e]=K(e-1,t)+K(e-2,t),t[e])}const Q={test1:{title:"Tab title #1",render:({active:e,key:t})=>e?r("div",{id:"test1",children:"CONTENT 1"},t):null},test2:{title:"Tab title #2",render:({active:e,key:t})=>r("div",{id:"test2",style:{background:"hotpink",minHeight:"100%",display:e?"block":"none"},children:"CONTENT 2"},t)},test3:{title:"Tab title #3",render:({active:e,key:t})=>e?r("div",{id:"test3",children:at.map((a,i)=>r("div",{style:{background:`#${a}`,height:30+K(i+5)/10}},a))},t):null},test4:{title:"Tab title #4",render:({active:e,key:t})=>e?r("div",{id:"test4",children:"CONTENT 4"},t):null},test5:{title:"Tab title #5",render:({active:e,key:t})=>e?r("div",{id:"test5",children:"CONTENT 5"},t):null},test6:{title:"Tab title #6",render:({active:e,key:t})=>r(rt,{active:e,render:()=>r("div",{children:"CONTENT 6"})},t)}},C=qe("onSelect"),A=Object.entries(Q).map(([e,t])=>r("div",{id:e,title:t.title,children:t.render},e)),Mt={title:"Tabs",decorators:[e=>r("div",{style:{position:"relative",height:"calc(100vh - 20px)",width:"calc(100vw - 20px)",margin:10},children:e()})],args:{menuName:"Addons"}},E={render:e=>n(x,{initial:"test2",...e,children:[r("div",{id:"test1",title:"With a function",children:({active:t,selected:a})=>t?n("div",{children:[a," is selected"]}):null}),r("div",{id:"test2",title:"With markup",children:r("div",{children:"test2 is always active (but visually hidden)"})})]})},L={render:e=>r("div",{children:n(x,{initial:"test2",...e,children:[r("div",{id:"test1",title:"With a function",color:"#e00000",children:({active:t,selected:a})=>t?n("div",{children:[a," is selected"]}):null}),r("div",{id:"test2",title:"With markup",color:"green",children:r("div",{children:"test2 is always active (but visually hidden)"})})]})})},V={render:e=>r("div",{children:n(x,{initial:"test2",backgroundColor:"rgba(0,0,0,.05)",...e,children:[r("div",{id:"test1",title:"With a function",color:"#e00000",children:({active:t,selected:a})=>t?n("div",{children:[a," is selected"]}):null}),r("div",{id:"test2",title:"With markup",color:"green",children:r("div",{children:"test2 is always active (but visually hidden)"})})]})})},Oe={chromatic:{name:"Chromatic",styles:{width:"380px",height:"963px"}}},k={parameters:{viewport:{defaultViewport:"chromatic",viewports:Oe},chromatic:{viewports:[380]}},play:async({canvasElement:e})=>{const t=De(e);await U(async()=>{await G(t.getAllByRole("tab")).toHaveLength(3),await G(t.getByRole("tab",{name:/Addons/})).toBeInTheDocument()});const a=await t.findByRole("tab",{name:/Addons/});await U(async()=>{const i=await H.queryByTestId("tooltip");if(i||await Fe.click(a),!i)throw new Error("Tooltip not found")}),G(H.queryByTestId("tooltip")).toBeInTheDocument()},render:e=>r(x,{initial:"test1",...e,children:Object.entries(Q).map(([t,a])=>r("div",{id:t,title:a.title,children:a.render},t))})},I={parameters:{viewport:{defaultViewport:"chromatic",viewports:Oe},chromatic:{viewports:[380]}},play:async e=>{await k.play(e);const t=H.getByTestId("tooltip"),a=je(t,"Tab title #4",{});He(a,new MouseEvent("click",{bubbles:!0})),await U(()=>H.getByText("CONTENT 4")),await k.play(e)},render:e=>r(x,{initial:"test1",...e,children:Object.entries(Q).map(([t,a])=>r("div",{id:t,title:a.title,children:a.render},t))})},O={render:e=>r(x,{...e,children:A})},$={render:e=>r(S,{bordered:!0,absolute:!1,selected:"test3",menuName:"Addons",actions:{onSelect:C},...e,children:A})},q={render:e=>r(S,{selected:"test3",menuName:"Addons",actions:{onSelect:C},tools:n(o.Fragment,{children:[r("button",{type:"button",onClick:()=>Z.log("1"),children:"1"}),r("button",{type:"button",onClick:()=>Z.log("2"),children:"2"})]}),...e,children:A})},D={render:e=>r(S,{absolute:!0,selected:"test3",menuName:"Addons",actions:{onSelect:C},...e,children:A})},F={render:e=>r(S,{absolute:!0,bordered:!0,menuName:"Addons",selected:"test3",actions:{onSelect:C},...e,children:A})},j={render:e=>r(S,{actions:{onSelect:C},bordered:!0,menuName:"Addons",absolute:!0,...e})};var ee,te,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <TabsState initial="test2" {...args}>
      <div id="test1" title="With a function">
        {({
        active,
        selected
      }: {
        active: boolean;
        selected: string;
      }) => active ? <div>{selected} is selected</div> : null}
      </div>
      <div id="test2" title="With markup">
        <div>test2 is always active (but visually hidden)</div>
      </div>
    </TabsState>
} satisfies Story`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ie,oe;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <div>
      <TabsState initial="test2" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {({
          active,
          selected
        }: {
          active: boolean;
          selected: string;
        }) => active ? <div>{selected} is selected</div> : null}
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
} satisfies Story`,...(oe=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,ne,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <div>
      <TabsState initial="test2" backgroundColor="rgba(0,0,0,.05)" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {({
          active,
          selected
        }: {
          active: boolean;
          selected: string;
        }) => active ? <div>{selected} is selected</div> : null}
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
} satisfies Story`,...(le=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var de,ce,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'chromatic',
      viewports: customViewports
    },
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
    const addonsTab = await canvas.findByRole('tab', {
      name: /Addons/
    });
    await waitFor(async () => {
      const tooltip = await screen.queryByTestId('tooltip');
      if (!tooltip) {
        await userEvent.click(addonsTab);
      }
      if (!tooltip) {
        throw new Error('Tooltip not found');
      }
    });
    expect(screen.queryByTestId('tooltip')).toBeInTheDocument();
  },
  render: args => <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => <div key={k} id={k} title={v.title}>
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,be;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'chromatic',
      viewports: customViewports
    },
    chromatic: {
      viewports: [380]
    }
  },
  play: async context => {
    await StatefulDynamicWithOpenTooltip.play(context);
    const popperContainer = screen.getByTestId('tooltip');
    const tab4 = getByText(popperContainer, 'Tab title #4', {});
    fireEvent(tab4, new MouseEvent('click', {
      bubbles: true
    }));
    await waitFor(() => screen.getByText('CONTENT 4'));

    // reopen the tooltip
    await StatefulDynamicWithOpenTooltip.play(context);
  },
  render: args => <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => <div key={k} id={k} title={v.title}>
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var he,fe,ye;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <TabsState {...args}>{content}</TabsState>
} satisfies Story`,...(ye=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,ge,Se;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <Tabs bordered absolute={false} selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Se=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var Te,we,xe;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <Tabs selected="test3" menuName="Addons" actions={{
    onSelect
  }} tools={<Fragment>
          <button type="button" onClick={() => logger.log('1')}>
            1
          </button>
          <button type="button" onClick={() => logger.log('2')}>
            2
          </button>
        </Fragment>} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(xe=(we=q.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Be,ke,Ne;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => <Tabs absolute selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Ne=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var _e,Ce,Ae;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: args => <Tabs absolute bordered menuName="Addons" selected="test3" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Ae=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var We,Re,Ee;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: args => <Tabs actions={{
    onSelect
  }} bordered menuName="Addons" absolute {...args} />
} satisfies Story`,...(Ee=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};const zt=["StatefulStatic","StatefulStaticWithSetButtonTextColors","StatefulStaticWithSetBackgroundColor","StatefulDynamicWithOpenTooltip","StatefulDynamicWithSelectedAddon","StatefulNoInitial","StatelessBordered","StatelessWithTools","StatelessAbsolute","StatelessAbsoluteBordered","StatelessEmpty"];export{k as StatefulDynamicWithOpenTooltip,I as StatefulDynamicWithSelectedAddon,O as StatefulNoInitial,E as StatefulStatic,V as StatefulStaticWithSetBackgroundColor,L as StatefulStaticWithSetButtonTextColors,D as StatelessAbsolute,F as StatelessAbsoluteBordered,$ as StatelessBordered,j as StatelessEmpty,q as StatelessWithTools,zt as __namedExportsOrder,Mt as default};
//# sourceMappingURL=tabs.stories-b303abcb.js.map
