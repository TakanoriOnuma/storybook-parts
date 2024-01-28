import{j as n,a as p,F as De}from"./jsx-runtime-31019b9d.js";import{e as z}from"./index-728c6c1a.js";import{r as i,R as Fe}from"./index-9f32f44c.js";import{a as je}from"./chunk-C5H4AMN5-7fdb7c46.js";import{w as Ve,a as U,s as Y,u as ze,b as He,f as Me}from"./index-73c7a0c2.js";import{n as h}from"./index-9e46a6e4.js";import{L as Oe}from"./index-b75c9059.js";import{P as Pe}from"./placeholder-90469012.js";import{T as Q,I as ee}from"./button-a4a4c4f6.js";import{S as Ge}from"./ScrollArea-81e858e3.js";import{u as Ue}from"./bundle.esm-ef1ed2af.js";import{T as Ye}from"./TooltipLinkList-e288dab3.js";import{W as Je}from"./WithTooltip-9caa86c0.js";import{I as te}from"./icon-3829cbd1.js";import"./_commonjsHelpers-de833af9.js";import"./isEqual-8e48f6f6.js";import"./_baseIsEqual-181029ac.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./lz-string-dcfd5c3c.js";import"./index-03bbf7d1.js";import"./uniq-a8f06b6c.js";import"./index-d38bc732.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./index-9ed7e0e5.js";import"./polished.esm-b305131d.js";import"./enums-54c8c3f1.js";import"./index-9c2d1831.js";import"./ListItem-a9f0a965.js";import"./index-eafb6329.js";import"./Tooltip-f5f982a6.js";const k=h.div({display:"flex",whiteSpace:"nowrap",flexBasis:"auto",marginLeft:3,marginRight:3},({scrollable:e})=>e?{flexShrink:0}:{},({left:e})=>e?{"& > *":{marginLeft:4}}:{},({right:e})=>e?{marginLeft:30,"& > *":{marginRight:4}}:{});k.displayName="Side";const Ke=({children:e,className:t,scrollable:a})=>a?n(Ge,{vertical:!1,className:t,children:e}):n("div",{className:t,children:e}),$e=h(Ke)(({theme:e,scrollable:t=!0})=>({color:e.barTextColor,width:"100%",height:40,flexShrink:0,overflow:t?"auto":"hidden",overflowY:"hidden"}),({theme:e,border:t=!1})=>t?{boxShadow:`${e.appBorderColor}  0 -1px 0 0 inset`,background:e.barBg}:{});$e.displayName="Bar";const Qe=h.div(({bgColor:e})=>({display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"nowrap",flexShrink:0,height:40,backgroundColor:e||""})),qe=({children:e,backgroundColor:t,...a})=>{const[r,s]=i.Children.toArray(e);return n($e,{...a,children:p(Qe,{bgColor:t,children:[n(k,{scrollable:a.scrollable,left:!0,children:r}),s?n(k,{right:!0,children:s}):null]})})};qe.displayName="FlexBar";try{k.displayName="Side",k.__docgenInfo={description:"",displayName:"Side",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const H=h.div(({active:e})=>e?{display:"block"}:{display:"none"}),M=e=>i.Children.toArray(e).map(({props:{title:t,id:a,color:r,children:s}})=>{const m=Array.isArray(s)?s[0]:s;return{title:t,id:a,...r?{color:r}:{},render:typeof m=="function"?m:({active:d})=>n(H,{active:d,role:"tabpanel",children:m})}});try{H.displayName="VisuallyHidden",H.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}try{M.displayName="childrenToList",M.__docgenInfo={description:"",displayName:"childrenToList",props:{}}}catch{}const Xe=h.span(({theme:e,isActive:t})=>({display:"inline-block",width:0,height:0,marginLeft:8,color:t?e.color.secondary:e.color.mediumdark,borderRight:"3px solid transparent",borderLeft:"3px solid transparent",borderTop:"3px solid",transition:"transform .1s ease-out"})),Ze=h(Q)(({active:e,theme:t,preActive:a})=>`
    color: ${a||e?t.color.secondary:t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);function J(e){const t=i.useRef(),a=i.useRef(),r=i.useRef(new Map),{width:s=1}=Ue({ref:t}),[m,w]=i.useState(e),[d,G]=i.useState([]),C=i.useRef(e),N=i.useCallback(({menuName:v,actions:B})=>{const x=d.some(({active:c})=>c),[o,l]=i.useState(!1);return p(De,{children:[n(Je,{interactive:!0,visible:o,onVisibleChange:l,placement:"bottom",delayHide:100,tooltip:n(Ye,{links:d.map(({title:c,id:b,color:f,active:g})=>({id:b,title:c,color:f,active:g,onClick:u=>{u.preventDefault(),B.onSelect(b)}}))}),children:p(Ze,{ref:a,active:x,preActive:o,style:{visibility:d.length?"visible":"hidden"},"aria-hidden":!d.length,className:"tabbutton",type:"button",role:"tab",children:[v,n(Xe,{className:"addon-collapsible-icon",isActive:x||o})]})}),d.map(({title:c,id:b,color:f},g)=>{const u=`index-${g}`;return n(Q,{id:`tabbutton-${Oe(b)??u}`,style:{visibility:"hidden"},"aria-hidden":!0,tabIndex:-1,ref:W=>{r.current.set(b,W)},className:"tabbutton",type:"button",textColor:f,role:"tab",children:c},b)})]})},[d]),I=i.useCallback(()=>{if(!t.current||!a.current)return;const{x:v,width:B}=t.current.getBoundingClientRect(),{width:x}=a.current.getBoundingClientRect(),o=d.length?v+B-x:v+B,l=[];let c=0;const b=e.filter(f=>{const{id:g}=f,u=r.current.get(g),{width:W=0}=(u==null?void 0:u.getBoundingClientRect())||{},Z=v+c+W>o;return(!Z||!u)&&l.push(f),c+=W,Z});(l.length!==m.length||C.current!==e)&&(w(l),G(b),C.current=e)},[d.length,e,m]);return i.useLayoutEffect(I,[I,s]),{tabRefs:r,addonsRef:a,tabBarRef:t,visibleList:m,invisibleList:d,AddonTab:N}}try{J.displayName="useList",J.__docgenInfo={description:"",displayName:"useList",props:{}}}catch{}const et="/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",tt=h.div(({theme:e,bordered:t})=>t?{backgroundClip:"padding-box",border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius,overflow:"hidden",boxSizing:"border-box"}:{},({absolute:e})=>e?{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column"}:{display:"block"}),P=h.div({overflow:"hidden","&:first-of-type":{marginLeft:-3},whiteSpace:"nowrap",flexGrow:1});P.displayName="TabBar";const nt=h.div({display:"block",position:"relative"},({theme:e})=>({fontSize:e.typography.size.s2-1,background:e.background.content}),({bordered:e,theme:t})=>e?{borderRadius:`0 0 ${t.appBorderRadius-1}px ${t.appBorderRadius-1}px`}:{},({absolute:e,bordered:t})=>e?{height:`calc(100% - ${t?42:40}px)`,position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:40+(t?1:0),overflow:"auto",[`& > *:first-child${et}`]:{position:"absolute",left:0+(t?1:0),right:0+(t?1:0),bottom:0+(t?1:0),top:0+(t?1:0),height:`calc(100% - ${t?2:0}px)`,overflow:"auto"}}:{}),at=({active:e,render:t,children:a})=>n(H,{active:e,children:t?t():a}),y=i.memo(({children:e,selected:t,actions:a,absolute:r,bordered:s,tools:m,backgroundColor:w,id:d,menuName:G})=>{const C=M(e).map(o=>o.id),N=i.useMemo(()=>M(e).map((o,l)=>({...o,active:t?o.id===t:l===0})),[t,...C]),{visibleList:I,tabBarRef:v,tabRefs:B,AddonTab:x}=J(N);return N.length?p(tt,{absolute:r,bordered:s,id:d,children:[p(qe,{scrollable:!1,border:!0,backgroundColor:w,children:[p(P,{style:{whiteSpace:"normal"},ref:v,role:"tablist",children:[I.map(({title:o,id:l,active:c,color:b},f)=>{const g=`index-${f}`;return n(Q,{id:`tabbutton-${Oe(l)??g}`,ref:u=>{B.current.set(l,u)},className:`tabbutton ${c?"tabbutton-active":""}`,type:"button",active:c,textColor:b,onClick:u=>{u.preventDefault(),a.onSelect(l)},role:"tab",children:typeof o=="function"?n("title",{}):o},l)}),n(x,{menuName:G,actions:a})]}),m]}),n(nt,{id:"panel-tab-content",bordered:s,absolute:r,children:N.map(({id:o,active:l,render:c})=>Fe.createElement(c,{key:o,active:l},null))})]}):n(Pe,{children:n(i.Fragment,{children:"Nothing found"},"title")})});y.displayName="Tabs";y.defaultProps={id:null,children:null,tools:null,selected:null,absolute:!1,bordered:!1,menuName:"Tabs"};class T extends i.Component{constructor(t){super(t),this.handlers={onSelect:a=>this.setState({selected:a})},this.state={selected:t.initial}}render(){const{bordered:t=!1,absolute:a=!1,children:r,backgroundColor:s,menuName:m}=this.props,{selected:w}=this.state;return n(y,{bordered:t,absolute:a,selected:w,backgroundColor:s,menuName:m,actions:this.handlers,children:r})}}T.defaultProps={children:[],initial:null,absolute:!1,bordered:!1,backgroundColor:"",menuName:void 0};try{P.displayName="TabBar",P.__docgenInfo={description:"",displayName:"TabBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const rt=Array.from(new Array(15),(e,t)=>t).map(e=>Math.floor(1/15*e*16777215).toString(16).padStart(6,"0"));function K(e,t){return t||(t={}),t[e]?t[e]:e<=1?1:(t[e]=K(e-1,t)+K(e-2,t),t[e])}const X={test1:{title:"Tab title #1",render:({active:e})=>e?n("div",{id:"test1",children:"CONTENT 1"}):null},test2:{title:"Tab title #2",render:({active:e})=>n("div",{id:"test2",style:{background:"hotpink",minHeight:"100%",display:e?"block":"none"},children:"CONTENT 2"})},test3:{title:"Tab title #3",render:({active:e})=>e?n("div",{id:"test3",children:rt.map((t,a)=>n("div",{style:{background:`#${t}`,height:30+K(a+5)/10}},t))}):null},test4:{title:"Tab title #4",render:({active:e})=>e?n("div",{id:"test4",children:"CONTENT 4"}):null},test5:{title:"Tab title #5",render:({active:e})=>e?n("div",{id:"test5",children:"CONTENT 5"}):null},test6:{title:"Tab title #6",render:({active:e})=>n(at,{active:e,render:()=>n("div",{children:"CONTENT 6"})})}},_=je("onSelect"),A=Object.entries(X).map(([e,t])=>n("div",{id:e,title:t.title,children:t.render},e)),qt={title:"Tabs",args:{menuName:"Addons"}},R={render:e=>p(T,{initial:"test2",...e,children:[n("div",{id:"test1",title:"With a function",children:({active:t,selected:a})=>t?p("div",{children:[a," is selected"]}):null}),n("div",{id:"test2",title:"With markup",children:n("div",{children:"test2 is always active (but visually hidden)"})})]})},E={render:e=>n("div",{children:p(T,{initial:"test2",...e,children:[n("div",{id:"test1",title:"With a function",color:"#e00000",children:({active:t,selected:a})=>t?p("div",{children:[a," is selected"]}):null}),n("div",{id:"test2",title:"With markup",color:"green",children:n("div",{children:"test2 is always active (but visually hidden)"})})]})})},L={render:e=>n("div",{children:p(T,{initial:"test2",backgroundColor:"rgba(0,0,0,.05)",...e,children:[n("div",{id:"test1",title:"With a function",color:"#e00000",children:({active:t,selected:a})=>t?p("div",{children:[a," is selected"]}):null}),n("div",{id:"test2",title:"With markup",color:"green",children:n("div",{children:"test2 is always active (but visually hidden)"})})]})})},it={sized:{name:"Sized",styles:{width:"380px",height:"500px"}}},S={parameters:{viewport:{defaultViewport:"sized",viewports:it},theme:"light",chromatic:{viewports:[380]}},play:async({canvasElement:e})=>{const t=Ve(e);await U(async()=>{await z(t.getAllByRole("tab")).toHaveLength(3),await z(t.getByRole("tab",{name:/Addons/})).toBeInTheDocument()}),await U(async()=>{const a=await t.findByRole("tab",{name:/Addons/}),r=await Y.queryByTestId("tooltip");if(r||await ze.click(a),!r)throw new Error("Tooltip not found");await z(Y.queryByTestId("tooltip")).toBeInTheDocument()})},render:e=>n(T,{initial:"test1",...e,children:Object.entries(X).map(([t,a])=>n("div",{id:t,title:a.title,children:a.render},t))})},V={...S,play:async e=>{await S.play(e);const t=Ve(e.canvasElement);await U(async()=>{const a=await Y.findByTestId("tooltip"),r=await He(a,"Tab title #4",{});Me(r,new MouseEvent("click",{bubbles:!0}));const s=await t.findByText("CONTENT 4");await z(s).toBeVisible()}),await S.play(e)},render:e=>n(T,{initial:"test1",...e,children:Object.entries(X).map(([t,a])=>n("div",{id:t,title:a.title,children:a.render},t))})},O={render:e=>n(T,{...e,children:A})},$={render:e=>n(y,{bordered:!0,absolute:!1,selected:"test3",menuName:"Addons",actions:{onSelect:_},...e,children:A})},q={render:e=>n(y,{bordered:!0,selected:"test3",menuName:"Addons",actions:{onSelect:_},tools:p(i.Fragment,{children:[n(ee,{title:"Tool 1",children:n(te,{icon:"memory"})}),n(ee,{title:"Tool 2",children:n(te,{icon:"cpu"})})]}),...e,children:A})},D={parameters:{layout:"fullscreen"},render:e=>n(y,{absolute:!0,selected:"test3",menuName:"Addons",actions:{onSelect:_},...e,children:A})},F={parameters:{layout:"fullscreen"},render:e=>n(y,{absolute:!0,bordered:!0,menuName:"Addons",selected:"test3",actions:{onSelect:_},...e,children:A})},j={parameters:{layout:"fullscreen"},render:e=>n(y,{actions:{onSelect:_},bordered:!0,menuName:"Addons",absolute:!0,...e})};var ne,ae,re;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,se,oe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,de,ce;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,he,fe;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
          {v.render}
        </div>)}
    </TabsState>
} satisfies Story`,...(fe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,ve,ge;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <TabsState {...args}>{content}</TabsState>
} satisfies Story`,...(ge=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var Se,Te,we;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => <Tabs bordered absolute={false} selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(we=(Te=$.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Be,xe,Ne;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => <Tabs bordered selected="test3" menuName="Addons" actions={{
    onSelect
  }} tools={<Fragment>
          <IconButton title="Tool 1">
            <Icons icon="memory" />
          </IconButton>
          <IconButton title="Tool 2">
            <Icons icon="cpu" />
          </IconButton>
        </Fragment>} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Ne=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var ke,_e,Ae;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs absolute selected="test3" menuName="Addons" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(Ae=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ce,Ie,We;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs absolute bordered menuName="Addons" selected="test3" actions={{
    onSelect
  }} {...args}>
      {content}
    </Tabs>
} satisfies Story`,...(We=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var Re,Ee,Le;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Tabs actions={{
    onSelect
  }} bordered menuName="Addons" absolute {...args} />
} satisfies Story`,...(Le=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};const Dt=["StatefulStatic","StatefulStaticWithSetButtonTextColors","StatefulStaticWithSetBackgroundColor","StatefulDynamicWithOpenTooltip","StatefulDynamicWithSelectedAddon","StatefulNoInitial","StatelessBordered","StatelessWithTools","StatelessAbsolute","StatelessAbsoluteBordered","StatelessEmpty"];export{S as StatefulDynamicWithOpenTooltip,V as StatefulDynamicWithSelectedAddon,O as StatefulNoInitial,R as StatefulStatic,L as StatefulStaticWithSetBackgroundColor,E as StatefulStaticWithSetButtonTextColors,D as StatelessAbsolute,F as StatelessAbsoluteBordered,$ as StatelessBordered,j as StatelessEmpty,q as StatelessWithTools,Dt as __namedExportsOrder,qt as default};
//# sourceMappingURL=tabs.stories-7ceb9218.js.map
